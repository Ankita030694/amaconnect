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

export default function LatestLegalNewsCompact() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [brokenImages, setBrokenImages] = useState<Record<number, boolean>>({});

  useEffect(() => {
    async function fetchNews() {
      try {
        setIsLoading(true);
        const res = await fetch("/api/news?page=1");
        if (res.ok) {
          const data = await res.json();
          // We only need the top 3 for the compact view
          setArticles((data.articles || []).slice(0, 3));
        }
      } catch (err) {
        console.error("Error loading Indian legal news:", err);
      } finally {
        setIsLoading(false);
      }
    }
    fetchNews();
  }, []);

  const handleImageError = (index: number) => {
    setBrokenImages((prev) => ({ ...prev, [index]: true }));
  };

  const gradients = [
    "from-[#FFAFA3] to-[#FFC6B3]",
    "from-[#FFD3B6] to-[#FFE5D9]",
    "from-[#FFCAD4] to-[#F4ACB7]",
  ];

  return (
    <section className="w-full flex flex-col font-sans">
      <div className="flex items-center justify-between mb-4 sm:mb-6">
        <h3 className="text-xl sm:text-2xl font-extrabold text-[#2D2219]">Latest Legal News</h3>
        {/* We reuse the CourtroomExperiences full component page if there is one, or just the same link */}
        <Link href="/news" className="text-sm font-bold text-[#D4AF37] hover:text-[#B8860B] transition-colors">
          View All
        </Link>
      </div>

      <div className="flex flex-col gap-4 flex-grow">
        {isLoading ? (
          // Skeletons
          Array(3).fill(0).map((_, i) => (
            <div key={i} className="flex gap-4 p-3 rounded-2xl border border-gray-100 bg-gray-50/50 animate-pulse">
              <div className="w-[100px] h-[80px] rounded-xl bg-gray-200 shrink-0" />
              <div className="flex-1 py-1">
                <div className="h-4 bg-gray-200 rounded w-full mb-2" />
                <div className="h-4 bg-gray-200 rounded w-2/3 mb-4" />
                <div className="h-3 bg-gray-200 rounded w-1/3" />
              </div>
            </div>
          ))
        ) : (
          articles.map((art, index) => {
            const hasImage = !!art.urlToImage && !brokenImages[index];
            const bgGradient = gradients[index % gradients.length];

            return (
              <a
                key={index}
                href={art.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-4 p-3 rounded-2xl border border-transparent hover:border-gray-200 hover:bg-gray-50 transition-all duration-300 group"
              >
                <div className="w-[100px] h-[80px] sm:w-[110px] sm:h-[85px] rounded-xl overflow-hidden shrink-0 relative bg-gray-100">
                  {hasImage ? (
                    <img
                      src={art.urlToImage}
                      alt={art.title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                      onError={() => handleImageError(index)}
                    />
                  ) : (
                    <div className={`w-full h-full bg-gradient-to-br ${bgGradient}`} />
                  )}
                </div>

                <div className="flex flex-col flex-1 justify-between">
                  <h4 className="font-bold text-[#2D2219] group-hover:text-[#D4AF37] transition-colors text-sm leading-snug line-clamp-2">
                    {art.title}
                  </h4>
                  <div className="flex items-center gap-2 text-[11px] font-medium text-gray-500 mt-2">
                    <span className="truncate max-w-[100px] sm:max-w-[120px] text-gray-700">{art.source}</span>
                    <span className="w-1 h-1 rounded-full bg-gray-300 shrink-0" />
                    <span className="shrink-0">{timeAgo(art.publishedAt)}</span>
                  </div>
                </div>
              </a>
            );
          })
        )}
      </div>
    </section>
  );
}
