'use client'
import React, { useEffect, useState, useMemo, memo } from 'react';
import Link from 'next/link';

const FALLBACK_IMAGE = '/ashishbhay.png';

const getValidImageSrc = (src: string | undefined | null): string =>
  !src || src.trim() === '' ? FALLBACK_IMAGE : src;

const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
  const target = e.target as HTMLImageElement;
  if (!target.src.endsWith(FALLBACK_IMAGE)) {
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
}

interface NewsDetailProps {
  article: NewsArticle;
  relatedNews: NewsArticle[];
}

const formatDate = (iso: string) => {
  const d = new Date(iso);
  if (isNaN(d.getTime())) return iso;
  return d.toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' });
};

function Breadcrumbs({ items }: { items: { label: string; href: string }[] }) {
  return (
    <nav className="flex text-[10px] sm:text-xs font-semibold text-slate-500 gap-1 sm:gap-1.5 items-center mb-5">
      <Link href="/" className="hover:text-[#D4AF37] transition-colors">Home</Link>
      {items.map((item, idx) => (
        <React.Fragment key={idx}>
          <span className="text-slate-300">/</span>
          <Link
            href={item.href}
            className={idx === items.length - 1 ? 'text-[#B8860B] font-bold line-clamp-1' : 'hover:text-[#D4AF37] transition-colors'}
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
                      ? 'text-[#B8860B] font-extrabold border-[#B8860B]'
                      : 'text-slate-500 hover:text-[#B8860B] border-transparent'
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
                isActive ? 'text-[#B8860B] border-[#B8860B]' : 'text-slate-600 hover:text-[#B8860B] border-transparent'
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

// Adds ids to h2/h3 headings and builds the table of contents
const processContent = (html: string) => {
  if (!html) return { content: '', sections: [] as { id: string; title: string }[] };

  const sanitized = html.replace(/&amp;amp;/g, '&').replace(/&amp;/g, '&');
  const sections: { id: string; title: string }[] = [];
  const used = new Set<string>();

  const content = sanitized.replace(/<(h[23])(.*?)>(.*?)<\/\1>/g, (match, tag, attrs, title) => {
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
  const readTime = `${Math.max(1, Math.ceil(wordCount / 200))} min read`;

  const handleLinkClick = React.useCallback((e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 90;
      window.scrollTo({ top: y, behavior: 'smooth' });
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

    const update = () => {
      const scrollPosition = window.scrollY + 130;
      if (window.scrollY < 100) {
        setActiveId(tocSections[0].id);
        ticking = false;
        return;
      }
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
          if (scrollPosition >= top) active = section.id;
          else break;
        }
      }
      setActiveId(active);
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    update();
    return () => window.removeEventListener('scroll', onScroll);
  }, [tocSections]);

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

  const primaryCategory = article.categories?.find((c) => c !== 'All') || article.categories?.[0] || 'Legal News';
  const breadcrumbItems = [
    { label: 'News', href: '/news' },
    { label: article.title, href: `/news/${article.slug}` },
  ];

  return (
    <div className="min-h-dvh bg-[#F5F2EB] text-gray-800 pb-12 font-sans">
      {/* Full Screen Banner with Blurred Background Filler */}
      {article.urlToImage && (
        <div className="w-full h-[224px] sm:h-[304px] md:h-[400px] lg:h-[440px] relative bg-[#2D2219] flex items-center justify-center overflow-hidden border-b border-slate-200/40 shadow-xs">
          <img
            src={getValidImageSrc(article.urlToImage)}
            alt=""
            className="absolute inset-0 w-full h-full object-cover blur-xl scale-110 opacity-30 select-none pointer-events-none z-0"
          />
          <div className="absolute inset-0 bg-[#B8860B]/15 mix-blend-color select-none pointer-events-none z-0" />
          <img
            src={getValidImageSrc(article.urlToImage)}
            alt={article.title}
            className="relative z-10 max-w-full max-h-full h-full w-auto object-contain"
            onError={handleImageError}
          />
        </div>
      )}

      <div className="container mx-auto px-4 max-w-[1600px] py-8">
        <Breadcrumbs items={breadcrumbItems} />

        {/* Header Content */}
        <div className="relative max-w-4xl mx-auto mb-10 mt-5 p-5 sm:p-6 md:p-8 rounded-3xl bg-white/70 backdrop-blur-md border border-white/80 border-t-[#B8860B]/20 shadow-xs text-center overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-48 bg-[#B8860B]/5 rounded-full blur-3xl pointer-events-none -mt-24" />

          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#B8860B]/10 border border-[#B8860B]/20 text-[#B8860B] rounded-full text-[9px] sm:text-[10px] font-black uppercase tracking-wider mb-5 relative z-10">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#B8860B] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#B8860B]"></span>
            </span>
            {primaryCategory}
          </div>

          <h1 className="relative z-10 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#2D2219] leading-tight tracking-tight mb-5 mt-1">
            {article.title}
          </h1>

          {article.description && (
            <p className="relative z-10 text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto mb-2">
              {article.description}
            </p>
          )}

          <div className="relative z-10 flex flex-wrap justify-center items-center gap-2.5 md:gap-3 text-slate-500 text-[10px] md:text-xs font-semibold mt-5">
            <span className="flex items-center gap-1.5 bg-slate-100/90 border border-slate-200/50 px-2.5 py-1 rounded-xl">
              <svg className="w-3 h-3 text-slate-400" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
              {formatDate(article.publishedAt)}
            </span>

            <span className="flex items-center gap-1.5 bg-slate-100/90 border border-slate-200/50 px-2.5 py-1 rounded-xl">
              <svg className="w-3 h-3 text-slate-400" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              {readTime}
            </span>

            <span className="flex items-center gap-2 bg-[#B8860B]/5 border border-[#B8860B]/15 text-slate-900 px-2.5 py-1 rounded-xl">
              <span className="font-extrabold text-[#B8860B]">{article.source || 'AMA Connect'}</span>
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[176px_1fr_256px] gap-6 items-start">
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

            <div className="bg-white p-5 md:p-10 rounded-2xl border border-slate-100 shadow-3xs space-y-10">
              <div
                className="prose max-w-none text-slate-700 leading-relaxed tiptap-content text-sm sm:text-[14px] md:text-[15px]"
                dangerouslySetInnerHTML={{ __html: processedContent }}
              />

              <style jsx global>{`
                .tiptap-content h1 { font-size: 1.6em; font-weight: 800; margin-top: 1.2em; margin-bottom: 0.6em; color: #B8860B; }
                .tiptap-content h2 { font-size: 1.4em; font-weight: 800; margin-top: 1.2em; margin-bottom: 0.6em; color: #B8860B; scroll-margin-top: 80px; }
                .tiptap-content h3 { font-size: 1.2em; font-weight: 800; margin-top: 1em; margin-bottom: 0.5em; color: #B8860B; scroll-margin-top: 80px; }
                .tiptap-content p { margin-bottom: 1em; line-height: 1.65; color: #334155; text-align: justify; }
                .tiptap-content ul { list-style-type: disc; padding-left: 1.25em; margin-bottom: 1em; }
                .tiptap-content ol { list-style-type: decimal; padding-left: 1.25em; margin-bottom: 1em; }
                .tiptap-content li { margin-bottom: 0.4em; color: #334155; line-height: 1.65; text-align: justify; }
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
                  <span className="font-extrabold text-slate-900 text-xs">Share this news:</span>
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
            </div>
          </div>

          {/* Right Sidebar - Publisher & Related News */}
          <div className="space-y-6 lg:sticky lg:top-24">
            <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-3xs">
              <div className="flex items-center justify-between border-b border-slate-150 pb-1.5 mb-3">
                <h3 className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest">Reported By</h3>
              </div>
              <h4 className="font-extrabold text-slate-900 text-xs sm:text-sm leading-snug">{article.author || 'AMA Connect'}</h4>
              <p className="text-[10px] sm:text-xs text-slate-600 leading-relaxed mt-1.5">
                Legal news desk at {article.source || 'AMA Connect'}. Reports are compiled from the cited sources.
              </p>
              <Link
                href="/news"
                className="inline-flex items-center justify-center gap-1 w-full border border-slate-200 text-slate-700 hover:border-[#B8860B] hover:text-[#B8860B] text-center py-2 rounded-xl text-[10px] font-extrabold transition-all shadow-3xs mt-3"
              >
                More legal news
              </Link>
            </div>

            {relatedNews && relatedNews.length > 0 && (
              <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-3xs">
                <h3 className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest mb-4 border-b border-slate-50 pb-1.5">Related News</h3>
                <div className="space-y-4.5">
                  {relatedNews.map((item) => (
                    <Link key={item._id} href={`/news/${item.slug}`} className="group flex gap-3 items-center">
                      {item.urlToImage && (
                        <div className="w-[84px] h-[56px] rounded-lg overflow-hidden flex-shrink-0 bg-[#2D2219] border border-slate-150 relative flex items-center justify-center shadow-3xs">
                          <img
                            src={getValidImageSrc(item.urlToImage)}
                            alt=""
                            className="absolute inset-0 w-full h-full object-cover blur-xs scale-110 opacity-30 select-none pointer-events-none"
                          />
                          <img
                            src={getValidImageSrc(item.urlToImage)}
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
                          {item.source} • {formatDate(item.publishedAt)}
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

export default NewsDetail;
