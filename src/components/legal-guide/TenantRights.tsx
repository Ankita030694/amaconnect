import React from "react";

export default function TenantRights({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 2
          </span>
          <h2 className="text-xl sm:text-2xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Tenant Rights &amp; Rent Laws in India
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed text-justify mb-4">
            Rental housing is a vital sector in India, yet disputes between landlords and tenants are highly frequent. Understanding the fundamentals of rent control acts and the Model Tenancy Act is critical to avoiding wrongful evictions, unfair rent hikes, and deposit forfeiture.
          </p>
        </div>

        {/* Core Rights Table/Checklist */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[#FAF9F5] border border-gray-100 rounded-3xl p-6 shadow-sm">
            <div className="w-8 h-8 rounded-full bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] font-bold text-sm mb-4">
              1
            </div>
            <h3 className="text-sm font-bold text-[#2D2219] mb-2">Written Tenancy Agreement</h3>
            <p className="text-xs text-gray-500 leading-relaxed">
              Always insist on a written Rent Agreement registered under the Rent Control Act or State Tenancy Laws. A verbal agreement has limited evidentiary value in court. The agreement must clearly specify rent amount, security deposit, duration, and notice period.
            </p>
          </div>

          <div className="bg-[#FAF9F5] border border-gray-100 rounded-3xl p-6 shadow-sm">
            <div className="w-8 h-8 rounded-full bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] font-bold text-sm mb-4">
              2
            </div>
            <h3 className="text-sm font-bold text-[#2D2219] mb-2">Protection against Arbitrary Eviction</h3>
            <p className="text-xs text-gray-500 leading-relaxed">
              A landlord cannot force you to leave without giving you prior written notice as stipulated in your agreement (usually 1-3 months). Landlords cannot employ self-help measures like changing locks, throwing out belongings, or threat of physical eviction.
            </p>
          </div>

          <div className="bg-[#FAF9F5] border border-gray-100 rounded-3xl p-6 shadow-sm">
            <div className="w-8 h-8 rounded-full bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] font-bold text-sm mb-4">
              3
            </div>
            <h3 className="text-sm font-bold text-[#2D2219] mb-2">Security Deposit Refunds</h3>
            <p className="text-xs text-gray-500 leading-relaxed">
              Landlords must refund your security deposit within the timeframe agreed upon (usually at the time of handing over possession). Reasonable deductions can only be made for actual damages beyond normal wear and tear, and must be backed by bills.
            </p>
          </div>

          <div className="bg-[#FAF9F5] border border-gray-100 rounded-3xl p-6 shadow-sm">
            <div className="w-8 h-8 rounded-full bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] font-bold text-sm mb-4">
              4
            </div>
            <h3 className="text-sm font-bold text-[#2D2219] mb-2">Access to Essential Services</h3>
            <p className="text-xs text-gray-500 leading-relaxed">
              Under most state laws, landlords are strictly prohibited from disconnecting essential services like electricity, water supply, or sewage systems as a tool to pressure tenants into paying disputed rent or evicting them.
            </p>
          </div>
        </div>

        {/* Crucial Note box */}
        <div className="bg-blue-50/50 border border-blue-100 rounded-3xl p-6 flex gap-4 items-start">
          <div className="w-10 h-10 rounded-2xl bg-blue-100 flex items-center justify-center text-blue-600 flex-shrink-0">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"/>
              <line x1="12" y1="16" x2="12" y2="12"/>
              <line x1="12" y1="8" x2="12.01" y2="8"/>
            </svg>
          </div>
          <div>
            <h3 className="text-sm font-bold text-blue-950 mb-1">
              Model Tenancy Act (MTA), 2021
            </h3>
            <p className="text-xs text-blue-900/80 leading-relaxed">
              The Union Cabinet approved the Model Tenancy Act to balance rights. MTA caps the security deposit for residential premises at a maximum of 2 months' rent and 6 months' rent for commercial properties. If approved by your state, both landlords and tenants must register agreements with Rent Authorities.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
