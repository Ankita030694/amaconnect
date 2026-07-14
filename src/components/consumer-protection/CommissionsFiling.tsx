import React from "react";

export default function CommissionsFiling({ id }: { id?: string }) {
  const steps = [
    {
      title: "1. Serve a Pre-Filing Legal Notice",
      desc: "Before initiating formal litigation, it is highly recommended to serve a formal legal notice to the opposite party. The notice must specify the defects in the goods or deficiencies in service, and demand a resolution within fifteen days. This establishes your bona fide attempt to resolve the issue amicably.",
    },
    {
      title: "2. Draft the Complaint Petition",
      desc: "The petition is the primary document detailing your grievance. It must begin with the name of the specific Commission, details of both parties, a statement of facts, an explanation of why the commission has territorial and pecuniary jurisdiction, and a confirmation that the dispute is filed within the two-year limitation period.",
    },
    {
      title: "3. Formulate the Relief Claimed",
      desc: "Specify the exact remedies you seek. This can include a full refund of the price paid, replacement of the item, repair of defects, compensation for physical injury or mental agony, and recovery of litigation expenses.",
    },
    {
      title: "4. Admission and Notice Stage",
      desc: "Once filed, the commission schedules an admission hearing. If a prima facie case is established, the commission admits the case and issues a formal notice to the opposite party. The opposite party is given thirty days, extendable by fifteen days, to file their written reply.",
    },
    {
      title: "5. Evidence and Final Arguments",
      desc: "Both parties must file their evidence in the form of written affidavits. Expert opinions may be sought if required. After examining the evidence, both parties present their oral arguments, following which the commission pronounces its final judgment.",
    },
  ];

  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 6
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Filing Complaints in Consumer Commissions
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
            Filing a complaint in a Consumer Commission in India is a structured legal process. Unlike civil courts, consumer forums are designed to be speedier and more accessible, allowing consumers to represent themselves without hiring an advocate. However, strict procedural standards must still be followed during drafting, filing, and hearings.
          </p>
        </div>

        {/* Litigant's Roadmap */}
        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            The Litigant's Roadmap: From Notice to Judgment
          </h3>
          <div className="space-y-4">
            {steps.map((step, idx) => (
              <div 
                key={idx} 
                className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:border-[#D4AF37]/20 transition-all"
              >
                <h4 className="text-sm sm:text-base font-bold text-[#2D2219] mb-2">
                  {step.title}
                </h4>
                <p className="text-xs sm:text-sm text-gray-500 leading-relaxed text-justify">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Key Drafting Elements */}
        <div className="bg-[#FAF8F5] border border-gray-200/60 rounded-3xl p-6 sm:p-8">
          <h3 className="text-base sm:text-lg font-bold text-[#2D2219] mb-4">
            Essential Drafting Clauses for the Petition
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs sm:text-sm text-gray-600">
            <div className="bg-white p-4 rounded-xl border border-gray-100">
              <strong className="text-[#2D2219] block mb-1">Jurisdiction Clause</strong>
              Must state why the commission has territorial jurisdiction (e.g. complainant resides there, or opposite party has office/branch there) and pecuniary jurisdiction (total value of goods and compensation claimed matches the commission's limits).
            </div>
            <div className="bg-white p-4 rounded-xl border border-gray-100">
              <strong className="text-[#2D2219] block mb-1">Limitation Clause</strong>
              Must explicitly declare that the complaint is filed within two years of the cause of action arising, as mandated under Section 69 of the Consumer Protection Act, 2019.
            </div>
            <div className="bg-white p-4 rounded-xl border border-gray-100">
              <strong className="text-[#2D2219] block mb-1">Facts &amp; Incidents</strong>
              Must state chronologically the purchase details, warranty terms, appearance of the defect, and subsequent attempts to get it resolved.
            </div>
            <div className="bg-white p-4 rounded-xl border border-gray-100">
              <strong className="text-[#2D2219] block mb-1">Prayer &amp; Verification</strong>
              The petition must end with a precise list of reliefs sought (the prayer) and a verified declaration signed by the complainant stating that all contents are true.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
