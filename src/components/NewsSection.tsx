"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

interface NewsArticle {
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  source: string;
  author: string;
}

const formatNewsDate = (dateStr: string) => {
  if (!dateStr) return "";
  try {
    const parsedDate = new Date(dateStr);
    if (!isNaN(parsedDate.getTime())) {
      const day = String(parsedDate.getDate()).padStart(2, "0");
      const month = String(parsedDate.getMonth() + 1).padStart(2, "0");
      const year = parsedDate.getFullYear();
      return `${day}-${month}-${year}`;
    }
  } catch (err) {}
  return dateStr;
};

function NewsCarousel() {
  const [articles, setArticles] = useState<NewsArticle[]>([]);
  const [loading, setLoading] = useState(true);
  const [isFetchingMore, setIsFetchingMore] = useState(false);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [brokenImages, setBrokenImages] = useState<Record<number, boolean>>({});

  useEffect(() => {
    async function fetchInitialNews() {
      try {
        setLoading(true);
        const res = await fetch("/api/news?page=1");
        if (!res.ok) throw new Error("Failed to fetch news");
        const data = await res.json();
        setArticles(data.articles || []);
        setHasMore(data.hasMore ?? false);
      } catch (err) {
        console.error("Error loading news for NewsSection:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchInitialNews();
  }, []);

  const loadMoreArticles = async () => {
    if (isFetchingMore || !hasMore) return;
    try {
      setIsFetchingMore(true);
      const nextPage = page + 1;
      const res = await fetch(`/api/news?page=${nextPage}`);
      if (!res.ok) throw new Error("Failed to fetch more news");
      const data = await res.json();
      if (data.articles && data.articles.length > 0) {
        setArticles((prev) => [...prev, ...data.articles]);
        setPage(nextPage);
        setHasMore(data.hasMore ?? false);
      } else {
        setHasMore(false);
      }
    } catch (err) {
      console.error("Error loading more articles in NewsSection:", err);
    } finally {
      setIsFetchingMore(false);
    }
  };

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const target = e.currentTarget;
    const distanceToRight = target.scrollWidth - target.scrollLeft - target.clientWidth;
    if (distanceToRight < 300 && hasMore && !isFetchingMore) {
      loadMoreArticles();
    }
  };

  const handleImageError = (index: number) => {
    setBrokenImages((prev) => ({ ...prev, [index]: true }));
  };

  const gradients = [
    "from-[#FFAFA3] to-[#FFC6B3]",
    "from-[#FFD3B6] to-[#FFE5D9]",
    "from-[#FFCAD4] to-[#F4ACB7]",
  ];

  if (loading) {
    return (
      <div className="w-full">
        <div 
          className="flex overflow-x-auto gap-4 sm:gap-6 pb-6 snap-x snap-mandatory w-full animate-pulse"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {[0, 1, 2].map((n) => (
            <div
              key={n}
              className="flex-shrink-0 w-[260px] sm:w-[320px] h-[320px] sm:h-[332px] rounded-3xl bg-white/40 border border-[#2D2219]/5 flex flex-col justify-end p-5 sm:p-6 snap-start"
            >
              <div className="h-6 bg-slate-200 rounded w-11/12 mb-3"></div>
              <div className="h-4 bg-slate-200 rounded w-2/3 mb-6"></div>
              <div className="h-3.5 bg-slate-200 rounded w-1/3"></div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (articles.length === 0) return null;

  return (
    <div className="w-full">
      <div
        className="flex overflow-x-auto gap-4 sm:gap-6 pb-6 snap-x snap-mandatory w-full"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        onScroll={handleScroll}
      >
        <style dangerouslySetInnerHTML={{__html: `
          .flex::-webkit-scrollbar { display: none; }
        `}} />

        {articles.map((art, index) => {
          const hasImage = !!art.urlToImage && !brokenImages[index];
          const bgGradient = gradients[index % gradients.length];

          return (
            <a
              key={index}
              href={art.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 w-[260px] sm:w-[320px] h-[320px] sm:h-[332px] rounded-3xl overflow-hidden border border-gray-100 bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col relative group snap-start"
            >
              {hasImage ? (
                <>
                  <img
                    src={art.urlToImage}
                    alt={art.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={() => handleImageError(index)}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/30 group-hover:via-black/70 transition-all duration-300 z-0"></div>
                </>
              ) : (
                <div className={`absolute top-0 left-0 w-full h-[70%] bg-gradient-to-b ${bgGradient} from-40% to-white/0 to-100% z-0`}></div>
              )}

              <div className={`relative z-10 flex-1 flex flex-col justify-end p-5 sm:p-6 ${hasImage ? "text-white" : "text-[#2D241E]"}`}>
                <span className={`text-[9px] font-extrabold uppercase tracking-wider block mb-2 ${hasImage ? "text-[#E8A810]" : "text-[#986F09]"}`}>
                  {art.source}
                </span>

                <h4 className="font-bold leading-snug text-[14px] sm:text-base line-clamp-3 mb-6 group-hover:underline transition-colors duration-200">
                  {art.title}
                </h4>

                <div className={`flex justify-between items-center pt-3 border-t border-dashed mt-auto ${hasImage ? "border-gray-200/20" : "border-gray-200"}`}>
                  <span className={`text-[10px] ${hasImage ? "text-gray-300" : "text-gray-500"} font-semibold`}>
                    {formatNewsDate(art.publishedAt)}
                  </span>
                  <span className={`text-[10px] sm:text-xs font-bold uppercase tracking-wider ${hasImage ? "text-[#FFC6B3] group-hover:text-white" : "text-[#986F09] group-hover:text-[#855D02]"}`}>
                    Read Article →
                  </span>
                </div>
              </div>
            </a>
          );
        })}

        {isFetchingMore && (
          <>
            {Array(2).fill(0).map((_, index) => (
              <div 
                key={`loading-more-${index}`}
                className="flex-shrink-0 w-[260px] sm:w-[320px] h-[320px] sm:h-[332px] rounded-3xl snap-start bg-gray-50 border border-gray-100 flex flex-col justify-end p-5 sm:p-6 animate-pulse"
              >
                <div className="h-6 bg-gray-200/80 rounded w-11/12 mb-3"></div>
                <div className="h-4 bg-gray-200/80 rounded w-2/3 mb-6"></div>
                <div className="h-3.5 bg-gray-200/80 rounded w-1/3"></div>
              </div>
            ))}
          </>
        )}

        <div className="w-4 sm:w-6 lg:w-8 flex-shrink-0"></div>
      </div>
    </div>
  );
}

export default function NewsSection() {
  return (
    <section className="w-full bg-[#F8F8F6] pt-16 sm:pt-20 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full flex flex-col gap-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6 items-start lg:items-end">
          <div className="lg:col-span-8 text-left">
            <span className="text-[#986F09] font-bold uppercase tracking-[0.15em] text-xs sm:text-sm lg:text-[14px] mb-1.5 sm:mb-2 block opacity-90">
              Live Court Updates
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#2D2219] leading-tight tracking-tight mb-1.5 sm:mb-2">
              Supreme Court & High Court Rulings
            </h2>
            <p className="text-gray-600 font-medium text-xs sm:text-sm lg:text-[13px] leading-relaxed max-w-xl">
              Get real-time insights on key judgments, regulatory guidelines, and landmark decisions across Indian courts.
            </p>
          </div>

          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-2 sm:gap-3 lg:items-end lg:justify-end">
            <Link
              href="/interviews"
              className="inline-flex items-center justify-center gap-2 bg-[#2D2219] hover:bg-[#423327] text-white font-bold px-5 sm:px-7 py-2.5 sm:py-3 rounded-full shadow-[0_4px_14px_0_rgba(45,34,25,0.2)] hover:shadow-[0_6px_20px_0_rgba(45,34,25,0.35)] hover:scale-[1.03] transition-all duration-300 active:scale-[0.98] text-xs sm:text-sm tracking-wide whitespace-nowrap"
            >
              <span>Explore Courtroom News</span>
              <svg className="w-4 h-4 stroke-current shrink-0" fill="none" viewBox="0 0 24 24" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>

        <div className="w-full mt-2 lg:mt-4">
          <NewsCarousel />
        </div>
      </div>
    </section>
  );
}
