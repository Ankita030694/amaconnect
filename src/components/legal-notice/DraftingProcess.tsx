import React from "react";
import Link from "next/link";

export default function DraftingProcess({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 3
          </span>
          <h2 className="text-xl sm:text-2xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Step-by-Step Drafting Process
          </h2>
          
          <p className="text-sm text-gray-600 leading-relaxed text-justify mb-6">
            The process of drafting and dispatching a legal notice must be carried out with meticulous care, as any error can compromise the legal validity of the notice and negatively impact future litigation. The process starts with a consultation with an advocate where all relevant facts and files are reviewed. It is essential to ensure that the facts stated in the notice are fully accurate and aligned with documents, since the notice will be compared with the plaint or written statement during trial. Any inconsistency between the legal notice and the subsequently filed suit can damage the credibility of your case.
          </p>

          <h3 className="text-base font-bold text-[#2D2219] mt-6 mb-3">
            Framing the Title and Advocate Header
          </h3>
          <p className="text-sm text-gray-600 leading-relaxed text-justify mb-6">
            Every professional legal notice begins with the advocate letterhead, displaying the advocate name, address, enrollment number, and contact details. This header immediately conveys to the recipient that the matter has escalated and is being handled by a qualified legal professional. Below the advocate header, the notice contains the reference number and date of drafting, which are essential for record-keeping and referencing in subsequent communications. The title of the notice is clearly framed in bold, uppercase letters, specifying the nature of the notice, such as, LEGAL NOTICE UNDER SECTION 138 OF THE NEGOTIABLE INSTRUMENTS ACT, 1881, or, LEGAL NOTICE FOR EVICTION UNDER SECTION 106 OF THE TRANSFER OF PROPERTY ACT, 1882. This helps the recipient immediately recognize the legal authority under which the notice is served.
          </p>

          <h3 className="text-base font-bold text-[#2D2219] mt-6 mb-3">
            Detailing the Grievance and Demands
          </h3>
          <p className="text-sm text-gray-600 leading-relaxed text-justify mb-6">
            The drafting advocate details the client grievances by narrating the history of the relationship and the specific events that led to the dispute. This is followed by a clear statement of the legal provisions violated and the direct impact of the breach on the client. The notice must conclude with a precise demand for relief, giving the recipient a specific deadline, such as 15 days or 30 days, to comply with the terms. The notice is signed by the advocate and, in some cases, co-signed by the client to confirm authorization. The co-signature of the client acts as an extra layer of validation, indicating that the client has verified and approved the facts stated in the notice.
          </p>

          <h3 className="text-base font-bold text-[#2D2219] mt-6 mb-3">
            Dispatching via Registered Post AD
          </h3>
          <p className="text-sm text-gray-600 leading-relaxed text-justify mb-6">
            Once signed, the physical copy of the notice is dispatched through Registered Post with Acknowledgment Due (AD) or Speed Post. Under Section 27 of the General Clauses Act, 1897, service of notice is presumed to be completed if it is sent to the correct address via registered post. The Acknowledgment Due card, signed by the recipient upon delivery, acts as physical proof of receipt. In modern legal practice, advocates also send electronic copies via email or WhatsApp to ensure immediate delivery and prevent the recipient from avoiding service. Both the physical postal receipts and electronic delivery reports must be carefully preserved, as they are crucial for proving service in court.
          </p>
        </div>

        {/* Step Checklist (Section Type 1) */}
        <div>
          <h3 className="text-lg font-bold text-[#2D2219] mb-4">Drafting and Dispatch Checklist</h3>
          <div className="space-y-4">
            <div className="bg-[#FAF9F5] border border-gray-100 rounded-2xl p-5 flex items-start gap-4 shadow-sm">
              <input type="checkbox" readOnly checked className="mt-1 accent-[#D4AF37] rounded" />
              <div>
                <h4 className="text-sm font-bold text-gray-900 mb-1">Step 1: Document Retrieval and Chronology</h4>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Gather all primary documents including contracts, bills, email threads, bank transactions, and whatsapp conversations. Make a precise date-wise timeline of all events to identify the exact date of breach and ensure factual accuracy.
                </p>
              </div>
            </div>

            <div className="bg-[#FAF9F5] border border-gray-100 rounded-2xl p-5 flex items-start gap-4 shadow-sm">
              <input type="checkbox" readOnly checked className="mt-1 accent-[#D4AF37] rounded" />
              <div>
                <h4 className="text-sm font-bold text-gray-900 mb-1">Step 2: Draft the Advocate Header and Party Details</h4>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Enter the advocate's enrollment number, office address, and contact details at the top. List the correct full name, parentage, and current residential or office address of the recipient, ensuring zero spelling or address errors.
                </p>
              </div>
            </div>

            <div className="bg-[#FAF9F5] border border-gray-100 rounded-2xl p-5 flex items-start gap-4 shadow-sm">
              <input type="checkbox" readOnly checked className="mt-1 accent-[#D4AF37] rounded" />
              <div>
                <h4 className="text-sm font-bold text-gray-900 mb-1">Step 3: State the Client Instructions and Facts</h4>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Write the facts in numbered paragraphs, starting with: "Under instructions from my client, I hereby serve you with this legal notice...". Detail the business relationship, the obligations of each party, and how the recipient breached them.
                </p>
              </div>
            </div>

            <div className="bg-[#FAF9F5] border border-gray-100 rounded-2xl p-5 flex items-start gap-4 shadow-sm">
              <input type="checkbox" readOnly checked className="mt-1 accent-[#D4AF37] rounded" />
              <div>
                <h4 className="text-sm font-bold text-gray-900 mb-1">Step 4: Specify the Demand of Relief and Deadline</h4>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Explicitly specify the actions required from the recipient, such as, pay INR 5,00,000 with 18 percent interest, or, hand over possession. Provide a clear compliance window (typically 15 or 30 days) from the date of receipt of the notice.
                </p>
              </div>
            </div>

            <div className="bg-[#FAF9F5] border border-gray-100 rounded-2xl p-5 flex items-start gap-4 shadow-sm">
              <input type="checkbox" readOnly checked className="mt-1 accent-[#D4AF37] rounded" />
              <div>
                <h4 className="text-sm font-bold text-gray-900 mb-1">Step 5: Dispatch and Track Proof of Delivery</h4>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Print on the advocate's letterhead, sign and stamp the notice, and send it through Registered Post AD or Speed Post. Track the consignment online, print the tracking report showing "Item Delivered", and attach it to the postal receipts.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Tip Box */}
        <div className="bg-blue-50/50 border border-blue-100 rounded-3xl p-6 flex flex-col sm:flex-row gap-5 items-start mt-2">
          <div className="w-12 h-12 rounded-2xl bg-blue-100 flex items-center justify-center text-blue-600 flex-shrink-0">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="12 2 2 22 22 22"/>
              <line x1="12" y1="9" x2="12" y2="13"/>
              <line x1="12" y1="17" x2="12.01" y2="17"/>
            </svg>
          </div>
          <div>
            <h3 className="text-base font-bold text-blue-950 mb-2">
              Advocate Tip: Drafting Template Library
            </h3>
            <p className="text-sm text-blue-900/80 leading-relaxed text-justify">
              To browse standard pre-drafted legal notice formats, check our curated registry at <Link href="/drafts" className="underline font-bold text-blue-950">Drafts Catalog</Link>, which contains verified templates for contract breach, cheque bounce, and tenant eviction, designed by legal experts.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
