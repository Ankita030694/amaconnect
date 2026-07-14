import React from "react";

export default function ComparingFormats({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 8
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Comparing Notice Formats &amp; Civil Recourse
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
            A cheque bounce legal notice is highly specialized and governed by strict statutory rules under the Negotiable Instruments Act. Unlike other legal notices where the format can be flexible, a Section 138 notice must follow precise parameters to be valid in court. Additionally, while the criminal case proceeds, payees can also file a civil suit for recovery to ensure all legal channels are exhausted.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg font-bold text-[#2D2219]">
            How Cheque Bounce Notices Differ from Other Formats
          </h3>
          <div className="overflow-x-auto border border-gray-100 rounded-3xl shadow-sm">
            <table className="w-full text-left border-collapse bg-white text-sm">
              <thead>
                <tr className="bg-[#FAF9F5] border-b border-gray-100 text-gray-700 font-bold">
                  <th className="p-4">Notice Type</th>
                  <th className="p-4">Governing Law</th>
                  <th className="p-4">Response Window</th>
                  <th className="p-4">Core Legal Focus</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-gray-600">
                <tr>
                  <td className="p-4 font-bold text-gray-900">Cheque Bounce Notice</td>
                  <td className="p-4">Section 138 of Negotiable Instruments Act</td>
                  <td className="p-4">Strictly 15 Days</td>
                  <td className="p-4">Demanding exact cheque amount, stating bank return memo details and presentation dates.</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-gray-900">Breach of Contract Notice</td>
                  <td className="p-4">Indian Contract Act, 1872</td>
                  <td className="p-4">Usually 15 to 30 Days</td>
                  <td className="p-4">Identifying clauses breached, requesting remedy of default, and claiming monetary damages.</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-gray-900">Tenant Eviction Notice</td>
                  <td className="p-4">Section 106 of Transfer of Property Act</td>
                  <td className="p-4">15 Days or 6 Months</td>
                  <td className="p-4">Terminating the tenancy agreement, demanding vacant possession, and claiming rental arrears.</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-gray-900">Matrimonial Dispute Notice</td>
                  <td className="p-4">Personal Marriage Laws (HMA, SMA)</td>
                  <td className="p-4">Usually 30 Days</td>
                  <td className="p-4">Stating family grievances, requesting restitution of conjugal rights, or proposing mutual terms.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="text-lg font-bold text-[#2D2219]">
            Civil Recourse: Summary Suits under Order 37 of CPC
          </h3>
          <p className="text-sm text-gray-600 leading-relaxed text-justify">
            A criminal complaint under Section 138 is filed to penalize the drawer and secure compensation, but it does not prevent the payee from pursuing civil recovery. The most effective civil remedy is a Summary Suit filed under Order 37 of the Code of Civil Procedure, 1908. Unlike ordinary civil suits which take years, a summary suit is decided faster because the defendant does not have an automatic right to defend. They must apply for leave to defend within ten days of receiving summons, and the court will only grant it if they show a genuine and triable defense.
          </p>
        </div>
      </div>
    </section>
  );
}
