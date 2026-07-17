import React from "react";
import Link from "next/link";

export default function FirstAppeals({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 7
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            First Appeals Process under Section 19
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
            When a Public Information Officer fails to respond or provides unsatisfactory replies, the Act provides a structured internal remedy. Filing a first appeal before the designated senior officer is a mandatory step before seeking intervention from the Information Commission.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Filing an Appeal for No Response or Incomplete Replies
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            If the Public Information Officer fails to provide a response within the statutory thirty-day window, or if you are dissatisfied with the response because it is incomplete, misleading, or incorrect, you have the legal right to file a first appeal. Under Section 19(1) of the Right to Information Act, 2005, the first appeal must be filed within thirty days from the expiry of the thirty-day response period (in case of no response) or within thirty days from the date of receiving the PIO decision. The law also permits the appellate authority to entertain appeals after the thirty-day limit if they are satisfied that the appellant had sufficient cause for the delay. The first appeal is a critical step because it provides an internal administrative review of the PIO decision before moving to external judicial commissions. There is no fee required for filing a first appeal with central government departments, though some state rules may prescribe a nominal fee. The appeal is submitted to an officer who is senior in rank to the PIO within the same public authority, known as the First Appellate Authority (FAA). Upon receiving the appeal, the FAA is legally mandated to dispose of it within thirty days of receipt, although this can be extended to a maximum of forty-five days for reasons recorded in writing. If you face obstacles during this phase, you can consult with experienced legal practitioners through our{" "}
            <Link href="/ask-me-anything" className="text-[#D4AF37] hover:underline font-semibold">Ask Me Anything</Link>{" "}
            portal or reach out directly via the{" "}
            <Link href="/contact" className="text-[#D4AF37] hover:underline font-semibold">Contact</Link>{" "}
            page for administrative drafting support.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Drafting Appeal to the First Appellate Authority
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            Drafting a first appeal requires a structured format that highlights the facts of your original application and the specific failures of the Public Information Officer. The appeal should be addressed directly to the designated First Appellate Authority of the department. It must include your personal details, the registration number and date of the original RTI application, and the details of the PIO who handled the request. If the PIO issued a reply, you must attach a copy of the decision letter and explain point-by-point why the information provided is incorrect, incomplete, or how the exemptions were misapplied. If the PIO failed to respond entirely, you should state that the appeal is filed against a deemed refusal. The draft must clearly state the reliefs sought, which typically involves directing the PIO to provide the requested records free of cost immediately. It is essential to sign and date the appeal, attach copies of the original application, the payment proof of the initial application fee, and any postal tracking receipts showing delivery of the original request. Sending the appeal via Speed Post or Registered Post with an Acknowledgment Card is highly recommended to secure proof of delivery. A well-drafted appeal shows the FAA that you are aware of your statutory rights and the timelines, which increases the likelihood that they will issue a favorable order instructing the PIO to release the records without further delay.
          </p>
        </div>
      </div>
    </section>
  );
}
