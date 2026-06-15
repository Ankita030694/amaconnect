'use client'
import React, { useEffect, useState, useMemo, memo } from 'react';
import Link from 'next/link';

// Custom inline SVG icons for premium rendering and absolute reliability
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

export interface DraftItem {
  id: number;
  title: string;
  category: string;
  subCategory: string;
  fileName: string;
  filePath: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Review {
  name: string;
  rating: number;
  review: string;
}

interface DraftDetailProps {
  draft: DraftItem;
  content: string;
  preview: string;
  faqs: FAQ[];
  reviews: Review[];
}

// List of Indian states and union territories (sorted alphabetically)
const indianStatesAndUTs = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
  "Andaman and Nicobar Islands",
  "Chandigarh",
  "Dadra and Nagar Haveli and Daman and Diu",
  "Delhi",
  "Jammu and Kashmir",
  "Ladakh",
  "Lakshadweep",
  "Puducherry"
].sort();

const authorBios = {
  "Anuj Anand Malik": {
    name: "Anuj Anand Malik",
    description: "Anuj Anand Malik, Founder of AMA Legal Solutions, is a trusted advocate, loan settlement expert, legal advisor, and banking lawyer. With over a decade of experience in loan settlement, corporate law, financial disputes, and compliance, he leads a result-driven law firm based in India that helps individuals, startups, and businesses achieve legal and financial stability.",
    image: "/anujbhiya.png",
    linkedInUrl: "https://www.linkedin.com/in/iamanujmalik/"
  }
};

// Helper to encode download paths
function encodeFilePath(filePath: string): string {
  return filePath
    .split("/")
    .map((segment) => encodeURIComponent(segment))
    .join("/");
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

  // Replace h2 and h3 tags with dynamic scroll IDs
  const modifiedContent = html.replace(/<(h[23])(.*?)>(.*?)<\/\1>/g, (match, tag, attrs, title) => {
    const cleanTitle = title.replace(/<[^>]*>/g, '').trim();
    const id = cleanTitle.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');

    sections.push({ id, title: cleanTitle });

    if (attrs.includes('id=')) {
      return match;
    }

    return `<${tag} id="${id}"${attrs}>${title}</${tag}>`;
  });

  return { content: modifiedContent, sections };
};

const DraftDetail = memo(function DraftDetail({ draft, content, preview, faqs, reviews }: DraftDetailProps) {
  const [expandedFaqs, setExpandedFaqs] = useState<string[]>([]);
  const [downloadToast, setDownloadToast] = useState(false);

  // Lead Modal & Checkout Flow States
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    state: "",
    message: ""
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmittingLead, setIsSubmittingLead] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  // Clean the title for headers
  const cleanDraftTitle = useMemo(() => {
    return draft.title.replace(/\s\d+$/, "").replace(/\.\w+$/, "").trim();
  }, [draft.title]);

  // Process content for TOC
  const { content: processedContent, sections: contentSections } = useMemo(() => {
    return processContent(content);
  }, [content]);

  // Process preview for TOC
  const { content: processedPreview, sections: previewSections } = useMemo(() => {
    return processContent(preview);
  }, [preview]);

  // Merge TOC sections
  const tocSections = useMemo(() => {
    return [...contentSections, ...previewSections];
  }, [contentSections, previewSections]);

  // Extract the legible heading and description from the preview to keep them outside the blur
  const { headerHtml, bodyHtml } = useMemo(() => {
    if (!processedPreview) return { headerHtml: '', bodyHtml: '' };

    // Look for the end of the first paragraph
    const pEndIndex = processedPreview.indexOf('</p>');
    if (pEndIndex !== -1) {
      const headerHtml = processedPreview.substring(0, pEndIndex + 4);
      const bodyHtml = processedPreview.substring(pEndIndex + 4);
      return { headerHtml, bodyHtml };
    }

    return { headerHtml: '', bodyHtml: processedPreview };
  }, [processedPreview]);

  const toggleFaq = (faqId: string) => {
    setExpandedFaqs(prev =>
      prev.includes(faqId)
        ? prev.filter(id => id !== faqId)
        : [...prev, faqId]
    );
  };

  const handleDownload = () => {
    const encodedPath = encodeFilePath(draft.filePath);
    const link = document.createElement("a");
    link.href = encodedPath;
    link.download = draft.fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setDownloadToast(true);
    setTimeout(() => setDownloadToast(false), 4000);
  };

  // Form Field Changers with Sanitization
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const filteredValue = value.replace(/[^a-zA-Z\s]/g, "");
    setFormData(prev => ({ ...prev, name: filteredValue }));
    if (errors.name) {
      setErrors(prev => ({ ...prev, name: "" }));
    }
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setFormData(prev => ({ ...prev, email: value }));
    if (errors.email) {
      setErrors(prev => ({ ...prev, email: "" }));
    }
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const filteredValue = value.replace(/\D/g, "").slice(0, 10);
    setFormData(prev => ({ ...prev, phone: filteredValue }));
    if (errors.phone) {
      setErrors(prev => ({ ...prev, phone: "" }));
    }
  };

  const handleStateChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setFormData(prev => ({ ...prev, state: value }));
    if (errors.state) {
      setErrors(prev => ({ ...prev, state: "" }));
    }
  };

  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setFormData(prev => ({ ...prev, message: value }));
    if (errors.message) {
      setErrors(prev => ({ ...prev, message: "" }));
    }
  };

  // Validation Logic
  const validateForm = (): boolean => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        newErrors.email = "Please enter a valid email address";
      }
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (formData.phone.length !== 10) {
      newErrors.phone = "Phone number must be exactly 10 digits";
    }
    if (!formData.state) {
      newErrors.state = "Please select your state or union territory";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmittingLead(true);
    setSubmitError(null);

    try {
      const payload = {
        ...formData,
        draftTitle: cleanDraftTitle,
        draftFileName: draft.fileName,
        draftFilePath: draft.filePath,
        sourceUrl: typeof window !== "undefined" ? window.location.href : ""
      };

      const response = await fetch("/api/draft-payments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || "Failed to submit lead registration.");
      }

      // Store lead ID and draft references to localStorage
      localStorage.setItem("current_payment_lead_id", data.leadId);
      localStorage.setItem("pending_download_path", draft.filePath);
      localStorage.setItem("pending_download_name", draft.fileName);

      // Directly redirect to PayU gateway
      window.location.href = "https://u.payu.in/Arn7huSpmGMe";
    } catch (err: any) {
      console.error("Lead submission error:", err);
      setSubmitError(err.message || "An unexpected error occurred. Please try again.");
    } finally {
      setIsSubmittingLead(false);
    }
  };

  const openPaymentPopup = () => {
    setIsPaymentModalOpen(true);
    setSubmitError(null);
    setFormData({
      name: "",
      email: "",
      phone: "",
      state: "",
      message: ""
    });
    setErrors({});
  };

  const lastDot = draft.fileName.lastIndexOf('.');
  const slug = lastDot !== -1 ? draft.fileName.substring(0, lastDot).toLowerCase().trim() : draft.fileName.toLowerCase().trim();

  const breadcrumbItems = [
    { label: "Drafts", href: "/drafts" },
    { label: cleanDraftTitle, href: `/drafts/${slug}` },
  ];


  return (
    <div className="min-h-screen bg-[#F5F2EB] text-gray-800 pb-16">
      {/* Toast Notification */}
      {downloadToast && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#1C1A17] text-white px-5 py-4 rounded-[14px] shadow-2xl flex items-center gap-3 border border-[#3D3830] animate-in fade-in slide-in-from-bottom-5 duration-300 max-w-sm">
          <svg className="w-5 h-5 text-[#C69214] shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <div className="flex flex-col min-w-0">
            <span className="text-xs font-bold text-[#C69214] uppercase tracking-wider mb-0.5">Downloading</span>
            <span className="text-sm text-gray-300 font-medium truncate">{draft.fileName}</span>
          </div>
        </div>
      )}

      {/* Hero Header Section - Perfectly Centered Text and Badges */}
      <div className="w-full bg-[#1C1A17] text-white py-16 md:py-40 border-b border-[#3D3830] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(198,146,20,0.12),transparent_60%)] pointer-events-none" />
        <div className="container mx-auto px-4 max-w-[1600px]">
          <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
            <div className="flex flex-wrap justify-center items-center gap-2 mb-6">
              <span className="px-3 py-1 bg-[#C69214]/20 border border-[#C69214]/30 text-[#C69214] rounded-full text-xs font-extrabold uppercase tracking-wider">
                {draft.category}
              </span>
              <span className="px-3 py-1 bg-white/10 text-gray-300 rounded-full text-xs font-bold uppercase tracking-wider">
                {draft.subCategory}
              </span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight select-none text-center">
              {cleanDraftTitle}
            </h1>
            <p className="text-gray-400 text-sm sm:text-base md:text-lg max-w-2xl leading-relaxed mx-auto text-center">
              Exhaustive drafting manual, execution checklists, stamp duty protocols, and a ready-to-use professional template for the {cleanDraftTitle}.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-[1600px] py-8">
        <Breadcrumbs items={breadcrumbItems} />

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

              {/* Ready-to-Use Printable Legal Draft Section with Elegant Premium CSS Paywall Blur */}
              {bodyHtml && (
                <div className="scroll-mt-32 border-t border-slate-100 pt-12">
                  {/* Legible Section Title and Description (Good for UX and SEO Bot Crawlability) */}
                  <div
                    className="prose prose-lg max-w-none text-slate-700 leading-relaxed tiptap-content"
                    dangerouslySetInnerHTML={{ __html: headerHtml }}
                  />

                  {/* Blurred Template Card & Locked Overlay */}
                  <div className="relative rounded-3xl border border-slate-200 shadow-sm overflow-hidden mt-6">
                    {/* Locked Paywall Overlay (Premium Gold & Charcoal Glassmorphism UI) */}
                    <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-white/35 backdrop-blur-[6px] p-6 sm:p-8 text-center">
                      <div className="bg-white/95 border border-[#C69214]/20 p-8 rounded-3xl shadow-2xl max-w-md backdrop-blur-md flex flex-col items-center transform transition-all duration-350 hover:scale-[1.01]">
                        <div className="w-14 h-14 bg-amber-50 rounded-full flex items-center justify-center mb-4 border border-amber-200 shadow-3xs animate-pulse">
                          <svg className="w-6 h-6 text-[#C69214]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                          </svg>
                        </div>

                        <span className="px-3 py-1 bg-[#C69214]/15 text-[#C69214] border border-[#C69214]/25 rounded-full text-[10px] font-black uppercase tracking-widest mb-3">
                          Premium Template Locked
                        </span>

                        <h3 className="text-xl font-black text-gray-900 mb-2 leading-tight">
                          Unlock Complete Template
                        </h3>

                        <p className="text-gray-500 text-xs sm:text-sm leading-relaxed mb-6">
                          Get immediate access to the complete, fully customizable MS Word (.docx) version of this <strong>{cleanDraftTitle}</strong>, formatted cleanly for legal use.
                        </p>

                        <div className="w-full space-y-3">
                          <button
                            onClick={openPaymentPopup}
                            className="w-full bg-green-500 hover:bg-green-600 text-white py-3.5 px-6 rounded-xl font-bold text-sm shadow-md transition-all active:scale-[0.98] cursor-pointer flex justify-center items-center gap-2 group animate-pulse"
                          >
                            <svg className="w-4 h-4 shrink-0 transition-transform duration-250 group-hover:translate-y-0.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                            </svg>
                            Get @₹129
                          </button>


                          <p className="text-[10px] text-gray-400 font-medium">
                            Instant Secure Download • Fully Editable & Printable
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Blurred Draft Markup (Fully crawlable in SSR source code for maximum SEO indexation) */}
                    <div className="filter blur-[8px] opacity-35 select-none pointer-events-none p-6 sm:p-12 bg-white tiptap-content">
                      <div dangerouslySetInnerHTML={{ __html: bodyHtml }} />
                    </div>
                  </div>
                </div>
              )}

              {/* Styles */}
              <style jsx global>{`
                .tiptap-content h1 { font-size: 2em; font-weight: 900; margin-top: 1.5em; margin-bottom: 0.8em; color: #1c1a17; }
                .tiptap-content h2 { font-size: 1.75em; font-weight: 800; margin-top: 1.5em; margin-bottom: 0.8em; color: #1c1a17; scroll-margin-top: 100px; }
                .tiptap-content h3 { font-size: 1.5em; font-weight: 800; margin-top: 1.2em; margin-bottom: 0.6em; color: #2d2a26; scroll-margin-top: 100px; }
                .tiptap-content p { margin-bottom: 1.2em; line-height: 1.8; color: #4a4743; }
                .tiptap-content ul { list-style-type: disc; padding-left: 1.5em; margin-bottom: 1.2em; }
                .tiptap-content ol { list-style-type: decimal; padding-left: 1.5em; margin-bottom: 1.2em; }
                .tiptap-content li { margin-bottom: 0.5em; color: #4a4743; }
                .tiptap-content blockquote { border-left: 4px solid #C69214; padding-left: 1.2em; font-style: italic; color: #5a5752; background: #fffaf0; padding: 1.25rem; border-radius: 0.75rem; }
                .tiptap-content img { border-radius: 0.75rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05); margin: 2rem 0; max-width: 100%; height: auto; }
                .tiptap-content a { color: #C69214; text-decoration: underline; font-weight: 600; }
                .tiptap-content table { width: 100%; border-collapse: collapse; margin: 2rem 0; font-size: 0.95em; }
                .tiptap-content th { background: #faf7f2; padding: 0.85rem; text-align: left; font-weight: 700; border: 1px solid #e7dfd1; color: #1c1a17; }
                .tiptap-content td { padding: 0.85rem; border: 1px solid #e7dfd1; color: #4a4743; }
              `}</style>

              {/* Share Section */}
              <div className="border-t border-slate-100 pt-8 mt-8">
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <span className="font-extrabold text-[#1c1a17] text-sm">Share this legal resource:</span>
                  <div className="flex space-x-3">
                    <button
                      onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`, '_blank')}
                      className="w-10 h-10 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-500 hover:text-[#C69214] hover:bg-[#C69214]/5 hover:border-[#C69214]/20 transition-all cursor-pointer"
                    >
                      <span className="sr-only">Facebook</span>
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                    </button>
                    <button
                      onClick={() => window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(cleanDraftTitle)}&url=${encodeURIComponent(window.location.href)}`, '_blank')}
                      className="w-10 h-10 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-500 hover:text-[#C69214] hover:bg-[#C69214]/5 hover:border-[#C69214]/20 transition-all cursor-pointer"
                    >
                      <span className="sr-only">Twitter</span>
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
                    </button>
                    <button
                      onClick={() => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`, '_blank')}
                      className="w-10 h-10 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-500 hover:text-[#C69214] hover:bg-[#C69214]/5 hover:border-[#C69214]/20 transition-all cursor-pointer"
                    >
                      <span className="sr-only">LinkedIn</span>
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                    </button>
                  </div>
                </div>
              </div>

              {/* Reviews Section */}
              {reviews.length > 0 && (
                <section id="reviews" className="scroll-mt-32 border-t border-slate-100 pt-12">
                  <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-8">Verified Advocate & Client Reviews</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    {reviews.map((review, idx) => (
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
                            <p className="font-extrabold text-slate-800 text-sm">{review.name}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* FAQs Section */}
              {faqs.length > 0 && (
                <section id="faqs" className="scroll-mt-32 border-t border-slate-100 pt-12">
                  <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-8">Frequently Asked Questions</h2>
                  <div className="space-y-4">
                    {faqs.map((faq, idx) => {
                      const faqId = `faq-${idx}`;
                      return (
                        <div key={idx} className="border border-slate-150 rounded-2xl overflow-hidden shadow-3xs">
                          <button
                            onClick={() => toggleFaq(faqId)}
                            className="flex justify-between items-center w-full text-left p-5 font-extrabold text-[#1c1a17] hover:bg-[#FDFBF7] focus:outline-none transition-colors gap-3"
                          >
                            <span className="flex items-center text-sm sm:text-base">
                              <span className="text-[#C69214] mr-3">Q.</span>
                              {faq.question}
                            </span>
                            <span className={`transform transition-transform duration-250 flex-shrink-0 ${expandedFaqs.includes(faqId) ? 'rotate-180' : ''}`}>
                              <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                            </span>
                          </button>
                          {expandedFaqs.includes(faqId) && (
                            <div className="px-5 pb-5 pt-1 text-slate-650 text-sm sm:text-base leading-relaxed pl-10 border-t border-slate-50/50 bg-slate-50/20">
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

          {/* Right Sidebar - Actions, Author & CTA */}
          <div className="space-y-8 sticky top-24">

            {/* Premium Direct Download Card */}
            <div className="bg-[#C69214]/10 border-2 border-[#C69214]/40 p-6 rounded-3xl shadow-3xs flex flex-col items-stretch text-left">
              <div className="w-10 h-10 bg-[#C69214] rounded-xl flex items-center justify-center text-white mb-4">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </div>
              <h4 className="font-extrabold text-[#1c1a17] text-lg leading-snug mb-1">Download Template</h4>
              <p className="text-xs text-gray-500 leading-relaxed mb-5">
                Get the fully editable Microsoft Word (.docx) document instantly. Ready to customize and register.
              </p>
              <button
                onClick={openPaymentPopup}
                className="w-full bg-green-500 hover:bg-green-600 text-white text-center py-3 rounded-xl font-bold text-xs sm:text-sm shadow-md transition-all active:scale-[0.98] cursor-pointer flex justify-center items-center gap-2"
              >
                Get @₹129
              </button>

            </div>



            {/* Contact Card */}
            <div className="bg-[#413832] p-6 rounded-3xl shadow-md text-white border border-[#D4AF37]/20 relative overflow-hidden text-left">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#D4AF37]/10 rounded-full -mr-8 -mt-8 pointer-events-none" />
              <h3 className="text-lg font-black mb-3">Need Legal Advice?</h3>
              <p className="text-slate-300 mb-6 text-xs sm:text-sm leading-relaxed">
                Get specialized, strategic advocate counsel directly from verified experts at AMA Legal Solutions.
              </p>
              <a
                href="tel:+918700343611"
                className="block w-full bg-[#C69214] hover:bg-[#A67B10] text-white text-center py-3 rounded-xl font-bold text-xs sm:text-sm transition-colors mb-4 shadow-3xs cursor-pointer"
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

      {/* Premium Lead & Payment Popup Modal */}
      {isPaymentModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-in fade-in duration-200">
          <div 
            className="bg-white rounded-3xl border border-[#D4AF37]/35 shadow-2xl max-w-lg w-full overflow-hidden flex flex-col relative max-h-[90vh] transform transition-all duration-300 scale-100"
            role="dialog"
            aria-modal="true"
          >
            {/* Modal Header */}
            <div className="bg-[#1C1A17] text-white px-6 py-5 flex items-center justify-between border-b border-[#3D3830]">
              <div>
                <span className="px-2 py-0.5 bg-[#C69214]/20 border border-[#C69214]/30 text-[#C69214] rounded-full text-[9px] font-black uppercase tracking-wider mb-1 block w-fit">
                  Secure Checkout
                </span>
                <h3 className="text-base sm:text-lg font-black tracking-tight leading-none">
                  Unlock Legal Template
                </h3>
              </div>
              <button 
                onClick={() => setIsPaymentModalOpen(false)}
                className="text-slate-400 hover:text-white transition-colors cursor-pointer p-1"
                aria-label="Close modal"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 overflow-y-auto flex-grow text-left">
              <form onSubmit={handleFormSubmit} className="space-y-4" noValidate>
                {/* Pricing Info Banner */}
                <div className="bg-[#FFFCF3] border border-[#D4AF37]/25 rounded-2xl p-4 flex items-start gap-3">
                  <div className="w-9 h-9 shrink-0 bg-[#C69214]/15 border border-[#C69214]/25 rounded-lg flex items-center justify-center">
                    <svg className="w-4 h-4 text-[#C69214]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm font-bold text-gray-800 leading-snug">
                      A nominal fee of <span className="text-[#C69214] font-black">₹129/-</span> is required to download this draft.
                    </p>
                    <p className="text-[10px] sm:text-xs text-gray-400 font-semibold mt-0.5">
                      You will be redirected to PayU secure gateway after filling this form.
                    </p>
                  </div>
                </div>

                {submitError && (
                  <div className="bg-red-50 border border-red-200 rounded-2xl p-4 flex items-start gap-2.5 text-red-600 font-semibold text-xs sm:text-sm">
                    <svg className="w-5 h-5 shrink-0 text-red-500 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    <div>{submitError}</div>
                  </div>
                )}

                <div className="flex flex-col gap-1">
                  <label htmlFor="detail-modal-name" className="text-gray-800 font-extrabold text-xs sm:text-sm">
                    Full Name <span className="text-[#D4AF37]">*</span>
                  </label>
                  <input 
                    type="text" 
                    id="detail-modal-name"
                    value={formData.name}
                    onChange={handleNameChange}
                    placeholder="e.g. Rajesh Kumar"
                    className={`w-full bg-slate-50 rounded-xl px-4 py-2.5 border text-gray-800 placeholder-gray-400 font-semibold focus:outline-none transition-all duration-200 text-sm ${
                      errors.name ? "border-red-400 focus:ring-1 focus:ring-red-400" : "border-slate-200 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]"
                    }`}
                  />
                  {errors.name && (
                    <span className="text-red-500 text-xs flex items-center gap-1 mt-0.5 font-bold">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg> {errors.name}
                    </span>
                  )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1">
                    <label htmlFor="detail-modal-email" className="text-gray-800 font-extrabold text-xs sm:text-sm">
                      Email Address <span className="text-[#D4AF37]">*</span>
                    </label>
                    <input 
                      type="email" 
                      id="detail-modal-email"
                      value={formData.email}
                      onChange={handleEmailChange}
                      placeholder="rajesh@example.com"
                      className={`w-full bg-slate-50 rounded-xl px-4 py-2.5 border text-gray-800 placeholder-gray-400 font-semibold focus:outline-none transition-all duration-200 text-sm ${
                        errors.email ? "border-red-400 focus:ring-1 focus:ring-red-400" : "border-slate-200 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]"
                      }`}
                    />
                    {errors.email && (
                      <span className="text-red-500 text-xs flex items-center gap-1 mt-0.5 font-bold">
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg> {errors.email}
                      </span>
                    )}
                  </div>

                  <div className="flex flex-col gap-1">
                    <label htmlFor="detail-modal-phone" className="text-gray-800 font-extrabold text-xs sm:text-sm">
                      Mobile Number <span className="text-[#D4AF37]">*</span>
                    </label>
                    <input 
                      type="tel" 
                      id="detail-modal-phone"
                      value={formData.phone}
                      onChange={handlePhoneChange}
                      placeholder="10-digit mobile"
                      className={`w-full bg-slate-50 rounded-xl px-4 py-2.5 border text-gray-800 placeholder-gray-400 font-semibold focus:outline-none transition-all duration-200 text-sm ${
                        errors.phone ? "border-red-400 focus:ring-1 focus:ring-red-400" : "border-slate-200 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]"
                      }`}
                    />
                    {errors.phone && (
                      <span className="text-red-500 text-xs flex items-center gap-1 mt-0.5 font-bold">
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg> {errors.phone}
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex flex-col gap-1">
                  <label htmlFor="detail-modal-state" className="text-gray-800 font-extrabold text-xs sm:text-sm">
                    State / Union Territory <span className="text-[#D4AF37]">*</span>
                  </label>
                  <div className="relative">
                    <select 
                      id="detail-modal-state"
                      value={formData.state}
                      onChange={handleStateChange}
                      className={`w-full bg-slate-50 rounded-xl px-4 py-2.5 border text-gray-800 font-semibold focus:outline-none transition-all duration-200 text-sm appearance-none cursor-pointer ${
                        errors.state ? "border-red-400 focus:ring-1 focus:ring-red-400" : "border-slate-200 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]"
                      }`}
                    >
                      <option value="" disabled className="text-gray-400">Select State/UT</option>
                      {indianStatesAndUTs.map(state => (
                        <option key={state} value={state} className="text-gray-800 font-medium">
                          {state}
                        </option>
                      ))}
                    </select>
                    <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-gray-500">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                      </svg>
                    </div>
                  </div>
                  {errors.state && (
                    <span className="text-red-500 text-xs flex items-center gap-1 mt-0.5 font-bold">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg> {errors.state}
                    </span>
                  )}
                </div>

                <div className="flex flex-col gap-1">
                  <label htmlFor="detail-modal-message" className="text-gray-800 font-extrabold text-xs sm:text-sm">
                    Message / Customization Detail <span className="text-[#D4AF37]">*</span>
                  </label>
                  <textarea 
                    id="detail-modal-message"
                    rows={3}
                    value={formData.message}
                    onChange={handleMessageChange}
                    placeholder="Briefly describe your customization query here..."
                    className={`w-full bg-slate-50 rounded-xl px-4 py-2 border text-gray-800 placeholder-gray-400 font-semibold focus:outline-none transition-all duration-200 text-sm resize-none ${
                      errors.message ? "border-red-400 focus:ring-1 focus:ring-red-400" : "border-slate-200 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]"
                    }`}
                  />
                  {errors.message && (
                    <span className="text-red-500 text-xs flex items-center gap-1 mt-0.5 font-bold">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg> {errors.message}
                    </span>
                  )}
                </div>

                {/* PayU-styled Submit Button */}
                <button 
                  type="submit"
                  disabled={isSubmittingLead}
                  style={{ 
                    backgroundColor: isSubmittingLead ? "#c4a035" : "#E19100",
                    borderRadius: "3.229px"
                  }}
                  className="w-full text-white py-3 font-extrabold text-sm flex items-center justify-center gap-2 cursor-pointer transition-all active:scale-[0.98] shadow-sm hover:shadow-md disabled:opacity-75 disabled:cursor-not-allowed hover:brightness-110"
                >
                  {isSubmittingLead ? (
                    <>
                      <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Redirecting to PayU...
                    </>
                  ) : (
                    <>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                      Pay ₹129 & Download Draft
                    </>
                  )}
                </button>

                <p className="text-[10px] text-center text-gray-400 font-semibold">
                  Secured with PayU Encryption • Instant Download After Payment
                </p>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
});


export default DraftDetail;
