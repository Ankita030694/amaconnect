"use client";

import React, { useEffect, useState, useMemo } from "react";
import { Playfair_Display, Inter } from "next/font/google";
import { Search, TriangleAlert, User, Image as ImageIcon } from "lucide-react";
import Footer from "@/components/Footer";

const playfair = Playfair_Display({ subsets: ["latin"], weight: ["400", "600", "700", "800"] });
const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

// Format date helper
const formatDate = (dateString: string) => {
  if (!dateString) return { day: "", monthYear: "" };
  const d = new Date(dateString);
  const day = d.getDate().toString().padStart(2, '0');
  const month = d.toLocaleString('default', { month: 'short' }).toUpperCase();
  const year = d.getFullYear();
  return { day, monthYear: `${month} ${year}` };
};



const areasOfCoverage = [
  "Corporate Law & Compliance",
  "Debt Recovery Protocols & OTS",
  "Family Dispute Resolutions",
  "Litigation Defense Strategies",
];

export default function BlogsPage() {
  const [blogs, setBlogs] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  const [visibleCount, setVisibleCount] = useState(8);

  const [subscribeEmail, setSubscribeEmail] = useState("");
  const [subscribeStatus, setSubscribeStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [subscribeMessage, setSubscribeMessage] = useState("");

  useEffect(() => {
    // Reset visible count when filters change
    setVisibleCount(8);
  }, [searchQuery]);

  useEffect(() => {
    // Fetch blogs
    const fetchBlogs = async () => {
      try {
        const res = await fetch('/api/blogs');
        if (res.ok) {
          const data = await res.json();
          setBlogs(data);
        }
      } catch (error) {
        console.error("Failed to fetch blogs:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  // Filter logic
  const filteredBlogs = useMemo(() => {
    let filtered = blogs;

    // Filter by search query
    if (searchQuery.trim() !== "") {
      const q = searchQuery.toLowerCase();
      filtered = filtered.filter(blog => 
        (blog.title && blog.title.toLowerCase().includes(q)) ||
        (blog.description && blog.description.toLowerCase().includes(q))
      );
    }

    return filtered;
  }, [blogs, searchQuery]);

  // Bento takes first 5 items (1 featured + 4 side cards)
  const featuredBlog = filteredBlogs.length > 0 ? filteredBlogs[0] : null;
  const bentoSideBlogs = filteredBlogs.slice(1, 5);
  
  // Grid takes the rest up to visibleCount
  const gridBlogs = filteredBlogs.slice(5, visibleCount + 5);
  const hasMore = visibleCount + 5 < filteredBlogs.length;

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + 8);
  };

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!subscribeEmail) return;
    
    setSubscribeStatus("loading");
    setSubscribeMessage("");
    
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: subscribeEmail })
      });
      
      const data = await res.json();
      
      if (res.ok) {
        setSubscribeStatus("success");
        setSubscribeMessage(data.message);
        setSubscribeEmail("");
      } else {
        setSubscribeStatus("error");
        setSubscribeMessage(data.error || "Failed to subscribe.");
      }
    } catch (error) {
      setSubscribeStatus("error");
      setSubscribeMessage("An error occurred. Please try again later.");
    }
  };

  return (
    <div className={`min-h-screen bg-[#F5F3EE] text-[#1E1E1E] ${inter.className}`}>
      {/* 1. SEARCH BAR */}
      <section className="pt-[24px] lg:pt-[100px] pb-[24px] lg:pb-[40px] px-6 max-w-[1280px] mx-auto">
        <div className="max-w-[640px] mx-auto relative group/search">
          <input 
            type="text" 
            placeholder="Search legal blogs by keyword or topic..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-[#FFFFFF] border border-[#E8E4DE] rounded-full text-[16px] text-[#1E1E1E] placeholder:text-[#9C958C] pl-[24px] pr-[48px] py-4 focus:outline-none focus:border-[#C9A227] focus:ring-1 focus:ring-[#C9A227] transition-all shadow-[0_2px_8px_rgba(0,0,0,0.04)]"
          />
          <Search className="absolute right-6 top-1/2 -translate-y-1/2 w-5 h-5 text-[#9C958C]" />
        </div>
      </section>


      {/* 3. BENTO GRID (FEATURED + SIDE CARDS) */}
      <section className="max-w-[1280px] mx-auto px-6 pb-[60px]">
        {isLoading ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 animate-pulse">
            <div className="lg:col-span-6 h-[400px] lg:h-[500px] bg-[#E8E4DE] rounded-[16px]" />
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-[#E8E4DE] rounded-[16px] min-h-[200px]" />
              <div className="bg-[#E8E4DE] rounded-[16px] min-h-[200px]" />
              <div className="bg-[#E8E4DE] rounded-[16px] min-h-[200px]" />
              <div className="bg-[#E8E4DE] rounded-[16px] min-h-[200px]" />
            </div>
          </div>
        ) : featuredBlog ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
            
            {/* Featured Card - Left */}
            <div className="lg:col-span-6 relative rounded-[16px] overflow-hidden group min-h-[450px] lg:min-h-[500px] flex flex-col">
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
                 <h1 className="text-white text-[28px] lg:text-[36px] font-bold leading-[1.2] mb-3 line-clamp-3" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.5)' }}>
                   {featuredBlog.title}
                 </h1>
                 <div 
                   className="text-gray-300 text-[15px] line-clamp-2 mb-8 leading-relaxed" 
                   dangerouslySetInnerHTML={{ __html: featuredBlog.description }} 
                 />
                 
                 <div className="flex items-center justify-between mt-auto pt-6 border-t border-white/20">
                   <div className="flex items-center gap-4">
                     <div className="w-12 h-12 rounded-full bg-white/10 overflow-hidden shrink-0 flex items-center justify-center">
                        {featuredBlog.authorPhoto ? (
                          <img src={featuredBlog.authorPhoto} alt={featuredBlog.author || "Author"} className="w-full h-full object-cover" />
                        ) : (
                          <User className="w-6 h-6 text-white/50" />
                        )}
                     </div>
                     <div>
                       <div className="text-white font-bold text-[15px]">{featuredBlog.author || "AMA Legal"}</div>
                       {(featuredBlog.authorTitle || featuredBlog.designation) && (
                         <div className="text-[#C9A227] text-[13px] mt-0.5">{featuredBlog.authorTitle || featuredBlog.designation}</div>
                       )}
                     </div>
                   </div>
                   
                   <a href={`/blog/${featuredBlog.slug}`} className="w-12 h-12 rounded-lg bg-[#C9A227] flex items-center justify-center text-[#111111] hover:bg-[#B8941F] transition-colors shrink-0">
                     <span className="text-[20px] font-bold">→</span>
                   </a>
                 </div>
              </div>
            </div>

            {/* Side Cards - Right (2x2 grid) */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {bentoSideBlogs.map(blog => {
                const { day, monthYear } = formatDate(blog.date);
                return (
                  <a href={`/blog/${blog.slug}`} key={blog._id || blog.slug} className="relative rounded-[16px] overflow-hidden group min-h-[220px] flex flex-col justify-end p-6">
                     {blog.image ? (
                       <img src={blog.image} alt={blog.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                     ) : (
                       <div className="absolute inset-0 w-full h-full bg-[#1A1A1A] flex items-center justify-center">
                         <ImageIcon className="w-10 h-10 text-white/10" />
                       </div>
                     )}
                     <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/70 to-transparent pointer-events-none"></div>
                     
                     <div className="relative z-10 mt-auto">
                       <h2 className="text-white text-[17px] font-bold leading-[1.35] line-clamp-3 mb-4" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>
                         {blog.title}
                       </h2>
                       <div className="flex items-center text-[11px] font-bold tracking-wide">
                         <span className="text-[#C9A227] uppercase mr-2 line-clamp-1">{blog.author || "AMA Legal"}</span>
                         <span className="text-gray-400">•</span>
                         <span className="text-gray-300 ml-2 uppercase shrink-0">{day} {monthYear}</span>
                       </div>
                     </div>
                  </a>
                );
              })}
            </div>
          </div>
        ) : (
          <div className="text-center py-20 text-[#6B6560]">No articles found.</div>
        )}
      </section>


      {/* 4. ARTICLE GRID */}
      {(!isLoading && gridBlogs.length > 0) && (
        <section className="max-w-[1280px] mx-auto px-6 pb-[80px]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[24px]">
            {gridBlogs.map((blog) => {
              const { day, monthYear } = formatDate(blog.date);
              return (
                <div key={blog._id || blog.slug} className="group flex flex-col rounded-[12px] bg-[#FFFFFF] border border-[#E8E4DE] overflow-hidden transition-all duration-300 hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)] hover:-translate-y-1 h-full">
                  {/* Thumbnail */}
                  <div className="w-full h-[200px] bg-[#E8E4DE] relative overflow-hidden flex items-center justify-center">
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
                    <span className="text-[#9C958C] text-[12px] font-medium tracking-wide uppercase mb-2 block">
                      {day} {monthYear}
                    </span>
                    <h2 className="text-[#1E1E1E] text-[18px] font-bold leading-[1.3] line-clamp-2 mb-3 group-hover:text-[#C9A227] transition-colors">
                      <a href={`/blog/${blog.slug}`}>
                        {blog.title}
                      </a>
                    </h2>
                    
                    <div className="mt-auto pt-2">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-8 h-8 rounded-full bg-[#E8E4DE] flex items-center justify-center overflow-hidden shrink-0">
                          {blog.authorPhoto ? (
                            <img src={blog.authorPhoto} alt={blog.author || "Author"} className="w-full h-full object-cover" />
                          ) : (
                            <User className="w-4 h-4 text-[#9C958C]" />
                          )}
                        </div>
                        <div>
                          <div className="text-[#1E1E1E] text-[13px] font-bold leading-tight line-clamp-1">{blog.author || "AMA Connect"}</div>
                          {(blog.authorTitle || blog.designation) && (
                            <div className="text-[#6B6560] text-[11px] mt-0.5 line-clamp-1">{blog.authorTitle || blog.designation}</div>
                          )}
                        </div>
                      </div>
                      
                      <a href={`/blog/${blog.slug}`} className="text-[#C9A227] text-[13px] font-bold flex items-center gap-1.5 group/link w-fit">
                        Read Article <span className="group-hover/link:translate-x-1 transition-transform">→</span>
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* LOAD MORE BUTTON */}
          {hasMore && (
            <div className="mt-[48px] flex justify-center">
              <button 
                onClick={handleLoadMore}
                className="bg-[#C9A227] text-[#FFFFFF] text-[14px] font-semibold uppercase tracking-[0.05em] px-[40px] py-[16px] rounded-full transition-all duration-200 hover:bg-[#B8941F] hover:shadow-lg hover:-translate-y-0.5"
              >
                Load More Articles
              </button>
            </div>
          )}
        </section>
      )}

      {/* 5. AREAS OF COVERAGE & RESEARCH */}
      <section className="bg-[#FFFFFF] border-y border-[#E8E4DE] py-[60px]">
        <div className="max-w-[1280px] mx-auto px-6 text-center">
          <h3 className="text-[#1E1E1E] text-[12px] uppercase tracking-[0.2em] font-bold mb-8">AREAS OF COVERAGE & RESEARCH</h3>
          <div className="flex flex-wrap justify-center gap-[12px]">
            {areasOfCoverage.map((pill) => (
              <span key={pill} className="border border-[#C9A227] text-[#C9A227] text-[13px] font-medium px-[20px] py-[8px] rounded-full bg-transparent">
                {pill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 6. DISCLAIMER SECTION */}
      <section className="bg-[#F5F3EE]">
        <div className="max-w-[1280px] mx-auto px-6 py-[80px]">
          <div className="bg-[#2A2B2E] p-[40px] md:p-[48px] rounded-[16px] shadow-sm">
            <div className="flex items-center mb-4">
              <TriangleAlert className="w-[20px] h-[20px] text-[#C9A227]" />
              <h3 className="text-[#C9A227] text-[13px] uppercase tracking-[0.15em] font-bold ml-2">DISCLAIMER</h3>
            </div>
            <p className="text-[#A0A2A8] text-[15px] leading-[1.8] max-w-[900px]">
              The information provided on this website https://amaconnect.in is for general informational purposes only and should not be considered legal, financial, or professional advice. While we strive to ensure that the content is accurate and up to date, we do not guarantee the completeness, reliability, or accuracy of any information. Any reliance you place on the information provided is strictly at your own risk. AMA Legal Solutions, its founders, employees, or affiliates shall not be held liable for any losses, damages, or legal consequences arising from the use of this website or any linked resources. The content on this website does not establish a client-attorney relationship.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
