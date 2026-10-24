import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import dbConnect from "@/lib/dbConnect";
import { CustomNews } from "@/lib/models";
import { sanitizeHtml, slugify } from "@/lib/sanitizeHtml";

const normalizeCategories = (categories: unknown): string[] => {
  const raw = Array.isArray(categories) ? categories : ["All"];
  const normalized = raw
    .map((c) => String(c || "").trim())
    .filter(Boolean)
    .map((c) => (c.toLowerCase() === "legal update" ? "Legal Updates" : c));
  return Array.from(new Set(["All", ...normalized]));
};

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

    if (body.categories !== undefined) {
      body.categories = normalizeCategories(body.categories);
    }

    const isInternal = Boolean(body.content && String(body.content).trim());
    if (isInternal) {
      body.content = sanitizeHtml(body.content);
      let candidateSlug = slugify(body.slug || body.title || "");
      if (candidateSlug) {
        const baseSlug = candidateSlug;
        let counter = 2;
        while (await CustomNews.exists({ slug: candidateSlug, _id: { $ne: id } })) {
          candidateSlug = `${baseSlug}-${counter++}`;
        }
        body.slug = candidateSlug;
      }
      body.url = "";
    } else if (body.url !== undefined && !isInternal) {
      body.slug = "";
      body.content = "";
    }

    const updatedArticle = await CustomNews.findByIdAndUpdate(
      id,
      { $set: body },
      { new: true }
    );

    if (!updatedArticle) return NextResponse.json({ error: "Not found" }, { status: 404 });

    try {
      revalidatePath("/news");
      if (updatedArticle.slug) {
        revalidatePath(`/news/${updatedArticle.slug}`);
      }
      revalidatePath("/sitemap.xml");
    } catch (revalErr) {
      console.warn("[CustomNews PUT] Revalidate warning:", revalErr);
    }

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

    try {
      revalidatePath("/news");
      if (deletedArticle.slug) {
        revalidatePath(`/news/${deletedArticle.slug}`);
      }
      revalidatePath("/sitemap.xml");
    } catch (revalErr) {
      console.warn("[CustomNews DELETE] Revalidate warning:", revalErr);
    }

    return NextResponse.json({ message: "Article deleted successfully" });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
