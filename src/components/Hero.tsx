"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export interface LawyerInterview {
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
  videoUrl?: string;
  created?: number;
}

const cleanDescription = (html: string) => {
  if (!html) return "";
  let text = html.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
  text = text
    .replace(/&amp;amp;/g, "&")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">");
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

const formatDateToWord = (dateStr: string) => {
  if (!dateStr) return "";
  try {
    const parsedDate = new Date(dateStr.trim().replace(/[\/.]/g, "-"));
    if (!isNaN(parsedDate.getTime())) {
      return parsedDate.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric"
      });
    }
  } catch (err) {}
  return dateStr;
};

export default function Hero({ initialInterviews = [] }: { initialInterviews?: LawyerInterview[] } = {}) {
  const [interviews] = useState<LawyerInterview[]>(initialInterviews);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const itemsPerSlide = 4;
  const totalSlides = Math.ceil(interviews.length / itemsPerSlide) || 1;

  useEffect(() => {
    if (isPaused || totalSlides <= 1) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 6000);

    return () => clearInterval(interval);
  }, [isPaused, totalSlides]);

  if (interviews.length === 0) return null;

  // Sort interviews by date / created descending to ensure order
  const sortedInterviews = [...interviews].sort((a, b) => {
    const timeA = a.created || (a.date ? new Date(a.date).getTime() : 0);
    const timeB = b.created || (b.date ? new Date(b.date).getTime() : 0);
    return timeB - timeA;
  });

  // Slice interviews for current slide
  const slideStartIndex = currentSlide * itemsPerSlide;
  const slideInterviews = sortedInterviews.slice(slideStartIndex, slideStartIndex + itemsPerSlide);
  const featuredStory = slideInterviews[0];
  
  // Sidebar stories sorted by date descending (one below another)
  const sidebarStories = slideInterviews.slice(1).sort((a, b) => {
    const timeA = a.created || (a.date ? new Date(a.date).getTime() : 0);
    const timeB = b.created || (b.date ? new Date(b.date).getTime() : 0);
    return timeB - timeA;
  });

  return (
    <section 
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className="relative w-full overflow-hidden pt-9 sm:pt-12 pb-9 sm:pb-12 px-4 sm:px-6 lg:px-8 bg-white flex flex-col items-center justify-center min-h-[480px] font-sans"
    >
      <div className="max-w-6xl mx-auto w-full relative z-20 flex flex-col gap-5">
        
        {/* Centered Catchy Big Heading */}
        <div className="text-center mb-5 sm:mb-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#2D2219] tracking-tight leading-none">
            Top <span className="text-[#D4AF37]">Lawyer Stories</span>
          </h2>
          <p className="text-gray-500 font-medium text-xs sm:text-xs lg:text-sm mt-3 max-w-2xl mx-auto">
            Exclusive insights, professional milestones, and real-world courtroom experiences from verified legal advocates.
          </p>
        </div>

        {/* Dynamic Slide Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 w-full items-stretch">
          
          {/* Left Column: Featured Card */}
          {featuredStory && (
            <div className="lg:col-span-7 bg-white border border-gray-150 rounded-2xl overflow-hidden transition-all duration-300 flex flex-col h-full hover:shadow-md group">
              {/* Image Container with custom background color if available */}
              <Link 
                href={`/interviews/${featuredStory.slug}`} 
                className={`relative block overflow-hidden rounded-t-2xl aspect-[1478/831] flex items-center justify-center ${featuredStory.bgColor || "bg-[#ECE8F5]"}`}
              >
                <img
                  src={featuredStory.image || "/man.png"}
                  alt={featuredStory.lawyer}
                  className="w-full h-full object-cover transform group-hover:scale-103 transition-transform duration-500"
                />
                
                {/* Play Button Overlay on Hover (AMA Gold theme) */}
                <div className="absolute inset-0 bg-black/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-[#D4AF37] text-white p-3 rounded-full shadow-lg transform scale-90 group-hover:scale-100 transition-transform duration-300">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </Link>

              {/* Bottom Content Area */}
              <div className="p-5 flex flex-col justify-between flex-grow">
                <div>
                  {/* Category, Date & Views Row */}
                  <div className="flex justify-between items-center mb-2.5">
                    <span className="text-[10px] sm:text-xs font-bold text-[#C79116] uppercase tracking-wider">
                      {featuredStory.specialization} • {formatDateToWord(featuredStory.date)}
                    </span>
                    <div className="flex items-center gap-1.5 text-[11px] text-gray-400 font-semibold">
                      <svg className="w-3.5 h-3.5 opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {/* Deterministic views based on ID to simulate database counter */}
                      <span>{(parseInt(featuredStory._id.substring(18, 24), 16) % 400) + 280}</span> 
                    </div>
                  </div>

                  {/* Title */}
                  <Link href={`/interviews/${featuredStory.slug}`}>
                    <h4 className="font-extrabold text-[#2D2219] group-hover:text-[#D4AF37] transition-colors leading-tight text-sm sm:text-base lg:text-lg line-clamp-1 mb-1.5">
                      {featuredStory.title}
                    </h4>
                  </Link>

                  {/* Description */}
                  <p className="text-[11px] sm:text-xs text-gray-550 font-medium leading-relaxed line-clamp-2 mb-3">
                    {truncateWords(cleanDescription(featuredStory.description), 28)}
                  </p>
                </div>

                {/* Read Full / Share Row */}
                <div className="flex justify-between items-center pt-3 border-t border-dashed border-gray-155 mt-auto">
                  <Link href={`/interviews/${featuredStory.slug}`} className="text-xs sm:text-xs font-extrabold text-[#D4AF37] hover:text-[#B8860B] transition-colors flex items-center gap-1">
                    Read Full Interview
                  </Link>
                  <button className="text-gray-450 hover:text-[#D4AF37] transition-colors p-1 rounded-full hover:bg-gray-50 cursor-pointer">
                    <svg className="w-4 h-4 stroke-current" fill="none" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Right Column: List of 3 Horizontal Cards (Stacked one below another) */}
          <div className="lg:col-span-5 flex flex-col gap-3 justify-start">
            {sidebarStories.map((story) => (
              <div 
                key={story._id} 
                className="bg-white border border-gray-100 hover:border-gray-250 rounded-2xl p-3 flex gap-3 transition-all duration-300 hover:shadow-sm h-[100px] sm:h-[110px] items-stretch group overflow-hidden"
              >
                {/* Left Details */}
                <div className="flex-grow flex flex-col justify-between py-0.5 flex-1 min-w-0">
                  <div>
                    {/* Category & Date */}
                    <span className="text-[10px] sm:text-xs font-bold text-[#C79116] uppercase tracking-wider block mb-0.5 line-clamp-1">
                      {story.specialization} • {formatDateToWord(story.date)}
                    </span>
                    {/* Title */}
                    <Link href={`/interviews/${story.slug}`}>
                      <h5 className="font-extrabold text-[#2D2219] group-hover:text-[#D4AF37] transition-colors leading-snug text-[11px] sm:text-xs line-clamp-2 mb-0.5">
                        {story.title}
                      </h5>
                    </Link>
                  </div>
                  {/* Read More */}
                  <Link href={`/interviews/${story.slug}`} className="text-[11px] font-bold text-[#D4AF37] hover:text-[#B8860B] transition-colors mt-auto block">
                    Read More
                  </Link>
                </div>

                {/* Right Thumbnail Image */}
                <Link 
                  href={`/interviews/${story.slug}`} 
                  className="self-center h-full aspect-[1478/831] rounded-xl overflow-hidden shrink-0 bg-[#EFEFEF] relative flex items-center justify-center border border-gray-50"
                >
                  <img
                    src={story.image || "/man.png"}
                    alt={story.lawyer}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Red Play Icon Overlay if videoUrl exists */}
                  {story.videoUrl && (
                    <div className="absolute bottom-1.5 right-1.5 bg-white/95 rounded-md p-1 flex items-center justify-center shadow-md border border-gray-100">
                      <svg className="w-3.5 h-3.5 text-red-600 fill-current" viewBox="0 0 24 24">
                        <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.517 3.545 12 3.545 12 3.545s-7.516 0-9.388.508a3.003 3.003 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11c1.872.508 9.388.508 9.388.508s7.517 0 9.388-.508a3.003 3.003 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                      </svg>
                    </div>
                  )}
                </Link>
              </div>
            ))}
          </div>

        </div>

        {/* Slide Indicator Dots (Charcoal Neutral theme) */}
        {totalSlides > 1 && (
          <div className="flex items-center justify-center gap-2 mt-4.5">
            {[...Array(totalSlides)].map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  currentSlide === idx ? "w-6 bg-[#2D2219]" : "w-2 bg-[#2D2219]/25 hover:bg-[#2D2219]/55"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        )}

      </div>
    </section>
  );
}