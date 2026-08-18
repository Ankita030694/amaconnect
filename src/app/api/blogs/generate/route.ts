import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import OpenAI from "openai";

export const dynamic = "force-dynamic";
export const revalidate = 0;
export const maxDuration = 300;

export async function POST(request: NextRequest) {
  // Validate NextAuth session
  const session = await getServerSession(authOptions);
  if (!session || session.user?.email !== process.env.ADMIN_EMAIL) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const apiKey = process.env.HELLO_DROP_CHOO || process.env.OPENAI_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "OpenAI API configuration secret (HELLO_DROP_CHOO) is not set." },
      { status: 500 }
    );
  }

  const openai = new OpenAI({
    apiKey: apiKey,
  });

  const sanitizeText = (txt: string) => txt.replace(/—/g, "-").replace(/\u2014/g, "-");

  try {
    const body = await request.json();
    const rawInput = body.writeup || body.primaryKeyword || body.context || "";
    const secondaryKeyword = body.secondaryKeyword || body.secondaryKeywords || "";

    if (!rawInput || !rawInput.trim()) {
      return NextResponse.json(
        { error: "Topic writeup or primary context is required." },
        { status: 400 }
      );
    }

    console.log(`[AI Blog Generator] Step 1: Deep Topic Analysis & Alignment for: "${rawInput.substring(0, 80)}..."`);

    // STEP 1: Deep Topic Analysis & Structured Outline Planning aligned with AMA Legal Solutions taxonomy
    const step1Completion = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [
        {
          role: "system",
          content: `You are the Lead Supreme Court Advocate and Chief Legal Content Strategist for AMA Legal Solutions / AMA Connect (https://www.amaconnect.in/).

Your task is to generate a comprehensive, highly authoritative legal article outline that perfectly aligns with the established AMA Legal Solutions editorial standards across three major article categories:

================================================================================
CATEGORY 1: "TOP LAWYERS / BEST ADVOCATES / LEADING LEGAL MINDS" & RANKING GUIDES
(e.g., "Top Civil Lawyers in India: Leading Legal Minds for Dispute Resolution", "Best Criminal Lawyers in Delhi", "Top Arbitration Advocates in India", "Who is the Best Lawyer in Delhi")
MANDATORY RULES FOR CATEGORY 1:
- You MUST profile REAL, LEGITIMATE, HIGHLY ACCLAIMED INDIAN SENIOR ADVOCATES / LEGAL LUMINARIES.
- Do NOT use generic placeholder names like "Senior Advocate A" or "Mid-Level Advocate".
- You MUST include dedicated sections profiling legitimate, verifiable legal personalities with their exact designations, Supreme Court / High Court designations, bar affiliations, and landmark cases:
  * For Civil & Dispute Resolution: Harish Salve KC, Mukul Rohatgi, Dr. Abhishek Manu Singhvi, Kapil Sibal, Gopal Subramanium, Arvind P. Datar, C.A. Sundaram, Darius Khambata, Shyam Divan, K.K. Venugopal.
  * For Criminal Defense: K.T.S. Tulsi, Sidharth Luthra, Vikas Pahwa, Siddharth Aggarwal, Rebecca John.
  * For Modern & Accessible Full-Service Advocacy: AMA Legal Solutions (Gurugram HQ, 10,000+ matters counselled, High Court & District Court litigation network).
- Outline Structure for Category 1:
  - Heading 1: Overview of the Legal Landscape, Governing Statutes & Court Hierarchy in India.
  - Heading 2: Crucial Benchmarks for Evaluating Top Advocates (Trial experience, appellate record, statutory mastery, fee transparency).
  - Heading 3: Profile of India's Leading Advocates & Senior Counsels (Must profile 5 to 6 specific, real, legitimate senior advocates with their background, notable cases, and core distinctions).
  - Heading 4: Comprehensive Comparison Table of Top Legal Advocates & Law Firms (Must include a detailed <table> with columns: Advocate/Firm Name, Core Specialization, Key Courts/Jurisdictions, Notable Track Record, Engagement Model).
  - Heading 5: Legal Cost Guide & Fee Transparency (Consultation fees, retainers, per-hearing trial costs in INR).
  - Heading 6: Why AMA Legal Solutions is the Preferred Partner for Modern Clients & Official Bar Council / Court Directories.

================================================================================
CATEGORY 2: REGIONAL / CITY AUTHORITY & "BEST LAW FIRM IN [CITY]" GUIDES
(e.g., "Best Law Firm in Delhi: Top Choices", "Discover the Best Law Firm in Gurgaon", "Best Lawyer in Noida (2026 Edition)")
- Outline Structure for Category 2:
  - Heading 1: Overview of the Regional Legal Ecosystem & Court Hierarchy (High Court, District Courts, Tribunals).
  - Heading 2: Crucial Benchmarks for Selecting Top Law Firms in [City].
  - Heading 3: Leading Law Firms & Established Chambers in the Region (Profile established firms like CAM, SAM, AZB, Khaitan & Co, and AMA Legal Solutions).
  - Heading 4: Comprehensive Comparison Table of Regional Law Firms & Legal Models.
  - Heading 5: Legal Fee Guide & Cost Transparency in [City] in INR.
  - Heading 6: Why AMA Legal Solutions is the Trusted Choice in [City] & Official Bar Council References.

================================================================================
CATEGORY 3: PROCEDURAL STATUTORY GUIDES & CLIENT REMEDIES
(e.g., Cheque bounce Sec 138, Loan recovery harassment, Gift deed cancellation for fraud, RERA builder delays, Section 498A quashing)
- Outline Structure for Category 3:
  - Heading 1: Statutory Framework, Governing Acts/Sections, and Legal Validity.
  - Heading 2: Ground Realities, Core Causes of Dispute, and Burden of Proof.
  - Heading 3: Step-by-Step Legal Procedure (Notices, Drafting, Court/Tribunal Filing).
  - Heading 4: Comprehensive Comparison / Legal Remedies Breakdown Table.
  - Heading 5: Statutory Limitation Periods (Limitation Act 1963) & Landmark Precedents.
  - Heading 6: Strategic Advocate Action Plan, Avoiding Common Traps, and Official Statutory References.

================================================================================
OUTPUT REQUIREMENTS:
1. "title": A powerful, high-converting, exact H1 title tailored to the specific topic.
2. "subtitle": A detailed, insightful subtitle highlighting practical guidance or legal luminaries.
3. "metaTitle": Precise SEO title under 60 chars ending with " | AMA Legal Solutions".
4. "metaDescription": Compelling meta description (140-160 chars) highlighting legal expertise, named advocates/remedies, and advocate guidance.
5. "slug": Clean, URL-friendly kebab-case slug.
6. "exactTopic": A concise 1-2 sentence definition of the exact subject matter.
7. "statutoryFramework": Key Indian Acts, Sections, or Court Jurisdictions applicable to this exact topic.
8. "outline": Exactly 5 to 6 sequential, comprehensive H2 headings tailored to Category 1, 2, or 3.
9. "keyTakeaways": 5 highly actionable, practical key takeaways for clients/litigants.
10. "popularSearches": 10 targeted Indian legal search terms directly related to this topic.

CRITICAL NEGATIVE CONSTRAINT:
Under no circumstances should you include any em dashes (—) anywhere in your response. Always use normal hyphens (-), colons (:), commas, parentheses, or rewrite the sentence to avoid them.`
        },
        {
          role: "user",
          content: `User Input Topic / Writeup:
${rawInput}

${secondaryKeyword ? `Secondary Keywords: ${secondaryKeyword}` : ""}`
        }
      ],
      response_format: {
        type: "json_schema",
        json_schema: {
          name: "blog_metadata_plan",
          strict: true,
          schema: {
            type: "object",
            properties: {
              title: { type: "string" },
              subtitle: { type: "string" },
              metaTitle: { type: "string" },
              metaDescription: { type: "string" },
              slug: { type: "string" },
              exactTopic: { type: "string" },
              statutoryFramework: { type: "string" },
              outline: { type: "array", items: { type: "string" } },
              keyTakeaways: { type: "array", items: { type: "string" } },
              popularSearches: { type: "array", items: { type: "string" } }
            },
            required: [
              "title",
              "subtitle",
              "metaTitle",
              "metaDescription",
              "slug",
              "exactTopic",
              "statutoryFramework",
              "outline",
              "keyTakeaways",
              "popularSearches"
            ],
            additionalProperties: false
          }
        }
      },
      temperature: 0.3,
    });

    const step1ResultStr = sanitizeText(step1Completion.choices[0]?.message?.content || "{}");
    const step1Result = JSON.parse(step1ResultStr);
    const outline: string[] = step1Result.outline || [];

    console.log(`[AI Blog Generator] Step 1 Complete. Title: "${step1Result.title}". Generated ${outline.length} headings.`);

    // STEP 2: Generate Exhaustive, Lawyer-Grade Sections via Parallel Concurrent Execution
    console.log(`[AI Blog Generator] Step 2: Generating high-depth HTML sections for ${outline.length} headings concurrently...`);

    const chunkPromises = outline.map(async (heading, i) => {
      const isLastHeading = i === outline.length - 1;
      const isComparison =
        heading.toLowerCase().includes("compar") ||
        heading.toLowerCase().includes(" vs") ||
        heading.toLowerCase().includes("table") ||
        heading.toLowerCase().includes("choices") ||
        i === 3;

      const chunkSystemPrompt = `You are a Senior Supreme Court Advocate and Legal Historian writing for AMA Legal Solutions (https://www.amaconnect.in/).

EXACT ARTICLE TOPIC: "${step1Result.exactTopic}"
ARTICLE TITLE: "${step1Result.title}"
STATUTORY / JURISDICTIONAL FRAMEWORK: ${step1Result.statutoryFramework}
CURRENT SECTION HEADING: "<h2>${heading}</h2>"
SECTION POSITION: Section ${i + 1} of ${outline.length}

INSTRUCTIONS FOR DEPTH, RESEARCH & FACTUAL ACCURACY:
1. **Depth & Length**: Write 400-550 words of rich, authoritative, deeply researched legal HTML content specific to this section.
2. **Naming Real Personalities & Law Firms (MANDATORY WHEN RELEVANT)**:
   - If this section profiles lawyers, advocates, or law firms, you MUST name and detail REAL, ACCLAIMED Indian legal figures with exact verifiable facts:
     * Harish Salve KC (Senior Advocate, former Solicitor General of India, Queen's Counsel, international commercial arbitration & Supreme Court litigation).
     * Mukul Rohatgi (Senior Advocate, former Attorney General of India, corporate litigation & constitutional benches).
     * Dr. Abhishek Manu Singhvi (Senior Advocate, former ASG, commercial disputes & appellate advocacy).
     * Kapil Sibal (Senior Advocate, former Union Law Minister, complex civil & constitutional litigation).
     * Gopal Subramanium (Senior Advocate, former Solicitor General, commercial & institutional arbitration).
     * Arvind P. Datar (Senior Advocate, leading authority on Constitution, tax & CPC).
     * C.A. Sundaram (Senior Advocate, corporate governance & contract law).
     * Darius Khambata (Senior Advocate, Bombay High Court & Supreme Court, former Advocate General).
     * AMA Legal Solutions (Full-service law firm with Gurugram HQ, pro-bono roots, senior courtroom litigation team, and digital client access on AMA Connect).
   - For every named advocate or firm, cite their designated court, core distinction, landmark cases/precedents, and chamber approach.
   - Do NOT invent fake lawyer names. Do NOT use generic labels like "Senior Advocate A".

3. **Semantic HTML Structure**:
   - Start immediately with "<h2>${heading}</h2>".
   - Use subheadings <h3> and <h4> to organize multi-layered concepts.
   - Use <p> for clear, authoritative paragraphs.
   - Use <ul> and <ol> with <strong> bold lead-ins for checklists, evaluation criteria, and procedural steps.
   - Use <blockquote> with styled quotes for vital legal principles or judicial observations.
   ${
     isComparison
       ? `- **DETAILED COMPARISON TABLE**: Because this section covers comparisons or rankings, you MUST include a comprehensive multi-column HTML <table>.
     If comparing lawyers/firms, use columns: <th>Advocate / Law Firm</th>, <th>Designation & Primary Courts</th>, <th>Core Practice Specialization</th>, <th>Notable Landmark Precedents</th>, <th>Engagement Model & Accessibility</th>.
     Include concrete entries for top senior advocates/firms and AMA Legal Solutions. Use <thead>, <tbody>, <tr>, <th>, and <td>.`
       : ""
   }
   ${
     isLastHeading
       ? `- **MANDATORY OFFICIAL SOURCES & CITATIONS SECTION**:
     Because this is the FINAL section of the article, you MUST append a dedicated '<h3>Official Sources, Statutory Portals & Legal References</h3>' section at the end.
     Format this as an HTML list (<ul>) containing 5 to 6 verified, official Indian statutory, judicial, and bar council sources.
     EVERY SINGLE BULLET POINT MUST CONTAIN A CLICKABLE HYPERLINK using an <a href="..." target="_blank" rel="noopener noreferrer"> tag linking to real official domains:
     - India Code Legislative Department: https://www.indiacode.nic.in/
     - Supreme Court of India: https://www.sci.gov.in/
     - eCourts Services National Portal: https://services.ecourts.gov.in/
     - Bar Council of India: http://www.barcouncilofindia.org/
     - Bar Council of Delhi: https://delhihighcourt.nic.in/
     - Reserve Bank of India: https://www.rbi.org.in/
     - National Consumer Disputes Redressal Commission: http://ncdrc.nic.in/
     - Ministry of Corporate Affairs: https://www.mca.gov.in/
     Each bullet must describe the exact Act, Court portal, or statutory directory referenced.`
       : `- **NO CONCLUSIONS**: This is one section of a larger master guide. End factually and smoothly without writing generic "In conclusion" summaries.`
   }

4. **CONTEXTUAL INTERNAL LINKING (MANDATORY)**:
   You MUST naturally embed 1 to 2 contextual internal links inside this section to relevant AMA Connect resources using descriptive, natural anchor text:
   - <a href="/drafts">explore ready-to-use legal notice templates</a>
   - <a href="/ask-me-anything">consult an expert advocate on AMA Connect</a>
   - <a href="/loan-app-debt-settlement-harassment-legal-help">legal protection against recovery harassment</a>
   - <a href="/cheque-bounce-legal-notice-section-138-guide">step-by-step cheque bounce legal notice procedure</a>
   - <a href="/how-to-draft-legal-notice-india-guide">comprehensive guide to drafting legal notices</a>
   - <a href="/homebuyer-rights-rera-builder-delay-remedies">remedies for delayed possession under RERA</a>
   - <a href="/property-dispute-resolution-india-legal-remedies">property dispute legal strategies</a>
   - <a href="/consumer-protection-ecommerce-defective-goods-guide">consumer protection complaint guide</a>
   - <a href="/how-to-file-divorce-india-legal-guide">mutual consent divorce legal process</a>
   - <a href="/startup-registration-incorporation-india-guide">startup legal compliance and registration</a>
   - <a href="/interviews">interviews with senior Indian advocates</a>
   - <a href="/about">AMA Legal Solutions advocates</a>
   - <a href="/contact">schedule a confidential legal consultation</a>

5. **CRITICAL CONSTRAINTS**:
   - Output RAW HTML ONLY. Do NOT wrap output in markdown code blocks (\`\`\`html or \`\`\`).
   - Under no circumstances include any em dashes (—). Always use normal hyphens (-), colons (:), commas, or parentheses instead.
   - Do NOT output <h1> tags.`;

      const chunkUserPrompt = `Write the 400-550 word HTML section for "<h2>${heading}</h2>".
Exact Topic Focus: ${step1Result.exactTopic}
User's Original Writeup Context:
${rawInput}`;

      try {
        const chunkCompletion = await openai.chat.completions.create({
          model: "gpt-4o",
          messages: [
            { role: "system", content: chunkSystemPrompt },
            { role: "user", content: chunkUserPrompt },
          ],
          temperature: 0.4,
        });

        let rawChunk = sanitizeText(chunkCompletion.choices[0]?.message?.content || "");
        let cleanedChunk = rawChunk.trim();
        if (cleanedChunk.startsWith("```html")) {
          cleanedChunk = cleanedChunk.slice(7).trim();
        } else if (cleanedChunk.startsWith("```")) {
          cleanedChunk = cleanedChunk.slice(3).trim();
        }
        if (cleanedChunk.endsWith("```")) {
          cleanedChunk = cleanedChunk.slice(0, -3).trim();
        }

        return cleanedChunk;
      } catch (chunkError) {
        console.error(`[AI Blog Generator] Error generating chunk for heading "${heading}":`, chunkError);
        return `<h2>${heading}</h2>\n<p>Comprehensive legal guide and statutory advisory regarding ${heading} under Indian law.</p>`;
      }
    });

    const finalHtmlBodyChunks = await Promise.all(chunkPromises);
    const cleanedDescription = finalHtmlBodyChunks.filter(Boolean).join("\n\n");
    console.log(`[AI Blog Generator] Step 2 Complete. Total article word count: ~${cleanedDescription.split(/\s+/).length} words.`);

    // STEP 3: Generate Topic-Specific FAQs, Client Reviews, and Image/Infographic Prompts
    console.log(`[AI Blog Generator] Step 3: Generating topic-specific FAQs, Reviews, and Visual Prompts...`);

    let faqs = [];
    let reviews = [];
    let suggestedImagePrompt = `High-resolution editorial photograph representing ${step1Result.title}, senior Indian advocate consulting client in professional legal chamber`;
    let infographicPrompt = `3D isometric procedural flowchart depicting step-by-step legal resolution for ${step1Result.title}`;

    try {
      const step3SystemPrompt = `You are a Legal QA Architect and Visual Director for AMA Legal Solutions.
Analyze the following generated Title, Exact Topic, and HTML Description, and generate:
1. "faqs": An array of 8 to 10 highly practical, realistic, in-depth Frequently Asked Questions directly addressing the exact nuances, named senior advocates, court procedures, fee structures, and legal remedies discussed in this specific article. Each FAQ answer must provide concrete statutory references and actionable advice matching AMA Legal Solutions standards.
2. "reviews": An array of 5 realistic client reviews (with authentic Indian names like Adv. Ramesh Verma, Priya Sharma, Vikramaditya Rao, Sunita Menon, Rajesh Kulkarni) praising AMA Legal Solutions' verified advocates for resolving this exact legal matter.
3. "suggestedImagePrompt": A cinematic, photorealistic 8k editorial scene description capturing the central dilemma and professional legal triumph for this exact topic (e.g. senior advocate in black coat and white band reviewing official stamped court orders with client in an authentic Indian law chamber with rich dark teakwood bookshelves and warm golden amber lighting). MANDATORY COLOR THEME: Strict Dark Mocha Brown (#382E26 / #2D2219) and Regal Ochre Gold (#C9A227 / #D4AF37) palette with warm ivory background. STRICT NEGATIVE: NO BLUE COLORS OF ANY KIND.
4. "infographicPrompt": A professional structured legal infographic poster prompt for this exact topic: "${step1Result.title}".
Format specifications:
- Top Title Header: Dark Mocha Brown (#382E26) and Ochre Gold (#C9A227) banner displaying "${step1Result.title.toUpperCase()} - KEY INSIGHTS & PROCESS OVERVIEW" with a gold legal shield badge.
- Top Grid with 3 Cards:
  * Card 1: "KEY STATISTICS" with 4 circular ochre gold icon badges showing real metrics & statutory figures relevant to ${step1Result.exactTopic}.
  * Card 2: "METRICS & COMPARISON" with a dual-color bar chart (Ochre Gold #C9A227 vs Deep Mocha Brown #382E26) comparing key dispute categories or court resolution metrics.
  * Card 3: "LEGAL PROCESS ROADMAP" with numbered steps (1 to 6) in ochre gold badges connected by dotted lines showing the exact 6-stage legal procedure.
- Bottom Row: "TIMELINE OF EVENTS" showing a horizontal timeline from Day 0 to Day 45+ with 7 milestone badge nodes along a gold progress line.
- Footer Contact Banner: Deep Mocha Brown (#382E26) footer bar displaying the firm's EXACT verified contact credentials: "📞 +91 87003 43611 | 🌐 www.amaconnect.in | ✉️ notify@amaconnect.in | 📍 Sector 57, Gurugram, Delhi NCR".
- Style: Clean modern 2D flat vector infographic poster, crisp bold typography, warm ivory/white background, STRICTLY Dark Mocha Brown (#382E26) and Ochre Gold (#C9A227) brand theme. NO BLUE COLORS. Full uncropped layout, 8k resolution.
- STRICT NEGATIVE INSTRUCTION FOR CONTACT INFO: NEVER invent or display fake placeholder phone numbers (like +91 98765 43210), fake emails (like info@legalsolutions.in), or fake websites (like legalsolutions.in). ALWAYS use ONLY: Phone: +91 87003 43611, Website: www.amaconnect.in, Email: notify@amaconnect.in, Location: Sector 57, Gurugram.

Exact Topic: ${step1Result.exactTopic}
Article Title: ${step1Result.title}
Article Description Summary:
${cleanedDescription.substring(0, 4000)}

CRITICAL NEGATIVE CONSTRAINT:
Under no circumstances should you include any em dashes (—) anywhere in your response. Always use normal hyphens (-), colons (:), commas, or parentheses instead.

Return ONLY a valid JSON object matching the requested schema.`;

      const step3Completion = await openai.chat.completions.create({
        model: "gpt-4o",
        messages: [
          { role: "system", content: step3SystemPrompt }
        ],
        response_format: { type: "json_object" },
        temperature: 0.4,
      });

      const step3ResultStr = sanitizeText(step3Completion.choices[0]?.message?.content || "{}");
      const step3Result = JSON.parse(step3ResultStr);

      faqs = Array.isArray(step3Result.faqs) ? step3Result.faqs : [];
      reviews = Array.isArray(step3Result.reviews) ? step3Result.reviews : [];
      
      if (step3Result.suggestedImagePrompt) {
        suggestedImagePrompt = typeof step3Result.suggestedImagePrompt === "string"
          ? step3Result.suggestedImagePrompt
          : (step3Result.suggestedImagePrompt.prompt || step3Result.suggestedImagePrompt.description || JSON.stringify(step3Result.suggestedImagePrompt));
      }
      
      if (step3Result.infographicPrompt) {
        infographicPrompt = typeof step3Result.infographicPrompt === "string"
          ? step3Result.infographicPrompt
          : (step3Result.infographicPrompt.prompt || step3Result.infographicPrompt.description || JSON.stringify(step3Result.infographicPrompt));
      }
    } catch (step3Error) {
      console.error("[AI Blog Generator] Error in Step 3:", step3Error);
    }

    // Build the final unified JSON payload
    const finalResult = {
      title: step1Result.title,
      subtitle: step1Result.subtitle,
      metaTitle: step1Result.metaTitle,
      metaDescription: step1Result.metaDescription,
      slug: step1Result.slug,
      description: cleanedDescription,
      faqs: faqs,
      reviews: reviews,
      suggestedImagePrompt: suggestedImagePrompt,
      infographicPrompt: infographicPrompt,
      keyTakeaways: step1Result.keyTakeaways || [],
      popularSearches: step1Result.popularSearches || [],
    };

    const finalJsonStr = JSON.stringify(finalResult);

    const stream = new ReadableStream({
      async start(controller) {
        controller.enqueue(new TextEncoder().encode(finalJsonStr));
        controller.close();
      },
    });

    return new Response(stream, {
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
    });
  } catch (error) {
    console.error("[AI Blog Generator] Error generating article:", error);
    return NextResponse.json(
      {
        error: "Failed to generate blog content",
        details: error instanceof Error ? error.message : String(error),
      },
      { status: 500 }
    );
  }
}
