"use client";

import Link from "next/link";
import { useState } from "react";
import RequestDraftForm from "./RequestDraftForm";

export interface LawyerInterview {
  _id: string;
  title: string;
  lawyer: string;
  designation?: string;
  companyName?: string;
  image: string;
  specialization: string;
  date: string;
  bgColor: string;
  description: string;
  slug: string;
  duration?: string;
  videoUrl?: string;
  created?: number;
  isFeatured?: boolean;
  views?: number; // <-- add this field once you wire up real tracking (see note below)
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
  } catch (err) { }
  return dateStr;
};

export default function Hero({ initialInterviews = [] }: { initialInterviews?: LawyerInterview[] } = {}) {
  const [interviews] = useState<LawyerInterview[]>(initialInterviews);
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (interviews.length === 0) return null;

  const sortedInterviews = [...interviews].sort((a, b) => {
    if (a.isFeatured) return -1;
    if (b.isFeatured) return 1;
    const timeA = a.created || (a.date ? new Date(a.date).getTime() : 0);
    const timeB = b.created || (b.date ? new Date(b.date).getTime() : 0);
    return timeB - timeA;
  });

  // Find the first story that is not Abhijit for the hero section
  const featuredIndex = sortedInterviews.findIndex(story => !story.lawyer.toLowerCase().includes("abhijit"));
  const actualFeaturedIndex = featuredIndex !== -1 ? featuredIndex : 0;
  
  const featuredStory = sortedInterviews[actualFeaturedIndex];
  const sidebarStories = sortedInterviews.filter((_, index) => index !== actualFeaturedIndex).slice(0, 4);

  return (
    <section
      className="relative w-full overflow-hidden pt-[22px] pb-4 sm:pb-12 px-4 sm:px-6 lg:px-8 bg-white flex flex-col items-center justify-center min-h-[480px] font-sans"
    >
      <div className="max-w-6xl mx-auto w-full relative z-20 flex flex-col gap-5">

        <div className="text-center mb-2 sm:mb-4 relative">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#2D2219] tracking-tight leading-tight">
            Top <span className="text-[#986F09]">Lawyer Stories</span>
          </h1>

          <div className="sm:absolute sm:top-2 sm:right-0 mt-4 sm:mt-0 flex items-center justify-center gap-3">
            <button
              onClick={() => setIsModalOpen(true)}
              className="hidden sm:block px-5 py-2.5 bg-[#2D2219] hover:bg-[#B8860B] text-white rounded-full text-xs font-bold transition-all shadow-3xs cursor-pointer select-none"
            >
              Request an interview
            </button>
            <Link
              href="/interviews#all-interviews"
              className="sm:hidden text-sm font-semibold text-[#986F09] hover:text-[#B8860B] transition-colors flex items-center gap-1 select-none cursor-pointer"
            >
              <span>View all interviews</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 w-full items-stretch">

          {featuredStory && (
            <div className="lg:col-span-7 bg-white border border-gray-150 rounded-2xl overflow-hidden transition-all duration-300 flex flex-col h-full hover:shadow-md group">
              <Link
                href={`/interviews/${featuredStory.slug}`}
                className={`relative block overflow-hidden rounded-t-2xl w-full sm:aspect-[1478/831] flex items-center justify-center ${featuredStory.bgColor || "bg-[#ECE8F5]"}`}
              >
                <img
                  src={featuredStory.image ? (featuredStory.image.includes('/api/images/') ? `${featuredStory.image}?w=800` : featuredStory.image) : "/man.png"}
                  alt={featuredStory.lawyer}
                  className="w-full h-auto sm:h-full object-contain sm:object-cover transform group-hover:scale-103 transition-transform duration-500"
                />
              </Link>

              <div className="p-5 flex flex-col justify-between flex-grow">
                <div>
                  <div className="flex justify-between items-center mb-2.5">
                    <span className="text-[10px] sm:text-xs font-bold text-[#986F09] uppercase tracking-wider">
                      {featuredStory.specialization} • {formatDateToWord(featuredStory.date)}
                    </span>

                    {/*
                      REMOVED: the deterministic-hash fake view count
                      (parseInt(featuredStory._id.substring(18,24), 16) % 400) + 280

                      That number was never real — it was derived from the Mongo
                      _id, so it looked identical on every render and never
                      moved, which is the opposite of what a "trust" surface
                      needs. Two honest paths forward, your call:

                      OPTION A (ship today): just don't show a count at all.
                      A specialization + date line is already credible on its
                      own; a fabricated number adds risk for no real upside.

                      OPTION B (real counter, a bit more work):
                      - add a `views: { type: Number, default: 0 }` field to
                        the LawyerInterview schema
                      - create a POST /api/interviews/[slug]/view route that
                        does a $inc on that field (dedupe by IP/session if you
                        want to prevent refresh-spam)
                      - call that route once from the interview detail page
                        on mount, then read `featuredStory.views` here

                      Once Option B is live, swap this comment block for:
                      {typeof featuredStory.views === "number" && (
                        <div className="flex items-center gap-1.5 text-[11px] text-gray-400 font-semibold">
                          <svg ...eye icon... />
                          <span>{featuredStory.views}</span>
                        </div>
                      )}
                    */}
                  </div>

                  <Link href={`/interviews/${featuredStory.slug}`}>
                    <h2 className="font-extrabold text-[#2D2219] group-hover:text-[#986F09] transition-colors leading-tight text-sm sm:text-base lg:text-lg line-clamp-1 mb-1.5">
                      {featuredStory.title}
                    </h2>
                  </Link>

                  {/* 
                    CONTENT ISSUE: Description copy should lead with new information 
                    (a specific insight/quote), not restate the title. 
                    This needs fixing at the data/CMS level for existing interview entries, 
                    starting with the "Never Stop Learning" / Abhijit Mukhopadhyay entry. 
                  */}
                  <p className="text-[11px] sm:text-xs text-black font-medium leading-relaxed line-clamp-2 mb-3">
                    {truncateWords(cleanDescription(featuredStory.description), 28)}
                  </p>
                </div>

                <div className="flex justify-between items-center pt-3 border-t border-dashed border-gray-155 mt-auto">
                  <Link href={`/interviews/${featuredStory.slug}`} className="text-xs sm:text-xs font-extrabold text-[#986F09] hover:text-[#B8860B] transition-colors flex items-center gap-1">
                    Read Full Interview
                  </Link>
                  <button
                    className="w-10 h-10 flex items-center justify-center text-gray-600 hover:text-[#986F09] transition-colors rounded-full hover:bg-gray-50 cursor-pointer"
                    aria-label="Share interview link"
                  >
                    <svg className="w-4 h-4 stroke-current" fill="none" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          )}

          <div className="lg:col-span-5 flex flex-col gap-3 justify-start">
            {sidebarStories.map((story) => (
              <Link
                key={story._id}
                href={`/interviews/${story.slug}`}
                className="bg-white border border-gray-100 hover:border-gray-250 rounded-2xl p-3 flex gap-3 transition-all duration-300 hover:shadow-sm h-[100px] sm:h-[110px] items-stretch group overflow-hidden cursor-pointer"
              >
                <div className="flex-grow flex flex-col justify-between py-0.5 flex-1 min-w-0">
                  <div>
                    <span className="text-[9px] sm:text-[10px] font-bold text-[#986F09] uppercase tracking-wider block mb-0.5">
                      <span className="sm:hidden">
                        {(() => {
                          const tags = story.specialization ? story.specialization.split(',').map(t => t.trim()).filter(Boolean) : [];
                          const text = tags.length > 2 ? `${tags.slice(0, 2).join(', ')} +${tags.length - 2} more` : story.specialization;
                          return `${text} • ${formatDateToWord(story.date)}`;
                        })()}
                      </span>
                      <span className="hidden sm:inline">
                        {story.specialization} • {formatDateToWord(story.date)}
                      </span>
                    </span>
                    <h3 className="font-extrabold text-[#2D2219] group-hover:text-[#986F09] transition-colors leading-snug text-[10px] sm:text-[11px] line-clamp-2 mb-0.5">
                      {story.title}
                    </h3>
                  </div>
                </div>

                <div
                  className="self-center h-full aspect-[1478/831] rounded-xl overflow-hidden shrink-0 bg-[#EFEFEF] relative flex items-center justify-center border border-gray-50"
                >
                  <img
                    src={story.image ? (story.image.includes('/api/images/') ? `${story.image}?w=200` : story.image) : "/man.png"}
                    alt={story.lawyer}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  {story.videoUrl && (
                    <div className="absolute bottom-1.5 right-1.5 bg-white/95 rounded-md p-1 flex items-center justify-center shadow-md border border-gray-100">
                      <svg className="w-3.5 h-3.5 text-red-600 fill-current" viewBox="0 0 24 24">
                        <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.517 3.545 12 3.545 12 3.545s-7.516 0-9.388.508a3.003 3.003 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11c1.872.508 9.388.508 9.388.508s7.517 0 9.388-.508a3.003 3.003 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                      </svg>
                    </div>
                  )}
                </div>
              </Link>
            ))}

            <div className="mt-2 w-full hidden sm:block">
              <Link
                href="/interviews#all-interviews"
                className="flex items-center justify-center gap-2 px-6 py-3 w-full bg-[#2D2219] hover:bg-[#B8860B] text-white rounded-xl text-xs sm:text-sm font-bold transition-all shadow-sm hover:shadow-md transform hover:-translate-y-0.5 cursor-pointer select-none text-center h-[50px]"
              >
                View More Interviews
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>
          </div>

        </div>

      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative shadow-2xl border border-gray-150 p-2 md:p-6 animate-in fade-in zoom-in-95 duration-200">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 z-50 bg-slate-100 hover:bg-slate-200 text-slate-700 hover:text-black w-8 h-8 rounded-full flex items-center justify-center transition-all cursor-pointer font-bold text-lg"
              title="Close modal"
            >
              &times;
            </button>
            <RequestDraftForm defaultReason="Suggest a Professional Interview" isCompact={true} />
          </div>
        </div>
      )}
    </section>
  );
}