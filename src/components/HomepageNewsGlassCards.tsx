"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

interface Article {
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

export default function HomepageNewsGlassCards() {
  const [allArticles, setAllArticles] = useState<Article[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [brokenImages, setBrokenImages] = useState<Record<string, boolean>>({});

  useEffect(() => {
    async function fetchNews() {
      try {
        setIsLoading(true);
        const res = await fetch("/api/news?page=1");
        if (res.ok) {
          const data = await res.json();
          setAllArticles(data.articles || []);
        }
      } catch (err) {
        console.error("Error loading Indian legal news:", err);
      } finally {
        setIsLoading(false);
      }
    }
    fetchNews();
  }, []);

  useEffect(() => {
    if (allArticles.length <= 3) return;

    const interval = setInterval(() => {
      setIsFading(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 3) % allArticles.length);
        setIsFading(false);
      }, 400); // 400ms fade transition
    }, 6000); // Rotate every 6 seconds

    return () => clearInterval(interval);
  }, [allArticles.length]);

  const handleImageError = (url: string) => {
    setBrokenImages((prev) => ({ ...prev, [url]: true }));
  };

  if (isLoading || allArticles.length === 0) {
    return null; // Or a skeleton
  }

  // Get current 3 articles to display (wrap around if needed)
  const displayedArticles = allArticles.length > 3 
    ? [
        allArticles[currentIndex % allArticles.length],
        allArticles[(currentIndex + 1) % allArticles.length],
        allArticles[(currentIndex + 2) % allArticles.length]
      ]
    : allArticles;

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 mb-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl sm:text-2xl font-extrabold text-[#2D2219]">Trending Legal News</h2>
        <Link href="/news" className="text-sm font-bold text-[#D4AF37] hover:text-[#B8860B] transition-colors">
          View All News
        </Link>
      </div>
      <div className={`grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 transition-opacity duration-500 ${isFading ? 'opacity-0' : 'opacity-100'}`}>
        {displayedArticles.map((story, index) => {
          if (!story) return null;
          const hasImage = !!story.urlToImage && !brokenImages[story.urlToImage];

          return (
            <Link
              key={`${currentIndex}-${index}`}
              href={story.slug ? `/news/${story.slug}` : (story.url || '#')}
              target={story.slug ? undefined : "_blank"}
              rel={story.slug ? undefined : "noopener noreferrer"}
              className="group relative block w-full rounded-[20px] overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.12)] hover:-translate-y-1 transition-all duration-300 h-[160px] sm:h-[180px]"
            >
              {/* Base Image */}
              <div className="absolute inset-0 bg-[#1E1E1E]">
                {hasImage && (
                  <img
                    src={story.urlToImage}
                    alt={story.title}
                    onError={() => handleImageError(story.urlToImage)}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                )}
              </div>

              {/* Bottom-heavy gradient to ensure text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* Card Content Layout */}
              <div className="relative z-10 flex flex-col justify-end h-full p-2 sm:p-3">
                
                {/* Glass Panel */}
                <div className="w-full rounded-[14px] bg-white/5 backdrop-blur-[2px] border border-white/10 p-3 sm:p-4 shadow-[0_8px_32px_rgba(0,0,0,0.2)]">
                  
                  <div>
                    {/* LATEST Pill */}
                    <div className="inline-block bg-[#C9A227] rounded-[6px] px-[8px] py-[3px] mb-2">
                      <span className="text-white text-[9px] font-bold uppercase tracking-[0.1em]" style={{ fontFamily: "'Inter', sans-serif" }}>LATEST</span>
                    </div>

                    {/* Headline */}
                    <h4 className="text-[13px] sm:text-[14px] font-medium text-white leading-[1.3] line-clamp-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                      {story.title}
                    </h4>
                  </div>
                  
                  <div className="mt-2">
                    {/* Footer */}
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded-full bg-white/10 border border-white/5 flex items-center justify-center shrink-0">
                        <span className="text-[10px] font-semibold text-[#C9A227]" style={{ fontFamily: "'Inter', sans-serif" }}>{story.source?.[0] || 'N'}</span>
                      </div>
                      <div className="flex items-center text-[10px] font-medium" style={{ fontFamily: "'Inter', sans-serif" }}>
                        <span className="text-white/90 truncate max-w-[100px]">{story.source || 'News Source'}</span>
                        <span className="text-white/40 mx-2">•</span>
                        <span className="text-white/70 flex-shrink-0">{timeAgo(story.publishedAt)}</span>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
