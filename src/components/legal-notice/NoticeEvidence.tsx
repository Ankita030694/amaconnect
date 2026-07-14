import React from "react";

export default function NoticeEvidence({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 5
          </span>
          <h2 className="text-xl sm:text-2xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Admissibility of Legal Notice as Evidence
          </h2>
          
          <p className="text-sm text-gray-600 leading-relaxed text-justify mb-6">
            In the Indian judicial system, a legal notice is not a substantive piece of evidence on its own, but it holds immense corroborative and evidentiary value during a trial. When a party initiates a civil lawsuit or a criminal complaint, the legal notice served prior to the litigation is brought on record to establish the chronological consistency of the claims. Under the provisions of the Indian Evidence Act, 1872, the notice and the proof of its service, which includes postal receipts, acknowledgment due cards, and online tracking reports, are exhibited to demonstrate that the plaintiff or complainant approached the court in good faith after exhausting administrative or amicable channels. It prevents the opposite party from claiming surprise, ignorance, or lack of information regarding the dispute. During the cross-examination of witnesses, the statements made in the legal notice are cross-referenced with the pleadings, such as the plaint or written statement, and any subsequent deposition. Inconsistencies or contradictions between the facts stated in the notice and those presented in court can severely damage the credibility of the party. Therefore, the notice serves as a foundational anchor that binds the sender to a specific version of facts, making it a critical tool for judicial scrutiny and case evaluation. Furthermore, it allows the court to assess whether the litigation was prematurely filed or whether the plaintiff had clean hands before seeking judicial remedies, thereby influencing the court's overall perception of the dispute from the very beginning of the trial process. Consequently, a well-crafted legal notice acts as a primary building block that sets the tone for the entire litigation.
          </p>

          <h3 className="text-base font-bold text-[#2D2219] mt-6 mb-3">
            Admission of Liability by Silence
          </h3>
          <p className="text-sm text-gray-600 leading-relaxed text-justify mb-6">
            Another critical dimension of a legal notice as evidence is the concept of admission of liability by silence, which has been analyzed in numerous judgments by Indian courts. While silence does not automatically equate to admission in all branches of law, the failure of a recipient to reply to a formal legal notice can lead to the court drawing an adverse inference. Under Section 114 of the Indian Evidence Act, 1872, the court may presume the existence of any fact which it thinks likely to have happened, regard being had to the common course of natural events and human conduct. If an individual receives a notice containing serious, detailed, and specific allegations regarding financial defaults or contractual breaches, a reasonable person of ordinary prudence would be expected to immediately deny those claims if they were false. Remaining silent or neglecting to send a reply notice allows the plaintiff to argue that the recipient had no valid defense and effectively accepted the assertions. However, this presumption is not absolute and can be rebutted during the trial by presenting concrete evidence that explains the silence, such as severe illness, travel, or lack of proper service. Nonetheless, the tactical advantage gained by the sender when the recipient fails to respond is substantial, as it places a heavy burden of proof on the defendant to explain their silence and disprove the claims during cross-examination. This makes the prompt preparation of a comprehensive reply a strategic necessity to protect one's legal interests in any upcoming court proceedings.
          </p>

          <h3 className="text-base font-bold text-[#2D2219] mt-6 mb-3">
            Section 80 CPC Notices in Trial
          </h3>
          <p className="text-sm text-gray-600 leading-relaxed text-justify mb-6">
            In lawsuits filed against the government or public officers, the statutory notice under Section 80 of the Code of Civil Procedure, 1908 (CPC), plays a pivotal role during the trial stage. Unlike private disputes where a notice is optional, a Section 80 notice is a mandatory pre-requisite, and its absence or invalidity can lead to the immediate dismissal of the suit at the threshold. During the trial, the plaintiff must prove not only that the notice was duly served to the appropriate government department or office, but also that the suit was filed strictly after the expiration of the two-month statutory period. The court carefully examines the contents of the Section 80 notice to ensure that the cause of action, the identity of the plaintiff, and the reliefs claimed in the plaint are identical to what was stated in the notice. If there is a material variance, such as claiming a different relief or introducing a new cause of action in the plaint that was not mentioned in the notice, the suit is liable to be rejected. The trial court treats this statutory requirement with extreme rigidity because the objective of the law is to give the government ample opportunity to examine the claim and settle it out of court. Consequently, the Section 80 notice is a crucial document that is scrutinized by judges to determine the maintainability of the suit against the state. Litigants must therefore ensure that this notice is drafted with extreme precision and aligns perfectly with the final plaint submitted to the court.
          </p>
        </div>

        {/* Quote Block */}
        <div className="border-l-4 border-[#D4AF37] bg-[#FDFBF7] p-6 rounded-r-2xl italic text-gray-700 text-sm leading-relaxed my-2">
          "If a party fails to deny the specific allegations in a legal notice served upon them, such non-denial or silence can be considered as a material circumstance to draw an adverse presumption, provided the service is proved."
          <span className="block text-xs font-bold text-gray-900 mt-3 not-italic">, High Court of Delhi, Ram Sharan v. Devender Kumar</span>
        </div>

        {/* Tip Box */}
        <div className="bg-amber-50/50 border border-amber-100 rounded-3xl p-6 flex flex-col sm:flex-row gap-5 items-start mt-2">
          <div className="w-12 h-12 rounded-2xl bg-amber-100 flex items-center justify-center text-amber-600 flex-shrink-0">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
              <polyline points="14 2 14 8 20 8"/>
              <line x1="16" y1="13" x2="8" y2="13"/>
              <line x1="16" y1="17" x2="8" y2="17"/>
              <polyline points="10 9 9 9 8 9"/>
            </svg>
          </div>
          <div>
            <h3 className="text-base font-bold text-amber-950 mb-2">
              Preservation of Service Proofs
            </h3>
            <p className="text-sm text-amber-900/80 leading-relaxed text-justify">
              To ensure the notice is admissible as evidence, always secure the official delivery certificate. Keep the physical speed post receipts, get the signature on the Acknowledgment Due card, and download the tracking report from the India Post website showing the exact date and location of successful delivery.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
