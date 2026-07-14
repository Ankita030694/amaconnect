import React from "react";

export default function POSHAppeals({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mb-12">
      <div className="flex flex-col gap-6">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 8
          </span>
          <h2 className="text-xl sm:text-2xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Filing Appeals against ICC Recommendations
          </h2>
          
          <h3 className="text-base sm:text-lg font-bold text-[#2D2219] mt-6 mb-3">
            The Appellate Authority and the Ninety-Day Window
          </h3>
          <p className="text-sm text-gray-600 leading-relaxed text-justify mb-4">
            Under the Prevention of Sexual Harassment Act, the recommendations submitted by the Internal Complaints Committee are not final in an absolute sense, as both the complainant and the respondent possess the statutory right to appeal the decision. Section 18 of the POSH Act establishes the legal framework for filing appeals against the recommendations of the ICC or in cases where the employer fails to implement the suggested disciplinary actions. The appeal must be preferred before the designated appellate authority in accordance with the service rules applicable to the organization, or in their absence, to the labor court or industrial tribunal. A critical statutory constraint is the strict ninety-day window, commencing from the date on which the ICC's final inquiry report and recommendations are officially communicated to the parties. If a party fails to prefer an appeal within this three-month timeframe, the right to challenge the ICC findings is generally forfeited, unless they can demonstrate exceptional circumstances that legally justify the delay. The appellate authority is empowered to review the entire case record, evaluate whether the principles of natural justice were followed during the inquiry, and determine if the findings are supported by the evidence. It can uphold, modify, or set aside the recommendations, or direct the ICC to conduct a fresh inquiry if procedural flaws are discovered. Knowing this appeals process is vital for ensuring that administrative errors or biased inquiry proceedings can be corrected, safeguarding the legal integrity of the entire dispute resolution system. Additionally, both parties can request the appellate authority to grant interim stays on any recommended disciplinary measures while the appeal is actively being reviewed.
          </p>
        </div>

        <div className="border border-gray-100 rounded-3xl p-6 sm:p-8 bg-[#FAF9F5]">
          <h3 className="text-base sm:text-lg font-bold text-[#2D2219] mb-3">
            Court Challenges and Judicial Review
          </h3>
          <p className="text-sm text-gray-600 leading-relaxed text-justify">
            Beyond the initial administrative appeals, parties can also initiate court challenges by filing writ petitions before the High Courts of India under Article 226 of the Constitution. High Courts possess the power of judicial review to examine whether the ICC or the appellate authority acted outside its jurisdiction, committed a gross error of law, or violated the principles of natural justice. In several landmark judgments, courts have set aside ICC reports due to procedural infractions, such as denying the respondent the right to cross-examine witnesses or failing to maintain the mandatory composition of the committee. However, courts generally refrain from re-appreciating the factual evidence or acting as a second court of appeal, focusing instead on whether the decision-making process was fair, unbiased, and compliant with statutory requirements. Complainants should be aware that the confidentiality provisions of Section 16 continue to apply during court challenges, and courts often direct the redaction of names and sensitive details to protect the identity of the aggrieved woman. Understanding these judicial avenues ensures that both employers and employees can seek justice if the internal administrative mechanism fails to deliver a fair hearing. Ultimately, these legal safeguards guarantee that the POSH Act is implemented in its true spirit, balancing the right to a safe workspace with the constitutional right to due process and fair administrative action for all individuals involved in the process. Consequently, organizations must ensure that their Internal Complaints Committee maintains meticulous documentation of all hearings, evidence, and deliberations to withstand legal scrutiny when challenged before judicial bodies.
          </p>
        </div>
      </div>
    </section>
  );
}
