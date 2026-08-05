import React from "react";

export default function GstSection5({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-8 pt-4">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 5
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Responding to GST Show Cause Notices (SCNs) for Tax Mismatches
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
            Taxpayers regularly receive formal notices from authorities regarding return discrepancies. Submitting a prompt, legally sound reply is essential to prevent unilateral tax assessments and collection proceedings.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Understanding Mismatch Notices under GSTR-2B and GSTR-3B
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            Discrepancies between tax declared in GSTR-1 and paid in GSTR-3B, or credit claimed in GSTR-3B and available in GSTR-2B, trigger automated notices. These include Form DRC-01B for liability variances and Form DRC-01C for credit mismatches. Under Rule 88C and 88D, taxpayers must pay the tax or explain mismatches within seven days. Ignoring these notices leads to return filing blocks and formal Show Cause Notices (SCNs) under Section 73 or 74, demanding tax recovery with interest and penalty. Taxpayers must closely monitor their online portal dashboard for these time-sensitive communications.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Drafting an Effective Reply to Show Cause Notices
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            Taxpayers must review demand grounds and draft written replies in Form DRC-06 within thirty days, attaching reconciliation statements and invoice copies. If the notice alleges fraud or suppression under Section 74, the taxpayer must dispute this charge by proving a bona fide difference in legal interpretation, which blocks the extended limitation period. Finally, taxpayers must explicitly request a personal hearing under Section 75(4) to ensure they are heard before any adverse final order is passed. This guarantees their constitutional right to natural justice during adjudication.
          </p>
        </div>
      </div>
    </section>
  );
}
