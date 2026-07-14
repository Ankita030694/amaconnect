import React from "react";

export default function RedFlags({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 4
          </span>
          <h2 className="text-xl sm:text-2xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Red Flags of Fraudulent Lending Apps
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed text-justify mb-4">
            As the number of digital lending options grows, identifying the boundary between legitimate financial institutions and fraudulent apps becomes critical. Fraudulent lending platforms are designed to exploit regulatory loopholes, utilizing deceptive practices to trap unsuspecting borrowers. These apps often present themselves as quick-fix solutions to financial emergencies, hiding their predatory terms behind sleek interfaces and aggressive marketing. Recognizing the warning signs of these illegitimate platforms before downloading them or sharing personal data can prevent severe financial distress and emotional trauma. By educating yourself on these common red flags, you can safely navigate the digital financial landscape and distinguish between ethical, compliant lenders and illegal extortion networks.
          </p>
        </div>

        <div>
          <h3 className="text-base font-bold text-[#2D2219] mb-3">Absence of NBFC or Bank Partnership</h3>
          <p className="text-sm text-gray-600 leading-relaxed text-justify">
            The most critical indicator of a fraudulent lending app is the complete absence of a verified bank or Non-Banking Financial Company partnership. The Reserve Bank of India mandates that all digital lending platforms must clearly disclose the name of the licensed bank or NBFC they are associated with on their website and within the app store description. Legitimate applications are merely agents or platforms acting on behalf of these regulated financial institutions, which carry out the actual underwriting, disbursal, and collection processes. When an app lacks this association, it is operating outside the law. Fraudulent apps often invent fake NBFC names or display false registration numbers that do not match the RBI list of approved entities. To protect yourself, always cross-reference the stated NBFC partner on the official RBI website. If the app terms of service do not list a registered partner, or if the partner name changes frequently, it is a major warning sign. Dealing with an unregistered entity means you have no regulatory protection, and the platform is likely a front for an illegal operations network.
          </p>
        </div>

        <div>
          <h3 className="text-base font-bold text-[#2D2219] mb-3">Deduction of High Upfront Processing Fees</h3>
          <p className="text-sm text-gray-600 leading-relaxed text-justify">
            Another prominent red flag is the practice of deducting massive upfront processing fees from the approved loan amount before disbursing it to the borrower. For instance, if a borrower is approved for a loan of five thousand rupees, the app might disburse only three thousand rupees, deducting two thousand rupees under the guise of processing fees, platform charges, or security deposits. This upfront deduction effectively raises the cost of borrowing to astronomical levels, far exceeding the legal limits. Furthermore, the borrower is still required to repay the full five thousand rupees plus interest within a short period, typically seven days. In contrast, RBI guidelines stipulate that all fees and charges must be clearly disclosed in the Key Fact Statement before the loan is approved, and they must be reasonable and proportional to the loan amount. Predatory platforms use these hidden upfront costs to maximize their profits quickly, knowing that desperate borrowers are more likely to overlook these discrepancies in their urgent need for funds.
          </p>
        </div>

        {/* SECTION_TYPES: Red Flags List */}
        <div className="bg-[#FAF9F5] border border-gray-100 rounded-3xl p-6 sm:p-8">
          <h3 className="text-base font-bold text-[#2D2219] mb-6">Key Red Flags to Look Out For</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Ultra Short Tenure (7 to 15 Days)",
                desc: "Legitimate personal loans have minimum repayment periods of 60 to 90 days. Short tenures are designed to trap you in immediate default."
              },
              {
                title: "Excessive Device Permissions",
                desc: "Demanding access to contacts, photos, and files when the app only needs basic identity details is a clear sign of impending blackmail."
              },
              {
                title: "Lack of Physical Address or Website",
                desc: "No physical office address, no customer care number, and only a generic email address (like Gmail or Yahoo) listed for support."
              },
              {
                title: "No Credit Check or Verification",
                desc: "Approving loans instantly without evaluating credit history, income, or employment status, showing they rely on extortion rather than creditworthiness."
              },
              {
                title: "Exorbitant Interest Rates",
                desc: "Charging interest rates that compute to 1% or 2% daily, resulting in annual rates exceeding 300%, which is illegal and exploitative."
              },
              {
                title: "Vague Partner Disclosures",
                desc: "Displaying fictitious NBFC names or hiding the identity of their financial backer in the app store description and user agreement."
              }
            ].map((flag, idx) => (
              <div key={idx} className="flex gap-3 items-start bg-white p-4 rounded-2xl border border-gray-100 shadow-sm">
                <svg className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                <div>
                  <h4 className="text-xs font-bold text-gray-900 mb-1">{flag.title}</h4>
                  <p className="text-[11px] text-gray-500 leading-relaxed">{flag.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
