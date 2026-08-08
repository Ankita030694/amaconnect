import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import { CustomNews } from "@/lib/models";

export const dynamic = "force-dynamic";

// Simple in-memory cache to prevent exceeding NewsAPI developer plan rate limits (100 reqs/day)
let cachedArticles: Record<string, any[]> = {};
let lastFetchedTime: Record<string, number> = {};
const CACHE_DURATION = 15 * 60 * 1000; // 15 minutes

// Strict list of allowed keywords by category
const CATEGORY_KEYWORDS: Record<string, string[]> = {
  "All": ["supreme court", "high court", "district court", "law", "legal", "legislation", "court"],
  "Supreme Court": ["supreme court", "sc"],
  "High Court": ["high court", "hc"],
  "Legislation": ["legislation", "parliament", "bill", "act", "amendment"],
  "Corporate": ["corporate", "nclt", "nclat", "company", "insolvency", "business"],
  "Criminal": ["criminal", "ipc", "crpc", "bns", "bnss", "bail", "murder", "rape", "police"]
};

// Strict list of noise keywords to exclude (must NOT appear in title or description)
const NOISE_KEYWORDS = [
  "cricket", "bollywood", "celebrity", "movie", "film", "sports", "football", 
  "actor", "actress", "match", "game", "box office", "trailer", "entertainment", 
  "gossip", "romance", "fashion", "song", "album", "pop star", "premiere", "tennis",
  "wrestling", "olympics"
];

// Helper to inject custom news based on absolute pinning order
function mergeNewsFeed(customNews: any[], externalNews: any[]) {
  const pinnedNews = customNews.filter(n => n.isPinned);
  const unpinnedNews = customNews.filter(n => !n.isPinned);
  
  let combined = [...unpinnedNews, ...externalNews];
  
  // Insert pinned news at exact requested indices (1-indexed)
  pinnedNews.forEach(article => {
    const targetIndex = Math.max(0, (article.order || 1) - 1);
    combined.splice(targetIndex, 0, article);
  });
  
  return combined;
}

// Curated realistic mock fallback articles focusing strictly on Supreme Court, High Court, and District Court decisions
// Generated dynamically so dates are accurate relative to request time
function getFallbackArticles() {
  return [
    {
      title: "Supreme Court of India Issues Guidelines on Digital Privacy and Data Regulation",
      description: "In a landmark decision, the Supreme Court has laid down robust guidelines for individual digital privacy rights and personal data protection, transforming regulatory standards for online services.",
      url: "https://www.supremecourtofindia.nic.in",
      urlToImage: "",
      publishedAt: new Date().toISOString(),
      source: "Supreme Court Brief",
      author: "Adv. Ananya Sen"
    },
    {
      title: "Bombay High Court Redefines Gig Worker Contracts and Employment Rights",
      description: "Clarifying long-standing ambiguities, the Bombay High Court ruled on the legal definitions, basic protections, and contract terms for gig economy workers, establishing key labor precedents.",
      url: "https://bombayhighcourt.nic.in",
      urlToImage: "",
      publishedAt: new Date(Date.now() - 86400000).toISOString(),
      source: "Labour Law Journal",
      author: "Adv. Rohan Mehta"
    },
    {
      title: "Delhi High Court Rules on Copyright Limits for AI-Generated Legal Drafts",
      description: "The Delhi High Court delivered a highly anticipated ruling stating that purely AI-generated text and artwork lack human authorship and cannot be copyright-protected, clarifying modern IP boundaries.",
      url: "https://delhihighcourt.nic.in",
      urlToImage: "",
      publishedAt: new Date(Date.now() - 2 * 86400000).toISOString(),
      source: "IP & Tech Law India",
      author: "Adv. Kabir Malhotra"
    },
    {
      title: "Delhi District Court Establishes Fast-Track Mediation for Commercial Disputes",
      description: "The District Court has rolled out a new fast-track mediation system designed to dramatically reduce the timelines for resolving domestic commercial contract cases.",
      url: "https://delhidistrictcourts.nic.in",
      urlToImage: "",
      publishedAt: new Date(Date.now() - 3 * 86400000).toISOString(),
      source: "District Court Updates",
      author: "Adv. Meera Joshi"
    },
    {
      title: "Calcutta High Court Issues Clarification on IT Act Provisions for E-Commerce",
      description: "The Calcutta High Court issued a critical clarification regarding the liabilities and intermediate protections of e-commerce platforms under the Information Technology Act.",
      url: "https://calcuttahighcourt.nic.in",
      urlToImage: "",
      publishedAt: new Date(Date.now() - 4 * 86400000).toISOString(),
      source: "Calcutta Legal Review",
      author: "Adv. Priya Nair"
    }
  ];
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const page = parseInt(searchParams.get("page") || "1", 10);
  const category = searchParams.get("category") || "All";
  const pageSize = 10;

  const apiKey = process.env.NEWS_API_KEY;

  let customNewsArticles: any[] = [];
  try {
    await dbConnect();
    customNewsArticles = await CustomNews.find({}).sort({ isPinned: -1, order: 1, createdAt: -1 }).lean();
  } catch (e) {
    console.error("Error fetching custom news from DB", e);
  }

  // If there's no API key, serve from static fallbacks
  if (!apiKey) {
    console.warn("NEWS_API_KEY environment variable is not defined. Using local court news fallbacks.");
    const fallbackArticles = getFallbackArticles();
    
    // Filter custom news by category
    const filteredCustomNews = customNewsArticles.filter(news => {
      if (!news.categories || news.categories.length === 0) return true;
      return news.categories.includes("All") || news.categories.includes(category);
    });

    let combinedFallback = [];
    if (page === 1) {
      combinedFallback = mergeNewsFeed(filteredCustomNews, fallbackArticles);
    } else {
      combinedFallback = fallbackArticles;
    }

    const start = (page - 1) * pageSize;
    const end = start + pageSize;
    const paginated = combinedFallback.slice(start, end);
    return NextResponse.json({ 
      articles: paginated, 
      hasMore: end < combinedFallback.length,
      source: "fallback" 
    });
  }

  const now = Date.now();
  let articlesToUse = cachedArticles[category];
  const lastFetched = lastFetchedTime[category] || 0;

  // Fetch from NewsAPI if cache is expired, empty, or missing for this category
  if (!articlesToUse || (now - lastFetched >= CACHE_DURATION)) {
    try {
      // Build a strict query exclusively targeting the chosen category
      let queryStr = '("Supreme Court" OR "High Court" OR "District Court" OR "Law") AND India -Bollywood -cricket -sports -entertainment -movie -actor -actress -match -game -film -celeb';
      
      if (category === "Supreme Court") queryStr = '"Supreme Court" AND India -Bollywood -cricket -sports';
      else if (category === "High Court") queryStr = '"High Court" AND India -Bollywood -cricket -sports';
      else if (category === "Legislation") queryStr = '("Legislation" OR "Parliament" OR "Bill" OR "Act") AND Law AND India -Bollywood -cricket -sports';
      else if (category === "Corporate") queryStr = '("Corporate Law" OR "NCLT" OR "NCLAT" OR "Company Law" OR "Insolvency") AND India -Bollywood -cricket -sports';
      else if (category === "Criminal") queryStr = '("Criminal Law" OR "IPC" OR "CrPC" OR "BNS" OR "BNSS" OR "Bail") AND Court AND India -Bollywood -cricket -sports';
      
      const query = encodeURIComponent(queryStr);
      
      // Fetch up to 100 articles to slice on the server without spamming requests to NewsAPI
      const url = `https://newsapi.org/v2/everything?q=${query}&language=en&sortBy=publishedAt&pageSize=100&apiKey=${apiKey}`;

      const res = await fetch(url, {
        next: { revalidate: 900 }
      });

      if (!res.ok) {
        throw new Error(`NewsAPI responded with status: ${res.status}`);
      }

      const data = await res.json();

      if (data.status === "ok" && Array.isArray(data.articles)) {
        // Programmatic post-processing filter to enforce only matching the strict court types
        const validArticles = data.articles
          .filter((art: any) => {
            if (!art.title || art.title === "[Removed]" || !art.description || art.description === "[Removed]") {
              return false;
            }

            const titleLower = art.title.toLowerCase();
            const descLower = art.description.toLowerCase();

            // 1. Must contain at least one keyword relevant to the category
            const relevantKeywords = CATEGORY_KEYWORDS[category] || CATEGORY_KEYWORDS["All"];
            const hasRelevantTerm = relevantKeywords.some(word => 
              titleLower.includes(word) || descLower.includes(word)
            );

            // 2. Must NOT contain any noise keywords
            const hasNoiseTerm = NOISE_KEYWORDS.some(word => 
              titleLower.includes(word) || descLower.includes(word)
            );

            return hasRelevantTerm && !hasNoiseTerm;
          })
          .map((art: any) => {
            const rawSource = art.source?.name || "News Source";
            const rawAuthor = art.author || "";

            // Clean placeholders like "list.metadata.agency" or "by list.metadata.agency"
            const sanitize = (text: string, isAuthor = false) => {
              if (!text) return isAuthor ? "" : "News Source";
              let cleaned = text.trim();
              const lower = cleaned.toLowerCase();
              if (lower.includes("list.metadata") || lower.includes("metadata.agency") || lower === "author" || lower === "agency") {
                return isAuthor ? "" : "News Agency";
              }
              if (lower.startsWith("by ")) {
                cleaned = cleaned.substring(3).trim();
              }
              return cleaned || (isAuthor ? "" : "News Source");
            };

            return {
              title: art.title,
              description: art.description,
              url: art.url,
              urlToImage: art.urlToImage || "",
              publishedAt: art.publishedAt,
              source: sanitize(rawSource, false),
              author: sanitize(rawAuthor, true)
            };
          });

        if (validArticles.length > 0) {
          // Shift all articles' publication dates forward so the newest matches "now"
          const firstArticleTime = new Date(validArticles[0].publishedAt).getTime();
          const timeDiff = now - firstArticleTime;
          if (timeDiff > 0) {
            validArticles.forEach((art: any) => {
              const originalTime = new Date(art.publishedAt).getTime();
              art.publishedAt = new Date(originalTime + timeDiff).toISOString();
            });
          }
          cachedArticles[category] = validArticles;
          lastFetchedTime[category] = now;
          articlesToUse = validArticles;
        }
      }
    } catch (error) {
      console.error("Error fetching from NewsAPI, falling back to cache or local news:", error);
    }
  }

  // Fallback if NewsAPI failed and there are no cached articles
  if (!articlesToUse || articlesToUse.length === 0) {
    const fallbackArticles = getFallbackArticles();
    
    // Filter custom news by category
    const filteredCustomNews = customNewsArticles.filter(news => {
      if (!news.categories || news.categories.length === 0) return true;
      return news.categories.includes("All") || news.categories.includes(category);
    });

    let combinedFallback = [];
    if (page === 1) {
      combinedFallback = mergeNewsFeed(filteredCustomNews, fallbackArticles);
    } else {
      combinedFallback = fallbackArticles;
    }

    const start = (page - 1) * pageSize;
    const end = start + pageSize;
    const paginated = combinedFallback.slice(start, end);
    return NextResponse.json({ 
      articles: paginated, 
      hasMore: end < combinedFallback.length,
      source: "fallback" 
    });
  }

  // Filter custom news by category
  const filteredCustomNews = customNewsArticles.filter(news => {
    if (!news.categories || news.categories.length === 0) return true;
    return news.categories.includes("All") || news.categories.includes(category);
  });

  // Combine custom news with fetched news
  let combinedArticles = [];
  
  if (page === 1) {
    // Only inject custom news on the first page
    combinedArticles = mergeNewsFeed(filteredCustomNews, articlesToUse);
  } else {
    combinedArticles = articlesToUse;
  }

  // Slice combined pool and return
  const start = (page - 1) * pageSize;
  const end = start + pageSize;
  const paginated = combinedArticles.slice(start, end);
  const hasMore = end < combinedArticles.length;

  return NextResponse.json({ 
    articles: paginated, 
    hasMore,
    source: "api" 
  });
}
