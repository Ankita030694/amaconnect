import React from "react";

export default function MBDiscrimination({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 4
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Pregnancy Discrimination at the Workplace
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
            Despite statutory protections, many employers try to bypass their legal duties by creating difficult conditions for pregnant employees. Pregnancy discrimination is a violation of fundamental labor laws and equality rights, and employees should actively document and challenge it.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Hostile Work Conditions and Forced Resignations
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            A common tactic used by biased employers is constructive dismissal. Instead of firing a pregnant employee directly, which is illegal, the management might create hostile work conditions to force a resignation.
          </p>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            This can include: assigning physically demanding tasks, increasing working hours unnecessarily, denying medical appointments leave, or subjecting the employee to constant micro-aggressions. If an employee is forced to resign under such pressure, it is treated as a forced resignation. The employee can challenge this constructive dismissal in labor courts, submitting email records and medical advisories to prove the coercion, securing her rights.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Denying Deserved Promotions and Performance Appraisals
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            Another form of discrimination occurs when employers deny deserved promotions or lower performance ratings solely because an employee is pregnant or returning from leave. Employers cannot use the period of maternity absence to lower an employee's ratings or exclude her from career advancements.
          </p>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            If an employee has met her targets for the active working months, her performance rating must be assessed fairly, adjusting for the leave period. Denying promotions or lowering ratings during this phase violates equality rules. The employee should file internal grievances with Human Resources, backed by target achievements, and escalate the issue to labor authorities if unresolved.
          </p>

          <div className="bg-[#FAF8F5] border border-gray-100 rounded-2xl p-6 mt-4">
            <h4 className="font-bold text-[#2D2219] mb-3">Documenting Discrimination</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs sm:text-sm text-gray-600">
              <div>
                <span className="text-[#D4AF37] font-bold block mb-1">Evidence Gathering</span>
                <ul className="space-y-1 list-disc list-inside text-gray-500">
                  <li>Save email communications regarding maternity requests.</li>
                  <li>Log details of verbal remarks, dates, and witnesses.</li>
                  <li>Obtain medical reports recommending light duties.</li>
                  <li>Save performance review history and target reports.</li>
                </ul>
              </div>
              <div>
                <span className="text-[#D4AF37] font-bold block mb-1">Protections &amp; Action</span>
                <ul className="space-y-1 list-disc list-inside text-gray-500">
                  <li>File a formal internal grievance with HR.</li>
                  <li>Reject requests to resign voluntarily.</li>
                  <li>File complaints with labor inspectors if ignored.</li>
                  <li>Retain counsel for constructive dismissal claims.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
