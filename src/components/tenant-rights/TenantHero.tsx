import React from "react";
import Link from "next/link";

export default function TenantHero() {
  return (
    <section className="relative w-full bg-black text-white font-sans py-10 sm:py-13 flex flex-col justify-center items-center text-center px-4">
      <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center">
        <span className="text-[#D4AF37] text-xs sm:text-sm font-bold uppercase tracking-widest bg-white/5 border border-[#D4AF37]/30 rounded-full px-4 py-1.5 mb-6">
          Tenant Protections and Rent Laws Guide
        </span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight mb-6">
          Tenant Rights, <span className="text-[#D4AF37]">Eviction Defense and Deposits</span>
        </h1>

        <p className="text-gray-300 font-medium text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed mb-8 max-w-3xl text-justify sm:text-center">
          Over 60 percent of urban renters face rent disputes, maintenance struggles, or eviction threats. Understanding state rent control laws, the Model Tenancy Act, and filing processes enables renters to secure their deposits and protect their tenancy.
        </p>

        <Link 
          href="/ask-me-anything"
          className="bg-[#D4AF37] text-[#2D2219] hover:bg-[#b8952f] rounded-full py-4 px-10 font-bold text-base sm:text-lg transition-all shadow-lg shadow-[#D4AF37]/20 hover:scale-[1.02]"
        >
          Consult a Rental Lawyer
        </Link>
      </div>
    </section>
  );
}
