import React from "react";
import Link from "next/link";

export default function GstHero() {
  return (
    <section className="relative w-full bg-[#000000] text-white font-sans py-10 sm:py-13 flex flex-col justify-center items-center text-center px-4">
      <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center space-x-2 text-xs sm:text-sm text-gray-400 mb-6 uppercase tracking-wider font-semibold">
          <Link href="/" className="hover:text-[#D4AF37] transition-colors">
            Home
          </Link>
          <span>&gt;</span>
          <Link href="/blog" className="hover:text-[#D4AF37] transition-colors">
            Legal Guides
          </Link>
          <span>&gt;</span>
          <span className="text-[#D4AF37]">GST Compliance Guide</span>
        </nav>

        <span className="text-[#D4AF37] text-xs sm:text-sm font-bold uppercase tracking-widest bg-white/5 border border-[#D4AF37]/30 rounded-full px-4 py-1.5 mb-6">
          Indirect Taxation &amp; Legal Compliance in India
        </span>

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight mb-6">
          Understanding GST: <span className="text-[#D4AF37]">Legal Tax Compliance</span> &amp; Disputes
        </h1>

        <p className="text-gray-300 font-medium text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed mb-8 max-w-3xl text-justify sm:text-center">
          Navigate the complex landscape of Goods and Services Tax in India. Understand registration mandates, optimize Input Tax Credit claims, avoid Section 17(5) blocked credit traps, respond to mismatch notices, and handle online departmental appeals with clarity. Use this comprehensive handbook to secure your business against penalties and audit queries.
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <Link 
            href="/ask-me-anything"
            className="bg-[#D4AF37] text-[#2D2219] hover:bg-[#b8952f] rounded-full py-4 px-10 font-bold text-base sm:text-lg transition-all shadow-lg shadow-[#D4AF37]/20 hover:scale-[1.02]"
          >
            Consult a Tax Advocate
          </Link>
          <Link 
            href="/pro-bono-free-legal-aid"
            className="bg-white/10 text-white hover:bg-white/20 border border-white/25 rounded-full py-4 px-10 font-bold text-base sm:text-lg transition-all hover:scale-[1.02]"
          >
            Free Assistance
          </Link>
        </div>
      </div>
    </section>
  );
}
