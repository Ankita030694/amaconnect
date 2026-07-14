import React from "react";

export default function InquiryConciliation({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mb-12">
      <div className="flex flex-col gap-6">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 4
          </span>
          <h2 className="text-xl sm:text-2xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            The POSH Inquiry and Conciliation Process
          </h2>
          
          <h3 className="text-base sm:text-lg font-bold text-[#2D2219] mt-6 mb-3">
            Provisions for Conciliation before Inquiry
          </h3>
          <p className="text-sm text-gray-600 leading-relaxed text-justify mb-4">
            Before the Internal Complaints Committee initiates a formal investigation, the POSH Act provides a statutory window for settlement through conciliation under Section 10. This process can only be initiated at the specific, written request of the aggrieved woman, ensuring that she remains in complete control of how she wishes to proceed. Employers and committee members are strictly prohibited from coercing or pressure-tacticalizing the complainant into accepting conciliation. A critical safeguard embedded in the Act is that no monetary settlement can be made as a basis of conciliation, as the legislature intended to prevent wealthy or powerful respondents from using financial payoffs to silence victims or bypass disciplinary consequences. The conciliation process is designed to resolve minor disputes, miscommunications, or behavioral lapses through mutually agreed terms, such as an apology, a change in seating arrangements, or a commitment to undergo gender sensitivity training. If a settlement is successfully reached through conciliation, the ICC records the terms of the settlement and forwards them to the employer to implement the recommended actions. The committee also provides copies of the recorded settlement to both the complainant and the respondent, bringing the dispute to a close. Once a conciliation settlement is recorded, no further inquiry is conducted by the committee. However, if the respondent fails to comply with any of the terms agreed upon in the settlement, the aggrieved woman has the statutory right to inform the ICC, which must then immediately initiate a full-fledged inquiry into the original complaint.
          </p>
        </div>

        {/* SECTION TYPE: Comparison Table (Conciliation vs Inquiry) */}
        <div className="border border-gray-100 rounded-3xl p-6 sm:p-8 bg-white">
          <h3 className="text-base font-bold text-[#2D2219] mb-4">
            Comparison: Conciliation vs. Formal Inquiry Under POSH Act
          </h3>
          <p className="text-xs text-gray-500 mb-6 leading-relaxed">
            Understanding the distinction between these two paths is critical for both the complainant and the committee to ensure compliance with statutory guidelines:
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <th className="py-3 px-4 font-bold text-[#2D2219]">Feature</th>
                  <th className="py-3 px-4 font-bold text-[#2D2219]">Conciliation Process</th>
                  <th className="py-3 px-4 font-bold text-[#2D2219]">Formal Inquiry Process</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  {
                    feature: "Initiation Trigger",
                    conciliation: "Requested voluntarily in writing by the aggrieved woman.",
                    inquiry: "Initiated automatically if conciliation fails, is breached, or is bypassed."
                  },
                  {
                    feature: "Evidence and Witnesses",
                    conciliation: "No formal recording of evidence, cross-examination, or witness interviews.",
                    inquiry: "Structured compilation of documents, testimonies, and cross-examinations."
                  },
                  {
                    feature: "Legal Representation",
                    conciliation: "No legal practitioners allowed; mediated internally by the ICC.",
                    inquiry: "No legal practitioners allowed during hearings; parties represent themselves."
                  },
                  {
                    feature: "Financial Component",
                    conciliation: "Strictly prohibited from including any monetary compensation terms.",
                    inquiry: "Can recommend deduction of compensation from respondent's salary."
                  },
                  {
                    feature: "Final Outcome",
                    conciliation: "A signed settlement agreement with copy forwarded to the employer.",
                    inquiry: "A formal inquiry report containing final findings and recommended penalties."
                  }
                ].map((row, idx) => (
                  <tr key={idx} className="hover:bg-gray-50/55 transition-colors">
                    <td className="py-3.5 px-4 font-bold text-[#2D2219]">{row.feature}</td>
                    <td className="py-3.5 px-4 text-gray-600 leading-relaxed">{row.conciliation}</td>
                    <td className="py-3.5 px-4 text-gray-600 leading-relaxed">{row.inquiry}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <h3 className="text-base sm:text-lg font-bold text-[#2D2219] mt-6 mb-3">
            Conducting the Inquiry and Evidence Standard
          </h3>
          <p className="text-sm text-gray-600 leading-relaxed text-justify">
            If conciliation is not requested by the complainant, or if the conciliation process fails to yield a settlement, the ICC must proceed with a formal inquiry under Section 11 of the Act. The inquiry must be conducted in accordance with the service rules applicable to the respondent, or in their absence, in accordance with the rules prescribed under the POSH Act. The law mandates that the entire inquiry process, from receipt of the complaint to the submission of the final inquiry report, must be completed within a strict period of ninety days. Both the complainant and the respondent are entitled to a fair hearing in line with the principles of natural justice, which includes the right to receive copies of all submissions, present witnesses, and cross-examine the other party's witnesses. A key distinction of a POSH inquiry is that the standard of proof is the preponderance of probability, which is the civil standard, rather than the criminal standard of proof beyond a reasonable doubt. This means the committee evaluates whether, based on the weight of the evidence and credibility of statements, the harassment was more likely to have occurred than not. Furthermore, the POSH Rules explicitly prohibit either party from bringing a legal practitioner to represent them during the hearings, ensuring that the process remains administrative, protective, and non-adversarial rather than turning into a hyper-technical legal battle. Upon completing the inquiry, the ICC must submit its findings report to the employer within ten days, recommending specific disciplinary actions if the charges are proved.
          </p>
        </div>
      </div>
    </section>
  );
}
