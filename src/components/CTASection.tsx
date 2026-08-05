"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import DownloadModal from "./DownloadModal";

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
    <section id="download" className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
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
          />
          {/* Overlay to blend the image into the dark background */}
          <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-l from-[#0a0a0a] via-transparent to-transparent sm:from-transparent sm:via-transparent sm:to-[#0a0a0a]/90 lg:to-[#0a0a0a]" />
        </div>
      </div>

      {/* Premium Download Modal */}
      <DownloadModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}
