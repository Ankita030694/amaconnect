import React from "react";
import Link from "next/link";

export default function LoanSettleHero() {
  return (
    <section className="relative w-full bg-black text-white font-sans py-16 sm:py-20 flex flex-col justify-center items-center text-center px-4">
      <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center">
        <span className="text-xs sm:text-sm font-bold text-[#D4AF37] uppercase tracking-widest bg-white/5 border border-[#D4AF37]/35 rounded-full px-4 py-1.5 mb-6">
          Legal Self Defense Guide
        </span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight mb-6">
          Loan App Debt Settlement &amp; <span className="text-[#D4AF37]">Harassment Protection Guide</span>
        </h1>

        <p className="text-gray-300 font-medium text-sm sm:text-base lg:text-lg leading-relaxed mb-10 max-w-3xl text-center">
          Over 45 percent of digital borrowers in India reported receiving threatening messages or calls from unregistered loan apps in the last year. If you are struggling with daily harassment from a 7-day lending app, you must know that the Reserve Bank of India has established strict legal protections to safeguard your dignity and rights.
        </p>

        <Link 
          href="/ask-me-anything"
          className="bg-[#D4AF37] text-gray-900 hover:bg-[#b8952f] rounded-full py-4.5 px-12 font-extrabold text-base sm:text-lg transition-all shadow-xl shadow-[#D4AF37]/15 hover:scale-[1.02]"
        >
          Get Free Pro Bono Consultation
        </Link>
      </div>
    </section>
  );
}
