"use client";

import { ArrowLeft, ArrowRight } from "lucide-react"; // Assuming lucide-react is used, else I'll use simple SVGs. Let's use simple SVGs to be safe.

export default function SuccessStoriesHero() {
  const stories = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
  ];

  return (
    <section className="w-full bg-white pt-12 sm:pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-end gap-8 mb-12">
        <div className="max-w-8xl">
          <h3 className="text-[#D4AF37] font-semibold tracking-wide text-sm mb-4 uppercase">
            Client Success Stories
          </h3>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-[#1a1a1a] mb-6">
            Trusted by people who needed real legal help.{" "}
            <span className="text-gray-400">
              Across real cases and real outcomes.
            </span>
          </h1>
          <button className="bg-[#2E2822] text-white px-8 py-3.5 rounded-[12px] font-semibold text-base hover:bg-black transition-all shadow-md hover:-translate-y-0.5">
            Share Your Story
          </button>
        </div>
        
        <div className="flex gap-3">
          <button className="w-12 h-12 bg-gray-200 hover:bg-gray-300 transition-colors flex items-center justify-center rounded-[8px]">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-700">
              <path d="m15 18-6-6 6-6"/>
            </svg>
          </button>
          <button className="w-12 h-12 bg-gray-200 hover:bg-gray-300 transition-colors flex items-center justify-center rounded-[8px]">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-700">
              <path d="m9 18 6-6-6-6"/>
            </svg>
          </button>
        </div>
      </div>

      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {stories.map((story) => (
          <div 
            key={story.id} 
            className="w-full aspect-[3/4] bg-[#FCA5A5] rounded-xl shadow-sm"
          ></div>
        ))}
      </div>
    </section>
  );
}
