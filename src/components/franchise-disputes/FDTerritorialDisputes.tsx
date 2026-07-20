import React from "react";

export default function FDTerritorialDisputes({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 3
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Territorial Rights and Encroachment Disputes
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
            A key factor in a franchise's profitability is its physical location. Disputes often arise when the franchisor opens another outlet nearby, or opens online channels that eat into the franchisee's local sales, violating their territorial rights.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Exclusivity Clauses and Protecting Store Radius
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            To prevent self-competition, franchise agreements must include an exclusivity clause. This clause defines the exclusive territory granted to the franchisee, usually specified as a store radius (such as three to five kilometers) or a local municipal ward.
          </p>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            During this exclusivity period, the franchisor cannot open another company-owned outlet or grant a franchise to a third party within this protected radius. If the franchisor violates this clause, it constitutes a material breach of contract. The franchisee can file a suit seeking a temporary or permanent injunction to stop the construction or opening of the competing outlet, protecting their market share.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Encroachment of Sales Channels via E-Commerce Platforms
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            A modern form of territorial encroachment occurs when franchisors bypass physical outlets by selling directly to consumers within the franchisee's territory via e-commerce sites or food delivery apps.
          </p>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            If the agreement does not explicitly reserve online sales channels for the franchisor, selling directly online to local customers can be challenged as a breach of territorial exclusivity. The franchisee can demand a share of the commission or revenue from online sales originating within their territory. Agreements should include clear terms regarding: online order routing, local delivery commission splitting, and digital channel ownership, preventing future channel conflicts.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <div className="bg-[#FAF8F5] border border-gray-100 rounded-2xl p-6">
              <h4 className="font-bold text-[#2D2219] mb-2">Exclusive Store Radius</h4>
              <p className="text-xs text-gray-500 leading-relaxed">
                Specifies the geographic boundary within which the franchisor cannot establish competing outlets. Enforced via civil injunctions.
              </p>
            </div>
            <div className="bg-[#FAF8F5] border border-gray-100 rounded-2xl p-6">
              <h4 className="font-bold text-[#2D2219] mb-2">Online Channel Routing</h4>
              <p className="text-xs text-gray-500 leading-relaxed">
                Defines how online orders are routed. Ensures local online sales are credited to the respective physical franchise outlet.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
