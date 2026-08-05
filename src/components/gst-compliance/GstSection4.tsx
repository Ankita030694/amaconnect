import React from "react";

export default function GstSection4({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-8 pt-4">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 4
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            GST Audit Framework and Departmental Verification Process
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
            The GST regime uses statutory audits to verify that taxpayers declare their liabilities correctly and claim eligible credits. A departmental audit requires structured preparation and access to comprehensive corporate books.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Statutory Authority for Audits under Section 65 and 66
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            Section 65 of the CGST Act empowers commissioners or authorized officers to conduct departmental audits of registered businesses for any financial year. Taxpayers must receive fifteen working days notice via Form GST ADT-01, and the audit must finish within three months, with potential extensions up to six months. Furthermore, Section 66 provides for special audits directed by assistant commissioners, requiring taxpayers to get their accounts audited by nominated accountants if tax values are suspect or credit claims appear excessive. The report of the special auditor is shared with the taxpayer and department for final assessment actions.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Preparing for Departmental Audit and Document Retention
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            Section 35 mandates keeping correct records of production, supplies, stock, input credit, and output tax. Under Section 36, these records must be retained for seventy-two months from the annual return due date. During audits, officials verify GSTR-9, GSTR-1, GSTR-3B, trial balances, and invoice records. Discrepancies between books and returns will trigger scrutiny. Preparing reconciliation statements between GSTR-1, GSTR-3B, and GSTR-2B beforehand helps explain legitimate variances and resolve queries before the final ADT-02 report is issued. Proactive review reduces risk of penalty.
          </p>
        </div>
      </div>
    </section>
  );
}
