"use client";

import { useState, useMemo, useCallback, useRef, useEffect } from "react";
import { Search, ChevronDown, CheckCircle, X, Download, Filter } from "lucide-react";
import { DRAFTS_DATA, DraftItem } from "@/data/drafts_data";
import DocThumbnail from "@/components/DocThumbnail";
import Link from "next/link";

// ─────────────────────────────────────────────────────────────────────────────
// FUZZY SEARCH ENGINE
// Token-based Levenshtein fuzzy matcher that handles typos and partial matches.
// ─────────────────────────────────────────────────────────────────────────────

function levenshtein(a: string, b: string): number {
  if (a.length === 0) return b.length;
  if (b.length === 0) return a.length;
  const matrix: number[][] = [];
  for (let i = 0; i <= b.length; i++) matrix[i] = [i];
  for (let j = 0; j <= a.length; j++) matrix[0][j] = j;
  for (let i = 1; i <= b.length; i++) {
    for (let j = 1; j <= a.length; j++) {
      if (b.charAt(i - 1) === a.charAt(j - 1)) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = Math.min(
          matrix[i - 1][j - 1] + 1,
          matrix[i][j - 1] + 1,
          matrix[i - 1][j] + 1
        );
      }
    }
  }
  return matrix[b.length][a.length];
}

function tokenSimilarity(queryToken: string, titleToken: string): number {
  const q = queryToken.toLowerCase();
  const t = titleToken.toLowerCase();
  if (t === q) return 1.0;
  if (t.startsWith(q)) return 0.9;
  if (t.includes(q)) return 0.75;
  const maxLen = Math.max(q.length, t.length);
  if (maxLen === 0) return 1.0;
  const dist = levenshtein(q, t);
  const similarity = 1 - dist / maxLen;
  return similarity;
}

function fuzzyScore(query: string, draft: DraftItem): number {
  if (!query.trim()) return 1;

  const queryTokens = query.toLowerCase().split(/\s+/).filter(Boolean);
  const titleTokens = draft.title.toLowerCase().split(/\s+/).filter(Boolean);
  const searchableText = [
    draft.title,
    draft.subCategory,
    draft.category,
  ].join(" ").toLowerCase();

  // Exact phrase match gives maximum score
  if (searchableText.includes(query.toLowerCase())) return 1.0;

  let totalScore = 0;
  let matchedTokens = 0;

  for (const qt of queryTokens) {
    let bestMatch = 0;
    for (const tt of titleTokens) {
      const sim = tokenSimilarity(qt, tt);
      if (sim > bestMatch) bestMatch = sim;
    }
    // Also check subcategory and category tokens
    const metaTokens = [draft.subCategory, draft.category]
      .join(" ")
      .toLowerCase()
      .split(/\s+/)
      .filter(Boolean);
    for (const mt of metaTokens) {
      const sim = tokenSimilarity(qt, mt) * 0.6; // lower weight for metadata
      if (sim > bestMatch) bestMatch = sim;
    }

    if (bestMatch >= 0.65) {
      totalScore += bestMatch;
      matchedTokens++;
    }
  }

  if (matchedTokens === 0) return 0;

  // Score: average similarity of matched tokens × coverage ratio
  const avgSimilarity = totalScore / queryTokens.length;
  const coverage = matchedTokens / queryTokens.length;
  return avgSimilarity * coverage;
}

// ─────────────────────────────────────────────────────────────────────────────
// DOMAIN CONFIG — The 9 Legal Domains with their icons & subcategory tags
// ─────────────────────────────────────────────────────────────────────────────

const DOMAINS: { label: string; icon: string; subCategories: string[] }[] = [
  {
    label: "All",
    icon: "⚖️",
    subCategories: [],
  },
  {
    label: "Property & Real Estate Law",
    icon: "🏛️",
    subCategories: ["Sale", "Rent", "Conveyancing", "Easements", "Partition", "Exchange", "Gift", "Release"],
  },
  {
    label: "Corporate & Commercial Law",
    icon: "🏢",
    subCategories: [
      "Company", "Partnership", "Franchisee", "Memorandum of Understanding",
      "Arbitration", "Assignment", "Indemnity", "Guarantee", "Agreement",
      "Composition deed", "Appranticeship", "Hire-Purchase",
    ],
  },
  {
    label: "Civil Litigation & Pleadings",
    icon: "📋",
    subCategories: [
      "Civil Pleadings", "Pleadings", "Plaint and Written statement", "Petition",
      "Notice", "Affidavit", "Application", "Specific Relief Act", "Vakalatnama",
      "Acknowledgement", "Consumer protection act",
    ],
  },
  {
    label: "Criminal Law & Procedure",
    icon: "⚠️",
    subCategories: ["Criminal Pleading", "Classification Of Offences", "Motor Vehicle Act"],
  },
  {
    label: "Family & Personal Law",
    icon: "👨‍👩‍👧",
    subCategories: ["Matrimonial", "Adoption", "Will", "Trust, Wakf society"],
  },
  {
    label: "Banking, Tax & Finance",
    icon: "🏦",
    subCategories: [
      "Banking", "Bond", "Income Tax", "Lease Financing",
      "Mortgage, Pledge , Hypothecation and Security Document",
      "Negotiable Instrument", "Infrastructure, development and financing",
    ],
  },
  {
    label: "Labor & Employment Law",
    icon: "👷",
    subCategories: ["Appointment", "Labour"],
  },
  {
    label: "Intellectual Property & IT Law",
    icon: "💻",
    subCategories: ["Information Technology", "Copyright"],
  },
  {
    label: "General & Miscellaneous Deeds",
    icon: "📁",
    subCategories: [
      "Miscellaneous deeds", "AGREEMENTS AND DRAFTS", "Medical Form",
      "Principle", "Power of Attorney",
    ],
  },
];

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

// ─────────────────────────────────────────────────────────────────────────────
// HELPERS
// ─────────────────────────────────────────────────────────────────────────────

function encodeFilePath(filePath: string): string {
  // Encode spaces and special chars in each path segment, leave slashes
  return filePath
    .split("/")
    .map((segment) => encodeURIComponent(segment))
    .join("/");
}

function getFileExtension(fileName: string): string {
  const parts = fileName.split(".");
  if (parts.length <= 1) return "DOC";
  const ext = parts[parts.length - 1].toUpperCase();
  if (ext === "DOCX" || ext === "DOC") return "DOCX";
  if (ext === "PDF") return "PDF";
  return ext.substring(0, 4);
}

function getExtColor(ext: string): string {
  if (ext === "PDF") return "#E74C3C";
  if (ext === "DOCX" || ext === "DOC") return "#2980B9";
  return "#8E44AD";
}

const ITEMS_PER_PAGE = 12;

// ─────────────────────────────────────────────────────────────────────────────
// MAIN COMPONENT
// ─────────────────────────────────────────────────────────────────────────────

export default function DraftsCatalog() {
  const [activeDomain, setActiveDomain] = useState("All");
  const [activeSubCategory, setActiveSubCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);
  const [downloadSuccess, setDownloadSuccess] = useState<string | null>(null);
  const searchTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Lead Modal & Checkout Flow States
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [selectedDraftForPayment, setSelectedDraftForPayment] = useState<DraftItem | null>(null);
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
    if (!validateForm() || !selectedDraftForPayment) return;

    setIsSubmittingLead(true);
    setSubmitError(null);

    try {
      const cleanDraftTitle = selectedDraftForPayment.title.replace(/\s\d+$/, "").replace(/\.\w+$/, "").trim();
      const payload = {
        ...formData,
        draftTitle: cleanDraftTitle,
        draftFileName: selectedDraftForPayment.fileName,
        draftFilePath: selectedDraftForPayment.filePath,
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
      localStorage.setItem("pending_download_path", selectedDraftForPayment.filePath);
      localStorage.setItem("pending_download_name", selectedDraftForPayment.fileName);

      // Directly redirect to PayU gateway
      window.location.href = "https://u.payu.in/Arn7huSpmGMe";
    } catch (err: any) {
      console.error("Lead submission error:", err);
      setSubmitError(err.message || "An unexpected error occurred. Please try again.");
    } finally {
      setIsSubmittingLead(false);
    }
  };

  const openPaymentPopup = (draft: DraftItem) => {
    setSelectedDraftForPayment(draft);
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

  // Debounce search query for performance with 2165 items
  const handleSearchChange = useCallback((value: string) => {
    setInputValue(value);
    if (searchTimeoutRef.current) clearTimeout(searchTimeoutRef.current);
    searchTimeoutRef.current = setTimeout(() => {
      setSearchQuery(value);
      setVisibleCount(ITEMS_PER_PAGE);
    }, 220);
  }, []);

  useEffect(() => {
    const handleSearchDraft = (e: Event) => {
      const customEvent = e as CustomEvent<{ query: string }>;
      const query = customEvent.detail.query;
      setInputValue(query);
      setSearchQuery(query);
      setActiveDomain("All");
      setActiveSubCategory("All");
      setVisibleCount(ITEMS_PER_PAGE);

      // Smooth scroll to catalog section
      const element = document.getElementById("catalog-section");
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }

      // Focus the input after a short delay for smooth scrolling
      setTimeout(() => {
        if (inputRef.current) {
          inputRef.current.focus();
        }
      }, 300);
    };

    window.addEventListener("search-draft", handleSearchDraft);

    return () => {
      window.removeEventListener("search-draft", handleSearchDraft);
      if (searchTimeoutRef.current) clearTimeout(searchTimeoutRef.current);
    };
  }, []);

  // Get current domain config
  const currentDomain = useMemo(
    () => DOMAINS.find((d) => d.label === activeDomain) || DOMAINS[0],
    [activeDomain]
  );

  // Available sub-category tags for active domain
  const subCategoryTags = useMemo(() => {
    if (activeDomain === "All") return [];
    return currentDomain.subCategories;
  }, [activeDomain, currentDomain]);

  // ── Core filter + fuzzy search pipeline ──
  const { results, totalCount } = useMemo(() => {
    let pool = DRAFTS_DATA;

    // 1. Domain filter
    if (activeDomain !== "All") {
      pool = pool.filter((d) => d.category === activeDomain);
    }

    // 2. Sub-category tag filter
    if (activeSubCategory !== "All") {
      pool = pool.filter((d) => d.subCategory === activeSubCategory);
    }

    // 3. Fuzzy search
    if (!searchQuery.trim()) {
      return { results: pool, totalCount: pool.length };
    }

    const SCORE_THRESHOLD = 0.25;
    const scored = pool
      .map((draft) => ({ draft, score: fuzzyScore(searchQuery, draft) }))
      .filter(({ score }) => score >= SCORE_THRESHOLD)
      .sort((a, b) => b.score - a.score);

    return {
      results: scored.map(({ draft }) => draft),
      totalCount: scored.length,
    };
  }, [activeDomain, activeSubCategory, searchQuery]);

  const visibleDrafts = useMemo(
    () => results.slice(0, visibleCount),
    [results, visibleCount]
  );

  const handleDomainChange = useCallback((domain: string) => {
    setActiveDomain(domain);
    setActiveSubCategory("All");
    setVisibleCount(ITEMS_PER_PAGE);
  }, []);

  const handleSubCatChange = useCallback((sub: string) => {
    setActiveSubCategory(sub);
    setVisibleCount(ITEMS_PER_PAGE);
  }, []);

  const handleDownload = useCallback((draft: DraftItem) => {
    openPaymentPopup(draft);
  }, []);

  const handleClearAll = useCallback(() => {
    setInputValue("");
    setSearchQuery("");
    setActiveDomain("All");
    setActiveSubCategory("All");
    setVisibleCount(ITEMS_PER_PAGE);
  }, []);

  const hasActiveFilters =
    activeDomain !== "All" || activeSubCategory !== "All" || searchQuery.trim() !== "";

  return (
    <>
    <section id="catalog-section" className="w-full bg-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8 font-sans">

      {/* ── Download Toast Notification ── */}
      {downloadSuccess && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#1C1A17] text-white px-5 py-4 rounded-[14px] shadow-2xl flex items-center gap-3 border border-[#3D3830] animate-in fade-in slide-in-from-bottom-5 duration-300 max-w-sm">
          <CheckCircle className="text-[#C69214] shrink-0" size={20} />
          <div className="flex flex-col min-w-0">
            <span className="text-xs font-bold text-[#C69214] uppercase tracking-wider mb-0.5">Downloading</span>
            <span className="text-sm text-gray-300 font-medium truncate">{downloadSuccess}</span>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto">

        {/* ── Section Header ── */}
        <div className="text-center mb-12">
          <p className="text-[#C69214] font-bold tracking-[0.2em] text-xs uppercase mb-3">
            2,165+ LEGAL TEMPLATES
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#2D2219] leading-tight tracking-tight mb-4 select-none">
            Browse the Complete{" "}
            <span className="text-[#C69214]">Drafts Library</span>
          </h2>
          <p className="text-gray-500 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Professionally formatted legal drafts across all practice areas. Search, filter by domain, and download instantly.
          </p>

          {/* Pricing Banner */}
          <div className="inline-flex items-center gap-2.5 mt-6 bg-gradient-to-r from-[#FFFCF3] to-[#FFF8E5] border border-[#D4AF37]/30 rounded-2xl px-6 py-3 shadow-sm">
            <div className="w-8 h-8 bg-[#C69214]/15 border border-[#C69214]/25 rounded-lg flex items-center justify-center">
              <svg className="w-4 h-4 text-[#C69214]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <p className="text-sm sm:text-base font-extrabold text-[#1A1A1A]">
              Download Any Legal Draft at Just{" "}
              <span className="text-[#C69214] text-lg sm:text-xl">₹129/-</span>{" "}
              <span className="text-gray-400 font-bold text-xs">only</span>
            </p>
          </div>
        </div>

        {/* ── Search Bar ── */}
        <div className="w-full max-w-2xl mx-auto mb-10">
          <div className="relative bg-[#F6F1E7] rounded-[16px] p-1.5 shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-[#E8E0CE] focus-within:border-[#C69214] focus-within:shadow-[0_8px_30px_rgba(198,146,20,0.1)] focus-within:bg-white transition-all duration-300 flex items-center gap-2">
            <div className="pl-3 text-[#9C9488]">
              <Search size={18} className="stroke-[2.25]" />
            </div>
            <input
              ref={inputRef}
              type="text"
              placeholder='Try "lease agreement", "bail application", "NDA"...'
              value={inputValue}
              onChange={(e) => handleSearchChange(e.target.value)}
              className="flex-1 bg-transparent py-2.5 text-gray-800 placeholder-[#B0A898] font-medium text-sm sm:text-base focus:outline-none"
            />
            {inputValue && (
              <button
                onClick={() => { setInputValue(""); setSearchQuery(""); setVisibleCount(ITEMS_PER_PAGE); }}
                className="p-1.5 text-gray-400 hover:text-gray-700 transition-colors"
              >
                <X size={16} />
              </button>
            )}
            <button
              onClick={() => { setSearchQuery(inputValue); setVisibleCount(ITEMS_PER_PAGE); }}
              className="bg-[#1C1A17] text-white px-5 py-2.5 rounded-[11px] font-bold text-sm hover:bg-black active:scale-[0.97] transition-all shadow-sm whitespace-nowrap"
            >
              Search
            </button>
          </div>
          {/* Fuzzy search hint */}
          <p className="text-center text-xs text-gray-400 mt-2 font-medium">
            ✦ Smart search — typos are handled automatically
          </p>
        </div>

        {/* ── Domain Filter Tabs ── */}
        <div className="mb-6">
          <div className="w-full overflow-x-auto no-scrollbar">
            <div className="flex items-center gap-2 min-w-max pb-1 px-1">
              {DOMAINS.map((domain) => {
                const isActive = activeDomain === domain.label;
                // Count items in this domain
                const count =
                  domain.label === "All"
                    ? DRAFTS_DATA.length
                    : DRAFTS_DATA.filter((d) => d.category === domain.label).length;
                return (
                  <button
                    key={domain.label}
                    onClick={() => handleDomainChange(domain.label)}
                    className={`flex items-center gap-1.5 px-3.5 py-2 rounded-[10px] text-xs sm:text-sm font-semibold tracking-wide transition-all duration-250 cursor-pointer select-none whitespace-nowrap ${
                      isActive
                        ? "bg-[#1C1A17] text-white shadow-md"
                        : "bg-[#F4EEE0] text-[#5A5248] hover:bg-[#EBE2D0] hover:text-[#1C1A17]"
                    }`}
                  >
                    <span className="text-base leading-none">{domain.icon}</span>
                    <span>{domain.label === "All" ? "All Drafts" : domain.label.split(" ").slice(0, 2).join(" ")}</span>
                    <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full ${isActive ? "bg-white/20 text-white" : "bg-[#DDD5C4] text-[#7A7062]"}`}>
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* ── Sub-Category Tag Filters (visible only when domain is selected) ── */}
        {subCategoryTags.length > 0 && (
          <div className="mb-8 bg-[#FAF7F2] border border-[#EDE5D4] rounded-[14px] p-4">
            <div className="flex items-center gap-2 mb-3">
              <Filter size={13} className="text-[#9C9488]" />
              <span className="text-xs font-bold text-[#9C9488] uppercase tracking-wider">Filter by Type</span>
            </div>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => handleSubCatChange("All")}
                className={`px-3 py-1.5 rounded-[8px] text-xs font-semibold transition-all duration-200 cursor-pointer ${
                  activeSubCategory === "All"
                    ? "bg-[#C69214] text-white shadow-sm"
                    : "bg-white text-gray-600 border border-gray-200 hover:border-[#C69214] hover:text-[#C69214]"
                }`}
              >
                All Types
              </button>
              {subCategoryTags.map((tag) => {
                const count = DRAFTS_DATA.filter(
                  (d) => d.category === activeDomain && d.subCategory === tag
                ).length;
                if (count === 0) return null;
                return (
                  <button
                    key={tag}
                    onClick={() => handleSubCatChange(tag)}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-[8px] text-xs font-semibold transition-all duration-200 cursor-pointer ${
                      activeSubCategory === tag
                        ? "bg-[#C69214] text-white shadow-sm"
                        : "bg-white text-gray-600 border border-gray-200 hover:border-[#C69214] hover:text-[#C69214]"
                    }`}
                  >
                    {tag}
                    <span className={`text-[10px] font-bold ${activeSubCategory === tag ? "opacity-75" : "text-gray-400"}`}>
                      ({count})
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* ── Results Meta Bar ── */}
        <div className="flex items-center justify-between mb-6 px-1">
          <div className="flex items-center gap-3">
            <p className="text-sm font-semibold text-gray-600">
              {searchQuery.trim() ? (
                <>
                  <span className="text-[#1A1A1A] font-bold">{totalCount.toLocaleString()}</span>{" "}
                  result{totalCount !== 1 ? "s" : ""} for{" "}
                  <span className="text-[#C69214] font-bold">&quot;{searchQuery}&quot;</span>
                </>
              ) : (
                <>
                  Showing{" "}
                  <span className="text-[#1A1A1A] font-bold">{totalCount.toLocaleString()}</span>{" "}
                  draft{totalCount !== 1 ? "s" : ""}
                  {activeDomain !== "All" && (
                    <> in <span className="text-[#C69214]">{activeDomain}</span></>
                  )}
                  {activeSubCategory !== "All" && (
                    <> › <span className="text-[#C69214]">{activeSubCategory}</span></>
                  )}
                </>
              )}
            </p>
          </div>
          {hasActiveFilters && (
            <button
              onClick={handleClearAll}
              className="flex items-center gap-1.5 text-xs font-bold text-gray-400 hover:text-[#C69214] transition-colors cursor-pointer"
            >
              <X size={12} />
              Clear all
            </button>
          )}
        </div>

        {/* ── Draft Cards Grid ── */}
        {visibleDrafts.length > 0 ? (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mb-10">
              {visibleDrafts.map((draft) => {
                const ext = getFileExtension(draft.fileName);
                const extColor = getExtColor(ext);
                return (
                  <DraftCard
                    key={draft.id}
                    draft={draft}
                    onDownload={handleDownload}
                  />
                );
              })}
            </div>

            {/* ── Show More / Pagination ── */}
            {visibleCount < totalCount && (
              <div className="flex flex-col items-center gap-2 mt-4 mb-4">
                <p className="text-xs text-gray-400 font-medium">
                  Showing {Math.min(visibleCount, totalCount)} of {totalCount.toLocaleString()} drafts
                </p>
                <div className="w-full max-w-xs bg-[#F4EEE0] rounded-full h-1.5 overflow-hidden">
                  <div
                    className="h-full bg-[#C69214] rounded-full transition-all duration-500"
                    style={{ width: `${Math.min((visibleCount / totalCount) * 100, 100)}%` }}
                  />
                </div>
                <button
                  onClick={() => setVisibleCount((prev) => prev + ITEMS_PER_PAGE)}
                  className="flex items-center gap-2 mt-3 bg-[#F4EEE0] hover:bg-[#EBE2D0] text-[#292524] font-bold px-8 py-3 rounded-[12px] text-sm hover:shadow-md active:scale-[0.98] transition-all duration-300 cursor-pointer select-none group border border-[#E0D8C8]"
                >
                  <span>Load {Math.min(ITEMS_PER_PAGE, totalCount - visibleCount)} More Drafts</span>
                  <ChevronDown size={16} className="stroke-[2.5] group-hover:translate-y-0.5 transition-transform duration-300" />
                </button>
              </div>
            )}
          </>
        ) : (
          /* ── Empty State ── */
          <div className="py-20 flex flex-col items-center text-center gap-4">
            <div className="w-16 h-16 bg-[#F4EEE0] rounded-full flex items-center justify-center mb-2">
              <Search size={28} className="text-[#C69214]" />
            </div>
            <h3 className="text-xl font-bold text-[#1A1A1A]">No drafts found</h3>
            <p className="text-gray-500 text-sm max-w-xs leading-relaxed">
              {searchQuery
                ? `No matches for "${searchQuery}". Try different keywords or check your spelling.`
                : "No drafts available in this category."}
            </p>
            <button
              onClick={handleClearAll}
              className="mt-2 bg-[#1C1A17] text-white px-6 py-2.5 rounded-[10px] font-bold text-sm hover:bg-black transition-all cursor-pointer"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </section>

    {/* Premium Lead & Payment Popup Modal */}
    {isPaymentModalOpen && selectedDraftForPayment && (
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
              {/* Premium Contact-style Form Screen */}
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
                  <label htmlFor="modal-name" className="text-gray-800 font-extrabold text-xs sm:text-sm">
                    Full Name <span className="text-[#D4AF37]">*</span>
                  </label>
                  <input 
                    type="text" 
                    id="modal-name"
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
                    <label htmlFor="modal-email" className="text-gray-800 font-extrabold text-xs sm:text-sm">
                      Email Address <span className="text-[#D4AF37]">*</span>
                    </label>
                    <input 
                      type="email" 
                      id="modal-email"
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
                    <label htmlFor="modal-phone" className="text-gray-800 font-extrabold text-xs sm:text-sm">
                      Mobile Number <span className="text-[#D4AF37]">*</span>
                    </label>
                    <input 
                      type="tel" 
                      id="modal-phone"
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
                  <label htmlFor="modal-state" className="text-gray-800 font-extrabold text-xs sm:text-sm">
                    State / Union Territory <span className="text-[#D4AF37]">*</span>
                  </label>
                  <div className="relative">
                    <select 
                      id="modal-state"
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
                  <label htmlFor="modal-message" className="text-gray-800 font-extrabold text-xs sm:text-sm">
                    Message / Customization Detail <span className="text-[#D4AF37]">*</span>
                  </label>
                  <textarea 
                    id="modal-message"
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
    </>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// DRAFT CARD — Extracted for performance (avoids inline closures per card)
// ─────────────────────────────────────────────────────────────────────────────

interface DraftCardProps {
  draft: DraftItem;
  onDownload: (draft: DraftItem) => void;
}

function DraftCard({ draft, onDownload }: DraftCardProps) {
  const encodedPath = encodeFilePath(draft.filePath);
  const lastDot = draft.fileName.lastIndexOf('.');
  const slug = lastDot !== -1 ? draft.fileName.substring(0, lastDot).toLowerCase() : draft.fileName.toLowerCase();

  return (
    <div className="flex flex-col text-left group bg-white border border-[#EDE5D4] rounded-[16px] overflow-hidden hover:border-[#C69214]/40 hover:shadow-[0_8px_32px_rgba(198,146,20,0.08)] transition-all duration-300">

      {/* Card Thumbnail — real doc text preview */}
      <DocThumbnail draft={draft} />

      {/* Card Body */}
      <div className="flex flex-col flex-1 p-4 gap-2">
        {/* SubCategory Tag */}
        <div className="flex items-center gap-1.5">
          <span
            className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#F4EEE0] text-[#9C9488] truncate max-w-full"
            title={draft.subCategory}
          >
            {draft.subCategory}
          </span>
        </div>

        {/* Title */}
        <h3
          className="font-bold text-[#1A1A1A] text-sm leading-snug group-hover:text-[#C69214] transition-colors duration-300 line-clamp-2 flex-1"
          title={draft.title}
        >
          {draft.title}
        </h3>

        {/* Actions */}
        <div className="flex items-center justify-between gap-3 pt-1 mt-auto">
          <button
            onClick={() => onDownload(draft)}
            className="flex items-center gap-1.5 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-[8px] font-bold text-[11px] active:scale-[0.97] shadow-sm hover:shadow-md transition-all duration-250 cursor-pointer flex-1 justify-center"
          >
            <Download size={11} />
            Get @₹129
          </button>
          <Link
            href={`/drafts/${slug}`}
            className="flex items-center gap-1 bg-[#F4EEE0] text-[#1C1A17] border border-[#DDD5C4] px-4 py-2 rounded-[8px] font-bold text-[11px] hover:bg-[#EBE2D0] transition-colors cursor-pointer flex-1 justify-center"
          >
            View Guide
          </Link>
        </div>
      </div>
    </div>
  );
}
