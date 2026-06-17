"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { User } from "lucide-react";

// Helper function to extract tags dynamically based on question contents
const generateTags = (content: string): string[] => {
  const c = content.toLowerCase();
  const tags: string[] = [];
  if (c.includes("loan") || c.includes("settle") || c.includes("debt") || c.includes("emi") || c.includes("fincorp") || c.includes("bank")) {
    tags.push("Loan Settlement", "Debt Relief");
  }
  if (c.includes("card") || c.includes("credit")) {
    tags.push("Credit Card", "Finance");
  }
  if (c.includes("trademark") || c.includes("brand") || c.includes("copyright") || c.includes("ipr")) {
    tags.push("IPR & Trademark", "Brand Law");
  }
  if (c.includes("draft") || c.includes("agree") || c.includes("contract") || c.includes("will")) {
    tags.push("Legal Drafting", "Contracts");
  }
  if (tags.length === 0) {
    tags.push("Legal Consultation", "Verified Advice");
  }
  return tags;
};

// Helper function to truncate question to a max of 35 words and append '...'
const getQuestionPreview = (text: string, maxWords: number = 35): string => {
  const words = text.trim().split(/\s+/);
  if (words.length > maxWords) {
    return words.slice(0, maxWords).join(" ") + "...";
  }
  return text + (text.endsWith("...") ? "" : "...");
};

interface QuestionItem {
  id: string;
  author: string;
  avatar: string;
  tags: string[];
  question: string;
  answer: {
    verifiedBy: string;
    logo: string;
    rating: number;
    text: string;
  };
  stats: {
    comments: number;
  };
}

export default function LegalQA() {
  const [questions, setQuestions] = useState<QuestionItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [visibleCount, setVisibleCount] = useState(3);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    async function loadQuestions() {
      try {
        const response = await fetch("/api/questions");
        if (!response.ok) throw new Error("Failed to load questions");
        const data = await response.json();
        
        // Map raw Firestore data to UI Q&A structure
        const mapped: QuestionItem[] = data.map((item: any) => ({
          id: item.id,
          author: item.userName || "Anonymous User",
          avatar: item.profileImgUrl || "/man.png",
          tags: generateTags(item.content || ""),
          question: item.content || "No question details provided.",
          answer: {
            verifiedBy: item.answer?.answered_by || "AMA Legal Team",
            logo: "/logo_qa.png",
            rating: 4.5,
            text: item.answer?.content || "Thank you for reaching out. Our legal experts are currently analyzing this case details to formulate an effective legal strategy."
          },
          stats: {
            comments: item.commentsCount || 0
          }
        }));

        setQuestions(mapped);
      } catch (error) {
        console.error("Error loading questions:", error);
      } finally {
        setLoading(false);
      }
    }
    loadQuestions();
  }, []);

  // Filter based on search query
  const filteredQuestions = questions.filter((item) => {
    const query = searchQuery.toLowerCase();
    return (
      item.question.toLowerCase().includes(query) ||
      item.author.toLowerCase().includes(query) ||
      item.answer.text.toLowerCase().includes(query) ||
      item.tags.some(tag => tag.toLowerCase().includes(query))
    );
  });

  return (
    <section id="qa" className="w-full bg-white py-6 px-4 sm:px-6 lg:px-8 font-sans relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header Section */}
        <div className="text-center mb-8 sm:mb-10">
          <p className="text-[#D4AF37] text-xs sm:text-sm font-bold tracking-widest uppercase mb-3 sm:mb-4">
            LEGAL Q&A
          </p>
          <h2 className="text-2xl sm:text-[40px] font-bold text-[#2E2822] leading-tight mb-3 sm:mb-4">
            Search answers or ask your legal<br className="hidden sm:block" /> question
          </h2>
          <p className="text-gray-500 text-sm sm:text-lg max-w-2xl mx-auto">
            Find answers from real cases or ask your own and get<br className="hidden sm:block" /> guidance from verified lawyers.
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative w-full max-w-3xl mx-auto mb-8 sm:mb-12">
          <form 
            onSubmit={(e) => {
              e.preventDefault();
              setIsModalOpen(true);
            }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center bg-[#FDF9EE] rounded-[14px] border border-[#F0E6D2] shadow-sm p-1.5 overflow-hidden gap-2 sm:gap-0"
          >
            <input 
              type="text" 
              placeholder="Search or ask your legal question..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-grow bg-transparent text-gray-800 px-3 sm:px-4 py-2 sm:py-3 outline-none placeholder-gray-400 text-sm sm:text-base font-medium"
            />
            <button 
              type="submit"
              className="bg-[#3B3228] text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-[10px] font-bold hover:bg-black transition-colors shrink-0 text-sm sm:text-base cursor-pointer"
            >
              Ask Now
            </button>
          </form>
        </div>

        {/* Loading / Shimmer State */}
        {loading ? (
          <div className="flex flex-col gap-6 animate-pulse">
            {[1, 2, 3].map((n) => (
              <div key={n} className="bg-white border border-gray-100 rounded-2xl p-6 sm:p-8 flex flex-col gap-4 shadow-sm">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
                  <div className="flex flex-col gap-2 flex-grow">
                    <div className="h-4 bg-gray-200 rounded w-1/4"></div>
                    <div className="h-3 bg-gray-200 rounded w-1/3"></div>
                  </div>
                </div>
                <div className="h-6 bg-gray-200 rounded w-3/4 mt-2"></div>
                <div className="bg-gray-100 rounded-xl p-4 sm:p-5 flex flex-col gap-3 mt-2">
                  <div className="h-4 bg-gray-200 rounded w-1/3"></div>
                  <div className="h-4 bg-gray-200 rounded w-full"></div>
                  <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Q&A Cards List */
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 sm:mb-10">
            {filteredQuestions.length > 0 ? (
              filteredQuestions.slice(0, visibleCount).map((item) => (
                <div 
                  key={item.id} 
                  onClick={() => setIsModalOpen(true)}
                  className="bg-white rounded-2xl shadow-[0_4px_24px_rgba(0,0,0,0.05)] border border-gray-100 overflow-hidden flex flex-col justify-between hover:shadow-[0_16px_36px_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-all duration-300 cursor-pointer p-6 sm:p-7 min-h-[280px] group relative"
                >
                  <div>
                    {/* Header: Author & Tag */}
                    <div className="flex items-center justify-between gap-3 mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full overflow-hidden relative shrink-0 border border-gray-200 bg-gray-50 flex items-center justify-center">
                          {item.avatar && item.avatar !== "/man.png" ? (
                            <Image 
                              src={item.avatar} 
                              alt={item.author} 
                              fill 
                              sizes="32px"
                              className="object-cover" 
                            />
                          ) : (
                            <User className="w-4 h-4 text-gray-400" />
                          )}
                        </div>
                        <span className="font-bold text-gray-800 text-sm tracking-tight">{item.author}</span>
                      </div>
                      
                      {/* Compact Tag */}
                      {item.tags.length > 0 && (
                        <span className="text-[10px] font-extrabold text-[#D4AF37] bg-[#D4AF37]/5 px-2.5 py-1 rounded-full uppercase tracking-wider">
                          {item.tags[0]}
                        </span>
                      )}
                    </div>

                    {/* Question Content (Truncated) */}
                    <p className="text-gray-700 text-sm sm:text-[15px] leading-relaxed font-medium mb-6 group-hover:text-black transition-colors duration-200">
                      "{getQuestionPreview(item.question)}"
                    </p>
                  </div>

                  {/* Footer Action Card */}
                  <div className="mt-auto pt-4 border-t border-gray-50 flex items-center justify-between">
                    {/* Badge */}
                    <div className="flex items-center gap-1.5">
                      <div className="w-5 h-5 rounded bg-emerald-50 border border-emerald-100 flex items-center justify-center shrink-0">
                        <svg className="w-3.5 h-3.5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </div>
                      <span className="text-xs text-gray-500 font-bold tracking-tight">Verified Answer</span>
                    </div>

                    {/* CTA Link */}
                    <div className="flex items-center gap-1 text-xs font-bold text-[#D4AF37] group-hover:text-amber-600 transition-colors duration-200">
                      <span>Read App</span>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transform group-hover:translate-x-0.5 transition-transform duration-200">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                      </svg>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-1 md:col-span-3 text-center py-12 sm:py-16 bg-[#FDF9EE]/50 rounded-[14px] border border-dashed border-[#F0E6D2]">
                <p className="text-gray-500 font-medium text-base">No questions matching "{searchQuery}" found.</p>
                <button 
                  onClick={() => setSearchQuery("")}
                  className="mt-4 text-[#D4AF37] font-bold hover:underline"
                >
                  Clear search filter
                </button>
              </div>
            )}
          </div>
        )}

        {/* Show More Button */}
        {!loading && (
          <div className="flex justify-center mt-8">
            <button 
              onClick={() => setIsModalOpen(true)}
              className="flex items-center gap-2 text-gray-800 font-semibold text-sm sm:text-[15px] hover:text-black transition-colors group cursor-pointer"
            >
              Show More
              <svg 
                width="14" 
                height="14" 
                className="sm:w-[16px] sm:h-[16px] group-hover:translate-y-0.5 transition-transform"
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>
          </div>
        )}

      </div>

      {/* Premium Download App Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-all duration-300">
          {/* Backdrop Click Dismiss */}
          <div className="absolute inset-0" onClick={() => setIsModalOpen(false)} />
          
          {/* Modal Container */}
          <div className="relative w-full max-w-md bg-white rounded-2xl sm:rounded-3xl border border-gray-100 shadow-[0_20px_50px_rgba(0,0,0,0.15)] p-6 sm:p-8 flex flex-col items-center text-center transform scale-100 transition-transform duration-300 z-10">
            
            {/* Close Button */}
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors p-1 rounded-full hover:bg-gray-50 cursor-pointer"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>

            {/* Premium Gold Icon Ring */}
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-tr from-[#D4AF37]/20 to-amber-50 rounded-full flex items-center justify-center border border-[#D4AF37]/30 shadow-inner mb-5 sm:mb-6">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden relative bg-white flex items-center justify-center shadow-sm">
                <Image 
                  src="/logo2.svg" 
                  alt="AMA Logo" 
                  fill
                  className="object-contain p-2" 
                />
              </div>
            </div>

            {/* Typography */}
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 leading-snug mb-3">
              View More Questions on Our App
            </h3>
            <p className="text-gray-500 text-sm sm:text-[15px] leading-relaxed mb-6 sm:mb-8">
              To read the complete library of legal Q&As and enjoy interactive advisory services, download our official app on your device.
            </p>

            {/* Store Download Badges */}
            <div className="flex flex-col sm:flex-row items-center gap-3 w-full justify-center">
              <a 
                href="https://play.google.com/store/apps/details?id=com.ama.ama_legal_solutions&pcampaignid=web_share" 
                target="_blank" 
                rel="noopener noreferrer"
                className="transition-transform active:scale-95 hover:scale-105 duration-200 shrink-0"
              >
                <Image 
                  src="/playtrans.svg" 
                  alt="Get it on Google Play" 
                  width={150} 
                  height={44} 
                  className="h-11 w-auto object-contain"
                />
              </a>
              <a 
                href="https://apps.apple.com/in/app/ama-legal-solutions/id6755156186" 
                target="_blank" 
                rel="noopener noreferrer"
                className="transition-transform active:scale-95 hover:scale-105 duration-200 shrink-0"
              >
                <Image 
                  src="/apptrans.svg" 
                  alt="Download on the App Store" 
                  width={150} 
                  height={44} 
                  className="h-11 w-auto object-contain"
                />
              </a>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
