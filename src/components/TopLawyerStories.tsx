"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

interface LawyerInterview {
  _id: string;
  title: string;
  lawyer: string;
  image: string;
  specialization: string;
  date: string;
  bgColor: string;
  description: string;
  slug: string;
  duration?: string;
  created?: number;
}

const cleanDescription = (html: string) => {
  if (!html) return "";
  // Strip HTML tags first
  let text = html.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
  
  // Clean double-encoded and single-encoded &amp;
  text = text
    .replace(/&amp;amp;/g, "&")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">");
    
  // Strip prefix "Executive Summary & Overview" or similar
  text = text.replace(/^\s*(Executive\s+Summary\s*(?:&|and|&amp;)?\s*Overview\s*[\-:]*\s*)/i, "");
  text = text.replace(/^\s*(Executive\s+Summary\s*[\-:]*\s*)/i, "");
  
  return text.trim();
};

const truncateWords = (text: string, maxWords: number) => {
  if (!text) return "";
  const words = text.split(/\s+/);
  if (words.length <= maxWords) return text;
  return words.slice(0, maxWords).join(" ") + "...";
};

const formatDateToDDMMYYYY = (dateStr: string) => {
  if (!dateStr) return "";
  const cleanStr = dateStr.trim();
  const dmYRegex = /^(\d{1,2})[-/.](\d{1,2})[-/.](\d{4})$/;
  if (dmYRegex.test(cleanStr)) {
    return cleanStr.replace(/[\/.]/g, "-");
  }
  const YmdRegex = /^(\d{4})[-/.](\d{1,2})[-/.](\d{1,2})/;
  const match = cleanStr.match(YmdRegex);
  if (match) {
    const [_, year, month, day] = match;
    const paddedDay = day.padStart(2, "0");
    const paddedMonth = month.padStart(2, "0");
    return `${paddedDay}-${paddedMonth}-${year}`;
  }
  try {
    const parsedDate = new Date(cleanStr);
    if (!isNaN(parsedDate.getTime())) {
      const day = String(parsedDate.getDate()).padStart(2, "0");
      const month = String(parsedDate.getMonth() + 1).padStart(2, "0");
      const year = parsedDate.getFullYear();
      return `${day}-${month}-${year}`;
    }
  } catch (err) {}
  return dateStr;
};

type TopLawyerStoriesProps = {
  className?: string;
  /** Compact layout for hero slide — fits ~slide-1 visual height */
  variant?: "default" | "hero";
  headingTag?: "h1" | "h2";
  initialInterviews?: LawyerInterview[];
};

/** Hero slide interview cards — ~20% smaller than previous hero sizing */
const HERO_FEATURED_IMAGE =
  "aspect-[4/3] max-h-[208px] sm:max-h-[240px] lg:max-h-[304px] rounded-2xl mb-2";
const HERO_SIDEBAR_THUMB =
  "w-[5.6rem] h-16 sm:w-[7.2rem] sm:h-[5.6rem] lg:w-32 lg:h-[6.4rem] rounded-xl";
const HERO_GRID_GAP = "gap-4 lg:gap-5";
const HERO_SIDEBAR_COL_GAP = "gap-4";
const HERO_SIDEBAR_ROW_GAP = "gap-3 sm:gap-4";

export default function TopLawyerStories({
  className,
  variant = "default",
  headingTag = "h2",
  initialInterviews = [],
}: TopLawyerStoriesProps = {}) {
  const isHero = variant === "hero";
  const [interviews, setInterviews] = useState<LawyerInterview[]>(initialInterviews);
  const [loading, setLoading] = useState(initialInterviews.length === 0);

  useEffect(() => {
    if (initialInterviews && initialInterviews.length > 0) {
      return;
    }

    const fetchInterviews = async () => {
      try {
        const res = await fetch("/api/interviews");
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setInterviews(data);
      } catch (err) {
        console.error("Error loading top lawyer stories:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchInterviews();
  }, [initialInterviews]);

  // DEDICATED HERO SLIDE LAYOUT (Concise, flat row of cards designed to fit perfectly in the hero section without clipping)
  if (isHero) {
    if (loading) {
      return (
        <div className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 lg:gap-6 w-full">
            {/* Featured Card Skeleton */}
            <div className="lg:col-span-8 md:col-span-2 col-span-1 h-[332px] p-6 sm:p-8 lg:p-10 rounded-3xl bg-white/40 border border-[#E8A810]/20 flex gap-5 sm:gap-6 items-stretch animate-pulse">
              <div className="self-center w-24 h-24 sm:w-36 sm:h-36 lg:w-52 lg:h-52 rounded-2xl bg-slate-200 shrink-0" />
              <div className="flex-grow flex flex-col gap-3.5 justify-between py-0.5 pb-1 sm:pb-2 lg:pb-3">
                <div>
                  <div className="h-4 bg-slate-200 rounded w-1/4 mb-2" />
                  <div className="h-6 bg-slate-200 rounded w-3/4" />
                </div>
                <div className="h-3.5 bg-slate-200 rounded w-5/6 hidden sm:block" />
              </div>
            </div>

            {/* Sibling Cards Skeleton */}
            <div className="lg:col-span-4 md:col-span-2 col-span-1 hidden md:flex flex-col md:flex-row lg:flex-col gap-3 justify-between w-full h-[332px]">
              {[1, 2].map((n) => (
                <div key={n} className="flex-1 flex gap-4 p-4 sm:p-5 lg:p-6 rounded-2xl bg-white/40 border border-[#2D2219]/5 h-[160px] items-stretch animate-pulse overflow-hidden">
                  <div className="self-center w-12 h-12 sm:w-16 sm:h-16 lg:w-[4.5rem] lg:h-[4.5rem] rounded-xl bg-slate-200 shrink-0" />
                  <div className="flex-grow flex flex-col justify-between py-0.5 pb-1 sm:pb-2 lg:pb-3">
                    <div>
                      <div className="h-3 bg-slate-200 rounded w-1/3 mb-1" />
                      <div className="h-4 bg-slate-200 rounded w-3/4" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    }

    if (interviews.length === 0) return null;

    const featuredStory = interviews[0];
    const sidebarStories = interviews.slice(1, 3); // Display exactly next 2 interviews to balance layout perfectly

    return (
      <div className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 lg:gap-6 w-full">
          {/* 1. FEATURED ADVOCATE CARD (Bigger, prestigious, and high-impact) */}
          {featuredStory && (
            <Link
              href={`/interviews/${featuredStory.slug}`}
              className="lg:col-span-8 md:col-span-2 col-span-1 bg-gradient-to-br from-white via-white to-[#FDFBF0]/60 hover:to-[#FDFBF0] border-2 border-[#E8A810]/40 hover:border-[#E8A810]/70 rounded-3xl p-6 sm:p-8 lg:p-10 flex flex-col sm:flex-row gap-5 sm:gap-8 transition-all duration-300 hover:shadow-[0_12px_36px_rgba(232,168,16,0.12)] hover:-translate-y-1 cursor-pointer group relative overflow-hidden h-auto sm:h-[332px] items-stretch"
            >
              {/* Gold decorative radial glow */}
              <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-[#E8A810]/5 rounded-full blur-2xl pointer-events-none" />

              {/* Left Side: Large Avatar Thumbnail with play hover overlay */}
              <div className="self-center relative w-24 h-24 sm:w-36 sm:h-36 lg:w-52 lg:h-52 rounded-2xl overflow-hidden shrink-0 bg-[#FDFBF0] border border-[#E8A810]/15 shadow-inner flex items-center justify-center">
                <img
                  src={featuredStory.image || "/ashishbhay.png"}
                  alt={featuredStory.lawyer}
                  className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Play button hover overlay */}
                <div className="absolute inset-0 bg-black/15 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-[#E8A810] text-[#2D2219] p-2.5 rounded-full shadow-lg transform scale-90 group-hover:scale-100 transition-transform duration-300">
                    <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Right Side: High-Impact Details */}
              <div className="flex flex-col min-w-0 justify-between py-0.5 pb-1 sm:pb-2 lg:pb-3 flex-1 relative z-10 mt-3 sm:mt-0">
                <div>
                  <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                    <span className="text-[8px] sm:text-[9px] font-extrabold bg-[#E8A810] text-[#2D2219] px-2.5 py-0.5 rounded-full tracking-wide uppercase shrink-0 shadow-sm">
                      Featured Interview
                    </span>
                    <span className="text-[9px] sm:text-[10px] font-bold text-[#C79116] uppercase tracking-wider block">
                      {featuredStory.lawyer} • {featuredStory.specialization}
                    </span>
                  </div>
                  
                  <h4 className="font-black text-[#2D2219] group-hover:text-[#C79116] transition-colors leading-tight text-sm sm:text-base lg:text-[17px] xl:text-[19px] line-clamp-2 mb-1 sm:mb-1.5">
                    {featuredStory.title}
                  </h4>
                  
                  <p className="text-[10px] sm:text-[11.5px] lg:text-[12px] text-gray-500 font-medium line-clamp-2 leading-relaxed mb-1.5 max-w-lg hidden sm:block">
                    {truncateWords(cleanDescription(featuredStory.description), 30)}
                  </p>
                </div>

                <div className="flex items-center justify-between mt-auto">
                  <div className="text-[9px] sm:text-[10px] text-gray-400 font-semibold flex items-center gap-1.5">
                    <span>{formatDateToDDMMYYYY(featuredStory.date)}</span>
                    <span className="text-gray-300">•</span>
                    <span>{featuredStory.duration || "5 min read"}</span>
                  </div>
                  
                  <span className="text-[10px] sm:text-xs font-bold text-[#E8A810] hover:text-[#C79116] transition-colors flex items-center gap-1 group-hover:translate-x-0.5 duration-300">
                    Watch Interview 
                    <svg className="w-3.5 h-3.5 stroke-current" fill="none" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
          )}

          {/* 2. SIBLING STORIES STACK (Vertically stacked on desktop, horizontally rowed on tablet, hidden on mobile) */}
          <div className="lg:col-span-4 md:col-span-2 col-span-1 hidden md:flex flex-col md:flex-row lg:flex-col gap-3 justify-between w-full h-[332px]">
            {sidebarStories.map((story) => (
              <Link
                href={`/interviews/${story.slug}`}
                key={story._id}
                className="bg-white/95 hover:bg-white border border-[#2D2219]/10 hover:border-[#E8A810]/40 rounded-2xl p-4 sm:p-5 lg:p-6 flex gap-4 transition-all duration-300 hover:shadow-[0_8px_20px_rgba(232,168,16,0.06)] hover:-translate-y-0.5 cursor-pointer group min-w-0 flex-1 h-[160px] items-stretch overflow-hidden"
              >
                {/* Sibling Thumbnail */}
                <div className="self-center w-12 h-12 sm:w-16 sm:h-16 lg:w-[4.5rem] lg:h-[4.5rem] rounded-xl overflow-hidden shrink-0 bg-[#FDFBF0] relative flex items-center justify-center border border-[#2D2219]/5">
                  <img
                    src={story.image || "/ashishbhay.png"}
                    alt={story.lawyer}
                    className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Sibling Details */}
                <div className="flex flex-col min-w-0 justify-between py-1 pb-1 sm:pb-2 lg:pb-3 flex-1">
                  <div>
                    <span className="text-[8px] sm:text-[9px] font-bold text-[#C79116] uppercase tracking-wider block mb-0.5 line-clamp-1">
                      {story.lawyer} • {story.specialization}
                    </span>
                    <h5 className="font-bold text-[#2D2219] group-hover:text-[#C79116] transition-colors leading-tight text-xs sm:text-[13px] lg:text-[14px] line-clamp-2">
                      {story.title}
                    </h5>
                  </div>
                  <div className="text-[8px] sm:text-[9px] text-gray-400 font-semibold flex items-center gap-1 mt-auto">
                    <span>{formatDateToDDMMYYYY(story.date)}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // STANDARD / FULL PAGE LAYOUT
  const sectionClass = `w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-24 font-sans ${className || ""}`;

  const Heading = headingTag;

  if (loading) {
    return (
      <section className={sectionClass}>
        <Heading className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2D241E] mb-8 sm:mb-12">
          This Month’s Top<br />Lawyer Stories
        </Heading>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 animate-pulse">
          <div className="lg:col-span-7 flex flex-col">
            <div className="w-full bg-slate-200 aspect-[16/9] rounded-[2rem] mb-6" />
            <div className="bg-slate-200 rounded-md w-3/4 mb-2 h-8 mb-3" />
            <div className="h-4 bg-slate-200 rounded-md w-5/6 mb-2" />
            <div className="h-4 bg-slate-200 rounded-md w-2/3" />
          </div>
          <div className="lg:col-span-5 flex flex-col gap-8">
            {[1, 2, 3].map((n) => (
              <div key={n} className="flex flex-row gap-4 sm:gap-6 items-center">
                <div className="bg-slate-200 shrink-0 w-24 h-20 min-[400px]:w-32 min-[400px]:h-24 sm:w-48 sm:h-24 md:w-56 md:h-28 rounded-2xl sm:rounded-[1.25rem]" />
                <div className="flex-grow flex flex-col justify-center gap-1.5">
                  <div className="bg-slate-200 rounded-md w-5/6 h-5" />
                  <div className="h-4 bg-slate-200 rounded-md w-2/3" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (interviews.length === 0) {
    return null;
  }

  const featured = interviews[0];
  const sidebarStories = interviews.slice(1, 4);

  return (
    <section className={sectionClass}>
      <Heading className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2D241E] mb-8 sm:mb-12">
        This Month’s Top<br />Lawyer Stories
      </Heading>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
        {featured && (
          <Link
            href={`/interviews/${featured.slug}`}
            className="flex flex-col group cursor-pointer min-h-0 lg:col-span-7"
          >
            <div className="relative w-full overflow-hidden transition-transform duration-500 group-hover:scale-[1.01] flex items-center justify-center shrink-0 aspect-[16/9] rounded-[2rem] mb-6 bg-[#FDFBF0]/85 border border-[#2D2219]/5 shadow-sm">
              <img
                src={featured.image || "/ashishbhay.png"}
                alt={featured.lawyer}
                className="w-full h-full object-contain transform group-hover:scale-103 transition-transform duration-500"
              />
            </div>
            <div className="flex flex-col min-h-0 gap-3">
              <h3 className="font-bold text-[#2D241E] leading-tight group-hover:text-[#D4AF37] transition-colors line-clamp-2 text-2xl sm:text-3xl">
                {featured.title}
              </h3>
              <p className="text-gray-500 text-base sm:text-lg leading-relaxed line-clamp-3">
                {cleanDescription(featured.description)}
              </p>
              <p className="text-gray-400 font-semibold text-sm mt-2">
                {formatDateToDDMMYYYY(featured.date)} • {featured.duration || "5 min read"}
              </p>
            </div>
          </Link>
        )}

        <div className="flex flex-col min-h-0 lg:col-span-5 gap-8">
          {sidebarStories.map((story) => (
            <Link
              href={`/interviews/${story.slug}`}
              key={story._id}
              className="group cursor-pointer min-h-0 flex flex-row gap-4 sm:gap-6 items-center"
            >
              <div className="flex-shrink-0 overflow-hidden flex items-center justify-center transition-transform duration-500 group-hover:scale-[1.03] w-24 h-20 min-[400px]:w-32 min-[400px]:h-24 sm:w-48 sm:h-24 md:w-56 md:h-28 rounded-2xl sm:rounded-[1.25rem] bg-[#FDFBF0]/85 border border-[#2D2219]/5 shadow-sm">
                <img
                  src={story.image || "/ashishbhay.png"}
                  alt={story.lawyer}
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="flex flex-col min-w-0 gap-1.5 sm:gap-2 px-1 sm:px-0 justify-center flex-1">
                <h4 className="font-bold text-[#2D241E] leading-snug group-hover:text-[#D4AF37] transition-colors line-clamp-2 text-base sm:text-xl">
                  {story.title}
                </h4>
                <p className="text-gray-500 text-xs sm:text-base line-clamp-1">
                  {cleanDescription(story.description)}
                </p>
                <p className="text-gray-400 font-semibold text-[10px] sm:text-sm">
                  {formatDateToDDMMYYYY(story.date)} • {story.duration || "5 min read"}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

