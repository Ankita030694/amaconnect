import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import dbConnect from "@/lib/dbConnect";
import { ImageFile } from "@/lib/models";
export const maxDuration = 300;

export async function POST(req: NextRequest) {
  // Validate NextAuth session tailored for this project
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

  // Helper function to download and save an image to MongoDB ImageFile collection
  const saveImageToDb = async (imageUrl: string, promptText: string): Promise<string> => {
    await dbConnect();
    let buffer: Buffer;
    let contentType = "image/png";

    if (imageUrl.startsWith("data:")) {
      const base64Parts = imageUrl.split(",");
      const base64Data = base64Parts[1];
      buffer = Buffer.from(base64Data, "base64");
      const match = base64Parts[0].match(/data:(.*?);base64/);
      if (match) {
        contentType = match[1];
      }
    } else {
      const imageFetchResponse = await fetch(imageUrl);
      if (!imageFetchResponse.ok) {
        throw new Error(`Failed to fetch generated image: ${imageFetchResponse.statusText}`);
      }
      const imageArrayBuffer = await imageFetchResponse.arrayBuffer();
      buffer = Buffer.from(imageArrayBuffer);
      contentType = imageFetchResponse.headers.get("content-type") || "image/png";
    }

    let finalBuffer: any = buffer;
    let finalContentType = contentType;

    try {
      const sharp = (await import("sharp")).default;
      let pipeline = sharp(buffer);
      const metadata = await pipeline.metadata();

      if (metadata.format === "jpeg" || metadata.format === "png" || metadata.format === "webp") {
        if (metadata.width && metadata.width > 1200) {
          pipeline = pipeline.resize({
            width: 1200,
            fit: "inside",
            withoutEnlargement: true
          });
        }

        if (metadata.format === "png") {
          finalBuffer = await pipeline.png({ quality: 80, compressionLevel: 9, palette: true }).toBuffer();
          finalContentType = "image/png";
        } else {
          finalBuffer = await pipeline.jpeg({ quality: 80, mozjpeg: true }).toBuffer();
          finalContentType = "image/jpeg";
        }
      }
    } catch (sharpError) {
      console.warn("Could not process dynamic generated image with sharp, saving raw file:", sharpError);
    }

    const filename = `ai-generated-${Date.now()}.png`;

    const newImage = new ImageFile({
      filename,
      contentType: finalContentType,
      data: finalBuffer,
      created: new Date()
    });

    const savedImage = await newImage.save();
    return `/api/images/${savedImage._id}`;
  };

  try {
    const body = await req.json().catch(() => ({}));
    let rawPrompt = typeof body.prompt === "string" ? body.prompt : (typeof body.prompt === "object" && body.prompt !== null ? (body.prompt?.prompt || body.prompt?.description || JSON.stringify(body.prompt)) : "");
    if (!rawPrompt || !rawPrompt.trim() || rawPrompt.includes("[object Object]")) {
      rawPrompt = "Professional legal infographic poster, executive dashboard layout: Top Dark Mocha Brown (#382E26) and Ochre Gold (#C9A227) title banner, 3-column structured grid with Key Statistics, Comparative bar chart in Ochre Gold and Mocha Brown, Numbered 6-step legal process roadmap, and horizontal timeline of events. Crisp flat vector illustration, warm ivory background, Dark Mocha Brown and Ochre Gold corporate theme. STRICTLY NO BLUE COLORS.";
    }

    let finalPrompt = rawPrompt.trim();
    if (/infographic|diagram|flowchart|workflow|step-by-step|procedure|insights|overview|process/i.test(finalPrompt) && !finalPrompt.includes("Executive Dashboard Architecture")) {
      finalPrompt = `Legal Infographic Poster, Executive Dashboard Architecture: "${finalPrompt}". Top Dark Mocha Brown (#382E26) and Ochre Gold (#C9A227) title header banner, 3-column structured grid containing (1) Key Statistics with 4 circular gold metric badges, (2) Dual-color comparative bar chart in Ochre Gold and Dark Mocha Brown, (3) Numbered step-by-step 6-stage legal roadmap with dotted connector lines, and (4) Horizontal timeline of events at the bottom. Footer contact bar in Dark Mocha Brown MUST display exact credentials: "📞 +91 87003 43611 | 🌐 www.amaconnect.in | ✉️ notify@amaconnect.in | 📍 Sector 57, Gurugram, Delhi NCR". Crisp flat vector graphics, high contrast, warm cream background, STRICT Dark Mocha Brown (#382E26) and Ochre Gold (#C9A227) brand theme. STRICT NEGATIVE: NO BLUE COLORS OF ANY KIND. NEVER use fake numbers like 9876543210 or fake domains. Ultra sharp professional quality, uncropped full bleed framing.`;
    } else if (!finalPrompt.toLowerCase().includes("no blue")) {
      finalPrompt = `${finalPrompt}. Theme and color palette MUST be strictly Dark Mocha Brown (#382E26 / #2D2219) and Regal Ochre Gold (#C9A227 / #D4AF37) with warm amber and ivory highlights. If any contact details are displayed, they must strictly be: Phone: +91 87003 43611, Website: www.amaconnect.in, Email: notify@amaconnect.in. STRICT NEGATIVE: NO BLUE COLORS OF ANY KIND. NO FAKE CONTACT DETAILS. Full composition without cropping.`;
    }

    console.log(`[AI Image Generator] Requesting gpt-image-2 generation with prompt: "${finalPrompt.substring(0, 100)}..."`);
    
    // Primary generation with gpt-image-2
    const openAiResponse = await fetch("https://api.openai.com/v1/images/generations", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "gpt-image-2",
        prompt: finalPrompt,
        n: 1,
        size: "1024x1024",
      }),
    });

    const data = await openAiResponse.json();

    if (!openAiResponse.ok) {
      console.warn(`[AI Image Generator] gpt-image-2 response: ${data.error?.message || JSON.stringify(data)}. Attempting high-precision legal fallback...`);
      
      const strictlyAnchoredLegalPrompt = `flat vector legal infographic poster in dark mocha brown and ochre gold about ${encodeURIComponent(finalPrompt.substring(0, 200))}`;
      const dynamicFallbackUrl = `https://image.pollinations.ai/prompt/${strictlyAnchoredLegalPrompt}?width=1024&height=1024&nologo=true&seed=${Math.floor(Math.random() * 1000000)}`;
      
      const savedUrl = await saveImageToDb(dynamicFallbackUrl, finalPrompt);
      
      return NextResponse.json({ 
        success: true, 
        imageUrl: savedUrl, 
        isFallback: true, 
        warning: `gpt-image-2 notice: ${data.error?.message || "fallback resolved"}`
      });
    }

    const firstItem = data.data?.[0];
    if (!firstItem) {
      throw new Error("No data returned from OpenAI");
    }

    const imageUrl = firstItem.b64_json 
      ? `data:image/png;base64,${firstItem.b64_json}` 
      : firstItem.url;

    if (!imageUrl) {
      throw new Error("No image URL or base64 data returned from OpenAI");
    }

    // Save generated OpenAI image permanently to MongoDB
    const savedUrl = await saveImageToDb(imageUrl, finalPrompt);

    return NextResponse.json({ success: true, imageUrl: savedUrl });
  } catch (error: any) {
    console.error("Critical Image API Route Error:", error);
    
    // Dynamic prompt-based generation as absolute robust fallback
    try {
      const body = await req.json().catch(() => ({}));
      const promptText = typeof body.prompt === "string" ? body.prompt : "Legal law court professional infographic poster";
      const encodedPrompt = encodeURIComponent(`indian legal law infographic poster for ${promptText.substring(0, 150)}`);
      const dynamicFallbackUrl = `https://image.pollinations.ai/prompt/${encodedPrompt}?width=1024&height=1024&nologo=true&seed=${Math.floor(Math.random() * 1000000)}`;
      
      const savedUrl = await saveImageToDb(dynamicFallbackUrl, promptText);
      
      return NextResponse.json({ 
        success: true, 
        imageUrl: savedUrl, 
        isFallback: true, 
        warning: `Resolved via dynamic legal fallback.` 
      });
    } catch (fallbackErr: any) {
      console.error("Critical fallback failed:", fallbackErr);
      const defaultFallbackUrl = "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1024&h=1024&q=80";
      const savedUrl = await saveImageToDb(defaultFallbackUrl, "Default legal balance vector");
      return NextResponse.json({ 
        success: true, 
        imageUrl: savedUrl, 
        isFallback: true, 
        warning: `Loaded default legal vector.` 
      });
    }
  }
}
