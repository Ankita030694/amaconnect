import React from "react";

export default function SecondAppeals({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 8
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Second Appeals before Information Commissions
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
            The second appeal represents the final quasi-judicial forum for resolving information disputes. Filed before the State or Central Information Commission, this step involves formal hearings where the actions of public officers are evaluated under judicial scrutiny.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Appealing to the State or Central Information Commission
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            If the First Appellate Authority fails to decide your appeal within the maximum forty-five day limit, or if they issue an order that upholds the PIO refusal and you remain dissatisfied, your final administrative recourse is to file a second appeal. Under Section 19(3) of the Right to Information Act, 2005, a second appeal must be filed before the relevant Information Commission within ninety days from the date on which the First Appellate Authority decision should have been made or was actually received. Depending on the nature of the public authority, the appeal is filed either before the Central Information Commission (CIC) in New Delhi for central government bodies or before the respective State Information Commission (SIC) for state departments. Unlike the first appeal, which is internal, the Information Commission is an independent, quasi-judicial external body with wide powers, including the authority to summon officials, inspect confidential records, and impose financial penalties. There is no standard fee for filing a second appeal with the central commission, but state commissions may have specific rules regarding formatting and accompanying documents. The second appeal must be filed with a complete set of documents, including copies of the original RTI application, the PIO reply, the first appeal, the FAA decision order, and a detailed index of evidence. The commission registry will review the appeal and assign a diary number, after which it enters the queue for a formal hearing.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Attending Commission Hearings and Presenting Evidence
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            The culmination of the second appeal is the formal hearing conducted by the Information Commissioner assigned to your case. The commission will issue notice of hearing to both the appellant and the Public Information Officer, specifying the date, time, and mode of the hearing, which can be conducted in person, via video conferencing, or over audio calls. During the hearing, the appellant must present their arguments clearly and show how the PIO failed to comply with the statutory provisions of the Act. The burden of proving that the denial of information was justified remains entirely on the Public Information Officer. The appellant should present documented evidence, such as postal delivery receipts, tracking records, and copies of previous orders, to counter any false claims made by the department. If the commission is satisfied that the PIO acted with malafide intent or delayed the response without reasonable cause, it will issue a binding order directing the immediate release of the information free of cost and may initiate penalty proceedings under Section 20 of the Act. Attending these hearings requires preparation and a clear understanding of the legal exceptions. While the appellant can represent themselves, they can also authorize a legal representative or advocate to present the case on their behalf. The orders passed by the Information Commission are final and binding on both parties, and any non-compliance by the department can be challenged through a writ petition in the High Court.
          </p>
        </div>
      </div>
    </section>
  );
}
