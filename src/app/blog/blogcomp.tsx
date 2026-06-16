'use client'
import React, { useEffect, useState, useMemo, useCallback } from 'react';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';
import Script from 'next/script';

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
    return '/logo_qa.png'; // Fallback to AMA logo / general QA logo
  }
  return imageSrc;
};

// Helper function to check if image src is valid
const hasValidImage = (imageSrc: string | undefined | null): boolean => {
  return !!(imageSrc && imageSrc.trim() !== '');
};

// Add new function to handle image loading errors
const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
  const target = e.target as HTMLImageElement;
  if (target.src !== '/logo_qa.png') {
    target.src = '/logo_qa.png';
  }
};

// Define the Blog interface
export interface Blog {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  date: string;
  image: string;
  created: number;
  metaTitle?: string;
  metaDescription?: string;
  slug: string;
}

interface BlogPageProps {
  initialBlogs: Blog[];
}

export default function Page({ initialBlogs = [] }: BlogPageProps) {
  const [blogs] = useState<Blog[]>(initialBlogs);
  const [filteredBlogs, setFilteredBlogs] = useState<Blog[]>(initialBlogs);
  const [webPageSchema, setWebPageSchema] = useState<any>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [visibleCount, setVisibleCount] = useState(6);

  // Reset search and filter logic
  const handleSearch = useCallback((query: string) => {
    setSearchQuery(query);
    setVisibleCount(6); // Reset pagination count on new search

    if (!query.trim()) {
      setFilteredBlogs(blogs);
      return;
    }

    const searchTerm = query.toLowerCase().trim();
    const filtered = blogs.filter(blog =>
      blog.title.toLowerCase().includes(searchTerm) ||
      blog.subtitle.toLowerCase().includes(searchTerm) ||
      blog.description.toLowerCase().includes(searchTerm)
    );

    setFilteredBlogs(filtered);
  }, [blogs]);

  // Debounced search to improve performance
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      handleSearch(searchQuery);
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [searchQuery, blogs]);

  // Function to generate dynamic FAQ schema based on blogs data
  const generateBlogFaqSchema = (blogsData: Blog[]) => {
    const blogFaqs = [
      {
        question: "What legal topics does AMA Legal Solutions cover in their blog?",
        answer: `Our blog covers a comprehensive range of legal topics including ${blogsData.slice(0, 5).map(blog => blog.title.toLowerCase()).join(', ')} and more. We provide insights on current legal developments, case studies, and practical legal advice for individuals and businesses in India.`
      },
      {
        question: "How often is the blog updated with new content?",
        answer: `We regularly update our blog with fresh, relevant legal content. Currently featuring ${blogsData.length} articles covering various legal topics. Our team of experienced lawyers and legal experts publish articles on current legal developments, regulatory changes, and practical legal guidance.`
      },
      {
        question: "Can I use the information from the blog as legal advice?",
        answer: "While our blog provides valuable legal insights and information, it should not be considered as formal legal advice. The content is for general informational purposes only. For specific legal matters, we strongly recommend consulting with our qualified legal professionals."
      },
      {
        question: "How can I contact AMA Legal Solutions for legal consultation?",
        answer: "You can contact AMA Legal Solutions through our website at https://amaconnect.in, email us at notify@amaconnect.in, or call our office directly."
      }
    ];

    return {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Legal Blog - AMA Legal Solutions | Legal Insights & Articles India",
      "description": `Stay informed with the latest legal insights and developments in India. AMA Legal Solutions blog provides expert legal articles on ${blogsData.slice(0, 3).map(blog => blog.title.toLowerCase()).join(', ')} and more.`,
      "url": "https://amaconnect.in/blog",
      "mainEntity": {
        "@type": "FAQPage",
        "mainEntity": blogFaqs.map(faq => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
          }
        }))
      }
    };
  };

  // Set schema on mount
  useEffect(() => {
    if (initialBlogs.length > 0) {
      setWebPageSchema(generateBlogFaqSchema(initialBlogs));
    }
  }, [initialBlogs]);

  // Handle "Show More" functionality
  const handleShowMore = () => {
    setVisibleCount(prev => prev + 6);
  };

  // Get currently visible blogs
  const displayedBlogs = useMemo(() => {
    return filteredBlogs.slice(0, visibleCount);
  }, [filteredBlogs, visibleCount]);

  const hasMore = filteredBlogs.length > visibleCount;

  const latestBlogs = useMemo(() => {
    return blogs.slice(0, 5);
  }, [blogs]);

  return (
    <>
      {/* Schema.org FAQ Markup for SEO */}
      {webPageSchema && (
        <Script
          id="blog-faq-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(webPageSchema)
          }}
        />
      )}

      {/* Search Bar */}
      <motion.div
        className="max-w-2xl mx-auto mb-16"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.4 }}
      >
        <div className="relative shadow-sm rounded-lg overflow-hidden border border-gray-200">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <svg className="h-5 w-5 text-[#5A4C33]/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <input
            type="text"
            placeholder="Search legal blogs by keyword or topic..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="text-black block w-full pl-11 pr-10 py-3.5 bg-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#D2A02A] border-none text-sm transition-all"
            aria-label="Search blogs"
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

        {/* Search Results Info */}
        {searchQuery && (
          <motion.div
            className="mt-3 text-center text-xs text-gray-500 font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {filteredBlogs.length === 0 ? (
              <p>No blogs found matching "<span className="font-semibold text-gray-700">{searchQuery}</span>"</p>
            ) : (
              <p>Found {filteredBlogs.length} articles matching "<span className="font-semibold text-gray-700">{searchQuery}</span>"</p>
            )}
          </motion.div>
        )}
      </motion.div>

      {/* Blog Cards Grid */}
      <div className="max-w-7xl mx-auto mb-16" data-blog-content>
        {filteredBlogs.length === 0 ? (
          <motion.div
            className="text-center py-16 bg-white rounded-xl border border-gray-100 shadow-2xs max-w-lg mx-auto"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <svg className="w-12 h-12 mx-auto text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.47-.881-6.08-2.33" />
            </svg>
            <h3 className="text-base font-semibold text-[#5A4C33] mb-1">No Articles Found</h3>
            <p className="text-xs text-gray-500 max-w-xs mx-auto mb-5">Adjust your keywords or browse the full collection.</p>
            <button
              onClick={() => setSearchQuery('')}
              className="px-4 py-2 bg-[#5A4C33] text-white text-xs font-semibold rounded-lg hover:bg-[#4A3C23] transition-colors cursor-pointer"
            >
              Reset Search
            </button>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Left side: Main Blog Grid (takes 3 columns on large screens) */}
            <div className="lg:col-span-3">
              <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-8"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {displayedBlogs.map((article) => (
                  <motion.div
                    key={article.id}
                    variants={itemVariants}
                    className="h-full"
                  >
                    <Link href={`/blog/${article.slug}`}>
                      <motion.div
                        className="flex flex-col h-full bg-white rounded-xl overflow-hidden border border-gray-100 shadow-2xs hover:border-[#D2A02A]/30 transition-all duration-300"
                        variants={hoverVariants}
                        initial="initial"
                        whileHover="hover"
                      >
                        <div className="relative h-48 w-full flex-shrink-0 bg-gray-900 overflow-hidden flex items-center justify-center">
                          {hasValidImage(article.image) ? (
                            <>
                              {/* Blurred background filler */}
                              <img
                                src={getValidImageSrc(article.image)}
                                alt=""
                                className="absolute inset-0 w-full h-full object-cover blur-md scale-110 opacity-30 select-none pointer-events-none z-0"
                              />
                              {/* Golden tint overlay */}
                              <div className="absolute inset-0 bg-[#B8860B]/15 mix-blend-color select-none pointer-events-none z-0" />
                              {/* Foreground contained image */}
                              <img
                                src={getValidImageSrc(article.image)}
                                alt={`${article.title} | AMA Legal Solutions`}
                                className="relative z-10 max-w-full max-h-full h-full w-auto object-contain transition-transform duration-500 hover:scale-103"
                                loading="lazy"
                                onError={handleImageError}
                              />
                            </>
                          ) : (
                            <div className="w-full h-full flex items-center justify-center bg-gray-100">
                              <div className="text-center p-4">
                                <svg className="w-10 h-10 mx-auto text-gray-300 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                                <span className="text-xs text-gray-400 font-medium">Image coming soon</span>
                              </div>
                            </div>
                          )}
                          <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-[2px] rounded px-3 py-1 text-[10px] uppercase font-bold text-[#5A4C33] border border-[#5A4C33]/10 shadow-xs">
                            {article.date}
                          </div>
                        </div>

                        <div className="p-6 flex flex-col flex-grow">
                          <h3 className="text-lg font-semibold leading-snug mb-2 line-clamp-2 text-[#5A4C33]">
                            {article.title}
                          </h3>
                          {article.subtitle && (
                            <p className="text-xs font-bold text-[#D2A02A] mb-3">
                              {article.subtitle}
                            </p>
                          )}
                          <p className="text-sm text-gray-600 leading-relaxed font-normal line-clamp-3 mb-4 flex-grow">
                            {article.description}
                          </p>
                          <div className="pt-4 border-t border-gray-100 flex items-center text-xs font-bold text-[#5A4C33]/80 group cursor-pointer mt-auto">
                            <span>Read Full Article</span>
                            <svg className="w-4 h-4 ml-1.5 transform transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                            </svg>
                          </div>
                        </div>
                      </motion.div>
                    </Link>
                  </motion.div>
                ))}
              </motion.div>

              {/* "Show More" Button Section */}
              {hasMore && (
                <div className="flex justify-center mt-12">
                  <motion.button
                    onClick={handleShowMore}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="px-8 py-3.5 bg-[#5A4C33] text-[#F5F2EB] text-sm font-semibold rounded-lg shadow-md hover:bg-[#4A3C23] active:bg-[#3d311c] transition-all cursor-pointer border border-[#5A4C33]/15"
                  >
                    Show More Articles
                  </motion.button>
                </div>
              )}
            </div>

            {/* Right side: Latest Blogs Sidebar (takes 1 column on large screens) */}
            <div className="lg:col-span-1 border-t lg:border-t-0 lg:border-l border-gray-100 lg:pl-6 pt-8 lg:pt-0">
              <h2 className="text-[#5A4C33] text-lg font-bold mb-6 pb-2 border-b border-gray-100 tracking-wide uppercase">
                Latest Blogs
              </h2>
              <div className="flex flex-col gap-5">
                {latestBlogs.map((article) => (
                  <Link key={`latest-${article.id}`} href={`/blog/${article.slug}`}>
                    <div className="flex gap-3 items-center group cursor-pointer">
                      <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 bg-gray-900 flex items-center justify-center border border-gray-100">
                        <img
                          src={getValidImageSrc(article.image)}
                          alt=""
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                          onError={handleImageError}
                        />
                      </div>
                      <div className="min-w-0 flex-grow">
                        <h4 className="text-sm font-semibold text-[#5A4C33] line-clamp-2 leading-tight group-hover:text-[#D2A02A] transition-colors duration-200">
                          {article.title}
                        </h4>
                        {article.subtitle && (
                          <p className="text-[11px] font-bold text-[#D2A02A] mt-1 line-clamp-1">
                            {article.subtitle}
                          </p>
                        )}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Styled Disclaimer Section */}
      <motion.div
        className="my-16 px-6 py-8 bg-white rounded-xl border border-gray-200 shadow-3xs text-center max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <h3 className="text-[#5A4C33] text-lg font-bold mb-4 text-center">Disclaimer</h3>
        <div className="text-black text-xs leading-relaxed space-y-4 font-normal text-justify">
          <p>
            The information provided on this website https://amaconnect.in is for general informational purposes only
            and should not be considered legal, financial, or professional advice. While we strive to ensure that the content is accurate and
            up to date, we do not guarantee the completeness, reliability, or accuracy of any information.
          </p>
          <p>
            Any reliance you place on the information provided is strictly at your own risk. AMA Legal
            Solutions, its founders, employees, or affiliates shall be held liable for any losses, damages, or legal consequences arising from
            the use of this website or any linked resources.
          </p>
          <p>
            The content on this website does not establish a client-attorney relationship. If you
            require legal or financial assistance, we strongly recommend consulting with a qualified professional. Any discussions,
            consultations, or assessments provided through this website or preliminary guidance only.
          </p>
          <p>
            Our services are subject to applicable laws and regulations, and results may vary depending on individual circumstances. We do not guarantee specific
            outcomes for loan settlements, debt negotiations, or legal proceedings.
          </p>
          <p>
            Additionally, this website may contain links to
            third-party websites for additional information or reference. We do not endorse or assume responsibility for the content, privacy
            policies, or practices of these external websites.
          </p>
          <p className="font-semibold text-center mt-6">
            By using this website, you acknowledge and agree to this disclaimer. If you do not agree with any part of this notice, please refrain from using our
            services. For legal assistance or inquiries, please contact us <Link href="/contact" className="text-[#D2A02A]">here</Link>
          </p>
        </div>
      </motion.div>
    </>
  );
}
