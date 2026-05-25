"use client";

import { useState } from "react";
import { Search } from "lucide-react";

export default function DraftsHero() {
  const [searchQuery, setSearchQuery] = useState("");

  const tags = [
    { name: "Rental Agreement", category: "rental" },
    { name: "NDA", category: "nda" },
    { name: "Employment Contract", category: "employment" },
  ];

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    const event = new CustomEvent("search-draft", { detail: { query } });
    window.dispatchEvent(event);
  };

  return (
    <section className="relative w-full bg-white pt-16 sm:pt-24 lg:pt-32 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden font-sans">
      {/* Premium Visual Element: Ambient Gold Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.05)_0%,transparent_70%)] rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto flex flex-col items-center text-center relative z-10">

        {/* 1. Top Centered Badge Stack with Hover Micro-Animations */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-8 sm:mb-10">
          {tags.map((tag) => (
            <button
              key={tag.name}
              onClick={() => handleSearch(tag.name)}
              className="bg-[#FEF3C7]/70 text-[#453612] px-4.5 py-2.5 rounded-[8px] font-medium text-xs sm:text-sm tracking-wide shadow-sm border border-[#FDE68A]/30 hover:bg-[#FEF3C7] hover:border-[#FDE68A] hover:shadow-[0_4px_12px_rgba(253,230,138,0.3)] hover:-translate-y-[1px] active:translate-y-0 active:scale-[0.98] transition-all duration-300 cursor-pointer"
            >
              {tag.name}
            </button>
          ))}
        </div>

        {/* 2. Main Hero Headline with exact color contrast, capitalization, and the custom Spacer Gap */}
        <h1 className="text-4xl sm:text-6xl lg:text-[72px] font-medium text-[#1A1A1A] leading-[1.08] tracking-tight mb-8 max-w-5xl mx-auto select-none">
          Professional draft for every <br className="hidden sm:inline" />
          <span className="text-[#C69214] font-medium hover:text-[#D4AF37] transition-colors duration-300">
            Notice
          </span>
          {/* Exact spacing gap replicated dynamically using responsive layout spacing */}
          <span className="inline-block w-5 h-2"></span>
          <span className="text-[#1A1A1A]">you need to create</span>
        </h1>

        {/* 3. Supporting Subheadline (Two-line structure with precise styling) */}
        <div className="max-w-3xl mx-auto mb-10 sm:mb-12 px-2">
          <p className="text-gray-500 font-medium text-base sm:text-lg lg:text-xl leading-relaxed">
            Pick a draft, customize it, and use it instantly with confidence.
          </p>
          <p className="text-gray-400 font-normal text-sm sm:text-base lg:text-lg mt-1">
            No legal confusion. Just ready to use documents.
          </p>
        </div>

        {/* 4. Premium Interactive Search Utility */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSearch(searchQuery);
          }}
          className="w-full max-w-2xl px-2"
        >
          <div className="relative group bg-[#F8F8F5] rounded-[14px] p-1.5 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-200/65 focus-within:border-[#D4AF37] focus-within:shadow-[0_8px_30px_rgba(212,175,55,0.08)] focus-within:bg-white transition-all duration-300">
            <div className="flex items-center">
              {/* Search Icon */}
              <div className="pl-3.5 pr-2.5 text-gray-400 group-focus-within:text-[#C69214] transition-colors duration-200">
                <Search size={22} className="stroke-[2.25]" />
              </div>

              {/* Search Input */}
              <input
                type="text"
                placeholder="Search legal templates, agreements, contracts..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-transparent py-3 sm:py-3.5 pr-4 text-gray-800 placeholder-gray-400 font-semibold text-[15px] sm:text-base focus:outline-none"
              />

              {/* Action Button */}
              <button
                type="submit"
                className="bg-[#2E2822] text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-[10px] font-bold text-sm hover:bg-[#1C1714] active:scale-[0.98] transition-all duration-200 shadow-sm shrink-0"
              >
                Search
              </button>
            </div>
          </div>
        </form>

      </div>
    </section>
  );
}
