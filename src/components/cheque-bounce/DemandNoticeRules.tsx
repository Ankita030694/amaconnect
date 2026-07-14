import React from "react";

export default function DemandNoticeRules({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 3
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Mandatory Section 138 Demand Notice Rules
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
            Sending a demand notice is the most critical step in a cheque bounce case. Section 138 of the Negotiable Instruments Act makes it mandatory to issue a written notice to the drawer within 30 days of receiving the cheque return memo from the bank. If this notice is not sent or is delayed by even a single day, the right to file a criminal complaint is lost, and the payee must rely on slower civil recovery channels.
          </p>
        </div>

        <div className="space-y-4 text-sm text-gray-600">
          <h3 className="text-lg font-bold text-[#2D2219] mb-2">Essential Components of the Notice</h3>
          <p className="leading-relaxed text-justify">
            A valid legal notice under Section 138 must be clear, concise, and contain specific statutory details. It should explicitly state the details of the cheque, including its number, date, and value, the date of presentation, the date of return, the exact reason for dishonor as per the memo, and a formal demand for payment. The notice must grant the drawer exactly 15 days from the date of receiving the notice to clear the outstanding debt.
          </p>
          <div className="bg-[#FAF9F5] rounded-3xl p-6 border border-gray-100 mt-2">
            <h4 className="font-bold text-[#2D2219] text-sm mb-3">Service of Notice Rules</h4>
            <p className="text-xs sm:text-sm leading-relaxed text-justify">
              The notice must be sent via Registered Post AD or Speed Post to ensure proof of delivery. The Supreme Court has ruled that if the notice is sent to the correct address, service is presumed to be complete. Payees must retain the original postal receipt and the Acknowledgment Due card, or download the online tracking report, as these are vital documents during the trial.
            </p>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-bold text-[#2D2219] mb-4">Cost Breakdown of Advocate Fees</h3>
          <p className="text-sm text-gray-600 leading-relaxed text-justify mb-4">
            The legal costs for managing a cheque bounce dispute depend on the experience of the advocate and the complexity of the trial. While drafting a standard notice is relatively inexpensive, complete representation throughout a criminal trial involves multiple stages and hearings.
          </p>
          <div className="overflow-x-auto border border-gray-100 rounded-3xl shadow-sm">
            <table className="w-full text-left border-collapse bg-white text-sm">
              <thead>
                <tr className="bg-[#FAF9F5] border-b border-gray-100 text-gray-700 font-bold">
                  <th className="p-4">Legal Stage</th>
                  <th className="p-4">Estimated Fee Range (INR)</th>
                  <th className="p-4">Details &amp; Deliverables</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-gray-600">
                <tr>
                  <td className="p-4 font-bold text-gray-900">Initial Advocate Consultation</td>
                  <td className="p-4">INR 1,500 - INR 5,000</td>
                  <td className="p-4">Evaluating transaction documents, bank memos, and verifying statutory timelines.</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-gray-900">Drafting and Dispatching Notice</td>
                  <td className="p-4">INR 3,000 - INR 10,000</td>
                  <td className="p-4">Formulating the notice text, printing on letterhead, and dispatching via Registered Post AD.</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-gray-900">Filing Court Complaint</td>
                  <td className="p-4">INR 10,000 - INR 25,000</td>
                  <td className="p-4">Drafting the criminal complaint, preparing evidence index, and filing before the magistrate.</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-gray-900">Trial Representation (Per Hearing)</td>
                  <td className="p-4">INR 5,000 - INR 15,000</td>
                  <td className="p-4">Attending hearings, presenting arguments, examining witnesses, and cross-examinations.</td>
                </tr>
                <tr className="bg-[#FAF9F5] font-bold text-gray-900">
                  <td className="p-4">Total Estimated Cost</td>
                  <td className="p-4">INR 19,500 - INR 55,000</td>
                  <td className="p-4">Complete legal cost for end to end dispute resolution in magistrate court.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
