import React from "react";

export default function InterimCompensation({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 6
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Claiming Interim Compensation under NI Act
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
            Cheque bounce trials in India historically suffered from prolonged delays, allowing drawers to hold onto disputed funds for years. To address this issue, the parliament amended the Negotiable Instruments Act in 2018, introducing Section 143A. This provision empowers the court to grant immediate financial relief to the complainant during the trial, mitigating cash flow issues and preventing tactical delays by the accused.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[#FAF9F5] rounded-3xl p-6 border border-gray-100">
            <h3 className="text-base sm:text-lg font-bold text-[#2D2219] mb-3">
              Section 143A: Trial Court Relief
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed text-justify mb-4">
              Under Section 143A, the magistrate can direct the accused drawer to pay interim compensation to the complainant. This order can be passed where the accused pleads not guilty to the accusation in a summary trial or summons case.
            </p>
            <ul className="space-y-2 text-xs text-gray-500">
              <li className="flex items-start gap-2">
                <span className="text-[#D4AF37] font-bold">•</span>
                <span>The interim compensation is capped at 20 percent of the total cheque value.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#D4AF37] font-bold">•</span>
                <span>It must be paid within 60 days of the court order, extendable by 30 days.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#D4AF37] font-bold">•</span>
                <span>If the accused is acquitted, the complainant must refund the amount with interest.</span>
              </li>
            </ul>
          </div>

          <div className="bg-[#FAF9F5] rounded-3xl p-6 border border-gray-100">
            <h3 className="text-base sm:text-lg font-bold text-[#2D2219] mb-3">
              Section 148: Appellate Court Deposit
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed text-justify mb-4">
              If the trial court convicts the drawer, they frequently file an appeal in the Sessions Court. Under Section 148, the appellate court can direct the convicted drawer to deposit a minimum of 20 percent of the fine or compensation awarded by the trial court.
            </p>
            <ul className="space-y-2 text-xs text-gray-500">
              <li className="flex items-start gap-2">
                <span className="text-[#D4AF37] font-bold">•</span>
                <span>This deposit is in addition to the interim compensation paid under Section 143A.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#D4AF37] font-bold">•</span>
                <span>The amount can be released to the complainant during the pendency of the appeal.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#D4AF37] font-bold">•</span>
                <span>Helps prevent frivolous appeals meant to delay the payment of the decreed fine.</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="text-lg font-bold text-[#2D2219]">
            Enforcement of Compensation Orders
          </h3>
          <p className="text-sm text-gray-605 leading-relaxed text-justify">
            If the accused drawer fails to pay the interim compensation ordered under Section 143A or Section 148, the court can recover it as if it were a fine under Section 421 of the Code of Criminal Procedure (or corresponding BNSS provisions). This includes issuing a warrant for the attachment and sale of the drawer movable and immovable properties, ensuring that the court orders are effectively enforced without requiring a separate civil execution petition.
          </p>
        </div>
      </div>
    </section>
  );
}
