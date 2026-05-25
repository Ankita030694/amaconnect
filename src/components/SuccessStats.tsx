"use client";

import React from "react";
import Image from "next/image";

export default function SuccessStats() {
  return (
    <section className="w-full bg-white py-16 sm:py-24 overflow-hidden flex justify-center">
      <div className="relative text-center z-10 px-4 inline-block mt-8 mb-8">
        <h2 className="text-[#2E2822] font-bold text-5xl sm:text-7xl md:text-[90px] leading-[1.05] tracking-tight">
          50,000+<br />
          users solving<br />
          legal problems<br />
          with<br />
          AMA Connect
        </h2>

        {/* Top Right Profile */}
        <div className="absolute -top-4 sm:-top-8 right-0 sm:-right-12 w-16 h-16 sm:w-28 sm:h-28 rounded-2xl overflow-hidden shadow-lg">
          <Image 
            src="/indian_man.jpg" 
            alt="User solving legal problems" 
            fill 
            sizes="(max-width: 640px) 64px, 112px"
            className="object-cover"
          />
        </div>

        {/* Middle Left Profile */}
        <div className="absolute top-[25%] sm:top-[22%] -left-6 sm:-left-20 w-16 h-16 sm:w-28 sm:h-28 rounded-2xl overflow-hidden shadow-lg">
          <Image 
            src="/indian_man.jpg" 
            alt="User solving legal problems" 
            fill 
            sizes="(max-width: 640px) 64px, 112px"
            className="object-cover"
          />
        </div>

        {/* Middle Right Profile */}
        <div className="absolute top-[45%] sm:top-[42%] -right-4 sm:-right-24 w-16 h-16 sm:w-28 sm:h-28 rounded-2xl overflow-hidden shadow-lg">
          <Image 
            src="/indian_man.jpg" 
            alt="User solving legal problems" 
            fill 
            sizes="(max-width: 640px) 64px, 112px"
            className="object-cover"
          />
        </div>

        {/* Bottom Left Logo */}
        <div className="absolute bottom-0 sm:-bottom-4 -left-10 sm:-left-24 w-16 h-16 sm:w-28 sm:h-28 rounded-2xl shadow-lg overflow-hidden bg-[#F3EFE9] p-2 sm:p-4 flex items-center justify-center">
          <Image 
            src="/logo_qa.png" 
            alt="AMA Connect Icon" 
            width={90} 
            height={90} 
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
}
