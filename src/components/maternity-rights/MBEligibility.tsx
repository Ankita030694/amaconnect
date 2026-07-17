import React from "react";

export default function MBEligibility({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 2
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Eligibility Criteria for Maternity Claims
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
            To legally claim paid maternity benefits from an employer, female employees must satisfy specific statutory requirements. The law sets clear timelines and parameters while also extending protections to diverse pathways of motherhood.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            The 80-Day Working Requirement Rule
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            Under Section 5(2) of the Act, a woman is entitled to maternity benefits only if she has actually worked in the establishment of the employer for a total period of not less than eighty days in the twelve months immediately preceding the expected date of delivery.
          </p>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            The calculation of these eighty days includes: days when the employee was laid off under the Industrial Disputes Act, public holidays with wages, and any days of paid leave. If a woman is on probation or working as a trainee, the employer cannot deny benefits if she has completed the eighty-day work period, ensuring she receives full financial support.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Rights of Commissioning and Adopting Mothers
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            The 2017 amendment modernized the Act by extending maternity leave rights to commissioning and adopting mothers. A commissioning mother is defined as a biological mother who uses her egg to create an embryo implanted in another woman (surrogacy).
          </p>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            Both commissioning mothers and adopting mothers (who legally adopt a child under the age of three months) are entitled to twelve weeks of fully paid maternity leave. The leave period begins from the date the child is handed over to the adopting or commissioning mother, ensuring they have time to bond and care for the newborn.
          </p>

          <div className="bg-[#FAF8F5] border border-gray-100 rounded-2xl p-6 mt-4">
            <h4 className="font-bold text-[#2D2219] mb-3">Eligibility and Leave Periods</h4>
            <ul className="space-y-3 text-xs sm:text-sm text-gray-600">
              <li className="flex items-start gap-2">
                <span className="text-[#D4AF37] font-bold">1. Minimum Service:</span> Must have worked at least eighty days in the preceding twelve months.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#D4AF37] font-bold">2. Biological Mother:</span> Entitled to twenty-six weeks of paid leave.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#D4AF37] font-bold">3. Adopting Mother:</span> Entitled to twelve weeks of paid leave for adopting a child under three months.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#D4AF37] font-bold">4. Commissioning Mother:</span> Entitled to twelve weeks of paid leave from the date of surrogacy handover.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
