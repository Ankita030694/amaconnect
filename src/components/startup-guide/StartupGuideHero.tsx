import React from "react";
import Link from "next/link";

export default function StartupGuideHero() {
  return (
    <section className="relative w-full bg-black text-white font-sans py-12 sm:py-16 flex flex-col justify-center items-center text-center px-4">

      <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-snug tracking-tight mb-4">
          Startup Registration Guide: <span className="text-[#D4AF37]">Incorporate in India</span>
        </h1>

        <p className="text-gray-300 font-medium text-base sm:text-lg lg:text-xl leading-relaxed mb-8 max-w-3xl">
          The Ministry of Corporate Affairs registered a record 159,000 new companies in the financial year 2023, reflecting a massive entrepreneurial surge in India. Navigating startup registration and DPIIT certification correctly is the first step to securing venture capital funding and tax exemptions.
        </p>

        <Link 
          href="/contact"
          className="bg-[#D4AF37] text-[#2D2219] hover:bg-[#b8952f] rounded-full py-4 px-10 font-bold text-lg transition-all shadow-lg shadow-[#D4AF37]/20 hover:scale-[1.02]"
        >
          Consult incorporation Expert
        </Link>
      </div>
    </section>
  );
}
