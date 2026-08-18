'use client'
import React, { useEffect, useState, useRef, useMemo, memo } from 'react';
import Link from 'next/link';
import { authorBios } from '@/lib/authorBios';
import BlogCompanyOverview from '@/components/BlogCompanyOverview';

// Custom inline SVG icons for zero-dependency reliability and premium rendering
const StarIcon = ({ filled }: { filled: boolean }) => (
  <svg className={`w-4 h-4 ${filled ? "text-amber-500 fill-amber-500" : "text-slate-300 fill-slate-200"}`} viewBox="0 0 24 24">
    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
  </svg>
);

const UserIcon = () => (
  <svg className="w-5 h-5 text-slate-400" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
  </svg>
);

const QuoteLeftIcon = () => (
  <svg className="w-8 h-8 text-[#D2A02A] opacity-25" viewBox="0 0 24 24" fill="currentColor">
    <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
  </svg>
);

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

// Function to handle image loading errors
const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
  const target = e.target as HTMLImageElement;
  if (target.src !== '/logo_qa.png') {
    target.src = '/logo_qa.png';
  }
};

export interface FAQ {
  id?: string;
  question: string;
  answer: string;
}

export interface Review {
  id?: string;
  name: string;
  rating: number;
  review: string;
}

export interface Blog {
  _id: string;
  title: string;
  subtitle?: string;
  image: string;
  infographic?: string;
  date: string;
  description: string;
  slug: string;
  author: string;
  metaTitle?: string;
  metaDescription?: string;
  keyTakeaways?: string[];
  popularSearches?: string[];
  faqs?: FAQ[];
  reviews?: Review[];
  created?: number;
}

const AnimatedCounter = ({
  end,
  decimals = 0,
  duration = 1800,
  prefix = '',
  suffix = '',
  useLocale = false,
}: {
  end: number;
  decimals?: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  useLocale?: boolean;
}) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasStarted) return;

    let startTimestamp: number | null = null;
    let animationFrameId: number;

    const easeOutCubic = (x: number): number => 1 - Math.pow(1 - x, 3);

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const elapsed = timestamp - startTimestamp;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeOutCubic(progress);
      
      const current = easedProgress * end;
      setCount(current);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(step);
      } else {
        setCount(end);
      }
    };

    animationFrameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrameId);
  }, [hasStarted, end, duration]);

  const displayValue = () => {
    if (decimals > 0) {
      return count.toFixed(decimals);
    }
    const val = Math.floor(count);
    if (useLocale) {
      return val.toLocaleString('en-IN');
    }
    return val.toString();
  };

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}
      {displayValue()}
      {suffix}
    </span>
  );
};

interface BlogDetailProps {
  blog: Blog;
  relatedBlogs: Blog[];
}
// Breadcrumbs component
function Breadcrumbs({ items }: { items: { label: string; href: string }[] }) {
  return (
    <nav className="flex text-xs sm:text-sm font-semibold text-slate-500 gap-1.5 sm:gap-2 items-center mb-6">
      <Link href="/" className="hover:text-[#D4AF37] transition-colors">Home</Link>
      {items.map((item, idx) => (
        <React.Fragment key={idx}>
          <span className="text-slate-300">/</span>
          <Link
            href={item.href}
            className={idx === items.length - 1 ? "text-[#B8860B] font-bold" : "hover:text-[#D4AF37] transition-colors"}
          >
            {item.label}
          </Link>
        </React.Fragment>
      ))}
    </nav>
  );
}

// Table of Contents component
function TableOfContents({ sections, orientation = "horizontal", activeId }: { sections: { id: string; title: string }[]; orientation?: "horizontal" | "vertical"; activeId?: string }) {
  if (!sections || sections.length === 0) return null;

  if (orientation === "vertical") {
    return (
      <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-3xs">
        <h4 className="text-xs font-extrabold text-slate-900 uppercase tracking-wider mb-4 border-b border-slate-50 pb-2">On This Page</h4>
        <ul className="space-y-3">
          {sections.map((section, idx) => {
            const isActive = activeId === section.id;
            return (
              <li key={idx}>
                <a
                  href={`#${section.id}`}
                  className={`text-xs font-bold transition-colors block leading-snug ${isActive ? "text-[#B8860B]" : "text-slate-500 hover:text-[#B8860B]"}`}
                >
                  {section.title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }

  return (
    <div className="bg-[#FDFBF7] p-5 rounded-2xl border border-[#D4AF37]/20 shadow-3xs mb-8">
      <h4 className="text-xs font-extrabold text-[#B8860B] uppercase tracking-wider mb-3">On This Page</h4>
      <div className="flex flex-wrap gap-x-4 gap-y-2">
        {sections.map((section, idx) => {
          const isActive = activeId === section.id;
          return (
            <a
              key={idx}
              href={`#${section.id}`}
              className={`text-xs font-bold transition-colors ${isActive ? "text-[#B8860B]" : "text-slate-600 hover:text-[#B8860B]"}`}
            >
              # {section.title}
            </a>
          );
        })}
      </div>
    </div>
  );
}

// Helper to process content and extract TOC
const processContent = (html: string) => {
  if (!html) return { content: '', sections: [] };
  const sections: { id: string; title: string }[] = [];
  // Regex to match h2 and h3 tags
  let modifiedContent = html.replace(/<(h[23])(.*?)>(.*?)<\/\1>/g, (match, tag, attrs, title) => {
    // Strip HTML from title for the TOC label
    const cleanTitle = title.replace(/<[^>]*>/g, '').trim();
    // Generate ID from title
    const id = cleanTitle.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');

    sections.push({ id, title: cleanTitle });

    // Check if ID already exists in attrs
    if (attrs.includes('id=')) {
      return match; // Return original if ID exists
    }

    return `<${tag} id="${id}"${attrs}>${title}</${tag}>`;
  });

  return { content: modifiedContent, sections };
};

const statsData = [
  {
    icon: (
      <svg className="w-10 h-10 mr-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2.93 2.05C2.61 2.37 2.45 2.85 2.45 3.5V20.5C2.45 21.15 2.61 21.63 2.93 21.95L3.03 22.05L13.88 11.2V10.8L3.03 1.95L2.93 2.05Z" fill="#3B82F6"/>
        <path d="M17.48 14.8L13.88 11.2V10.8L17.48 7.2L17.62 7.28L21.87 9.71C23.09 10.4 23.09 11.55 21.87 12.24L17.62 14.72L17.48 14.8Z" fill="#FBBF24"/>
        <path d="M17.62 14.72L13.88 11.05L2.93 21.95C3.34 22.37 4.02 22.42 4.78 21.99L17.62 14.72Z" fill="#EF4444"/>
        <path d="M17.62 7.28L4.78 2.01C4.02 1.58 3.34 1.63 2.93 2.05L13.88 10.95L17.62 7.28Z" fill="#10B981"/>
      </svg>
    ),
    value: "1K+",
    label: "App Downloads",
  },
  {
    icon: null,
    value: "5,000+",
    label: "Queries Answered",
  },
  {
    icon: null,
    value: "< 24 Hrs",
    label: "Legal Advice",
  },
  {
    icon: (
      <div className="flex items-center gap-0.5 mr-2">
        {[1, 2, 3, 4].map(i => (
          <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        ))}
        <svg className="w-4 h-4 text-yellow-400" viewBox="0 0 24 24">
          <defs>
            <linearGradient id="half-star">
              <stop offset="50%" stopColor="currentColor" />
              <stop offset="50%" stopColor="rgba(255,255,255,0.2)" />
            </linearGradient>
          </defs>
          <path fill="url(#half-star)" d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      </div>
    ),
    value: "4.5/5",
    label: "Rating",
  }
];

const BlogDetail = memo(function BlogDetail({ blog, relatedBlogs }: BlogDetailProps) {
  const [currentUrl, setCurrentUrl] = useState('');
  const [expandedFaqs, setExpandedFaqs] = useState<string[]>([]);
  const [activeId, setActiveId] = useState<string>('');
  const [activeStatIndex, setActiveStatIndex] = useState(0);

  // Rotate stats on mobile
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStatIndex(prev => (prev + 1) % 2);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  // Process content for TOC
  const { content: processedContent, sections: tocSections } = useMemo(() => {
    return processContent(blog.description);
  }, [blog.description]);

  // Split content at middle heading to embed infographic
  const { part1, part2 } = useMemo(() => {
    if (!processedContent || !blog.infographic) {
      return { part1: processedContent, part2: '' };
    }
    const h2Matches = Array.from(processedContent.matchAll(/<h2[^>]*>/gi));
    if (h2Matches.length >= 2) {
      const midIndex = Math.floor(h2Matches.length / 2);
      const splitPosition = h2Matches[midIndex].index;
      if (splitPosition !== undefined) {
        return {
          part1: processedContent.substring(0, splitPosition),
          part2: processedContent.substring(splitPosition)
        };
      }
    }
    return { part1: processedContent, part2: '' };
  }, [processedContent, blog.infographic]);

  useEffect(() => {
    setCurrentUrl(window.location.href);
  }, []);

  // Track active section on scroll
  useEffect(() => {
    if (tocSections.length === 0) return;

    const handleScroll = () => {
      const headingElements = tocSections.map(({ id }) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
      
      let currentActiveId = "";
      // Offset accounts for sticky navs and visual padding
      const offset = 150; 
      
      for (const el of headingElements) {
        const rect = el.getBoundingClientRect();
        if (rect.top <= offset) {
          currentActiveId = el.id;
        } else {
          break;
        }
      }
      
      // Default to first section if at the top
      if (!currentActiveId && headingElements.length > 0 && window.scrollY < 300) {
         currentActiveId = headingElements[0].id;
      }
      
      if (currentActiveId && currentActiveId !== activeId) {
        setActiveId(currentActiveId);
      }
    };

    const timeoutId = setTimeout(handleScroll, 100);

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [tocSections, activeId]);

  const toggleFaq = (faqId: string) => {
    setExpandedFaqs(prev =>
      prev.includes(faqId)
        ? prev.filter(id => id !== faqId)
        : [...prev, faqId]
    );
  };

  const handleShare = (platform: string) => {
    const title = blog.title;
    let shareUrl = '';

    switch (platform) {
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;
        break;
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(currentUrl)}`;
        break;
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`;
        break;
      default:
        return;
    }
    window.open(shareUrl, '_blank', 'width=600,height=400');
  };

  const breadcrumbItems = [
    { label: "Blog", href: "/blog" },
    { label: blog.title, href: `/blog/${blog.slug}` },
  ];

  return (
    <div className="min-h-dvh bg-[#F5F2EB] text-gray-800 pb-16">
      {/* New Hero Section based on image */}
      <div className="w-full bg-white pt-12 lg:pt-20 pb-12 px-4 sm:px-6 lg:px-8 border-b border-slate-100">
        <div className="max-w-[1200px] mx-auto">
          <Breadcrumbs items={breadcrumbItems} />
          
          <div className="flex flex-col lg:flex-row gap-10 items-center mt-6">
            {/* Left Content */}
            <div className="flex-1 flex flex-col items-start text-left">

              {/* Title */}
              <h1 className="text-[32px] md:text-[42px] lg:text-[48px] font-extrabold leading-[1.2] text-[#382E26] mb-6">
                {blog.title}
              </h1>

              {/* Excerpt */}
              {blog.subtitle && (
                <p className="text-[16px] md:text-[18px] text-gray-600 mb-8 leading-relaxed">
                  {blog.subtitle}
                </p>
              )}

              {/* Author & Meta Data */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-6 mt-2">
                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-[#382E26] flex items-center justify-center text-white font-bold text-[16px]">
                    {blog.author ? blog.author.substring(0, 2).toUpperCase() : "AM"}
                  </div>
                  <div>
                    <div className="text-[16px] font-bold text-[#382E26]">{blog.author || "Anuj Anand Malik"}</div>
                    <div className="text-[12px] text-gray-500">Reviewed by {blog.author || "Anuj Anand Malik"}, Senior Legal Strategist</div>
                  </div>
                </div>

                {/* Badges */}
                <div className="flex items-center gap-3 flex-wrap">
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-gray-200 text-[13px] text-gray-600 font-medium bg-white whitespace-nowrap">
                    <svg className="w-4 h-4 text-gray-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {blog.date || "August 2026"}
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-gray-200 text-[13px] text-gray-600 font-medium bg-white whitespace-nowrap">
                    <svg className="w-4 h-4 text-gray-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    10-12 Min Read
                  </div>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="flex-1 w-full max-w-[600px] lg:max-w-none lg:pl-10">
              <div className="relative w-full aspect-[4/3] sm:aspect-video lg:aspect-[4/3] rounded-3xl overflow-hidden shadow-xl bg-gray-100">
                {blog.image && (
                  <img 
                    src={getValidImageSrc(blog.image)} 
                    alt={blog.title} 
                    className="w-full h-full object-cover"
                    onError={handleImageError}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Banner with Animated Counters & App's Actual Stats */}
      <div className="w-full bg-[#413832] pt-8 pb-7 border-b border-black/5 overflow-hidden relative">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Desktop & Tablet Grid View */}
          <div className="hidden md:grid grid-cols-4 divide-x divide-white/10">
            {/* Stat 1: Google Reviews */}
            <div className="flex flex-col items-center justify-center text-center px-4">
              <div className="flex items-center gap-2.5 mb-2">
                <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm p-1">
                  <svg viewBox="0 0 24 24" className="w-4 h-4">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                </div>
                <span className="text-[34px] font-bold text-white tracking-tight">
                  <AnimatedCounter end={4.9} decimals={1} suffix="/5" duration={1500} />
                </span>
              </div>
              <div className="text-[13px] text-white/80 font-medium">Google Reviews</div>
            </div>

            {/* Stat 2: App Downloads */}
            <div className="flex flex-col items-center justify-center text-center px-4">
              <div className="flex items-center gap-2 mb-2">
                <svg className="w-7 h-7 shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.93 2.05C2.61 2.37 2.45 2.85 2.45 3.5V20.5C2.45 21.15 2.61 21.63 2.93 21.95L3.03 22.05L13.88 11.2V10.8L3.03 1.95L2.93 2.05Z" fill="#3B82F6"/>
                  <path d="M17.48 14.8L13.88 11.2V10.8L17.48 7.2L17.62 7.28L21.87 9.71C23.09 10.4 23.09 11.55 21.87 12.24L17.62 14.72L17.48 14.8Z" fill="#FBBF24"/>
                  <path d="M17.62 14.72L13.88 11.05L2.93 21.95C3.34 22.37 4.02 22.42 4.78 21.99L17.62 14.72Z" fill="#EF4444"/>
                  <path d="M17.62 7.28L4.78 2.01C4.02 1.58 3.34 1.63 2.93 2.05L13.88 10.95L17.62 7.28Z" fill="#10B981"/>
                </svg>
                <span className="text-[34px] font-bold text-white tracking-tight">
                  <AnimatedCounter end={1000} useLocale suffix="+" duration={1800} />
                </span>
              </div>
              <div className="text-[13px] text-white/80 font-medium">App Downloads</div>
            </div>

            {/* Stat 3: Verified Advocates */}
            <div className="flex flex-col items-center justify-center text-center px-4">
              <div className="flex items-center gap-2 mb-2">
                <svg className="w-6 h-6 text-[#D4AF37] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <polyline points="16 11 18 13 22 9" />
                </svg>
                <span className="text-[34px] font-bold text-white tracking-tight">
                  <AnimatedCounter end={200} useLocale suffix="+" duration={1800} />
                </span>
              </div>
              <div className="text-[13px] text-white/80 font-medium">Verified Advocates</div>
            </div>

            {/* Stat 4: Fast Legal Response */}
            <div className="flex flex-col items-center justify-center text-center px-4">
              <div className="flex items-center gap-2 mb-2">
                <svg className="w-6 h-6 text-[#D4AF37] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                <span className="text-[34px] font-bold text-white tracking-tight">
                  &lt; 45 Min
                </span>
              </div>
              <div className="text-[13px] text-white/80 font-medium">Avg. Response Time</div>
            </div>
          </div>

          {/* Mobile Grid View (All 4 Stats) */}
          <div className="md:hidden grid grid-cols-2 gap-4">
            {/* Mobile Stat 1 */}
            <div className="flex flex-col items-center text-center bg-white/5 p-3 rounded-2xl border border-white/10">
              <div className="flex items-center gap-1.5 mb-1">
                <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center shrink-0 p-0.5">
                  <svg viewBox="0 0 24 24" className="w-3.5 h-3.5">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                </div>
                <span className="text-[20px] font-bold text-white">4.9/5</span>
              </div>
              <div className="text-[11px] text-white/80 font-medium">Google Reviews</div>
            </div>

            {/* Mobile Stat 2 */}
            <div className="flex flex-col items-center text-center bg-white/5 p-3 rounded-2xl border border-white/10">
              <div className="flex items-center gap-1.5 mb-1">
                <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.93 2.05C2.61 2.37 2.45 2.85 2.45 3.5V20.5C2.45 21.15 2.61 21.63 2.93 21.95L3.03 22.05L13.88 11.2V10.8L3.03 1.95L2.93 2.05Z" fill="#3B82F6"/>
                  <path d="M17.48 14.8L13.88 11.2V10.8L17.48 7.2L17.62 7.28L21.87 9.71C23.09 10.4 23.09 11.55 21.87 12.24L17.62 14.72L17.48 14.8Z" fill="#FBBF24"/>
                  <path d="M17.62 14.72L13.88 11.05L2.93 21.95C3.34 22.37 4.02 22.42 4.78 21.99L17.62 14.72Z" fill="#EF4444"/>
                  <path d="M17.62 7.28L4.78 2.01C4.02 1.58 3.34 1.63 2.93 2.05L13.88 10.95L17.62 7.28Z" fill="#10B981"/>
                </svg>
                <span className="text-[20px] font-bold text-white">1,000+</span>
              </div>
              <div className="text-[11px] text-white/80 font-medium">App Downloads</div>
            </div>

            {/* Mobile Stat 3 */}
            <div className="flex flex-col items-center text-center bg-white/5 p-3 rounded-2xl border border-white/10">
              <div className="flex items-center gap-1.5 mb-1">
                <svg className="w-5 h-5 text-[#D4AF37] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <polyline points="16 11 18 13 22 9" />
                </svg>
                <span className="text-[20px] font-bold text-white">200+</span>
              </div>
              <div className="text-[11px] text-white/80 font-medium">Verified Lawyers</div>
            </div>

            {/* Mobile Stat 4 */}
            <div className="flex flex-col items-center text-center bg-white/5 p-3 rounded-2xl border border-white/10">
              <div className="flex items-center gap-1.5 mb-1">
                <svg className="w-5 h-5 text-[#D4AF37] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                <span className="text-[20px] font-bold text-white">&lt; 45m</span>
              </div>
              <div className="text-[11px] text-white/80 font-medium">Avg. Response</div>
            </div>
          </div>

        </div>
      </div>

      <div className="container mx-auto px-4 max-w-[1600px] pt-4 pb-8">

        <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr_280px] gap-8 items-start">

          {/* Left Sidebar - TOC (Desktop) */}
          <div className="hidden lg:block sticky top-24">
            <TableOfContents sections={tocSections} orientation="vertical" activeId={activeId} />
          </div>

          {/* Main Content Area */}
          <div className="min-w-0">
            {/* TOC (Mobile) */}
            <div className="lg:hidden mb-8">
              <TableOfContents sections={tocSections} activeId={activeId} />
            </div>

            <div className="bg-white p-6 md:p-12 rounded-3xl border border-slate-100 shadow-3xs space-y-10">

              {/* Key Takeaways Section */}
              {blog.keyTakeaways && blog.keyTakeaways.length > 0 && (
                <div className="rounded-[18px] bg-[#FAF6EC] border border-[#E9DFCA] p-6 md:p-8 shadow-xs">
                  <div className="flex items-center gap-2.5 mb-4">
                    <span className="w-8 h-8 rounded-full bg-[#B8860B]/15 text-[#B8860B] flex items-center justify-center font-bold">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <h2 className="text-xl md:text-2xl font-black text-[#413832]">
                      Key Takeaways
                    </h2>
                  </div>
                  <ul className="space-y-3">
                    {blog.keyTakeaways.map((takeaway, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-slate-700 text-sm md:text-base leading-relaxed">
                        <span className="w-5 h-5 rounded-full bg-[#B8860B]/10 text-[#B8860B] flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                          ✓
                        </span>
                        <span>{takeaway}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Main Article Body - Part 1 */}
              <div
                className="prose prose-lg max-w-none text-slate-700 leading-relaxed tiptap-content"
                dangerouslySetInnerHTML={{ __html: part1 || processedContent }}
              />

              {/* Infographic Section */}
              {blog.infographic && (
                <div className="my-8 rounded-2xl bg-[#FAF6EC] p-4 md:p-6 border border-[#E9DFCA] shadow-xs">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-base font-bold text-[#B8860B]">📊</span>
                    <h3 className="text-xs font-black uppercase tracking-wider text-[#413832]">
                      VISUAL PROCEDURE & INFOGRAPHIC
                    </h3>
                  </div>
                  <div className="relative w-full overflow-hidden rounded-xl bg-white border border-[#E9DFCA] flex justify-center p-2">
                    <img
                      src={getValidImageSrc(blog.infographic)}
                      alt={`${blog.title} Infographic`}
                      className="w-full h-auto object-contain max-h-[700px] rounded-lg"
                      onError={handleImageError}
                    />
                  </div>
                </div>
              )}

              {/* Main Article Body - Part 2 */}
              {part2 && (
                <div
                  className="prose prose-lg max-w-none text-slate-700 leading-relaxed tiptap-content"
                  dangerouslySetInnerHTML={{ __html: part2 }}
                />
              )}

              {/* Tiptap Styles */}
              <style jsx global>{`
                .tiptap-content h1 { font-size: 2em; font-weight: 900; margin-top: 1.5em; margin-bottom: 0.8em; color: #B8860B; }
                .tiptap-content h2 { font-size: 1.75em; font-weight: 800; margin-top: 1.5em; margin-bottom: 0.8em; color: #B8860B; scroll-margin-top: 100px; }
                .tiptap-content h3 { font-size: 1.5em; font-weight: 800; margin-top: 1.2em; margin-bottom: 0.6em; color: #B8860B; scroll-margin-top: 100px; }
                .tiptap-content p { margin-bottom: 1.2em; line-height: 1.8; color: #334155; text-align: justify; }
                .tiptap-content ul { list-style-type: disc; padding-left: 1.5em; margin-bottom: 1.2em; }
                .tiptap-content ol { list-style-type: decimal; padding-left: 1.5em; margin-bottom: 1.2em; }
                .tiptap-content li { margin-bottom: 0.5em; color: #334155; text-align: justify; }
                .tiptap-content blockquote { border-left: 4px solid #D2A02A; padding-left: 1.2em; font-style: italic; color: #475569; background: #fffaf0; padding: 1.25rem; border-radius: 0.75rem; }
                .tiptap-content img { border-radius: 0.75rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05); margin: 2rem 0; max-width: 100%; height: auto; }
                .tiptap-content a { color: #B8860B; text-decoration: underline; font-weight: 600; }
                .tiptap-content table { 
                  width: 100%; 
                  border-collapse: separate !important; 
                  border-spacing: 0 !important; 
                  border: 1px solid #CBD5E1 !important; 
                  border-radius: 12px !important; 
                  overflow: hidden !important; 
                  margin: 2rem 0; 
                  font-size: 0.95em; 
                }
                .tiptap-content th { 
                  background: #F8FAFC; 
                  padding: 0.85rem 1rem; 
                  text-align: left; 
                  font-weight: 700; 
                  border-bottom: 1px solid #CBD5E1; 
                  border-right: 1px solid #E2E8F0; 
                  color: #0F172A; 
                }
                .tiptap-content th:last-child { border-right: none; }
                .tiptap-content td { 
                  padding: 0.85rem 1rem; 
                  border-bottom: 1px solid #E2E8F0; 
                  border-right: 1px solid #E2E8F0; 
                  color: #334155; 
                }
                .tiptap-content td:last-child { border-right: none; }
                .tiptap-content tr:last-child td { border-bottom: none; }
              `}</style>

              {/* Company Overview, Media Mentions & Legal Solutions */}
              <BlogCompanyOverview />

              {/* Popular Searches Section */}
              {blog.popularSearches && blog.popularSearches.length > 0 && (
                <div className="border-t border-slate-100 pt-8">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-base">🔍</span>
                    <h3 className="text-xs font-bold uppercase tracking-widest text-slate-500">
                      Popular Searches & Legal Resources
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2.5">
                    {blog.popularSearches.map((term, idx) => {
                      const lower = term.toLowerCase();
                      let targetHref = `/blog?search=${encodeURIComponent(term)}`;
                      
                      if (lower.includes("loan") || lower.includes("debt") || lower.includes("harassment") || lower.includes("recovery agent")) {
                        targetHref = "/loan-app-debt-settlement-harassment-legal-help";
                      } else if (lower.includes("cheque") || lower.includes("138") || lower.includes("dishonour")) {
                        targetHref = "/cheque-bounce-legal-notice-section-138-guide";
                      } else if (lower.includes("rera") || lower.includes("builder delay") || lower.includes("delayed possession")) {
                        targetHref = "/homebuyer-rights-rera-builder-delay-remedies";
                      } else if (lower.includes("draft") || lower.includes("template") || lower.includes("agreement")) {
                        targetHref = "/drafts";
                      } else if (lower.includes("legal notice") && !lower.includes("lawyer")) {
                        targetHref = "/how-to-draft-legal-notice-india-guide";
                      } else if (lower.includes("divorce") || lower.includes("custody")) {
                        targetHref = "/how-to-file-divorce-india-legal-guide";
                      } else if (lower.includes("property dispute") || lower.includes("partition")) {
                        targetHref = "/property-dispute-resolution-india-legal-remedies";
                      }

                      return (
                        <Link
                          key={idx}
                          href={targetHref}
                          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#FAF6EC] hover:bg-[#F2E8D2] border border-[#E9DFCA] text-xs md:text-sm font-semibold text-[#413832] transition-colors group shadow-3xs"
                        >
                          <span>{term}</span>
                          <svg className="w-3.5 h-3.5 text-[#B8860B] group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Share Section */}
              <div className="border-t border-slate-100 pt-8 mt-8">
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <span className="font-extrabold text-slate-900 text-sm">Share this analysis:</span>
                  <div className="flex space-x-3">
                    <button onClick={() => handleShare('facebook')} className="w-10 h-10 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-500 hover:text-[#B8860B] hover:bg-[#B8860B]/5 hover:border-[#B8860B]/20 transition-all cursor-pointer">
                      <span className="sr-only">Facebook</span>
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                    </button>
                    <button onClick={() => handleShare('twitter')} className="w-10 h-10 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-500 hover:text-[#B8860B] hover:bg-[#B8860B]/5 hover:border-[#B8860B]/20 transition-all cursor-pointer">
                      <span className="sr-only">Twitter</span>
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
                    </button>
                    <button onClick={() => handleShare('linkedin')} className="w-10 h-10 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-500 hover:text-[#B8860B] hover:bg-[#B8860B]/5 hover:border-[#B8860B]/20 transition-all cursor-pointer">
                      <span className="sr-only">LinkedIn</span>
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                    </button>
                  </div>
                </div>
              </div>

              {/* Reviews Section */}
              {blog.reviews && blog.reviews.length > 0 && (
                <section id="reviews" className="scroll-mt-32 border-t border-slate-100 pt-12">
                  <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-8">Verified Client Reviews</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    {blog.reviews.map((review, idx) => (
                      <div key={idx} className="bg-slate-50/50 p-6 rounded-2xl border border-slate-150 relative">
                        <QuoteLeftIcon />
                        <div className="relative z-10 mt-2">
                          <div className="flex items-center mb-4 gap-2">
                            <div className="flex gap-0.5">
                              {[...Array(5)].map((_, i) => (
                                <StarIcon
                                  key={i}
                                  filled={i < review.rating}
                                />
                              ))}
                            </div>
                            <span className="font-extrabold text-slate-900 text-sm">{review.rating}.0</span>
                          </div>
                          <p className="text-slate-600 italic mb-4 text-sm sm:text-base">"{review.review}"</p>
                          <div className="flex items-center mt-6">
                            <div className="w-9 h-9 bg-slate-100 rounded-full flex items-center justify-center mr-3 border border-slate-200 shadow-3xs">
                              <UserIcon />
                            </div>
                            <p className="font-extrabold text-slate-955 text-sm">{review.name}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* FAQs Section */}
              {blog.faqs && blog.faqs.length > 0 && (
                <section id="faqs" className="scroll-mt-32 border-t border-slate-100 pt-12">
                  <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-8">Frequently Asked Questions</h2>
                  <div className="space-y-4">
                    {blog.faqs.map((faq, idx) => {
                      const faqId = `faq-${idx}`;
                      return (
                        <div key={idx} className="border border-slate-150 rounded-2xl overflow-hidden shadow-3xs">
                          <button
                            onClick={() => toggleFaq(faqId)}
                            className="flex justify-between items-center w-full text-left p-5 font-extrabold text-slate-900 hover:bg-[#FDFBF7] focus:outline-none transition-colors gap-3"
                          >
                            <span className="flex items-center text-sm sm:text-base">
                              <span className="text-[#B8860B] mr-3">Q.</span>
                              {faq.question}
                            </span>
                            <span className={`transform transition-transform duration-250 flex-shrink-0 ${expandedFaqs.includes(faqId) ? 'rotate-180' : ''}`}>
                              <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                            </span>
                          </button>
                          {expandedFaqs.includes(faqId) && (
                            <div className="px-5 pb-5 pt-1 text-slate-600 text-sm sm:text-base leading-relaxed pl-10 border-t border-slate-50/50 bg-slate-50/20">
                              {faq.answer}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </section>
              )}

              {/* Related Blogs */}
              {relatedBlogs.length > 0 && (
                <section className="border-t border-slate-100 pt-12">
                  <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-8">Related Legal Insights</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    {relatedBlogs.map((item) => (
                      <Link key={item._id} href={`/blog/${item.slug}`} className="group">
                        <div className="bg-white border border-slate-150 rounded-2xl overflow-hidden hover:shadow-lg transition-all h-full flex flex-col">
                          <div className="relative h-44 bg-gray-900 overflow-hidden flex items-center justify-center">
                            {hasValidImage(item.image) ? (
                              <>
                                {/* Blurred background filler */}
                                <img
                                  src={getValidImageSrc(item.image)}
                                  alt=""
                                  className="absolute inset-0 w-full h-full object-cover blur-md scale-110 opacity-30 select-none pointer-events-none z-0"
                                />
                                {/* Golden tint overlay */}
                                <div className="absolute inset-0 bg-[#B8860B]/15 mix-blend-color select-none pointer-events-none z-0" />
                                {/* Foreground contained image */}
                                <img
                                  src={getValidImageSrc(item.image)}
                                  alt={item.title}
                                  className="relative z-10 max-w-full max-h-full h-full w-auto object-contain group-hover:scale-103 transition-transform duration-500"
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
                            <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-xs rounded-lg px-2.5 py-1 text-xs font-bold text-[#B8860B] border border-slate-100 shadow-3xs z-20">
                              {item.date}
                            </div>
                          </div>
                          <div className="p-5 flex-grow flex flex-col justify-between">
                            <div>
                              <h3 className="text-base sm:text-lg font-extrabold text-slate-900 mb-2 group-hover:text-[#B8860B] transition-colors line-clamp-2">
                                {item.title}
                              </h3>
                              <p className="text-xs text-slate-400 font-semibold mb-4 uppercase">
                                By {item.author}
                              </p>
                            </div>
                            <span className="text-[#B8860B] font-extrabold text-xs sm:text-sm flex items-center mt-auto">
                              Read Article <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                            </span>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </section>
              )}
            </div>
          </div>

          {/* Right Sidebar - CTA & Trust Cards */}
          <div className="space-y-5 sticky top-24">
            {/* CTA Card */}
            <div className="bg-[#413832] rounded-[20px] p-5 text-center shadow-lg relative overflow-hidden flex flex-col items-center">
              <div className="absolute top-0 right-0 w-20 h-20 bg-[#D4AF37]/10 rounded-full blur-2xl -mr-6 -mt-6 pointer-events-none" />
              <div className="w-10 h-10 mb-2.5 rounded-full bg-white/10 border border-white/15 flex items-center justify-center shadow-inner relative z-10">
                <svg className="w-5 h-5 text-[#D4AF37]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 100-6 3 3 0 000 6z" />
                </svg>
              </div>
              <h3 className="text-white text-base font-bold mb-2 relative z-10">Talk to a Legal Expert Free !</h3>
              <p className="text-slate-300 text-xs mb-4 leading-relaxed relative z-10">
                Get a personal legal assessment.<br />One call. No pressure.<br />Clear answers.
              </p>
              <a
                href="tel:+918700343611"
                className="inline-flex w-full items-center justify-center gap-2 bg-[#B8860B] hover:bg-[#9E7307] text-white py-2.5 rounded-xl font-bold text-xs transition-colors relative z-10 shadow-[0_4px_14px_rgba(184,134,11,0.4)]"
              >
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>
                Book My Free Call
              </a>
            </div>

            {/* Trust Signals Card */}
            <div className="bg-white rounded-[20px] p-5 border border-[#D4AF37]/20 shadow-sm">
              <h3 className="text-[11px] font-bold text-slate-500 uppercase tracking-widest mb-4 text-center">
                WHY PEOPLE TRUST AMA LEGAL
              </h3>
              <div className="space-y-3">
                
                {/* Item 1 */}
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#B8860B]/10 flex items-center justify-center shrink-0">
                    <svg className="w-4 h-4 text-[#B8860B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <span className="font-bold text-[#413832] text-xs">10,000+ Clients Helped</span>
                </div>

                {/* Item 2 */}
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#B8860B]/10 flex items-center justify-center shrink-0">
                    <svg className="w-4 h-4 text-[#B8860B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                    </svg>
                  </div>
                  <span className="font-bold text-[#413832] text-xs">Verified Expert Advocates</span>
                </div>

                {/* Item 3 */}
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#B8860B]/10 flex items-center justify-center shrink-0">
                    <svg className="w-4 h-4 text-[#B8860B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                    </svg>
                  </div>
                  <span className="font-bold text-[#413832] text-xs">No Hidden Fees</span>
                </div>

                {/* Item 4 */}
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#B8860B]/10 flex items-center justify-center shrink-0">
                    <svg className="w-4 h-4 text-[#B8860B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <span className="font-bold text-[#413832] text-xs">100% Confidential</span>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default BlogDetail;
