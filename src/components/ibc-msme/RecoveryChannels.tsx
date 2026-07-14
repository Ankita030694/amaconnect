import React from "react";

export default function RecoveryChannels({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 1
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Payment Recovery Channels for Indian MSMEs
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
            Micro, Small, and Medium Enterprises (MSMEs) constitute the backbone of the Indian economy, yet they face severe operational challenges due to delayed payments. Buyers often delay payments, stretching the cash flows of vulnerable suppliers. To counter this, the Government of India and the legal system have established specific statutory channels for swift recovery. Understanding these options allows MSMEs to select the most appropriate strategy based on the nature of the transaction, the amount outstanding, and the legal status of the defaulting buyer.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 bg-[#FAF9F5] rounded-3xl border border-gray-100 hover:shadow-md transition-all duration-300">
            <h3 className="text-lg font-bold text-[#2D2219] mb-3">1. MSME Samadhaan (MSEFC)</h3>
            <p className="text-sm text-gray-600 leading-relaxed text-justify">
              The Micro, Small and Medium Enterprises Development (MSMED) Act 2006 establishes the MSEFC. Supplier units can file online references against buyers for delayed payments. The council conducts conciliation and arbitration, aiming to resolve disputes within 90 days. If conciliation fails, the council can arbitrate the dispute or refer it to an external institution.
            </p>
          </div>

          <div className="p-6 bg-[#FAF9F5] rounded-3xl border border-gray-100 hover:shadow-md transition-all duration-300">
            <h3 className="text-lg font-bold text-[#2D2219] mb-3">2. Civil Summary Suits (Order 37)</h3>
            <p className="text-sm text-gray-600 leading-relaxed text-justify">
              Under Order 37 of the Code of Civil Procedure (CPC), MSMEs can file summary suits for recovery of debt arising from written contracts, bills of exchange, or invoices. Summary suits restrict the defendant from defending the suit as a matter of right, unless they obtain leave to defend from the court, speeding up the recovery process.
            </p>
          </div>

          <div className="p-6 bg-[#FAF9F5] rounded-3xl border border-gray-100 hover:shadow-md transition-all duration-300">
            <h3 className="text-lg font-bold text-[#2D2219] mb-3">3. Corporate Insolvency (IBC)</h3>
            <p className="text-sm text-gray-600 leading-relaxed text-justify">
              When the defaulting buyer is a corporate entity (Company or LLP) and the default amount exceeds the statutory minimum threshold, MSMEs can initiate the Corporate Insolvency Resolution Process (CIRP) under Section 9 of the IBC. This is highly effective as it shifts control of the debtor company away from its promoters.
            </p>
          </div>

          <div className="p-6 bg-[#FAF9F5] rounded-3xl border border-gray-100 hover:shadow-md transition-all duration-300">
            <h3 className="text-lg font-bold text-[#2D2219] mb-3">4. Commercial Arbitration</h3>
            <p className="text-sm text-gray-600 leading-relaxed text-justify">
              If the purchase agreement or contract contains an arbitration clause, the parties can refer the dispute to a sole arbitrator. This is a private, binding process governed by the Arbitration and Conciliation Act 1996. It bypasses traditional courts and provides a relatively faster resolution for high-value contractual disputes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
