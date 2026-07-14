import React from "react";

export default function IbcInsolvency({ id }: { id?: string }) {
  const redFlags = [
    {
      title: "Repeated Restructuring Requests",
      description: "Defaulting buyers repeatedly request extensions, post-dated cheques, or changes to payment terms, citing temporary liquidity mismatch."
    },
    {
      title: "Bounced Cheques and Payment Failure",
      description: "Invoices remain unpaid due to cheque bounces (Section 138 of Negotiable Instruments Act) or recurring failures in electronic bank transfers."
    },
    {
      title: "Abrupt Non-Responsiveness",
      description: "The debtor's finance team and promoters cease communication, failing to reply to legal emails, registered letters, and phone calls."
    },
    {
      title: "GST Compliance Failures",
      description: "The buyer fails to file GST returns or upload vendor invoices on the portal, blocking input tax credits for the supplier."
    },
    {
      title: "Credit Rating Downgrades",
      description: "Public credit agencies downgrade the debtor's rating, indicating poor creditworthiness and a high probability of structural default."
    },
    {
      title: "Management Turmoil and Key Resignations",
      description: "Sudden resignations of directors, Chief Financial Officers, or statutory auditors signal internal instability and operational breakdown."
    },
    {
      title: "Pending Litigation by Creditors",
      description: "Multiple court filings, summary suits, or Section 8 demand notices are filed by other vendors or financial institutions against the debtor."
    }
  ];

  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 2
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Insolvency Recovery under the IBC Act
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
            The Insolvency and Bankruptcy Code (IBC) 2016 changed the dynamics between debtors and creditors in India. MSMEs, classified as Operational Creditors, can initiate the Corporate Insolvency Resolution Process (CIRP) against a corporate debtor. Unlike traditional recovery proceedings that drag on for years, the IBC operates on strict timelines, compelling defaulting buyers to settle claims or risk losing control of their corporate entities.
          </p>
        </div>

        <div>
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219] mb-4">
            Red Flags List: Identifying Corporate Defaulters
          </h3>
          <p className="text-sm text-gray-600 leading-relaxed mb-6 text-justify">
            Early detection of a buyer's financial distress can save an MSME from massive losses. Before a corporate buyer collapses into bankruptcy, they exhibit warning signs. Supplier units should monitor the following indicators to decide when to initiate legal action under the IBC.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {redFlags.map((flag, index) => (
              <div 
                key={index} 
                className="p-5 bg-white border border-red-100 rounded-2xl hover:border-red-300 hover:shadow-sm transition-all duration-300 flex gap-4"
              >
                <div className="text-red-500 font-bold text-lg shrink-0 mt-0.5">
                  ⚠️
                </div>
                <div>
                  <h4 className="font-bold text-[#2D2219] text-sm sm:text-base mb-1">
                    {flag.title}
                  </h4>
                  <p className="text-xs text-gray-500 leading-relaxed text-justify">
                    {flag.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
