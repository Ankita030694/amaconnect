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
  "Legal Updates": ["legal update", "law update", "update", "amendment", "statutory", "notification", "guidelines", "guideline", "circular", "ordinance", "rule", "bar council", "regulatory", "compliance", "law commission", "ruling", "gazette", "bench", "verdict", "order"],
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

function mergeAndSortNewsFeed(customNews: any[], externalNews: NewsArticle[]): NewsArticle[] {
  const sanitize = (n: any, isPinned: boolean): NewsArticle => {
    let pubDate = n.publishedAt;
    if (pubDate) {
      const d = new Date(pubDate);
      if (!isNaN(d.getTime())) {
        pubDate = d.toISOString();
      } else if (n.createdAt) {
        pubDate = new Date(n.createdAt).toISOString();
      } else {
        pubDate = new Date().toISOString();
      }
    } else if (n.createdAt) {
      pubDate = new Date(n.createdAt).toISOString();
    } else {
      pubDate = new Date().toISOString();
    }

    const rawCats: string[] = Array.isArray(n.categories) && n.categories.length > 0 ? n.categories : ["All"];
    const normalizedCats: string[] = Array.from(
      new Set<string>(
        rawCats.map((c: string) =>
          String(c || "").trim().toLowerCase() === "legal update" ? "Legal Updates" : String(c || "").trim()
        ).filter(Boolean)
      )
    );

    return {
      title: n.title,
      description: n.description || "",
      url: n.url || "",
      urlToImage: n.urlToImage || DEFAULT_LEGAL_IMAGE,
      publishedAt: pubDate,
      source: n.source || "AMA Dispatch",
      author: n.author || "Legal Reporter",
      slug: n.slug || "",
      categories: normalizedCats,
      isPinned,
      order: typeof n.order === "number" && n.order > 0 ? n.order : 1
    };
  };

  const pinnedCustom = customNews.filter(n => n.isPinned).map(n => sanitize(n, true));
  const unpinnedCustom = customNews.filter(n => !n.isPinned).map(n => sanitize(n, false));

  // Combine unpinned custom news from DB and external NewsAPI news
  const unpinnedCombined = [...unpinnedCustom, ...externalNews];

  // Deduplicate articles by slug or title
  const seen = new Set<string>();
  for (const p of pinnedCustom) {
    const k = (p.slug || p.title || "").toLowerCase().trim();
    if (k) seen.add(k);
  }

  const uniqueUnpinned: NewsArticle[] = [];
  for (const art of unpinnedCombined) {
    const key = (art.slug || art.title || "").toLowerCase().trim();
    if (!key || seen.has(key)) continue;
    seen.add(key);
    uniqueUnpinned.push(art);
  }

  // Sort all unpinned articles (DB news + API news mixed) strictly by publishedAt descending (newest first)
  uniqueUnpinned.sort((a, b) => {
    const timeA = new Date(a.publishedAt).getTime() || 0;
    const timeB = new Date(b.publishedAt).getTime() || 0;
    return timeB - timeA;
  });

  // Keep pinned feature as it was: insert pinned news at exact requested indices (1-indexed order)
  const finalArticles = [...uniqueUnpinned];
  pinnedCustom.forEach(article => {
    const targetIndex = Math.max(0, (article.order || 1) - 1);
    finalArticles.splice(targetIndex, 0, article);
  });

  return finalArticles;
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
    if (category === "All") return true;
    const targetLower = category.toLowerCase();
    if (Array.isArray(news.categories)) {
      const matched = news.categories.some((c: string) => {
        const cLower = String(c || "").trim().toLowerCase();
        if (cLower === targetLower) return true;
        if (targetLower === "legal updates" && cLower === "legal update") return true;
        return false;
      });
      if (matched) return true;
    }
    const titleLower = (news.title || "").toLowerCase();
    const descLower = (news.description || "").toLowerCase();
    const keywords = CATEGORY_KEYWORDS[category] || [];
    return keywords.some(k => titleLower.includes(k) || descLower.includes(k));
  });

  // If there's no API key, serve from static fallbacks
  if (!apiKey) {
    const rawFallback = getFallbackArticles();
    const relevantKeywords = CATEGORY_KEYWORDS[category] || CATEGORY_KEYWORDS["All"];
    const filteredFallback = category === "All"
      ? rawFallback
      : rawFallback.filter(art => {
          const t = art.title.toLowerCase();
          const d = art.description.toLowerCase();
          return relevantKeywords.some(w => t.includes(w) || d.includes(w));
        });
    const fallbackArticles = filteredFallback.length > 0 ? filteredFallback : rawFallback;
    const combinedFallback = mergeAndSortNewsFeed(filteredCustomNews, fallbackArticles);

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
      else if (category === "Legal Updates") queryStr = '("Legal Updates" OR "Legal Update" OR "Law Amendment" OR "Statutory Notification" OR "Bar Council" OR "Regulatory Update" OR "Court Order" OR "Judicial Order") AND India -Bollywood -cricket -sports';
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
    const rawFallback = getFallbackArticles();
    const relevantKeywords = CATEGORY_KEYWORDS[category] || CATEGORY_KEYWORDS["All"];
    const filteredFallback = category === "All"
      ? rawFallback
      : rawFallback.filter(art => {
          const t = art.title.toLowerCase();
          const d = art.description.toLowerCase();
          return relevantKeywords.some(w => t.includes(w) || d.includes(w));
        });
    const fallbackArticles = filteredFallback.length > 0 ? filteredFallback : rawFallback;
    const combinedFallback = mergeAndSortNewsFeed(filteredCustomNews, fallbackArticles);

    const start = (page - 1) * pageSize;
    const end = start + pageSize;
    const paginated = combinedFallback.slice(start, end);
    return {
      articles: paginated,
      hasMore: end < combinedFallback.length,
      source: "fallback"
    };
  }

  // Combine custom news from DB and fetched news, mixed and sorted by date
  const combinedArticles = mergeAndSortNewsFeed(filteredCustomNews, articlesToUse);

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
