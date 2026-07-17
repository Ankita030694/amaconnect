import React from "react";
import Link from "next/link";

export default function CDHero() {
  return (
    <section className="relative w-full bg-[#000000] text-white font-sans py-10 sm:py-13 flex flex-col justify-center items-center text-center px-4">
      <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center">
        <span className="text-[#D4AF37] text-xs sm:text-sm font-bold uppercase tracking-widest bg-white/5 border border-[#D4AF37]/30 rounded-full px-4 py-1.5 mb-6">
          Information Technology Act &amp; Penal Laws
        </span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight mb-6">
          Cyber Defamation &amp; <span className="text-[#D4AF37]">Online Harassment Guide</span>
        </h1>

        <p className="text-gray-300 font-medium text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed mb-8 max-w-3xl text-justify sm:text-center">
          Protecting your digital reputation is critical in the modern internet age. This guide details how victims of cyber defamation, digital trolling, and online harassment can secure legal remedies, serve formal notices, and file complaints under Indian law.
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <Link 
            href="/ask-me-anything"
            className="bg-[#D4AF37] text-[#2D2219] hover:bg-[#b8952f] rounded-full py-4 px-10 font-bold text-base sm:text-lg transition-all shadow-lg shadow-[#D4AF37]/20 hover:scale-[1.02]"
          >
            Ask a Cyber Lawyer
          </Link>
          <Link 
            href="/pro-bono-free-legal-aid"
            className="bg-white/10 text-white hover:bg-white/20 border border-white/25 rounded-full py-4 px-10 font-bold text-base sm:text-lg transition-all hover:scale-[1.02]"
          >
            Free Legal Aid
          </Link>
        </div>
      </div>
    </section>
  );
}
