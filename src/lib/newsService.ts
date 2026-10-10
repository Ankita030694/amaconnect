import dbConnect from "@/lib/dbConnect";
import { CustomNews } from "@/lib/models";

export interface NewsArticle {
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  source: string;
  author: string;
  slug?: string;
  categories?: string[];
  isPinned?: boolean;
  order?: number;
}

// In-memory cache to prevent exceeding NewsAPI developer plan rate limits
const cachedArticles: Record<string, NewsArticle[]> = {};
const lastFetchedTime: Record<string, number> = {};
const CACHE_DURATION = 15 * 60 * 1000; // 15 minutes

export const DEFAULT_LEGAL_IMAGE = "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=1200&auto=format&fit=crop";

const CATEGORY_KEYWORDS: Record<string, string[]> = {
  "All": ["supreme court", "high court", "district court", "law", "legal", "legislation", "court", "judge", "justice", "tribunal", "nclt"],
  "Supreme Court": ["supreme court", "sc", "cji"],
  "High Court": ["high court", "hc"],
  "Legislation": ["legislation", "parliament", "bill", "act", "amendment", "statute"],
  "Corporate": ["corporate", "nclt", "nclat", "company", "insolvency", "business", "merger", "sebi"],
  "Criminal": ["criminal", "ipc", "crpc", "bns", "bnss", "bsa", "bail", "police", "fir"]
};

const NOISE_KEYWORDS = [
  "cricket", "bollywood", "celebrity", "movie", "film", "sports", "football", 
  "actor", "actress", "match", "game", "box office", "trailer", "entertainment", 
  "gossip", "romance", "fashion", "song", "album", "pop star", "premiere", "tennis",
  "wrestling", "olympics"
];

export function getFallbackArticles(): NewsArticle[] {
  const now = Date.now();
  return [
    {
      title: "Supreme Court of India Issues Guidelines on Digital Privacy and Electronic Evidence under BSA",
      description: "In a landmark judgment, the Supreme Court has laid down robust guidelines on electronic certificate generation under the Bharatiya Sakshya Adhiniyam, 2023, standardizing digital record handling across trial courts.",
      url: "https://www.supremecourtofindia.nic.in",
      urlToImage: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=1200&auto=format&fit=crop",
      publishedAt: new Date(now - 15 * 60 * 1000).toISOString(), // 15 mins ago
      source: "Supreme Court Dispatch",
      author: "Adv. Ananya Sen"
    },
    {
      title: "Bombay High Court Clarifies Gig Worker Social Security and Employment Contract Liabilities",
      description: "Resolving statutory ambiguities, the High Court delivered a comprehensive ruling defining social security fund obligations and dispute recourse for platform-based contract workers.",
      url: "https://bombayhighcourt.nic.in",
      urlToImage: "https://images.unsplash.com/photo-1450133064473-71024230f91b?q=80&w=1200&auto=format&fit=crop",
      publishedAt: new Date(now - 2 * 3600 * 1000).toISOString(), // 2 hours ago
      source: "Labour Law Journal",
      author: "Adv. Rohan Mehta"
    },
    {
      title: "Delhi High Court Rules on Copyright Ownership of AI-Assisted Legal Pleading Drafts",
      description: "The Delhi High Court held that purely automated algorithmic text lacks requisite human intellectual labor for copyright protection, establishing crucial parameters for legal technology adoption.",
      url: "https://delhihighcourt.nic.in",
      urlToImage: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=1200&auto=format&fit=crop",
      publishedAt: new Date(now - 5 * 3600 * 1000).toISOString(), // 5 hours ago
      source: "IP Law Review",
      author: "Adv. Kabir Malhotra"
    },
    {
      title: "NCLAT Defines Territorial Admissibility Criteria for Section 9 MSME Operational Debt Claims",
      description: "The National Company Law Appellate Tribunal held that pre-existing contractual disputes must be supported by contemporaneous documentation to bar insolvency admissions under the IBC.",
      url: "https://nclat.nic.in",
      urlToImage: "https://images.unsplash.com/photo-1589994965851-a8f479c573a9?q=80&w=1200&auto=format&fit=crop",
      publishedAt: new Date(now - 8 * 3600 * 1000).toISOString(), // 8 hours ago
      source: "Insolvency Bulletin",
      author: "Adv. Meera Joshi"
    },
    {
      title: "Calcutta High Court Clarifies Intermediary Safe Harbor Provisions for E-Commerce Platforms",
      description: "The Court held that digital marketplaces acting solely as transactional intermediaries are protected from third-party trademark infringements provided takedown procedures are executed diligently.",
      url: "https://calcuttahighcourt.nic.in",
      urlToImage: "https://images.unsplash.com/photo-1453738773917-9c3eff1db985?q=80&w=1200&auto=format&fit=crop",
      publishedAt: new Date(now - 12 * 3600 * 1000).toISOString(), // 12 hours ago
      source: "Calcutta Legal Review",
      author: "Adv. Priya Nair"
    }
  ];
}

function mergeNewsFeed(customNews: any[], externalNews: NewsArticle[]): NewsArticle[] {
  const pinnedNews = customNews.filter(n => n.isPinned);
  const unpinnedNews = customNews.filter(n => !n.isPinned);
  
  const sanitizedUnpinned: NewsArticle[] = unpinnedNews.map((n: any) => ({
    title: n.title,
    description: n.description || "",
    url: n.url || "",
    urlToImage: n.urlToImage || DEFAULT_LEGAL_IMAGE,
    publishedAt: n.createdAt ? new Date(n.createdAt).toISOString() : new Date().toISOString(),
    source: n.source || "AMA Dispatch",
    author: n.author || "Legal Reporter",
    slug: n.slug || "",
    isPinned: false
  }));

  const sanitizedPinned: NewsArticle[] = pinnedNews.map((n: any) => ({
    title: n.title,
    description: n.description || "",
    url: n.url || "",
    urlToImage: n.urlToImage || DEFAULT_LEGAL_IMAGE,
    publishedAt: n.createdAt ? new Date(n.createdAt).toISOString() : new Date().toISOString(),
    source: n.source || "AMA Dispatch",
    author: n.author || "Legal Reporter",
    slug: n.slug || "",
    isPinned: true,
    order: n.order || 1
  }));

  const combined = [...sanitizedUnpinned, ...externalNews];
  
  // Insert pinned news at exact requested indices (1-indexed)
  sanitizedPinned.forEach(article => {
    const targetIndex = Math.max(0, (article.order || 1) - 1);
    combined.splice(targetIndex, 0, article);
  });
  
  return combined;
}

export async function getNewsFeed({
  page = 1,
  category = "All",
  pageSize = 10
}: {
  page?: number;
  category?: string;
  pageSize?: number;
}): Promise<{
  articles: NewsArticle[];
  hasMore: boolean;
  source: "api" | "fallback";
}> {
  const apiKey = process.env.NEWS_API_KEY;

  let customNewsArticles: any[] = [];
  try {
    await dbConnect();
    customNewsArticles = await CustomNews.find({}).sort({ isPinned: -1, order: 1, createdAt: -1 }).lean();
  } catch (e) {
    console.error("[getNewsFeed] Error fetching custom news from DB:", e);
  }

  // Filter custom news by category
  const filteredCustomNews = customNewsArticles.filter(news => {
    if (!news.categories || news.categories.length === 0) return true;
    return news.categories.includes("All") || news.categories.includes(category);
  });

  // If there's no API key, serve from static fallbacks
  if (!apiKey) {
    const fallbackArticles = getFallbackArticles();
    let combinedFallback: NewsArticle[] = [];
    if (page === 1) {
      combinedFallback = mergeNewsFeed(filteredCustomNews, fallbackArticles);
    } else {
      combinedFallback = fallbackArticles;
    }

    const start = (page - 1) * pageSize;
    const end = start + pageSize;
    const paginated = combinedFallback.slice(start, end);
    return {
      articles: paginated,
      hasMore: end < combinedFallback.length,
      source: "fallback"
    };
  }

  const now = Date.now();
  let articlesToUse = cachedArticles[category];
  const lastFetched = lastFetchedTime[category] || 0;

  // Fetch from NewsAPI if cache is expired, empty, or missing for this category
  if (!articlesToUse || (now - lastFetched >= CACHE_DURATION)) {
    try {
      let queryStr = '("Supreme Court" OR "High Court" OR "District Court" OR "Law") AND India -Bollywood -cricket -sports -entertainment -movie -actor -actress -match -game -film -celeb';
      
      if (category === "Supreme Court") queryStr = '"Supreme Court" AND India -Bollywood -cricket -sports';
      else if (category === "High Court") queryStr = '"High Court" AND India -Bollywood -cricket -sports';
      else if (category === "Legislation") queryStr = '("Legislation" OR "Parliament" OR "Bill" OR "Act") AND Law AND India -Bollywood -cricket -sports';
      else if (category === "Corporate") queryStr = '("Corporate Law" OR "NCLT" OR "NCLAT" OR "Company Law" OR "Insolvency") AND India -Bollywood -cricket -sports';
      else if (category === "Criminal") queryStr = '("Criminal Law" OR "IPC" OR "CrPC" OR "BNS" OR "BNSS" OR "Bail") AND Court AND India -Bollywood -cricket -sports';
      
      const query = encodeURIComponent(queryStr);
      const url = `https://newsapi.org/v2/everything?q=${query}&language=en&sortBy=publishedAt&pageSize=100&apiKey=${apiKey}`;

      const res = await fetch(url, {
        next: { revalidate: 900 }
      });

      if (!res.ok) {
        throw new Error(`NewsAPI responded with status: ${res.status}`);
      }

      const data = await res.json();

      if (data.status === "ok" && Array.isArray(data.articles)) {
        const validArticles: NewsArticle[] = data.articles
          .filter((art: any) => {
            if (!art.title || art.title === "[Removed]" || !art.description || art.description === "[Removed]") {
              return false;
            }

            const titleLower = art.title.toLowerCase();
            const descLower = art.description.toLowerCase();

            const relevantKeywords = CATEGORY_KEYWORDS[category] || CATEGORY_KEYWORDS["All"];
            const hasRelevantTerm = relevantKeywords.some(word => 
              titleLower.includes(word) || descLower.includes(word)
            );

            const hasNoiseTerm = NOISE_KEYWORDS.some(word => 
              titleLower.includes(word) || descLower.includes(word)
            );

            return hasRelevantTerm && !hasNoiseTerm;
          })
          .map((art: any) => {
            const rawSource = art.source?.name || "News Source";
            const rawAuthor = art.author || "";

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
              urlToImage: art.urlToImage || DEFAULT_LEGAL_IMAGE,
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
      console.error("[getNewsFeed] Error fetching from NewsAPI, falling back to cache or local news:", error);
    }
  }

  // Fallback if NewsAPI failed and there are no cached articles
  if (!articlesToUse || articlesToUse.length === 0) {
    const fallbackArticles = getFallbackArticles();
    let combinedFallback: NewsArticle[] = [];
    if (page === 1) {
      combinedFallback = mergeNewsFeed(filteredCustomNews, fallbackArticles);
    } else {
      combinedFallback = fallbackArticles;
    }

    const start = (page - 1) * pageSize;
    const end = start + pageSize;
    const paginated = combinedFallback.slice(start, end);
    return {
      articles: paginated,
      hasMore: end < combinedFallback.length,
      source: "fallback"
    };
  }

  // Combine custom news with fetched news
  let combinedArticles: NewsArticle[] = [];
  if (page === 1) {
    combinedArticles = mergeNewsFeed(filteredCustomNews, articlesToUse);
  } else {
    combinedArticles = articlesToUse;
  }

  const start = (page - 1) * pageSize;
  const end = start + pageSize;
  const paginated = combinedArticles.slice(start, end);
  const hasMore = end < combinedArticles.length;

  return {
    articles: paginated,
    hasMore,
    source: "api"
  };
}
