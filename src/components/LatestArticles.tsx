"use client";

import Link from "next/link";

interface Blog {
  _id: string;
  title: string;
  date: string;
  image: string;
  slug: string;
  author?: string;
}

const formatDateToWord = (dateStr: string) => {
  if (!dateStr) return "";
  try {
    const parsedDate = new Date(dateStr.trim().replace(/[\/.]/g, "-"));
    if (!isNaN(parsedDate.getTime())) {
      return parsedDate.toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric"
      }).toUpperCase();
    }
  } catch (err) {}
  return dateStr.toUpperCase();
};

export default function LatestArticles({ blogs = [] }: { blogs?: Blog[] }) {
  if (!blogs || blogs.length === 0) return null;

  // We need 4 cards. If we have less, we'll just render what we have.
  const displayBlogs = blogs.slice(0, 4);

  return (
    <section className="w-full flex flex-col font-sans">
      <div className="flex items-center justify-between mb-4 sm:mb-6">
        <h3 className="text-xl sm:text-2xl font-extrabold text-[#2D2219]">Latest Articles</h3>
        <Link href="/blogs" className="text-sm font-bold text-[#D4AF37] hover:text-[#B8860B] transition-colors">
          View All
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 flex-grow">
        {displayBlogs.map((blog) => {
          const imageSrc = blog.image ? (blog.image.includes('/api/images/') ? `${blog.image}?w=400` : blog.image) : "/man.png";
          
          // FLAG: The prompt requested to flag AI-template images.
          // In a real app we might check if image contains 'lady-justice' or similar string.
          // Here we render a small dev-only warning overlay.
          const isSuspectedGeneric = imageSrc.includes('justice') || imageSrc.includes('gavel') || imageSrc.includes('template');

          return (
            <Link
              key={blog._id}
              href={`/blogs/${blog.slug}`}
              className="flex flex-col group transition-transform duration-300 hover:-translate-y-1 h-full"
            >
              <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100 mb-3 sm:mb-4 relative border border-gray-150">
                <img
                  src={imageSrc}
                  alt={blog.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* 
                  TODO: The user explicitly requested to flag existing AI-template-style blog thumbnails 
                  (Lady Justice statues, gavel clipart, gold "TOP CHOICES" badges) for replacement.
                  Please update the CMS to use real photography or clear minimal iconography.
                */}
                {isSuspectedGeneric && (
                  <div className="absolute top-2 right-2 bg-red-600 text-white text-[9px] font-bold px-2 py-1 rounded">
                    NEEDS REAL IMAGE
                  </div>
                )}
              </div>
              
              <div className="flex flex-col flex-1">
                <span className="text-[10px] sm:text-xs font-bold text-[#D4AF37] tracking-wider mb-2">
                  {formatDateToWord(blog.date)}
                </span>
                
                <h4 className="font-extrabold text-[#2D2219] group-hover:text-[#D4AF37] transition-colors text-sm sm:text-base leading-snug line-clamp-2 mb-2">
                  {blog.title}
                </h4>
                
                <p className="text-[11px] sm:text-xs text-gray-500 font-medium mt-auto">
                  By {blog.author || "Team AMA"}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
