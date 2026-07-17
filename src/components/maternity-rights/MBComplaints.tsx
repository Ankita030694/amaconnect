import React from "react";

export default function MBComplaints({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 5
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Filing Complaints with the Labor Inspector
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
            If an employer refuses to pay maternity benefits, discharges an employee illegally, or denies nursing breaks, the employee does not need to start slow civil court cases. The Maternity Benefit Act provides a fast, specialized administrative remedy through local Labor Inspectors.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Step-by-Step Filing Procedure under Section 17
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            Under Section 17 of the Act, any woman deprived of maternity benefits or discharged while on leave can file a formal complaint before the local Labor Inspector. The complaint can be submitted in writing or online on the state labor department portal.
          </p>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            The complaint must contain: employment details, basic salary proofs, evidence of the eighty-day work period, medical certificates proving delivery or expected delivery date, and details of the employer's denial or dismissal. Upon receiving the complaint, the inspector must initiate a formal inquiry, summoning the employer to submit their records and passbook details to verify the claims.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Powers of Labor Inspectors to Compel Payment
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            Labor Inspectors hold wide powers under Section 17 to enforce compliance. If the inspector finds that the employer illegally withheld payments or dismissed the employee, they can pass an order directing the employer to pay the complete maternity benefits along with the statutory medical bonus.
          </p>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            If the employer fails to comply with the inspector's order, the inspector can initiate criminal prosecution before a Metropolitan Magistrate or a Judicial Magistrate of the First Class. Under Section 21 of the Act, employers who violate the provisions face mandatory imprisonment of not less than three months, which can extend to one year, along with heavy fines. This criminal liability ensures employers comply with the inspector's orders quickly.
          </p>

          <div className="bg-[#FAF8F5] border border-gray-100 rounded-2xl p-6 mt-4">
            <h4 className="font-bold text-[#2D2219] mb-3">Labor Inspector Powers &amp; Actions</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm text-gray-600">
              <div>
                <span className="text-[#D4AF37] font-bold block mb-1">Administrative Action</span>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Summon employers, inspect attendance and payroll registers, and issue formal recovery directives for unpaid maternity benefits and bonuses.
                </p>
              </div>
              <div>
                <span className="text-[#D4AF37] font-bold block mb-1">Criminal Enforcement</span>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Initiate prosecution before magistrates under Section 21. Violating employers face jail terms between three to twelve months.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
