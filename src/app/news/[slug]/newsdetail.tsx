'use client'
import React, { useEffect, useState, useRef, useMemo, memo } from 'react';
import Link from 'next/link';
import { authorBios } from '@/lib/authorBios';
import BlogCompanyOverview from '@/components/BlogCompanyOverview';

const FALLBACK_IMAGE = '/logo_qa.png';

const getValidImageSrc = (imageSrc: string | undefined | null): string => {
  if (!imageSrc || imageSrc.trim() === '') {
    return FALLBACK_IMAGE;
  }
  return imageSrc;
};

const hasValidImage = (imageSrc: string | undefined | null): boolean => {
  return !!(imageSrc && imageSrc.trim() !== '');
};

const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
  const target = e.target as HTMLImageElement;
  if (target.src !== FALLBACK_IMAGE && !target.src.endsWith(FALLBACK_IMAGE)) {
    target.src = FALLBACK_IMAGE;
  }
};

export interface NewsArticle {
  _id: string;
  title: string;
  description: string;
  slug: string;
  content: string;
  urlToImage: string;
  publishedAt: string;
  source: string;
  author: string;
  categories?: string[];
  isPinned?: boolean;
  order?: number;
}

interface NewsDetailProps {
  article: NewsArticle;
  relatedNews: NewsArticle[];
}

const formatDate = (iso: string) => {
  if (!iso) return 'Recent Dispatch';
  const d = new Date(iso);
  if (isNaN(d.getTime())) return iso;
  return d.toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' });
};

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

function Breadcrumbs({ items }: { items: { label: string; href: string }[] }) {
  return (
    <nav className="flex text-xs sm:text-sm font-semibold text-slate-500 gap-1.5 sm:gap-2 items-center mb-6 flex-wrap">
      <Link href="/" className="hover:text-[#D4AF37] transition-colors">Home</Link>
      {items.map((item, idx) => (
        <React.Fragment key={idx}>
          <span className="text-slate-300">/</span>
          <Link
            href={item.href}
            className={idx === items.length - 1 ? 'text-[#B8860B] font-bold line-clamp-1 max-w-[260px] sm:max-w-[520px]' : 'hover:text-[#D4AF37] transition-colors'}
          >
            {item.label}
          </Link>
        </React.Fragment>
      ))}
    </nav>
  );
}

function TableOfContents({
  sections,
  activeId,
  onLinkClick,
  orientation = 'horizontal',
}: {
  sections: { id: string; title: string }[];
  activeId: string;
  onLinkClick: (e: React.MouseEvent<HTMLAnchorElement>, id: string) => void;
  orientation?: 'horizontal' | 'vertical';
}) {
  if (!sections || sections.length === 0) return null;

  if (orientation === 'vertical') {
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
                  className={`text-xs font-bold transition-colors block leading-snug ${
                    isActive
                      ? 'text-[#B8860B]'
                      : 'text-slate-500 hover:text-[#B8860B]'
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
              className={`text-xs font-bold transition-colors ${
                isActive ? 'text-[#B8860B]' : 'text-slate-600 hover:text-[#B8860B]'
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

// Popular legal topic interlinks
const POPULAR_LEGAL_INTERLINKS = [
  { label: 'Latest Legal News & Court Dispatches', href: '/news' },
  { label: 'Senior Lawyer Case Studies & Interviews', href: '/interviews' },
  { label: 'Join Legal Communities on AMA Connect', href: '/communities' },
  { label: 'Ask Me Anything (AMA) Community Q&A', href: '/ask-me-anything' },
  { label: 'Legal Insights & Practice Guides', href: '/blog' },
  { label: 'Cheque Bounce (Sec 138) Guide', href: '/cheque-bounce-legal-notice-section-138-guide' },
  { label: 'Legal Notice Drafting Guide', href: '/how-to-draft-legal-notice-india-guide' },
  { label: 'Homebuyer & RERA Delay Guide', href: '/homebuyer-rights-rera-builder-delay-remedies' },
  { label: 'Cyber Fraud & Online Scams Guide', href: '/cyber-fraud-online-scams-legal-recourse' },
  { label: 'Property & Lease Dispute Guide', href: '/property-dispute-resolution-india-legal-remedies' },
];

const PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=com.ama.ama_legal_solutions';
const APP_STORE_URL = 'https://apps.apple.com/in/app/ama-legal-solutions/id6755156186';

// Adds ids to h2/h3 headings, wraps responsive tables, and builds the table of contents
const processContent = (html: string) => {
  if (!html) return { content: '', sections: [] as { id: string; title: string }[] };

  const sanitized = html.replace(/&amp;amp;/g, '&').replace(/&amp;/g, '&');
  const sections: { id: string; title: string }[] = [];
  const used = new Set<string>();

  let content = sanitized.replace(/<(h[23])(.*?)>(.*?)<\/\1>/gi, (match, tag, attrs, title) => {
    const cleanTitle = title.replace(/<[^>]*>/g, '').trim();
    let id = cleanTitle.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');
    if (!id) return match;
    let unique = id;
    let n = 2;
    while (used.has(unique)) unique = `${id}-${n++}`;
    id = unique;
    used.add(id);
    sections.push({ id, title: cleanTitle });
    if (attrs.includes('id=')) return match;
    return `<${tag} id="${id}"${attrs}>${title}</${tag}>`;
  });

  // Wrap tables in responsive scroll container matching blog slug page
  content = content.replace(
    /<table([^>]*)>([\s\S]*?)<\/table>/gi,
    (_match, attrs, tableInner) =>
      `<div class="blog-table-responsive my-6 w-full max-w-full overflow-x-auto rounded-xl border border-slate-200 shadow-xs"><table${attrs}>${tableInner}</table></div>`
  );

  return { content, sections };
};

const NewsDetail = memo(function NewsDetail({ article, relatedNews }: NewsDetailProps) {
  const [currentUrl, setCurrentUrl] = useState('');
  const [activeId, setActiveId] = useState<string>('');

  const { content: processedContent, sections: tocSections } = useMemo(
    () => processContent(article.content || `<p>${article.description}</p>`),
    [article.content, article.description]
  );

  const wordCount = useMemo(
    () => (article.content || '').replace(/<[^>]*>/g, ' ').split(/\s+/).filter(Boolean).length,
    [article.content]
  );
  const readTime = `${Math.max(3, Math.ceil(wordCount / 200))} Min Read`;

  const displayCategories = useMemo(() => {
    const filtered = (article.categories || []).filter((c) => c && c !== 'All');
    return filtered.length > 0 ? filtered : ['Legal Updates'];
  }, [article.categories]);

  const handleLinkClick = React.useCallback((e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 95;
      window.scrollTo({ top: y, behavior: 'smooth' });
      window.history.pushState(null, '', `#${id}`);
      setActiveId(id);
    }
  }, []);

  useEffect(() => {
    setCurrentUrl(window.location.href);
  }, []);

  // Track active section on scroll
  useEffect(() => {
    if (tocSections.length === 0) return;

    const handleScroll = () => {
      const headingElements = tocSections
        .map(({ id }) => document.getElementById(id))
        .filter(Boolean) as HTMLElement[];

      let currentActiveId = '';
      const offset = 150;

      for (const el of headingElements) {
        const rect = el.getBoundingClientRect();
        if (rect.top <= offset) {
          currentActiveId = el.id;
        } else {
          break;
        }
      }

      if (!currentActiveId && headingElements.length > 0 && window.scrollY < 300) {
        currentActiveId = headingElements[0].id;
      }

      if (currentActiveId && currentActiveId !== activeId) {
        setActiveId(currentActiveId);
      }
    };

    const timeoutId = setTimeout(handleScroll, 100);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [tocSections, activeId]);

  const handleShare = (platform: string) => {
    let shareUrl = '';
    switch (platform) {
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;
        break;
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(article.title)}&url=${encodeURIComponent(currentUrl)}`;
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
    { label: 'News', href: '/news' },
    { label: article.title, href: `/news/${article.slug}` },
  ];

  const authorBio = article.author ? authorBios[article.author] : undefined;

  return (
    <div className="min-h-dvh bg-[#F5F2EB] text-gray-800 pb-16">
      {/* Hero Section matching AMA Legal Solutions Blog Slug Page */}
      <div className="w-full bg-white pt-12 lg:pt-20 pb-12 px-4 sm:px-6 lg:px-8 border-b border-slate-100">
        <div className="max-w-[1200px] mx-auto">
          <Breadcrumbs items={breadcrumbItems} />

          <div className="flex flex-col lg:flex-row gap-10 items-center mt-6">
            {/* Left Content */}
            <div className="flex-1 flex flex-col items-start text-left">
              {/* Category & Source Badges */}
              <div className="flex flex-wrap items-center gap-2 mb-4">
                {displayCategories.map((cat) => (
                  <Link
                    key={cat}
                    href={`/news?category=${encodeURIComponent(cat)}`}
                    className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#B8860B]/10 hover:bg-[#B8860B]/20 border border-[#B8860B]/25 text-[#B8860B] rounded-full text-xs font-extrabold uppercase tracking-wider transition-colors"
                  >
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#B8860B] opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-[#B8860B]"></span>
                    </span>
                    {cat}
                  </Link>
                ))}
                {article.source && (
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#FAF6EC] border border-[#E9DFCA] text-[#413832] text-xs font-bold">
                    {article.source}
                  </span>
                )}
              </div>

              {/* Title */}
              <h1 className="text-[32px] md:text-[42px] lg:text-[48px] font-extrabold leading-[1.2] text-[#382E26] mb-6">
                {article.title}
              </h1>

              {/* Standfirst / Description */}
              {article.description && (
                <p className="text-[16px] md:text-[18px] text-gray-600 mb-8 leading-relaxed">
                  {article.description}
                </p>
              )}

              {/* Author & Meta Data */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-6 mt-2">
                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-[#382E26] flex items-center justify-center text-white font-bold text-[16px] overflow-hidden shrink-0 border-2 border-[#D4AF37]/40">
                    {authorBio?.image ? (
                      <img src={authorBio.image} alt={article.author} className="w-full h-full object-cover" />
                    ) : (
                      article.author ? article.author.substring(0, 2).toUpperCase() : 'AM'
                    )}
                  </div>
                  <div>
                    <div className="text-[16px] font-bold text-[#382E26]">{article.author || 'AMA Connect'}</div>
                    <div className="text-[12px] text-gray-500">
                      {article.source || 'AMA Connect'} • Verified Legal News Desk
                    </div>
                  </div>
                </div>

                {/* Badges */}
                <div className="flex items-center gap-3 flex-wrap">
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-gray-200 text-[13px] text-gray-600 font-medium bg-white whitespace-nowrap">
                    <svg className="w-4 h-4 text-gray-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {formatDate(article.publishedAt)}
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-gray-200 text-[13px] text-gray-600 font-medium bg-white whitespace-nowrap">
                    <svg className="w-4 h-4 text-gray-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {readTime}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="flex-1 w-full max-w-[560px] lg:max-w-none lg:pl-8 flex justify-center">
              <div className="relative w-full rounded-3xl overflow-hidden shadow-xl border border-[#382E26]/10 bg-[#FAF6EC] flex items-center justify-center p-2 sm:p-3">
                <img
                  src={getValidImageSrc(article.urlToImage)}
                  alt={article.title}
                  className="w-full h-auto max-h-[480px] object-contain rounded-2xl"
                  onError={handleImageError}
                />
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

      {/* Main 3-Column Content Layout */}
      <div className="container mx-auto px-4 max-w-[1600px] pt-4 pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr_280px] gap-8 items-start">
          {/* Left Sidebar - TOC (Desktop) */}
          <div className="hidden lg:block sticky top-24">
            <TableOfContents sections={tocSections} activeId={activeId} onLinkClick={handleLinkClick} orientation="vertical" />
          </div>

          {/* Main Content Area */}
          <div className="min-w-0">
            {/* TOC (Mobile) */}
            <div className="lg:hidden mb-8">
              <TableOfContents sections={tocSections} activeId={activeId} onLinkClick={handleLinkClick} />
            </div>

            <div className="bg-white p-6 md:p-12 rounded-3xl border border-slate-100 shadow-3xs space-y-10">
              {/* Top Meta & Share Bar matching AMA Legal Solutions Blog Slug Page */}
              <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center border-b border-slate-100 pb-6 gap-4">
                <div className="text-xs md:text-sm text-slate-500 font-medium">
                  Reported by <span className="text-[#B8860B] font-bold">{article.author || 'AMA Connect Legal Desk'}</span> &bull; Source: <span className="font-semibold text-slate-700">{article.source || 'AMA Connect'}</span> &bull; Published: {formatDate(article.publishedAt)}
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="text-xs font-bold text-slate-700">Share:</span>
                  <button
                    onClick={() => handleShare('facebook')}
                    className="w-8 h-8 rounded-full bg-[#1877F2] text-white flex items-center justify-center hover:opacity-90 transition shadow-2xs cursor-pointer"
                    title="Share on Facebook"
                  >
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                  </button>
                  <button
                    onClick={() => handleShare('twitter')}
                    className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center hover:opacity-85 transition shadow-2xs cursor-pointer"
                    title="Share on X / Twitter"
                  >
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
                  </button>
                  <button
                    onClick={() => handleShare('linkedin')}
                    className="w-8 h-8 rounded-full bg-[#0A66C2] text-white flex items-center justify-center hover:opacity-90 transition shadow-2xs cursor-pointer"
                    title="Share on LinkedIn"
                  >
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                  </button>
                </div>
              </div>

              {/* Main Article Body */}
              <div
                className="prose prose-lg max-w-none text-slate-700 leading-relaxed tiptap-content"
                dangerouslySetInnerHTML={{ __html: processedContent }}
              />

              {/* Tiptap Styles matching BlogDetail + Bar & Bench editorial formatting */}
              <style jsx global>{`
                .tiptap-content {
                  overflow-wrap: break-word;
                  word-wrap: break-word;
                  word-break: break-word;
                  max-width: 100%;
                }
                .tiptap-content h1 { font-size: 2em; font-weight: 900; margin-top: 1.5em; margin-bottom: 0.8em; color: #B8860B; }
                .tiptap-content h2 { font-size: 1.65em; font-weight: 800; margin-top: 1.6em; margin-bottom: 0.75em; color: #B8860B; border-left: 4px solid #B8860B; padding-left: 0.75rem; line-height: 1.35; scroll-margin-top: 100px; }
                .tiptap-content h3 { font-size: 1.35em; font-weight: 800; margin-top: 1.3em; margin-bottom: 0.6em; color: #413832; scroll-margin-top: 100px; }
                .tiptap-content h4 { font-size: 1.15em; font-weight: 700; margin-top: 1.1em; margin-bottom: 0.5em; color: #382E26; }
                .tiptap-content p { margin-bottom: 1.2em; line-height: 1.8; color: #334155; text-align: left; }
                .tiptap-content ul { list-style-type: disc; padding-left: 1.5em; margin-bottom: 1.2em; }
                .tiptap-content ol { list-style-type: decimal; padding-left: 1.5em; margin-bottom: 1.2em; }
                .tiptap-content li { margin-bottom: 0.5em; color: #334155; line-height: 1.75; text-align: left; }
                .tiptap-content blockquote { border-left: 4px solid #D2A02A; font-style: italic; color: #475569; background: #fffaf0; padding: 1.25rem 1.5rem; margin: 1.5rem 0; border-radius: 0.75rem; }
                .tiptap-content blockquote p:last-child { margin-bottom: 0; }
                .tiptap-content strong { color: #1e293b; font-weight: 700; }
                .tiptap-content img { border-radius: 0.75rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05); margin: 2rem 0; max-width: 100%; height: auto; }
                .tiptap-content a { color: #B8860B; text-decoration: underline; text-underline-offset: 2px; font-weight: 600; }
                .tiptap-content a:hover { color: #8A6506; }
                .blog-table-responsive {
                  width: 100%;
                  max-width: 100%;
                  overflow-x: auto;
                  -webkit-overflow-scrolling: touch;
                }
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
                  background: #FAF6EC; 
                  padding: 0.85rem 1rem; 
                  text-align: left; 
                  font-weight: 700; 
                  border-bottom: 1px solid #CBD5E1; 
                  border-right: 1px solid #E2E8F0; 
                  color: #2D2219; 
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

              {/* End of Article App Download Card */}
              <div className="mt-8 p-5 sm:p-6 rounded-2xl bg-[#30261C] text-white border border-[#D2A02A]/40 shadow-lg flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="space-y-1">
                  <div className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#D2A02A]">
                    AMA Connect Mobile App
                  </div>
                  <h4 className="text-sm sm:text-base font-bold text-[#FAF7F0]">
                    Follow Court Updates &amp; Join Legal Communities on AMA Connect
                  </h4>
                  <p className="text-xs text-gray-300 max-w-lg leading-relaxed">
                    Download the AMA Connect app on Google Play Store and Apple App Store to read real-time court dispatches, explore lawyer interviews, and join Ask Me Anything (AMA) discussions.
                  </p>
                </div>
                <div className="flex flex-wrap items-center gap-2.5 shrink-0">
                  <a
                    href={PLAY_STORE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2.5 bg-[#D2A02A] hover:bg-[#b88a22] text-[#1C160F] font-bold rounded-xl text-xs transition-all shadow-md text-center flex items-center justify-center gap-1.5"
                  >
                    <span>Google Play →</span>
                  </a>
                  <a
                    href={APP_STORE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2.5 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold rounded-xl text-xs transition-all text-center flex items-center justify-center gap-1.5"
                  >
                    <span>App Store →</span>
                  </a>
                </div>
              </div>

              {/* AMA Connect Platform Overview & Media Mentions */}
              <BlogCompanyOverview />

              {/* Popular Searches & Legal Resources Section */}
              <div className="border-t border-slate-100 pt-8">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-base">🔍</span>
                  <h3 className="text-xs font-bold uppercase tracking-widest text-slate-500">
                    Popular Searches &amp; Legal Resources
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2.5">
                  {POPULAR_LEGAL_INTERLINKS.map((item, idx) => (
                    <Link
                      key={idx}
                      href={item.href}
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#FAF6EC] hover:bg-[#F2E8D2] border border-[#E9DFCA] text-xs md:text-sm font-semibold text-[#413832] transition-colors group shadow-3xs"
                    >
                      <span>{item.label}</span>
                      <svg className="w-3.5 h-3.5 text-[#B8860B] group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Share Section */}
              <div className="border-t border-slate-100 pt-8 mt-8">
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <span className="font-extrabold text-slate-900 text-sm">Share this legal dispatch:</span>
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

              {/* Related Legal Dispatches & News (matching BlogDetail Related Legal Insights) */}
              {relatedNews && relatedNews.length > 0 && (
                <section className="border-t border-slate-100 pt-12">
                  <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-8">Related Legal Dispatches</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    {relatedNews.map((item) => (
                      <Link key={item._id} href={`/news/${item.slug}`} className="group">
                        <div className="bg-white border border-slate-150 rounded-2xl overflow-hidden hover:shadow-lg transition-all h-full flex flex-col">
                          <div className="relative h-44 bg-gray-900 overflow-hidden flex items-center justify-center">
                            {hasValidImage(item.urlToImage) ? (
                              <>
                                {/* Blurred background filler */}
                                <img
                                  src={getValidImageSrc(item.urlToImage)}
                                  alt=""
                                  className="absolute inset-0 w-full h-full object-cover blur-md scale-110 opacity-30 select-none pointer-events-none z-0"
                                />
                                {/* Golden tint overlay */}
                                <div className="absolute inset-0 bg-[#B8860B]/15 mix-blend-color select-none pointer-events-none z-0" />
                                {/* Foreground contained image */}
                                <img
                                  src={getValidImageSrc(item.urlToImage)}
                                  alt={item.title}
                                  className="relative z-10 max-w-full max-h-full h-full w-auto object-contain group-hover:scale-103 transition-transform duration-500"
                                  loading="lazy"
                                  onError={handleImageError}
                                />
                              </>
                            ) : (
                              <div className="w-full h-full flex items-center justify-center bg-gray-100">
                                <span className="text-xs text-gray-400 font-medium">Legal Dispatch</span>
                              </div>
                            )}
                            <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-xs rounded-lg px-2.5 py-1 text-xs font-bold text-[#B8860B] border border-slate-100 shadow-3xs z-20">
                              {formatDate(item.publishedAt)}
                            </div>
                          </div>
                          <div className="p-5 flex-grow flex flex-col justify-between">
                            <div>
                              <h3 className="text-base sm:text-lg font-extrabold text-slate-900 mb-2 group-hover:text-[#B8860B] transition-colors line-clamp-2">
                                {item.title}
                              </h3>
                              <p className="text-xs text-slate-400 font-semibold mb-4 uppercase">
                                By {item.author || item.source || 'AMA Connect'}
                              </p>
                            </div>
                            <span className="text-[#B8860B] font-extrabold text-xs sm:text-sm flex items-center mt-auto">
                              Read Report <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
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

          {/* Right Sidebar - AMA Connect App & Community Cards */}
          <div className="space-y-5 sticky top-24">
            {/* Download AMA Connect App Card */}
            <div className="bg-[#413832] rounded-[20px] p-5 text-center shadow-lg relative overflow-hidden flex flex-col items-center">
              <div className="absolute top-0 right-0 w-20 h-20 bg-[#D4AF37]/10 rounded-full blur-2xl -mr-6 -mt-6 pointer-events-none" />
              <div className="w-10 h-10 mb-2.5 rounded-full bg-white/10 border border-white/15 flex items-center justify-center shadow-inner relative z-10">
                <svg className="w-5 h-5 text-[#D4AF37]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-white text-base font-bold mb-2 relative z-10">Download AMA Connect App</h3>
              <p className="text-slate-300 text-xs mb-4 leading-relaxed relative z-10">
                Real-time court news, lawyer interviews,<br />legal communities &amp; AMA sessions.<br />All in one free app.
              </p>
              <a
                href={PLAY_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 bg-[#B8860B] hover:bg-[#9E7307] text-white py-2.5 rounded-xl font-bold text-xs transition-colors relative z-10 shadow-[0_4px_14px_rgba(184,134,11,0.4)] mb-2"
              >
                <span>Get it on Google Play</span>
              </a>
              <a
                href={APP_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-1.5 bg-white/10 hover:bg-white/15 border border-white/15 text-white py-2.5 rounded-xl font-bold text-xs transition-colors relative z-10"
              >
                <span>Download on App Store</span>
              </a>
            </div>

            {/* AMA Connect Platform Highlights Card */}
            <div className="bg-white rounded-[20px] p-5 border border-[#D4AF37]/20 shadow-sm">
              <h3 className="text-[11px] font-bold text-slate-500 uppercase tracking-widest mb-4 text-center">
                WHY PEOPLE LOVE AMA CONNECT
              </h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#B8860B]/10 flex items-center justify-center shrink-0">
                    <svg className="w-4 h-4 text-[#B8860B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <span className="font-bold text-[#413832] text-xs">1,000+ App Downloads</span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#B8860B]/10 flex items-center justify-center shrink-0">
                    <svg className="w-4 h-4 text-[#B8860B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <span className="font-bold text-[#413832] text-xs">200+ Verified Lawyers on App</span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#B8860B]/10 flex items-center justify-center shrink-0">
                    <svg className="w-4 h-4 text-[#B8860B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                    </svg>
                  </div>
                  <span className="font-bold text-[#413832] text-xs">Daily Court Updates &amp; News</span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#B8860B]/10 flex items-center justify-center shrink-0">
                    <svg className="w-4 h-4 text-[#B8860B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                    </svg>
                  </div>
                  <span className="font-bold text-[#413832] text-xs">Free AMA Community Sessions</span>
                </div>
              </div>
            </div>

            {/* News Desk & Categories Card */}
            <div className="bg-white rounded-[20px] p-5 border border-slate-100 shadow-3xs">
              <div className="flex items-center justify-between border-b border-slate-100 pb-2 mb-3">
                <h3 className="text-[11px] font-extrabold text-slate-400 uppercase tracking-widest">Reported By</h3>
              </div>
              <h4 className="font-extrabold text-slate-900 text-sm leading-snug">{article.author || 'AMA Connect'}</h4>
              <p className="text-xs text-slate-500 leading-relaxed mt-1">
                {article.source || 'AMA Connect'} Legal Newsroom. Verified court orders, statutory updates, and legal dispatches.
              </p>
              <div className="flex flex-wrap gap-1.5 mt-3">
                {displayCategories.map((cat) => (
                  <Link
                    key={cat}
                    href={`/news?category=${encodeURIComponent(cat)}`}
                    className="text-[11px] font-bold px-2.5 py-1 rounded-lg bg-[#FAF6EC] text-[#B8860B] border border-[#E9DFCA] hover:bg-[#F2E8D2] transition-colors"
                  >
                    {cat}
                  </Link>
                ))}
              </div>
              <Link
                href="/news"
                className="inline-flex items-center justify-center gap-1 w-full border border-slate-200 text-slate-700 hover:border-[#B8860B] hover:text-[#B8860B] text-center py-2.5 rounded-xl text-xs font-extrabold transition-all shadow-3xs mt-4"
              >
                Browse All Legal News →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default NewsDetail;
