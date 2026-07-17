import React from "react";

export default function EPFGrievances({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 6
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Filing Grievances on EPFO Portal
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
            EPF transactions can occasionally face administrative delays, claim rejections, or errors in interest deposits. To address these issues without requiring physical visits to government offices, the EPFO operates a dedicated online grievance redressal platform.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Step-by-Step Grievance Registration on EPFiGMS
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            The EPF Internet Grievance Monitoring System (EPFiGMS) is a customized portal (epfigms.gov.in) where users can lodge complaints. Complainants do not need to log in to UAN portals to file a grievance; they select their status (such as EPF member, employer, or pensioner), enter their UAN, and retrieve their profile.
          </p>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            The system sends a One Time Password (OTP) to the registered mobile number to verify the identity. The user then selects the specific member ID linked with the dispute and chooses the grievance category, such as delay in PF withdrawal, non-transfer of PF balance, incorrect interest calculation, or pension payment issues. They can upload supporting PDFs, including passbooks or rejection slips, to justify their claim.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Tracking Complaints and Timelines for Redressal
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            Once submitted, the system generates a unique grievance registration number and sends it to the user. The complaint is directed to the regional PF commissioner who manages the specific office holding the member ID. Complainants can use the registration number on the EPFiGMS portal to track the status of their complaint or send reminders if the resolution is delayed.
          </p>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            The EPFO is mandated to resolve registered grievances within fifteen days from the date of filing. If the regional office fails to resolve the issue or provides an unsatisfactory response, the user can escalate the grievance to higher authorities or file a complaint on the centralized PMOPG portal, ensuring administrative accountability.
          </p>

          <div className="bg-[#FAF8F5] border border-gray-100 rounded-2xl p-6 mt-4">
            <h4 className="font-bold text-[#2D2219] mb-3">EPFO Grievance Action Steps</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm text-gray-600">
              <div>
                <span className="text-[#D4AF37] font-bold block mb-1">Registration Process</span>
                <ul className="space-y-1 list-disc list-inside text-gray-500">
                  <li>Visit the official portal at epfigms.gov.in.</li>
                  <li>Enter UAN and complete mobile OTP verification.</li>
                  <li>Select the member ID and grievance category.</li>
                  <li>Upload PDF proofs of rejections or passbooks.</li>
                </ul>
              </div>
              <div>
                <span className="text-[#D4AF37] font-bold block mb-1">Resolution &amp; Escalation</span>
                <ul className="space-y-1 list-disc list-inside text-gray-500">
                  <li>Unique tracking number issued immediately.</li>
                  <li>Standard resolution timeline is fifteen days.</li>
                  <li>Allows online reminders for delayed complaints.</li>
                  <li>Can be escalated to the central PMOPG portal if unresolved.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
