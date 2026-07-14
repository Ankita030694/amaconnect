import React from "react";
import Link from "next/link";

export default function HomebuyerReraHero() {
  return (
    <section className="relative w-full bg-black text-white font-sans py-10 sm:py-13 flex flex-col justify-center items-center text-center px-4">
      <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center">
        <span className="text-[#D4AF37] text-xs sm:text-sm font-bold uppercase tracking-widest bg-white/5 border border-[#D4AF37]/30 rounded-full px-4 py-1.5 mb-6">
          Indian Real Estate Regulatory Authority Guide
        </span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight mb-6">
          Homebuyer Rights under RERA: <span className="text-[#D4AF37]">Builder Delay &amp; Remedies</span>
        </h1>

        <p className="text-gray-300 font-medium text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed mb-8 max-w-3xl text-justify sm:text-center">
          More than 40 percent of real estate projects registered across India have faced timeline revisions or delayed handovers in recent years. Navigating the RERA online complaint portal allows homebuyers to claim complete refunds with interest or compel project completion.
        </p>

        <Link 
          href="/ask-me-anything"
          className="bg-[#D4AF37] text-[#2D2219] hover:bg-[#b8952f] rounded-full py-4 px-10 font-bold text-base sm:text-lg transition-all shadow-lg shadow-[#D4AF37]/20 hover:scale-[1.02]"
        >
          Consult a RERA Lawyer
        </Link>
      </div>
    </section>
  );
}
