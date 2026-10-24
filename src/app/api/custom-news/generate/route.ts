import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import OpenAI from "openai";
import dbConnect from "@/lib/dbConnect";
import { CustomNews } from "@/lib/models";
import { sanitizeHtml, slugify } from "@/lib/sanitizeHtml";

export const dynamic = "force-dynamic";
export const revalidate = 0;
export const maxDuration = 300;

const PRIMARY_MODEL = "gpt-6.1-sol";
const HELPER_MODEL = "gpt-6-luna";
// Below this many characters of admin-supplied text we treat the input as a topic/headline
// and research the real news with web search so the article has full factual depth.
const MIN_SOURCE_CHARS = 1800;
const MIN_TARGET_WORDS = 1150;
const MAX_URLS = 4;
const MAX_FETCHED_CHARS = 30000;

const sanitizeText = (txt: string) =>
  (txt || "")
    .replace(/\u2014/g, "-")
    .replace(/\u2013/g, "-")
    .replace(/—/g, "-")
    .replace(/&amp;amp;/g, "&")
    .replace(/&#x27;/g, "'")
    .replace(/&quot;/g, '"');

const stripHtmlToText = (html: string) =>
  html
    .replace(/<(script|style|noscript|svg|nav|footer|header|aside)\b[\s\S]*?<\/\1>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/gi, " ")
    .replace(/&amp;/gi, "&")
    .replace(/&quot;/gi, '"')
    .replace(/&#39;/gi, "'")
    .replace(/&#x27;/gi, "'")
    .replace(/\s+/g, " ")
    .trim();

/**
 * Extracts structured article content from JSON-LD (<script type="application/ld+json">)
 * used by Bar & Bench, LiveLaw, Indian Express, The Hindu, etc., before scripts are stripped.
 */
function extractJsonLdArticle(html: string): string {
  const blocks: string[] = [];
  const regex = /<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi;
  let match: RegExpExecArray | null;

  const inspectNode = (node: any) => {
    if (!node || typeof node !== "object") return;
    if (Array.isArray(node)) {
      node.forEach(inspectNode);
      return;
    }
    if (node["@graph"] && Array.isArray(node["@graph"])) {
      node["@graph"].forEach(inspectNode);
    }
    const type = String(node["@type"] || "").toLowerCase();
    if (
      type.includes("article") ||
      type.includes("newsarticle") ||
      type.includes("reportage") ||
      node.articleBody
    ) {
      const headline = node.headline || node.name || "";
      const description = node.description || "";
      const author = Array.isArray(node.author)
        ? node.author.map((a: any) => a?.name || a).filter(Boolean).join(", ")
        : node.author?.name || "";
      const datePublished = node.datePublished || "";
      const section = node.articleSection || "";
      const body = node.articleBody || "";
      if (body || headline) {
        blocks.push(
          [
            headline && `HEADLINE: ${stripHtmlToText(String(headline))}`,
            description && `SUBHEADLINE / STANDFIRST: ${stripHtmlToText(String(description))}`,
            author && `AUTHOR: ${stripHtmlToText(String(author))}`,
            datePublished && `PUBLISHED: ${datePublished}`,
            section && `SECTION: ${section}`,
            body && `FULL ARTICLE BODY:\n${stripHtmlToText(String(body))}`,
          ]
            .filter(Boolean)
            .join("\n")
        );
      }
    }
  };

  while ((match = regex.exec(html)) !== null) {
    try {
      const parsed = JSON.parse(match[1].trim());
      inspectNode(parsed);
    } catch {
      // Ignore malformed JSON-LD blocks
    }
  }

  return blocks.join("\n\n");
}

const isPrivateHost = (hostname: string) => {
  const h = hostname.toLowerCase();
  return (
    h === "localhost" ||
    h.endsWith(".local") ||
    h.endsWith(".internal") ||
    /^127\./.test(h) ||
    /^10\./.test(h) ||
    /^192\.168\./.test(h) ||
    /^169\.254\./.test(h) ||
    /^172\.(1[6-9]|2\d|3[01])\./.test(h) ||
    h === "0.0.0.0" ||
    h === "[::1]"
  );
};

async function fetchArticleText(url: string): Promise<string | null> {
  try {
    const parsed = new URL(url);
    if (!/^https?:$/.test(parsed.protocol) || isPrivateHost(parsed.hostname)) return null;

    const res = await fetch(url, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",
        Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
      },
      signal: AbortSignal.timeout(15000),
      redirect: "follow",
    });
    if (!res.ok) return null;
    const html = await res.text();
    const title = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1]?.trim() || "";
    const metaDesc =
      html.match(/<meta[^>]*name=["']description["'][^>]*content=["']([^"']*)["']/i)?.[1] ||
      html.match(/<meta[^>]*property=["']og:description["'][^>]*content=["']([^"']*)["']/i)?.[1] ||
      "";
    const jsonLdText = extractJsonLdArticle(html);
    const bodyText = stripHtmlToText(html).slice(0, MAX_FETCHED_CHARS);

    const combined = [
      `SOURCE URL: ${url}`,
      title && `PAGE TITLE: ${stripHtmlToText(title)}`,
      metaDesc && `META DESCRIPTION: ${stripHtmlToText(metaDesc)}`,
      jsonLdText && `STRUCTURED ARTICLE DATA:\n${jsonLdText}`,
      bodyText && `PAGE TEXT:\n${bodyText}`,
    ]
      .filter(Boolean)
      .join("\n\n");

    if (combined.length < 300) return null;
    return combined.slice(0, MAX_FETCHED_CHARS + 8000);
  } catch {
    return null;
  }
}

const countWords = (html: string) =>
  (html || "")
    .replace(/<[^>]*>/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .split(" ")
    .filter(Boolean).length;

const stripCodeFences = (raw: string) => {
  let out = (raw || "").trim();
  if (out.startsWith("```html")) out = out.slice(7).trim();
  else if (out.startsWith("```")) out = out.slice(3).trim();
  if (out.endsWith("```")) out = out.slice(0, -3).trim();
  return out;
};

export async function POST(request: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session || session.user?.email !== process.env.ADMIN_EMAIL) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const apiKey = process.env.HELLO_DROP_CHOO;
  if (!apiKey) {
    return NextResponse.json(
      { error: "OpenAI API configuration secret (HELLO_DROP_CHOO) is not set." },
      { status: 500 }
    );
  }

  const openai = new OpenAI({ apiKey });

  try {
    const body = await request.json();
    const writeup: string = typeof body.writeup === "string" ? body.writeup.trim() : "";

    if (!writeup) {
      return NextResponse.json({ error: "Writeup or Context is required" }, { status: 400 });
    }

    const today = new Date().toLocaleDateString("en-IN", {
      day: "numeric",
      month: "long",
      year: "numeric",
      timeZone: "Asia/Kolkata",
    });

    // ------------------------------------------------------------------
    // STEP 1: Collect real source material (pasted text + linked pages + web search)
    // ------------------------------------------------------------------
    const urls = Array.from(new Set(writeup.match(/https?:\/\/[^\s<>"')]+/g) || [])).slice(0, MAX_URLS);
    const userText = writeup.replace(/https?:\/\/[^\s<>"')]+/g, " ").replace(/\s+/g, " ").trim();

    console.log(
      `[AI News Generator] Step 1: collecting source material (${urls.length} url(s), ${userText.length} chars of text)...`
    );

    const fetchedResults = await Promise.all(urls.map(fetchArticleText));
    const fetchedPages = fetchedResults.filter(Boolean) as string[];
    const sources: string[] = urls.filter((_, i) => !!fetchedResults[i]);

    let sourceMaterial = "";
    let mode: "provided" | "researched" = "provided";

    const providedChars = userText.length + fetchedPages.reduce((n, p) => n + p.length, 0);

    if (providedChars >= MIN_SOURCE_CHARS) {
      sourceMaterial = [userText && `ADMIN-PROVIDED TEXT:\n${userText}`, ...fetchedPages]
        .filter(Boolean)
        .join("\n\n---\n\n");
    } else {
      // Topic / headline / short note or unscrapable link: compile an exhaustive research dossier via web search
      mode = "researched";
      console.log("[AI News Generator] Researching comprehensive legal news dossier with web search...");

      const research = await openai.responses.create({
        model: PRIMARY_MODEL,
        reasoning: { effort: "low" },
        tools: [
          {
            type: "web_search_preview",
            search_context_size: "high",
            user_location: { type: "approximate", country: "IN", timezone: "Asia/Kolkata" },
          },
        ],
        tool_choice: "required",
        input: [
          {
            role: "system",
            content: `You are the Senior Legal Research Desk for AMA Connect, an Indian legal news publication modelled on Bar & Bench and LiveLaw. Today's date is ${today}.
Use web search to find the ACTUAL, specific news reports, court orders, interviews, or legal developments about the topic/link provided by the editor. Prefer authoritative sources: Bar & Bench, LiveLaw, SCC Online, Supreme Court / High Court official portals, The Hindu, Indian Express, Economic Times, Business Standard, PTI/ANI, PIB, and official regulatory filings.

Compile an EXHAUSTIVE, LONG-FORM RESEARCH DOSSIER (aim for 800-1,500 words of detailed factual notes) organized under these headings:
1. HEADLINE EVENT / CORE DEVELOPMENT: Exact court/authority/firm, bench/coram, case title or interviewee/personalities, date, and core ruling or announcement.
2. VERBATIM QUOTES, JUDICIAL OBSERVATIONS & EXCHANGES: Every direct quote, judicial observation, order excerpt, or interview question-and-answer point reported across the sources. Preserve exact wording inside quotation marks with speaker attribution.
3. FACTUAL MATRIX & CHRONOLOGY: Complete sequence of events, dates, transaction figures, lower court / tribunal history, or career/firm milestones leading up to this news.
4. SUBMISSIONS, ARGUMENTS & KEY THEMES: Detailed breakdown of arguments by petitioners, respondents, senior advocates, or the thematic insights shared by the featured legal personality.
5. STATUTORY, CONSTITUTIONAL & REGULATORY FRAMEWORK: Specific Acts, sections, articles, bilateral treaties, SEBI/RBI/IBC/ECB rules, or landmark judicial precedents involved and how they apply.
6. OUTCOME, OPERATIVE DIRECTIONS & APPEARANCES: Final directions, next steps, and names of Senior Advocates, counsels, and law firms appearing for the parties.

Rules:
- Report ONLY verifiable facts from the sources found. Never invent fake case numbers, fake names, or fabricated quotes.
- If you cannot find any actual news report or verifiable legal topic matching the query, reply with exactly: NO_NEWS_FOUND`,
          },
          {
            role: "user",
            content: `Topic / headline / link to research thoroughly: ${userText || writeup}${
              fetchedPages.length ? `\n\nExtracted page content:\n${fetchedPages.join("\n\n")}` : ""
            }`,
          },
        ],
      });

      const notes = (research.output_text || "").trim();
      if (!notes || (/NO_NEWS_FOUND/i.test(notes) && providedChars < 200)) {
        return NextResponse.json(
          {
            error:
              "No actual news report could be found for this topic. Paste the real article text or a link to the news report and try again.",
          },
          { status: 422 }
        );
      }

      for (const item of research.output || []) {
        if (item.type === "message") {
          for (const part of item.content || []) {
            if (part.type === "output_text") {
              for (const ann of part.annotations || []) {
                if (ann.type === "url_citation" && ann.url) {
                  const clean = ann.url.replace(/[?&]utm_[^&]+/g, "");
                  if (!sources.includes(clean)) sources.push(clean);
                }
              }
            }
          }
        }
      }

      sourceMaterial = [
        notes && `RESEARCH DOSSIER (from web search, ${today}):\n${notes}`,
        userText && `ADMIN-PROVIDED TEXT:\n${userText}`,
        ...fetchedPages,
      ]
        .filter(Boolean)
        .join("\n\n---\n\n");
    }

    // ------------------------------------------------------------------
    // STEP 2A: Generate Bar & Bench Style Metadata, Category & Section Outline
    // ------------------------------------------------------------------
    console.log(`[AI News Generator] Step 2A: generating Bar & Bench style metadata & outline with ${HELPER_MODEL} (mode: ${mode})...`);

    const metaCompletion = await openai.chat.completions.create({
      model: HELPER_MODEL,
      reasoning_effort: "low",
      response_format: { type: "json_object" },
      messages: [
        {
          role: "system",
          content: `You are the Managing Editor of AMA Connect (https://www.amaconnect.in/), an Indian legal journalism platform whose editorial style is modelled directly on Bar & Bench (barandbench.com). Today's date is ${today}.

Analyze the SOURCE MATERIAL and produce the editorial metadata and a 6-to-8 section outline for a comprehensive, publication-grade legal news or feature article.

Determine the "articleType":
- "interview_feature": If the source material is an interview, Q&A, conversation, profile, or law firm / partner strategy feature (e.g., Bar & Bench's Interviews or Law Firms features).
- "court_news": If the source material reports on a Supreme Court, High Court, Tribunal, or foreign/international court order, judgment, hearing, or petition/PIL.
- "corporate_regulatory": If the source material covers law firm deals, mergers, SEBI/RBI/CCI/government notifications, legislation, or policy developments.

BAR & BENCH HEADLINE & STANDFIRST CONVENTIONS:
- "title": Craft a sharp, authoritative Bar & Bench style headline (70 to 110 characters):
  * For interviews/features or striking judicial remarks: Lead with a compelling direct quote or core statement followed by a colon and attribution (e.g., "We're not dabbling in India, we've been committed for decades: A&O Shearman's Pallavi Gopinath Aney" or "SEM notice asking Neha Bora to sign peace bond not based on mere hearsay: Delhi High Court").
  * For rulings, pleas, or corporate news: Use crisp active voice naming the Court/Institution and exact legal action (e.g., "UK Court of Appeal rejects India's challenge to arbitration over Andhra Pradesh bauxite project").
- "description": A 2-sentence Bar & Bench style subheadline / standfirst (160 to 260 characters) that captures the key hook, bench/speaker, and core legal or strategic takeaway.
- "slug": Clean URL-friendly kebab-case slug.
- "categories": Array of 2 to 3 matching categories chosen strictly from: ["All", "Legal Updates", "Supreme Court", "High Court", "Legislation", "Corporate", "Criminal"]. Always include "All".
- "outline": An array of 6 to 8 specific, vivid, journalistic <h2> headings that map out the entire story in depth. Never use generic one-word headings like "Introduction" or "Conclusion".
- "insufficient": Set to true ONLY if the source material is completely empty, gibberish, or contains no identifiable legal/news subject.

CRITICAL: Never use em dashes (—). Use normal hyphens (-), colons, or commas.

Return ONLY this JSON object:
{
  "insufficient": false,
  "reason": "",
  "articleType": "court_news | interview_feature | corporate_regulatory",
  "title": "...",
  "description": "...",
  "slug": "...",
  "categories": ["All", "..."],
  "outline": ["Heading 1", "Heading 2", "Heading 3", "Heading 4", "Heading 5", "Heading 6", "Heading 7"]
}`,
        },
        { role: "user", content: `SOURCE MATERIAL:\n\n${sourceMaterial}` },
      ],
    } as any);

    let parsedMeta: any;
    try {
      parsedMeta = JSON.parse(metaCompletion.choices[0].message.content || "{}");
    } catch {
      return NextResponse.json({ error: "The AI returned an invalid metadata response. Please try again." }, { status: 502 });
    }

    if (parsedMeta.insufficient) {
      return NextResponse.json(
        {
          error: `Not enough real news information to write an article${
            parsedMeta.reason ? `: ${sanitizeText(String(parsedMeta.reason))}` : "."
          } Paste the actual article text or a link and try again.`,
        },
        { status: 422 }
      );
    }

    const articleType = parsedMeta.articleType || "court_news";
    const outline: string[] = Array.isArray(parsedMeta.outline) && parsedMeta.outline.length >= 5
      ? parsedMeta.outline
      : [
          "The Core Development and Key Legal Takeaways",
          "Factual Background and Chronology of Events",
          "Key Submissions, Arguments, and Strategic Insights",
          "Verbatim Observations and Critical Highlights",
          "Statutory Framework and Regulatory Context",
          "Implications, Institutional Impact, and the Road Ahead",
        ];

    // ------------------------------------------------------------------
    // STEP 2B: Write the Full 1,200-1,800+ Word Bar & Bench Style HTML Article
    // ------------------------------------------------------------------
    console.log(
      `[AI News Generator] Step 2B: writing exhaustive Bar & Bench style HTML article with ${PRIMARY_MODEL} (type: ${articleType}, sections: ${outline.length})...`
    );

    const step2BSystemPrompt = `You are a Senior Legal Correspondent and Feature Editor at AMA Connect (https://www.amaconnect.in/), writing in the signature editorial style of Bar & Bench (barandbench.com). Today's date is ${today}.

Your task is to write a comprehensive, authoritative, publication-ready legal news / feature article in RAW HTML based on the SOURCE MATERIAL.
Return ONLY raw semantic HTML. Do NOT wrap it in JSON or markdown code fences. Start directly with the first <p> tag.

================================================================================
SIGNATURE BAR & BENCH EDITORIAL STYLE & STRUCTURE (MANDATORY):
================================================================================
1. **MINIMUM LENGTH: 1,300 to 1,800+ WORDS**:
   - You MUST write an exhaustive, in-depth article of AT LEAST 1,300 words (target 1,400-1,800 words). A short 300-500 word summary is UNACCEPTABLE.
   - Unpack every single fact, argument, exchange, date, figure, quote, and legal principle present in the source material, and provide thorough legal, statutory, procedural, and institutional context so the reader gets a complete, authoritative long-form read.

2. **OPENING LEDE / SCENE-SETTER (Before the first <h2>)**:
   - Write 3 to 4 crisp opening paragraphs before the first <h2> heading:
     * **If Court / Litigation / Regulatory News ("court_news" or "corporate_regulatory")**:
       - Paragraph 1: State the Court/Tribunal/Authority, the core ruling/plea/action, and the immediate outcome in one or two punchy sentences (e.g., "<p>The <strong>Supreme Court of India</strong> / <strong>Court of Appeal</strong> has ruled that...</p>").
       - Paragraph 2: Identify the Bench/Coram ("<p>A Bench comprising <strong>Justices ...</strong> held that...</p>"), the case title or petitioner/parties, and the procedural posture.
       - Paragraph 3: Summarize the core legal ratio or controversy at the heart of the matter.
     * **If Interview / Law Firm / Legal Market Feature ("interview_feature", like Bar & Bench's flagship interviews)**:
       - Paragraph 1: Open with a vivid, concrete scene-setter anchored by hard numbers, deal/litigation volume, and milestones from the source (e.g., "<p>Between July and September this year, <strong>Pallavi Gopinath Aney's</strong> team completed four IPOs, filed seven documents, closed three debt deals and two QIPs...</p>").
       - Paragraph 2: Highlight the subject's tenure, leadership roles (e.g., Global Board membership, practice co-chair, senior designation), and recent milestones.
       - Paragraph 3: Set up the editorial scope of the conversation/feature: what key themes, market shifts, regulatory changes, and personal reflections are covered.

3. **KEY HIGHLIGHTS SNAPSHOT**:
   - Immediately after the opening lede, include a structured highlights section:
     <h3>Key Highlights</h3>
     <ul>
       <li><strong>Core Point:</strong> Crisp 1-2 sentence summary of the first major takeaway.</li>
       ... (4 to 5 bullet points covering the most important facts/quotes)
     </ul>

4. **THEMATIC SECTIONS (FOLLOW ALL ${outline.length} <h2> HEADINGS IN ORDER)**:
   - Use every heading from the outline below as an <h2> tag, and write **3 to 5 paragraphs (200-300 words) per <h2> section**:
     ${outline.map((h, idx) => `Section ${idx + 1}: <h2>${h}</h2>`).join("\n     ")}
   - **Bar & Bench Paragraph Pacing**: Keep individual paragraphs crisp and readable (2 to 4 sentences per <p> tag), using multiple paragraphs per section rather than a single wall of text.
   - **For Interviews / Features ("interview_feature")**:
     * Combine rich third-person editorial narrative with Bar & Bench's signature bolded question/topic prompts (<p><strong>On [Topic / Question]:</strong></p>) followed by detailed multi-paragraph responses and direct quotes.
     * Cover every single question, anecdote, deal metric, firm strategy point, co-chair/leadership dynamic, regulatory observation (e.g., ECB framework, FCNR window, startup ecosystem, IPOs/QIPs), advice to young lawyers, and personal pursuits mentioned in the source.
   - **For Court / Litigation / Regulatory News ("court_news" or "corporate_regulatory")**:
     * Thoroughly detail the factual chronology, lower court/tribunal history, exact contentions of the petitioner/appellant and respondent, the Court's step-by-step legal reasoning, and the relevant statutory/constitutional/treaty framework.
     * End the final section with the operative directions / next steps and, if counsel or law firm names appear in the source, a Bar & Bench-style **Appearances / Counsel Representation** paragraph (e.g., "<p><strong>Appearances:</strong> [Party] was represented by...</p>").

5. **VERBATIM QUOTES & JUDICIAL OBSERVATIONS IN <blockquote> (3 TO 5 QUOTES)**:
   - Whenever the source contains direct quotes from the interviewee, judges, order text, or plea, feature the most impactful ones inside <blockquote><p>"..."</p></blockquote> tags, attributed clearly in the surrounding paragraph.

6. **FACTUAL INTEGRITY + RICH LEGAL CONTEXT**:
   - Every specific name, judge, court, case number, date, figure, and direct quotation MUST come from the source material. Never fabricate quotes, case numbers, or party names.
   - To achieve full Bar & Bench depth (1,300-1,800 words), DO elaborate thoroughly on every detail in the source material and explain the broader legal, statutory, regulatory, and institutional context of the Acts, treaties, court procedures, or market trends discussed in the source.

7. **STRICT JOURNALISTIC NEUTRALITY & PLATFORM RULES (MANDATORY)**:
   - AMA Connect is an independent legal news, lawyer interview, and community app. It is NOT a law firm and does NOT sell legal services or provide legal representation.
   - NEVER write that readers can "contact AMA Connect's advocates", "consult an expert advocate on AMA Connect", or hire AMA Connect for legal advice or representation.
   - Do NOT insert promotional sentences, self-referential mentions of AMA Connect, or artificial call-to-action links inside the news report. Keep the article 100% objective, third-person Bar & Bench-style journalism.

8. **HTML & TYPOGRAPHY RULES**:
   - Allowed HTML tags: <h2>, <h3>, <h4>, <p>, <ul>, <ol>, <li>, <strong>, <em>, <blockquote>, <table>, thead, tbody, tr, th, td, <a>.
   - Do NOT include <h1>, wrapping <div>s, or a "Sources" section (added automatically).
   - Never use em dashes (\u2014). Use normal hyphens (-), colons, or commas.
   - Use Indian numbering and currency conventions naturally (₹, lakh, crore).`;

    const bodyCompletion = await openai.chat.completions.create({
      model: PRIMARY_MODEL,
      reasoning_effort: "low",
      max_completion_tokens: 32768,
      messages: [
        { role: "system", content: step2BSystemPrompt },
        {
          role: "user",
          content: `HEADLINE: ${parsedMeta.title || ""}
STANDFIRST: ${parsedMeta.description || ""}
ARTICLE TYPE: ${articleType}
REQUIRED H2 SECTIONS:
${outline.map((h, i) => `${i + 1}. ${h}`).join("\n")}

CRITICAL REMINDER: Write AT LEAST 1,300 to 1,800 words in Bar & Bench's signature journalistic style. Include the 3-4 paragraph opening lede, the Key Highlights list, all ${outline.length} <h2> sections with 3-5 paragraphs each, 3-5 <blockquote> blocks for direct quotes/observations, and thorough legal/institutional analysis.

SOURCE MATERIAL:
${sourceMaterial}`,
        },
      ],
    } as any);

    let htmlContent = sanitizeText(stripCodeFences(bodyCompletion.choices[0]?.message?.content || ""));
    let currentWordCount = countWords(htmlContent);
    console.log(`[AI News Generator] Step 2B initial word count: ${currentWordCount} words.`);

    // ------------------------------------------------------------------
    // STEP 2C: Auto-Expand if Under Target Word Count (Never 300-400 words)
    // ------------------------------------------------------------------
    let expansionAttempts = 0;
    while (currentWordCount < MIN_TARGET_WORDS && expansionAttempts < 2) {
      expansionAttempts++;
      const deficit = Math.max(500, 1450 - currentWordCount);
      console.log(
        `[AI News Generator] Step 2C expansion attempt ${expansionAttempts}: current=${currentWordCount} words, adding ~${deficit} words...`
      );

      const expandCompletion = await openai.chat.completions.create({
        model: PRIMARY_MODEL,
        reasoning_effort: "low",
        max_completion_tokens: 32768,
        messages: [
          {
            role: "system",
            content: `You are a Senior Editor at AMA Connect writing in the style of Bar & Bench.
The draft legal news/feature article below is currently only ${currentWordCount} words, which is too short. It MUST be expanded to at least 1,400-1,800 words while maintaining strict factual accuracy to the SOURCE MATERIAL.

HOW TO EXPAND IN BAR & BENCH STYLE:
1. Expand EVERY <h2> section by adding 2 to 3 additional crisp, analytical paragraphs (2-4 sentences per paragraph).
2. Incorporate every single detail, quote, question-and-answer exchange, date, statistic, argument, and counsel/partner name from the SOURCE MATERIAL that was summarized too briefly.
3. Add deeper legal, statutory, regulatory, and institutional context explaining the significance of the rulings, provisions, treaties, SEBI/RBI/ECB frameworks, judicial precedents, or law firm market dynamics mentioned in the source.
4. Ensure there are 3 to 5 <blockquote><p>"..."</p></blockquote> elements highlighting key verbatim observations or quotes from the source.
5. Keep all existing <h2> headings and Key Highlights intact, and add <h3> subheadings where helpful to break up long sections. Never insert promotional pitches or tell readers to contact AMA Connect's advocates.
6. Return ONLY the complete, expanded raw HTML article from start to finish. Never use em dashes (\u2014).`,
          },
          {
            role: "user",
            content: `SOURCE MATERIAL:\n${sourceMaterial}\n\n---\n\nEXISTING ARTICLE TO EXPAND TO 1,400-1,800 WORDS:\n${htmlContent}`,
          },
        ],
      } as any);

      const expandedCandidate = sanitizeText(stripCodeFences(expandCompletion.choices[0]?.message?.content || ""));
      const expandedWordCount = countWords(expandedCandidate);
      console.log(
        `[AI News Generator] Step 2C expansion attempt ${expansionAttempts} result: ${expandedWordCount} words.`
      );

      if (expandedWordCount > currentWordCount) {
        htmlContent = expandedCandidate;
        currentWordCount = expandedWordCount;
      } else {
        break;
      }
    }

    const title = sanitizeText(String(parsedMeta.title || "")).trim();
    const description = sanitizeText(String(parsedMeta.description || "")).trim();

    htmlContent = sanitizeHtml(htmlContent);

    const plainLength = htmlContent.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim().length;
    if (!title || !description || plainLength < 400) {
      return NextResponse.json(
        { error: "The AI response was incomplete (missing title, summary or article body). Please try again." },
        { status: 502 }
      );
    }

    // Validate categories against allowed dashboard categories
    const allowedCategories = new Set(["All", "Legal Updates", "Supreme Court", "High Court", "Legislation", "Corporate", "Criminal"]);
    const categories = Array.isArray(parsedMeta.categories)
      ? Array.from(new Set(["All", ...parsedMeta.categories.filter((c: string) => allowedCategories.has(c))]))
      : ["All"];

    // Slug: sanitise and guarantee uniqueness
    let baseSlug = slugify(String(parsedMeta.slug || "")) || slugify(title);
    if (!baseSlug) baseSlug = `news-${Date.now()}`;
    let slug = baseSlug;
    try {
      await dbConnect();
      let n = 2;
      while (await CustomNews.exists({ slug })) {
        slug = `${baseSlug}-${n++}`;
        if (n > 50) {
          slug = `${baseSlug}-${Date.now()}`;
          break;
        }
      }
    } catch (dbErr) {
      console.error("[AI News Generator] Slug uniqueness check failed:", dbErr);
    }

    // Append a visible, linked source list so readers can verify the news
    const safeSources = sources.filter((u) => /^https?:\/\//i.test(u));
    if (safeSources.length) {
      const items = safeSources
        .map((u) => {
          let host = u;
          try {
            host = new URL(u).hostname.replace(/^www\./, "");
          } catch {}
          return `<li><a href="${u}">${host}</a></li>`;
        })
        .join("");
      htmlContent += `<h3>Sources</h3><ul>${items}</ul>`;
    }

    const finalWordCount = countWords(htmlContent);
    console.log(
      `[AI News Generator] Flow complete (${mode}, ${finalWordCount} words, ${safeSources.length} source(s)).`
    );

    return NextResponse.json({
      title,
      description,
      slug,
      content: htmlContent,
      categories,
      wordCount: finalWordCount,
      mode,
      sources: safeSources,
    });
  } catch (error: any) {
    console.error("[AI News Generator] Error:", error);
    return NextResponse.json(
      { error: error.message || "Failed to generate news content" },
      { status: 500 }
    );
  }
}
