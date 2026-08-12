"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import BentoInterviewsGrid from "@/components/BentoInterviewsGrid";

export interface LawyerInterview {
  _id: string;
  title: string;
  headline?: string;
  lawyer: string;
  designation?: string;
  companyName?: string;
  image: string;
  specialization: string;
  date: string;
  bgColor: string;
  description: string;
  slug: string;
  created?: number;
  isFeatured?: boolean;
  author?: string;
  lawyerBio?: string;
}

const cleanDescription = (html: string) => {
  if (!html) return "";
  let text = html.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
  text = text.replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">");
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

const formatDateShort = (dateStr: string) => {
  if (!dateStr) return "";
  const d = new Date(dateStr);
  if (isNaN(d.getTime())) return "";
  const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
  return `${months[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`;
};

export default function HeroFeatured({ initialInterviews = [] }: { initialInterviews?: LawyerInterview[] }) {
  const [interviews] = useState<LawyerInterview[]>(initialInterviews);

  if (interviews.length === 0) return null;

  const sortedInterviews = [...interviews].sort((a, b) => {
    if (a.isFeatured) return -1;
    if (b.isFeatured) return 1;
    const timeA = a.created || (a.date ? new Date(a.date).getTime() : 0);
    const timeB = b.created || (b.date ? new Date(b.date).getTime() : 0);
    return timeB - timeA;
  });

  const actualFeaturedIndex = 0;

  const featuredStory = sortedInterviews[actualFeaturedIndex];
  const sidebarStories = sortedInterviews.filter((_, index) => index !== actualFeaturedIndex).slice(0, 3); // top 3 for the right sidebar

  const featuredImage = featuredStory.image || "/man.png";
  // We removed the manual ?w=800 hack because we are letting Next.js optimize it now.

  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-6 pt-0 lg:pt-2 font-sans">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">

        {/* Left: Featured Interview Card */}
        {featuredStory && (
          <div className="lg:col-span-7 flex flex-col">
            <div className="flex items-center justify-center w-full mb-4 sm:mb-5">
              <h3 className="text-xl sm:text-2xl font-extrabold text-[#2D2219] tracking-wide uppercase">Featured Interview</h3>
            </div>
            <div className="bg-[#0a0a0a] rounded-3xl overflow-hidden flex flex-col relative group shadow-2xl flex-1 border border-gray-800">
              {/* Full Background Image */}
              <div className="relative md:absolute inset-0 z-0 w-full aspect-video md:aspect-auto md:h-full shrink-0">
                <Image
                  src={featuredImage}
                  alt={featuredStory.lawyer}
                  fill
                  priority
                  fetchPriority="high"
                  sizes="(max-width: 768px) 100vw, 60vw"
                  className="object-contain object-center bg-zinc-900 transform-gpu will-change-transform group-hover:scale-105 transition-transform duration-700"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "/man.png";
                  }}
                />
                {/* Very subtle gradient just to ensure white text readability on light images */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
              </div>

              {/* Text Content - Slim Bottom Banner */}
              <div className="relative md:absolute md:bottom-0 md:left-0 md:right-0 z-10 w-full bg-[#0a0a0a] md:bg-[#0a0a0a]/80 md:backdrop-blur-md border-t border-white/10 p-3 md:p-1.5 flex flex-col md:flex-row md:items-center justify-between gap-2 md:gap-1.5">
                <div className="flex flex-col flex-1 md:mr-3">
                  <div className="flex flex-wrap items-center gap-1.5 mb-1.5">
                    <span className="text-[#D4AF37] text-[8px] sm:text-[9px] font-bold tracking-widest uppercase whitespace-nowrap">
                      FEATURED INTERVIEW
                    </span>
                    <span className="w-0.5 h-0.5 rounded-full bg-[#D4AF37] shrink-0" />
                    <span className="text-gray-300 text-[8px] sm:text-[9px] font-medium tracking-wide uppercase break-words">
                      {featuredStory.lawyer}
                    </span>
                    {(() => {
                      const displayDesignation = featuredStory.designation || featuredStory.lawyerBio;
                      if (!displayDesignation) return null;
                      return (
                        <span className="px-1.5 py-0.5 bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37] text-[7px] sm:text-[8px] font-extrabold uppercase tracking-widest rounded ml-1">
                          {displayDesignation}
                        </span>
                      );
                    })()}
                  </div>

                  <h2 className="text-xs sm:text-sm lg:text-base font-extrabold text-white leading-tight tracking-tight line-clamp-2">
                    {featuredStory.headline || featuredStory.title}
                  </h2>
                </div>

                <Link
                  href={`/interviews/${featuredStory.slug}`}
                  className="inline-flex items-center justify-center gap-1 bg-gradient-to-r from-[#D4AF37] to-[#B8860B] text-black px-3 py-1.5 rounded-md font-bold text-[10px] sm:text-xs transition-all hover:scale-[1.05] shadow-sm whitespace-nowrap shrink-0 w-fit mt-0.5 md:mt-0"
                >
                  Read <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Right: More Interviews List (Bento Grid Embedded) */}
        <div className="lg:col-span-5 flex flex-col h-auto lg:h-[380px] xl:h-auto">
          <div className="flex items-center justify-between w-full mb-4 sm:mb-5">
            <h3 className="text-xl sm:text-2xl font-extrabold text-[#2D2219] tracking-wide uppercase">More Interviews</h3>
            <Link href="/interviews" className="text-sm font-bold text-[#D4AF37] hover:text-[#B8860B] transition-colors flex items-center gap-1">
              View All <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <BentoInterviewsGrid interviews={sidebarStories} theme="light" embedded={true} />

          {/* View More Button */}
          <div className="mt-5 w-full flex justify-center sm:justify-start">
            <Link
              href="/interviews"
              className="inline-flex items-center justify-center px-6 py-3 bg-[#5A4C33] text-[#F5F2EB] text-[13px] sm:text-sm font-extrabold rounded-xl shadow-xs hover:bg-[#4A3C23] active:scale-95 transition-all cursor-pointer w-full sm:w-auto"
            >
              <span>View More Interviews</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
