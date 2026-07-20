import React from "react";

export default function FDFDDDocument({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 2
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            The Franchise Disclosure Document (FDD)
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
            The Franchise Disclosure Document (FDD) is the primary informational statement provided by the franchisor to prospective franchisees before signing the main contract. Although not federally mandated in India, providing an FDD is standard practice to ensure business transparency.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Crucial Information Required in an FDD Statement
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            A comprehensive FDD must contain detailed information about the franchisor's business operations and financial history. This includes: the background of the promoters, details of ongoing litigation against the brand, financial audits of the preceding three years, and the total initial investment required.
          </p>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            Additionally, the FDD must detail: the list of active franchise outlets, the rate of outlet closures in the preceding years, royalty percentages, and the terms of termination or renewal. Providing this document early allows the franchisee to perform due diligence, verify market feasibility, and consult commercial advisors before committing funds.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Unfair Suppression of Costs and Legal Liabilities
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            A major source of dispute is the unfair suppression of hidden costs or pending legal liabilities in the FDD. Some franchisors hide: mandatory local marketing fees, high supply chain markups, or pending trademark ownership disputes.
          </p>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            If a franchisee discovers that the franchisor knowingly misrepresented financial data or suppressed material liabilities to induce them to sign, they can challenge the contract under Section 19 of the Contract Act. The franchisee can claim that the contract was induced by fraud or misrepresentation, seeking to void the agreement, recover their initial franchise fee, and claim compensation for the losses suffered, protecting their investment.
          </p>

          <div className="bg-[#FAF8F5] border border-gray-100 rounded-2xl p-6 mt-4">
            <h4 className="font-bold text-[#2D2219] mb-3">FDD Audit Checklist</h4>
            <ul className="space-y-3 text-xs sm:text-sm text-gray-600">
              <li className="flex items-start gap-2">
                <span className="text-[#D4AF37] font-bold">1. Trademark Status:</span> Verify if the franchisor holds registered trademark ownership.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#D4AF37] font-bold">2. Exit Closure History:</span> Audit the rate of franchise failures in the preceding three years.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#D4AF37] font-bold">3. Hidden Costs:</span> Check for mandatory supply chains, local marketing funds, and software license fees.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#D4AF37] font-bold">4. Active Litigations:</span> Verify any consumer complaints, vendor suits, or trademark oppositions.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
