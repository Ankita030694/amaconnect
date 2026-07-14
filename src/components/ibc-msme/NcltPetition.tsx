import React from "react";

export default function NcltPetition({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 4
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Filing a Section 9 Petition in NCLT
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
            If the corporate debtor fails to pay the operational debt or raise a dispute within ten days of receiving the Section 8 demand notice, the operational creditor can file a petition before the National Company Law Tribunal (NCLT). This petition is filed under Section 9 of the IBC, utilizing Form 5. The primary goal is to initiate the Corporate Insolvency Resolution Process (CIRP) against the defaulting buyer, which places the debtor company under an independent administrator.
          </p>
        </div>

        <div className="bg-[#FAF9F5] p-6 sm:p-8 rounded-3xl border border-gray-100">
          <h3 className="text-lg font-bold text-[#2D2219] mb-4">
            Key Attachments for Section 9 Petition (Form 5)
          </h3>
          <p className="text-sm text-gray-600 mb-6 text-justify">
            A Section 9 petition must contain specific documentary evidence. The NCLT scrutinizes the application to verify that the debt is operational, undisputed, and unpaid. Ensure you attach the following:
          </p>

          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <span className="text-[#D4AF37] text-sm mt-0.5 font-bold">✓</span>
              <div>
                <strong className="text-sm sm:text-base text-[#2D2219]">Copy of Section 8 Notice and Delivery Proof:</strong>
                <p className="text-xs sm:text-sm text-gray-500 leading-relaxed mt-0.5 text-justify">
                  The exact Form 3 or Form 4 notice served, along with postal tracking receipts, delivery reports, or signed acknowledgment cards.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#D4AF37] text-sm mt-0.5 font-bold">✓</span>
              <div>
                <strong className="text-sm sm:text-base text-[#2D2219]">Affidavit of No Dispute:</strong>
                <p className="text-xs sm:text-sm text-gray-500 leading-relaxed mt-0.5 text-justify">
                  A solemn affidavit sworn by the operational creditor stating that no notice of dispute has been received from the corporate debtor in response to the Section 8 demand notice.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#D4AF37] text-sm mt-0.5 font-bold">✓</span>
              <div>
                <strong className="text-sm sm:text-base text-[#2D2219]">Bank Certificate:</strong>
                <p className="text-xs sm:text-sm text-gray-500 leading-relaxed mt-0.5 text-justify">
                  A certificate from the financial institution maintaining the operational creditor's accounts, confirming that no payment of the demanded debt has been received from the corporate debtor.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#D4AF37] text-sm mt-0.5 font-bold">✓</span>
              <div>
                <strong className="text-sm sm:text-base text-[#2D2219]">Contracts and Invoices:</strong>
                <p className="text-xs sm:text-sm text-gray-500 leading-relaxed mt-0.5 text-justify">
                  The original purchase agreement, purchase orders, supply contracts, tax invoices, and proof of dispatch or delivery of goods or services.
                </p>
              </div>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219] mb-4">
            The NCLT Admission Process
          </h3>
          <p className="text-sm text-gray-600 leading-relaxed text-justify mb-4">
            Once filed, the NCLT registers the case and schedules a hearing for admission. The tribunal checks the completeness of the application within fourteen days. During the hearing, the debtor has an opportunity to show if the debt is disputed or paid. If the NCLT is satisfied that the petition is complete, the debt exists, and no pre-existing dispute is evident, it admits the petition.
          </p>
          <p className="text-sm text-gray-600 leading-relaxed text-justify">
            Upon admission, the NCLT appoints an Interim Resolution Professional (IRP) and declares a moratorium under Section 14 of the IBC, suspending all pending or fresh lawsuits, executions, and recovery actions against the corporate debtor. This freezing of liabilities allows the IRP to assess the debtor's financial state and run a restructuring exercise.
          </p>
        </div>
      </div>
    </section>
  );
}
