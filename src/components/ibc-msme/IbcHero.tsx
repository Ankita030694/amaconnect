import React from "react";
import Link from "next/link";

export default function IbcHero() {
  return (
    <section className="relative w-full bg-black text-white font-sans py-10 sm:py-13 flex flex-col justify-center items-center text-center px-4">
      <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center">
        <span className="text-[#D4AF37] text-xs sm:text-sm font-bold uppercase tracking-widest bg-white/5 border border-[#D4AF37]/30 rounded-full px-4 py-1.5 mb-6">
          Insolvency &amp; Recovery Guide
        </span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight mb-6">
          Insolvency Recovery for MSMEs: <span className="text-[#D4AF37]">Legal Channels &amp; IBC Guide</span>
        </h1>

        <p className="text-gray-300 font-medium text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed mb-8 max-w-3xl text-justify sm:text-center">
          Statistics from the Ministry of MSME reveal that delayed payments remain the single largest bottleneck for small businesses in India. Under the Insolvency and Bankruptcy Code (IBC) and MSME Samadhaan, legal recourse provides time-bound recovery and restructuring options to reclaim outstanding dues from corporate debtors.
        </p>

        <Link 
          href="/ask-me-anything"
          className="bg-[#D4AF37] text-[#2D2219] hover:bg-[#b8952f] rounded-full py-4 px-10 font-bold text-base sm:text-lg transition-all shadow-lg shadow-[#D4AF37]/20 hover:scale-[1.02]"
        >
          Consult an IBC Expert
        </Link>
      </div>
    </section>
  );
}
