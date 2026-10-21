import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import OpenAI from "openai";
import dbConnect from "@/lib/dbConnect";
import { CustomNews } from "@/lib/models";
import { sanitizeHtml, slugify } from "@/lib/sanitizeHtml";
import { injectContextualInternalLinks } from "@/lib/interlinkHelper";

export const dynamic = "force-dynamic";
export const revalidate = 0;
export const maxDuration = 300;

const MODEL = "gpt-4o";
// Below this many characters of admin-supplied text we treat the input as a topic/headline
// and research the real news with web search instead of letting the model "fill in" details.
const MIN_SOURCE_CHARS = 700;
const MAX_URLS = 3;
const MAX_FETCHED_CHARS = 12000;

const sanitizeText = (txt: string) =>
  (txt || "").replace(/\u2014/g, "-").replace(/\u2013/g, "-");

const stripHtmlToText = (html: string) =>
  html
    .replace(/<(script|style|noscript|svg|nav|footer|header|aside)\b[\s\S]*?<\/\1>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/gi, " ")
    .replace(/&amp;/gi, "&")
    .replace(/&quot;/gi, '"')
    .replace(/&#39;/gi, "'")
    .replace(/\s+/g, " ")
    .trim();

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
      headers: { "User-Agent": "Mozilla/5.0 (compatible; AMAConnectNewsBot/1.0)" },
      signal: AbortSignal.timeout(12000),
      redirect: "follow",
    });
    if (!res.ok) return null;
    const html = await res.text();
    const title = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1]?.trim() || "";
    const text = stripHtmlToText(html).slice(0, MAX_FETCHED_CHARS);
    if (text.length < 300) return null;
    return `SOURCE URL: ${url}\nPAGE TITLE: ${stripHtmlToText(title)}\nPAGE TEXT: ${text}`;
  } catch {
    return null;
  }
}

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
    // STEP 1: Collect real source material (pasted text + linked pages)
    // ------------------------------------------------------------------
    const urls = Array.from(new Set(writeup.match(/https?:\/\/[^\s<>"')]+/g) || [])).slice(0, MAX_URLS);
    const userText = writeup.replace(/https?:\/\/[^\s<>"')]+/g, " ").replace(/\s+/g, " ").trim();

    console.log(`[AI News Generator] Step 1: collecting source material (${urls.length} url(s), ${userText.length} chars of text)...`);

    const fetchedResults = await Promise.all(urls.map(fetchArticleText));
    const fetchedPages = fetchedResults.filter(Boolean) as string[];
    // Only list links we actually read as sources
    const sources: string[] = urls.filter((_, i) => !!fetchedResults[i]);

    let sourceMaterial = "";
    let mode: "provided" | "researched" = "provided";

    const providedChars = userText.length + fetchedPages.reduce((n, p) => n + p.length, 0);

    if (providedChars >= MIN_SOURCE_CHARS) {
      sourceMaterial = [userText && `ADMIN-PROVIDED TEXT:\n${userText}`, ...fetchedPages]
        .filter(Boolean)
        .join("\n\n---\n\n");
    } else {
      // Only a topic / headline / short note was given: find the ACTUAL reported news online.
      mode = "researched";
      console.log("[AI News Generator] Input is only a topic; researching real reports with web search...");

      const research = await openai.responses.create({
        model: MODEL,
        tools: [{ type: "web_search_preview", search_context_size: "high", user_location: { type: "approximate", country: "IN", timezone: "Asia/Kolkata" } }],
        tool_choice: "required",
        temperature: 0.1,
        input: [
          {
            role: "system",
            content: `You are a research desk for an Indian legal news publication. Today's date is ${today}.
Use web search to find the ACTUAL, specific news reports about the topic the editor gives you. Prefer reputable sources: LiveLaw, Bar & Bench, SCC Online, The Hindu, Indian Express, Hindustan Times, Times of India, PTI/ANI, official court websites (sci.gov.in, high court sites), PIB and government gazettes.

Rules:
- Report ONLY facts that appear in the sources you found. Never use background knowledge to fill gaps and never invent names, dates, case numbers, figures or quotes.
- For every fact give the source publication name and date.
- Include: what happened, who (court/bench/parties/authority), when, the key orders/observations/figures, and any direct quotes exactly as reported.
- If you cannot find an actual recent news report about this specific topic, reply with exactly: NO_NEWS_FOUND
- Output plain-text research notes (bullet points), no article prose.`,
          },
          { role: "user", content: `Topic / headline to research: ${userText || writeup}${fetchedPages.length ? `\n\nPage excerpts the editor supplied:\n${fetchedPages.join("\n\n")}` : ""}` },
        ],
      });

      const notes = (research.output_text || "").trim();
      if (!notes || /NO_NEWS_FOUND/i.test(notes)) {
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

      sourceMaterial = `RESEARCH NOTES (from web search, ${today}):\n${notes}${fetchedPages.length ? `\n\n---\n\n${fetchedPages.join("\n\n---\n\n")}` : ""}`;
    }

    // ------------------------------------------------------------------
    // STEP 2: Write the article STRICTLY from the source material
    // ------------------------------------------------------------------
    console.log(`[AI News Generator] Step 2: writing article from source material (mode: ${mode})...`);

    const completion = await openai.chat.completions.create({
      model: MODEL,
      temperature: 0.2,
      response_format: { type: "json_object" },
      messages: [
        {
          role: "system",
          content: `You are a news reporter and editor for AMA Connect (https://www.amaconnect.in/), an Indian legal news publication. Today's date is ${today}.
Write a factual news report using ONLY the SOURCE MATERIAL supplied by the user.

STRICT GROUNDING RULES:
- Every name, court, date, case number, section, amount, number and quotation in your article must appear in the source material. Do NOT add anything from your own background knowledge.
- Do NOT invent quotes, court observations, reactions, implications, "experts say" statements or background paragraphs.
- Do NOT infer causes, motives or links between facts unless the source states them. Keep claims attributed exactly as the source attributes them (e.g. "according to the petitioner", not as established fact).
- Do NOT turn a bare list of case numbers or judgment titles into a story. If the source is only a list or index with no actual news content, return insufficient.
- Do NOT pad the article with generic legal explainers. Length follows the material: typically 250-700 words. A short source means a short article.
- If the source material does not describe a real, specific news event, return {"insufficient": true, "reason": "..."} and nothing else.
- Write in a neutral news style, inverted-pyramid structure: the most important facts first, then details, then context only if it is in the source. Attribute claims ("the Court observed", "according to LiveLaw").

CONTEXTUAL INTERNAL LINKING (MANDATORY):
You MUST naturally embed 1 to 2 contextual internal links inside the article paragraphs to relevant AMA Connect legal resources and guides using natural anchor text:
- <a href="/ask-me-anything">consult an expert advocate on AMA Connect</a>
- <a href="/interviews">interviews with senior Indian advocates</a>
- <a href="/how-to-draft-legal-notice-india-guide">comprehensive legal notice drafting guide</a>
- <a href="/cheque-bounce-legal-notice-section-138-guide">step-by-step Section 138 cheque bounce proceedings</a>
- <a href="/homebuyer-rights-rera-builder-delay-remedies">remedies for delayed possession under RERA</a>
- <a href="/property-dispute-resolution-india-legal-remedies">property dispute legal strategies</a>
- <a href="/cyber-fraud-online-scams-legal-recourse">cyber fraud legal recourse and complaints</a>
- <a href="/loan-app-debt-settlement-harassment-legal-help">protection against recovery harassment</a>
- <a href="/consumer-protection-ecommerce-defective-goods-guide">consumer protection complaint guide</a>
- <a href="/how-to-file-divorce-india-legal-guide">mutual consent divorce legal process</a>
These internal links to AMA Connect are EXEMPT from the source material grounding restriction and MUST be embedded directly within appropriate sentences.

FORMAT:
- Body in HTML using only <h2>, <h3>, <p>, <ul>, <li>, <ol>, <strong>, <em>, <blockquote>. No markdown, no wrapping <div>, no <h1>, no "Sources" section (added automatically).
- Never use em dashes. Use hyphens, colons or commas.
- Use Indian context naturally (₹ for rupees).

Return ONLY this JSON object:
{
  "insufficient": false,
  "title": "Factual headline, max 80 chars",
  "description": "1-2 sentence summary of the actual news",
  "slug": "url-friendly-slug",
  "content": "<p>...</p>"
}`,
        },
        { role: "user", content: `SOURCE MATERIAL:\n\n${sourceMaterial}` },
      ],
    });

    let parsed: any;
    try {
      parsed = JSON.parse(completion.choices[0].message.content || "{}");
    } catch {
      return NextResponse.json({ error: "The AI returned an invalid response. Please try again." }, { status: 502 });
    }

    if (parsed.insufficient) {
      return NextResponse.json(
        {
          error: `Not enough real news information to write an article${parsed.reason ? `: ${sanitizeText(String(parsed.reason))}` : "."} Paste the actual article text or a link and try again.`,
        },
        { status: 422 }
      );
    }

    const title = sanitizeText(String(parsed.title || "")).trim();
    const description = sanitizeText(String(parsed.description || "")).trim();
    let htmlContent = sanitizeText(String(parsed.content || ""))
      .replace(/^```html\s*/i, "")
      .replace(/```$/, "")
      .trim();

    // Ensure contextual internal links are present
    htmlContent = injectContextualInternalLinks(htmlContent, 3);
    htmlContent = sanitizeHtml(htmlContent);

    const plainLength = htmlContent.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim().length;
    if (!title || !description || plainLength < 200) {
      return NextResponse.json(
        { error: "The AI response was incomplete (missing title, summary or article body). Please try again." },
        { status: 502 }
      );
    }

    // Slug: sanitise and guarantee uniqueness
    let baseSlug = slugify(String(parsed.slug || "")) || slugify(title);
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

    console.log(`[AI News Generator] Flow complete (${mode}, ${safeSources.length} source(s)).`);

    return NextResponse.json({
      title,
      description,
      slug,
      content: htmlContent,
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
