import React from "react";

export default function ThresholdJurisdiction({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 6
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Threshold Limits and Court Jurisdiction
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
            When deciding between filing a petition under the Insolvency and Bankruptcy Code (IBC) or invoking the MSME Samadhaan mechanism, understanding the statutory threshold limits and territorial jurisdiction is essential. While the IBC deals with systemic insolvency and has high entry barriers, the MSME Samadhaan acts as a recovery tool for small businesses with no minimum limit.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="overflow-x-auto rounded-3xl border border-gray-200">
          <table className="w-full text-left border-collapse bg-white">
            <thead>
              <tr className="bg-[#FAF9F5] border-b border-gray-200">
                <th className="p-4 sm:p-5 text-sm font-bold text-[#2D2219] w-1/4">Parameter</th>
                <th className="p-4 sm:p-5 text-sm font-bold text-[#2D2219] w-3/8">Insolvency under IBC (Section 9)</th>
                <th className="p-4 sm:p-5 text-sm font-bold text-[#2D2219] w-3/8">Recovery under MSMED Act (Samadhaan)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              <tr>
                <td className="p-4 sm:p-5 text-xs sm:text-sm font-bold text-[#2D2219]">Minimum Threshold</td>
                <td className="p-4 sm:p-5 text-xs sm:text-sm text-gray-600 leading-relaxed text-justify">
                  1 Crore rupees (Raised from 1 Lakh rupees in March 2020 by the MCA).
                </td>
                <td className="p-4 sm:p-5 text-xs sm:text-sm text-gray-600 leading-relaxed text-justify">
                  No minimum limit. Suppliers can file for any amount, small or large.
                </td>
              </tr>
              <tr>
                <td className="p-4 sm:p-5 text-xs sm:text-sm font-bold text-[#2D2219]">Territorial Jurisdiction</td>
                <td className="p-4 sm:p-5 text-xs sm:text-sm text-gray-600 leading-relaxed text-justify">
                  The NCLT bench having jurisdiction over the registered office of the corporate debtor.
                </td>
                <td className="p-4 sm:p-5 text-xs sm:text-sm text-gray-600 leading-relaxed text-justify">
                  The MSEFC council located where the supplier unit is registered, providing a home-court advantage.
                </td>
              </tr>
              <tr>
                <td className="p-4 sm:p-5 text-xs sm:text-sm font-bold text-[#2D2219]">Eligible Entities</td>
                <td className="p-4 sm:p-5 text-xs sm:text-sm text-gray-600 leading-relaxed text-justify">
                  Any Operational Creditor against corporate debtors (Companies and LLPs).
                </td>
                <td className="p-4 sm:p-5 text-xs sm:text-sm text-gray-600 leading-relaxed text-justify">
                  Registered Micro and Small Enterprises only. Medium enterprises are excluded from filing.
                </td>
              </tr>
              <tr>
                <td className="p-4 sm:p-5 text-xs sm:text-sm font-bold text-[#2D2219]">Nature of Process</td>
                <td className="p-4 sm:p-5 text-xs sm:text-sm text-gray-600 leading-relaxed text-justify">
                  Insolvency resolution and debt restructuring. The focus is corporate survival, not individual recovery.
                </td>
                <td className="p-4 sm:p-5 text-xs sm:text-sm text-gray-600 leading-relaxed text-justify">
                  Direct debt recovery. The focus is to secure the supplier principal amount plus compound interest.
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div>
          <h3 className="text-lg font-bold text-[#2D2219] mb-4">
            Understanding Home-Court Advantage under the MSMED Act
          </h3>
          <p className="text-sm text-gray-600 leading-relaxed text-justify">
            One of the primary benefits of the MSMED Act is that MSMEs are not forced to travel or hire lawyers in the debtor's state. Section 18 of the MSMED Act allows the supplier to file a reference with their local MSEFC. Even if the contract specifies a different jurisdiction, the statutory jurisdiction of the local Council overrides it, saving significant travel and administrative expenses.
          </p>
        </div>
      </div>
    </section>
  );
}
