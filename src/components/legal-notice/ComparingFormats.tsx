import React from "react";

export default function ComparingFormats({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 8
          </span>
          <h2 className="text-xl sm:text-2xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Comparing Notice Formats
          </h2>
          
          <p className="text-sm text-gray-600 leading-relaxed text-justify mb-6">
            Legal notices are not one size fits all documents; their structure, tone, statutory references, and notice periods differ significantly depending on the legal matter. Using the wrong format or referencing the incorrect law can invalidate the notice, giving the recipient a strong defense. For example, a commercial dispute notice is strictly civil and professional, focusing on financial performance and contract clauses. In contrast, matrimonial notices require a sensitive yet firm tone, focusing on personal relations, restitution of conjugal rights, or separation terms.
          </p>

          <h3 className="text-base font-bold text-[#2D2219] mt-6 mb-3">
            Notice for Breach of Contract vs Eviction
          </h3>
          <p className="text-sm text-gray-600 leading-relaxed text-justify mb-6">
            A notice for breach of contract is governed by the Indian Contract Act, 1872. It focuses on identifying the specific clauses breached, the date of default, and the financial damages caused. The notice period is typically 15 or 30 days as specified in the agreement. An eviction notice, on the other hand, is governed by Section 106 of the Transfer of Property Act, 1882, or state-specific rent control laws. The primary focus of an eviction notice is the termination of the lease tenancy and demanding that the tenant vacate the premises and hand over peaceful possession. The statutory notice period is strictly 15 days for monthly tenancies and 6 months for yearly tenancies, unless agreed otherwise in writing.
          </p>

          <h3 className="text-base font-bold text-[#2D2219] mt-6 mb-3">
            Notice for Cheque Bounce vs Matrimonial
          </h3>
          <p className="text-sm text-gray-600 leading-relaxed text-justify mb-6">
            A cheque bounce notice is a highly technical, time-sensitive document governed by Section 138 of the Negotiable Instruments Act, 1881. It has a strict 15 day compliance window, and must be sent within 30 days of receiving the cheque return memo from the bank. The notice must specify the cheque number, amount, date, reason for dishonour, and demand payment of the exact cheque amount. In contrast, matrimonial notices, which may involve divorce, child custody, maintenance, or restitution of conjugal rights, are governed by personal laws such as the Hindu Marriage Act, 1955, or the Special Marriage Act, 1954. These notices usually offer a 30 day response window, and focus on domestic grievances, attempts at reconciliation, or terms of separation.
          </p>
        </div>

        {/* Comparison Table (Section Type 3) */}
        <div>
          <h3 className="text-lg font-bold text-[#2D2219] mb-4">Notice Formats Comparison</h3>
          <div className="overflow-x-auto border border-gray-100 rounded-3xl shadow-sm">
            <table className="w-full text-left border-collapse bg-white text-sm">
              <thead>
                <tr className="bg-[#FAF9F5] border-b border-gray-100 text-gray-700 font-bold">
                  <th className="p-4">Notice Category</th>
                  <th className="p-4">Governing Legislation</th>
                  <th className="p-4">Statutory Notice Period</th>
                  <th className="p-4">Core Legal Requirement</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-gray-600">
                <tr>
                  <td className="p-4 font-bold text-gray-900">Breach of Contract</td>
                  <td className="p-4">Indian Contract Act, 1872</td>
                  <td className="p-4">15 to 30 Days (Per Agreement)</td>
                  <td className="p-4">Identify violated clauses, specify date of default, and quantify monetary damages.</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-gray-900">Tenant Eviction</td>
                  <td className="p-4">Transfer of Property Act (Sec 106)</td>
                  <td className="p-4">15 Days (Monthly) / 6 Months (Yearly)</td>
                  <td className="p-4">Terminate tenancy, demand vacant possession, and specify arrears of rent.</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-gray-900">Cheque Bounce</td>
                  <td className="p-4">Negotiable Instruments Act (Sec 138)</td>
                  <td className="p-4">Strictly 15 Days (Mandatory)</td>
                  <td className="p-4">Must state cheque details, dishonour memo date, and demand cheque amount payment.</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-gray-900">Matrimonial Dispute</td>
                  <td className="p-4">Personal Laws (HMA, SMA, etc.)</td>
                  <td className="p-4">Usually 15 to 30 Days</td>
                  <td className="p-4">State family grievances, demand reconciliation, or propose mutual divorce terms.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
