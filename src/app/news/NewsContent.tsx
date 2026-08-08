"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

interface NewsArticle {
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  source: string;
  author: string;
  slug?: string;
}

const timeAgo = (dateStr: string) => {
  const date = new Date(dateStr);
  const now = new Date();
  const seconds = Math.floor((now.getTime() - date.getTime()) / 1000);

  let interval = seconds / 31536000;
  if (interval > 1) return Math.floor(interval) + "y ago";
  interval = seconds / 2592000;
  if (interval > 1) return Math.floor(interval) + "mo ago";
  interval = seconds / 86400;
  if (interval > 1) return Math.floor(interval) + "d ago";
  interval = seconds / 3600;
  if (interval > 1) return Math.floor(interval) + "h ago";
  interval = seconds / 60;
  if (interval > 1) return Math.floor(interval) + "m ago";
  return "just now";
};

const formatNewsDate = (dateStr: string) => {
  if (!dateStr) return { day: "", monthYear: "" };
  try {
    const parsedDate = new Date(dateStr);
    if (!isNaN(parsedDate.getTime())) {
      const day = String(parsedDate.getDate()).padStart(2, "0");
      const monthStr = parsedDate.toLocaleString('default', { month: 'short' }).toUpperCase();
      const year = parsedDate.getFullYear();
      return { day, monthYear: `${monthStr} ${year}` };
    }
  } catch (err) {}
  return { day: "00", monthYear: "UNKNOWN" };
};

export default function NewsContent() {
  const [articles, setArticles] = useState<NewsArticle[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [brokenImages, setBrokenImages] = useState<Record<number, boolean>>({});
  const [activeCategory, setActiveCategory] = useState<string>("All");

  useEffect(() => {
    async function fetchNews() {
      try {
        setIsLoading(true);
        const res = await fetch(`/api/news?page=1&category=${encodeURIComponent(activeCategory)}`);
        if (res.ok) {
          const data = await res.json();
          setArticles(data.articles || []);
        }
      } catch (err) {
        console.error("Error loading news:", err);
      } finally {
        setIsLoading(false);
      }
    }
    fetchNews();
  }, [activeCategory]);

  const handleImageError = (index: number) => {
    setBrokenImages((prev) => ({ ...prev, [index]: true }));
  };

  const topStory = articles.length > 0 ? articles[0] : null;
  const topStories = articles.length > 1 ? articles.slice(1, 4) : [];
  const trendingStories = articles.length > 4 ? articles.slice(4, 9) : [];

  return (
    <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 w-full pt-12 pb-16 flex-1">
      {/* PAGE HEADER */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-baseline gap-4 mb-8">
        <div>
          <h1 className="text-[48px] font-bold text-[#1E1E1E] leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
            Latest Legal News
          </h1>
          <p className="text-[16px] font-normal text-[#6B6560] leading-[1.6] max-w-[600px] mt-2" style={{ fontFamily: "'Inter', sans-serif" }}>
            Stay informed with the latest updates from Indian courts, recent judgments, and important legal developments.
          </p>
        </div>
        <div className="text-[12px] font-normal text-[#9C958C] md:text-right" style={{ fontFamily: "'Inter', sans-serif" }}>
          Edition: {new Date().toLocaleDateString('en-US', { month: 'long', day: '2-digit', year: 'numeric' })}
        </div>
      </div>

      {/* CATEGORY FILTER PILLS */}
      <div className="flex flex-row gap-[12px] overflow-x-auto pb-4 mb-8 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]" style={{ fontFamily: "'Inter', sans-serif" }}>
        {['All', 'Supreme Court', 'High Court', 'Legislation', 'Corporate', 'Criminal'].map(cat => (
          <button 
            key={cat} 
            onClick={() => setActiveCategory(cat)}
            className={`whitespace-nowrap px-[20px] py-[10px] rounded-[6px] text-[13px] font-medium transition-colors duration-300 ${
              activeCategory === cat 
                ? 'bg-[#C9A227] border border-[#C9A227] text-[#FFFFFF]' 
                : 'bg-[#FFFFFF] border border-[#E8E4DE] text-[#1E1E1E] hover:border-[#C9A227]'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {isLoading ? (
        <div className="flex justify-center items-center py-20 text-[#6B6560] text-lg font-medium" style={{ fontFamily: "'Inter', sans-serif" }}>
          Loading latest news...
        </div>
      ) : (
        <div className="flex flex-col lg:flex-row gap-[48px]">
          
          {/* LEFT CONTENT (Hero + Grid) */}
          <div className="lg:w-[70%]">
            
            {/* FEATURED HERO */}
            {topStory && (
              <Link href={topStory.slug ? `/news/${topStory.slug}` : (topStory.url || '#')} target={topStory.slug ? undefined : "_blank"} rel={topStory.slug ? undefined : "noopener noreferrer"} className="block group relative w-full h-[420px] rounded-[8px] overflow-hidden mb-12 shadow-[0_2px_8px_rgba(0,0,0,0.06)] cursor-pointer">
                {topStory.urlToImage && !brokenImages[0] ? (
                  <img src={topStory.urlToImage} alt={topStory.title} onError={() => handleImageError(0)} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                ) : (
                  <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-[#1E1E1E] to-[#6B6560]" />
                )}
                <div className="absolute inset-0 bg-gradient-to-r from-[rgba(0,0,0,0.85)] via-[rgba(0,0,0,0.4)] to-[rgba(0,0,0,0.1)]" />
                <div className="absolute bottom-0 left-0 p-[40px] w-full">
                  <span className="inline-block bg-[#C9A227] text-[#FFFFFF] text-[10px] font-bold uppercase tracking-[0.15em] px-[14px] py-[6px] rounded-[4px] mb-[16px]" style={{ fontFamily: "'Inter', sans-serif" }}>
                    TOP STORY
                  </span>
                  <h2 className="text-[28px] md:text-[36px] font-semibold text-[#FFFFFF] leading-[1.2] max-w-[550px] line-clamp-3" style={{ fontFamily: "'Playfair Display', serif", textShadow: '0 2px 12px rgba(0,0,0,0.4)' }}>
                    {topStory.title}
                  </h2>
                  <div className="flex items-center mt-[16px]" style={{ fontFamily: "'Inter', sans-serif" }}>
                    <span className="text-[13px] text-[#FFFFFF] opacity-90">{topStory.source || 'News Source'}</span>
                    <span className="w-[4px] h-[4px] bg-[#C9A227] rounded-full mx-[8px]" />
                    <span className="text-[13px] text-[#FFFFFF] opacity-70">{timeAgo(topStory.publishedAt)}</span>
                  </div>
                </div>
              </Link>
            )}

            {/* TODAY'S TOP STORIES */}
            {topStories.length > 0 && (
              <div className="mb-[24px]">
                <div className="flex items-center mb-[24px]">
                  <h3 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#1E1E1E]" style={{ fontFamily: "'Inter', sans-serif" }}>
                    TODAY'S TOP STORIES
                  </h3>
                  <div className="flex-grow h-[1px] bg-[#E8E4DE] ml-[16px]" />
                </div>

                <div className="flex flex-col gap-[24px]">
                  {topStories.map((story, idx) => {
                    const absIdx = idx + 1; // offset from topStory
                    const { day, monthYear } = formatNewsDate(story.publishedAt);
                    return (
                      <Link href={story.slug ? `/news/${story.slug}` : (story.url || '#')} target={story.slug ? undefined : "_blank"} rel={story.slug ? undefined : "noopener noreferrer"} key={absIdx} className="group relative block w-full rounded-[24px] overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.15)] hover:-translate-y-1 transition-all duration-300">
                        {/* Base Image */}
                        <div className="absolute inset-0">
                          {story.urlToImage && !brokenImages[absIdx] ? (
                            <img src={story.urlToImage} alt={story.title} onError={() => handleImageError(absIdx)} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                          ) : (
                            <div className="w-full h-full bg-[#1E1E1E]" />
                          )}
                        </div>
                        
                        {/* Left-to-right dark gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-transparent sm:from-black/95 sm:via-black/75 sm:to-transparent" />

                        {/* Card Content Layout */}
                        <div className="relative z-10 flex h-full min-h-[280px]">
                          
                          {/* Left Date Sidebar */}
                          <div className="w-[70px] shrink-0 flex flex-col items-center pt-8">
                            <span className="text-[28px] font-bold text-white leading-none" style={{ fontFamily: "'Inter', sans-serif" }}>{day}</span>
                            <span className="text-[12px] font-semibold uppercase tracking-widest text-white mt-2" style={{ fontFamily: "'Inter', sans-serif" }}>{monthYear.split(' ')[0]}</span>
                            <div className="w-[24px] h-[2px] bg-[#C9A227] mt-3" />
                          </div>

                          {/* Glass Panel Container */}
                          <div className="flex-1 max-w-[340px] py-4 pr-4">
                            {/* Glass Panel */}
                            <div className="h-full w-full rounded-[16px] bg-white/5 backdrop-blur-[3px] sm:backdrop-blur-[10px] border border-white/10 p-5 flex flex-col justify-between shadow-[0_8px_32px_rgba(0,0,0,0.2)]">
                              
                              <div>
                                {/* LATEST Pill */}
                                <div className="inline-block bg-[#C9A227] rounded-[8px] px-[12px] py-[4px] mb-4">
                                  <span className="text-white text-[10px] font-bold uppercase tracking-[0.1em]" style={{ fontFamily: "'Inter', sans-serif" }}>LATEST</span>
                                </div>

                                {/* Headline */}
                                <h4 className="text-[17px] sm:text-[19px] font-medium text-white leading-[1.3] line-clamp-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                                  {story.title}
                                </h4>
                              </div>
                              
                              <div className="mt-4">
                                <div className="w-full h-[1px] bg-white/10 mb-4" />
                                
                                {/* Footer */}
                                <div className="flex items-center gap-3">
                                  <div className="w-7 h-7 rounded-full bg-white/10 border border-white/5 flex items-center justify-center shrink-0">
                                    <span className="text-[12px] font-semibold text-[#C9A227]" style={{ fontFamily: "'Inter', sans-serif" }}>{story.source?.[0] || 'N'}</span>
                                  </div>
                                  <div className="flex items-center text-[12px] font-medium" style={{ fontFamily: "'Inter', sans-serif" }}>
                                    <span className="text-white/90 truncate max-w-[100px]">{story.source || 'News Source'}</span>
                                    <span className="text-white/40 mx-2">•</span>
                                    <span className="text-white/70 flex-shrink-0">{timeAgo(story.publishedAt)}</span>
                                  </div>
                                </div>
                              </div>

                            </div>
                          </div>
                        </div>
                      </Link>
                    )
                  })}
                </div>
              </div>
            )}
          </div>

          {/* RIGHT SIDEBAR */}
          <div className="lg:w-[30%] mt-[48px] lg:mt-0">
            <div className="sticky top-[100px]">
              
              {/* TRENDING IN COURTS */}
              {trendingStories.length > 0 && (
                <div className="mb-[40px]">
                  <h3 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#1E1E1E] mb-[24px]" style={{ fontFamily: "'Inter', sans-serif" }}>
                    TRENDING IN COURTS
                  </h3>
                  
                  <div className="flex flex-col">
                    {trendingStories.map((story, index) => (
                      <Link href={story.slug ? `/news/${story.slug}` : (story.url || '#')} target={story.slug ? undefined : "_blank"} rel={story.slug ? undefined : "noopener noreferrer"} key={index} className={`group flex gap-[16px] pb-[20px] mb-[20px] ${index < trendingStories.length - 1 ? 'border-b border-[#E8E4DE]' : ''} cursor-pointer`}>
                        <div className="w-[36px] flex-shrink-0 text-[28px] text-[#C9A227] italic group-hover:text-[#b08d22] transition-colors duration-300" style={{ fontFamily: "'Playfair Display', serif" }}>
                          0{index + 1}
                        </div>
                        <div className="flex flex-col group-hover:opacity-80 transition-opacity duration-300">
                          <h4 className="text-[14px] font-semibold text-[#1E1E1E] leading-[1.4] line-clamp-2" style={{ fontFamily: "'Inter', sans-serif" }}>
                            {story.title}
                          </h4>
                          <div className="text-[12px] text-[#9C958C] mt-[4px]" style={{ fontFamily: "'Inter', sans-serif" }}>
                            {story.source || 'News Source'} • {timeAgo(story.publishedAt)}
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* KEY JUDGMENTS THIS WEEK */}
              <div>
                <h3 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#1E1E1E] mb-[16px] mt-[40px]" style={{ fontFamily: "'Inter', sans-serif" }}>
                  KEY JUDGMENTS THIS WEEK
                </h3>
                <div className="flex flex-col gap-[12px]">
                  {[
                    'SC on Privacy & Aadhaar Link',
                    'HC on Electoral Bonds Data',
                    'NCLAT on Insolvency Moratorium'
                  ].map((text, idx) => (
                    <div key={idx} className="flex items-center gap-[10px] cursor-pointer hover:opacity-80 transition-opacity duration-300">
                      <div className="w-[6px] h-[6px] rounded-full bg-[#C9A227] flex-shrink-0" />
                      <span className="text-[14px] text-[#1E1E1E] font-medium" style={{ fontFamily: "'Inter', sans-serif" }}>{text}</span>
                    </div>
                  ))}
                </div>

              </div>

            </div>
          </div>
          
        </div>
      )}
    </div>
  );
}
