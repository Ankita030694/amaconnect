import React from "react";
import Link from "next/link";

export default function CostBreakdown({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 7
          </span>
          <h2 className="text-xl sm:text-2xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Cost Breakdown of Legal Notices
          </h2>
          
          <p className="text-sm text-gray-600 leading-relaxed text-justify mb-6">
            The overall cost of drafting and sending a legal notice in India varies widely depending on the complexity of the dispute, the financial stakes involved, and the professional standing of the drafting advocate. While some standard notices, like cheque bounces, have predictable flat rates, complex commercial disputes or property division notices require extensive document review and customized drafting, leading to higher professional charges. Understanding these expenses helps clients budget effectively and avoid unexpected legal bills.
          </p>

          <h3 className="text-base font-bold text-[#2D2219] mt-6 mb-3">
            Advocate Consultation and Drafting Fees
          </h3>
          <p className="text-sm text-gray-600 leading-relaxed text-justify mb-6">
            The primary component of the cost is the advocate professional fee for consultation and drafting. For a junior advocate or local practitioner, drafting fees typically range from INR 2,000 to INR 7,500. Mid-level firms and experienced lawyers may charge between INR 10,000 and INR 25,000. In high-value corporate matters or complex property disputes, senior advocates or tier-one law firms may charge INR 50,000 or more. This fee usually covers the initial consultation, case file review, drafting of the notice, sharing the draft with the client for feedback, and final printing on the advocate letterhead.
          </p>

          <h3 className="text-base font-bold text-[#2D2219] mt-6 mb-3">
            Postage and Registration Fees
          </h3>
          <p className="text-sm text-gray-600 leading-relaxed text-justify mb-6">
            In contrast to advocate professional fees, the actual administrative and dispatch charges are quite nominal. Sending a legal notice via Registered Post AD or Speed Post through India Post typically costs between INR 50 and INR 150 per recipient, depending on the weight of the document and the delivery location. If the notice is sent to multiple recipients or across different cities, the postage costs will increase accordingly. Photocopying, scanning, and notary charges (if required for accompanying affidavits) add another INR 100 to INR 300. While these administrative expenses are low, preserving the original receipts is vital, as they are required to prove service in court.
          </p>
        </div>

        {/* Cost Breakdown (Section Type 2) */}
        <div>
          <h3 className="text-lg font-bold text-[#2D2219] mb-4">Estimated Fee Structure</h3>
          <div className="overflow-x-auto border border-gray-100 rounded-3xl shadow-sm">
            <table className="w-full text-left border-collapse bg-white text-sm">
              <thead>
                <tr className="bg-[#FAF9F5] border-b border-gray-100 text-gray-700 font-bold">
                  <th className="p-4">Expense Component</th>
                  <th className="p-4">Standard Range (INR)</th>
                  <th className="p-4">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-gray-600">
                <tr>
                  <td className="p-4 font-bold text-gray-900">Advocate Consultation</td>
                  <td className="p-4">INR 1,000 - INR 5,000</td>
                  <td className="p-4">Initial meeting, facts evaluation, and checking legal viability of claims.</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-gray-900">Drafting Charges</td>
                  <td className="p-4">INR 2,000 - INR 15,000</td>
                  <td className="p-4">Drafting the notice body on letterhead, adjusting clauses, and final printing.</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-gray-900">Postal Dispatch (Registered Post AD)</td>
                  <td className="p-4">INR 50 - INR 150</td>
                  <td className="p-4">Official postage fees of India Post including the Acknowledgment Due card.</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-gray-900">Administrative &amp; Photocopying</td>
                  <td className="p-4">INR 100 - INR 300</td>
                  <td className="p-4">Printing multiple copies, scanning for digital records, and stationery.</td>
                </tr>
                <tr className="bg-[#FAF9F5] font-bold text-gray-900">
                  <td className="p-4">Total Estimated Cost</td>
                  <td className="p-4">INR 3,150 - INR 20,450</td>
                  <td className="p-4">Overall cost for standard civil or commercial legal notices.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Free Legal Aid Box */}
        <div className="bg-emerald-50/50 border border-emerald-100 rounded-3xl p-6 flex flex-col sm:flex-row gap-5 items-start mt-2">
          <div className="w-12 h-12 rounded-2xl bg-emerald-100 flex items-center justify-center text-emerald-600 flex-shrink-0">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
            </svg>
          </div>
          <div>
            <h3 className="text-base font-bold text-emerald-950 mb-2">
              Free Legal Aid under NALSA
            </h3>
            <p className="text-sm text-emerald-900/80 leading-relaxed text-justify">
              If you cannot afford advocate drafting fees, you can access free legal drafting and consultation services. Under the Legal Services Authorities Act, 1987, eligible categories including women, children, scheduled castes, scheduled tribes, and marginalized citizens can apply for free legal aid through national, state, or district authorities. For more details on eligibility and how to apply, visit our <Link href="/pro-bono-free-legal-aid" className="underline font-bold text-emerald-950">Free Legal Aid Guide</Link>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
