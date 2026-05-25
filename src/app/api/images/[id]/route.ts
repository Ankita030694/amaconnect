import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import { ImageFile } from "@/lib/models";

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

    // Create a standard Response containing the binary buffer
    return new Response(image.data, {
      headers: {
        "Content-Type": image.contentType || "image/png",
        "Cache-Control": "public, max-age=31536000, immutable", // Leverages browser cache
      },
    });
  } catch (error: any) {
    console.error("Error serving image from MongoDB:", error);
    return new Response("Internal Server Error", { status: 500 });
  }
}
