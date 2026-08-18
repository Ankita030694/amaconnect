"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

interface MediaMention {
  name: string;
  logo: string;
  href: string;
  width: number;
  height: number;
  className?: string;
}

const MEDIA_MENTIONS: MediaMention[] = [
  {
    name: "Bar & Bench",
    logo: "/media/barandbench.png",
    href: "https://www.barandbench.com/news/ama-legal-solutions-launches-indias-first-law-firm-backed-pro-bono-driven-mobile-app",
    width: 140,
    height: 40,
    className: "h-7 sm:h-8 w-auto",
  },
  {
    name: "Livemint",
    logo: "/media/livemint.png",
    href: "https://www.livemint.com/",
    width: 110,
    height: 35,
    className: "h-6 sm:h-7 w-auto",
  },
  {
    name: "YourStory",
    logo: "/media/yourstory.png",
    href: "https://yourstory.com/companies/ama-legal-solutions",
    width: 130,
    height: 38,
    className: "h-6 sm:h-7 w-auto",
  },
  {
    name: "Mid-Day",
    logo: "/media/mid_day.png",
    href: "https://www.mid-day.com/",
    width: 120,
    height: 36,
    className: "h-6 sm:h-7 w-auto",
  },
  {
    name: "Medium",
    logo: "/media/medium.png",
    href: "https://medium.com/@amalegalsolutions",
    width: 110,
    height: 32,
    className: "h-5 sm:h-6 w-auto",
  },
];

interface SolutionItem {
  title: string;
  href: string;
  isExternal?: boolean;
}

const SOLUTIONS: SolutionItem[] = [
  {
    title: "Settle your loans",
    href: "/loan-app-debt-settlement-harassment-legal-help",
  },
  {
    title: "Reduce your EMIs",
    href: "/loan-app-debt-settlement-harassment-legal-help",
  },
  {
    title: "Eliminate your loans",
    href: "/loan-app-debt-settlement-harassment-legal-help",
  },
  {
    title: "Support against Harassment",
    href: "/loan-app-debt-settlement-harassment-legal-help",
  },
  {
    title: "Draft Legal Notice",
    href: "/how-to-draft-legal-notice-india-guide",
  },
  {
    title: "Cheque Bounce (Sec 138)",
    href: "/cheque-bounce-legal-notice-section-138-guide",
  },
  {
    title: "Property & Lease Disputes",
    href: "/property-dispute-resolution-india-legal-remedies",
  },
  {
    title: "Homebuyer & RERA Relief",
    href: "/homebuyer-rights-rera-builder-delay-remedies",
  },
  {
    title: "Consumer Court Protection",
    href: "/consumer-protection-ecommerce-defective-goods-guide",
  },
  {
    title: "Mutual Divorce & Family Law",
    href: "/mutual-consent-divorce-alimony-child-support-guide",
  },
  {
    title: "Startup & Corporate Legal",
    href: "/startup-registration-incorporation-india-guide",
  },
  {
    title: "Ask Legal Question Free",
    href: "/ask-me-anything",
  },
];

export default function BlogCompanyOverview() {
  return (
    <div className="w-full my-10 rounded-[24px] sm:rounded-[28px] border-2 border-[#D4AF37]/80 bg-white overflow-hidden shadow-[0_8px_30px_rgba(212,175,55,0.08)] transition-all duration-300">
      {/* Top Section: Brand Info & Description */}
      <div className="p-6 sm:p-8 md:p-10 bg-white">
        {/* Brand Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
          <Link href="/" className="inline-flex items-center gap-3 group">
            <div className="relative">
              <Image
                src="/logo2.svg"
                alt="AMA Legal Solutions Logo"
                width={170}
                height={48}
                className="h-9 sm:h-11 w-auto object-contain transition-transform group-hover:scale-[1.02]"
                priority
              />
            </div>
          </Link>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF6EC] border border-[#E9DFCA] text-[11px] font-bold text-[#B8860B] tracking-wide uppercase">
            <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse"></span>
            Verified Law Practice
          </div>
        </div>

        {/* Company Description Tailored to AMA Legal Solutions */}
        <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-8">
          <strong>AMA Legal Solutions</strong> is India&apos;s trusted, law firm-backed and pro-bono driven legal advisory platform. Founded with a vision to democratize access to justice and headquartered in Gurugram, AMA Legal Solutions has counselled <strong>10,000+ individuals, startups, and enterprises</strong> across India on personal debt settlement, recovery agent harassment defense, cheque bounce cases, property disputes, consumer protection, and corporate litigation. We charge transparent fees with no hidden costs, delivering swift and confidential High Court and Supreme Court legal guidance.
        </p>

        {/* Media Mentions Section */}
        <div className="pt-2">
          <h4 className="text-center text-sm sm:text-base font-extrabold text-[#413832] uppercase tracking-wider mb-5">
            Media Mentions
          </h4>

          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 md:gap-12 py-2">
            {MEDIA_MENTIONS.map((media) => (
              <a
                key={media.name}
                href={media.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Featured in ${media.name}`}
                className="relative flex items-center justify-center grayscale hover:grayscale-0 opacity-75 hover:opacity-100 transition-all duration-200 hover:scale-105"
              >
                <img
                  src={media.logo}
                  alt={media.name}
                  className={`${media.className} object-contain`}
                />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-[#E9DFCA] to-transparent" />

      {/* Bottom Section: Our Solutions */}
      <div className="p-6 sm:p-8 md:p-10 bg-[#FAF6EC]/60 border-t border-[#E9DFCA]/50">
        <div className="flex items-center justify-between flex-wrap gap-2 mb-6">
          <h3 className="text-lg sm:text-xl md:text-2xl font-black text-[#D97706] tracking-tight">
            Our Solutions:
          </h3>
          <span className="text-xs font-semibold text-slate-500 hidden sm:inline-block">
            Get instant legal assistance & case assessment
          </span>
        </div>

        {/* Solutions Grid matching the reference layout & project styling */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-3.5">
          {SOLUTIONS.map((item, idx) => (
            <Link
              key={idx}
              href={item.href}
              className="group flex items-center justify-center text-center px-4 py-3 sm:py-3.5 rounded-xl sm:rounded-2xl border-2 border-[#0d3b66] bg-white hover:bg-[#0d3b66] text-[#0d3b66] hover:text-white font-bold text-xs sm:text-sm shadow-2xs hover:shadow-md transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
            >
              <span className="leading-snug">{item.title}</span>
            </Link>
          ))}
        </div>

        {/* Action Callout Footnote */}
        <div className="mt-6 pt-5 border-t border-[#E9DFCA] flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <div className="text-xs text-slate-600 font-medium">
            Facing an urgent legal notice, loan harassment, or dispute?
          </div>
          <a
            href="tel:+918700343611"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#B8860B] hover:bg-[#9E7307] text-white font-bold text-xs transition-colors shadow-sm"
          >
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
            </svg>
            Speak to a Lawyer Now
          </a>
        </div>
      </div>
    </div>
  );
}
