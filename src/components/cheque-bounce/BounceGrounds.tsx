import React from "react";

export default function BounceGrounds({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 2
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Grounds for Cheque Bounce Complaints
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
            A cheque bounce case can only be initiated under Section 138 of the Negotiable Instruments Act if specific legal grounds are met. The most common ground is insufficient funds, but judicial precedents have expanded the scope to cover other situations where the drawer attempts to evade payment. The primary requirement is that the cheque must have been issued for the discharge of a legally enforceable debt or liability, not as a gift or charity.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg font-bold text-[#2D2219]">
            Recognized Legal Grounds for Action
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl bg-white border border-gray-150 shadow-sm">
              <h4 className="text-sm font-bold text-gray-900 mb-2">1. Insufficient Funds</h4>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                The account holder does not have enough balance to cover the cheque amount at the time of presentation.
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-white border border-gray-150 shadow-sm">
              <h4 className="text-sm font-bold text-gray-900 mb-2">2. Exceeds Arrangement</h4>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                The cheque amount exceeds the overdraft limit or pre-arranged credit limit agreed between the bank and drawer.
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-white border border-gray-150 shadow-sm">
              <h4 className="text-sm font-bold text-gray-900 mb-2">3. Account Closed</h4>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                The drawer closed their account before the payee presented the cheque, showing clear bad faith or negligence.
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-white border border-gray-150 shadow-sm">
              <h4 className="text-sm font-bold text-gray-900 mb-2">4. Stop Payment Instructions</h4>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                The drawer instructed their bank to stop payment, which still attracts liability unless they prove it was for a valid dispute.
              </p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-bold text-[#2D2219] mb-4">Comparison of Civil vs Criminal Remedies</h3>
          <div className="overflow-x-auto border border-gray-100 rounded-3xl shadow-sm">
            <table className="w-full text-left border-collapse bg-white text-sm">
              <thead>
                <tr className="bg-[#FAF9F5] border-b border-gray-100 text-gray-700 font-bold">
                  <th className="p-4">Parameters</th>
                  <th className="p-4">Civil Remedy (Summary Suit)</th>
                  <th className="p-4">Criminal Remedy (Section 138)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-gray-600">
                <tr>
                  <td className="p-4 font-bold text-gray-900">Governing Law</td>
                  <td className="p-4">Order 37 of Code of Civil Procedure, 1908</td>
                  <td className="p-4">Section 138 of Negotiable Instruments Act, 1881</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-gray-900">Primary Objective</td>
                  <td className="p-4">Recovery of the principal debt amount plus interest</td>
                  <td className="p-4">Punishing the drawer and securing compensation</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-gray-900">Maximum Penalty</td>
                  <td className="p-4">Decree for payment, attachment of assets</td>
                  <td className="p-4">Up to 2 years imprisonment, fine up to double cheque amount</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-gray-900">Limitation Period</td>
                  <td className="p-4">3 years from the date of cheque or default</td>
                  <td className="p-4">Strictly 30 days from the end of the notice period</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-gray-900">Court Fees</td>
                  <td className="p-4">Ad-valorem, percentage of total suit value</td>
                  <td className="p-4">Nominal, fixed court fee depending on state rules</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-gray-900">Interim Relief</td>
                  <td className="p-4">Attachment before judgment in rare cases</td>
                  <td className="p-4">Up to 20 percent interim compensation under Section 143A</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
