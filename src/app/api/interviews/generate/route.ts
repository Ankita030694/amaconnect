import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session || session.user?.email !== process.env.ADMIN_EMAIL) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { writeup } = await request.json();

    if (!writeup || typeof writeup !== "string" || !writeup.trim()) {
      return NextResponse.json({ error: "Writeup is required and must be a non-empty string" }, { status: 400 });
    }

    const apiKey = process.env.HELLO_DROP_CHOO;
    if (!apiKey) {
      return NextResponse.json({ error: "OpenAI API key (HELLO_DROP_CHOO) is not configured in environment variables" }, { status: 500 });
    }

    // ==========================================
    // STEP 1: GENERATE METADATA, FAQS, & REVIEWS
    // ==========================================
    const step1SystemPrompt = `You are a master legal content coordinator for AMA Connect.
Your task is to take a raw lawyer's writeup/interview and generate the structured JSON schema data: metadata, FAQs, and verified client reviews.

The output MUST be a JSON object with the following fields:
- "title": A compelling, click-worthy, SEO-optimized title for the interview guide (e.g. 'Salary Not Paid on Time? Complete Recovery Protocol Guide').
- "slug": A URL-safe slug generated from the title (e.g. 'salary-not-paid-on-time-complete-recovery-protocol-guide').
- "lawyer": The name of the lawyer/expert (extracted from the writeup or generated if not found).
- "specialization": The legal specialization of the expert lawyer (e.g. 'Employment Disputes & Labor Regulations').
- "bgColor": One of the allowed tailwind accent colors: 'bg-[#FFB5A7]/30', 'bg-[#D4AF37]/20', 'bg-[#B5E2FA]/30', 'bg-[#EDF2F4]/30', 'bg-[#C1F0C4]/30'. Select the one that best matches the topic.
- "metaTitle": Search engine optimized listing title (Max 60 characters).
- "metaDescription": Compelling snippet appearing in search results (Max 160 characters).
- "faqs": An array of at least 10 highly relevant, comprehensive Frequently Asked Questions (FAQs) based on the topic. Each FAQ must have a detailed, professional legal answer. Do not output fewer than 10 FAQs.
- "reviews": An array of at least 5 client feedback / review snippets. Each snippet must contain:
  - "name": A realistic Indian name.
  - "rating": An integer rating (must be 5).
  - "review": A detailed, positive comment praising the lawyer's guidance on the topic. Do not output fewer than 5 review snippets.

CRITICAL NEGATIVE CONSTRAINT:
Under no circumstances should you include any em dashes (—) anywhere in your entire response (including in FAQs, reviews, title, or description). Always use normal hyphens (-), colons (:), commas, parentheses, or rewrite the sentence to avoid them.

Return ONLY a valid JSON object matching the above structure.`;

    const step1Response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: "gpt-4o",
        messages: [
          { role: "system", content: step1SystemPrompt },
          { role: "user", content: `Here is the raw writeup: ${writeup}` }
        ],
        response_format: { type: "json_object" },
        temperature: 0.7
      })
    });

    if (!step1Response.ok) {
      const errText = await step1Response.text();
      console.error("OpenAI Step 1 API call failed:", errText);
      return NextResponse.json({ error: `OpenAI API error in Step 1: ${step1Response.statusText}. Details: ${errText}` }, { status: step1Response.status });
    }

    const step1Data = await step1Response.json();
    let step1JsonText = step1Data.choices?.[0]?.message?.content;
    if (!step1JsonText) {
      return NextResponse.json({ error: "Failed to receive Step 1 metadata content from OpenAI" }, { status: 502 });
    }

    // Programmatic em-dash removal post-processing for Step 1
    step1JsonText = step1JsonText.replace(/—/g, "-").replace(/\u2014/g, "-");
    const parsedStep1 = JSON.parse(step1JsonText);

    // ==========================================
    // STEP 2: GENERATE EXHAUSTIVE 3000+ WORD HTML DESCRIPTION
    // ==========================================
    const step2SystemPrompt = `You are a master legal copywriter and chief editor for AMA Connect.
Your task is to write an exhaustive, highly detailed, deeply comprehensive legal analysis and case handbook based on a raw writeup, a title, a lawyer's name, and their specialization.

The output MUST be a JSON object with a single field: "description", which contains a highly expanded HTML rich text content.
This HTML content must be structured into exactly 9 detailed sections (each headed by a <h2> or <h3> tag, containing multiple paragraphs, bullet points, numbered lists, bold keywords, blockquotes, etc.):
1. Executive Summary & Overview (Target: 350+ words)
2. Socio-Legal Context & Legislative Intent in India (Target: 350+ words)
3. Direct Statutory Analysis & Relevant Legal Provisions of the Acts (Target: 500+ words)
4. Step-by-Step Practical Legal Recourse & Filing Procedure (Target: 500+ words)
5. Evidence Collection, Verification, & Electronic/Hard Copy Safeguarding Protocol (Target: 400+ words)
6. Drafting and Dispatching of Demand Notices & Formal Legal Notices (Target: 400+ words)
7. Reconciliation, Mediation, and Litigation Strategy (Target: 350+ words)
8. In-Depth Case Study Examples, Court Precedents & Judgments (Target: 350+ words)
9. Critical Warnings, Advocate Advice, & Immediate Next Steps (Target: 300+ words)

CRITICAL INSTRUCTIONS:
- Ensure the combined word count of the entire HTML description is AT LEAST 3000 words. Write extensively, explaining every legal concept, statute section (e.g. Payment of Wages Act Section 33C, etc.), and process in absolute detail. Expand heavily on background facts, procedures, drafts, and strategies.
- DO NOT USE MARKDOWN (such as **bold** or # headers) in the description. Return valid, well-structured, semantic HTML.
- DO NOT use em dashes (—) anywhere in your response. Always use normal hyphens (-), colons, commas, or parentheses if needed instead.

Return ONLY a valid JSON object of structure: { "description": "HTML content" }`;

    const step2UserPrompt = `Lawyer: ${parsedStep1.lawyer || "Expert Lawyer"}
Specialization: ${parsedStep1.specialization || "Legal Expert"}
Title: ${parsedStep1.title || "Legal Guide"}
Raw writeup sent:
${writeup}`;

    const step2Response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: "gpt-4o",
        messages: [
          { role: "system", content: step2SystemPrompt },
          { role: "user", content: step2UserPrompt }
        ],
        response_format: { type: "json_object" },
        temperature: 0.6
      })
    });

    if (!step2Response.ok) {
      const errText = await step2Response.text();
      console.error("OpenAI Step 2 API call failed:", errText);
      return NextResponse.json({ error: `OpenAI API error in Step 2: ${step2Response.statusText}. Details: ${errText}` }, { status: step2Response.status });
    }

    const step2Data = await step2Response.json();
    let step2JsonText = step2Data.choices?.[0]?.message?.content;
    if (!step2JsonText) {
      return NextResponse.json({ error: "Failed to receive Step 2 description content from OpenAI" }, { status: 502 });
    }

    // Programmatic em-dash removal post-processing for Step 2
    step2JsonText = step2JsonText.replace(/—/g, "-").replace(/\u2014/g, "-");
    const parsedStep2 = JSON.parse(step2JsonText);

    // ==========================================
    // STEP 3: CONSOLIDATE & SANITIZE BOTH PARTS
    // ==========================================
    const mergedData = {
      ...parsedStep1,
      description: parsedStep2.description || ""
    };

    // Pad FAQs to 10 if necessary
    if (!mergedData.faqs || !Array.isArray(mergedData.faqs) || mergedData.faqs.length < 10) {
      if (!mergedData.faqs) mergedData.faqs = [];
      while (mergedData.faqs.length < 10) {
        mergedData.faqs.push({
          question: `General Legal Recourse Query ${mergedData.faqs.length + 1}`,
          answer: `Consult a professional advocate at AMA Connect for absolute statutory guidance and personalized review of specific claim records.`
        });
      }
    }

    // Pad reviews to 5 if necessary
    if (!mergedData.reviews || !Array.isArray(mergedData.reviews) || mergedData.reviews.length < 5) {
      if (!mergedData.reviews) mergedData.reviews = [];
      const mockNames = ["Vikram Malhotra", "Sneha Iyer", "Rajesh Singhal", "Priya Nair", "Anil Deshmukh"];
      while (mergedData.reviews.length < 5) {
        const idx = mergedData.reviews.length;
        mergedData.reviews.push({
          name: mockNames[idx % mockNames.length],
          rating: 5,
          review: `Extremely practical guidelines provided. The case study laid out exactly how to proceed with legal recourse and it helped tremendously!`
        });
      }
    }

    // Final em-dash clean up across all fields to guarantee compliance
    const sanitizeText = (txt: string) => txt.replace(/—/g, "-").replace(/\u2014/g, "-");
    
    if (mergedData.title) mergedData.title = sanitizeText(mergedData.title);
    if (mergedData.description) mergedData.description = sanitizeText(mergedData.description);
    if (mergedData.metaTitle) mergedData.metaTitle = sanitizeText(mergedData.metaTitle);
    if (mergedData.metaDescription) mergedData.metaDescription = sanitizeText(mergedData.metaDescription);
    if (mergedData.faqs) {
      mergedData.faqs = mergedData.faqs.map((faq: any) => ({
        question: sanitizeText(faq.question || ""),
        answer: sanitizeText(faq.answer || "")
      }));
    }
    if (mergedData.reviews) {
      mergedData.reviews = mergedData.reviews.map((rev: any) => ({
        name: sanitizeText(rev.name || ""),
        rating: typeof rev.rating === 'number' ? rev.rating : 5,
        review: sanitizeText(rev.review || "")
      }));
    }

    return NextResponse.json(mergedData);
  } catch (error: any) {
    console.error("Error in generate route:", error);
    return NextResponse.json({ error: error.message || "An unexpected error occurred during generation" }, { status: 500 });
  }
}
