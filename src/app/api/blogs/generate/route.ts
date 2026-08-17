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
    const primaryKeyword = body.primaryKeyword || body.context || body.writeup;
    const secondaryKeyword = body.secondaryKeyword || body.secondaryKeywords;

    if (!primaryKeyword) {
      return NextResponse.json({ error: "Primary Keyword, Context, or Writeup is required" }, { status: 400 });
    }

    console.log(`[AI Generator Flow] Step 1: Generating SEO metadata for: [${primaryKeyword}]...`);

    // STEP 1: Generate Metadata with OpenAI Structured Outputs
    const step1Completion = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [
        {
          role: "system",
          content: `You are a professional legal SEO and AEO strategist.
Generate an SEO-optimized H1 Title, engaging subtitle, meta title, meta description, URL slug, an outline of exactly 5 to 6 highly detailed H2 headings, 5 actionable key takeaways, and 10 popular search terms for a blog article on AMA Connect (https://www.amaconnect.in/).
Make sure at least one of the H2 headings is explicitly a comparison section (e.g., "Comparison of Options", "X vs Y").
Primary Keyword: ${primaryKeyword}
Secondary Keywords: ${secondaryKeyword || ""}

CRITICAL NEGATIVE CONSTRAINT:
Under no circumstances should you include any em dashes (—) anywhere in your response. Always use normal hyphens (-), colons (:), commas, parentheses, or rewrite the sentence to avoid them.`
        }
      ],
      response_format: {
        type: "json_schema",
        json_schema: {
          name: "blog_metadata",
          strict: true,
          schema: {
            type: "object",
            properties: {
              title: { type: "string" },
              subtitle: { type: "string" },
              metaTitle: { type: "string" },
              metaDescription: { type: "string" },
              slug: { type: "string" },
              outline: { type: "array", items: { type: "string" } },
              keyTakeaways: { type: "array", items: { type: "string" } },
              popularSearches: { type: "array", items: { type: "string" } }
            },
            required: ["title", "subtitle", "metaTitle", "metaDescription", "slug", "outline", "keyTakeaways", "popularSearches"],
            additionalProperties: false
          }
        }
      },
      temperature: 0.7,
    });

    const step1ResultStr = sanitizeText(step1Completion.choices[0]?.message?.content || "{}");
    const step1Result = JSON.parse(step1ResultStr);
    const outline: string[] = step1Result.outline || [];

    console.log(`[AI Generator Flow] Step 1 complete. Title: "${step1Result.title}". Generated ${outline.length} headings.`);

    // STEP 2: Generate Body via Parallel Concurrent Chunking (Under 10s Execution)
    console.log(`[AI Generator Flow] Step 2: Generating description content for ${outline.length} headings concurrently...`);
    const context = body.context || body.writeup;

    const chunkPromises = outline.map(async (heading, i) => {
      const isLastHeading = i === outline.length - 1;
      const isComparison = heading.toLowerCase().includes('compar') || heading.toLowerCase().includes(' vs');
      
      const chunkSystemPrompt = `
You are a professional legal content writer and SEO expert. Write a fully human-written, SEO-optimized, exhaustive legal article section for AMA Connect (https://www.amaconnect.in/).
Target Primary Keyword: ${primaryKeyword}
Secondary Keywords: ${secondaryKeyword || ""}
Article Title: ${step1Result.title}

**CRITICAL INSTRUCTION FOR LENGTH:
Write EXACTLY 200-230 words of HTML content specific ONLY to this H2 section: "<h2>${heading}</h2>".
DO NOT exceed 230 words, otherwise the total blog length will overshoot the 2000 word limit. Keep sentences punchy and highly informative.
Start the response directly with the "<h2>${heading}</h2>" tag, followed by the content.
Dive deep into legal precedents, procedures, pitfalls, historical context, or case studies where appropriate.

**Requirements**:
- **Structure**: Use HTML tags: <h2>, <h3>, <h4>, <p>, <ul>, <li>, <table>. 
- **Tone**: Professional, authoritative, human. Use Indian legal context (Rupees ₹, High Court, Supreme Court, IPC/BNS, CrPC/BNSS, CPC, etc.) naturally.
- **No Markdown**: Do NOT use markdown headers (like ##) or markdown formatting. Use HTML tags instead.${isLastHeading ? "\n- **SOURCES / CITATIONS**: Because this is the FINAL section of the article, you MUST generate a '<h3>Sources & References</h3>' section at the very end of your HTML output. This should be formatted as an HTML list containing exactly 5 highly relevant external sources. EVERY SINGLE BULLET POINT MUST CONTAIN A CLICKABLE HYPERLINK using an <a href=\"...\"> tag. DO NOT USE PLAIN TEXT BRACKETS FOR URLs. YOU WILL BE PENALIZED IF YOU DO NOT PROVIDE 5 SEPARATE <a href> LINKS TO REAL DOMAINS (e.g. sci.gov.in, main.sci.gov.in, ecourts.gov.in, barcouncilofindia.org, etc.)." : "\n- **NO CONCLUSIONS**: This is merely ONE section of a larger article. DO NOT write any concluding paragraphs, summaries, 'in conclusion', or wrap-ups at the end of this section. End the section factually and leave it open-ended."}${isComparison ? "\n- **COMPARISON TABLE**: Because this section is a comparison, you MUST include a highly detailed HTML <table> comparing the options or concepts across multiple parameters (e.g., Legal Basis, Applicability, Procedure, Remedies). Use <thead>, <tbody>, <tr>, <th>, and <td>." : ""}
- **Internal Linking**: You MUST naturally integrate at least one link to the following AMA Connect pages where relevant:
  - https://www.amaconnect.in/drafts
  - https://www.amaconnect.in/interviews
  - https://www.amaconnect.in/communities
  - https://www.amaconnect.in/success-stories
  - https://www.amaconnect.in/ask-me-anything
  - https://www.amaconnect.in/about
  - https://www.amaconnect.in/contact
- **Do NOT** include any title (H1), FAQs, or Reviews.
- **Do NOT** wrap the response in markdown code blocks like \`\`\`html or \`\`\`. Output RAW HTML only.
- **CRITICAL NEGATIVE CONSTRAINT**:
  Under no circumstances should you include any em dashes (—) anywhere in your entire response. Always use normal hyphens (-), colons, commas, or parentheses if needed instead.
`;

      const chunkUserMessage = context && context !== primaryKeyword
        ? `Write the 200-230 word HTML section for "<h2>${heading}</h2>".\nAdditional overall context: ${context}`
        : `Write the 200-230 word HTML section for "<h2>${heading}</h2>".`;

      try {
        const chunkCompletion = await openai.chat.completions.create({
          model: "gpt-4o",
          messages: [
            { role: "system", content: chunkSystemPrompt },
            { role: "user", content: chunkUserMessage },
          ],
          temperature: 0.7,
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
        console.error(`[AI Generator Flow] Error generating chunk for heading "${heading}":`, chunkError);
        return `<h2>${heading}</h2>\n<p>Comprehensive legal guide and advisory regarding ${heading}.</p>`;
      }
    });

    const finalHtmlBodyChunks = await Promise.all(chunkPromises);
    const cleanedDescription = finalHtmlBodyChunks.filter(Boolean).join('\n\n');
    console.log(`[AI Generator Flow] Step 2 complete. Total description length: ${cleanedDescription.split(/\s+/).length} words.`);
    console.log(`[AI Generator Flow] Step 3: Generating FAQs, reviews, and image prompt...`);

    // STEP 3: Generate FAQs and Reviews
    let faqs = [];
    let reviews = [];
    let suggestedImagePrompt = "Professional legal corporate advisory illustration";
    let infographicPrompt = "Infographic detailing the legal procedure breakdown";

    try {
      const step3SystemPrompt = `
You are a legal content strategist and SEO expert for AMA Connect.
Analyze the following generated article Title, Subtitle, and HTML Description, and generate:
1. At least 8-10 highly relevant, detailed FAQs (frequently asked questions) that directly relate to the article content.
2. 5 realistic customer review snippets (with Indian names) expressing high satisfaction with AMA Connect legal guidance.
3. A suggested image prompt describing a clean, professional, modern legal illustration suitable for the article's main hero section.
4. An infographic prompt describing a highly detailed, data-driven infographic visually explaining the crux of the article.
Article Title: ${step1Result.title}
Article Subtitle: ${step1Result.subtitle}

Article Description:
${cleanedDescription.substring(0, 4000)}

CRITICAL NEGATIVE CONSTRAINT:
Under no circumstances should you include any em dashes (—) anywhere in your response. Always use normal hyphens (-), colons (:), commas, parentheses, or rewrite the sentence to avoid them.

Return ONLY a JSON object with this exact structure:
{
  "faqs": [
    { "question": "Detailed question?", "answer": "Detailed helpful answer." }
  ],
  "reviews": [
    { "name": "Reviewer Full Name", "rating": 5, "review": "Detailed review text..." }
  ],
  "suggestedImagePrompt": "Visual description for the article's featured image",
  "infographicPrompt": "Visual description for the article's crux infographic"
}`;

      const step3Completion = await openai.chat.completions.create({
        model: "gpt-4o",
        messages: [
          { role: "system", content: step3SystemPrompt }
        ],
        response_format: { type: "json_object" },
        temperature: 0.8,
      });

      const step3ResultStr = sanitizeText(step3Completion.choices[0]?.message?.content || "{}");
      const step3Result = JSON.parse(step3ResultStr);

      faqs = step3Result.faqs || [];
      reviews = step3Result.reviews || [];
      suggestedImagePrompt = step3Result.suggestedImagePrompt || suggestedImagePrompt;
      infographicPrompt = step3Result.infographicPrompt || infographicPrompt;
    } catch (step3Error) {
      console.error("[AI Generator Flow] Error in Step 3:", step3Error);
    }

    // Build the final unified JSON object
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
      popularSearches: step1Result.popularSearches || []
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
        "Content-Type": "text/plain; charset=utf-8",
      },
    });
  } catch (error) {
    console.error("Error generating article:", error);
    return NextResponse.json(
      { error: "Internal server error", details: error instanceof Error ? error.message : String(error) },
      { status: 500 }
    );
  }
}
