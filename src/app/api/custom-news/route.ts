import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import dbConnect from "@/lib/dbConnect";
import { CustomNews } from "@/lib/models";
import { sanitizeHtml, slugify } from "@/lib/sanitizeHtml";
import { invalidateCustomNewsCache } from "@/lib/newsService";

const normalizeCategories = (categories: unknown): string[] => {
  const raw = Array.isArray(categories) ? categories : ["All"];
  const normalized = raw
    .map((c) => String(c || "").trim())
    .filter(Boolean)
    .map((c) => (c.toLowerCase() === "legal update" ? "Legal Updates" : c));
  return Array.from(new Set(["All", ...normalized]));
};

// GET: Fetch all custom news sorted by pinned & created date descending
export async function GET() {
  try {
    await dbConnect();
    const newsList = await CustomNews.find({})
      .sort({ isPinned: -1, order: 1, publishedAt: -1, createdAt: -1 })
      .exec();
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
      order,
    } = body;

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

    const isInternal = Boolean(content && String(content).trim());
    let finalSlug = isInternal ? slugify(slug || title) : "";

    if (isInternal && finalSlug) {
      const baseSlug = finalSlug;
      let counter = 2;
      while (await CustomNews.exists({ slug: finalSlug })) {
        finalSlug = `${baseSlug}-${counter++}`;
      }
    }

    const newArticle = new CustomNews({
      title: title.trim(),
      description: description.trim(),
      url: !isInternal && url ? url.trim() : "",
      slug: finalSlug,
      content: isInternal ? sanitizeHtml(content) : "",
      urlToImage: urlToImage.trim(),
      publishedAt: publishedAt || new Date().toISOString(),
      source: (source || "AMA Connect").trim(),
      author: (author || "Vanshika Dhiman").trim(),
      categories: normalizeCategories(categories),
      isPinned: Boolean(isPinned),
      order: Number(order) || 1,
    });

    const savedArticle = await newArticle.save();
    invalidateCustomNewsCache();

    try {
      revalidatePath("/news");
      if (savedArticle.slug) {
        revalidatePath(`/news/${savedArticle.slug}`);
      }
      revalidatePath("/sitemap.xml");
    } catch (revalErr) {
      console.warn("[CustomNews POST] Revalidate warning:", revalErr);
    }

    return NextResponse.json(savedArticle, { status: 201 });
  } catch (error: any) {
    console.error("Error creating custom news:", error);
    return NextResponse.json({ error: error.message || "Failed to create news" }, { status: 500 });
  }
}
