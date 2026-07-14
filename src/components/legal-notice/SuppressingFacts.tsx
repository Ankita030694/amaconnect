import React from "react";

export default function SuppressingFacts({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 6
          </span>
          <h2 className="text-xl sm:text-2xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Consequences of Suppressing Material Facts
          </h2>
          
          <p className="text-sm text-gray-600 leading-relaxed text-justify mb-6">
            In legal proceedings, transparency and truthfulness are paramount, and the suppression of material facts in a legal notice or subsequent pleadings carries severe consequences under Indian law, including the risk of perjury. When an advocate drafts a legal notice under instructions from a client, the facts stated therein form the initial basis of the legal dispute. If a party deliberately conceals crucial facts, such as a prior settlement, or presents false information to mislead the recipient or the court, they lay a highly compromised foundation for their case. When the matter reaches the court and the truth is exposed during the trial, the court can initiate proceedings for perjury under Section 191 and Section 193 of the Indian Penal Code, 1860, now corresponding to relevant provisions of the Bharatiya Nyaya Sanhita, 2023. Making false statements on oath or submitting false declarations in verification of pleadings is a criminal offense punishable with imprisonment. Courts in India have repeatedly taken a strict stance against litigants who attempt to play hide and seek with the truth. Initiating perjury proceedings not only destroys the credibility of the litigant but can also lead to direct criminal prosecution, which completely derails the civil claims they sought to enforce. Consequently, legal representatives are under a strict professional duty to counsel their clients against withholding key evidence or facts in the initial stages. A failure to do so can result in severe legal liability and permanent damage to the litigant's reputation before the judicial system. Therefore, utmost transparency must be maintained from the very inception of a legal notice.
          </p>

          <h3 className="text-base font-bold text-[#2D2219] mt-6 mb-3">
            Loss of Clean Hands Standing
          </h3>
          <p className="text-sm text-gray-600 leading-relaxed text-justify mb-6">
            Another fundamental consequence of suppressing material facts is the automatic loss of clean hands standing, which is a core doctrine of equity and justice in Indian jurisprudence. The legal maxim 'he who comes to equity must come with clean hands' is strictly applied by civil courts when evaluating requests for discretionary reliefs, such as temporary injunctions, specific performance of contracts, or declarations. If a litigant is found to have suppressed material facts in the legal notice or the subsequent suit, the court will refuse to grant any equitable relief, regardless of how strong the merit of their underlying claim might otherwise be. The rationale behind this doctrine is that a party who seeks the assistance of the court to enforce a right must act fairly, honestly, and without deceit. If the court discovers that the plaintiff has presented a selective or distorted version of the facts to gain an unfair advantage, it will deny them the benefit of equitable remedies. This clean hands doctrine acts as a shield against the abuse of the judicial system, ensuring that only honest litigants can obtain the court's assistance. Litigants who withhold critical facts, such as reciprocal defaults on their own part or pre-existing agreements, will find themselves shut out from obtaining any form of judicial protection or discretionary relief during the trial. Consequently, establishing credibility starts with the initial notice. Honesty is not merely a moral virtue in these situations, but a foundational legal strategy required to keep the doors of equity open for any prospective plaintiff.
          </p>

          <h3 className="text-base font-bold text-[#2D2219] mt-6 mb-3">
            Dismissal of Suits for Material Non-disclosure
          </h3>
          <p className="text-sm text-gray-600 leading-relaxed text-justify mb-6">
            The ultimate procedural consequence of suppressing material facts is the outright dismissal of the suit on the grounds of material non-disclosure. The Supreme Court of India and various High Courts have consistently held that a petition or suit can be thrown out at any stage of the proceedings, without even entering into the merits of the case, if it is established that the litigant played a fraud on the court by suppressing material facts. Under the Code of Civil Procedure, 1908, courts possess the inherent power to prevent the abuse of the process of the court, and dismissing a suit for non-disclosure is a standard exercise of this authority. A material fact is defined as any fact which, if disclosed, would have influenced the decision of the court or changed the nature of the defense. Non-disclosure of such facts is considered a fraud on the court, as it attempts to obtain a judicial order based on falsehoods. In addition to dismissing the suit, courts frequently impose heavy exemplary costs on the offending party to deter others from engaging in similar vexatious litigation. This means that a litigant who starts their legal journey by suppressing facts in their initial notice faces not only the loss of their claims but also public censure and financial penalties. Consequently, the risk of non-disclosure far outweighs any short-term tactical benefit. Standard legal practice demands that all relevant details, including unfavorable ones, be presented with absolute candor to ensure the viability and success of the lawsuit.
          </p>
        </div>

        {/* Quote Block */}
        <div className="border-l-4 border-red-500 bg-[#FDFBF7] p-6 rounded-r-2xl italic text-gray-700 text-sm leading-relaxed my-2">
          "A litigant who approaches the court with a pair of dirty hands and suppresses material facts is not entitled to be heard on the merits of the case, and their petition must be dismissed at the threshold with exemplary costs."
          <span className="block text-xs font-bold text-gray-900 mt-3 not-italic">, Supreme Court of India, S.P. Chengalvaraya Naidu v. Jagannath</span>
        </div>

        {/* Tip Box */}
        <div className="bg-red-50/50 border border-red-100 rounded-3xl p-6 flex flex-col sm:flex-row gap-5 items-start mt-2">
          <div className="w-12 h-12 rounded-2xl bg-red-100 flex items-center justify-center text-red-600 flex-shrink-0">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"/>
              <line x1="12" y1="9" x2="12" y2="13"/>
              <line x1="12" y1="17" x2="12.01" y2="17"/>
            </svg>
          </div>
          <div>
            <h3 className="text-base font-bold text-red-950 mb-2">
              Warning on Factual Inconsistencies
            </h3>
            <p className="text-sm text-red-900/80 leading-relaxed text-justify">
              Always share complete information with your advocate, including any agreements or payments that might weaken your case. Disclosing weak points early allows the advocate to draft a defense or explain them in the notice, whereas suppressing them will lead to a loss of credibility in court.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
