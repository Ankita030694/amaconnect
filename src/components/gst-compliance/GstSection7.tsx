import React from "react";

export default function GstSection7({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-8 pt-4">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 7
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Penalties, Offences, and Compounding of Disputes under GST Law
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
            The GST Act contains strict punitive measures to enforce compliance and prevent evasion. Understanding these penalties, interest charges, and the conditions under which offences can be compounded is vital for risk mitigation.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Statutory Penalty Structure and Late Fee Computations
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            Section 122 outlines offences attracting financial penalties. Registered persons supplying goods without invoices or claiming credit without goods face penalties of ten thousand rupees or the tax evaded, whichever is higher. Short payments without fraud attract a ten percent penalty. Additionally, late fees under Section 47 accrue automatically for delayed returns, starting at fifty rupees per day for GSTR-1 and GSTR-3B filings, capped at statutory limits to reduce compliance burdens for small businesses. These daily late fees are updated automatically by the GST portal system.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Prosecution, Arrest Provisions, and Compounding Schemes
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            For serious fraud exceeding five crore rupees, Section 132 provides for non-bailable arrest and prison terms up to five years. Evasion between two and five crore rupees carries a three-year sentence. However, Section 138 offers a compounding scheme, allowing taxpayers to pay a fee to resolve charges and avoid criminal prosecution. Compounding fees range from fifty to one hundred and fifty percent of the tax. This scheme is not available for repeat offenders or fake invoice issuers, making timely compliance essential. Compounding remains a key administrative mechanism to resolve long-standing disputes.
          </p>
        </div>
      </div>
    </section>
  );
}
