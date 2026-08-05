import React from "react";

export default function GstSection1({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-8 pt-4">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 1
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Overview of GST Structure and Registration Requirements in India
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
            The introduction of the Goods and Services Tax in 2017 consolidated India's fragmented indirect tax regime into a unified national market. This statutory reform eliminated cascading levies, simplifying tax compliance for businesses across the country. Understanding these key rules is the first step toward tax optimization.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Evolution of Indirect Tax Regime and GST Council
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            Before GST, India's indirect tax framework was highly complex, characterized by cascading taxes and dual compliance across state borders. The CGST Act, SGST Act, and IGST Act of 2017 consolidated these levies into a single comprehensive tax. The constitutional GST Council, representing the Union Finance Minister and state finance ministers, serves as the supreme decision-making authority. It recommends tax rates, exemptions, and administrative rules, ensuring cooperative federalist policymaking that adapts tax administration to changing economic realities across different states. This administrative flexibility reduces operational uncertainties for businesses, creating a stable tax environment.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Mandatory Registration Thresholds and Voluntary Enrollment
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            Under Section 22 of the CGST Act, registration is mandatory for businesses with an aggregate annual turnover exceeding forty lakh rupees for goods, or twenty lakh rupees for service providers. Special category states operate under reduced thresholds of ten or twenty lakh rupees. Furthermore, Section 24 mandates compulsory registration regardless of turnover for inter-state suppliers, e-commerce operators, and reverse charge taxpayers. Businesses below these thresholds can opt for voluntary registration under Section 25(3) to pass on tax credits, though they must fulfill all compliance obligations. Obtaining registration allows businesses to participate in mainstream distribution networks without trade barriers.
          </p>
        </div>
      </div>
    </section>
  );
}
