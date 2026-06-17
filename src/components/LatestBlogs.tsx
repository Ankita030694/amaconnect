"use client";

import Link from "next/link";

interface Blog {
  _id: string;
  title: string;
  subtitle?: string;
  description: string;
  date: string;
  image: string;
  slug: string;
  author: string;
  created: number;
}

interface LatestBlogsProps {
  blogs: Blog[];
}

export default function LatestBlogs({ blogs }: LatestBlogsProps) {
  if (!blogs || blogs.length === 0) return null;

  return (
    <section className="w-full bg-[#FDFBF7] py-6 px-4 sm:px-6 lg:px-8 border-t border-gray-100/50">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Header Section */}
        <div className="w-full text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#2D2219] tracking-tight">
            Blogs
          </h2>
          <p className="text-gray-600 font-medium text-xs sm:text-sm max-w-xl mx-auto mt-2.5">
            Stay informed with verified legal insights, news, and expert articles published by our team of professionals.
          </p>
        </div>

        {/* Blogs Row Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {blogs.map((article) => (
            <div key={article._id} className="h-full">
              <Link href={`/blog/${article.slug}`} className="block h-full group">
                <div className="flex flex-col h-full bg-white rounded-2xl overflow-hidden border border-gray-150 shadow-3xs hover:shadow-xs hover:border-[#D2A02A]/30 transition-all duration-300">
                  
                  {/* Image container */}
                  <div className="relative h-48 w-full flex-shrink-0 bg-slate-900 overflow-hidden flex items-center justify-center">
                    {article.image ? (
                      <>
                        {/* Blurred background filler */}
                        <img
                          src={article.image.includes('/api/images/') ? `${article.image}?w=100` : article.image}
                          alt=""
                          className="absolute inset-0 w-full h-full object-cover blur-md scale-110 opacity-30 select-none pointer-events-none z-0"
                        />
                        {/* Golden tint overlay */}
                        <div className="absolute inset-0 bg-[#B8860B]/15 mix-blend-color select-none pointer-events-none z-0" />
                        {/* Foreground contained image */}
                        <img
                          src={article.image.includes('/api/images/') ? `${article.image}?w=450` : article.image}
                          alt={article.title}
                          className="relative z-10 max-w-full max-h-full h-full w-auto object-contain transition-transform duration-500 group-hover:scale-103"
                          loading="lazy"
                        />
                      </>
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gray-100">
                        <span className="text-xs text-gray-400 font-semibold">Image coming soon</span>
                      </div>
                    )}
                    
                    {/* Date Badge */}
                    <div className="absolute top-4 right-4 z-20 bg-white/95 backdrop-blur-[2px] rounded px-3 py-1 text-[9px] uppercase font-extrabold text-[#5A4C33] border border-[#5A4C33]/10 shadow-3xs">
                      {article.date}
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-base sm:text-lg font-extrabold leading-snug mb-2 line-clamp-2 text-[#2D2219] group-hover:text-[#B8860B] transition-colors">
                      {article.title}
                    </h3>
                    
                    {article.subtitle && (
                      <span className="text-[10px] font-bold text-[#D2A02A] mb-3 uppercase tracking-wider block">
                        {article.subtitle}
                      </span>
                    )}

                    {/* Strip HTML tags from description for clean preview */}
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal line-clamp-3 mb-5 flex-grow">
                      {article.description ? article.description.replace(/<[^>]*>/g, ' ') : ''}
                    </p>

                    <div className="pt-4 border-t border-gray-100 flex items-center text-xs font-bold text-[#5A4C33]/85">
                      <span>Read Full Article</span>
                      <svg className="w-3.5 h-3.5 ml-1.5 transform transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center">
          <Link
            href="/blog"
            className="inline-flex items-center justify-center px-8 py-3.5 bg-[#5A4C33] text-[#F5F2EB] text-sm font-extrabold rounded-xl shadow-xs hover:bg-[#4A3C23] active:scale-98 transition-all cursor-pointer border border-[#5A4C33]/15"
          >
            <span>View More Blogs</span>
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
