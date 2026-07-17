import React from "react";

export default function ConsumerCommissionClaim({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 6
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Filing Claims in Consumer Commission
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
            For disputes involving large claim amounts or where policyholders seek compensation for mental harassment, the Consumer Commissions established under the Consumer Protection Act, 2019, offer a powerful judicial recourse.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Filing for Deficiency of Service under CPA 2019
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            When an insurance company rejects a legitimate claim without valid legal or medical justification, it constitutes a clear deficiency of service under the Consumer Protection Act, 2019 (CPA). The definition of deficiency under the Act covers any fault, imperfection, shortcoming, or inadequacy in the quality, nature, and manner of performance that is required to be maintained by a service provider. In the context of insurance, deficiency of service includes wrongful repudiation of claims, inordinate delays in processing settlements, offering arbitrary settlement amounts without policyholder consent, or failing to communicate exclusions clearly. Under the CPA 2019, consumers have the legal right to bypass the Ombudsman and file a complaint directly in the Consumer Commissions, or approach them if they are dissatisfied with the Ombudsman award. The CPA 2019 has introduced a highly simplified, consumer friendly filing system, including the e-Daakhil portal, which allows policyholders to register complaints, pay court fees, and submit evidence electronically. The Act has also revised the pecuniary jurisdictions, allowing District Commissions to hear cases where the total value of goods or services does not exceed fifty lakh rupees. State Commissions handle claims between fifty lakh and two crore rupees, while the National Commission (NCDRC) in New Delhi hears disputes exceeding two crore rupees. Filing a complaint in the Consumer Commission provides a robust judicial platform to secure justice against arbitrary corporate actions, allowing policyholders to stand on equal terms with massive financial entities.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Drafting the Complaint and Claiming Compensation
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            Drafting a formal complaint for the Consumer Commission requires a precise structure that outlines the facts of the case, the deficiency of service, and the specific reliefs sought. The complaint must begin with the details of the complainant and the opposite party, which is the insurance company and its key officers. You must then write a chronological list of events, starting from when the policy was purchased, the premium payments made, the occurrence of the medical event or damage, the submission of the claim, and the eventual rejection by the insurer. It is vital to cite relevant consumer court judgments and legal precedents to show that the rejection was illegal. The most important section of the complaint is the prayer, which specifies the reliefs and compensation you are requesting from the commission. These reliefs typically include the full payment of the rejected claim amount along with interest, usually calculated at nine to twelve percent per annum from the date of the claim. In addition, you can claim substantial compensation for mental agony, harassment, and physical hardship caused by the wrongful denial, as well as the litigation costs incurred in filing the case. The complaint must be accompanied by an index of documents, copies of the policy, bills, discharge summaries, the rejection letter, and a signed verification affidavit. Ensuring that your complaint is drafted with professional precision increases the chances of securing a favorable order from the commission.
          </p>
        </div>
      </div>
    </section>
  );
}
