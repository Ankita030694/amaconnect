import React from "react";
import Link from "next/link";

export default function ComplaintProcess({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 3
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Step-by-Step RERA Online Complaint Process
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
            Navigating the online complaint system of your state RERA portal requires meticulous preparation and adherence to procedural guidelines. The RERA framework splits complaints into two distinct streams based on the relief you seek.
          </p>
        </div>

        {/* Step Checklist Section Type */}
        <div className="bg-[#FDFBF7] border border-[#E9E0D2] rounded-3xl p-6 sm:p-8 my-2 shadow-sm">
          <p className="text-xs text-[#D4AF37] font-bold uppercase tracking-wider mb-3">
            RERA Online Filing
          </p>
          <h3 className="text-lg font-bold text-[#2D2219] mb-4">
            Step-by-Step Checklist for Filing a RERA Complaint
          </h3>
          <div className="space-y-4">
            <div className="flex gap-4">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#D4AF37] text-white flex items-center justify-center text-xs font-bold">1</span>
              <div>
                <p className="text-sm font-bold text-[#2D2219]">Portal Registration</p>
                <p className="text-xs text-gray-600">Register as a complainant on the official state RERA portal using your email ID and mobile number.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#D4AF37] text-white flex items-center justify-center text-xs font-bold">2</span>
              <div>
                <p className="text-sm font-bold text-[#2D2219]">Form Selection</p>
                <p className="text-xs text-gray-600">Select Form M if you are seeking project completion or standard relief, or Form N if you want financial compensation.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#D4AF37] text-white flex items-center justify-center text-xs font-bold">3</span>
              <div>
                <p className="text-sm font-bold text-[#2D2219]">Document Upload</p>
                <p className="text-xs text-gray-600">Attach the registered Agreement for Sale, payment receipts, and timeline correspondence as PDF documents.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#D4AF37] text-white flex items-center justify-center text-xs font-bold">4</span>
              <div>
                <p className="text-sm font-bold text-[#2D2219]">Fee Payment</p>
                <p className="text-xs text-gray-600">Pay the nominal filing fee online, which ranges from five hundred to one thousand rupees depending on your state.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#D4AF37] text-white flex items-center justify-center text-xs font-bold">5</span>
              <div>
                <p className="text-sm font-bold text-[#2D2219]">Notice Service</p>
                <p className="text-xs text-gray-600">Serve a copy of the registered complaint to the developer via speed post or email, and upload proof of service to the portal.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-10">
          {/* H3: Filing Form M before RERA Authority */}
          <div className="flex flex-col gap-3">
            <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
              Filing Form M before RERA Authority
            </h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
              When a homebuyer encounters a direct violation of RERA regulations or the terms of the signed contract, such as project delays, unapproved layout changes, or construction defects, they can file a complaint under Form M. This form is the standard template used for seeking directions, enforcement of developer commitments, or non-monetary reliefs from the RERA authority. To begin the online process, the buyer must log into the state RERA portal, select the complaint option, and fill out Form M with details about the project, the developer, and the specific violations. The user must attach key evidence, including the registered Agreement for Sale, bank transaction statements, and copies of emails exchanged with the builder regarding timelines. A small processing fee, generally between five hundred and one thousand rupees, must be paid through the online payment gateway. After submission, a unique case index number is generated. A physical copy of the petition must then be sent to the developer as notice. The RERA bench will subsequently set dates for online or physical hearings, allowing both sides to present their case. Homebuyers can download standard petition templates from the{" "}
              <Link href="/drafts" className="text-[#D4AF37] font-semibold hover:underline">
                drafts page
              </Link>{" "}
              on AMAConnect to structure their claims correctly.
            </p>
          </div>

          {/* H3: Filing Form N before Adjudicating Officer */}
          <div className="flex flex-col gap-3">
            <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
              Filing Form N before Adjudicating Officer
            </h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
              For homebuyers seeking direct financial compensation, interest, or damages due to builder default or fraudulent advertisements, the petition must be filed under Form N. While Form M is submitted to the RERA authority for regulatory enforcement, Form N is filed before the Adjudicating Officer, who is typically a retired district judge authorized to determine the exact quantum of financial compensation. This procedure is judicial, requiring strong proof of actual financial damage suffered by the buyer. In Form N, the buyer must specify the reasons for claiming damages, such as rental expenses incurred because of delay, interest paid on home loans, or emotional distress. The complainant must present solid documents, including rent receipts, tenancy agreements, loan interest statements, and emails showing the builder's failure to deliver. Like Form M, Form N is filled out online, and a copy must be sent to the developer. The Adjudicating Officer then conducts a formal inquiry, evaluates the evidence, and decides on a fair compensation amount. Since this process involves detailed legal arguments, buyers can connect with experienced property lawyers through the{" "}
              <Link href="/ask-me-anything" className="text-[#D4AF37] font-semibold hover:underline">
                ask me anything
              </Link>{" "}
              portal on AMAConnect for professional advice.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
