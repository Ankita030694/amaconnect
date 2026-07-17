import React from "react";

export default function EPFWithdrawal({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 2
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Rules for Online EPF Withdrawal
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
            The process of withdrawing funds from your EPF account has been simplified through the introduction of online services on the EPFO Member Unified Portal. By linking the Universal Account Number (UAN) with Aadhaar, PAN, and verified bank accounts, employees can file withdrawal applications directly, bypassing the need for employer approval in many cases.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Form 19 and 10C for Complete Settlements
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            Complete settlement is permitted when an employee retires after reaching the age of fifty-five years, or if they remain unemployed for a continuous period of two months or more. To claim the complete EPF amount, the employee must file Form 19 online. This form settles the accumulated balance in the provident fund account, including employee and employer contributions along with the yearly interest earned.
          </p>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            Additionally, the employee must file Form 10C to claim their pension fund withdrawal. Form 10C is used when the employee has completed less than ten years of continuous service. If they have completed more than ten years of service, they cannot withdraw the pension fund using Form 10C, but must instead apply for a Scheme Certificate to secure monthly pension payments after retirement.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Form 31 for Partial Advances and Approved Reasons
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            If an employee is still working, they cannot withdraw the complete balance. However, they can apply for partial, non-refundable advances using Form 31 for specific approved reasons listed in the EPF scheme rules.
          </p>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            Approved reasons for partial advances include: medical treatment for self or close family members (no minimum service required), buying land or constructing a house (five years of service required), marriage of self, siblings, or children (seven years of service required), or post-matric education of children (seven years of service required). The employee can also apply for advances during natural calamities or temporary factory closures. The amount that can be withdrawn is capped depending on the reason and the employee's total years of service.
          </p>

          <div className="bg-[#FAF8F5] border border-gray-100 rounded-2xl p-6 mt-4">
            <h4 className="font-bold text-[#2D2219] mb-3">Core EPF Settlement Forms</h4>
            <ul className="space-y-3 text-xs sm:text-sm text-gray-600">
              <li className="flex items-start gap-2">
                <span className="text-[#D4AF37] font-bold">1. Form 19 (PF Settlement):</span> Filed online after retirement or two months of unemployment to withdraw the complete PF balance.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#D4AF37] font-bold">2. Form 10C (Pension Withdrawal):</span> Filed along with Form 19 for service under ten years to settle pension accumulations.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#D4AF37] font-bold">3. Form 31 (Partial Advance):</span> Filed during active service to secure advances for medical treatment, home loans, or marriages.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#D4AF37] font-bold">4. Form 10D (Pension Application):</span> Filed on reaching retirement age after ten years of service to start monthly pension payments.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
