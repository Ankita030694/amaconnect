import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
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

    // Save image directly to MongoDB Atlas
    const newImage = new ImageFile({
      filename: file.name || "uploaded-image.png",
      contentType: file.type || "image/png",
      data: buffer,
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
