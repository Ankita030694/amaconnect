import React from "react";
import Link from "next/link";

export default function DivorceHero() {
  return (
    <section className="relative w-full bg-black text-white font-sans py-16 sm:py-20 flex flex-col justify-center items-center text-center px-4">
      <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center">
        <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-white/10 px-4 py-1.5 rounded-full mb-6 border border-[#D4AF37]/35">
          Family Law Resource
        </span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight mb-6 max-w-4xl">
          Filing for Divorce in India: <span className="text-[#D4AF37]">The Complete Legal Guide</span>
        </h1>

        <p className="text-gray-300 font-medium text-base sm:text-lg lg:text-xl leading-relaxed mb-8 max-w-3xl">
          A definitive, step-by-step manual outlining jurisdiction, procedural motions, contested grounds, documentation checklists, alimony, and custody rights under Indian family courts.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/contact"
            className="bg-[#D4AF37] text-[#2D2219] hover:bg-[#b8952f] rounded-full py-4 px-10 font-bold text-base sm:text-lg transition-all shadow-lg shadow-[#D4AF37]/20 hover:scale-[1.02]"
          >
            Consult a Family Lawyer
          </Link>
          <Link 
            href="/ask-me-anything"
            className="bg-white/10 hover:bg-white/20 text-white rounded-full py-4 px-10 font-bold text-base sm:text-lg transition-all border border-white/20 hover:scale-[1.02]"
          >
            Ask a Free Legal Question
          </Link>
        </div>
      </div>
    </section>
  );
}
