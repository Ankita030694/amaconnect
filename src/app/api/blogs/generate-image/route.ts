import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import dbConnect from "@/lib/dbConnect";
import { ImageFile } from "@/lib/models";
import sharp from "sharp";

export const maxDuration = 300;

export async function POST(req: NextRequest) {
  // Validate NextAuth session tailored for this project
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
      let pipeline = sharp(buffer);
      const metadata = await pipeline.metadata();

      if (metadata.format === "jpeg" || metadata.format === "png") {
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
    const body = await req.json();
    const prompt = typeof body.prompt === "string" ? body.prompt : undefined;
    if (!prompt) {
      return NextResponse.json({ error: "Missing image prompt string parameter." }, { status: 400 });
    }

    console.log("[AI Image Generator] Attempting generation with gpt-image-2 model (1024x1024 resolution)...");
    
    // Attempt gpt-image-2 image generation
    const openAiResponse = await fetch("https://api.openai.com/v1/images/generations", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "gpt-image-2",
        prompt: prompt,
        n: 1,
        size: "1024x1024",
      }),
    });

    const data = await openAiResponse.json();

    if (!openAiResponse.ok) {
      console.warn(`[AI Image Generator] OpenAI gpt-image-2 generation failed: ${data.error?.message || "empty response"}. Falling back to dynamic prompt-based Pollinations AI (FLUX) generation...`);
      
      // Dynamic prompt-based generation using state-of-the-art open-source diffusion models via Pollinations AI (takes ~2 seconds)
      const encodedPrompt = encodeURIComponent(prompt);
      const dynamicFallbackUrl = `https://image.pollinations.ai/prompt/${encodedPrompt}?width=1024&height=1024&nologo=true&seed=${Math.floor(Math.random() * 1000000)}`;
      
      const savedUrl = await saveImageToDb(dynamicFallbackUrl, prompt);
      
      return NextResponse.json({ 
        success: true, 
        imageUrl: savedUrl, 
        isFallback: true, 
        warning: "OpenAI generation failed; successfully resolved via high-speed Pollinations AI (FLUX) fallback."
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
    const savedUrl = await saveImageToDb(imageUrl, prompt);

    return NextResponse.json({ success: true, imageUrl: savedUrl });
  } catch (error: any) {
    console.error("Critical Image API Route Error:", error);
    
    // Dynamic prompt-based generation as absolute robust fallback
    try {
      const body = await req.json().catch(() => ({}));
      const promptText = typeof body.prompt === "string" ? body.prompt : "Legal money recovery professional illustration";
      const encodedPrompt = encodeURIComponent(promptText);
      const dynamicFallbackUrl = `https://image.pollinations.ai/prompt/${encodedPrompt}?width=1024&height=1024&nologo=true&seed=${Math.floor(Math.random() * 1000000)}`;
      
      const savedUrl = await saveImageToDb(dynamicFallbackUrl, promptText);
      
      return NextResponse.json({ 
        success: true, 
        imageUrl: savedUrl, 
        isFallback: true, 
        warning: `Critical crash: ${error.message}. Successfully resolved via dynamic Pollinations AI (FLUX) fallback.` 
      });
    } catch (fallbackErr: any) {
      console.error("Critical fallback failed:", fallbackErr);
      const defaultFallbackUrl = "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1024&h=1024&q=80";
      try {
        const savedUrl = await saveImageToDb(defaultFallbackUrl, "Default legal balance vector");
        return NextResponse.json({ 
          success: true, 
          imageUrl: savedUrl, 
          isFallback: true, 
          warning: `All attempts crashed. Loaded default legal balance vector.` 
        });
      } catch (dbErr) {
        return NextResponse.json({ 
          success: true, 
          imageUrl: defaultFallbackUrl, 
          isFallback: true, 
          warning: `All attempts and database save crashed. Loaded default external legal balance vector.` 
        });
      }
    }
  }
}
