import React from "react";
import Link from "next/link";

export default function ConsumerRemedies({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 3
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Remedies under Consumer Protection Act
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
            The Consumer Protection Act, 2019, represents the most accessible and effective legal pathway for Indian patients seeking monetary compensation for medical malpractice. By classifying healthcare as a service and patients as consumers, the law bypasses the lengthy, expensive procedures of traditional civil suits. It provides a structured, time bound mechanism to hold negligent hospitals and doctors financially liable for substandard treatment, misdiagnosis, or surgical errors.
          </p>
        </div>

        {/* Comparison Table Section Type */}
        <div className="bg-white border border-gray-200 rounded-3xl p-6 sm:p-8 my-2 shadow-sm overflow-hidden">
          <p className="text-xs text-[#D4AF37] font-bold uppercase tracking-wider mb-2">
            Legal Forum Comparison
          </p>
          <h3 className="text-lg font-bold text-[#2D2219] mb-4">
            Comparison of Indian Legal Venues for Medical Negligence
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-gray-200 bg-gray-50 text-gray-700 font-bold uppercase tracking-wider">
                  <th className="py-3 px-4">Legal Forum</th>
                  <th className="py-3 px-4">Primary Objective</th>
                  <th className="py-3 px-4">Pecuniary / Legal Limits</th>
                  <th className="py-3 px-4">Available Remedies</th>
                  <th className="py-3 px-4">Avg. Timeline</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-gray-600">
                <tr>
                  <td className="py-3 px-4 font-bold text-[#2D2219]">Consumer Commission</td>
                  <td className="py-3 px-4">Financial compensation for deficiency in service</td>
                  <td className="py-3 px-4">Based on consideration paid (District up to 50 Lakhs, State up to 2 Crores)</td>
                  <td className="py-3 px-4">Refund of fees, compensation for mental agony, litigation costs</td>
                  <td className="py-3 px-4">1 to 3 Years</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-bold text-[#2D2219]">State Medical Council</td>
                  <td className="py-3 px-4">Disciplinary action for professional misconduct</td>
                  <td className="py-3 px-4">No pecuniary limit, based on violation of MCI/NMC ethics codes</td>
                  <td className="py-3 px-4">Warning, temporary suspension of license, permanent license revocation</td>
                  <td className="py-3 px-4">6 Months to 2 Years</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-bold text-[#2D2219]">Civil Court</td>
                  <td className="py-3 px-4">Recovery of damages under civil tort law</td>
                  <td className="py-3 px-4">Determined by court fees paid and value of damages claimed</td>
                  <td className="py-3 px-4">Unlimited monetary damages, injunctions against hospital operations</td>
                  <td className="py-3 px-4">3 to 7 Years</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-bold text-[#2D2219]">Criminal Court (Police)</td>
                  <td className="py-3 px-4">Criminal punishment for gross negligence</td>
                  <td className="py-3 px-4">Requires proof of gross negligence under Section 304A IPC</td>
                  <td className="py-3 px-4">Imprisonment of up to two years, fine, or both for the doctor</td>
                  <td className="py-3 px-4">2 to 5 Years</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-4 text-[11px] text-gray-400">
            Note: Patients may pursue these remedies concurrently. A complaint in the Consumer Commission does not prevent filing a complaint with the Medical Council or the police. For support, check our <Link href="/pro-bono-free-legal-aid" className="text-[#D4AF37] underline font-bold">Free Legal Aid</Link> portal.
          </div>
        </div>

        <div className="space-y-10">
          {/* H3: Filing complaints in Consumer Commissions */}
          <div className="flex flex-col gap-3">
            <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
              Filing complaints in Consumer Commissions
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed text-justify">
              The applicability of consumer law to medical services was firmly established by the Supreme Court of India in the landmark case of Indian Medical Association v. V.P. Shantha. The court ruled that medical services rendered by practitioners and hospitals fall within the definition of a service under Section 2(o) of the Consumer Protection Act, 1986, which has been preserved in the 2019 Act. However, services provided free of charge at government hospitals, community health centers, or charitable clinics do not fall under this category unless some paying patients are also treated there. To file a complaint, a patient or their legal heir must draft a written petition detailing the facts, the treatment provided, the specific breach of the duty of care, and the damages suffered. The complaint must be accompanied by all medical bills, discharge summaries, laboratory reports, and, crucially, an independent medical opinion from a government doctor or medical board supporting the claim of negligence. The complaint must be filed within two years from the date when the cause of action arose, although delay condonation applications can be filed under exceptional circumstances.
            </p>
          </div>

          {/* H3: Determining Pecuniary Jurisdiction for Claims */}
          <div className="flex flex-col gap-3">
            <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
              Determining Pecuniary Jurisdiction for Claims
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed text-justify">
              Under the Consumer Protection Act, 2019, the rules for determining the pecuniary jurisdiction of consumer commissions have undergone significant modifications. Previously, jurisdiction was determined by the value of the goods or services plus the compensation claimed, which often led to exaggerated claims designed to bypass lower commissions. Under the new rules, jurisdiction is strictly determined by the actual consideration paid for the service. The current pecuniary limits, as revised by the central government, dictate that the District Consumer Disputes Redressal Commission has jurisdiction to entertain complaints where the consideration paid does not exceed fifty lakh rupees. The State Commission handles cases where the consideration paid is between fifty lakh rupees and two crore rupees, while the National Consumer Disputes Redressal Commission in New Delhi retains jurisdiction for claims exceeding two crore rupees. Correctly calculating and identifying the appropriate forum is vital, as filing in the wrong commission will result in the return of the complaint, causing procedural delays and potentially risking the statutory limitation period of two years.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
