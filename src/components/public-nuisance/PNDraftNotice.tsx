import React from "react";

export default function PNDraftNotice({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 8
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Drafting a Legal Notice for Public Nuisance
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
            Before initiating criminal complaints or civil lawsuits, serving a formal legal notice to the offending party is a recommended first step. It officially puts the offender on notice, documents the violations, and offers a final opportunity to resolve the issue amicably.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Serving Notices to Offending Neighbors or Industries
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            The legal notice must be drafted by an advocate and served via registered post or speed post to secure proof of delivery. The notice should clearly state: the details of the sender, the specific activities causing the nuisance (such as operating commercial generators in a residential zone or discharging smoke), the dates and times of the occurrences, and the adverse health impacts suffered by the residents.
          </p>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            Serving a notice to a commercial establishment or factory should also cite the specific environmental sections violated, such as Section 15 of the Environment Protection Act or local municipal bylaws. This shows the offender that the sender has a clear understanding of their legal rights and is prepared to escalate the dispute.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Setting Deadlines to Stop Offending Activities
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            The legal notice must conclude with a clear demand and a specific deadline for compliance. The standard deadline offered in public nuisance notices is between seven to fifteen days from the date of receipt. 
          </p>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            The notice must explicitly state that if the offending activity is not stopped, or if noise reduction equipment is not installed within this deadline, the sender will proceed with filing a complaint under Section 133 of the CrPC before the SDM, approaching the State Pollution Control Board, or initiating civil suits for injunctions and damages. This deadline creates legal pressure, forcing the offender to take immediate steps to reduce the disturbance and respect community safety.
          </p>

          <div className="bg-[#FAF8F5] border border-gray-100 rounded-2xl p-6 mt-4">
            <h4 className="font-bold text-[#2D2219] mb-3">Notice Drafting Elements</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs sm:text-sm text-gray-600">
              <div>
                <span className="text-[#D4AF37] font-bold block mb-1">Required Details</span>
                <ul className="space-y-1 list-disc list-inside text-gray-500">
                  <li>Names and exact addresses of the affected residents.</li>
                  <li>Descriptions of the noise, smoke, or waste dumped.</li>
                  <li>Dates, times, and decibel estimates of the disturbance.</li>
                  <li>Citations of violated environmental or municipal laws.</li>
                </ul>
              </div>
              <div>
                <span className="text-[#D4AF37] font-bold block mb-1">Directives &amp; Action</span>
                <ul className="space-y-1 list-disc list-inside text-gray-500">
                  <li>Set a clear compliance window (seven to fifteen days).</li>
                  <li>Explicit threat of filing Section 133 CrPC cases.</li>
                  <li>Warning of pollution board closures or civil suits.</li>
                  <li>Proof of delivery retained for subsequent court filings.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
