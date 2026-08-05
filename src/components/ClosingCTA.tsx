"use client";

import { useState } from "react";
import Image from "next/image";
import DownloadModal from "./DownloadModal";

export default function ClosingCTA() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="w-full bg-[#FDFBF7] py-12 sm:py-20 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-6xl mx-auto">
        <div className="bg-[#DAB34A] rounded-[2rem] sm:rounded-[3rem] p-10 sm:p-16 lg:p-20 flex flex-col items-center text-center shadow-lg relative overflow-hidden">
          
          {/* Subtle light effect */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.4)_0%,transparent_70%)] pointer-events-none"></div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#2D2219] mb-8 sm:mb-10 tracking-tight leading-tight relative z-10">
            Legal support that feels personal.<br className="hidden sm:block" /> Right in your pocket.
          </h2>

          <button
            onClick={() => setIsModalOpen(true)}
            className="flex items-center justify-center gap-4 bg-[#2D2219] text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-full font-bold text-base sm:text-lg hover:bg-black transition-all shadow-xl hover:scale-[1.02] active:scale-[0.98] cursor-pointer relative z-10 group"
          >
            Download AMA Connect
            
            <div className="flex items-center gap-2 border-l border-white/20 pl-4 ml-2">
              <svg className="w-5 h-5 sm:w-6 sm:h-6 group-hover:scale-110 transition-transform" viewBox="0 0 24 24" aria-hidden>
                <path d="M3.25 1.55a1.73 1.73 0 0 0-.47 1.22v18.46a1.73 1.73 0 0 0 .47 1.22l.06.06L13.88 12v-.15L3.31 1.5z" fill="#00F0FF" />
                <path d="M17.41 15.58L13.88 12v-.15L17.41 8.3l.08.05 4.17 2.37c1.19.67 1.19 1.78 0 2.46l-4.17 2.37-.08.03z" fill="#FFC700" />
                <path d="M17.49 15.53L13.88 11.92L3.25 22.45a1.44 1.44 0 0 0 1.83.06l12.41-7.07" fill="#FF003F" />
                <path d="M17.49 8.35L5.08 1.28A1.44 1.44 0 0 0 3.25 1.34L13.88 11.93l3.61-3.58" fill="#00E676" />
              </svg>
              <svg viewBox="0 0 24 24" className="w-5 h-5 sm:w-6 sm:h-6 fill-white group-hover:scale-110 transition-transform" aria-hidden>
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 4.17c.66-.81 1.11-1.93.99-3.06-.96.04-2.13.64-2.82 1.45-.6.69-1.12 1.83-.98 2.94 1.07.08 2.15-.52 2.81-1.33z" />
              </svg>
            </div>
          </button>
        </div>
      </div>

      <DownloadModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}
