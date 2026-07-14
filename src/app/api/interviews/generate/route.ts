import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

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
    const step1SystemPrompt = `You are an experienced legal journalist and feature writer.
Your task is to take a raw lawyer's writeup/interview and generate structured JSON metadata, FAQs, and client reviews as the first step towards creating a professional, magazine-style profile article.

The output MUST be a JSON object with the following fields:
- "title": A compelling, magazine-style headline based on the lawyer's journey, expertise, and key insights (e.g., 'From Courtrooms to Communities: How [Lawyer Name] is Redefining [Specialization]').
- "slug": A URL-safe slug generated from the title.
- "lawyer": The name of the lawyer/expert (extracted from the writeup or generated if not found).
- "specialization": The legal specialization of the expert lawyer (e.g. 'Employment Disputes & Labor Regulations').
- "bgColor": One of the allowed tailwind accent colors: 'bg-[#FFB5A7]/30', 'bg-[#D4AF37]/20', 'bg-[#B5E2FA]/30', 'bg-[#EDF2F4]/30', 'bg-[#C1F0C4]/30'. Select the one that best matches the topic.
- "metaTitle": Search engine optimized listing title (Max 60 characters).
- "metaDescription": Compelling snippet appearing in search results (Max 160 characters).
- "faqs": An array of at least 10 highly relevant, comprehensive Frequently Asked Questions (FAQs) based on the lawyer's journey, practice areas, and legal advice. Each FAQ must have a detailed, professional legal answer. Do not output fewer than 10 FAQs.
- "reviews": An array of at least 5 client feedback / review snippets. Each snippet must contain:
  - "name": A realistic Indian name.
  - "rating": An integer rating (must be 5).
  - "review": A detailed, positive comment praising the lawyer's guidance, professionalism, and representation. Do not output fewer than 5 review snippets.

CRITICAL NEGATIVE CONSTRAINT:
- Under no circumstances should you include any em dashes (—) anywhere in your entire response (including in FAQs, reviews, title, or description). Always use normal hyphens (-), colons, commas, or parentheses, or rewrite the sentence to avoid them.
- DO NOT output HTML entities like '&amp;' or '&amp;amp;' in any generated text (including titles, FAQs, and reviews). Use normal characters directly (e.g., write '&' directly as '&' or use the word 'and' instead).

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
    // NOTE: We ask the model to return RAW HTML (not wrapped in JSON) to avoid
    // JSON-string-escaping overhead that causes severe self-truncation. We parse
    // the HTML ourselves and wrap it into the data object in Step 3.
    const step2SystemPrompt = `You are an experienced legal journalist and feature writer producing premium, visually rich magazine-style profile articles for a legal website.

Your task: Transform a lawyer's raw interview transcript into a cohesive, publication-ready narrative article with rich HTML formatting. Do NOT reproduce Q&A format. Write in third person.

Return ONLY the raw HTML content. Do NOT wrap it in JSON or markdown code fences. Start directly with the first HTML tag.

WRITING STYLE:
- Third person narrative throughout.
- Seamlessly weave the lawyer's responses into a flowing story.
- Remove all interviewer references, conversational language, and transcript formatting.
- Preserve all facts, opinions, and insights. Do not invent information.

STRUCTURE:
- 8 to 10 sections, each with a unique <h2> subheading crafted specifically for THIS lawyer's story.
- Do NOT use generic headings like "Introduction" or "Areas of Practice". Instead, create vivid, article-specific headings drawn from the actual narrative (e.g., "Without a Family Chamber: How Himanshu Mishra Built His Practice from Scratch" or "From Prayagraj to London: When IP Law Crosses Borders").
- Thematic inspiration (do NOT copy literally): origin story, career struggles, areas of expertise, milestones, legal philosophy, advice for young lawyers, vision for the future, closing reflection.

MANDATORY RICH HTML FORMATTING:
You MUST use a variety of HTML elements throughout the article. A plain article with only <h2> and <p> tags is UNACCEPTABLE. Here is what EVERY article must include:

1. STYLED BLOCKQUOTES for 2-3 powerful direct quotes:
<blockquote style="border-left:4px solid #C69214; background:#FAF6EE; padding:1.25rem 1.5rem; margin:1.5rem 0; border-radius:8px; font-style:italic; font-size:1.05rem;">
"The actual quote from the lawyer goes here."
</blockquote>

2. STYLED CALLOUT CONTAINERS for 1-2 key takeaways or highlights:
<div style="background:linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%); border-left:4px solid #2b6cb0; padding:1.25rem 1.5rem; margin:1.5rem 0; border-radius:8px;">
<h4 style="margin-top:0; color:#1a365d;">Key Takeaway Title</h4>
<p>The important insight or summary content here.</p>
</div>

3. BULLET OR NUMBERED LISTS for enumerable items (practice areas, advice points, steps):
<ul>
<li><strong>Item label:</strong> Description of the item.</li>
</ul>

4. AT LEAST ONE TABLE for structured data (career timeline, practice areas, comparisons):
<table style="width:100%; border-collapse:collapse; margin:1.5rem 0;">
<thead><tr>
<th style="border:1px solid #e2e2e2; padding:0.75rem; text-align:left; background:#f7f7f7;">Column 1</th>
<th style="border:1px solid #e2e2e2; padding:0.75rem; text-align:left; background:#f7f7f7;">Column 2</th>
</tr></thead>
<tbody><tr>
<td style="border:1px solid #e2e2e2; padding:0.75rem;">Data</td>
<td style="border:1px solid #e2e2e2; padding:0.75rem;">Data</td>
</tr></tbody>
</table>

5. BOLD (<strong>) for key terms, legal concepts, case names, statute references throughout every section.
6. ITALIC (<em>) for book titles, Latin maxims, reflective observations.
7. <h3> sub-headings within sections that cover multiple sub-topics.

HERE IS AN EXAMPLE of what ONE section of the output should look like (follow this formatting pattern):

<h2>Without a Family Chamber: Building a Practice from the Ground Up</h2>
<p>For many young advocates in India, the path to establishing a legal career is paved by family connections, inherited clientele, and decades of accumulated goodwill. <strong>Himanshu Mishra</strong> had none of these advantages. As a <strong>first-generation advocate</strong>, he stepped into the corridors of the <strong>Allahabad High Court</strong> at Prayagraj with nothing but his law degree and an unwavering determination to build something meaningful.</p>
<p>The early years were defined by a steep learning curve. Without an established chamber to fall back on, every brief had to be earned through demonstrated competence and professional reliability. Mishra recalls the period with characteristic pragmatism, noting that the absence of a safety net forced him to develop skills that might otherwise have taken years to cultivate.</p>
<blockquote style="border-left:4px solid #C69214; background:#FAF6EE; padding:1.25rem 1.5rem; margin:1.5rem 0; border-radius:8px; font-style:italic; font-size:1.05rem;">
"Every opportunity had to be earned through learning, persistence, and professional credibility. Looking back, I consider this challenge a blessing."
</blockquote>
<p>His practice gradually expanded across multiple domains of litigation:</p>
<ul>
<li><strong>Criminal matters:</strong> Representing clients in proceedings before the High Court and subordinate courts.</li>
<li><strong>Matrimonial disputes:</strong> Navigating the complex intersection of family law and personal rights.</li>
<li><strong>Service law:</strong> Advocating for individuals in employment and government service disputes.</li>
<li><strong>Civil litigation:</strong> Handling property disputes, contractual matters, and injunction proceedings.</li>
</ul>
<div style="background:linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%); border-left:4px solid #2b6cb0; padding:1.25rem 1.5rem; margin:1.5rem 0; border-radius:8px;">
<h4 style="margin-top:0; color:#1a365d;">First-Generation Advantage</h4>
<p>Mishra views his background not as a disadvantage but as a catalyst. The absence of inherited networks forced the development of <strong>self-reliance, discipline, and continuous improvement</strong> - qualities that now form the bedrock of his professional identity.</p>
</div>

END OF EXAMPLE. Follow this formatting pattern throughout the entire article. Every section must contain a mix of narrative paragraphs, bold terms, and at least one additional element (list, quote, callout, or table). Do NOT write plain-text-only sections.

CRITICAL RULES:
- MINIMUM 3000 WORDS. Each section must have 300-400+ words with multiple paragraphs.
- DO NOT use em dashes (\u2014) anywhere. Use hyphens (-), colons, commas, or parentheses instead.
- DO NOT use markdown. Return semantic HTML only.
- DO NOT output HTML entities like '&amp;'. Write '&' directly or use the word 'and'.
- DO NOT stop writing until all sections are complete. Write extensively.`;

    const step2UserPrompt = `Lawyer: ${parsedStep1.lawyer || "Expert Lawyer"}
Specialization: ${parsedStep1.specialization || "Legal Expert"}
Title: ${parsedStep1.title || "Legal Guide"}

CRITICAL REMINDERS:
1. Write AT LEAST 3000 words. Each section needs 3-5 detailed paragraphs.
2. You MUST include styled blockquotes, styled callout divs, bullet/numbered lists, at least one table, bold keywords, and italic text throughout the article. A plain article with only headings and paragraphs is NOT acceptable.
3. Follow the HTML example shown in the system prompt for formatting.

Raw writeup/interview transcript:
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
        max_tokens: 16384,
        temperature: 0.75
      })
    });

    if (!step2Response.ok) {
      const errText = await step2Response.text();
      console.error("OpenAI Step 2 API call failed:", errText);
      return NextResponse.json({ error: `OpenAI API error in Step 2: ${step2Response.statusText}. Details: ${errText}` }, { status: step2Response.status });
    }

    const step2Data = await step2Response.json();
    let descriptionHtml = step2Data.choices?.[0]?.message?.content;
    if (!descriptionHtml) {
      return NextResponse.json({ error: "Failed to receive Step 2 description content from OpenAI" }, { status: 502 });
    }

    // Clean up any accidental markdown code fences the model might add
    descriptionHtml = descriptionHtml.trim();
    if (descriptionHtml.startsWith("```html")) {
      descriptionHtml = descriptionHtml.slice(7).trim();
    } else if (descriptionHtml.startsWith("```")) {
      descriptionHtml = descriptionHtml.slice(3).trim();
    }
    if (descriptionHtml.endsWith("```")) {
      descriptionHtml = descriptionHtml.slice(0, -3).trim();
    }

    // Programmatic em-dash removal post-processing for Step 2
    descriptionHtml = descriptionHtml.replace(/—/g, "-").replace(/\u2014/g, "-");

    // ==========================================
    // STEP 2B: AUTO-EXPAND IF UNDER 3000 WORDS
    // ==========================================
    const countWords = (html: string) => html.replace(/<[^>]*>/g, " ").split(/\s+/).filter(Boolean).length;
    let currentWordCount = countWords(descriptionHtml);
    console.log(`[Generate] Step 2 initial word count: ${currentWordCount}`);

    // If the description is still under 3000 words, make up to 2 expansion calls
    let expansionAttempts = 0;
    while (currentWordCount < 3000 && expansionAttempts < 2) {
      expansionAttempts++;
      const deficit = 3000 - currentWordCount;
      console.log(`[Generate] Step 2B expansion attempt ${expansionAttempts}: need ~${deficit} more words`);

      const expandPrompt = `You are an experienced legal journalist. Below is an existing magazine-style profile article about a lawyer. The article is currently only ${currentWordCount} words but MUST be at least 3000 words.

Your task: EXPAND and ENRICH the existing article by adding ${deficit + 500} more words of additional content. Do this by:
1. Adding 2-3 entirely new detailed paragraphs to EACH existing <h2> section.
2. Adding deeper context, background, analysis, and elaboration to every section.
3. Adding 1-2 new <h2> sections with unique, interview-specific headings and 3-4 paragraphs each.
4. Expanding any short paragraphs into richer, more detailed ones.
5. Enriching the visual formatting by adding where appropriate:
   - Bullet or numbered lists (<ul>/<ol>) for enumerable items like practice areas, advice points, or case types
   - A table (<table>) if a career timeline, practice area breakdown, or comparison would fit naturally
   - Styled blockquotes (style="border-left:4px solid #C69214; background:#FAF6EE; padding:1.25rem 1.5rem; margin:1.5rem 0; border-radius:8px; font-style:italic;") for powerful direct quotes
   - Styled callout containers (<div> with style="background:linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%); border-left:4px solid #2b6cb0; padding:1.25rem 1.5rem; margin:1.5rem 0; border-radius:8px;") for key takeaways
   - <strong> and <em> for emphasis on key terms and legal concepts

CRITICAL RULES:
- Return ONLY the complete, expanded HTML article (all sections, old and new combined). Do NOT return a fragment.
- Do NOT wrap in JSON or markdown code fences. Start directly with the first HTML tag.
- Do NOT use em dashes (—) anywhere. Use normal hyphens (-), colons, commas, or parentheses instead.
- Do NOT use markdown formatting. Use semantic HTML only.
- Do NOT invent facts not present in the original article or the raw writeup below.
- Maintain the professional, magazine-style editorial tone throughout.

Raw writeup/interview for reference:
${writeup}

EXISTING ARTICLE TO EXPAND:
${descriptionHtml}`;

      const expandResponse = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${apiKey}`
        },
        body: JSON.stringify({
          model: "gpt-4o",
          messages: [
            { role: "user", content: expandPrompt }
          ],
          max_tokens: 16384,
          temperature: 0.75
        })
      });

      if (!expandResponse.ok) {
        console.error(`[Generate] Step 2B expansion attempt ${expansionAttempts} failed`);
        break;
      }

      const expandData = await expandResponse.json();
      let expandedHtml = expandData.choices?.[0]?.message?.content;
      if (!expandedHtml) break;

      // Clean up code fences
      expandedHtml = expandedHtml.trim();
      if (expandedHtml.startsWith("```html")) expandedHtml = expandedHtml.slice(7).trim();
      else if (expandedHtml.startsWith("```")) expandedHtml = expandedHtml.slice(3).trim();
      if (expandedHtml.endsWith("```")) expandedHtml = expandedHtml.slice(0, -3).trim();

      // Em-dash removal
      expandedHtml = expandedHtml.replace(/—/g, "-").replace(/\u2014/g, "-");

      const expandedWordCount = countWords(expandedHtml);
      console.log(`[Generate] Step 2B expansion attempt ${expansionAttempts} result: ${expandedWordCount} words`);

      // Only accept the expansion if it's actually longer
      if (expandedWordCount > currentWordCount) {
        descriptionHtml = expandedHtml;
        currentWordCount = expandedWordCount;
      } else {
        break;
      }
    }

    console.log(`[Generate] Final description word count: ${currentWordCount}`);

    const parsedStep2 = { description: descriptionHtml };

    // ==========================================
    // STEP 3: CONSOLIDATE & SANITIZE BOTH PARTS
    // ==========================================
    const wordCount = (parsedStep2.description || "").split(/\s+/).filter(Boolean).length;
    const readMinutes = Math.max(5, Math.ceil(wordCount / 250));
    const duration = `${readMinutes} min read`;

    const mergedData = {
      ...parsedStep1,
      description: parsedStep2.description || "",
      duration
    };

    const topic = mergedData.title || "this legal matter";
    const expertName = mergedData.lawyer || "our panel of experts";

    // Pad FAQs to 10 if necessary
    if (!mergedData.faqs || !Array.isArray(mergedData.faqs) || mergedData.faqs.length < 10) {
      if (!mergedData.faqs) mergedData.faqs = [];
      while (mergedData.faqs.length < 10) {
        const num = mergedData.faqs.length + 1;
        mergedData.faqs.push({
          question: `What are the next key steps to discuss with ${expertName} regarding ${topic}?`,
          answer: `For detailed, personalized guidance on ${topic}, consult ${expertName} directly through AMA Connect to review your specific documentation and legal options.`
        });
      }
    }

    // Pad reviews to 5 if necessary using LLM generation according to context
    if (!mergedData.reviews || !Array.isArray(mergedData.reviews) || mergedData.reviews.length < 5) {
      if (!mergedData.reviews) mergedData.reviews = [];
      
      const neededCount = 5 - mergedData.reviews.length;
      try {
        const reviewPrompt = `You are a master legal content coordinator.
The user needs exactly ${neededCount} additional client reviews for a legal guide on the topic "${topic}" by the lawyer "${expertName}".
Each review must be a detailed, positive comment praising the lawyer's guidance on the topic, generated specifically based on the context provided in the writeup.
Return a JSON object containing a "reviews" array. Each review in the array must have:
- "name": A realistic Indian name
- "rating": 5
- "review": The detailed positive feedback based on the writeup context

Context writeup:
${writeup}

CRITICAL:
- Do not use any em dashes (—).
- Do not output HTML entities.
- Return ONLY valid JSON matching the structure: { "reviews": [ { "name": "...", "rating": 5, "review": "..." } ] }`;

        const padResponse = await fetch("https://api.openai.com/v1/chat/completions", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${apiKey}`
          },
          body: JSON.stringify({
            model: "gpt-4o",
            messages: [
              { role: "user", content: reviewPrompt }
            ],
            response_format: { type: "json_object" },
            temperature: 0.7
          })
        });

        if (padResponse.ok) {
          const padData = await padResponse.json();
          let padJsonText = padData.choices?.[0]?.message?.content || "{}";
          padJsonText = padJsonText.replace(/—/g, "-").replace(/\u2014/g, "-");
          const parsedPad = JSON.parse(padJsonText);
          if (parsedPad.reviews && Array.isArray(parsedPad.reviews)) {
            for (const r of parsedPad.reviews) {
              if (mergedData.reviews.length < 5) {
                mergedData.reviews.push({
                  name: r.name || "Client",
                  rating: typeof r.rating === 'number' ? r.rating : 5,
                  review: r.review || `Highly practical guidelines provided for ${topic}.`
                });
              }
            }
          }
        }
      } catch (err) {
        console.error("Error generating reviews fallback via LLM:", err);
      }

      // Absolute emergency fallback in case LLM call failed or returned insufficient reviews:
      // construct them using the topic and expertName directly, rather than static templates.
      const emergencyNames = ["Vikram Malhotra", "Sneha Iyer", "Rajesh Singhal", "Priya Nair", "Anil Deshmukh"];
      while (mergedData.reviews.length < 5) {
        const idx = mergedData.reviews.length;
        mergedData.reviews.push({
          name: emergencyNames[idx % emergencyNames.length],
          rating: 5,
          review: `Highly appreciate the clear guidance on ${topic} provided by ${expertName}. It helped address our legal issues effectively.`
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
