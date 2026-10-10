import { NextResponse } from "next/server";
import { getNewsFeed } from "@/lib/newsService";

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const page = parseInt(searchParams.get("page") || "1", 10);
  const category = searchParams.get("category") || "All";
  const pageSize = 10;

  try {
    const data = await getNewsFeed({ page, category, pageSize });
    return NextResponse.json(data);
  } catch (err: any) {
    console.error("API /api/news error:", err);
    return NextResponse.json(
      {
        articles: [],
        hasMore: false,
        source: "error"
      },
      { status: 500 }
    );
  }
}

