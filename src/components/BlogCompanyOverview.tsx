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

interface PlatformFeatureItem {
  title: string;
  href: string;
}

const PLATFORM_FEATURES: PlatformFeatureItem[] = [
  {
    title: "Latest Court News & Dispatches",
    href: "/news",
  },
  {
    title: "Senior Lawyer Interviews",
    href: "/interviews",
  },
  {
    title: "Ask Me Anything (AMA) Q&A",
    href: "/ask-me-anything",
  },
  {
    title: "Exclusive Legal Communities",
    href: "/communities",
  },
  {
    title: "Legal Articles & Practice Guides",
    href: "/blog",
  },
  {
    title: "About AMA Connect App",
    href: "/about",
  },
];

const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.ama.ama_legal_solutions";
const APP_STORE_URL =
  "https://apps.apple.com/in/app/ama-legal-solutions/id6755156186";

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
                alt="AMA Connect Logo"
                width={170}
                height={48}
                className="h-9 sm:h-11 w-auto object-contain transition-transform group-hover:scale-[1.02]"
                priority
              />
            </div>
          </Link>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF6EC] border border-[#E9DFCA] text-[11px] font-bold text-[#B8860B] tracking-wide uppercase">
            <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse"></span>
            Legal Community &amp; News App
          </div>
        </div>

        {/* Platform Description Tailored to AMA Connect App */}
        <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-8">
          <strong>AMA Connect</strong> is an Indian legal community, court journalism, and lawyer networking app. Designed to foster public legal literacy and connect citizens, law students, and legal professionals, the AMA Connect app features real-time Supreme Court and High Court news dispatches, in-depth lawyer interviews, specialized legal communities, and interactive <strong>Ask Me Anything (AMA)</strong> sessions.
        </p>

        {/* Media Mentions Section */}
        <div className="pt-2">
          <h4 className="text-center text-sm sm:text-base font-extrabold text-[#413832] uppercase tracking-wider mb-5">
            Featured In Media
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

      {/* Bottom Section: Explore on AMA Connect + App Store Links */}
      <div className="p-6 sm:p-8 md:p-10 bg-[#FAF6EC]/60 border-t border-[#E9DFCA]/50">
        <div className="flex items-center justify-between flex-wrap gap-2 mb-6">
          <h3 className="text-lg sm:text-xl md:text-2xl font-black text-[#413832] tracking-tight">
            Explore on AMA Connect:
          </h3>
          <span className="text-xs font-semibold text-slate-500 hidden sm:inline-block">
            India&apos;s Legal News, Interviews &amp; Community App
          </span>
        </div>

        {/* Platform Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-3.5">
          {PLATFORM_FEATURES.map((item, idx) => (
            <Link
              key={idx}
              href={item.href}
              className="group flex items-center justify-center text-center px-4 py-3 sm:py-3.5 rounded-xl sm:rounded-2xl border-2 border-[#382E26] bg-white hover:bg-[#382E26] text-[#382E26] hover:text-white font-bold text-xs sm:text-sm shadow-2xs hover:shadow-md transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
            >
              <span className="leading-snug">{item.title}</span>
            </Link>
          ))}
        </div>

        {/* App Download Footnote */}
        <div className="mt-6 pt-5 border-t border-[#E9DFCA] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="text-xs sm:text-sm text-slate-700 font-semibold">
            Download the <span className="text-[#B8860B] font-bold">AMA Connect</span> app on Google Play &amp; App Store:
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href={PLAY_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#2D2219] hover:bg-[#1E1711] text-white font-bold text-xs transition-colors shadow-sm"
            >
              <span>Google Play</span>
            </a>
            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#B8860B] hover:bg-[#9E7307] text-white font-bold text-xs transition-colors shadow-sm"
            >
              <span>App Store</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
