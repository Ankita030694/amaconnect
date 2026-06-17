"use client";

import React, { useEffect, useState, useMemo, useCallback } from 'react';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';

// Define animations
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08
    }
  }
};

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring', stiffness: 100 }
  }
};

const hoverVariants: Variants = {
  initial: { scale: 1 },
  hover: {
    scale: 1.025,
    boxShadow: '0px 8px 30px rgba(90, 76, 51, 0.08)',
    transition: { type: 'spring', stiffness: 400, damping: 25 }
  }
};

// Helper function to validate and provide fallback for images
const getValidImageSrc = (imageSrc: string | undefined | null): string => {
  if (!imageSrc || imageSrc.trim() === '') {
    return '/ashishbhay.png'; // Fallback
  }
  if (imageSrc.includes('/api/images/')) {
    return `${imageSrc}?w=450`;
  }
  return imageSrc;
};

const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
  const target = e.target as HTMLImageElement;
  if (target.src !== '/ashishbhay.png') {
    target.src = '/ashishbhay.png';
  }
};

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

interface AllLawyerStoriesProps {
  initialInterviews: LawyerInterview[];
}

export default function   AllLawyerStories({ initialInterviews = [] }: AllLawyerStoriesProps) {
  const [interviews] = useState<LawyerInterview[]>(initialInterviews);
  const [filteredInterviews, setFilteredInterviews] = useState<LawyerInterview[]>(initialInterviews);
  const [searchQuery, setSearchQuery] = useState('');
  const [visibleCount, setVisibleCount] = useState(6);

  const handleSearch = useCallback((query: string) => {
    setSearchQuery(query);
    setVisibleCount(6); // Reset pagination count on new search

    if (!query.trim()) {
      setFilteredInterviews(interviews);
      return;
    }

    const searchTerm = query.toLowerCase().trim();
    const filtered = interviews.filter(interview =>
      interview.title.toLowerCase().includes(searchTerm) ||
      interview.lawyer.toLowerCase().includes(searchTerm) ||
      interview.specialization.toLowerCase().includes(searchTerm) ||
      interview.description.toLowerCase().includes(searchTerm)
    );

    setFilteredInterviews(filtered);
  }, [interviews]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      handleSearch(searchQuery);
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [searchQuery, interviews]);

  const handleShowMore = () => {
    setVisibleCount(prev => prev + 6);
  };

  const displayedInterviews = useMemo(() => {
    return filteredInterviews.slice(0, visibleCount);
  }, [filteredInterviews, visibleCount]);

  const hasMore = filteredInterviews.length > visibleCount;

  return (
    <section id="all-interviews" className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 font-sans">
      <div className="mb-10 sm:mb-14">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#2D241E] leading-[1.1] text-left">
           Lawyer Stories<br />& Interviews
        </h2>
      </div>

      {/* Search Bar */}
      <div className="max-w-2xl mb-12">
        <div className="relative shadow-sm rounded-lg overflow-hidden border border-gray-200">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <svg className="h-5 w-5 text-[#5A4C33]/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <input
            type="text"
            placeholder="Search interviews by lawyer, keyword, or specialization..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="text-black block w-full pl-11 pr-10 py-3.5 bg-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] border-none text-sm transition-all"
            aria-label="Search interviews"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute inset-y-0 right-0 pr-3 flex items-center"
              aria-label="Clear search"
            >
              <svg className="h-5 w-5 text-gray-400 hover:text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}
        </div>

        {searchQuery && (
          <div className="mt-3 text-xs text-gray-500 font-medium text-left">
            {filteredInterviews.length === 0 ? (
              <p>No interviews found matching "<span className="font-semibold text-gray-700">{searchQuery}</span>"</p>
            ) : (
              <p>Found {filteredInterviews.length} interviews matching "<span className="font-semibold text-gray-700">{searchQuery}</span>"</p>
            )}
          </div>
        )}
      </div>

      {/* Grid */}
      {filteredInterviews.length === 0 ? (
        <div className="text-center py-16 bg-white rounded-xl border border-gray-100 shadow-2xs max-w-lg mx-auto">
          <svg className="w-12 h-12 mx-auto text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.47-.881-6.08-2.33" />
          </svg>
          <h3 className="text-base font-semibold text-[#5A4C33] mb-1">No Interviews Found</h3>
          <p className="text-xs text-gray-500 max-w-xs mx-auto mb-5">Try checking your keywords or spelling.</p>
          <button
            onClick={() => setSearchQuery('')}
            className="px-4 py-2 bg-[#2D241E] text-white text-xs font-semibold rounded-lg hover:bg-black transition-colors cursor-pointer"
          >
            Reset Search
          </button>
        </div>
      ) : (
        <>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {displayedInterviews.map((article) => (
              <motion.div
                key={article._id}
                variants={itemVariants}
                className="h-full"
              >
                <Link href={`/interviews/${article.slug}`}>
                  <motion.div
                    className="flex flex-col h-full bg-white rounded-xl overflow-hidden border border-gray-100 shadow-2xs hover:border-[#D4AF37]/30 transition-all duration-300"
                    variants={hoverVariants}
                    initial="initial"
                    whileHover="hover"
                  >
                    {/* Image Section */}
                    <div className="relative h-48 w-full flex-shrink-0 bg-[#FDFBF0] overflow-hidden flex items-center justify-center border-b border-gray-50">
                      <img
                        src={getValidImageSrc(article.image)}
                        alt={`${article.lawyer} | AMA Legal Solutions`}
                        className="relative z-10 max-w-full max-h-full h-[90%] w-auto object-contain transition-transform duration-500 hover:scale-103 pt-2"
                        loading="lazy"
                        onError={handleImageError}
                      />
                      
                      {/* Date Badge */}
                      <div className="absolute top-4 right-4 z-20 bg-white/95 backdrop-blur-[2px] rounded px-3 py-1 text-[10px] uppercase font-bold text-[#5A4C33] border border-[#5A4C33]/10 shadow-xs">
                        {article.date}
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-6 flex flex-col flex-grow text-left">
                      <span className="text-[10px] font-bold text-[#D4AF37] uppercase tracking-wider mb-2 block">
                        {article.lawyer} • {article.specialization}
                      </span>
                      <h3 className="text-base font-bold leading-snug mb-3 line-clamp-2 text-[#2D241E] group-hover:text-[#D4AF37] transition-colors">
                        {article.title}
                      </h3>
                      <p className="text-xs text-gray-500 leading-relaxed font-normal line-clamp-3 mb-5 flex-grow">
                        {truncateWords(cleanDescription(article.description), 26)}
                      </p>
                      
                      <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-[#5A4C33]/80 group cursor-pointer mt-auto">
                        <span className="flex items-center gap-1">
                          Read Full Interview
                          <svg className="w-3.5 h-3.5 transform transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                          </svg>
                        </span>
                        {article.duration && (
                          <span className="text-gray-400 font-semibold">{article.duration}</span>
                        )}
                      </div>
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {/* Show More Button */}
          {hasMore && (
            <div className="flex justify-center mt-12">
              <motion.button
                onClick={handleShowMore}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="px-8 py-3.5 bg-[#2D241E] text-[#F5F2EB] text-sm font-semibold rounded-lg shadow-md hover:bg-black active:bg-neutral-900 transition-all cursor-pointer border border-neutral-900/10"
              >
                Show More Interviews
              </motion.button>
            </div>
          )}
        </>
      )}
    </section>
  );
}
