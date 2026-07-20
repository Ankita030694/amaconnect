import React from "react";

export default function FDTermination({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 7
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Termination of Franchise Agreements
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
            Terminating a franchise agreement is a complex process that can lead to significant legal liabilities if executed improperly. Both franchisors and franchisees must strictly follow the contractual exit clauses, notice periods, and post-termination procedures to prevent court disputes.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Grounds for Immediate Termination and Notice Windows
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            A franchise agreement typically specifies two types of termination: termination for cause and termination without cause. Termination for cause allows immediate exit upon specific material defaults, including: insolvency of the franchisee, criminal convictions, trademark misuse, or failure to open the outlet within the agreed timeline.
          </p>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            For other breaches, such as delayed royalty payments or minor supply violations, the agreement usually mandates a cure notice window (typically thirty days). The party in breach must be offered this period to rectify the default before the termination can take effect. Terminating without offering this notice constitutes a wrongful termination, allowing the affected party to seek damages, protecting their commercial rights.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            De-branding Procedures and Post-Termination Covenants
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            Upon termination, the franchisee must immediately execute de-branding procedures. This includes: removing all branded signs, logos, menus, uniforms, and return-of-manuals containing operational secrets.
          </p>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            Additionally, post-termination covenants protect the franchisor's trade secrets. These covenants include non-compete clauses that restrict the franchisee from opening a similar business in the same territory for a specified period (such as one to two years). While Section 27 of the Indian Contract Act voids agreements in restraint of trade, courts have upheld limited non-compete covenants during the agreement term and post-termination to protect proprietary formulations and trade secrets, ensuring brand security.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <div className="bg-[#FAF8F5] border border-gray-100 rounded-2xl p-6">
              <h4 className="font-bold text-[#2D2219] mb-2">Cure Notice Window</h4>
              <p className="text-xs text-gray-500 leading-relaxed">
                Mandatory thirty-day period to resolve royalty defaults or minor breaches. Premature terminations constitute a breach of contract.
              </p>
            </div>
            <div className="bg-[#FAF8F5] border border-gray-100 rounded-2xl p-6">
              <h4 className="font-bold text-[#2D2219] mb-2">De-branding &amp; Non-Compete</h4>
              <p className="text-xs text-gray-500 leading-relaxed">
                Requires complete removal of brand signs and return of manuals. Limited non-compete clauses protect trade secrets from local copycats.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
