import React from "react";
import Link from "next/link";

export default function MotorAccidentHero() {
  return (
    <section className="relative w-full bg-black text-white font-sans py-10 sm:py-13 flex flex-col justify-center items-center text-center px-4">
      <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center">
        <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-white/10 px-4 py-1.5 rounded-full mb-4 border border-[#D4AF37]/35">
          Motor Vehicles Act & Claims
        </span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight mb-4 max-w-4xl">
          Motor Accident Claims: <span className="text-[#D4AF37]">The Legal Compensation Guide</span>
        </h1>

        <p className="text-gray-300 font-medium text-base sm:text-lg leading-relaxed mb-6 max-w-3xl">
          A step-by-step procedural manual to file claims before the Motor Accident Claims Tribunal, compute pecuniary losses, and comply with mandatory timelines in India.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/contact"
            className="bg-[#D4AF37] text-[#2D2219] hover:bg-[#b8952f] rounded-full py-3.5 px-8 font-bold text-sm sm:text-base transition-all shadow-lg shadow-[#D4AF37]/20 hover:scale-[1.02]"
          >
            Consult Accident Expert
          </Link>
          <Link 
            href="/ask-me-anything"
            className="bg-white/10 hover:bg-white/20 text-white rounded-full py-3.5 px-8 font-bold text-sm sm:text-base transition-all border border-white/20 hover:scale-[1.02]"
          >
            Ask a Free Question
          </Link>
        </div>
      </div>
    </section>
  );
}
