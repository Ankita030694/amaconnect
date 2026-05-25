'use client'
import React, { useEffect, useState, useMemo, memo } from 'react';
import Link from 'next/link';

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
}

interface InterviewDetailProps {
  interview: LawyerInterview;
  relatedInterviews: LawyerInterview[];
}

const authorBios = {
  "Anuj Anand Malik": {
    name: "Anuj Anand Malik",
    description: "Anuj Anand Malik, Founder of AMA Legal Solutions, is a trusted advocate, loan settlement expert, legal advisor, and banking lawyer. With over a decade of experience in loan settlement, corporate law, financial disputes, and compliance, he leads a result-driven law firm based in India that helps individuals, startups, and businesses achieve legal and financial stability.",
    image: "/anujbhiya.png",
    linkedInUrl: "https://www.linkedin.com/in/iamanujmalik/"
  },
  "Shrey Arora": {
    name: "Shrey Arora",
    description: "Legal professional specializing in corporate law and regulatory compliance. Brings a strategic approach to legal advisory with extensive experience in contract negotiation and business law.",
    image: "/shreychad.svg",
    linkedInUrl: "https://www.linkedin.com/in/shrey-arora-b0487b67/"
  },
  "Adv. Ashish Bhay": {
    name: "Adv. Ashish Bhay",
    description: "Advocate Ashish Bhay is a distinguished labor law practitioner, employment mediator, and veteran service rights expert. With over a decade of dedication at the Bar, he has represented hundreds of clients in employee wage settlements, industrial relationship negotiations, and high-stakes service tribunals.",
    image: "/ashishbhay.png",
    linkedInUrl: "https://www.linkedin.com/company/ama-legal-solutions/"
  },
  "Lavanya Dhawan": {
    name: "Lavanya Dhawan",
    description: "Advocate specializing in direct mediation, arbitration, and civil representation. Registered with the Supreme Court bar.",
    image: "", // Triggers generic blank user silhouette fallback
    linkedInUrl: "https://www.linkedin.com/company/ama-legal-solutions/"
  }
};

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
      <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-3xs">
        <h4 className="text-xs font-extrabold text-slate-900 uppercase tracking-wider mb-4 border-b border-slate-50 pb-2">On This Page</h4>
        <ul className="space-y-3">
          {sections.map((section, idx) => {
            const isActive = section.id === activeId;
            return (
              <li key={idx}>
                <a 
                  href={`#${section.id}`} 
                  onClick={(e) => onLinkClick(e, section.id)}
                  className={`text-xs font-bold transition-all block leading-snug pl-2 border-l-2 ${
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
    <div className="bg-[#FDFBF7] p-5 rounded-2xl border border-[#D4AF37]/20 shadow-3xs mb-8">
      <h4 className="text-xs font-extrabold text-[#B8860B] uppercase tracking-wider mb-3">On This Page</h4>
      <div className="flex flex-wrap gap-x-4 gap-y-2">
        {sections.map((section, idx) => {
          const isActive = section.id === activeId;
          return (
            <a 
              key={idx}
              href={`#${section.id}`}
              onClick={(e) => onLinkClick(e, section.id)}
              className={`text-xs font-bold transition-all border-b pb-0.5 ${
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

  // 1. Decode &amp;amp; and &amp;
  let sanitized = html
    .replace(/&amp;amp;/g, "&")
    .replace(/&amp;/g, "&");

  // 2. Strip prefix "Executive Summary & Overview" or "Executive Summary" if it occurs at the start of any HTML tags or text at the very beginning
  sanitized = sanitized.replace(/^((?:<[^>]+>)*)\s*(Executive\s+Summary\s*(?:&|and)?\s*Overview\s*[\-:]*\s*)/i, "$1");
  sanitized = sanitized.replace(/^((?:<[^>]+>)*)\s*(Executive\s+Summary\s*[\-:]*\s*)/i, "$1");

  const sections: { id: string, title: string }[] = [];
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
      const yOffset = -110; // offset for sticky navbar + spacing
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
      const scrollPosition = window.scrollY + 160; // Offset for sticky header and top margin

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
    <div className="min-h-screen bg-[#F5F2EB] text-gray-800 pb-16">
      {/* Hero Image Section */}
      <div className={`w-full relative ${interview.bgColor || 'bg-[#1a202c]'} overflow-hidden`}>
        <div className="absolute inset-0 bg-slate-900/10 z-10 pointer-events-none" />
        <img
          src={interview.image || "/ashishbhay.png"}
          alt={interview.lawyer}
          className="w-full h-auto z-0 block"
        />
      </div>

      <div className="container mx-auto px-4 max-w-[1600px] py-8">
        <Breadcrumbs items={breadcrumbItems} />
        
        {/* Header Content */}
        <div className="text-center mb-12 max-w-4xl mx-auto mt-8">
          <span className="px-3.5 py-1.5 bg-[#B8860B]/10 text-[#B8860B] rounded-full text-xs font-extrabold uppercase tracking-wider">
            Verified Interview Guide
          </span>
          <h1 className="text-3xl md:text-5xl font-black mb-6 leading-tight text-gray-900 mt-4">
            {interview.title}
          </h1>
          <p className="text-xl md:text-2xl mb-6 text-slate-500 font-semibold italic">
            {interview.specialization}
          </p>
          <div className="flex justify-center items-center space-x-4 text-sm md:text-base text-gray-500 font-medium">
            <span>{interview.date}</span>
            <span>•</span>
            <span>{interview.duration || "5 min read"}</span>
            <span>•</span>
            <span className="text-[#B8860B] font-bold">{interview.lawyer}</span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr_280px] gap-8 items-start">
          
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

            <div className="bg-white p-6 md:p-12 rounded-3xl border border-slate-100 shadow-3xs space-y-12">
              {/* Article Content */}
              <div 
                className="prose prose-lg max-w-none text-slate-700 leading-relaxed tiptap-content"
                dangerouslySetInnerHTML={{ __html: processedContent }}
              />

              {/* Tiptap Styles */}
              <style jsx global>{`
                .tiptap-content h1 { font-size: 2em; font-weight: 900; margin-top: 1.5em; margin-bottom: 0.8em; color: #0f172a; }
                .tiptap-content h2 { font-size: 1.75em; font-weight: 800; margin-top: 1.5em; margin-bottom: 0.8em; color: #0f172a; scroll-margin-top: 100px; }
                .tiptap-content h3 { font-size: 1.5em; font-weight: 800; margin-top: 1.2em; margin-bottom: 0.6em; color: #1e293b; scroll-margin-top: 100px; }
                .tiptap-content p { margin-bottom: 1.2em; line-height: 1.8; color: #334155; }
                .tiptap-content ul { list-style-type: disc; padding-left: 1.5em; margin-bottom: 1.2em; }
                .tiptap-content ol { list-style-type: decimal; padding-left: 1.5em; margin-bottom: 1.2em; }
                .tiptap-content li { margin-bottom: 0.5em; color: #334155; }
                .tiptap-content blockquote { border-left: 4px solid #D2A02A; padding-left: 1.2em; font-style: italic; color: #475569; background: #fffaf0; padding: 1.25rem; border-radius: 0.75rem; }
                .tiptap-content img { border-radius: 0.75rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05); margin: 2rem 0; max-width: 100%; height: auto; }
                .tiptap-content a { color: #B8860B; text-decoration: underline; font-weight: 600; }
                .tiptap-content table { width: 100%; border-collapse: collapse; margin: 2rem 0; font-size: 0.95em; }
                .tiptap-content th { background: #f8fafc; padding: 0.85rem; text-align: left; font-weight: 700; border: 1px solid #e2e8f0; color: #0f172a; }
                .tiptap-content td { padding: 0.85rem; border: 1px solid #e2e8f0; color: #334155; }
              `}</style>
              
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
              {interview.reviews && interview.reviews.length > 0 && (
                <section id="reviews" className="scroll-mt-32 border-t border-slate-100 pt-12">
                  <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-8">Verified Client Reviews</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    {interview.reviews.map((review, idx) => (
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
                            <p className="font-extrabold text-slate-950 text-sm">{review.name}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* FAQs Section */}
              {interview.faqs && interview.faqs.length > 0 && (
                <section id="faqs" className="scroll-mt-32 border-t border-slate-100 pt-12">
                  <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-8">Frequently Asked Questions</h2>
                  <div className="space-y-4">
                    {interview.faqs.map((faq, idx) => {
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

              {/* Related Interviews */}
              {relatedInterviews.length > 0 && (
                <section className="border-t border-slate-100 pt-12">
                  <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-8">Related Lawyer Insights</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    {relatedInterviews.map((item) => (
                      <Link key={item._id} href={`/interviews/${item.slug}`} className="group">
                        <div className="bg-white border border-slate-150 rounded-2xl overflow-hidden hover:shadow-lg transition-all h-full flex flex-col">
                          <div className={`relative h-44 ${item.bgColor || 'bg-slate-100'} flex items-end justify-center overflow-hidden pt-4`}>
                            <img 
                              src={item.image || '/ashishbhay.png'} 
                              alt={item.title}
                              className="h-full w-auto object-contain group-hover:scale-103 transition-transform duration-500"
                            />
                            <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-xs rounded-lg px-2.5 py-1 text-xs font-bold text-[#B8860B] border border-slate-100 shadow-3xs">
                              {item.date}
                            </div>
                          </div>
                          <div className="p-5 flex-grow flex flex-col justify-between">
                            <div>
                              <h3 className="text-base sm:text-lg font-extrabold text-slate-900 mb-2 group-hover:text-[#B8860B] transition-colors line-clamp-2">
                                {item.title}
                              </h3>
                              <p className="text-xs text-slate-400 font-semibold mb-4 uppercase">
                                {item.lawyer} • {item.specialization}
                              </p>
                            </div>
                            <span className="text-[#B8860B] font-extrabold text-xs sm:text-sm flex items-center mt-auto">
                              Read Analysis <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
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

          {/* Right Sidebar - Author & CTA */}
          <div className="space-y-8 sticky top-24">
              {/* Author Card */}
              <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-3xs">
                <h3 className="text-xs font-extrabold text-slate-400 uppercase tracking-widest mb-4 border-b border-slate-50 pb-2">Advocate Profile</h3>
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 rounded-2xl overflow-hidden mr-4 bg-[#D4AF37]/10 flex items-center justify-center">
                    {authorBios[interview.lawyer as keyof typeof authorBios]?.image ? (
                      <div className="w-full h-full flex items-end justify-center pt-2">
                        <img 
                          src={authorBios[interview.lawyer as keyof typeof authorBios]?.image}
                          alt={interview.lawyer}
                          className="h-full w-auto object-contain"
                        />
                      </div>
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-[#B8860B]/70">
                        <svg className="w-9 h-9" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                        </svg>
                      </div>
                    )}
                  </div>
                  <div>
                    <h4 className="font-extrabold text-slate-950 text-sm sm:text-base leading-snug">{interview.lawyer}</h4>
                    <span className="text-[10px] text-green-700 font-extrabold bg-green-50 border border-green-200/50 px-1.5 py-0.5 rounded-md mt-1 inline-block">Verified Advocate</span>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                  {authorBios[interview.lawyer as keyof typeof authorBios]?.description || "Advocate specializing in direct mediation, arbitration, and civil representation. Registered with the Supreme Court bar."}
                </p>
                <a 
                  href={authorBios[interview.lawyer as keyof typeof authorBios]?.linkedInUrl || "https://www.linkedin.com/company/ama-legal-solutions/"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full border border-slate-200 text-slate-700 hover:border-[#B8860B] hover:text-[#B8860B] hover:bg-[#B8860B]/3 text-center py-2.5 rounded-xl text-xs font-extrabold transition-all shadow-3xs cursor-pointer"
                >
                  Connect on LinkedIn
                </a>
              </div>

              {/* Contact Card */}
              <div className="bg-[#413832] p-6 rounded-3xl shadow-md text-white border border-[#D4AF37]/20 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#D4AF37]/10 rounded-full -mr-8 -mt-8 pointer-events-none" />
                <h3 className="text-lg font-black mb-3">Need Legal Advice?</h3>
                <p className="text-slate-300 mb-6 text-xs sm:text-sm leading-relaxed">
                  Get specialized, strategic advocate counsel directly from verified experts at AMA Legal Solutions.
                </p>
                <a 
                  href="tel:+918700343611" 
                  className="block w-full bg-[#B8860B] hover:bg-[#9E7307] text-white text-center py-3 rounded-xl font-bold text-xs sm:text-sm transition-colors mb-4 shadow-3xs cursor-pointer"
                >
                  Call +91-8700343611
                </a>
                <Link 
                  href="/contact" 
                  className="block w-full border border-white/20 hover:bg-white hover:text-[#413832] text-white text-center py-3 rounded-xl font-bold text-xs sm:text-sm transition-all cursor-pointer"
                >
                  Request Callback
                </Link>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
});

export default InterviewDetail;
