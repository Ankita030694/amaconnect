import React from "react";

export default function MutualConsentDivorce({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mb-12">
      <div className="flex flex-col gap-6">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 2
          </span>
          <h2 className="text-xl sm:text-2xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Mutual Consent Divorce Procedure
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed text-justify mb-4">
            A mutual consent divorce is widely considered the most civilized and efficient method to dissolve a marriage in India. Under Section 13B of the Hindu Marriage Act, 1955, both partners must agree that they can no longer live together amicably and have decided to separate by mutual consent. The procedure begins with the drafting of a joint petition, which details the terms of separation, division of assets, custody of children, and alimony arrangements. The parties must prove that they have been living separately for a minimum period of one year before presenting the petition. Once the petition is prepared and signed by both parties, it is filed in the appropriate family court. This initial filing is known as the First Motion, where the court examines the petition, records the statements of both spouses, and signs an order. This formal beginning establishes a structured transition, avoiding the long-drawn public disputes common in contested divorce filings.
          </p>
        </div>

        {/* Timeline Section */}
        <div className="bg-[#FAF9F5] border border-gray-100 rounded-3xl p-6 sm:p-8">
          <h3 className="text-base font-bold text-[#2D2219] mb-6 flex items-center gap-2">
            <svg className="w-5 h-5 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Procedural Timeline for Mutual Consent Divorce
          </h3>
          
          <div className="relative border-l border-[#D4AF37]/30 ml-4 pl-6 space-y-8">
            {[
              {
                step: "Step 1: Filing the Joint Petition",
                duration: "Day 1",
                desc: "Spouses file a joint petition in the Family Court along with affidavits, details of separate living, and agreements on custody and maintenance."
              },
              {
                step: "Step 2: Recording Statements (First Motion)",
                duration: "Weeks 1 to 2",
                desc: "The parties appear in court, statements are recorded on oath, and the judge passes an order on the First Motion, initiating the statutory waiting period."
              },
              {
                step: "Step 3: Statutory Cooling-off Period",
                duration: "6 Months (Unless Waived)",
                desc: "A mandatory six-month waiting period is imposed to allow reconciliation. Under the Devendra Singh judgment, this can be waived via an application if certain conditions are met."
              },
              {
                step: "Step 4: Filing the Second Motion",
                duration: "Months 6 to 18",
                desc: "If reconciliation fails, the parties file a joint application for the Second Motion, confirming their intent to dissolve the marriage."
              },
              {
                step: "Step 5: Final Hearing and Decree",
                duration: "Weeks 24 to 28",
                desc: "The court conducts a final hearing, reviews the statements, verifies the voluntariness of consent, and grants the final decree of divorce."
              }
            ].map((item, idx) => (
              <div key={idx} className="relative">
                <span className="absolute -left-[31px] top-1.5 bg-white border-2 border-[#D4AF37] w-4 h-4 rounded-full flex items-center justify-center" />
                <div className="flex flex-col gap-1">
                  <div className="flex flex-wrap items-baseline gap-2">
                    <h4 className="text-xs font-bold text-gray-900">{item.step}</h4>
                    <span className="text-[10px] font-semibold text-[#D4AF37] uppercase tracking-wider bg-[#D4AF37]/10 px-2 py-0.5 rounded-full">
                      {item.duration}
                    </span>
                  </div>
                  <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="border border-gray-100 rounded-3xl p-6 sm:p-8 bg-white">
          <h3 className="text-base font-bold text-[#2D2219] mb-4">
            The Six-Month Cooling-Off Waiver Rule
          </h3>
          <p className="text-sm text-gray-600 leading-relaxed text-justify mb-4">
            Historically, after the First Motion is allowed, the parties were legally required to wait for a statutory period of six months under Section 13B(2) before they could move the Second Motion. This cooling-off period was designed as a safeguard to prevent impulsive decisions and provide a final window for reconciliation. However, in the landmark case of *Amardeep Singh v. Harveen Kaur (2017)*, the Supreme Court of India ruled that this six-month waiting period is directory rather than mandatory. The court held that if the marriage has broken down irretrievably, and the parties have settled all their disputes regarding alimony, child custody, and property division, the court can waive the waiting period. To obtain this waiver, the parties must file an application demonstrating that they have been living separately for much longer than the statutory minimum, that all mediation efforts have failed, and that delaying the decree would only prolong their agony.
          </p>
        </div>

        <div className="border border-gray-100 rounded-3xl p-6 sm:p-8 bg-[#FDFBF7]">
          <h3 className="text-base font-bold text-[#2D2219] mb-4">
            Final Hearing and Decree (Second Motion)
          </h3>
          <p className="text-sm text-gray-600 leading-relaxed text-justify">
            The final stage of the mutual consent procedure involves filing the Second Motion, which must be done after six months and before eighteen months from the date of the First Motion, unless the cooling-off period has been waived by the court. During the final hearing, both spouses must appear in person before the Family Court judge. The court will once again record their statements, verifying that their consent was given voluntarily and was not obtained through force, fraud, or undue influence. The judge will review the settlement agreement to ensure it is fair, especially concerning the welfare of minor children. If the court is satisfied that the marriage is irretrievably broken and that all legal requirements have been met, it will pass a judgment and issue a formal divorce decree. This decree legally dissolves the marriage, allowing both individuals to move forward with their lives independently.
          </p>
        </div>
      </div>
    </section>
  );
}
