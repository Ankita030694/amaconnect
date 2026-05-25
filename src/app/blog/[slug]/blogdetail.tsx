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

export interface Blog {
  _id: string;
  title: string;
  subtitle?: string;
  image: string;
  date: string;
  description: string;
  slug: string;
  author: string;
  metaTitle?: string;
  metaDescription?: string;
  faqs?: FAQ[];
  reviews?: Review[];
  created?: number;
}

interface BlogDetailProps {
  blog: Blog;
  relatedBlogs: Blog[];
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
function TableOfContents({ sections, orientation = "horizontal" }: { sections: { id: string; title: string }[]; orientation?: "horizontal" | "vertical" }) {
  if (!sections || sections.length === 0) return null;

  if (orientation === "vertical") {
    return (
      <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-3xs">
        <h4 className="text-xs font-extrabold text-slate-900 uppercase tracking-wider mb-4 border-b border-slate-50 pb-2">On This Page</h4>
        <ul className="space-y-3">
          {sections.map((section, idx) => (
            <li key={idx}>
              <a
                href={`#${section.id}`}
                className="text-xs font-bold text-slate-500 hover:text-[#B8860B] transition-colors block leading-snug"
              >
                {section.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  return (
    <div className="bg-[#FDFBF7] p-5 rounded-2xl border border-[#D4AF37]/20 shadow-3xs mb-8">
      <h4 className="text-xs font-extrabold text-[#B8860B] uppercase tracking-wider mb-3">On This Page</h4>
      <div className="flex flex-wrap gap-x-4 gap-y-2">
        {sections.map((section, idx) => (
          <a
            key={idx}
            href={`#${section.id}`}
            className="text-xs font-bold text-slate-600 hover:text-[#B8860B] transition-colors"
          >
            # {section.title}
          </a>
        ))}
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

const BlogDetail = memo(function BlogDetail({ blog, relatedBlogs }: BlogDetailProps) {
  const [currentUrl, setCurrentUrl] = useState('');
  const [expandedFaqs, setExpandedFaqs] = useState<string[]>([]);

  // Process content for TOC
  const { content: processedContent, sections: tocSections } = useMemo(() => {
    return processContent(blog.description);
  }, [blog.description]);

  useEffect(() => {
    setCurrentUrl(window.location.href);
  }, []);

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
    <div className="min-h-screen bg-[#F5F2EB] text-gray-800 pb-16">
      {/* Hero Image Section */}
      <div className="w-full h-[320px] md:h-[650px] relative bg-[#413832]/90 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-slate-900/10 z-0" />
        <img
          src={blog.image || "/logo_qa.png"}
          alt={blog.title}
          className="h-full w-full object-cover z-10"
        />
      </div>

      <div className="container mx-auto px-4 max-w-[1600px] py-8">
        <Breadcrumbs items={breadcrumbItems} />

        {/* Header Content */}
        <div className="text-center mb-12 max-w-4xl mx-auto mt-8">
          <span className="px-3.5 py-1.5 bg-[#B8860B]/10 text-[#B8860B] rounded-full text-xs font-extrabold uppercase tracking-wider">
            Verified Legal Insight
          </span>
          <h1 className="text-3xl md:text-5xl font-black mb-6 leading-tight text-gray-900 mt-4">
            {blog.title}
          </h1>
          {blog.subtitle && (
            <p className="text-xl md:text-2xl mb-6 text-slate-500 font-semibold italic">
              {blog.subtitle}
            </p>
          )}
          <div className="flex justify-center items-center space-x-4 text-sm md:text-base text-gray-500 font-medium">
            <span>{blog.date}</span>
            <span>•</span>
            <span className="text-[#B8860B] font-bold">By {blog.author}</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr_280px] gap-8 items-start">

          {/* Left Sidebar - TOC (Desktop) */}
          <div className="hidden lg:block sticky top-24">
            <TableOfContents sections={tocSections} orientation="vertical" />
          </div>

          {/* Main Content Area */}
          <div className="min-w-0">
            {/* TOC (Mobile) */}
            <div className="lg:hidden mb-8">
              <TableOfContents sections={tocSections} />
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
                          <div className="relative h-44 bg-[#413832]/85 flex items-end justify-center overflow-hidden pt-4">
                            <img
                              src={item.image || '/logo_qa.png'}
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

          {/* Right Sidebar - Author & CTA */}
          <div className="space-y-8 sticky top-24">
            {/* Author Card */}
            <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-3xs">
              <h3 className="text-xs font-extrabold text-slate-400 uppercase tracking-widest mb-4 border-b border-slate-50 pb-2">Author Profile</h3>
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 rounded-2xl overflow-hidden mr-4 bg-[#D4AF37]/10 flex items-end justify-center pt-2">
                  <img
                    src={authorBios[blog.author as keyof typeof authorBios]?.image || "/anujbhiya.png"}
                    alt={blog.author}
                    className="h-full w-auto object-contain"
                  />
                </div>
                <div>
                  <h4 className="font-extrabold text-slate-950 text-sm sm:text-base leading-snug">{blog.author}</h4>
                  <span className="text-[10px] text-green-700 font-extrabold bg-green-50 border border-green-200/50 px-1.5 py-0.5 rounded-md mt-1 inline-block">Verified Expert</span>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                {authorBios[blog.author as keyof typeof authorBios]?.description || "Advocate specializing in direct mediation, arbitration, and civil representation. Registered with the Supreme Court bar."}
              </p>
              <a
                href={authorBios[blog.author as keyof typeof authorBios]?.linkedInUrl || "https://www.linkedin.com/company/ama-legal-solutions/"}
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

export default BlogDetail;
