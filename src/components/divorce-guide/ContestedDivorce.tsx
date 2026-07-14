import React from "react";

export default function ContestedDivorce({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mb-12">
      <div className="flex flex-col gap-6">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 3
          </span>
          <h2 className="text-xl sm:text-2xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Contested Divorce Grounds and Filing
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed text-justify mb-4">
            When one spouse wishes to dissolve the marriage but the other does not consent, or when they cannot agree on critical issues like alimony or custody, a contested divorce must be filed. This procedure is adversarial, requiring one spouse to file a petition accusing the other of specific legal faults. The Hindu Marriage Act of 1955 outlines several valid grounds for a contested divorce. The petition must be filed in the family court of appropriate jurisdiction, starting a long legal process that includes summons, filing of written statements, replication, admission and denial of documents, framing of issues, recording of evidence by both sides, and final arguments. Because contested divorces involve proving allegations in court, they require experienced legal representation, careful documentation, and considerable emotional and financial resilience.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="bg-white border border-gray-100 rounded-3xl p-6 sm:p-8 shadow-sm">
          <h3 className="text-base font-bold text-[#2D2219] mb-4">
            Comparison: Mutual Consent vs. Contested Divorce
          </h3>
          <p className="text-xs text-gray-500 mb-6">
            Understanding the structural differences between these two pathways is essential for planning your legal strategy:
          </p>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="pb-3 text-xs font-bold text-gray-900 uppercase tracking-wider w-[25%]">Feature</th>
                  <th className="pb-3 text-xs font-bold text-gray-900 uppercase tracking-wider w-[37.5%]">Mutual Consent</th>
                  <th className="pb-3 text-xs font-bold text-gray-900 uppercase tracking-wider w-[37.5%]">Contested Divorce</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-xs text-gray-600">
                <tr>
                  <td className="py-3.5 font-bold text-gray-900">Consent Requirement</td>
                  <td className="py-3.5">Required from both spouses.</td>
                  <td className="py-3.5">Filed by one spouse, opposed by the other.</td>
                </tr>
                <tr>
                  <td className="py-3.5 font-bold text-gray-900">Grounds to Prove</td>
                  <td className="py-3.5">None, other than living separately for one year.</td>
                  <td className="py-3.5">Specific statutory faults (e.g. cruelty, desertion, adultery).</td>
                </tr>
                <tr>
                  <td className="py-3.5 font-bold text-gray-900">Typical Duration</td>
                  <td className="py-3.5">6 to 18 months, or shorter if waiting period is waived.</td>
                  <td className="py-3.5">3 to 5 years, sometimes longer in complex disputes.</td>
                </tr>
                <tr>
                  <td className="py-3.5 font-bold text-gray-900">Financial Costs</td>
                  <td className="py-3.5">Moderate, as procedures are streamlined.</td>
                  <td className="py-3.5">High, due to multiple hearings and trial stages.</td>
                </tr>
                <tr>
                  <td className="py-3.5 font-bold text-gray-900">Emotional Impact</td>
                  <td className="py-3.5">Lower, since disputes are settled amicably.</td>
                  <td className="py-3.5">High, due to public allegations and adversarial trial.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="border border-gray-100 rounded-3xl p-6 sm:p-8 bg-[#FAF9F5]">
          <h3 className="text-base font-bold text-[#2D2219] mb-4">
            Cruelty and Desertion as Primary Grounds
          </h3>
          <p className="text-sm text-gray-600 leading-relaxed text-justify mb-4">
            Cruelty and desertion are the two most frequently cited grounds in contested divorce petitions in India. Legal cruelty, under Section 13(1)(ia) of the Hindu Marriage Act, is not restricted to physical violence but includes mental cruelty. The Supreme Court has clarified that mental cruelty must be of such a nature that the petitioner cannot reasonably be expected to live with the respondent. Examples include persistent verbal abuse, false allegations of infidelity, denial of physical intimacy without cause, or demanding dowry. Desertion, under Section 13(1)(ib), requires showing that the respondent has abandoned the petitioner without reasonable cause and without consent for a continuous period of at least two years immediately preceding the filing of the petition. The petitioner must prove both the physical separation and the respondent's clear intention to permanently end cohabitation.
          </p>
        </div>

        <div className="border border-gray-100 rounded-3xl p-6 sm:p-8 bg-white">
          <h3 className="text-base font-bold text-[#2D2219] mb-4">
            Adultery and Mental Health Provisions
          </h3>
          <p className="text-sm text-gray-600 leading-relaxed text-justify">
            Adultery remains a ground for divorce under Section 13(1)(i) of the Hindu Marriage Act, even though the Supreme Court struck it down as a criminal offense. For a civil divorce, the petitioner must prove that the respondent voluntarily had sexual intercourse with another person outside of marriage. Because direct evidence of adultery is rare, courts accept strong circumstantial evidence, such as travel records or intimate communications. Additionally, under Section 13(1)(iii), a spouse can seek divorce if the other suffers from an unsound mind, or a continuous or intermittent mental disorder of such a kind and to such an extent that the petitioner cannot reasonably be expected to live with them. The law requires proving that the disorder is incurable and backed by expert medical testimony, ensuring that general compatibility issues or minor conditions are not misused to seek a divorce.
          </p>
        </div>
      </div>
    </section>
  );
}
