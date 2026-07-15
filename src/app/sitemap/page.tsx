import React from "react";
import Link from "next/link";
import Footer from "@/components/Footer";
import dbConnect from "@/lib/dbConnect";
import { Blog, LawyerInterview } from "@/lib/models";

export const metadata = {
  title: "Sitemap & Legal Guides Directory | AMAConnect",
  description: "Browse the complete directory of AMAConnect core services, professional legal solutions, and comprehensive legal query guides in India.",
};

interface SitemapLink {
  name: string;
  href: string;
  description: string;
}

interface SitemapCategory {
  title: string;
  icon: string;
  description: string;
  links: SitemapLink[];
}

export default async function SitemapPage() {
  const categories: SitemapCategory[] = [];

  try {
    await dbConnect();
    
    // Helper to strip HTML and truncate
    const stripHtmlAndTruncate = (html: string, fallback: string) => {
      if (!html) return fallback;
      const stripped = html.replace(/<[^>]*>?/gm, '');
      if (stripped.length > 140) {
        return stripped.substring(0, 137) + "...";
      }
      return stripped;
    };

    // 1. Fetch Dynamic Blogs
    const blogs = await Blog.find({}, { title: 1, slug: 1, description: 1, metaDescription: 1, subtitle: 1 }).lean();
    if (blogs && blogs.length > 0) {
      const blogLinks = blogs.map((blog: any) => ({
        name: blog.title,
        href: `/blog/${blog.slug}`,
        description: blog.metaDescription || blog.subtitle || stripHtmlAndTruncate(blog.description, "Read our latest legal blog post on this topic.")
      }));
      
      categories.push({
        title: "Latest Legal Blogs & Articles",
        icon: "📝",
        description: "In-depth legal analysis, case studies, and updates on Indian laws.",
        links: blogLinks
      });
    }

    // 2. Fetch Dynamic Lawyer Interviews
    const interviews = await LawyerInterview.find({}, { title: 1, slug: 1, description: 1, metaDescription: 1 }).lean();
    if (interviews && interviews.length > 0) {
      const interviewLinks = interviews.map((interview: any) => ({
        name: interview.title,
        href: `/interviews/${interview.slug}`,
        description: interview.metaDescription || stripHtmlAndTruncate(interview.description, "Exclusive insights and experiences from top legal minds in India.")
      }));
      
      categories.push({
        title: "Exclusive Lawyer Interviews",
        icon: "🎙️",
        description: "In-depth discussions and career journeys of prominent advocates.",
        links: interviewLinks
      });
    }
  } catch (error) {
    console.error("[Sitemap HTML] Error fetching dynamic pages:", error);
  }

  return (
    <div className="min-h-screen bg-[#FDFCF7] flex flex-col font-sans">

      <main className="flex-grow py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <span className="text-[#D4AF37] text-xs sm:text-sm font-bold uppercase tracking-widest bg-white shadow-sm border border-[#D4AF37]/25 rounded-full px-4.5 py-1.5 inline-block mb-4">
              Website Index &amp; Resources
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#2D2319] tracking-tight leading-tight mb-4">
              AMAConnect <span className="text-[#D4AF37]">Sitemap</span>
            </h1>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              Find files, platform segments, professional consultation channels, and statutory legal guides to answer your queries and protect your interests in India.
            </p>
          </div>

          {/* Grid Layout of Categories */}
          <div className="flex flex-col gap-12 sm:gap-16">
            {categories.map((category, index) => (
              <section 
                key={index} 
                className="bg-white rounded-3xl p-6 sm:p-10 border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                {/* Category Header */}
                <div className="flex items-start gap-4 mb-8 border-b border-gray-50 pb-6">
                  <div className="w-12 h-12 rounded-2xl bg-[#FDFBF5] border border-[#D4AF37]/20 flex items-center justify-center text-2xl shadow-sm">
                    {category.icon}
                  </div>
                  <div>
                    <h2 className="text-xl sm:text-2xl font-black text-[#2D2319] tracking-tight leading-snug">
                      {category.title}
                    </h2>
                    <p className="text-gray-500 text-xs sm:text-sm leading-relaxed mt-1">
                      {category.description}
                    </p>
                  </div>
                </div>

                {/* Links Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                  {category.links.map((link, linkIndex) => (
                    <div 
                      key={linkIndex}
                      className="group flex flex-col justify-between p-4 rounded-2xl hover:bg-[#FDFCF9] border border-transparent hover:border-[#D4AF37]/15 transition-all duration-300"
                    >
                      <div>
                        <h3 className="text-sm font-bold text-gray-900 group-hover:text-[#D4AF37] transition-colors leading-snug">
                          <Link href={link.href} className="hover:underline flex items-center gap-1">
                            {link.name}
                            <span className="inline-block transform transition-transform group-hover:translate-x-0.5 text-xs text-[#D4AF37] opacity-0 group-hover:opacity-100">
                              &rarr;
                            </span>
                          </Link>
                        </h3>
                        <p className="text-gray-500 text-xs leading-relaxed mt-2 text-justify">
                          {link.description}
                        </p>
                      </div>
                      <div className="mt-4">
                        <Link 
                          href={link.href}
                          className="text-[10px] uppercase tracking-wider font-extrabold text-[#D4AF37] hover:text-[#b8952f] transition-colors"
                        >
                          Visit Link &rarr;
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
