"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

export interface NewsArticle {
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  source: string;
  author: string;
  slug?: string;
}

interface NewsContentProps {
  initialArticles?: NewsArticle[];
  initialHasMore?: boolean;
}

const DEFAULT_LEGAL_IMAGE = "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=1200&auto=format&fit=crop";
const FALLBACK_LOCAL_IMAGE = "/legal_scales_hero.png";
const FALLBACK_AVATAR = "/ashishbhay.png";

const getSafeImage = (src?: string | null): string => {
  if (!src || !src.trim()) return DEFAULT_LEGAL_IMAGE;
  return src.trim();
};

const handleImgError = (e: React.SyntheticEvent<HTMLImageElement>) => {
  const target = e.currentTarget;
  if (!target.src.includes("images.unsplash.com")) {
    target.src = DEFAULT_LEGAL_IMAGE;
  } else if (!target.src.endsWith(FALLBACK_LOCAL_IMAGE)) {
    target.src = FALLBACK_LOCAL_IMAGE;
  } else {
    target.src = FALLBACK_AVATAR;
  }
};

const timeAgo = (dateStr: string) => {
  if (!dateStr) return "recently";
  const date = new Date(dateStr);
  const now = new Date();
  const seconds = Math.floor((now.getTime() - date.getTime()) / 1000);

  if (seconds < 60) return "just now";
  let interval = seconds / 31536000;
  if (interval >= 1) return Math.floor(interval) + "y ago";
  interval = seconds / 2592000;
  if (interval >= 1) return Math.floor(interval) + "mo ago";
  interval = seconds / 86400;
  if (interval >= 1) return Math.floor(interval) + "d ago";
  interval = seconds / 3600;
  if (interval >= 1) return Math.floor(interval) + "h ago";
  interval = seconds / 60;
  if (interval >= 1) return Math.floor(interval) + "m ago";
  return "just now";
};

const formatNewsDate = (dateStr: string) => {
  if (!dateStr) return { day: "01", monthYear: "LEGAL NEWS" };
  try {
    const parsedDate = new Date(dateStr);
    if (!isNaN(parsedDate.getTime())) {
      const day = String(parsedDate.getDate()).padStart(2, "0");
      const monthStr = parsedDate.toLocaleString("default", { month: "short" }).toUpperCase();
      const year = parsedDate.getFullYear();
      return { day, monthYear: `${monthStr} ${year}` };
    }
  } catch (err) {}
  return { day: "01", monthYear: "LEGAL NEWS" };
};

export default function NewsContent({ initialArticles = [], initialHasMore = false }: NewsContentProps) {
  const [articles, setArticles] = useState<NewsArticle[]>(initialArticles);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [page, setPage] = useState<number>(1);
  const [hasMore, setHasMore] = useState<boolean>(initialHasMore);
  const [isLoadingMore, setIsLoadingMore] = useState<boolean>(false);

  useEffect(() => {
    // Check if initialArticles were empty or fallback articles
    const isFallbackArticles =
      initialArticles.length === 0 ||
      initialArticles.some(
        (a) =>
          a.source === "Supreme Court Dispatch" ||
          a.source === "Supreme Court Brief" ||
          !a.urlToImage
      );

    // If activeCategory is "All", we have real articles from server, and page is 1, keep them
    if (activeCategory === "All" && initialArticles.length > 0 && !isFallbackArticles && page === 1) {
      return;
    }

    async function fetchNews() {
      try {
        if (activeCategory !== "All" || articles.length === 0) {
          setIsLoading(true);
        }
        setPage(1);
        const res = await fetch(`/api/news?page=1&category=${encodeURIComponent(activeCategory)}`);
        if (res.ok) {
          const data = await res.json();
          if (data.articles && data.articles.length > 0) {
            setArticles(data.articles);
            setHasMore(data.hasMore || false);
          }
        }
      } catch (err) {
        console.error("Error loading news:", err);
      } finally {
        setIsLoading(false);
      }
    }
    fetchNews();
  }, [activeCategory]);

  const handleLoadMore = async () => {
    if (isLoadingMore || !hasMore) return;
    try {
      setIsLoadingMore(true);
      const nextPage = page + 1;
      const res = await fetch(`/api/news?page=${nextPage}&category=${encodeURIComponent(activeCategory)}`);
      if (res.ok) {
        const data = await res.json();
        setArticles(prev => [...prev, ...(data.articles || [])]);
        setHasMore(data.hasMore || false);
        setPage(nextPage);
      }
    } catch (err) {
      console.error("Error loading more news:", err);
    } finally {
      setIsLoadingMore(false);
    }
  };

  const topStory = articles.length > 0 ? articles[0] : null;
  const topStories = [
    ...(articles.length > 1 ? articles.slice(1, 4) : []),
    ...(articles.length > 9 ? articles.slice(9) : [])
  ];
  const trendingStories = articles.length > 4 ? articles.slice(4, 9) : [];

  return (
    <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 w-full pt-4 pb-12">
      {/* CATEGORY FILTER PILLS */}
      <div className="flex flex-row gap-[10px] overflow-x-auto pb-4 mb-8 no-scrollbar">
        {["All", "Legal Updates", "Supreme Court", "High Court", "Legislation", "Corporate", "Criminal"].map(cat => (
          <button 
            key={cat} 
            onClick={() => setActiveCategory(cat)}
            className={`whitespace-nowrap px-[18px] py-[8px] rounded-full text-[13px] font-semibold transition-all duration-200 cursor-pointer ${
              activeCategory === cat 
                ? "bg-[#C9A227] text-white shadow-xs" 
                : "bg-white border border-[#E8E4DE] text-[#1E1E1E] hover:border-[#C9A227]"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {isLoading ? (
        <div className="flex justify-center items-center py-20 text-[#6B6560] text-sm font-medium">
          <div className="w-8 h-8 border-4 border-[#C9A227] border-t-transparent rounded-full animate-spin mr-3" />
          Updating news feed...
        </div>
      ) : (
        <div className="flex flex-col lg:flex-row gap-[36px] lg:gap-[48px]">
          
          {/* LEFT CONTENT (Hero + Grid) */}
          <div className="lg:w-[70%]">
            
            {/* FEATURED HERO */}
            {topStory && (
              <Link
                href={topStory.slug ? `/news/${topStory.slug}` : (topStory.url || "#")}
                target={topStory.slug ? undefined : "_blank"}
                rel={topStory.slug ? undefined : "noopener noreferrer"}
                className="block group relative w-full h-[400px] sm:h-[440px] rounded-2xl overflow-hidden mb-10 shadow-sm border border-[#E8E4DE] cursor-pointer bg-[#2D2219]"
              >
                <img
                  src={getSafeImage(topStory.urlToImage)}
                  alt={topStory.title}
                  onError={handleImgError}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6 sm:p-8 w-full">
                  <span className="inline-block bg-[#C9A227] text-[#111111] text-[10px] font-bold uppercase tracking-[0.15em] px-3 py-1 rounded-sm mb-3">
                    LEAD STORY
                  </span>
                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white leading-tight max-w-[650px] line-clamp-3 mb-2 font-playfair">
                    {topStory.title}
                  </h2>
                  <p className="text-xs sm:text-sm text-gray-300 line-clamp-2 max-w-[600px] mb-4">
                    {topStory.description}
                  </p>
                  <div className="flex items-center text-xs text-white/80 gap-2">
                    <span className="font-semibold text-[#C9A227]">{topStory.source || "Court Reporter"}</span>
                    <span>•</span>
                    <span suppressHydrationWarning>{timeAgo(topStory.publishedAt)}</span>
                  </div>
                </div>
              </Link>
            )}

            {/* TODAY'S TOP STORIES */}
            {topStories.length > 0 && (
              <div className="mb-8">
                <div className="flex items-center mb-6">
                  <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#1E1E1E]">
                    LATEST JUDICIAL DISPATCHES
                  </h3>
                  <div className="flex-grow h-px bg-[#E8E4DE] ml-4" />
                </div>

                <div className="flex flex-col gap-6">
                  {topStories.map((story, idx) => {
                    const absIdx = idx + 1;
                    const { day, monthYear } = formatNewsDate(story.publishedAt);
                    return (
                      <Link
                        href={story.slug ? `/news/${story.slug}` : (story.url || "#")}
                        target={story.slug ? undefined : "_blank"}
                        rel={story.slug ? undefined : "noopener noreferrer"}
                        key={absIdx}
                        className="group relative block w-full rounded-2xl overflow-hidden bg-white border border-[#E8E4DE] shadow-xs hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
                      >
                        <div className="flex flex-col sm:flex-row items-stretch">
                          {/* Left Date Column (Desktop/Tablet) */}
                          <div className="hidden sm:flex bg-[#FAF9F6] sm:w-[85px] p-4 flex-col items-center justify-center border-r border-[#E8E4DE] shrink-0 text-center">
                            <span className="text-2xl font-bold text-[#1E1E1E] leading-none">{day}</span>
                            <span className="text-[10px] font-bold uppercase tracking-wider text-[#C9A227] mt-1">{monthYear.split(" ")[0]}</span>
                          </div>

                          {/* News Thumbnail Image */}
                          <div className="w-full sm:w-[200px] md:w-[240px] h-[190px] sm:h-auto shrink-0 relative overflow-hidden bg-[#2D2219]/5 border-b sm:border-b-0 sm:border-r border-[#E8E4DE]">
                            <img
                              src={getSafeImage(story.urlToImage)}
                              alt={story.title}
                              onError={handleImgError}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            {/* Mobile Date Overlay */}
                            <div className="sm:hidden absolute top-3 left-3 bg-black/75 backdrop-blur-xs text-white px-2.5 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-xs">
                              <span>{day} {monthYear.split(" ")[0]}</span>
                            </div>
                          </div>

                          {/* Content */}
                          <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                            <div>
                              <div className="flex items-center gap-2 mb-2 flex-wrap">
                                <span className="text-[10px] font-bold text-[#C9A227] uppercase tracking-wider bg-[#C9A227]/10 px-2 py-0.5 rounded">
                                  {story.source || "Legal Dispatch"}
                                </span>
                                <span className="text-xs text-gray-400">•</span>
                                <span className="text-xs text-gray-500" suppressHydrationWarning>{timeAgo(story.publishedAt)}</span>
                              </div>
                              <h4 className="text-base sm:text-lg font-bold text-[#1E1E1E] leading-snug group-hover:text-[#C9A227] transition-colors line-clamp-2">
                                {story.title}
                              </h4>
                              {story.description && (
                                <p className="text-xs sm:text-sm text-[#6B6560] mt-2 line-clamp-2 leading-relaxed">
                                  {story.description}
                                </p>
                              )}
                            </div>

                            <div className="mt-4 flex items-center justify-between pt-3 border-t border-gray-100 text-xs">
                              <span className="text-gray-500 font-medium">{story.author || "Legal Newsroom"}</span>
                              <span className="text-[#C9A227] font-bold group-hover:translate-x-1 transition-transform flex items-center gap-1">
                                Read Report →
                              </span>
                            </div>
                          </div>
                        </div>
                      </Link>
                    );
                  })}
                </div>

                {hasMore && (
                  <div className="mt-8 flex justify-center">
                    <button
                      onClick={handleLoadMore}
                      disabled={isLoadingMore}
                      className="px-8 py-3 bg-[#C9A227] text-white rounded-full font-semibold text-xs uppercase tracking-wider hover:bg-[#B8941F] transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed shadow-sm cursor-pointer"
                    >
                      {isLoadingMore ? "Loading Dispatches..." : "Load More News"}
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* RIGHT SIDEBAR */}
          <div className="lg:w-[30%]">
            <div className="sticky top-[100px] space-y-8">
              
              {/* TRENDING IN COURTS */}
              {trendingStories.length > 0 && (
                <div className="bg-white p-6 rounded-2xl border border-[#E8E4DE] shadow-xs">
                  <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#1E1E1E] mb-5 border-b border-gray-100 pb-3">
                    TRENDING COURT UPDATES
                  </h3>
                  
                  <div className="flex flex-col gap-4">
                    {trendingStories.map((story, index) => (
                      <Link
                        href={story.slug ? `/news/${story.slug}` : (story.url || "#")}
                        target={story.slug ? undefined : "_blank"}
                        rel={story.slug ? undefined : "noopener noreferrer"}
                        key={index}
                        className="group flex gap-3 pb-3 border-b border-gray-100 last:border-0 last:pb-0 cursor-pointer items-start"
                      >
                        <span className="text-xl font-bold text-[#C9A227] italic shrink-0 w-6 font-playfair pt-1">
                          0{index + 1}
                        </span>
                        <div className="w-[74px] h-[54px] rounded-xl overflow-hidden shrink-0 bg-[#2D2219]/5 border border-[#E8E4DE] relative">
                          <img
                            src={getSafeImage(story.urlToImage)}
                            alt={story.title}
                            onError={handleImgError}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <div className="min-w-0 flex-1">
                          <h4 className="text-xs sm:text-sm font-semibold text-[#1E1E1E] leading-snug group-hover:text-[#C9A227] transition-colors line-clamp-2">
                            {story.title}
                          </h4>
                          <div className="text-[11px] text-[#9C958C] mt-1" suppressHydrationWarning>
                            {story.source || "Court"} • {timeAgo(story.publishedAt)}
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* ADVOCATE CONSULTATION INTERLINK BANNER */}
              <div className="bg-gradient-to-br from-[#2D2219] to-[#1E1711] text-white p-6 rounded-2xl border border-[#D4AF37]/30 shadow-md relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#B8860B]/10 rounded-full blur-2xl pointer-events-none" />
                <span className="inline-block px-2.5 py-0.5 rounded-full bg-[#B8860B]/20 text-[#D4AF37] text-[9px] font-bold uppercase tracking-wider mb-3">
                  Legal Consultation
                </span>
                <h4 className="text-sm font-bold text-white leading-snug mb-2 font-playfair">
                  Have a Question on Court Orders or Rights?
                </h4>
                <p className="text-[11px] text-gray-300 leading-relaxed mb-4">
                  Connect with verified legal counsel on AMA Connect for confidential advice.
                </p>
                <div className="space-y-2">
                  <Link
                    href="/ask-me-anything"
                    className="flex items-center justify-center w-full py-2 px-3 rounded-xl bg-gradient-to-r from-[#B8860B] to-[#D4AF37] text-white text-xs font-bold hover:brightness-105 transition-all shadow-xs"
                  >
                    Ask AMA (Free) →
                  </Link>
                  <Link
                    href="/interviews"
                    className="flex items-center justify-center w-full py-2 px-3 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs font-semibold transition-all border border-white/10"
                  >
                    Explore Lawyer Case Studies →
                  </Link>
                </div>
              </div>

              {/* KEY JUDGMENTS THIS WEEK */}
              <div className="bg-white p-6 rounded-2xl border border-[#E8E4DE] shadow-xs">
                <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#1E1E1E] mb-4 border-b border-gray-100 pb-3">
                  WEEKLY BENCH HIGHLIGHTS
                </h3>
                <div className="flex flex-col gap-3 text-xs sm:text-sm">
                  <div className="flex items-start gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-[#C9A227] shrink-0 mt-1.5" />
                    <span className="text-gray-800 font-medium">Supreme Court on Digital Privacy & Electronic Evidence under BSA</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-[#C9A227] shrink-0 mt-1.5" />
                    <span className="text-gray-800 font-medium">Delhi High Court Clarifies Section 138 NI Act Territorial Jurisdiction</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-[#C9A227] shrink-0 mt-1.5" />
                    <span className="text-gray-800 font-medium">NCLAT Ruling on Section 9 Insolvency Petitions by Operational Creditors</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-[#C9A227] shrink-0 mt-1.5" />
                    <span className="text-gray-800 font-medium">Bombay High Court Guidelines on Anticipatory Bail in Commercial Frauds</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
          
        </div>
      )}
    </div>
  );
}
