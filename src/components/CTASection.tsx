"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function CTASection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Close modal on Escape key press and prevent background scrolling
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsModalOpen(false);
      }
    };
    if (isModalOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isModalOpen]);

  return (
    <section id="download" className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <div className="relative overflow-hidden rounded-3xl sm:rounded-[2rem] bg-[#0a0a0a] text-white flex flex-col lg:flex-row items-stretch shadow-2xl min-h-[350px] sm:min-h-[450px]">
        {/* Subtle Background Glow */}
        <div className="absolute top-0 right-0 w-full h-full pointer-events-none opacity-20 bg-[radial-gradient(circle_at_70%_50%,rgba(255,215,0,0.15),transparent_50%)]" />

        {/* Left Content Section */}
        <div className="flex-[1.2] p-6 sm:p-10 lg:p-14 flex flex-col justify-center relative z-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight mb-4 sm:mb-5">
            Get Legal Help in <br className="hidden xl:block" />
            Minutes. One <br className="hidden xl:block" />
            Download Away.
          </h2>
          <p className="text-gray-400 text-sm sm:text-lg max-w-md mb-6 sm:mb-8 leading-relaxed">
            Connect with verified lawyers, get instant advice, and resolve your legal issues all in one app.
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 mb-6 sm:mb-8">
            {/* Download Button */}
            <button 
              onClick={() => setIsModalOpen(true)}
              className="flex justify-center items-center gap-2 sm:gap-3 bg-white text-black px-5 sm:px-7 py-3 sm:py-3.5 rounded-xl font-semibold text-sm sm:text-base hover:bg-gray-100 transition-all shadow-lg hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
            >
              Download App Now
              <svg 
                width="16" 
                height="16" 
                className="sm:w-[18px] sm:h-[18px]"
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="M7 13l5 5 5-5M12 18V6" />
              </svg>
            </button>

            {/* Ask Question Link */}
            <Link 
              href="/ask-me-anything" 
              className="flex justify-center items-center px-5 sm:px-7 py-3 sm:py-3.5 rounded-xl font-semibold text-sm sm:text-base border-2 border-[#D4AF37]/50 bg-black/40 backdrop-blur-sm text-white hover:bg-[#D4AF37]/10 hover:border-[#D4AF37] transition-all shadow-lg hover:scale-[1.02] active:scale-[0.98]"
            >
              Ask a Question First
            </Link>
          </div>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-[11px] sm:text-sm text-gray-400 font-medium">
            <span className="flex items-center gap-1.5 sm:gap-2">Free to download</span>
            <span className="hidden sm:block text-gray-700">•</span>
            <span className="flex items-center gap-1.5 sm:gap-2">Verified lawyers</span>
            <span className="hidden sm:block text-gray-700">•</span>
            <span className="flex items-center gap-1.5 sm:gap-2">Instant response</span>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="lg:w-1/2 relative min-h-[200px] sm:min-h-[300px] lg:min-h-0 overflow-hidden">
          <Image
            src="/cta-bg.jpg"
            alt="AMA Connect App Preview"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover object-left-top lg:object-right-top scale-110 lg:scale-125 translate-x-4 lg:translate-x-10"
            priority
          />
          {/* Overlay to blend the image into the dark background */}
          <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-l from-[#0a0a0a] via-transparent to-transparent sm:from-transparent sm:via-transparent sm:to-[#0a0a0a]/90 lg:to-[#0a0a0a]" />
        </div>
      </div>

      {/* Premium Download Modal */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md transition-all duration-300 animate-in fade-in"
          onClick={() => setIsModalOpen(false)}
        >
          {/* Modal Container */}
          <div 
            className="relative w-full max-w-md bg-white border border-gray-150 rounded-[2rem] p-6 sm:p-8 shadow-2xl flex flex-col items-center text-center transform scale-100 transition-all duration-300 animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Subtle Gradient Glow in Popup */}
            <div className="absolute top-0 right-0 w-full h-full pointer-events-none opacity-10 bg-[radial-gradient(circle_at_50%_0%,rgba(1,135,95,0.08),transparent_50%)] rounded-[2rem]" />

            {/* Close Button */}
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 transition-colors p-2 rounded-full hover:bg-gray-100 active:scale-95 cursor-pointer z-10"
              aria-label="Close modal"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>

            {/* Logo/Icon Container */}
            <div className="w-16 h-16 bg-gray-50 rounded-2xl border border-gray-100 flex items-center justify-center mb-5 shadow-inner">
              <Image 
                src="/logo2.svg" 
                alt="AMA Legal Solutions" 
                width={40} 
                height={40}
                className="h-9 w-auto object-contain"
              />
            </div>

            {/* Title & Subtitle */}
            <h3 className="text-xl sm:text-2xl font-extrabold text-gray-900 mb-2 tracking-tight">
              Get AMA Legal Solutions
            </h3>
            <p className="text-gray-600 text-sm sm:text-base mb-6 max-w-xs leading-relaxed font-medium">
              Available for Android and iOS. Choose your platform below to download the app:
            </p>

            {/* Platform Selection Buttons */}
            <div className="flex flex-col gap-3.5 w-full">
              {/* Google Play Store */}
              <a 
                href="https://play.google.com/store/apps/details?id=com.ama.ama_legal_solutions&pcampaignid=web_share"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsModalOpen(false)}
                className="flex items-center justify-center gap-3.5 bg-[#01875f] hover:bg-[#00704e] text-white px-6 py-3.5 rounded-2xl font-semibold text-sm sm:text-base transition-all hover:scale-[1.02] active:scale-[0.98] shadow-md hover:shadow-lg cursor-pointer"
              >
                <svg className="w-6 h-6 shrink-0" viewBox="0 0 24 24">
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
                <div className="text-left leading-tight">
                  <span className="text-[10px] text-white/80 block font-medium uppercase tracking-wider mb-0.5">GET IT ON</span>
                  <span className="font-bold text-sm sm:text-base block">Google Play</span>
                </div>
              </a>

              {/* Apple App Store */}
              <a 
                href="https://apps.apple.com/in/app/ama-legal-solutions/id6755156186"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsModalOpen(false)}
                className="flex items-center justify-center gap-3.5 bg-black hover:bg-gray-900 text-white px-6 py-3.5 rounded-2xl font-semibold text-sm sm:text-base transition-all hover:scale-[1.02] active:scale-[0.98] shadow-md hover:shadow-lg cursor-pointer"
              >
                <svg viewBox="0 0 24 24" className="w-6 h-6 shrink-0 fill-current">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 4.17c.66-.81 1.11-1.93.99-3.06-.96.04-2.13.64-2.82 1.45-.6.69-1.12 1.83-.98 2.94 1.07.08 2.15-.52 2.81-1.33z" />
                </svg>
                <div className="text-left leading-tight">
                  <span className="text-[10px] text-white/80 block font-medium uppercase tracking-wider mb-0.5">DOWNLOAD ON THE</span>
                  <span className="font-bold text-sm sm:text-base block">App Store</span>
                </div>
              </a>
            </div>

            {/* Badge Indicator */}
            <span className="text-[11px] text-gray-500 font-medium mt-5 block">
              Free to download • Secure connection
            </span>
          </div>
        </div>
      )}
    </section>
  );
}
