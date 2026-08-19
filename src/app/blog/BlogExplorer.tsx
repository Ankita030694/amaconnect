"use client";

import React, { useState, useMemo, useEffect } from "react";
import { Search, X, User, Image as ImageIcon } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";

// Format date helper
const formatDate = (dateString: string) => {
  if (!dateString) return { day: "", monthYear: "" };
  const d = new Date(dateString);
  const day = d.getDate().toString().padStart(2, "0");
  const month = d.toLocaleString("default", { month: "short" }).toUpperCase();
  const year = d.getFullYear();
  return { day, monthYear: `${month} ${year}` };
};

const areasOfCoverage = [
  "Corporate Law & Compliance",
  "Debt Recovery Protocols & OTS",
  "Family Dispute Resolutions",
  "Litigation Defense Strategies",
  "Real Estate & Property Laws",
  "Criminal Defense & Bail Reforms"
];

interface BlogExplorerProps {
  initialBlogs: any[];
}

export default function BlogExplorer({ initialBlogs }: BlogExplorerProps) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const initialQuery = searchParams.get("search") || "";

  const [blogs] = useState<any[]>(initialBlogs);
  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const [visibleCount, setVisibleCount] = useState(8);

  useEffect(() => {
    const q = searchParams.get("search");
    if (q !== null) {
      setSearchQuery(q);
    }
  }, [searchParams]);

  useEffect(() => {
    setVisibleCount(8);
  }, [searchQuery]);

  const filteredBlogs = useMemo(() => {
    if (!searchQuery || searchQuery.trim() === "") {
      return blogs;
    }

    const rawQuery = searchQuery.toLowerCase().trim();
    const tokens = rawQuery
      .split(/\s+/)
      .filter((word) => word.length > 2 && !["the", "for", "and", "with", "from", "how"].includes(word));

    return blogs.filter((blog) => {
      const title = (blog.title || "").toLowerCase();
      const subtitle = (blog.subtitle || "").toLowerCase();
      const description = (blog.description || "").toLowerCase();
      const popularSearches = Array.isArray(blog.popularSearches)
        ? blog.popularSearches.join(" ").toLowerCase()
        : "";
      const keyTakeaways = Array.isArray(blog.keyTakeaways)
        ? blog.keyTakeaways.join(" ").toLowerCase()
        : "";

      const searchableBlob = `${title} ${subtitle} ${description} ${popularSearches} ${keyTakeaways}`;

      if (searchableBlob.includes(rawQuery)) {
        return true;
      }

      if (tokens.length > 0) {
        const matchedTokens = tokens.filter((tok) => searchableBlob.includes(tok));
        return matchedTokens.length >= Math.min(2, tokens.length);
      }

      return false;
    });
  }, [blogs, searchQuery]);

  const isSearchActive = searchQuery.trim().length > 0;

  const featuredBlog = !isSearchActive && filteredBlogs.length > 0 ? filteredBlogs[0] : null;
  const bentoSideBlogs = !isSearchActive ? filteredBlogs.slice(1, 5) : [];

  const gridBlogs = isSearchActive
    ? filteredBlogs.slice(0, visibleCount)
    : filteredBlogs.slice(5, visibleCount + 5);

  const hasMore = isSearchActive
    ? visibleCount < filteredBlogs.length
    : visibleCount + 5 < filteredBlogs.length;

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 8);
  };

  const handleClearSearch = () => {
    setSearchQuery("");
    router.push("/blog");
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/blog?search=${encodeURIComponent(searchQuery.trim())}`);
    } else {
      router.push("/blog");
    }
  };

  return (
    <div className="w-full">
      {/* 1. SEARCH BAR & QUICK FILTERS */}
      <section className="pt-2 pb-6 px-4 max-w-[1280px] mx-auto">
        <form onSubmit={handleSearchSubmit} className="max-w-[680px] mx-auto relative group/search">
          <input
            type="text"
            placeholder="Search legal articles by keyword, statutory section, or case topic..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-[#FFFFFF] border border-[#E8E4DE] rounded-full text-[15px] sm:text-[16px] text-[#1E1E1E] placeholder:text-[#9C958C] pl-[24px] pr-[90px] py-4 focus:outline-none focus:border-[#C9A227] focus:ring-2 focus:ring-[#C9A227]/20 transition-all shadow-[0_2px_8px_rgba(0,0,0,0.04)]"
          />
          {searchQuery ? (
            <button
              type="button"
              onClick={handleClearSearch}
              className="absolute right-12 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-700 p-1 cursor-pointer"
              aria-label="Clear search query"
            >
              <X className="w-4 h-4" />
            </button>
          ) : null}
          <button
            type="submit"
            className="absolute right-4 top-1/2 -translate-y-1/2 text-[#9C958C] hover:text-[#C9A227] transition-colors p-2 cursor-pointer"
            aria-label="Submit search"
          >
            <Search className="w-5 h-5" />
          </button>
        </form>

        {/* Search Feedback Header */}
        {isSearchActive && (
          <div className="max-w-[680px] mx-auto mt-4 flex items-center justify-between bg-white px-5 py-3 rounded-2xl border border-[#E8E4DE] shadow-xs">
            <span className="text-xs sm:text-sm font-bold text-[#1E1E1E]">
              Showing results for: <span className="text-[#C9A227]">&ldquo;{searchQuery}&rdquo;</span> ({filteredBlogs.length} articles found)
            </span>
            <button
              onClick={handleClearSearch}
              className="text-xs font-bold text-red-600 hover:text-red-800 transition-colors cursor-pointer"
            >
              Clear Filter ✕
            </button>
          </div>
        )}
      </section>

      {/* 2. BENTO GRID (FEATURED + SIDE CARDS - WHEN NOT SEARCHING) */}
      {!isSearchActive && featuredBlog && (
        <section className="max-w-[1280px] mx-auto px-4 sm:px-6 pb-[40px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
            {/* Featured Card - Left */}
            <div className="lg:col-span-6 relative rounded-[16px] overflow-hidden group min-h-[450px] lg:min-h-[500px] flex flex-col shadow-sm">
              {featuredBlog.image ? (
                <img
                  src={featuredBlog.image}
                  alt={featuredBlog.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              ) : (
                <div className="absolute inset-0 w-full h-full bg-[#1A1A1A] flex items-center justify-center">
                  <ImageIcon className="w-16 h-16 text-white/10" />
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/80 to-transparent pointer-events-none"></div>

              {/* Content */}
              <div className="relative z-10 flex flex-col justify-end flex-grow p-8">
                <div className="bg-[#C9A227] text-[#111111] text-[11px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-sm w-fit mb-5">
                  #FEATURED INSIGHT
                </div>
                <h2
                  className="text-white text-[24px] lg:text-[30px] font-bold leading-[1.2] mb-3 line-clamp-3"
                  style={{ textShadow: "0 2px 8px rgba(0,0,0,0.5)" }}
                >
                  {featuredBlog.title}
                </h2>
                <div
                  className="text-gray-300 text-[14px] line-clamp-2 mb-6 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: featuredBlog.description }}
                />

                <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/20">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-white/10 overflow-hidden shrink-0 flex items-center justify-center">
                      {featuredBlog.authorPhoto ? (
                        <img
                          src={featuredBlog.authorPhoto}
                          alt={featuredBlog.author || "Author"}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <User className="w-5 h-5 text-white/50" />
                      )}
                    </div>
                    <div>
                      <div className="text-white font-bold text-[14px]">
                        {featuredBlog.author || "AMA Legal"}
                      </div>
                      {(featuredBlog.authorTitle || featuredBlog.designation) && (
                        <div className="text-[#C9A227] text-[12px] mt-0.5">
                          {featuredBlog.authorTitle || featuredBlog.designation}
                        </div>
                      )}
                    </div>
                  </div>

                  <a
                    href={`/blog/${featuredBlog.slug}`}
                    className="w-10 h-10 rounded-lg bg-[#C9A227] flex items-center justify-center text-[#111111] hover:bg-[#B8941F] transition-colors shrink-0"
                    aria-label={`Read ${featuredBlog.title}`}
                  >
                    <span className="text-[18px] font-bold">→</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Side Cards - Right (2x2 grid) */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {bentoSideBlogs.map((blog) => {
                const { day, monthYear } = formatDate(blog.date);
                return (
                  <a
                    href={`/blog/${blog.slug}`}
                    key={blog._id || blog.slug}
                    className="relative rounded-[16px] overflow-hidden group min-h-[220px] flex flex-col justify-end p-6 shadow-sm"
                  >
                    {blog.image ? (
                      <img
                        src={blog.image}
                        alt={blog.title}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    ) : (
                      <div className="absolute inset-0 w-full h-full bg-[#1A1A1A] flex items-center justify-center">
                        <ImageIcon className="w-10 h-10 text-white/10" />
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/70 to-transparent pointer-events-none"></div>

                    <div className="relative z-10 mt-auto">
                      <h3
                        className="text-white text-[16px] font-bold leading-[1.35] line-clamp-3 mb-3"
                        style={{ textShadow: "0 2px 4px rgba(0,0,0,0.5)" }}
                      >
                        {blog.title}
                      </h3>
                      <div className="flex items-center text-[11px] font-bold tracking-wide">
                        <span className="text-[#C9A227] uppercase mr-2 line-clamp-1">
                          {blog.author || "AMA Legal"}
                        </span>
                        <span className="text-gray-400">•</span>
                        <span className="text-gray-300 ml-2 uppercase shrink-0">
                          {day} {monthYear}
                        </span>
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* 3. ARTICLE GRID */}
      {gridBlogs.length > 0 && (
        <section className="max-w-[1280px] mx-auto px-4 sm:px-6 pb-[60px]">
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-playfair font-bold text-2xl text-[#1E1E1E]">
              {isSearchActive ? "Filtered Legal Articles" : "Recent Publications & Legal Insights"}
            </h2>
            <span className="text-xs font-semibold text-gray-500">
              Showing {gridBlogs.length} of {filteredBlogs.length} articles
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[24px]">
            {gridBlogs.map((blog) => {
              const { day, monthYear } = formatDate(blog.date);
              return (
                <article
                  key={blog._id || blog.slug}
                  className="group flex flex-col rounded-[14px] bg-[#FFFFFF] border border-[#E8E4DE] overflow-hidden transition-all duration-300 hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)] hover:-translate-y-1 h-full"
                >
                  {/* Thumbnail */}
                  <div className="w-full h-[190px] bg-[#E8E4DE] relative overflow-hidden flex items-center justify-center">
                    {blog.image ? (
                      <img
                        src={blog.image}
                        alt={blog.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <ImageIcon className="w-12 h-12 text-[#9C958C]/30" />
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-4 flex flex-col flex-grow">
                    <span className="text-[#9C958C] text-[11px] font-medium tracking-wide uppercase mb-2 block">
                      {day} {monthYear}
                    </span>
                    <h3 className="text-[#1E1E1E] text-[16px] sm:text-[17px] font-bold leading-[1.3] line-clamp-2 mb-3 group-hover:text-[#C9A227] transition-colors">
                      <a href={`/blog/${blog.slug}`}>{blog.title}</a>
                    </h3>

                    <div className="mt-auto pt-2">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-7 h-7 rounded-full bg-[#E8E4DE] flex items-center justify-center overflow-hidden shrink-0">
                          {blog.authorPhoto ? (
                            <img
                              src={blog.authorPhoto}
                              alt={blog.author || "Author"}
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            <User className="w-3.5 h-3.5 text-[#9C958C]" />
                          )}
                        </div>
                        <div>
                          <div className="text-[#1E1E1E] text-[12px] font-bold leading-tight line-clamp-1">
                            {blog.author || "AMA Connect"}
                          </div>
                          {(blog.authorTitle || blog.designation) && (
                            <div className="text-[#6B6560] text-[10px] mt-0.5 line-clamp-1">
                              {blog.authorTitle || blog.designation}
                            </div>
                          )}
                        </div>
                      </div>

                      <a
                        href={`/blog/${blog.slug}`}
                        className="text-[#C9A227] text-[12px] font-bold flex items-center gap-1.5 group/link w-fit"
                      >
                        Read Full Analysis <span className="group-hover/link:translate-x-1 transition-transform">→</span>
                      </a>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          {/* LOAD MORE BUTTON */}
          {hasMore && (
            <div className="mt-[48px] flex justify-center">
              <button
                onClick={handleLoadMore}
                className="bg-[#C9A227] text-[#FFFFFF] text-[13px] font-semibold uppercase tracking-[0.05em] px-[36px] py-[14px] rounded-full transition-all duration-200 hover:bg-[#B8941F] hover:shadow-md hover:-translate-y-0.5 cursor-pointer"
              >
                Load More Articles
              </button>
            </div>
          )}
        </section>
      )}

      {/* No Results Empty State */}
      {filteredBlogs.length === 0 && isSearchActive && (
        <section className="max-w-[800px] mx-auto px-6 py-16 text-center">
          <div className="w-16 h-16 rounded-full bg-white border border-[#E8E4DE] flex items-center justify-center mx-auto mb-4 text-2xl shadow-xs">
            🔍
          </div>
          <h3 className="text-xl font-bold text-[#1E1E1E] mb-2">No articles found matching &ldquo;{searchQuery}&rdquo;</h3>
          <p className="text-sm text-gray-500 mb-6 max-w-md mx-auto">
            Try searching for related legal terms like <em>bail</em>, <em>divorce</em>, <em>arbitration</em>, <em>notice</em>, <em>contract</em>, or <em>trademark</em>.
          </p>
          <button
            onClick={handleClearSearch}
            className="px-6 py-2.5 rounded-full bg-[#C9A227] text-white font-bold text-xs hover:bg-[#B8941F] transition-all cursor-pointer"
          >
            View All Legal Articles
          </button>
        </section>
      )}

      {/* 4. AREAS OF COVERAGE PILLS */}
      <section className="bg-[#FFFFFF] border-y border-[#E8E4DE] py-[40px]">
        <div className="max-w-[1280px] mx-auto px-6 text-center">
          <h3 className="text-[#1E1E1E] text-[11px] uppercase tracking-[0.2em] font-bold mb-4">
            FILTER BY PRIMARY PRACTICE DOMAIN
          </h3>
          <div className="flex flex-wrap justify-center gap-[10px]">
            {areasOfCoverage.map((pill) => (
              <button
                key={pill}
                onClick={() => {
                  setSearchQuery(pill);
                  router.push(`/blog?search=${encodeURIComponent(pill)}`);
                }}
                className="border border-[#C9A227] text-[#C9A227] hover:bg-[#C9A227] hover:text-white transition-colors text-[12px] font-medium px-[18px] py-[6px] rounded-full bg-transparent cursor-pointer"
              >
                {pill}
              </button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
