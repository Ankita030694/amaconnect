import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import OpenAI from "openai";

export const dynamic = "force-dynamic";
export const revalidate = 0;
export const maxDuration = 300; 

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

  const openai = new OpenAI({
    apiKey: apiKey,
  });

  const sanitizeText = (txt: string) => txt.replace(/—/g, "-").replace(/\u2014/g, "-");

  try {
    const body = await request.json();
    const writeup = body.writeup;

    if (!writeup) {
      return NextResponse.json({ error: "Writeup or Context is required" }, { status: 400 });
    }

    console.log(`[AI News Generator] Step 1: Generating metadata (Title, Description, Slug)...`);

    // STEP 1: Generate Title, Description, Slug
    const step1Completion = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [
        {
          role: "system",
          content: `You are a professional legal journalist for AMA Connect.
Based on the provided raw writeup or topic, generate an engaging, factual news headline (title), a concise summary (description), and a URL-friendly slug.

CRITICAL NEGATIVE CONSTRAINT:
Do not include any em dashes (—) anywhere in your response. Always use normal hyphens (-), colons (:), or commas.

Return ONLY a JSON object with this exact structure:
{
  "title": "Factual and engaging news headline (max 80 chars)",
  "description": "Concise summary of the news (1-2 sentences)",
  "slug": "url-friendly-slug"
}`
        },
        { role: "user", content: writeup }
      ],
      response_format: { type: "json_object" },
      temperature: 0.7,
    });

    const step1ResultStr = sanitizeText(step1Completion.choices[0].message.content || "{}");
    const step1Result = JSON.parse(step1ResultStr);

    console.log(`[AI News Generator] Step 1 complete. Title: "${step1Result.title}"`);
    console.log(`[AI News Generator] Step 2: Generating full news article...`);

    // STEP 2: Generate Full News Article
    const step2SystemPrompt = `
You are a professional legal journalist and editor for AMA Connect (https://amaconnect.in/). 
Write a high-quality, factual, and concise legal news article based on the provided context.

Title: ${step1Result.title}
Description: ${step1Result.description}

**Requirements**:
- **Format**: Use HTML tags for structure: <h2>, <h3>, <p>, <ul>, <li>. Do NOT wrap the entire response in a master <div>. Just output the inner HTML elements directly.
- **Length & Detail**: Write a detailed news article (around 500-800 words). Include the background, key facts, court observations (if applicable), and implications. Break it up logically with subheadings.
- **Tone**: Journalistic, objective, professional, and authoritative. Use Indian context (Rupees ₹, RBI, specific courts) naturally if relevant.
- **No Markdown**: Do NOT use markdown headers (like ## or ###) or markdown bold (like **text**). Use HTML tags instead (like <h2>, <strong>).
- **CRITICAL NEGATIVE CONSTRAINT**: DO NOT USE EM DASHES (—). Use normal hyphens (-) or rephrase.
`;

    const step2Completion = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [
        { role: "system", content: step2SystemPrompt },
        { role: "user", content: `Here is the raw context/writeup to turn into a news article:\n\n${writeup}` }
      ],
      temperature: 0.7,
    });

    let htmlContent = sanitizeText(step2Completion.choices[0].message.content || "");
    
    // Cleanup any markdown code block artifacts
    htmlContent = htmlContent.replace(/^```html\s*/, "").replace(/```$/, "").trim();

    console.log(`[AI News Generator] Flow complete.`);

    return NextResponse.json({
      title: step1Result.title,
      description: step1Result.description,
      slug: step1Result.slug,
      content: htmlContent
    });

  } catch (error: any) {
    console.error("[AI News Generator] Error:", error);
    return NextResponse.json(
      { error: error.message || "Failed to generate news content" },
      { status: 500 }
    );
  }
}
