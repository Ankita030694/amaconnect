import React from "react";

export default function AppHero() {
  return (
    <section className="relative w-full bg-black text-white font-sans py-12 sm:py-16 flex flex-col justify-center items-center text-center px-4">

      <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center">
        
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-snug tracking-tight mb-4">
          Secure <span className="text-[#D4AF37]">Legal Consultations</span> from Your Phone
        </h1>

        <p className="text-gray-300 font-medium text-base sm:text-lg lg:text-xl leading-relaxed mb-8 max-w-3xl">
          In a recent survey, over 60% of clients hesitated to seek legal help due to privacy concerns on standard messaging platforms. The AMAConnect app was engineered from the ground up to guarantee absolute confidentiality for your most sensitive legal matters.
        </p>

        <button className="bg-[#D4AF37] text-[#2D2219] hover:bg-[#b8952f] rounded-full py-4 px-10 font-bold text-lg transition-colors shadow-lg shadow-[#D4AF37]/20">
          Download the AMAConnect App
        </button>

      </div>
    </section>
  );
}
