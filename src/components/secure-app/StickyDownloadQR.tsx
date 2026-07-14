"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

export default function StickyDownloadQR() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky QR after scrolling past the hero (roughly 500px)
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <aside 
      aria-label="Download App"
      className={`fixed z-50 transition-all duration-500 ease-in-out ${
        isVisible 
          ? "translate-y-0 opacity-100" 
          : "translate-y-full lg:translate-y-0 lg:translate-x-full opacity-0"
      } bottom-0 left-0 right-0 lg:bottom-auto lg:left-auto lg:top-1/4 lg:right-6`}
    >
      {/* Mobile Sticky Bar */}
      <div className="lg:hidden w-full bg-[#2D2219] text-white p-4 flex items-center justify-between shadow-[0_-10px_40px_rgba(0,0,0,0.2)] border-t border-white/10">
        <div className="flex flex-col">
          <span className="font-bold text-sm">Download the Mobile Law App Today</span>
          <span className="text-xs text-[#D4AF37] font-bold tracking-widest uppercase mt-0.5">Promo: FIRSTCONSULT</span>
        </div>
        <button className="bg-white text-[#1A1A1A] font-bold px-5 py-2.5 rounded-lg text-sm hover:bg-gray-100 transition-colors">
          Get App
        </button>
      </div>

      {/* Desktop Floating Widget */}
      <div className="hidden lg:flex flex-col w-[280px] bg-white rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-gray-100 overflow-hidden">
        <div className="bg-[#2D2219] p-5 text-center">
          <h2 className="text-white font-extrabold text-lg leading-tight">
            Download the Mobile Law App Today
          </h2>
        </div>
        <div className="p-6 flex flex-col items-center text-center bg-[#FDFBF7]">
          {/* Mock QR Code */}
          <div className="w-32 h-32 bg-white rounded-xl border-2 border-dashed border-[#D4AF37] flex items-center justify-center mb-4">
             <div className="w-24 h-24 grid grid-cols-5 grid-rows-5 gap-1 opacity-80">
                {Array.from({length: 25}).map((_, i) => {
                  // Deterministic pattern instead of Math.random() to prevent hydration errors
                  const isVisible = [0, 2, 4, 5, 9, 10, 11, 13, 14, 16, 18, 20, 21, 23, 24].includes(i);
                  return (
                    <div key={i} className={`bg-[#2D2219] rounded-sm ${isVisible ? 'opacity-100' : 'opacity-0'}`} />
                  );
                })}
             </div>
          </div>
          <p className="text-xs text-gray-500 font-medium mb-4 uppercase tracking-widest">
            Scan to Download
          </p>
          
          <div className="w-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-xl p-3 mb-2">
            <span className="block text-xs text-gray-500 mb-1">Apply promo code for first session:</span>
            <span className="block font-black text-[#2D2219] tracking-widest">FIRSTCONSULT</span>
          </div>

          <div className="mt-4 text-xs text-gray-400">
            Having trouble? <Link href="/contact" className="text-[#D4AF37] hover:underline">Contact Support</Link>
          </div>
        </div>
      </div>
    </aside>
  );
}
