"use client";

import { useState } from "react";
import Link from "next/link";
import { FadeIn } from "@/components/FadeIn";

const gridConfigFull = [
  {
    grid: "col-span-1 md:col-span-1 lg:col-span-1 row-span-1 lg:row-span-2 min-h-[380px] lg:min-h-0",
    flex: "flex-col-reverse",
    textClass: "h-[55%] lg:h-[45%]",
    imageClass: "h-[45%] lg:h-[55%]"
  },
  {
    grid: "col-span-1 md:col-span-2 lg:col-span-2 row-span-1 min-h-[320px] lg:min-h-0",
    flex: "flex-col-reverse md:flex-row",
    textClass: "h-[50%] md:h-full md:w-[60%]",
    imageClass: "h-[50%] md:h-full md:w-[40%]"
  },
  {
    grid: "col-span-1 md:col-span-1 lg:col-span-1 row-span-1 min-h-[320px] lg:min-h-0",
    flex: "flex-col-reverse",
    textClass: "h-[50%] lg:h-[45%] p-4", // Reduced padding
    imageClass: "h-[50%] lg:h-[55%]",
    isCompact: true // Flag for smaller text
  },
  {
    grid: "col-span-1 md:col-span-2 lg:col-span-1 row-span-1 lg:row-span-2 min-h-[380px] lg:min-h-0",
    flex: "flex-col-reverse md:flex-row lg:flex-col-reverse",
    textClass: "h-[55%] md:h-full md:w-[60%] lg:w-full lg:h-[45%]",
    imageClass: "h-[45%] md:h-full md:w-[40%] lg:w-full lg:h-[55%]"
  },
  {
    grid: "col-span-1 md:col-span-2 lg:col-span-2 row-span-1 min-h-[320px] lg:min-h-0",
    flex: "flex-col-reverse md:flex-row",
    textClass: "h-[50%] md:h-full md:w-[60%]",
    imageClass: "h-[50%] md:h-full md:w-[40%]"
  }
];

const gridConfigEmbedded = [
  { grid: "col-span-2 md:col-span-2 lg:col-span-2 row-span-1 min-h-[150px] sm:min-h-[170px]", flex: "flex-col-reverse sm:flex-row", textClass: "h-[50%] sm:h-full sm:w-[60%]", imageClass: "h-[50%] sm:h-full sm:w-[40%]" },
  { grid: "col-span-1 md:col-span-1 lg:col-span-1 row-span-1 min-h-[150px] sm:min-h-[170px]", flex: "flex-col-reverse", textClass: "h-[50%]", imageClass: "h-[50%]", isCompact: true },
  { grid: "col-span-1 md:col-span-1 lg:col-span-1 row-span-1 min-h-[150px] sm:min-h-[170px]", flex: "flex-col-reverse", textClass: "h-[50%]", imageClass: "h-[50%]", isCompact: true },
  { grid: "col-span-2 md:col-span-2 lg:col-span-2 row-span-1 min-h-[150px] sm:min-h-[170px]", flex: "flex-col-reverse sm:flex-row", textClass: "h-[50%] sm:h-full sm:w-[60%]", imageClass: "h-[50%] sm:h-full sm:w-[40%]" },
  { grid: "col-span-1 md:col-span-1 lg:col-span-1 row-span-1 min-h-[150px] sm:min-h-[170px]", flex: "flex-col-reverse", textClass: "h-[50%]", imageClass: "h-[50%]", isCompact: true }
];

const formatDate = (dateStr: string) => {
  if (!dateStr) return "";
  const cleanStr = dateStr.trim();
  const YmdRegex = /^(\d{4})[-/.](\d{1,2})[-/.](\d{1,2})/;
  const match = cleanStr.match(YmdRegex);
  if (match) {
    const [_, year, month, day] = match;
    const paddedDay = day.padStart(2, "0");
    const paddedMonth = month.padStart(2, "0");
    return `${year}-${paddedMonth}-${paddedDay}`;
  }
  return dateStr;
};

const getOptimizedImageSrc = (src: string | undefined | null, width: number, fallback: string = "/ashishbhay.png"): string => {
  if (!src || src.trim() === "") {
    return fallback;
  }
  if (src.includes("/api/images/")) {
    return `${src}?w=${width}`;
  }
  return src;
};

export default function BentoInterviewsGrid({ interviews, theme = "dark", embedded = false, excludeFirstOnEmptySearch = false }: { interviews: any[], theme?: "dark" | "light", embedded?: boolean, excludeFirstOnEmptySearch?: boolean }) {
  const [visibleCount, setVisibleCount] = useState(5);
  const [searchQuery, setSearchQuery] = useState("");

  if (!interviews || interviews.length === 0) return null;

  const isLight = theme === "light";

  const filteredInterviews = interviews.filter((card, index) => {
    const query = searchQuery.toLowerCase();
    
    // If no search query and we want to exclude the first item, skip index 0
    if (!query && excludeFirstOnEmptySearch && index === 0) return false;

    // If no search query, include all remaining
    if (!query) return true;

    return (
      (card.lawyer && card.lawyer.toLowerCase().includes(query)) ||
      (card.title && card.title.toLowerCase().includes(query)) ||
      (card.companyName && card.companyName.toLowerCase().includes(query)) ||
      (card.designation && card.designation.toLowerCase().includes(query))
    );
  });

  const Container = embedded ? 'div' : 'section';
  const containerClasses = embedded ? 'w-full h-full' : `${isLight ? 'bg-transparent py-[40px]' : 'bg-[#31261C] py-[80px]'} w-full`;
  const innerClasses = embedded ? 'w-full h-full flex flex-col' : 'max-w-[1280px] mx-auto px-6 lg:px-12';
  const gridConfigList = embedded ? gridConfigEmbedded : gridConfigFull;

  return (
    <Container className={containerClasses}>
      <div className={innerClasses}>
        {!embedded && (
          <FadeIn delay={0.2} className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 sm:mb-12 gap-4">
            <div className="flex items-center w-full sm:w-auto">
              <h2 className={`font-sans text-[12px] font-medium tracking-[0.15em] uppercase ${isLight ? 'text-[#2D2219] font-extrabold' : 'text-[#F5F3EE]'} whitespace-nowrap`}>MORE INTERVIEWS</h2>
              <div className={`h-[1px] w-12 sm:w-24 ml-4 sm:ml-6 ${isLight ? 'bg-gray-200' : 'bg-[#3A3530]'}`}></div>
            </div>
            
            {/* Search Bar */}
            <div className="relative w-full sm:w-64 lg:w-80">
              <input
                type="text"
                placeholder="Search by name, title, or company..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setVisibleCount(5); // Reset visible count on search
                }}
                className={`w-full pl-10 pr-4 py-2.5 rounded-full text-[13px] sm:text-sm transition-colors focus:outline-none focus:ring-1 ${isLight ? 'bg-white border-gray-200 text-gray-800 focus:border-[#5A4C33] focus:ring-[#5A4C33] placeholder:text-gray-400' : 'bg-[#1E1C19] border-[#3A3530] text-[#F5F3EE] focus:border-[#C9A227] focus:ring-[#C9A227] placeholder:text-[#9C958C] border'}`}
              />
              <svg className={`absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 ${isLight ? 'text-gray-400' : 'text-[#9C958C]'}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </FadeIn>
        )}

        {filteredInterviews.length === 0 ? (
          <div className="w-full flex flex-col items-center justify-center py-16 text-center">
            <p className={`font-sans ${isLight ? 'text-gray-500' : 'text-[#9C958C]'} text-[15px]`}>No interviews found matching "{searchQuery}"</p>
            <button 
              onClick={() => setSearchQuery("")}
              className={`mt-4 font-sans text-[13px] font-bold ${isLight ? 'text-[#5A4C33]' : 'text-[#C9A227]'} hover:underline`}
            >
              Clear search
            </button>
          </div>
        ) : (
          <div className={`grid ${embedded ? 'grid-cols-2' : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'} gap-3 sm:gap-4 md:gap-6 ${embedded ? 'flex-1' : 'md:auto-rows-[250px] lg:auto-rows-[250px]'} grid-flow-dense`}>
            {filteredInterviews.slice(0, embedded ? 5 : visibleCount).map((card: any, idx: number) => {
            const assignedConfig = gridConfigList[idx % gridConfigList.length];
            const isCompact = assignedConfig.isCompact;

            return (
              <FadeIn key={card._id || idx} delay={0.1 * (idx + 1)} className={assignedConfig.grid}>
                <Link href={`/interviews/${card.slug}`} className={`flex ${assignedConfig.flex} relative w-full h-full overflow-hidden border border-[#3A3530] hover:border-[#C9A227] hover:-translate-y-1 hover:shadow-[0_4px_20px_rgba(201,162,39,0.15)] transition-all duration-400 ease-out group rounded-3xl bg-[#1E1C19]`}>

                  {/* Text Content */}
                  <div className={`flex flex-col justify-center shrink-0 ${assignedConfig.textClass || 'flex-1'} ${embedded || isCompact ? 'p-4' : (assignedConfig.textClass?.includes('p-[') ? '' : 'p-[24px] lg:p-[32px]')} relative z-10 bg-[#1E1C19]`}>
                    <div className="flex flex-col relative z-10 w-full h-full justify-center">
                      <div className={`flex items-center gap-2 ${isCompact ? 'mb-1 sm:mb-2' : 'mb-2 sm:mb-3'} flex-wrap`}>
                        <span className={`font-sans text-[#C9A227] ${embedded || isCompact ? 'text-[9px] sm:text-[10px]' : 'text-[12px]'} font-bold tracking-[0.15em] uppercase border border-[#C9A227] bg-[#1E1C19] px-1.5 sm:px-2 py-0.5 rounded-sm shrink-0`}>
                          INTERVIEW
                        </span>
                        <span className={`font-sans text-[#9C958C] ${embedded || isCompact ? 'text-[10px] sm:text-[11px]' : 'text-[13px]'} shrink-0`}>
                          {formatDate(card.date)}
                        </span>
                      </div>

                      <h3 className={`font-serif italic font-semibold ${embedded ? 'text-[14px] sm:text-[16px] lg:text-[18px]' : (isCompact ? 'text-[20px] lg:text-[22px]' : 'text-[22px] lg:text-[26px]')} text-[#C9A227] line-clamp-1 mb-0.5`}>
                        {card.lawyer}
                      </h3>

                      {(() => {
                        const displayDesignation = card.designation || card.lawyerBio;
                        if (!displayDesignation && !card.companyName) return null;
                        return (
                          <div className="flex flex-wrap items-center gap-1.5 mb-2 mt-1">
                            {displayDesignation && (
                              <span className="inline-flex px-1.5 py-0.5 bg-[#C9A227]/10 border border-[#C9A227]/30 text-[#C9A227] text-[8px] sm:text-[9px] font-extrabold uppercase tracking-widest rounded">
                                {displayDesignation}
                              </span>
                            )}
                            {card.companyName && (
                              <span className="text-[#A39E98] text-[9px] sm:text-[10px] font-bold uppercase tracking-wide">
                                @ {card.companyName}
                              </span>
                            )}
                          </div>
                        );
                      })()}

                      <p className={`font-sans text-[#F5F3EE] ${embedded ? 'text-[11px] sm:text-[12px] lg:text-[13px]' : (isCompact ? 'text-[13px] lg:text-[14px]' : 'text-[14px]')} font-medium ${isCompact ? 'line-clamp-1' : 'line-clamp-2'} leading-snug`}>
                        {card.title}
                      </p>
                    </div>
                  </div>

                  {/* Image Section */}
                  <div className={`relative shrink-0 bg-black overflow-hidden flex items-center justify-center border-white/5 ${assignedConfig.imageClass || 'flex-1 min-h-[120px]'}`}>
                    {/* Blurred background to fill space */}
                    <div className="absolute inset-0 z-0">
                      <img src={getOptimizedImageSrc(card.image, 100)} alt="" className="w-full h-full object-cover blur-xl opacity-40 scale-125" />
                    </div>
                    {/* Actual image */}
                    <img
                      src={getOptimizedImageSrc(card.image, 600)}
                      alt={card.lawyer}
                      className="relative z-10 w-full h-full object-contain group-hover:scale-105 transition-transform duration-400 ease-out p-1"
                    />
                  </div>

                </Link>
              </FadeIn>
            );
          })}
        </div>
        )}
        
        {(!embedded && visibleCount < filteredInterviews.length) && (
          <div className="mt-10 w-full flex justify-center">
            <button
              onClick={() => setVisibleCount(prev => prev + 5)}
              className={`inline-flex items-center justify-center px-8 py-3.5 ${isLight ? 'bg-[#5A4C33] text-[#F5F2EB] hover:bg-[#4A3C23]' : 'bg-[#C9A227] text-[#31261C] hover:bg-[#D4AF37]'} text-[13px] sm:text-sm font-extrabold rounded-xl shadow-xs active:scale-95 transition-all cursor-pointer`}
            >
              <span>Load More</span>
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        )}
      </div>
    </Container>
  );
}
