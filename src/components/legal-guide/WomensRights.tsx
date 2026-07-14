import React from "react";

export default function WomensRights({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 5
          </span>
          <h2 className="text-xl sm:text-2xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Women's &amp; Family Rights
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed text-justify mb-4">
            Gender justice is deeply rooted in the Indian legislative framework, providing robust rights to women in terms of safety, property ownership, and maintenance, ensuring equality inside the household and outside.
          </p>
        </div>

        {/* Core protections list */}
        <div className="space-y-6">
          <div className="flex gap-4 items-start">
            <div className="w-6 h-6 rounded-lg bg-pink-50 flex items-center justify-center text-pink-600 flex-shrink-0 mt-0.5">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              </svg>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 text-sm mb-1">Protection from Domestic Violence</h3>
              <p className="text-xs text-gray-500 leading-relaxed text-justify">
                The **Protection of Women from Domestic Violence Act, 2005 (PWDVA)** protects women from physical, emotional, verbal, sexual, and economic abuse by male partners or relatives in a shared household. Remedies include protection orders, residence orders (preventing eviction from the shared house), and monetary reliefs.
              </p>
            </div>
          </div>

          <div className="flex gap-4 items-start">
            <div className="w-6 h-6 rounded-lg bg-pink-50 flex items-center justify-center text-pink-600 flex-shrink-0 mt-0.5">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                <path d="M3 3h18v18H3z"/>
                <path d="M21 3L3 21"/>
              </svg>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 text-sm mb-1">Equal Inheritance Rights</h3>
              <p className="text-xs text-gray-500 leading-relaxed text-justify">
                Under the **Hindu Succession (Amendment) Act, 2005**, daughters are given equal coparcenary rights in ancestral property by birth, identical to sons. A daughter remains a coparcener in her father's family property regardless of her marital status.
              </p>
            </div>
          </div>

          <div className="flex gap-4 items-start">
            <div className="w-6 h-6 rounded-lg bg-pink-50 flex items-center justify-center text-pink-600 flex-shrink-0 mt-0.5">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
              </svg>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 text-sm mb-1">Right to Maintenance</h3>
              <p className="text-xs text-gray-500 leading-relaxed text-justify">
                Section 125 of the Code of Criminal Procedure (CrPC / BNSS equivalent) guarantees the right of a wife, children, and parents to claim maintenance from a husband or son who has sufficient means but refuses to maintain them, preventing them from destitution.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
