import React from "react";

export default function WhatIsNotice({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 1
          </span>
          <h2 className="text-xl sm:text-2xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            What is a Legal Notice and When to Send It
          </h2>
          
          <p className="text-sm text-gray-600 leading-relaxed text-justify mb-6">
            A legal notice is a formal, written communication sent by an aggrieved party, typically through a registered advocate, to an individual or entity, detailing the grievances, facts of the dispute, and the legal recourse that will be pursued if the dispute is not settled. Under Indian law, it serves as an official intimation of a potential lawsuit, laying down the groundwork for future litigation. Serving as a bridge of communication, the notice formally notifies the recipient of the sender's legal rights and gives them a specific timeframe to rectify the issue or respond with their defense. This process is primarily used in civil disputes such as breach of contract, property eviction, family law conflicts, and consumer disputes. The legal notice acts as a warning, signaling that the sender is prepared to approach the courts if amicable resolution fails.
          </p>

          <h3 className="text-base font-bold text-[#2D2219] mt-6 mb-3">
            Purpose of Sending a Legal Notice
          </h3>
          <p className="text-sm text-gray-600 leading-relaxed text-justify mb-6">
            The fundamental purpose of serving a legal notice is to convey the sender's grievances clearly and to encourage an out of court settlement. It saves the courts, the sender, and the recipient valuable time, energy, and financial resources that would otherwise be exhausted in protracted litigation. A well drafted notice presents a chronological account of the facts, the legal provisions violated, and the specific relief sought. By receiving this document, the opposite party is made aware of the exact claims against them, leaving no room for excuses or claims of ignorance. Furthermore, if the dispute eventually goes to trial, the legal notice serves as a critical piece of evidence, demonstrating that the plaintiff acted in good faith and made reasonable efforts to resolve the matter before seeking judicial intervention.
          </p>

          <h3 className="text-base font-bold text-[#2D2219] mt-6 mb-3">
            Mandatory Notices under Section 80 of CPC
          </h3>
          <p className="text-sm text-gray-600 leading-relaxed text-justify mb-6">
            While sending a legal notice is optional in many private civil disputes, it is strictly mandatory under certain statutory provisions in India. The most prominent example is Section 80 of the Code of Civil Procedure, 1908 (CPC), which stipulates that no suit can be instituted against the Government or a public officer in respect of any act purporting to be done by such public officer in their official capacity, until the expiration of two months next after notice in writing has been delivered. This mandatory two month notice period is designed to allow the Government or the concerned public official to review the matter, obtain legal advice, and potentially settle the grievance without dragging the state into unnecessary litigation. Failing to serve this notice under Section 80 before filing a suit, unless special leave is obtained from the court under Section 80(2) for urgent or immediate relief, will lead to the rejection of the plaint.
          </p>
        </div>

        {/* Quote Block */}
        <div className="border-l-4 border-[#D4AF37] bg-[#FDFBF7] p-6 rounded-r-2xl italic text-gray-700 text-sm leading-relaxed my-2">
          "The purpose of Section 80 of the Code of Civil Procedure is to provide the Government or the public officer an opportunity to reconsider the matter and settle the claim, if so advised, without litigation."
          <span className="block text-xs font-bold text-gray-900 mt-3 not-italic">, Supreme Court of India, State of Andhra Pradesh v. M/s. Pioneer Builders</span>
        </div>

        <div className="bg-amber-50/50 border border-amber-100 rounded-3xl p-6 flex flex-col sm:flex-row gap-5 items-start mt-2">
          <div className="w-12 h-12 rounded-2xl bg-amber-100 flex items-center justify-center text-amber-600 flex-shrink-0">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
              <line x1="12" y1="9" x2="12" y2="13"/>
              <line x1="12" y1="17" x2="12.01" y2="17"/>
            </svg>
          </div>
          <div>
            <h3 className="text-base font-bold text-amber-950 mb-2">
              Statutory Time Limits in Mandatory Notices
            </h3>
            <p className="text-sm text-amber-900/80 leading-relaxed text-justify">
              In addition to Section 80 of the CPC, other laws mandate notices. Under Section 138 of the Negotiable Instruments Act, 1881, the legal notice for a bounced cheque must be sent within 30 days of receiving the memo of dishonour from the bank, giving the drawer exactly 15 days to pay. Similarly, Section 106 of the Transfer of Property Act, 1882, requires a 15 day notice for terminating a month-to-month lease, or a 6 month notice for a yearly lease, unless agreed otherwise in writing.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
