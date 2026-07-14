import React from "react";
import Link from "next/link";

export default function BailHero() {
  return (
    <section className="relative w-full bg-black text-white font-sans py-10 sm:py-13 flex flex-col justify-center items-center text-center px-4 border-b border-gray-800">
      <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center">
        <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-white/10 px-4 py-1.5 rounded-full mb-6 border border-[#D4AF37]/35">
          Constitutional Protections & Bail Procedures
        </span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight mb-6 max-w-4xl">
          Bail & Arrest Rights: <span className="text-[#D4AF37]">The Custody Guide</span>
        </h1>

        <p className="text-gray-300 font-medium text-base sm:text-lg lg:text-xl leading-relaxed mb-8 max-w-3xl">
          An authoritative, comprehensive handbook detailing the Indian legal framework, custody limitations, bailable versus non-bailable offenses, anticipatory bail filing, and protections against illegal police detention.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/ask-me-anything"
            className="bg-[#D4AF37] text-[#2D2219] hover:bg-[#b8952f] rounded-full py-3.5 px-8 font-bold text-base transition-all shadow-lg shadow-[#D4AF37]/20 hover:scale-[1.02]"
          >
            Ask a Legal Expert
          </Link>
          <Link 
            href="/pro-bono-free-legal-aid"
            className="bg-white/10 hover:bg-white/20 text-white rounded-full py-3.5 px-8 font-bold text-base transition-all border border-white/20 hover:scale-[1.02]"
          >
            Get Free Legal Aid
          </Link>
        </div>
      </div>
    </section>
  );
}
