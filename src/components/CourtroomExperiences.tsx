"use client";

import React, { useState, useEffect, useRef } from "react";

interface Article {
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  source: string;
  author: string;
}

export default function CourtroomExperiences() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isFetchingMore, setIsFetchingMore] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const [brokenImages, setBrokenImages] = useState<Record<number, boolean>>({});

  useEffect(() => {
    async function fetchInitialNews() {
      try {
        setIsLoading(true);
        const res = await fetch("/api/news?page=1");
        if (!res.ok) {
          throw new Error("Failed to fetch legal news");
        }
        const data = await res.json();
        setArticles(data.articles || []);
        setHasMore(data.hasMore ?? false);
      } catch (err) {
        console.error("Error loading Indian legal news:", err);
      } finally {
        setIsLoading(false);
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
      if (!res.ok) {
        throw new Error("Failed to fetch more news");
      }
      const data = await res.json();
      if (data.articles && data.articles.length > 0) {
        setArticles((prev) => [...prev, ...data.articles]);
        setPage(nextPage);
        setHasMore(data.hasMore ?? false);
      } else {
        setHasMore(false);
      }
    } catch (err) {
      console.error("Error loading more articles:", err);
    } finally {
      setIsFetchingMore(false);
    }
  };

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const target = e.currentTarget;
    // Detect if we scrolled within 350px of the right end of the horizontal container
    const distanceToRight = target.scrollWidth - target.scrollLeft - target.clientWidth;
    if (distanceToRight < 350 && hasMore && !isFetchingMore) {
      loadMoreArticles();
    }
  };

  const handleImageError = (index: number) => {
    setBrokenImages((prev) => ({ ...prev, [index]: true }));
  };

  // Rotating warm color/pastel gradients for text-only cards
  const gradients = [
    "from-[#FFAFA3] to-[#FFC6B3]",
    "from-[#FFD3B6] to-[#FFE5D9]",
    "from-[#FFCAD4] to-[#F4ACB7]",
    "from-[#FFE5D9] to-[#FFD3B6]",
  ];

  if (isLoading) {
    return (
      <section className="w-full py-16 sm:py-24 overflow-hidden">
        {/* Header Container */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-[#2D241E] leading-[1.1] max-w-3xl">
            Real courtroom experiences that changed the way I practice law.
          </h2>
        </div>

        {/* Shimmering Skeleton Loader */}
        <div 
          className="flex overflow-x-auto gap-4 sm:gap-6 pb-12 snap-x snap-mandatory px-4 sm:px-6 lg:px-8 animate-pulse"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          <style dangerouslySetInnerHTML={{__html: `
            .flex::-webkit-scrollbar { display: none; }
          `}} />

          <div className="hidden 2xl:block w-[calc((100vw-80rem)/2-2rem)] flex-shrink-0"></div>

          {Array(4).fill(0).map((_, index) => (
            <div 
              key={index}
              className="flex-shrink-0 w-[280px] sm:w-[320px] h-[480px] sm:h-[520px] rounded-3xl snap-start bg-gray-50 border border-gray-100 flex flex-col justify-end p-6 sm:p-8"
            >
              <div className="h-6 bg-gray-200/80 rounded w-11/12 mb-4"></div>
              <div className="h-6 bg-gray-200/80 rounded w-3/4 mb-12"></div>
              <div className="h-4 bg-gray-200/80 rounded w-1/2 mb-4"></div>
              <div className="h-3 bg-gray-200/80 rounded w-1/3 mb-2"></div>
              <div className="h-3 bg-gray-200/80 rounded w-1/4"></div>
            </div>
          ))}

          <div className="w-4 sm:w-6 lg:w-8 flex-shrink-0"></div>
        </div>
      </section>
    );
  }

  return (
    <section className="w-full py-16 sm:py-24 overflow-hidden">
      {/* Header Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-[#2D241E] leading-[1.1] max-w-3xl">
          Real courtroom experiences that changed the way I practice law.
        </h2>
      </div>

      {/* News Carousel */}
      <div 
        className="flex overflow-x-auto gap-4 sm:gap-6 pb-12 snap-x snap-mandatory px-4 sm:px-6 lg:px-8"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        onScroll={handleScroll}
      >
        <style dangerouslySetInnerHTML={{__html: `
          .flex::-webkit-scrollbar { display: none; }
        `}} />

        {/* Dynamic spacer to align the first card with the 7xl container on very large screens */}
        <div className="hidden 2xl:block w-[calc((100vw-80rem)/2-2rem)] flex-shrink-0"></div>

        {articles.map((art, index) => {
          const hasImage = !!art.urlToImage && !brokenImages[index];
          const bgGradient = gradients[index % gradients.length];

          return (
            <a 
              key={index}
              href={art.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 w-[280px] sm:w-[320px] h-[480px] sm:h-[520px] rounded-3xl snap-start bg-white shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 border border-gray-100 flex flex-col overflow-hidden relative group"
            >
              {hasImage ? (
                <>
                  {/* Background Article Image */}
                  <img 
                    src={art.urlToImage} 
                    alt={art.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={() => handleImageError(index)}
                  />
                  {/* Modern dark gradient overlay for optimal readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/30 group-hover:via-black/70 transition-all duration-300 z-0"></div>
                </>
              ) : (
                /* Sleek light gradient fallback */
                <div className={`absolute top-0 left-0 w-full h-[70%] bg-gradient-to-b ${bgGradient} from-40% to-white/0 to-100% z-0`}></div>
              )}
              
              {/* Bottom Content Area */}
              <div className={`relative z-10 flex-1 flex flex-col justify-end p-6 sm:p-8 ${hasImage ? 'text-white' : 'text-[#2D241E]'}`}>
                <h3 className={`font-semibold text-lg sm:text-[20px] leading-snug mb-6 sm:mb-8 line-clamp-4 group-hover:underline transition-colors duration-200 ${hasImage ? 'text-white' : 'text-[#2D241E]'}`}>
                  {art.title}
                </h3>
                
                <div>
                  <p className={`text-sm font-semibold mb-1 line-clamp-1 ${hasImage ? 'text-gray-100' : 'text-[#2D241E]'}`}>
                    {art.author ? `By ${art.author.trim()}` : `By ${art.source}`}
                  </p>
                  <div className="mb-2">
                    <p className={`text-[10px] sm:text-xs leading-tight opacity-75`}>Publisher</p>
                    <p className={`text-[11px] sm:text-xs font-medium leading-tight line-clamp-1`}>{art.source}</p>
                  </div>
                  <div className="flex justify-between items-center mt-3 pt-3 border-t border-dashed border-gray-200/20">
                    <p className="text-[10px] sm:text-xs opacity-75">
                      {new Date(art.publishedAt).toLocaleDateString('en-IN', {
                        day: '2-digit',
                        month: 'short',
                        year: 'numeric'
                      })}
                    </p>
                    <span className={`text-[10px] sm:text-xs font-bold uppercase tracking-wider ${hasImage ? 'text-[#FFC6B3] group-hover:text-white' : 'text-[#D4AF37] group-hover:text-[#bca032]'}`}>
                      Read Article →
                    </span>
                  </div>
                </div>
              </div>
            </a>
          );
        })}

        {/* Shimmering skeletons when loading more items at the right end of the carousel */}
        {isFetchingMore && (
          <>
            {Array(2).fill(0).map((_, index) => (
              <div 
                key={`loading-more-${index}`}
                className="flex-shrink-0 w-[280px] sm:w-[320px] h-[480px] sm:h-[520px] rounded-3xl snap-start bg-gray-50 border border-gray-100 flex flex-col justify-end p-6 sm:p-8 animate-pulse"
              >
                <div className="h-6 bg-gray-200/80 rounded w-11/12 mb-4"></div>
                <div className="h-6 bg-gray-200/80 rounded w-3/4 mb-12"></div>
                <div className="h-4 bg-gray-200/80 rounded w-1/2 mb-4"></div>
                <div className="h-3 bg-gray-200/80 rounded w-1/3 mb-2"></div>
                <div className="h-3 bg-gray-200/80 rounded w-1/4"></div>
              </div>
            ))}
          </>
        )}
        
        {/* Spacer at the end for padding */}
        <div className="w-4 sm:w-6 lg:w-8 flex-shrink-0"></div>
      </div>
    </section>
  );
}
