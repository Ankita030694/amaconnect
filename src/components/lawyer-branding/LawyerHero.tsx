import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function LawyerHero() {
  return (
    <section className="relative w-full bg-white overflow-hidden font-sans pt-[52px] pb-12 sm:pb-16 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
        
        {/* Left Text Content */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center text-left">
          
          <div className="mb-6 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#FDFBF7] border border-[#E5E7EB] shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#D4AF37]" aria-hidden="true" />
            <span className="text-xs font-bold text-[#2D2219] uppercase tracking-wider">
              Advocate Growth Engine
            </span>
          </div>

          <h1 className="text-[2rem] sm:text-4xl lg:text-[3rem] font-extrabold text-[#2D2219] leading-[1.15] tracking-tight mb-6">
            How Lawyers Can Build Their Brand and Get More Clients in 2026
          </h1>

          <p className="text-gray-600 font-normal text-base sm:text-lg leading-relaxed mb-8 max-w-xl">
            In 2025, over 74% of Indian consumers searched online before hiring an advocate, yet fewer than 15% of lawyers maintain an active, optimized digital profile. Relying solely on traditional word-of-mouth is no longer enough to scale a modern law practice in 2026.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <a 
              href="#claim-profile" 
              className="inline-flex items-center justify-center bg-[#2D2219] text-white rounded-xl py-3.5 px-8 shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all font-bold text-sm sm:text-base tracking-wide"
            >
              Claim Your Free Profile
            </a>
            <Link 
              href="/about" 
              className="inline-flex items-center justify-center bg-white border-2 border-[#E5E7EB] text-[#2D2219] rounded-xl py-3.5 px-8 hover:bg-gray-50 transition-all font-bold text-sm sm:text-base tracking-wide"
            >
              Learn About Our Mission
            </Link>
          </div>
          
          <div className="flex items-center gap-4 text-sm text-gray-500 font-medium">
            <div className="flex -space-x-2">
               {/* Decorative avatars */}
               <div className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center text-[10px] font-bold text-gray-500">10k+</div>
            </div>
            <p>Join over 10,000 users connecting with advocates monthly.</p>
          </div>
        </div>

        {/* Right Image Content */}
        <div className="w-full lg:w-1/2 relative min-h-[400px] lg:min-h-[500px] rounded-3xl overflow-hidden shadow-2xl border border-gray-100">
          <Image
            src="/cta-bg.jpg"
            alt="Lawyer using digital marketing tools on a smartphone"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-[#2D2219]/60 to-transparent" />
          
          {/* Data Callout Overlay */}
          <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md rounded-2xl p-5 shadow-xl border border-white/20">
            <h3 className="text-[#2D2219] font-extrabold text-xl mb-1">The Digital Shift</h3>
            <p className="text-gray-600 text-sm font-medium">
              Transform your legal expertise into a scalable online practice. Connect directly with clients actively searching for legal representation.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
