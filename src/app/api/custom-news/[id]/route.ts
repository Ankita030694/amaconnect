import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import dbConnect from "@/lib/dbConnect";
import { CustomNews } from "@/lib/models";

// GET a specific custom news article
export async function GET(request: Request, { params }: any) {
  try {
    await dbConnect();
    const { id } = await params;
    const article = await CustomNews.findById(id);
    if (!article) return NextResponse.json({ error: "Not found" }, { status: 404 });
    return NextResponse.json(article);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// PUT: Update an existing custom news article
export async function PUT(request: Request, { params }: any) {
  try {
    const session = await getServerSession(authOptions);
    if (!session || session.user?.email !== process.env.ADMIN_EMAIL) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    await dbConnect();
    const body = await request.json();

    if (body.title !== undefined) {
      if (!body.title || !body.description || !body.urlToImage) {
        return NextResponse.json(
          { error: "Required fields (title, description, urlToImage) are missing." },
          { status: 400 }
        );
      }
      if (!body.url && !body.content) {
        return NextResponse.json(
          { error: "Either 'url' or 'content' must be provided." },
          { status: 400 }
        );
      }
    }

    const { id } = await params;
    const updatedArticle = await CustomNews.findByIdAndUpdate(
      id,
      { $set: body },
      { new: true }
    );

    if (!updatedArticle) return NextResponse.json({ error: "Not found" }, { status: 404 });
    return NextResponse.json(updatedArticle);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// DELETE: Remove a custom news article
export async function DELETE(request: Request, { params }: any) {
  try {
    const session = await getServerSession(authOptions);
    if (!session || session.user?.email !== process.env.ADMIN_EMAIL) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    await dbConnect();
    const { id } = await params;
    const deletedArticle = await CustomNews.findByIdAndDelete(id);
    if (!deletedArticle) return NextResponse.json({ error: "Not found" }, { status: 404 });
    
    return NextResponse.json({ message: "Article deleted successfully" });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
