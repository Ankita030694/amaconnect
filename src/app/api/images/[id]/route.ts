import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import { ImageFile } from "@/lib/models";
import sharp from "sharp";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await dbConnect();
    
    // Await params safely for Next.js async parameters
    const resolvedParams = await params;
    const { id } = resolvedParams;

    if (!id || id.length !== 24) {
      return new Response("Invalid Image Identifier", { status: 400 });
    }

    const image = await ImageFile.findById(id);

    if (!image) {
      return new Response("Image not found", { status: 404 });
    }

    // Parse query parameters
    const url = new URL(request.url);
    const wStr = url.searchParams.get("w");
    const hStr = url.searchParams.get("h");
    const qStr = url.searchParams.get("q");

    let width = wStr ? parseInt(wStr, 10) : null;
    let height = hStr ? parseInt(hStr, 10) : null;
    let quality = qStr ? parseInt(qStr, 10) : 80;

    // Content negotiation: check if browser accepts WebP
    const acceptHeader = request.headers.get("accept") || "";
    const supportsWebp = acceptHeader.includes("image/webp");

    let pipeline = sharp(image.data);
    const metadata = await pipeline.metadata();

    // Resize logic: only resize if requested, or if the original is too large (>1200px)
    if (width || height) {
      pipeline = pipeline.resize({
        width: width || undefined,
        height: height || undefined,
        fit: "inside",
        withoutEnlargement: true
      });
    } else if (metadata.width && metadata.width > 1200) {
      pipeline = pipeline.resize({
        width: 1200,
        fit: "inside",
        withoutEnlargement: true
      });
    }

    let optimizedBuffer: Buffer;
    let contentType: string;

    if (supportsWebp) {
      optimizedBuffer = await pipeline.webp({ quality }).toBuffer();
      contentType = "image/webp";
    } else {
      // Compress in original format
      if (metadata.format === "png") {
        optimizedBuffer = await pipeline.png({ quality, compressionLevel: 9, palette: true }).toBuffer();
        contentType = "image/png";
      } else {
        optimizedBuffer = await pipeline.jpeg({ quality, mozjpeg: true }).toBuffer();
        contentType = "image/jpeg";
      }
    }

    // Create a standard Response containing the binary buffer
    return new Response(new Uint8Array(optimizedBuffer), {
      headers: {
        "Content-Type": contentType,
        "Cache-Control": "public, max-age=31536000, immutable", // Leverages browser/CDN cache
        "Vary": "Accept", // Tells CDN to cache webp and non-webp versions separately
      },
    });
  } catch (error: any) {
    console.error("Error serving image from MongoDB:", error);
    return new Response("Internal Server Error", { status: 500 });
  }
}
