import React from "react";

export default function EPFDeathClaims({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 8
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Claiming EPF Benefits in Case of Death
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
            If an active employee dies during their service period, their accumulated provident fund and pension savings are not lost. The law contains specific provisions to ensure that the designated nominees or legal heirs can claim these funds and insurance benefits quickly.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            The Employees Deposit Linked Insurance (EDLI) Scheme
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            The EDLI scheme, established under the 1952 Act, is a mandatory group life insurance benefit provided to all active EPF members. The employer pays a contribution of 0.5 percent of the employee's basic salary to fund this insurance, while the employee is not required to pay anything.
          </p>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            The insurance coverage amount is calculated based on the employee's salary history. The minimum assurance benefit is set at two lakh fifty thousand rupees, while the maximum insurance benefit is capped at seven lakh rupees. This insurance benefit is paid directly to the nominee or legal heirs if the employee dies while in active employment, providing immediate financial support to the family.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Nominee Claim Process and Form 20 Filing
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            To claim the accumulated EPF balance and insurance benefits, the designated nominee must file Form 20 online or physically. If the employee completed ten years of service, the spouse and children must also file Form 10D to claim their monthly family pension benefits, while Form 5IF is filed to claim the EDLI insurance payout.
          </p>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            The claim application must be accompanied by essential documents, including: the employee's death certificate, identity and address proofs of the nominee, cancelled checks of the nominee's bank account, and a succession certificate if no nominee was registered in EPFO records. The EPFO is required to settle these death claims within thirty days of submission to ensure the deceased member's family receives prompt financial assistance.
          </p>

          <div className="bg-[#FAF8F5] border border-gray-100 rounded-2xl p-6 mt-4">
            <h4 className="font-bold text-[#2D2219] mb-3">Death Claim Forms and Benefits</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs sm:text-sm text-gray-600">
              <div className="space-y-2">
                <span className="text-[#D4AF37] font-bold block">Form 20 (EPF Recovery)</span>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Filed by the nominee or legal heir to claim the accumulated balance in the deceased member's provident fund account.
                </p>
              </div>
              <div className="space-y-2">
                <span className="text-[#D4AF37] font-bold block">Form 5IF (EDLI Payout)</span>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Filed by the nominee to claim the group life insurance benefit. Awards between 2.5 lakh and 7 lakh rupees based on salary.
                </p>
              </div>
              <div className="space-y-2">
                <span className="text-[#D4AF37] font-bold block">Form 10D (Family Pension)</span>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Filed by the spouse and eligible children to secure monthly family pension payments from the pension fund.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
