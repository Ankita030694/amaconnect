import React from "react";

export default function MBJobSecurity({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 3
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Job Security and Retrenchment Protections
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
            A primary concern for expectant mothers is the threat of losing their jobs or facing retrenchment while on leave. To address this, the Maternity Benefit Act establishes strict protections to ensure complete job security during and immediately after the pregnancy.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Statutory Ban on Dismissal During Maternity Leave
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            Section 12 of the Maternity Benefit Act places an absolute statutory ban on the dismissal or discharge of a woman during her maternity leave. It states that it is unlawful for an employer to discharge or dismiss a woman, or vary her service conditions to her disadvantage, while she is absent on approved maternity leave.
          </p>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            Additionally, Section 12(2)(a) ensures that if an employer attempts to terminate a woman's employment or deny her benefits during this period, she does not lose her right to receive the complete maternity benefit and medical bonus. Any termination notice served during this period is legally void on its face, protecting the employee's rights.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Right to Return to the Same Designation and Salary
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            When a female employee returns to work after completing her maternity leave, she has a legal right to rejoin in her previous position. The employer cannot demote her, reduce her salary, or strip her of responsibilities under the guise of organizational restructuring.
          </p>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            Courts have ruled that transferring a returning mother to a distant branch office or removing her from key projects constitutes a hostile work condition and a violation of the Act. The employee must be reinstated with the same designation, salary, benefits, and seniority she held before her leave, ensuring her career trajectory is protected.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <div className="bg-[#FAF8F5] border border-gray-100 rounded-2xl p-6">
              <h4 className="font-bold text-[#2D2219] mb-2">Section 12 Dismissal Ban</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Absolute ban on terminations or disadvantageous changes to service terms during maternity leave. Violating notices are legally void.
              </p>
            </div>
            <div className="bg-[#FAF8F5] border border-gray-100 rounded-2xl p-6">
              <h4 className="font-bold text-[#2D2219] mb-2">Right of Reinstatement</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Guarantees return to the same designation, salary, and seniority. Restricts punitive transfers or demotions upon rejoining.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
