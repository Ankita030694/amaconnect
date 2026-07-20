import React from "react";

export default function FilingUIDAIGrievances({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 5
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Filing Grievances with UIDAI
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
            Delayed updates and incorrect registrations must be officially reported to the UIDAI. Registering online complaints and escalating them to regional officers ensures administrative follow-up and resolution.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Step-by-Step Complaint Registration on UIDAI Portal
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            When cardholders face issues such as unauthorized biometric updates, delayed document processing, or identity verification failures, filing a formal complaint through the UIDAI grievance redressal system is the primary step for resolution. The UIDAI provides a structured online portal where residents can log their grievances and track their status in real time. The process begins by visiting the official UIDAI resident portal and navigating to the File a Complaint section. You must fill out a comprehensive online form, providing your personal details, Aadhaar number, contact information, and the category of your complaint, such as enrollment agency issues, update delays, or authentication failures. The form allows you to select the specific sub-category of the dispute and write a detailed description of the incident, including the Enrollment Slip Number (EID) or Update Request Number (URN) if applicable. You must upload supporting PDF documents, such as copies of your update rejection slips, bank rejection letters, or identity records. Upon submission, the portal generates a unique fourteen digit Complaint Case Number, which is sent to your registered mobile number and email. Claimants can use this case number to track the resolution progress on the portal. The UIDAI has committed to resolving standard database and enrollment complaints within ten to fifteen working days, and keeping a copy of the registered complaint is essential for any future legal escalations, securing clear records.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Escalating Grievances to Regional Offices
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            If your online complaint on the UIDAI portal remains unresolved after the standard timeframe, or if the resolution provided is unsatisfactory, you should escalate the grievance to the respective UIDAI Regional Office. The UIDAI operates several regional offices across India, each having jurisdiction over specific states. You can find the contact details, email addresses, and physical locations of these regional offices on the official UIDAI website. Escalation can be done by sending a detailed email to the regional office public grievance cell, citing your original fourteen digit Complaint Case Number, Aadhaar details, and the history of your previous correspondence. For complex disputes such as chronic biometric mismatches, update limit exhaustions, or suspected identity theft, visiting the regional office in person is highly recommended. Each regional office has a dedicated Grievance Redressal Officer who conducts physical hearings and has the administrative authority to override database locks, approve update exceptions, and initiate investigations against fraudulent operators. You must carry all your original identity documents, enrollment slips, and proof of address for the physical verification. If the regional office still fails to provide a resolution, residents can escalate the matter further by filing an appeal with the UIDAI Headquarters in New Delhi or approaching the nodal department of the Ministry of Electronics and Information Technology (MeitY), ensuring that administrative avenues are fully exhausted before court filing.
          </p>
        </div>
      </div>
    </section>
  );
}
