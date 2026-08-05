import React from "react";

export default function GstSection3({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-8 pt-4">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 3
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Section 17(5) Blocked Credits and Ineligible ITC Disputes
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
            Even if all general ITC conditions under Section 16 are met, specific purchases are prohibited from credit claims. Section 17(5) of the CGST Act details these blocked credits, which frequently cause audits and tax disputes.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Scope of Blocked Credits under Section 17(5)
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            Section 17(5) blocks credit on items like motor vehicles for passenger transport with seating capacity under thirteen persons, vessels, and aircraft, subject to limited exceptions. Credit is also barred on food, outdoor catering, cosmetic surgery, and employee holiday benefits, unless provided under a statutory mandate. Notably, works contracts for constructing immovable property are blocked, except for plant and machinery. Goods lost, stolen, destroyed, written off, or given as free samples are also blocked, requiring precise inventory records to prevent ineligible claims. Businesses must maintain clear documentation to identify eligible plant assets from blocked real estate works.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Resolving Disputes on Ineligible ITC Claims
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            When businesses claim blocked credit, the department issues notices demanding reversal with interest. Resolving these disputes requires matching purchases to statutory exceptions. For example, catering credit is defended by proving a statutory canteen mandate under the Factories Act. Construction disputes are resolved by proving expenses were capitalized as plant repairs or did not create a new immovable asset. Keeping detailed records, vendor contracts, and itemized bills is essential to dispute these demand notices during audits. Professional legal representation is advised to draft responses explaining these technical statutory exceptions.
          </p>
        </div>
      </div>
    </section>
  );
}
