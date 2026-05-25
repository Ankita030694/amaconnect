"use client";

export default function DraftsTemplatesBanner() {
  return (
    <section className="w-full bg-[#ECE9E1] py-12 sm:py-16 px-4 sm:px-6 lg:px-8 font-sans flex flex-col items-center text-center">
      {/* Centered Heading with exact spacing, capitalization and font-weight */}
      <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-medium text-[#292524] leading-snug tracking-tight mb-7 max-w-3xl select-none">
        Ready-to-use templates for every <br />
        legal situation you face
      </h2>
      
      {/* Centered Gold/Yellow action button matching the color and shadow in reference */}
      <button className="bg-[#C69214] text-white px-8 py-3.5 rounded-[8px] font-semibold text-sm sm:text-base shadow-[0_4px_12px_rgba(198,146,20,0.22)] hover:bg-[#D4AF37] hover:shadow-[0_6px_16px_rgba(198,146,20,0.35)] hover:-translate-y-[1.5px] active:translate-y-0 active:scale-[0.98] transition-all duration-300 cursor-pointer">
        Explore All Drafts
      </button>
    </section>
  );
}
