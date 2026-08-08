"use client";

import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

interface NewsItem {
  title: string;
  url: string;
  source: string;
}

/**
 * Thin rotating news-flash ticker. Sits in normal document flow directly
 * below the Navbar (not fixed/sticky itself — it should scroll away
 * normally, only the Navbar above it stays pinned).
 *
 * Pulls real headlines from the same /api/news endpoint that powers
 * CourtroomExperiences.tsx — no separate/duplicate data source.
 */
export default function NewsFlashTicker() {
  const [items, setItems] = useState<NewsItem[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    async function fetchTicker() {
      try {
        const res = await fetch("/api/news?page=1");
        if (!res.ok) throw new Error("Failed to fetch news for ticker");
        const data = await res.json();
        const mapped: NewsItem[] = (data.articles || [])
          .slice(0, 8)
          .map((a: any) => ({
            title: a.title,
            url: a.url,
            source: a.source,
          }));
        setItems(mapped);
      } catch (err) {
        console.error("NewsFlashTicker: failed to load headlines", err);
      }
    }
    fetchTicker();
  }, []);

  useEffect(() => {
    if (items.length <= 1) return;
    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % items.length);
    }, 5000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [items.length]);

  // Don't render anything (not even an empty bar) if there's no real
  // data yet or the user has dismissed it — no placeholder/fake content.
  if (!isVisible || items.length === 0 || pathname?.startsWith("/authority")) return null;

  const current = items[activeIndex];

  return (
    <div className="w-full mt-6 bg-[#FAF8F3] border-b border-gray-200/60 px-4 sm:px-6 lg:px-8 py-2 transform-gpu shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center gap-3 sm:gap-4">
        {/* LIVE badge */}
        <div className="flex items-center gap-1.5 shrink-0">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500" />
          </span>
          <span className="text-[10px] sm:text-[11px] font-extrabold text-red-400 uppercase tracking-widest">
            News Flash
          </span>
        </div>

        <div className="h-4 w-px bg-black/15 shrink-0" />

        {/* Rotating headline */}
        <a
          href={current.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 min-w-0 overflow-hidden"
        >
          <div
            key={activeIndex}
            className="animate-in fade-in slide-in-from-bottom-1 duration-500"
          >
            <p className="text-black text-xs sm:text-sm font-semibold truncate hover:underline">
              {current.title}
              <span className="text-black/40 font-medium ml-2 hidden sm:inline">
                — {current.source}
              </span>
            </p>
          </div>
        </a>

        {/* Progress dots */}
        <div className="hidden sm:flex items-center gap-1 shrink-0">
          {items.slice(0, 5).map((_, i) => (
            <span
              key={i}
              className={`h-1 rounded-full transition-all duration-300 ${
                i === activeIndex % 5 ? "w-4 bg-[#D4AF37]" : "w-1 bg-black/20"
              }`}
            />
          ))}
        </div>

        {/* Dismiss */}
        <button
          onClick={() => setIsVisible(false)}
          className="shrink-0 text-black/40 hover:text-black/80 transition-colors p-1"
          aria-label="Dismiss news ticker"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
}
