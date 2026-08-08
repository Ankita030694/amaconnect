import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import dbConnect from "../../../lib/dbConnect";
import { Blog } from "../../../lib/models";

// GET: Fetch all blogs sorted by created date descending
export async function GET() {
  try {
    await dbConnect();
    const blogsList = await Blog.find({}).sort({ created: -1 }).exec();
    return NextResponse.json(blogsList);
  } catch (error: any) {
    console.error("Error fetching blogs:", error);
    return NextResponse.json({ error: error.message || "Failed to fetch blogs" }, { status: 500 });
  }
}

// POST: Add a new blog to MongoDB
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
      subtitle,
      image,
      date,
      description,
      slug,
      metaTitle,
      metaDescription,
      faqs,
      reviews,
      author,
      authorTitle,
      authorPhoto,
      category
    } = body;

    // Validation
    if (!title || !image || !date || !slug) {
      return NextResponse.json(
        { error: "Required fields (title, image, date, slug) are missing." },
        { status: 400 }
      );
    }

    // Check if slug is unique (or generate a unique one)
    const existing = await Blog.findOne({ slug });
    let finalSlug = slug;
    if (existing) {
      finalSlug = `${slug}-${Date.now()}`;
    }

    const newBlog = new Blog({
      title: title.trim(),
      subtitle: subtitle ? subtitle.trim() : "",
      image,
      date,
      description: description || "",
      slug: finalSlug,
      metaTitle: metaTitle || "",
      metaDescription: metaDescription || "",
      faqs: faqs || [],
      reviews: reviews || [],
      author: author || "Anuj Anand Malik",
      authorTitle: authorTitle || "",
      authorPhoto: authorPhoto || "",
      category: category || "",
      created: Date.now()
    });

    const savedBlog = await newBlog.save();
    return NextResponse.json(savedBlog, { status: 201 });
  } catch (error: any) {
    console.error("Error creating blog:", error);
    return NextResponse.json({ error: error.message || "Failed to create blog" }, { status: 500 });
  }
}
