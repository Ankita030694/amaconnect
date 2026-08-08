import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import dbConnect from "@/lib/dbConnect";
import { CustomNews } from "@/lib/models";

// GET: Fetch all custom news sorted by created date descending
export async function GET() {
  try {
    await dbConnect();
    const newsList = await CustomNews.find({}).sort({ isPinned: -1, order: 1, createdAt: -1 }).exec();
    return NextResponse.json(newsList);
  } catch (error: any) {
    console.error("Error fetching custom news:", error);
    return NextResponse.json({ error: error.message || "Failed to fetch news" }, { status: 500 });
  }
}

// POST: Add a new custom news article
export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session || session.user?.email !== process.env.ADMIN_EMAIL) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    await dbConnect();

    const body = await request.json();

    const {
      title,
      description,
      url,
      slug,
      content,
      urlToImage,
      publishedAt,
      source,
      author,
      categories,
      isPinned,
      order
    } = body;

    // Validation
    if (!title || !description || !urlToImage) {
      return NextResponse.json(
        { error: "Required fields (title, description, urlToImage) are missing." },
        { status: 400 }
      );
    }
    
    if (!url && !content) {
      return NextResponse.json(
        { error: "Either 'url' (for external news) or 'content' (for internal news) must be provided." },
        { status: 400 }
      );
    }

    const newArticle = new CustomNews({
      title: title.trim(),
      description: description.trim(),
      url: url ? url.trim() : "",
      slug: slug ? slug.trim() : "",
      content: content || "",
      urlToImage: urlToImage.trim(),
      publishedAt: publishedAt || new Date().toISOString(),
      source: source || "AMA Connect",
      author: author || "Admin",
      categories: categories || ["All"],
      isPinned: Boolean(isPinned),
      order: Number(order) || 0
    });

    const savedArticle = await newArticle.save();
    return NextResponse.json(savedArticle, { status: 201 });
  } catch (error: any) {
    console.error("Error creating custom news:", error);
    return NextResponse.json({ error: error.message || "Failed to create news" }, { status: 500 });
  }
}
