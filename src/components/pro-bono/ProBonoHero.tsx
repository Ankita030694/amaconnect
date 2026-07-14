import React from "react";

export default function ProBonoHero() {
  return (
    <section className="relative w-full bg-black pt-24 pb-20 sm:pt-32 sm:pb-28 px-4 sm:px-6 lg:px-8 font-sans overflow-hidden">
      {/* Dynamic Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff1a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff1a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10 text-center flex flex-col items-center">
        
        {/* Subtle Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/20 mb-8 animate-fade-in-up">
          <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse" />
          <span className="text-xs sm:text-sm font-bold text-[#D4AF37] tracking-wider uppercase">
            The AMAConnect Initiative
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight leading-[1.1] animate-fade-in-up" style={{ animationDelay: '100ms' }}>
          Access to Justice is a <span className="text-[#D4AF37]">Right</span>, <br className="hidden sm:block" />Not a Privilege.
        </h1>

        {/* Description */}
        <p className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-2xl mb-10 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
          Our mission is to democratize legal support in India. We connect marginalized communities, victims of domestic violence, and individuals facing systemic injustice with top-tier advocates willing to work pro bono.
        </p>

      </div>
    </section>
  );
}
