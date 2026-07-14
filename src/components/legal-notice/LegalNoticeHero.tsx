import React from "react";
import Link from "next/link";

export default function LegalNoticeHero() {
  return (
    <section className="relative w-full bg-black text-white font-sans py-16 sm:py-20 flex flex-col justify-center items-center text-center px-4">

      <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center">
        <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-white/5 px-3 py-1 rounded-full border border-[#D4AF37]/20 mb-4">
          Indian Civil Procedure &amp; Drafting
        </span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-snug tracking-tight mb-4">
          How to Draft a Legal Notice in India: <span className="text-[#D4AF37]">A Step-by-Step Guide</span>
        </h1>

        <p className="text-gray-300 font-medium text-base sm:text-lg lg:text-xl leading-relaxed mb-8 max-w-3xl">
          Learn the exact legal framework, standard formatting, and step-by-step process for drafting, sending, and replying to a legal notice under Indian law.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/drafts"
            className="bg-[#D4AF37] text-[#2D2219] hover:bg-[#b8952f] rounded-full py-4 px-8 font-bold text-base sm:text-lg transition-all shadow-lg shadow-[#D4AF37]/20 hover:scale-[1.02]"
          >
            Browse Notice Templates
          </Link>
          <Link 
            href="/pro-bono-free-legal-aid"
            className="bg-transparent border border-white/20 text-white hover:bg-white/5 rounded-full py-4 px-8 font-bold text-base sm:text-lg transition-all hover:scale-[1.02]"
          >
            Free Legal Aid Options
          </Link>
        </div>
      </div>
    </section>
  );
}
