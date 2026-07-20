import React from "react";

export default function FDSupplyChain({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 6
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Breach of Supply Chain Standards
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
            To maintain brand uniformity and product quality across all locations, franchisors enforce strict supply chain standards. Disputes arise when franchisees source ingredients locally to save money, or when the franchisor's approved vendors supply substandard goods.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Enforcing Mandatory Vendor Purchase Clauses
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            Most franchise agreements include a mandatory purchase clause. This clause requires the franchisee to purchase all raw materials, packaging, and technology services solely from the franchisor or their approved vendor list.
          </p>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            While these clauses ensure quality consistency, they must comply with Competition Commission of India (CCI) guidelines. The franchisor cannot abuse their dominant position to inflate raw material prices far above market rates, which constitutes anti-competitive tie-in arrangements. If the franchisor's markups are predatory, the franchisee can raise complaints before the CCI or seek mediation, protecting their business margins.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Remedies for Substandard Quality and Customer Complaints
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            If an approved vendor supplies expired, damaged, or substandard raw materials, the franchisee faces serious business and legal risks, including consumer court complaints from customers.
          </p>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            The franchisee should immediately document the defective supply with photos, delivery receipts, and email records sent to the franchisor. The agreement must include a vendor liability clause, allowing the franchisee to reject defective shipments, seek immediate replacements, and claim indemnity from the franchisor if a customer files a lawsuit over defective products. This ensures the franchisee is not held solely liable for vendor defaults, protecting their brand reputation.
          </p>

          <div className="bg-[#FAF8F5] border border-gray-100 rounded-2xl p-6 mt-4">
            <h4 className="font-bold text-[#2D2219] mb-3">Supply Chain Rules</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs sm:text-sm text-gray-600">
              <div>
                <span className="text-[#D4AF37] font-bold block mb-1">Approved Vendors</span>
                <ul className="space-y-1 list-disc list-inside text-gray-500">
                  <li>Mandatory purchase clauses maintain brand quality.</li>
                  <li>Prohibits local sourcing of proprietary formulations.</li>
                  <li>Prices must be competitive and cannot be predatory.</li>
                  <li>Sourcing violations can lead to contract termination.</li>
                </ul>
              </div>
              <div>
                <span className="text-[#D4AF37] font-bold block mb-1">Defective Supply Remedies</span>
                <ul className="space-y-1 list-disc list-inside text-gray-500">
                  <li>Document defects immediately with photographs.</li>
                  <li>Right to reject shipments and demand replacements.</li>
                  <li>Indemnity protections for customer claims.</li>
                  <li>Escalate vendor defaults to the franchisor management.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
