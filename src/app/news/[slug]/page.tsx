import React, { cache } from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Script from "next/script";
import dbConnect from "@/lib/dbConnect";
import { CustomNews } from "@/lib/models";
import Footer from "@/components/Footer";
import AppDownloadCTA from "@/components/AppDownloadCTA";
import { sanitizeHtml, slugify } from "@/lib/sanitizeHtml";
import NewsDetail from "./newsdetail";

export const dynamic = "force-dynamic";

const BASE_URL = "https://www.amaconnect.in";

// In-memory cache ONLY for valid found articles (never caches null/404)
const articleMemoryCache = new Map<string, { data: any; timestamp: number }>();
const ARTICLE_CACHE_TTL = 2 * 60 * 1000; // 2 minutes

const decodeEntities = (str: string): string => {
  if (!str) return "";
  return str
    .replace(/&amp;?/gi, "&")
    .replace(/&lt;/gi, "<")
    .replace(/&gt;/gi, ">")
    .replace(/&quot;/gi, '"')
    .replace(/&#39;/gi, "'")
    .replace(/&nbsp;/gi, " ");
};

const escapeRegex = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

const getNewsBySlug = cache(async (rawSlug: string) => {
  const cleanSlug = decodeURIComponent(rawSlug || "").trim();
  if (!cleanSlug) return null;

  const cachedEntry = articleMemoryCache.get(cleanSlug);
  if (cachedEntry && Date.now() - cachedEntry.timestamp < ARTICLE_CACHE_TTL) {
    return cachedEntry.data;
  }

  for (let attempt = 1; attempt <= 2; attempt++) {
    try {
      await dbConnect();

      // 1. Exact match on raw or decoded slug
      let article: any = await CustomNews.findOne({
        slug: { $in: [rawSlug, cleanSlug, cleanSlug.toLowerCase()] },
      }).lean();

      // 2. Case-insensitive regex match
      if (!article) {
        article = await CustomNews.findOne({
          slug: { $regex: new RegExp(`^${escapeRegex(cleanSlug)}$`, "i") },
        }).lean();
      }

      // 3. Fallback: match against slugified title if slug field was slightly different
      if (!article) {
        const candidates = await CustomNews.find(
          {},
          { title: 1, slug: 1 }
        ).lean();
        const matchedCandidate = candidates.find(
          (c: any) =>
            slugify(c.slug || "") === slugify(cleanSlug) ||
            slugify(c.title || "") === slugify(cleanSlug)
        );
        if (matchedCandidate?._id) {
          article = await CustomNews.findById(matchedCandidate._id).lean();
        }
      }

      if (article) {
        const data = JSON.parse(JSON.stringify(article));
        const formatted = {
          ...data,
          title: decodeEntities(data.title || ""),
          description: decodeEntities(data.description || ""),
          content: sanitizeHtml(data.content || `<p>${data.description || ""}</p>`),
        };
        articleMemoryCache.set(cleanSlug, { data: formatted, timestamp: Date.now() });
        return formatted;
      }

      return null;
    } catch (err) {
      console.error(`[getNewsBySlug] Attempt ${attempt} error for slug "${cleanSlug}":`, err);
      if (attempt < 2) {
        await new Promise((r) => setTimeout(r, 250));
      }
    }
  }
  return null;
});

const getRelatedNews = async (excludeId: string) => {
  try {
    await dbConnect();
    // Exclude the large `content` HTML field for fast query execution
    const related = await CustomNews.find(
      { _id: { $ne: excludeId }, slug: { $nin: ["", null] } },
      { content: 0 }
    )
      .sort({ isPinned: -1, publishedAt: -1, createdAt: -1 })
      .limit(4)
      .lean();

    return JSON.parse(JSON.stringify(related)).map((item: any) => ({
      ...item,
      title: decodeEntities(item.title || ""),
      description: decodeEntities(item.description || ""),
      content: "",
    }));
  } catch (err) {
    console.error("Error fetching related news:", err);
    return [];
  }
};

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata(props: Props): Promise<Metadata> {
  const { slug } = await props.params;
  const article = await getNewsBySlug(slug);
  if (!article) return { title: "News Not Found | AMA Connect" };

  const url = `${BASE_URL}/news/${article.slug}`;
  const title = `${article.title} | AMA Connect News`;

  return {
    title,
    description: article.description,
    alternates: { canonical: url },
    openGraph: {
      title: article.title,
      description: article.description,
      url,
      siteName: "AMA Connect",
      type: "article",
      publishedTime: article.publishedAt,
      authors: [article.author || "AMA Connect"],
      images: article.urlToImage ? [{ url: article.urlToImage, width: 1200, height: 630, alt: article.title }] : [],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.description,
      images: article.urlToImage ? [article.urlToImage] : [],
      creator: "@amaconnect",
    },
  };
}

function generateSchema(article: any) {
  const url = `${BASE_URL}/news/${article.slug}`;
  const published = (() => {
    const d = new Date(article.publishedAt);
    return isNaN(d.getTime()) ? new Date().toISOString() : d.toISOString();
  })();

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "NewsArticle",
        "@id": `${url}#article`,
        mainEntityOfPage: { "@type": "WebPage", "@id": url },
        headline: article.title,
        description: article.description,
        image: article.urlToImage ? [article.urlToImage] : undefined,
        datePublished: published,
        dateModified: published,
        inLanguage: "en-IN",
        articleSection: article.categories?.find((c: string) => c !== "All") || "Legal News",
        author: { "@type": "Organization", name: article.author || "AMA Connect", url: `${BASE_URL}/about` },
        publisher: {
          "@type": "Organization",
          name: "AMA Connect",
          logo: { "@type": "ImageObject", url: `${BASE_URL}/logo2.svg` },
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
          { "@type": "ListItem", position: 2, name: "News", item: `${BASE_URL}/news` },
          { "@type": "ListItem", position: 3, name: article.title, item: url },
        ],
      },
    ],
  };
}

export default async function NewsArticlePage(props: Props) {
  const { slug } = await props.params;
  const article = await getNewsBySlug(slug);

  if (!article) {
    notFound();
  }

  const relatedNews = await getRelatedNews(article._id);
  const schema = generateSchema(article);

  return (
    <div className="flex flex-col min-h-dvh bg-[#F8FAFC]">
      <Script
        id="news-article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* SSR-rendered crawlable content - guaranteed in server HTML */}
      <article className="sr-only" aria-hidden="true">
        <h1>{article.title}</h1>
        {article.publishedAt && <time dateTime={article.publishedAt}>{article.publishedAt}</time>}
        {article.author && <span>{article.author}</span>}
        <p>{article.description}</p>
        <p>
          {(article.content || "")
            .replace(/<[^>]*>/g, " ")
            .replace(/\s+/g, " ")
            .trim()
            .split(/\s+/)
            .slice(0, 150)
            .join(" ")}
          ...
        </p>
      </article>

      <main className="flex-grow pt-0">
        <NewsDetail article={article} relatedNews={relatedNews} />
      </main>
      <AppDownloadCTA />
      <Footer />
    </div>
  );
}
