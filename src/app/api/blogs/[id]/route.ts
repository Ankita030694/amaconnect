import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import dbConnect from "../../../../lib/dbConnect";
import { Blog } from "../../../../lib/models";


// GET: Fetch a single blog details
export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await dbConnect();
    const { id } = await params;
    const blog = await Blog.findById(id).exec();
    
    if (!blog) {
      return NextResponse.json({ error: "Blog not found" }, { status: 404 });
    }
    
    return NextResponse.json(blog);
  } catch (error: any) {
    console.error(`Error fetching blog:`, error);
    return NextResponse.json({ error: error.message || "Failed to fetch blog" }, { status: 500 });
  }
}

// PUT: Update an existing blog
export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await getServerSession(authOptions);
    if (!session || session.user?.email !== process.env.ADMIN_EMAIL) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    await dbConnect();
    const { id } = await params;
    const body = await request.json();

    
    const blog = await Blog.findById(id);
    if (!blog) {
      return NextResponse.json({ error: "Blog not found" }, { status: 404 });
    }

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
      author
    } = body;

    // Validation
    if (!title || !image || !date || !slug) {
      return NextResponse.json(
        { error: "Required fields (title, image, date, slug) are missing." },
        { status: 400 }
      );
    }

    // Check slug uniqueness if it has changed
    if (slug !== blog.slug) {
      const existing = await Blog.findOne({ slug });
      if (existing) {
        return NextResponse.json({ error: "Slug is already in use by another blog post" }, { status: 400 });
      }
    }

    // Update fields
    blog.title = title.trim();
    blog.subtitle = subtitle ? subtitle.trim() : "";
    blog.image = image;
    blog.date = date;
    blog.description = description || "";
    blog.slug = slug;
    blog.metaTitle = metaTitle || "";
    blog.metaDescription = metaDescription || "";
    blog.faqs = faqs || [];
    blog.reviews = reviews || [];
    blog.author = author || "Anuj Anand Malik";

    const updatedBlog = await blog.save();
    return NextResponse.json(updatedBlog);
  } catch (error: any) {
    console.error(`Error updating blog:`, error);
    return NextResponse.json({ error: error.message || "Failed to update blog" }, { status: 500 });
  }
}

// DELETE: Delete a blog
export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await getServerSession(authOptions);
    if (!session || session.user?.email !== process.env.ADMIN_EMAIL) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    await dbConnect();
    const { id } = await params;

    const deletedBlog = await Blog.findByIdAndDelete(id).exec();
    
    if (!deletedBlog) {
      return NextResponse.json({ error: "Blog not found" }, { status: 404 });
    }
    
    return NextResponse.json({ success: true, message: "Blog deleted successfully" });
  } catch (error: any) {
    console.error(`Error deleting blog:`, error);
    return NextResponse.json({ error: error.message || "Failed to delete blog" }, { status: 500 });
  }
}
