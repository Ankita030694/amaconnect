"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowRight } from "lucide-react";

export interface LawyerInterview {
  _id: string;
  title: string;
  headline?: string;
  lawyer: string;
  image: string;
  specialization: string;
  date: string;
  bgColor: string;
  description: string;
  slug: string;
  created?: number;
  isFeatured?: boolean;
  author?: string;
  designation?: string;
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

  const featuredStory = sortedInterviews[0];
  const sidebarStories = sortedInterviews.slice(1, 4); // top 3 for the right sidebar

  const featuredImage = featuredStory.image ? (featuredStory.image.includes('/api/images/') ? `${featuredStory.image}?w=800` : featuredStory.image) : "/man.png";

  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 font-sans">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
        
        {/* Left: Featured Interview Card */}
        {featuredStory && (
          <div className="lg:col-span-7 flex flex-col">
            <div className="flex items-center justify-center w-full mb-4 sm:mb-5">
              <h3 className="text-xl sm:text-2xl font-extrabold text-[#2D2219] tracking-wide uppercase">Featured Interview</h3>
            </div>
            <div className="bg-[#0a0a0a] rounded-3xl overflow-hidden flex flex-col relative group shadow-2xl flex-1">
              {/* Full Background Image */}
              <div className="relative md:absolute inset-0 z-0 w-full aspect-video md:aspect-auto md:h-full shrink-0">
                 <img
                    src="/featured-interview-bg.jpg"
                    alt={featuredStory.lawyer}
                    className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
                    onError={(e) => {
                       (e.target as HTMLImageElement).src = featuredImage;
                    }}
                 />
                 {/* Gradient overlay to make text readable at the bottom */}
                 <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent md:via-[#0a0a0a]/80" />
              </div>
              
              {/* Text Content */}
              <div className="relative z-10 p-6 sm:p-10 flex flex-col justify-end w-full md:min-h-[450px] mt-auto">
                <div className="max-w-3xl">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-[#D4AF37] text-[10px] sm:text-xs font-bold tracking-widest uppercase">
                      FEATURED INTERVIEW
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                    <span className="text-gray-300 text-[10px] sm:text-xs font-medium tracking-wide uppercase">
                      {featuredStory.lawyer}
                    </span>
                  </div>
                  
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-tight tracking-tight mb-4 line-clamp-2 drop-shadow-lg">
                    {featuredStory.headline || featuredStory.title}
                  </h2>
                  
                  <p className="text-gray-300 text-sm sm:text-base mb-6 line-clamp-2 leading-relaxed max-w-2xl drop-shadow-md">
                    {truncateWords(cleanDescription(featuredStory.description), 20)}
                  </p>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <p className="text-gray-400 text-xs sm:text-sm font-medium">
                      By {featuredStory.author || "AMA Connect Editorial Board"}
                    </p>
                    
                    <Link
                      href={`/interviews/${featuredStory.slug}`}
                      className="inline-flex items-center gap-2 bg-gradient-to-r from-[#D4AF37] to-[#B8860B] text-black px-6 py-3 rounded-xl font-bold text-sm transition-all hover:scale-[1.05] active:scale-[0.98] w-fit shadow-lg"
                    >
                      Read Interview <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Right: More Interviews List */}
        <div className="lg:col-span-5 flex flex-col">
          <div className="flex items-center justify-between mb-4 sm:mb-5">
            <h3 className="text-xl sm:text-2xl font-extrabold text-[#2D2219]">More Interviews</h3>
            <Link href="/interviews#all-interviews" className="text-sm font-bold text-[#D4AF37] hover:text-[#B8860B] transition-colors">
              View All
            </Link>
          </div>

          <div className="flex flex-col gap-4">
            {sidebarStories.map((story) => {
              const imageSrc = story.image ? (story.image.includes('/api/images/') ? `${story.image}?w=400` : story.image) : "/man.png";
              const formattedDate = formatDateShort(story.date || (story.created ? new Date(story.created).toISOString() : ""));
              const metaText = `${story.specialization || story.designation || story.lawyer}${formattedDate ? ` • ${formattedDate}` : ""}`;

              return (
                <Link
                  key={story._id}
                  href={`/interviews/${story.slug}`}
                  className="bg-white border border-[#EAE5D8] hover:border-[#D4AF37]/50 rounded-[1.5rem] flex items-center justify-between p-4 sm:p-5 transition-all duration-300 hover:shadow-lg group gap-4 sm:gap-6 min-h-[140px]"
                >
                  {/* Left: Text Content */}
                  <div className="flex flex-col flex-1 min-w-0">
                    <span className="text-[9px] sm:text-[10px] font-extrabold text-[#B8860B] uppercase tracking-wider mb-1.5 sm:mb-2 line-clamp-2 leading-relaxed">
                      {metaText}
                    </span>
                    <h4 className="font-extrabold text-[#1E1712] group-hover:text-[#B8860B] transition-colors leading-snug text-[14px] sm:text-[15px] line-clamp-3">
                      {story.headline || story.title}
                    </h4>
                  </div>
                  
                  {/* Right: Wide Image Container */}
                  <div className="w-[130px] sm:w-[160px] lg:w-[190px] shrink-0 aspect-[16/9] bg-gray-100 relative rounded-xl overflow-hidden shadow-sm border border-gray-100">
                    <img
                      src={imageSrc}
                      alt={story.lawyer}
                      className="absolute inset-0 w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
