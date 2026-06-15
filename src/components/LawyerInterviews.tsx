'use client'
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

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

interface FAQ {
  id?: string;
  question: string;
  answer: string;
}

interface Review {
  id?: string;
  name: string;
  rating: number;
  review: string;
}

interface LawyerInterview {
  _id?: string;
  title: string;
  lawyer: string;
  image: string;
  specialization: string;
  date: string;
  bgColor: string;
  description: string;
  slug: string;
  metaTitle?: string;
  metaDescription?: string;
  faqs?: FAQ[];
  reviews?: Review[];
  author: string;
  created?: number;
  duration?: string;
}

export default function LawyerInterviews() {
  const [interviews, setInterviews] = useState<LawyerInterview[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedInterview, setSelectedInterview] = useState<LawyerInterview | null>(null);

  useEffect(() => {
    const fetchInterviews = async () => {
      try {
        const res = await fetch("/api/interviews");
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setInterviews(data);
      } catch (err) {
        console.error("Error loading interviews in frontend:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchInterviews();
  }, []);

  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
      {/* Header Section */}
      <div className="text-center mb-8 sm:mb-12">
        <h3 className="text-[#D4AF37] font-bold tracking-widest text-xs sm:text-sm uppercase mb-3 sm:mb-4">
          Featured Lawyer Q&A Case Guides
        </h3>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#2D2219] leading-tight tracking-tight mb-4 sm:mb-6 max-w-3xl mx-auto">
          Verified Lawyers Break Down Real Legal Issues
        </h2>
        <p className="text-gray-500 text-base sm:text-xl max-w-2xl mx-auto">
          Get clear, practical legal insights from our verified advocates as they analyze actual cases, legal procedures, and statutory remedies.
        </p>
      </div>

      {loading ? (
        <div className="flex justify-center py-12">
          <div className="flex flex-col items-center gap-3">
            <span className="animate-spin text-2xl text-[#D4AF37]">💫</span>
            <span className="text-sm font-semibold text-slate-500">Loading Case Guides...</span>
          </div>
        </div>
      ) : interviews.length === 0 ? (
        <div className="text-center py-12 border border-dashed border-slate-200 rounded-3xl bg-slate-50/50">
          <p className="text-slate-400 text-base italic">No lawyer guides or interviews published yet.</p>
        </div>
      ) : (
        /* Cards Grid */
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {interviews.map((item) => (
            <Link 
              key={item._id} 
              href={`/interviews/${item.slug}`}
              className="flex flex-col sm:flex-row overflow-hidden rounded-2xl sm:rounded-3xl bg-[#FDFBF7] border border-gray-100 shadow-xs hover:shadow-xl transition-all duration-300 group cursor-pointer"
            >
              {/* Left: Image with Background */}
              <div className={`relative w-full sm:w-[40%] min-h-[200px] sm:min-h-[250px] ${item.bgColor || 'bg-[#D4AF37]/10'} flex items-end justify-center pt-6 sm:pt-8 overflow-hidden`}>
                <img
                  src={item.image || "/ashishbhay.png"}
                  alt={item.lawyer}
                  className="object-contain h-full w-auto max-h-[220px] sm:max-h-none transform group-hover:scale-103 transition-transform duration-500"
                />
              </div>

              {/* Right: Content */}
              <div className="flex-1 p-5 sm:p-8 flex flex-col justify-between">
                <div>
                  <h4 className="text-lg sm:text-2xl font-bold text-[#B8860B] mb-3 sm:mb-4 leading-snug group-hover:text-[#9E7307] transition-colors">
                    {item.title}
                  </h4>
                  <div className="flex flex-col gap-1 mb-3 sm:mb-4">
                    <span className="text-base sm:text-lg font-bold text-gray-900">{item.lawyer}</span>
                    <div className="flex items-center gap-1.5 sm:gap-2 text-green-600 font-semibold text-xs sm:text-sm">
                      <svg width="14" height="14" className="sm:w-[16px] sm:h-[16px]" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                      </svg>
                      Verified Lawyer
                    </div>
                  </div>
                  
                  <div className="mb-4 sm:mb-6">
                    <p className="text-xs sm:text-[11px] font-bold text-gray-400 uppercase tracking-wide mb-1">Specializes in</p>
                    <p className="text-gray-600 text-sm">{item.specialization}</p>
                  </div>
                </div>

                <div className="flex items-center justify-between mt-3 sm:mt-4 border-t border-slate-100 pt-4">
                  <div className="text-gray-400 text-xs font-semibold">
                    {formatDateToDDMMYYYY(item.date)} • {item.duration || "5 min read"}
                  </div>
                  <span className="text-[#B8860B] font-bold text-sm sm:text-base hover:underline transition-all">
                    Read Interview
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}

      {/* Premium Detailed Interview Drawer / Modal */}
      <AnimatePresence>
        {selectedInterview && (
          <div className="fixed inset-0 z-50 flex items-center justify-end overflow-hidden">
            {/* Backdrop overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedInterview(null)}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-xs cursor-pointer"
            />

            {/* Slider panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="relative w-full max-w-2xl h-full bg-white shadow-2xl flex flex-col z-10 text-slate-800"
            >
              {/* Drawer Header */}
              <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-[#FDFBF7]">
                <div>
                  <span className="text-[#B8860B] font-bold text-[10px] uppercase tracking-widest">Case Guide Analysis</span>
                  <h3 className="text-lg font-extrabold text-slate-900 leading-tight mt-0.5">{selectedInterview.lawyer}</h3>
                </div>
                <button
                  onClick={() => setSelectedInterview(null)}
                  className="w-10 h-10 rounded-full hover:bg-slate-100 flex items-center justify-center text-slate-400 hover:text-slate-700 transition-colors cursor-pointer border border-slate-150 shadow-3xs"
                >
                  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Drawer Content Area */}
              <div className="flex-1 overflow-y-auto p-6 sm:p-8 flex flex-col gap-8 pb-16">
                
                {/* Visual Banner Block */}
                <div className={`rounded-3xl p-6 ${selectedInterview.bgColor || 'bg-[#D4AF37]/10'} flex flex-col md:flex-row items-center gap-6 border border-slate-200/40 relative overflow-hidden shadow-3xs`}>
                  <div className="flex-1">
                    <span className="px-2.5 py-1 bg-white/80 border border-slate-200 text-green-700 rounded-lg text-xs font-extrabold shadow-3xs">Verified Advocate</span>
                    <h2 className="text-xl sm:text-2xl font-black text-slate-900 mt-3 leading-snug">{selectedInterview.title}</h2>
                    <p className="text-slate-600 text-sm mt-2 font-medium">{selectedInterview.specialization}</p>
                    <p className="text-slate-400 text-xs font-bold uppercase mt-4">{formatDateToDDMMYYYY(selectedInterview.date)} • {selectedInterview.duration || "5 min read"}</p>
                  </div>
                  <img 
                    src={selectedInterview.image || "/ashishbhay.png"} 
                    alt={selectedInterview.lawyer}
                    className="w-32 h-32 object-contain rounded-2xl bg-white/40 p-2 border border-white/50 shadow-3xs flex-shrink-0"
                  />
                </div>

                {/* Main description section */}
                <div>
                  <h4 className="text-xs font-extrabold text-slate-400 uppercase tracking-widest mb-4">Detailed Case Record & Advice</h4>
                  <div 
                    className="prose prose-slate max-w-none text-slate-700 leading-relaxed text-sm sm:text-base space-y-4"
                    dangerouslySetInnerHTML={{ __html: selectedInterview.description }}
                  />
                </div>

                {/* FAQs Accordion Schema */}
                {selectedInterview.faqs && selectedInterview.faqs.length > 0 && (
                  <div className="border-t border-slate-100 pt-6">
                    <h4 className="text-xs font-extrabold text-slate-400 uppercase tracking-widest mb-4">Frequently Asked Questions</h4>
                    <div className="flex flex-col gap-3">
                      {selectedInterview.faqs.map((faq, index) => (
                        <div key={index} className="p-4 bg-slate-50 rounded-2xl border border-slate-150 shadow-3xs">
                          <p className="text-slate-900 font-extrabold text-sm flex items-start gap-2">
                            <span className="text-[#B8860B]">Q:</span>
                            <span>{faq.question}</span>
                          </p>
                          <p className="text-slate-600 text-xs mt-2 leading-relaxed pl-5">
                            {faq.answer}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Client Reviews Rating */}
                {selectedInterview.reviews && selectedInterview.reviews.length > 0 && (
                  <div className="border-t border-slate-100 pt-6">
                    <h4 className="text-xs font-extrabold text-slate-400 uppercase tracking-widest mb-4">Verified Client Reviews</h4>
                    <div className="flex flex-col gap-4">
                      {selectedInterview.reviews.map((rev, index) => (
                        <div key={index} className="p-4 bg-[#FDFBF7] rounded-2xl border border-[#D4AF37]/20 shadow-3xs flex flex-col gap-2">
                          <div className="flex justify-between items-center">
                            <span className="font-extrabold text-slate-950 text-xs">{rev.name}</span>
                            <div className="flex text-amber-500 gap-0.5 text-xs">
                              {Array.from({ length: rev.rating || 5 }).map((_, i) => (
                                <span key={i}>★</span>
                              ))}
                            </div>
                          </div>
                          <p className="text-slate-600 text-xs italic leading-relaxed">
                            "{rev.review}"
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                {/* Author Signature */}
                <div className="border-t border-slate-100 pt-6 flex justify-between items-center text-xs text-slate-400 font-semibold italic">
                  <span>Written By: {selectedInterview.author}</span>
                  <span>AMA Legal Solutions • Connect</span>
                </div>

              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
