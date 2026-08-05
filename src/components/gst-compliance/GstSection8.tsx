import React from "react";
import Link from "next/link";

export default function GstSection8({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-8 pt-4">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 8
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Best Practices for Maintaining GST Compliance and Avoiding Litigation
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
            Implementing proactive processes is the most effective way to prevent compliance issues and audit disputes. Robust internal checks and regular reconciliations safeguard business operations from tax litigation.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Periodic Reconciliation and Vendor Due Diligence
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            Businesses must reconcile purchase registers with GSTR-2B monthly to ensure all suppliers have uploaded invoices and deposited tax. Non-filing vendors must be contacted to prevent credit loss. Companies should run compliance checks on vendors before onboarding them, monitoring their filing history. Many firms include tax indemnity clauses in supply contracts to withhold payments if a vendor default triggers credit reversals. Sales registers must also match GSTR-1 and GSTR-3B returns consistently. Doing so protects the company from surprise mismatch audits.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Tech-Enabled Compliance and Legal Consultation
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            With tax authorities using data analytics to flag variances, manual compliance check is insufficient. Firms should adopt automated accounting tools that flag mismatches, duplicates, and blocked credits in real time. Technology must be combined with legal advice. For audits, classification issues, or notices, consulting a tax advocate ensures responses align with judicial precedents. Taxpayers can access expert litigation support on our website by submitting queries on our dedicated ask-me-anything portal. Proactive legal consults protect corporate interests during dispute resolution.
          </p>
        </div>
      </div>
    </section>
  );
}
