import React from "react";

export default function LegalLandscapeAnalysis({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
      <div className="w-full">
        <div className="text-left mb-10">
          <h2 className="text-xl sm:text-2xl font-extrabold text-[#2D2219] tracking-tight mb-4">
            The Digital Shift in Indian Legal Services
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed text-justify">
            For decades, accessing legal counsel in India meant taking time off work, navigating heavy traffic, and waiting hours outside a lawyer's chamber—often just to realize you brought the wrong documents. Today, the landscape has fundamentally shifted. High-speed internet and secure digital infrastructure have made it possible to access premium legal advice from the comfort of your home.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-[#FAF8F5] rounded-3xl p-8 border border-gray-100">
            <h3 className="text-lg font-bold text-[#2D2219] mb-4">The Old Way</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-red-500 mt-0.5">✕</span>
                <span className="text-sm text-gray-600">Hours wasted in travel and waiting rooms.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500 mt-0.5">✕</span>
                <span className="text-sm text-gray-600">Geographic restrictions on finding the best lawyer.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500 mt-0.5">✕</span>
                <span className="text-sm text-gray-600">Physical document vulnerability and loss.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500 mt-0.5">✕</span>
                <span className="text-sm text-gray-600">Unpredictable fee structures and hidden costs.</span>
              </li>
            </ul>
          </div>

          <div className="bg-[#1A1410] rounded-3xl p-8 text-white shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4AF37] opacity-10 rounded-full blur-2xl translate-x-1/2 -translate-y-1/2" />
            <h3 className="text-lg font-bold text-white mb-4 relative z-10">The AMAConnect Way</h3>
            <ul className="space-y-4 relative z-10">
              <li className="flex items-start gap-3">
                <span className="text-[#D4AF37] mt-0.5">✓</span>
                <span className="text-sm text-gray-300">Instant scheduling on your own timeline.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#D4AF37] mt-0.5">✓</span>
                <span className="text-sm text-gray-300">Access top advocates across the country.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#D4AF37] mt-0.5">✓</span>
                <span className="text-sm text-gray-300">Encrypted digital vaults for all your files.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#D4AF37] mt-0.5">✓</span>
                <span className="text-sm text-gray-300">Transparent, escrow-backed consultation fees.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
