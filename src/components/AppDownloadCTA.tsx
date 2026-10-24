"use client";

import React from "react";
import Image from "next/image";

const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.ama.ama_legal_solutions";
const APP_STORE_URL =
  "https://apps.apple.com/in/app/ama-legal-solutions/id6755156186";

export default function AppDownloadCTA() {
  return (
    <section className="w-full py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-[#FAF8F3] border-t border-[#E8E4DE]">
      <div className="max-w-[1280px] mx-auto">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#2D2219] via-[#231A13] to-[#17110C] border border-[#C9A227]/35 p-7 sm:p-10 lg:p-12 shadow-[0_20px_60px_-15px_rgba(45,34,25,0.45)]">
          {/* Decorative Ambient Glows */}
          <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-[#C9A227]/15 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-[#C9A227]/10 blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
            {/* Left Copy */}
            <div className="flex-1 text-center lg:text-left max-w-2xl">
              <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#C9A227]/15 border border-[#C9A227]/35 text-[#D4AF37] text-[11px] font-bold uppercase tracking-[0.18em] mb-4">
                <span className="w-2 h-2 rounded-full bg-[#C9A227] animate-pulse" />
                AMA Connect Mobile App
              </span>

              <h2 className="font-playfair text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight mb-3">
                Download the <span className="text-[#C9A227] italic font-normal">AMA Connect</span> App Now
              </h2>

              <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-6">
                Stay updated with real-time court dispatches, read exclusive lawyer interviews, join specialized legal communities, and participate in Ask Me Anything (AMA) discussions — all in one free app on Google Play Store and Apple App Store.
              </p>

              {/* Feature Pills */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 text-xs text-white/90 font-semibold">
                <span className="px-3 py-1.5 rounded-full bg-white/10 border border-white/15">
                  ✓ Daily Court Updates &amp; News
                </span>
                <span className="px-3 py-1.5 rounded-full bg-white/10 border border-white/15">
                  ✓ 200+ Verified Lawyers on App
                </span>
                <span className="px-3 py-1.5 rounded-full bg-white/10 border border-white/15">
                  ✓ Legal Communities &amp; AMA Q&amp;A
                </span>
              </div>
            </div>

            {/* Right Store Buttons */}
            <div className="flex flex-col sm:flex-row lg:flex-col items-center justify-center gap-3.5 w-full sm:w-auto shrink-0">
              <a
                href={PLAY_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Get AMA Connect on Google Play Store"
                className="w-full sm:w-[210px] bg-white hover:bg-[#FAF6EC] text-[#1E1E1E] border border-white/20 rounded-2xl px-5 py-3.5 flex items-center justify-center gap-3.5 transition-all duration-200 hover:-translate-y-0.5 shadow-lg"
              >
                <svg viewBox="0 0 24 24" className="w-7 h-7 shrink-0">
                  <path
                    d="M3.25 1.55a1.73 1.73 0 0 0-.47 1.22v18.46a1.73 1.73 0 0 0 .47 1.22l.06.06L13.88 12v-.15L3.31 1.5z"
                    fill="#00F0FF"
                  />
                  <path
                    d="M17.41 15.58L13.88 12v-.15L17.41 8.3l.08.05 4.17 2.37c1.19.67 1.19 1.78 0 2.46l-4.17 2.37-.08.03z"
                    fill="#FFC700"
                  />
                  <path
                    d="M17.49 15.53L13.88 11.92L3.25 22.45a1.44 1.44 0 0 0 1.83.06l12.41-7.07"
                    fill="#FF003F"
                  />
                  <path
                    d="M17.49 8.35L5.08 1.28A1.44 1.44 0 0 0 3.25 1.34L13.88 11.93l3.61-3.58"
                    fill="#00E676"
                  />
                </svg>
                <div className="flex flex-col items-start text-left">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500 leading-none mb-1">
                    GET IT ON
                  </span>
                  <span className="text-base font-extrabold text-[#1E1E1E] leading-none">
                    Google Play
                  </span>
                </div>
              </a>

              <a
                href={APP_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Download AMA Connect on Apple App Store"
                className="w-full sm:w-[210px] bg-[#121212] hover:bg-black text-white border border-white/20 rounded-2xl px-5 py-3.5 flex items-center justify-center gap-3.5 transition-all duration-200 hover:-translate-y-0.5 shadow-lg"
              >
                <svg viewBox="0 0 24 24" className="w-7 h-7 fill-white shrink-0">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 4.17c.66-.81 1.11-1.93.99-3.06-.96.04-2.13.64-2.82 1.45-.6.69-1.12 1.83-.98 2.94 1.07.08 2.15-.52 2.81-1.33z" />
                </svg>
                <div className="flex flex-col items-start text-left">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 leading-none mb-1">
                    Download on the
                  </span>
                  <span className="text-base font-extrabold text-white leading-none">
                    App Store
                  </span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
