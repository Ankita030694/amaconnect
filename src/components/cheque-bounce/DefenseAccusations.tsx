import React from "react";

export default function DefenseAccusations({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 7
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Defending against Cheque Bounce Accusations
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
            If you have been accused under Section 138 of the Negotiable Instruments Act, you must respond carefully. The law contains strong statutory presumptions under Section 118 and Section 139 in favor of the payee, assuming the cheque was issued for a valid debt. However, these presumptions are rebuttable. The accused can present a preponderance of probabilities to establish their innocence and secure an acquittal.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg font-bold text-[#2D2219]">
            Common Legal Defenses for the Accused
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#FAF9F5] rounded-3xl p-6 border border-gray-100 flex flex-col gap-2">
              <h4 className="font-bold text-[#2D2219] text-sm">1. Absence of Legally Enforceable Debt</h4>
              <p className="text-xs text-gray-600 leading-relaxed text-justify">
                The cheque must be for a legally enforceable debt. If the cheque was given as a friendly loan without documentation, or as a gift, or for an illegal transaction, the accused can argue that no legal liability exists.
              </p>
            </div>

            <div className="bg-[#FAF9F5] rounded-3xl p-6 border border-gray-100 flex flex-col gap-2">
              <h4 className="font-bold text-[#2D2219] text-sm">2. Security Cheques and Material Alteration</h4>
              <p className="text-xs text-gray-600 leading-relaxed text-justify">
                Cheques given purely as security for a transaction (such as a loan or lease) that was never completed or has been fully settled are not subject to Section 138. Any unauthorized alteration of the cheque date or amount by the payee also invalidates the instrument.
              </p>
            </div>

            <div className="bg-[#FAF9F5] rounded-3xl p-6 border border-gray-100 flex flex-col gap-2">
              <h4 className="font-bold text-[#2D2219] text-sm">3. Time Barred Debt</h4>
              <p className="text-xs text-gray-600 leading-relaxed text-justify">
                Under the Limitation Act, 1963, a debt is recovery-barred after three years. If a cheque is issued to clear a debt that became overdue more than three years prior without any written acknowledgment, it is not a legally enforceable debt under Section 138.
              </p>
            </div>

            <div className="bg-[#FAF9F5] rounded-3xl p-6 border border-gray-100 flex flex-col gap-2">
              <h4 className="font-bold text-[#2D2219] text-sm">4. Notice Not Served or Wrong Address</h4>
              <p className="text-xs text-gray-600 leading-relaxed text-justify">
                If the statutory notice was sent to an incorrect address or was never dispatched, the drawer can argue that they were never given the mandatory fifteen days to clear the debt, rendering the subsequent court complaint invalid.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="text-lg font-bold text-[#2D2219]">
            The Standard of Proof for Rebuttal
          </h3>
          <p className="text-sm text-gray-606 leading-relaxed text-justify">
            Unlike standard criminal cases where guilt must be proven beyond a reasonable doubt, the accused in a Section 138 case only needs to raise a probable defense. By showing that the payee claims are inconsistent or lacking documentation, the accused can shift the burden of proof back to the complainant, who must then prove the existence of the debt beyond a reasonable doubt.
          </p>
        </div>
      </div>
    </section>
  );
}
