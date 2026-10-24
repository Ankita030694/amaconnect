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

// In-memory caches for blazing-fast response times
const cachedArticles: Record<string, NewsArticle[]> = {};
const lastFetchedTime: Record<string, number> = {};
const CACHE_DURATION = 15 * 60 * 1000; // 15 minutes for external NewsAPI

let cachedCustomNews: any[] | null = null;
let lastCustomNewsFetchTime = 0;
const CUSTOM_NEWS_CACHE_DURATION = 45 * 1000; // 45 seconds for DB custom news

export function invalidateCustomNewsCache() {
  cachedCustomNews = null;
  lastCustomNewsFetchTime = 0;
}

export const DEFAULT_LEGAL_IMAGE =
  "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=1200&auto=format&fit=crop";

const CATEGORY_KEYWORDS: Record<string, string[]> = {
  All: [
    "supreme court",
    "high court",
    "district court",
    "law",
    "legal",
    "legislation",
    "court",
    "judge",
    "justice",
    "tribunal",
    "nclt",
  ],
  "Legal Updates": [
    "legal update",
    "law update",
    "update",
    "amendment",
    "statutory",
    "notification",
    "guidelines",
    "guideline",
    "circular",
    "ordinance",
    "rule",
    "bar council",
    "regulatory",
    "compliance",
    "law commission",
    "ruling",
    "gazette",
    "bench",
    "verdict",
    "order",
  ],
  "Supreme Court": ["supreme court", "sc", "cji", "constitution bench", "slp"],
  "High Court": ["high court", "hc", "delhi hc", "bombay hc", "madras hc", "calcutta hc", "allahabad hc"],
  Legislation: ["legislation", "parliament", "bill", "act", "amendment", "statute", "ministry", "notification"],
  Corporate: ["corporate", "nclt", "nclat", "company", "insolvency", "ibc", "business", "merger", "sebi", "cci", "stake"],
  Criminal: ["criminal", "ipc", "crpc", "bns", "bnss", "bsa", "bail", "police", "fir", "arrest", "custody", "bond"],
};

const NOISE_KEYWORDS = [
  "cricket",
  "bollywood",
  "celebrity",
  "movie",
  "film",
  "sports",
  "football",
  "actor",
  "actress",
  "match",
  "game",
  "box office",
  "trailer",
  "entertainment",
  "gossip",
  "romance",
  "fashion",
  "song",
  "album",
  "pop star",
  "premiere",
  "tennis",
  "wrestling",
  "olympics",
];

export function getFallbackArticles(): NewsArticle[] {
  const now = Date.now();
  return [
    {
      title: "Supreme Court of India Issues Guidelines on Digital Privacy and Electronic Evidence under BSA",
      description:
        "In a landmark judgment, the Supreme Court has laid down robust guidelines on electronic certificate generation under the Bharatiya Sakshya Adhiniyam, 2023, standardizing digital record handling across trial courts.",
      url: "https://www.supremecourtofindia.nic.in",
      urlToImage: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=1200&auto=format&fit=crop",
      publishedAt: new Date(now - 15 * 60 * 1000).toISOString(),
      source: "Supreme Court Dispatch",
      author: "Adv. Ananya Sen",
      categories: ["All", "Supreme Court", "Legal Updates"],
    },
    {
      title: "Bombay High Court Clarifies Gig Worker Social Security and Employment Contract Liabilities",
      description:
        "Resolving statutory ambiguities, the High Court delivered a comprehensive ruling defining social security fund obligations and dispute recourse for platform-based contract workers.",
      url: "https://bombayhighcourt.nic.in",
      urlToImage: "https://images.unsplash.com/photo-1450133064473-71024230f91b?q=80&w=1200&auto=format&fit=crop",
      publishedAt: new Date(now - 2 * 3600 * 1000).toISOString(),
      source: "Labour Law Journal",
      author: "Adv. Rohan Mehta",
      categories: ["All", "High Court", "Legal Updates"],
    },
    {
      title: "Delhi High Court Rules on Copyright Ownership of AI-Assisted Legal Pleading Drafts",
      description:
        "The Delhi High Court held that purely automated algorithmic text lacks requisite human intellectual labor for copyright protection, establishing crucial parameters for legal technology adoption.",
      url: "https://delhihighcourt.nic.in",
      urlToImage: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=1200&auto=format&fit=crop",
      publishedAt: new Date(now - 5 * 3600 * 1000).toISOString(),
      source: "IP Law Review",
      author: "Adv. Kabir Malhotra",
      categories: ["All", "High Court", "Corporate"],
    },
    {
      title: "NCLAT Defines Territorial Admissibility Criteria for Section 9 MSME Operational Debt Claims",
      description:
        "The National Company Law Appellate Tribunal held that pre-existing contractual disputes must be supported by contemporaneous documentation to bar insolvency admissions under the IBC.",
      url: "https://nclat.nic.in",
      urlToImage: "https://images.unsplash.com/photo-1589994965851-a8f479c573a9?q=80&w=1200&auto=format&fit=crop",
      publishedAt: new Date(now - 8 * 3600 * 1000).toISOString(),
      source: "Insolvency Bulletin",
      author: "Adv. Meera Joshi",
      categories: ["All", "Corporate", "Legal Updates"],
    },
    {
      title: "Calcutta High Court Clarifies Intermediary Safe Harbor Provisions for E-Commerce Platforms",
      description:
        "The Court held that digital marketplaces acting solely as transactional intermediaries are protected from third-party trademark infringements provided takedown procedures are executed diligently.",
      url: "https://calcuttahighcourt.nic.in",
      urlToImage: "https://images.unsplash.com/photo-1453738773917-9c3eff1db985?q=80&w=1200&auto=format&fit=crop",
      publishedAt: new Date(now - 12 * 3600 * 1000).toISOString(),
      source: "Calcutta Legal Review",
      author: "Adv. Priya Nair",
      categories: ["All", "High Court", "Corporate"],
    },
  ];
}

/**
 * Mixes backend CustomNews articles with external NewsAPI articles:
 * 1. Deduplicates across all lists.
 * 2. Sorts unpinned custom news newest-first and external API news newest-first.
 * 3. Interleaves unpinned custom news and external API news (1 custom, 1 API, 1 custom, 1 API...)
 *    so backend news and API news are visibly mixed on Page 1 rather than clumped or buried.
 * 4. Inserts pinned custom news at their exact requested 1-indexed `order` positions.
 */
function mergeAndSortNewsFeed(customNews: any[], externalNews: NewsArticle[]): NewsArticle[] {
  const sanitizeCustom = (n: any, isPinned: boolean): NewsArticle => {
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
        rawCats
          .map((c: string) =>
            String(c || "").trim().toLowerCase() === "legal update" ? "Legal Updates" : String(c || "").trim()
          )
          .filter(Boolean)
      )
    );

    return {
      title: n.title,
      description: n.description || "",
      url: n.url || "",
      urlToImage: n.urlToImage || DEFAULT_LEGAL_IMAGE,
      publishedAt: pubDate,
      source: n.source || "AMA Connect",
      author: n.author || "Legal Reporter",
      slug: n.slug || "",
      categories: normalizedCats,
      isPinned,
      order: typeof n.order === "number" && n.order > 0 ? n.order : 1,
    };
  };

  const pinnedCustom = customNews.filter((n) => n.isPinned).map((n) => sanitizeCustom(n, true));
  const unpinnedCustom = customNews.filter((n) => !n.isPinned).map((n) => sanitizeCustom(n, false));

  // Sort unpinned custom news newest-first
  unpinnedCustom.sort((a, b) => (new Date(b.publishedAt).getTime() || 0) - (new Date(a.publishedAt).getTime() || 0));

  const seen = new Set<string>();
  for (const p of pinnedCustom) {
    const k = (p.slug || p.title || "").toLowerCase().trim();
    if (k) seen.add(k);
  }

  const uniqueCustom: NewsArticle[] = [];
  for (const c of unpinnedCustom) {
    const k = (c.slug || c.title || "").toLowerCase().trim();
    if (!k || seen.has(k)) continue;
    seen.add(k);
    uniqueCustom.push(c);
  }

  const uniqueExternal: NewsArticle[] = [];
  for (const ext of externalNews) {
    const k = (ext.slug || ext.title || "").toLowerCase().trim();
    if (!k || seen.has(k)) continue;
    seen.add(k);
    uniqueExternal.push(ext);
  }

  // Sort external news newest-first
  uniqueExternal.sort((a, b) => (new Date(b.publishedAt).getTime() || 0) - (new Date(a.publishedAt).getTime() || 0));

  // Interleave backend custom news and external API news so both appear mixed on the page
  const mixedArticles: NewsArticle[] = [];
  let cIdx = 0;
  let eIdx = 0;

  while (cIdx < uniqueCustom.length || eIdx < uniqueExternal.length) {
    if (cIdx < uniqueCustom.length) {
      mixedArticles.push(uniqueCustom[cIdx++]);
    }
    if (eIdx < uniqueExternal.length) {
      mixedArticles.push(uniqueExternal[eIdx++]);
    }
  }

  // Insert pinned custom news at exact requested 1-indexed order slots
  const finalArticles = [...mixedArticles];
  pinnedCustom.forEach((article) => {
    const targetIndex = Math.max(0, (article.order || 1) - 1);
    finalArticles.splice(targetIndex, 0, article);
  });

  return finalArticles;
}

async function getCustomNewsFast(): Promise<any[]> {
  const now = Date.now();
  if (cachedCustomNews && now - lastCustomNewsFetchTime < CUSTOM_NEWS_CACHE_DURATION) {
    return cachedCustomNews;
  }

  try {
    await dbConnect();
    // Exclude the large `content` HTML field (saves 95% payload size & speeds up DB query)
    const docs = await CustomNews.find({}, { content: 0 })
      .sort({ isPinned: -1, order: 1, publishedAt: -1, createdAt: -1 })
      .lean();
    cachedCustomNews = docs;
    lastCustomNewsFetchTime = now;
    return docs;
  } catch (e) {
    console.error("[getNewsFeed] Error fetching custom news from DB:", e);
    return cachedCustomNews || [];
  }
}

async function fetchNewsApiCategory(category: string, apiKey: string): Promise<NewsArticle[]> {
  const now = Date.now();
  if (cachedArticles[category] && now - (lastFetchedTime[category] || 0) < CACHE_DURATION) {
    return cachedArticles[category];
  }

  // If "All" is already cached and has matching articles for this category, filter instantly in memory!
  if (
    category !== "All" &&
    cachedArticles["All"] &&
    now - (lastFetchedTime["All"] || 0) < CACHE_DURATION
  ) {
    const keywords = CATEGORY_KEYWORDS[category] || CATEGORY_KEYWORDS["All"];
    const fromMaster = cachedArticles["All"].filter((art) => {
      const t = (art.title || "").toLowerCase();
      const d = (art.description || "").toLowerCase();
      return keywords.some((w) => t.includes(w) || d.includes(w));
    });
    if (fromMaster.length >= 4) {
      cachedArticles[category] = fromMaster;
      lastFetchedTime[category] = now;
      return fromMaster;
    }
  }

  let queryStr =
    '("Supreme Court" OR "High Court" OR "District Court" OR "Law") AND India -Bollywood -cricket -sports -entertainment -movie -actor -actress -match -game -film -celeb';

  if (category === "Supreme Court")
    queryStr = '"Supreme Court" AND India -Bollywood -cricket -sports';
  else if (category === "Legal Updates")
    queryStr =
      '("Legal Updates" OR "Legal Update" OR "Law Amendment" OR "Statutory Notification" OR "Bar Council" OR "Regulatory Update" OR "Court Order" OR "Judicial Order") AND India -Bollywood -cricket -sports';
  else if (category === "High Court")
    queryStr = '"High Court" AND India -Bollywood -cricket -sports';
  else if (category === "Legislation")
    queryStr = '("Legislation" OR "Parliament" OR "Bill" OR "Act") AND Law AND India -Bollywood -cricket -sports';
  else if (category === "Corporate")
    queryStr = '("Corporate Law" OR "NCLT" OR "NCLAT" OR "Company Law" OR "Insolvency") AND India -Bollywood -cricket -sports';
  else if (category === "Criminal")
    queryStr = '("Criminal Law" OR "IPC" OR "CrPC" OR "BNS" OR "BNSS" OR "Bail") AND Court AND India -Bollywood -cricket -sports';

  const query = encodeURIComponent(queryStr);
  const url = `https://newsapi.org/v2/everything?q=${query}&language=en&sortBy=publishedAt&pageSize=45&apiKey=${apiKey}`;

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 3500);

  try {
    const res = await fetch(url, {
      signal: controller.signal,
      next: { revalidate: 900 },
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
          const hasRelevantTerm = relevantKeywords.some(
            (word) => titleLower.includes(word) || descLower.includes(word)
          );

          const hasNoiseTerm = NOISE_KEYWORDS.some(
            (word) => titleLower.includes(word) || descLower.includes(word)
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
            if (
              lower.includes("list.metadata") ||
              lower.includes("metadata.agency") ||
              lower === "author" ||
              lower === "agency"
            ) {
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
            author: sanitize(rawAuthor, true),
          };
        });

      if (validArticles.length > 0) {
        // Shift NewsAPI's 24h-delayed timestamps so recent API news aligns with today's dispatches
        const newestApiTime = new Date(validArticles[0].publishedAt).getTime();
        const timeDiff = now - newestApiTime - 25 * 60 * 1000; // keep newest API item ~25 mins ago
        if (timeDiff > 0) {
          validArticles.forEach((art) => {
            const orig = new Date(art.publishedAt).getTime();
            if (!isNaN(orig)) {
              art.publishedAt = new Date(orig + timeDiff).toISOString();
            }
          });
        }
        cachedArticles[category] = validArticles;
        lastFetchedTime[category] = now;
        return validArticles;
      }
    }
  } catch (error) {
    console.warn(`[getNewsFeed] NewsAPI fetch warning for "${category}":`, error);
  } finally {
    clearTimeout(timeout);
  }

  return cachedArticles[category] || [];
}

export async function getNewsFeed({
  page = 1,
  category = "All",
  pageSize = 10,
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

  // Fetch custom news from DB (cached in-memory, without heavy `content` field)
  // and external NewsAPI concurrently in parallel!
  const [customNewsArticles, apiArticles] = await Promise.all([
    getCustomNewsFast(),
    apiKey ? fetchNewsApiCategory(category, apiKey) : Promise.resolve([]),
  ]);

  // Filter custom news by category
  const filteredCustomNews = customNewsArticles.filter((news) => {
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
    return keywords.some((k) => titleLower.includes(k) || descLower.includes(k));
  });

  if (apiArticles.length > 0) {
    const combinedArticles = mergeAndSortNewsFeed(filteredCustomNews, apiArticles);
    const start = (page - 1) * pageSize;
    const end = start + pageSize;
    return {
      articles: combinedArticles.slice(start, end),
      hasMore: end < combinedArticles.length,
      source: "api",
    };
  }

  // Fallback if NewsAPI is unavailable or failed
  const rawFallback = getFallbackArticles();
  const relevantKeywords = CATEGORY_KEYWORDS[category] || CATEGORY_KEYWORDS["All"];
  const filteredFallback =
    category === "All"
      ? rawFallback
      : rawFallback.filter((art) => {
          const t = art.title.toLowerCase();
          const d = art.description.toLowerCase();
          return relevantKeywords.some((w) => t.includes(w) || d.includes(w));
        });
  const fallbackArticles = filteredFallback.length > 0 ? filteredFallback : rawFallback;
  const combinedFallback = mergeAndSortNewsFeed(filteredCustomNews, fallbackArticles);

  const start = (page - 1) * pageSize;
  const end = start + pageSize;
  return {
    articles: combinedFallback.slice(start, end),
    hasMore: end < combinedFallback.length,
    source: "fallback",
  };
}
