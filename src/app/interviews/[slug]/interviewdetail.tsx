'use client'
import React, { useEffect, useState, useMemo, memo } from 'react';
import Link from 'next/link';
import { authorBios } from '@/lib/authorBios';

// Custom inline SVG icons for zero-dependency reliability and premium rendering
const StarIcon = ({ filled }: { filled: boolean }) => (
  <svg className={`w-3.5 h-3.5 ${filled ? "text-amber-500 fill-amber-500" : "text-slate-300 fill-slate-200"}`} viewBox="0 0 24 24">
    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
  </svg>
);

const UserIcon = () => (
  <svg className="w-4 h-4 text-slate-400" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
  </svg>
);

const QuoteLeftIcon = () => (
  <svg className="w-7 h-7 text-[#D2A02A] opacity-25" viewBox="0 0 24 24" fill="currentColor">
    <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
  </svg>
);

// Helper function to validate and provide fallback for images
const getValidImageSrc = (imageSrc: string | undefined | null): string => {
  if (!imageSrc || imageSrc.trim() === '') {
    return '/ashishbhay.png'; // Fallback to AMA general lawyer image
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
  if (target.src !== '/ashishbhay.png') {
    target.src = '/ashishbhay.png';
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

export interface LawyerInterview {
  _id: string;
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
  linkedinUrl?: string;
}

interface InterviewDetailProps {
  interview: LawyerInterview;
  relatedInterviews: LawyerInterview[];
}
// Breadcrumbs component
function Breadcrumbs({ items }: { items: { label: string; href: string }[] }) {
  return (
    <nav className="flex text-[10px] sm:text-xs font-semibold text-slate-500 gap-1 sm:gap-1.5 items-center mb-5">
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
function TableOfContents({ 
  sections, 
  activeId, 
  onLinkClick, 
  orientation = "horizontal" 
}: { 
  sections: { id: string; title: string }[]; 
  activeId: string;
  onLinkClick: (e: React.MouseEvent<HTMLAnchorElement>, id: string) => void;
  orientation?: "horizontal" | "vertical" 
}) {
  if (!sections || sections.length === 0) return null;
  
  if (orientation === "vertical") {
    return (
      <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-3xs">
        <h4 className="text-[10px] font-extrabold text-slate-900 uppercase tracking-wider mb-3 border-b border-slate-50 pb-1.5">On This Page</h4>
        <ul className="space-y-2.5">
          {sections.map((section, idx) => {
            const isActive = section.id === activeId;
            return (
              <li key={idx}>
                <a 
                  href={`#${section.id}`} 
                  onClick={(e) => onLinkClick(e, section.id)}
                  className={`text-[10px] font-bold transition-all block leading-snug pl-1.5 border-l-2 ${
                    isActive 
                      ? "text-[#B8860B] font-extrabold border-[#B8860B]" 
                      : "text-slate-500 hover:text-[#B8860B] border-transparent"
                  }`}
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
    <div className="bg-[#FDFBF7] p-4 rounded-xl border border-[#D4AF37]/20 shadow-3xs mb-6">
      <h4 className="text-[10px] font-extrabold text-[#B8860B] uppercase tracking-wider mb-2.5">On This Page</h4>
      <div className="flex flex-wrap gap-x-4 gap-y-2">
        {sections.map((section, idx) => {
          const isActive = section.id === activeId;
          return (
            <a 
              key={idx}
              href={`#${section.id}`}
              onClick={(e) => onLinkClick(e, section.id)}
              className={`text-[10px] font-bold transition-all border-b pb-0.5 ${
                isActive 
                  ? "text-[#B8860B] border-[#B8860B]" 
                  : "text-slate-600 hover:text-[#B8860B] border-transparent"
              }`}
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

  // 1. Decode &amp;amp;, &amp;, and other common HTML entities
  let sanitized = html
    .replace(/&amp;amp;/g, "&")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">");

  // 2. Strip prefix "Executive Summary & Overview" or "Executive Summary" if it occurs at the start of any HTML tags or text at the very beginning
  sanitized = sanitized.replace(/^((?:<[^>]+>)*)\s*(Executive\s+Summary\s*(?:&|and)?\s*Overview\s*[\-:]*\s*)/i, "$1");
  sanitized = sanitized.replace(/^((?:<[^>]+>)*)\s*(Executive\s+Summary\s*[\-:]*\s*)/i, "$1");

  const sections: { id: string, title: string }[] = [];
  // Regex to match h2 and h3 tags on the sanitized content
  let modifiedContent = sanitized.replace(/<(h[23])(.*?)>(.*?)<\/\1>/g, (match, tag, attrs, title) => {
    // Strip HTML from title for the TOC label
    let cleanTitle = title.replace(/<[^>]*>/g, '').trim();
    // Decode common entities from cleanTitle
    cleanTitle = cleanTitle
      .replace(/&amp;amp;/g, "&")
      .replace(/&amp;/g, "&")
      .replace(/&lt;/g, "<")
      .replace(/&gt;/g, ">");

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

const InterviewDetail = memo(function InterviewDetail({ interview, relatedInterviews }: InterviewDetailProps) {
  const [currentUrl, setCurrentUrl] = useState('');
  const [expandedFaqs, setExpandedFaqs] = useState<string[]>([]);
  
  // Process content for TOC and append Client Reviews & FAQs dynamically if present
  const { content: processedContent, sections: tocSections } = useMemo(() => {
    const { content, sections } = processContent(interview.description);
    const allSections = [...sections];
    if (interview.reviews && interview.reviews.length > 0) {
      allSections.push({ id: "reviews", title: "Client Reviews" });
    }
    if (interview.faqs && interview.faqs.length > 0) {
      allSections.push({ id: "faqs", title: "FAQs" });
    }
    return { content, sections: allSections };
  }, [interview.description, interview.reviews, interview.faqs]);

  const [activeId, setActiveId] = useState<string>('');

  const handleLinkClick = React.useCallback((e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -90; // offset for sticky navbar + spacing
      const y = el.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
      // Update browser history with hash tag, without jumping
      window.history.pushState(null, '', `#${id}`);
      setActiveId(id);
    }
  }, []);

  useEffect(() => {
    setCurrentUrl(window.location.href);
  }, []);

  useEffect(() => {
    if (tocSections.length === 0) return;

    let ticking = false;

    const updateActiveSection = () => {
      const scrollPosition = window.scrollY + 130; // Offset for sticky header and top margin

      // Special case: close to top of page
      if (window.scrollY < 100) {
        setActiveId(tocSections[0].id);
        ticking = false;
        return;
      }

      // Special case: close to bottom of page
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 60) {
        setActiveId(tocSections[tocSections.length - 1].id);
        ticking = false;
        return;
      }

      let active = tocSections[0].id;
      for (const section of tocSections) {
        const el = document.getElementById(section.id);
        if (el) {
          const top = el.getBoundingClientRect().top + window.scrollY;
          if (scrollPosition >= top) {
            active = section.id;
          } else {
            break; // Stop loop once we find a section below scroll position
          }
        }
      }
      setActiveId(active);
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateActiveSection);
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    updateActiveSection(); // Run once on mount / update to get initial state

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [tocSections]);

  const toggleFaq = (faqId: string) => {
    setExpandedFaqs(prev => 
      prev.includes(faqId)
        ? prev.filter(id => id !== faqId)
        : [...prev, faqId]
    );
  };

  const handleShare = (platform: string) => {
    const title = interview.title;
    let shareUrl = '';

    switch(platform) {
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
    { label: "Interviews", href: "/interviews" },
    { label: interview.title, href: `/interviews/${interview.slug}` },
  ];

  return (
    <div className="min-h-screen bg-[#F5F2EB] text-gray-800 pb-12 font-sans">
      {/* Full Screen Banner with Blurred Background Filler */}
      {interview.image && (
        <div className={`w-full h-[224px] sm:h-[304px] md:h-[400px] lg:h-[440px] relative ${interview.bgColor || 'bg-[#2D2219]'} flex items-center justify-center overflow-hidden border-b border-slate-200/40 shadow-xs`}>
          {/* Blurred Background Filler */}
          <img
            src={getValidImageSrc(interview.image)}
            alt=""
            className="absolute inset-0 w-full h-full object-cover blur-xl scale-110 opacity-30 select-none pointer-events-none z-0"
          />
          {/* Golden tint overlay */}
          <div className="absolute inset-0 bg-[#B8860B]/15 mix-blend-color select-none pointer-events-none z-0" />
          {/* Foreground Contained Image */}
          <img
            src={getValidImageSrc(interview.image)}
            alt={interview.title}
            className="relative z-10 max-w-full max-h-full h-full w-auto object-contain"
            onError={handleImageError}
          />
        </div>
      )}

      <div className="container mx-auto px-4 max-w-[1600px] py-8">
        <Breadcrumbs items={breadcrumbItems} />
        
        {/* Header Content */}
        <div className="relative max-w-4xl mx-auto mb-10 mt-5 p-5 sm:p-6 md:p-8 rounded-3xl bg-white/70 backdrop-blur-md border border-white/80 border-t-[#B8860B]/20 shadow-xs text-center overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-48 bg-[#B8860B]/5 rounded-full blur-3xl pointer-events-none -mt-24" />

          {/* Specialization Badge */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#B8860B]/10 border border-[#B8860B]/20 text-[#B8860B] rounded-full text-[9px] sm:text-[10px] font-black uppercase tracking-wider mb-5 relative z-10">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#B8860B] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#B8860B]"></span>
            </span>
            {interview.specialization}
          </div>

          <h1 className="relative z-10 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#2D2219] leading-tight tracking-tight mb-5 mt-1">
            {interview.title}
          </h1>

          {/* Meta Information Bar */}
          <div className="relative z-10 flex flex-wrap justify-center items-center gap-2.5 md:gap-3 text-slate-500 text-[10px] md:text-xs font-semibold mt-5">
            <span className="flex items-center gap-1.5 bg-slate-100/90 border border-slate-200/50 px-2.5 py-1 rounded-xl">
              <svg className="w-3 h-3 text-slate-400" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
              {interview.date}
            </span>
            
            <span className="flex items-center gap-1.5 bg-slate-100/90 border border-slate-200/50 px-2.5 py-1 rounded-xl">
              <svg className="w-3 h-3 text-slate-400" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              {interview.duration || "5 min read"}
            </span>

            <span className="flex items-center gap-2 bg-[#B8860B]/5 border border-[#B8860B]/15 text-slate-900 px-2.5 py-1 rounded-xl">
              {authorBios[interview.lawyer as keyof typeof authorBios]?.image ? (
                <img 
                  src={authorBios[interview.lawyer as keyof typeof authorBios]?.image} 
                  alt={interview.lawyer} 
                  className="w-4 h-4 rounded-full object-cover border border-[#B8860B]/20" 
                />
              ) : (
                <div className="w-4 h-4 rounded-full bg-[#B8860B]/10 flex items-center justify-center text-[#B8860B] border border-[#B8860B]/20">
                  <svg className="w-2.5 h-2.5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                  </svg>
                </div>
              )}
              <span className="font-extrabold text-[#B8860B]">{interview.lawyer}</span>
            </span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-[176px_1fr_256px] gap-6 items-start">
          
          {/* Left Sidebar - TOC (Desktop) */}
          <div className="hidden lg:block sticky top-24">
             <TableOfContents 
               sections={tocSections} 
               activeId={activeId}
               onLinkClick={handleLinkClick}
               orientation="vertical" 
             />
          </div>

          {/* Main Content Area */}
          <div className="min-w-0">
            {/* TOC (Mobile) */}
            <div className="lg:hidden mb-8">
               <TableOfContents 
                 sections={tocSections} 
                 activeId={activeId}
                 onLinkClick={handleLinkClick}
               />
            </div>

            <div className="bg-white p-5 md:p-10 rounded-2xl border border-slate-100 shadow-3xs space-y-10">
              {/* Article Content */}
              <div 
                className="prose max-w-none text-slate-700 leading-relaxed tiptap-content text-sm sm:text-[14px] md:text-[15px]"
                dangerouslySetInnerHTML={{ __html: processedContent }}
              />

              {/* Tiptap Styles */}
              <style jsx global>{`
                .tiptap-content h1 { font-size: 1.6em; font-weight: 800; margin-top: 1.2em; margin-bottom: 0.6em; color: #2D2219; }
                .tiptap-content h2 { font-size: 1.4em; font-weight: 800; margin-top: 1.2em; margin-bottom: 0.6em; color: #2D2219; scroll-margin-top: 80px; }
                .tiptap-content h3 { font-size: 1.2em; font-weight: 800; margin-top: 1em; margin-bottom: 0.5em; color: #2D2219; scroll-margin-top: 80px; }
                .tiptap-content p { margin-bottom: 1em; line-height: 1.65; color: #334155; }
                .tiptap-content ul { list-style-type: disc; padding-left: 1.25em; margin-bottom: 1em; }
                .tiptap-content ol { list-style-type: decimal; padding-left: 1.25em; margin-bottom: 1em; }
                .tiptap-content li { margin-bottom: 0.4em; color: #334155; line-height: 1.65; }
                .tiptap-content blockquote { border-left: 3px solid #D2A02A; padding-left: 1rem; font-style: italic; color: #475569; background: #fffaf0; padding: 1rem; border-radius: 0.5rem; }
                .tiptap-content img { border-radius: 0.5rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05); margin: 1.5rem 0; max-width: 100%; height: auto; }
                .tiptap-content a { color: #B8860B; text-decoration: underline; font-weight: 600; }
                .tiptap-content table { width: 100%; border-collapse: collapse; margin: 1.5rem 0; font-size: 0.9em; }
                .tiptap-content th { background: #f8fafc; padding: 0.7rem; text-align: left; font-weight: 700; border: 1px solid #e2e8f0; color: #0f172a; }
                .tiptap-content td { padding: 0.7rem; border: 1px solid #e2e8f0; color: #334155; }
              `}</style>
              
              {/* Share Section */}
              <div className="border-t border-slate-100 pt-6 mt-6">
                <div className="flex items-center justify-between flex-wrap gap-3">
                  <span className="font-extrabold text-slate-900 text-xs">Share this analysis:</span>
                  <div className="flex space-x-2">
                    <button onClick={() => handleShare('facebook')} className="w-8 h-8 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-500 hover:text-[#B8860B] hover:bg-[#B8860B]/5 hover:border-[#B8860B]/20 transition-all cursor-pointer">
                      <span className="sr-only">Facebook</span>
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                    </button>
                    <button onClick={() => handleShare('twitter')} className="w-8 h-8 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-500 hover:text-[#B8860B] hover:bg-[#B8860B]/5 hover:border-[#B8860B]/20 transition-all cursor-pointer">
                      <span className="sr-only">Twitter</span>
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
                    </button>
                    <button onClick={() => handleShare('linkedin')} className="w-8 h-8 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-500 hover:text-[#B8860B] hover:bg-[#B8860B]/5 hover:border-[#B8860B]/20 transition-all cursor-pointer">
                      <span className="sr-only">LinkedIn</span>
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                    </button>
                  </div>
                </div>
              </div>

              {/* Reviews Section */}
              {interview.reviews && interview.reviews.length > 0 && (
                <section id="reviews" className="scroll-mt-24 border-t border-slate-100 pt-10">
                  <h2 className="text-xl sm:text-2xl font-extrabold text-[#2D2219] tracking-tight mb-6">Verified Client Reviews</h2>
                  <div className="grid md:grid-cols-2 gap-5">
                    {interview.reviews.map((review, idx) => (
                      <div key={idx} className="bg-slate-50/50 p-5 rounded-xl border border-slate-150 relative">
                        <QuoteLeftIcon />
                        <div className="relative z-10 mt-1">
                          <div className="flex items-center mb-3.5 gap-1.5">
                            <div className="flex gap-0.5">
                              {[...Array(5)].map((_, i) => (
                                <StarIcon 
                                  key={i} 
                                  filled={i < review.rating} 
                                />
                              ))}
                            </div>
                            <span className="font-extrabold text-slate-900 text-xs">{review.rating}.0</span>
                          </div>
                          <p className="text-slate-600 italic mb-3.5 text-xs sm:text-sm">"{review.review}"</p>
                          <div className="flex items-center mt-5">
                            <div className="w-7.5 h-7.5 bg-slate-100 rounded-full flex items-center justify-center mr-2.5 border border-slate-200 shadow-3xs">
                              <UserIcon />
                            </div>
                            <p className="font-extrabold text-slate-955 text-xs">{review.name}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* FAQs Section */}
              {interview.faqs && interview.faqs.length > 0 && (
                <section id="faqs" className="scroll-mt-24 border-t border-slate-100 pt-10">
                  <h2 className="text-xl sm:text-2xl font-extrabold text-[#2D2219] tracking-tight mb-6">Frequently Asked Questions</h2>
                  <div className="space-y-3.5">
                    {interview.faqs.map((faq, idx) => {
                      const faqId = `faq-${idx}`;
                      return (
                        <div key={idx} className="border border-slate-150 rounded-xl overflow-hidden shadow-3xs">
                          <button
                            onClick={() => toggleFaq(faqId)}
                            className="flex justify-between items-center w-full text-left p-4 font-extrabold text-slate-900 hover:bg-[#FDFBF7] focus:outline-none transition-colors gap-3"
                          >
                            <span className="flex items-center text-xs sm:text-sm">
                              <span className="text-[#B8860B] mr-2.5">Q.</span>
                              {faq.question}
                            </span>
                            <span className={`transform transition-transform duration-250 flex-shrink-0 ${expandedFaqs.includes(faqId) ? 'rotate-180' : ''}`}>
                              <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                            </span>
                          </button>
                          {expandedFaqs.includes(faqId) && (
                            <div className="px-4 pb-4 pt-0.5 text-slate-600 text-xs sm:text-sm leading-relaxed pl-8 border-t border-slate-50/50 bg-slate-50/20">
                              {faq.answer}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </section>
              )}
            </div>
          </div>

          {/* Right Sidebar - Author & Related Insights */}
          <div className="space-y-6 sticky top-24">
              {/* Author Card */}
              <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-3xs">
                <h3 className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest mb-3 border-b border-slate-50 pb-1.5">Advocate Profile</h3>
                <div className="flex items-center mb-3">
                  <div className="w-13 h-13 rounded-xl overflow-hidden mr-3 bg-[#D4AF37]/10 flex items-center justify-center">
                    {authorBios[interview.lawyer as keyof typeof authorBios]?.image ? (
                      <div className="w-full h-full flex items-end justify-center pt-1.5">
                        <img 
                          src={authorBios[interview.lawyer as keyof typeof authorBios]?.image}
                          alt={interview.lawyer}
                          className="h-full w-auto object-contain"
                        />
                      </div>
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-[#B8860B]/70">
                        <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                        </svg>
                      </div>
                    )}
                  </div>
                  <div>
                    <h4 className="font-extrabold text-slate-955 text-xs sm:text-sm leading-snug">{interview.lawyer}</h4>
                    <span className="text-[8px] text-green-700 font-extrabold bg-green-50 border border-green-200/50 px-1.5 py-0.5 rounded mt-0.5 inline-block">Verified Advocate</span>
                  </div>
                </div>
                <p className="text-[10px] sm:text-xs text-slate-600 leading-relaxed mb-3">
                  {authorBios[interview.lawyer as keyof typeof authorBios]?.description || `Advocate specializing in ${interview.specialization || "direct mediation, arbitration, and civil representation"}. Registered legal counsel representing client interests.`}
                </p>
                <a 
                  href={interview.linkedinUrl || authorBios[interview.lawyer as keyof typeof authorBios]?.linkedInUrl || "https://www.linkedin.com/company/ama-legal-solutions/"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1 w-full border border-slate-200 text-slate-700 hover:border-[#B8860B] hover:text-[#B8860B] hover:bg-[#B8860B]/3 text-center py-2 rounded-xl text-[10px] font-extrabold transition-all shadow-3xs cursor-pointer"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                  <span>Connect on LinkedIn</span>
                </a>
              </div>

              {/* Related Lawyer Insights Sidebar Card */}
              {relatedInterviews && relatedInterviews.length > 0 && (
                <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-3xs">
                  <h3 className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest mb-4 border-b border-slate-50 pb-1.5">Related Insights</h3>
                  <div className="space-y-4.5">
                    {relatedInterviews.map((item) => (
                      <Link key={item._id} href={`/interviews/${item.slug}`} className="group flex gap-3 items-center">
                        {item.image && (
                          <div className="w-[84px] h-[56px] rounded-lg overflow-hidden flex-shrink-0 bg-[#2D2219] border border-slate-150 relative flex items-center justify-center shadow-3xs">
                            {/* Blurred background filler */}
                            <img
                              src={getValidImageSrc(item.image)}
                              alt=""
                              className="absolute inset-0 w-full h-full object-cover blur-xs scale-110 opacity-30 select-none pointer-events-none"
                            />
                            {/* Foreground contained image */}
                            <img 
                              src={getValidImageSrc(item.image)} 
                              alt="" 
                              className="relative z-10 max-w-full max-h-full h-full w-auto object-contain group-hover:scale-103 transition-transform duration-300"
                              onError={handleImageError}
                            />
                          </div>
                        )}
                        <div className="min-w-0 flex-grow">
                          <h4 className="text-[11px] font-bold text-slate-900 group-hover:text-[#B8860B] transition-colors line-clamp-2 leading-snug">
                            {item.title}
                          </h4>
                          <span className="text-[9px] text-slate-400 font-semibold block mt-1">
                            {item.lawyer} • {item.date}
                          </span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
          </div>
        </div>
      </div>
    </div>
  );
});

export default InterviewDetail;
