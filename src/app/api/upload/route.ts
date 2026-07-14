import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import dbConnect from "@/lib/dbConnect";
import { ImageFile } from "@/lib/models";

export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session || session.user?.email !== process.env.ADMIN_EMAIL) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const formData = await request.formData();
    const file = formData.get("file") as File;
    
    if (!file) {
      return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
    }

    // Connect to MongoDB
    await dbConnect();

    // Read file data as arrayBuffer and convert to binary buffer
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    let finalBuffer: any = buffer;
    let finalContentType = file.type || "image/png";

    try {
      const sharp = (await import("sharp")).default;
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
      console.warn("Could not process uploaded image with sharp, saving raw file:", sharpError);
    }

    // Save image directly to MongoDB Atlas
    const newImage = new ImageFile({
      filename: file.name || "uploaded-image.png",
      contentType: finalContentType,
      data: finalBuffer,
      created: new Date()
    });

    const savedImage = await newImage.save();

    // Return custom public retrieval endpoint path
    return NextResponse.json({ 
      success: true, 
      url: `/api/images/${savedImage._id}` 
    });
  } catch (error: any) {
    console.error("MongoDB binary upload handler error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
