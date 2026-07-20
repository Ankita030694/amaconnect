import React from "react";

export default function SRFeeAdmission({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 3
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Resolving School Fee and Admission Disputes
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
            School fee structures and admission criteria are frequent areas of dispute. Private educational institutions often introduce arbitrary fee hikes or reject admission applications violating local rules, requiring legal intervention to protect the interest of parents.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Challenging Arbitrary Fee Hikes in High Courts
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            While private schools hold the autonomy to fix their fee structures, they are strictly prohibited from commercializing education or charging capitation fees. Most Indian states have Fee Regulatory Committees set up under state legislations to audit school accounts and approve fee proposals.
          </p>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            If a school implements a fee hike without securing approval from the Fee Regulatory Committee, parents can file a collective writ petition before the High Court. High Courts have repeatedly ordered private schools to justify their expenses, and struck down arbitrary hikes that were introduced to build surplus reserves rather than meet genuine operational costs, protecting family budgets.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Remedies for Wrongful Denial of Admissions
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            Wrongful denial of admissions occurs when schools refuse to admit a student based on discriminatory criteria, parent income, or parental screening tests, violating state regulations. Under the RTE Act, schools cannot subject children or parents to interviews during the admission process.
          </p>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            If a school denies admission wrongfully, parents can approach the District Education Officer (DEO) or the State Commission for Protection of Child Rights (SCPCR). These authorities hold the power to inspect school admission records, order the school to grant admission to the child, and impose heavy fines on the management for violating the RTE directives, ensuring fair admissions.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <div className="bg-[#FAF8F5] border border-gray-100 rounded-2xl p-6">
              <h4 className="font-bold text-[#2D2219] mb-2">Fee Regulatory Audits</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                State committees review private school accounts. Hikes must align with direct operational expenses and cannot serve commercial profiteering.
              </p>
            </div>
            <div className="bg-[#FAF8F5] border border-gray-100 rounded-2xl p-6">
              <h4 className="font-bold text-[#2D2219] mb-2">SCPCR &amp; DEO Interventions</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Parents can file petitions for denial of EWS seats or arbitrary interviews. Authorities can order admissions and levy substantial fines.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
