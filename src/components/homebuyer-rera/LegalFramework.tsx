import React from "react";

export default function LegalFramework({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-8 pt-8 border-t border-gray-100">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 1
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            The Legal Framework of RERA in India
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
            The enactment of the Real Estate, Regulation and Development, Act in 2016 marked a historic transition in the Indian property sector, shifting power dynamics from developers to consumers. By establishing a robust, dedicated legal framework, the legislation sought to standardise market transactions, enforce contract compliance, and instil strict financial discipline.
          </p>
        </div>

        <div className="space-y-10">
          {/* H3: Key Objectives of Real Estate Regulation Act */}
          <div className="flex flex-col gap-3">
            <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
              Key Objectives of Real Estate Regulation Act
            </h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
              The Real Estate, Regulation and Development, Act, commonly known as RERA, was established to address the deep asymmetry of power that historically favoured builders over individual home buyers. Before this law was implemented, the real estate market in India operated with minimal oversight, which frequently led to one-sided builder-buyer agreements, severe delays in project delivery, and the diversion of consumer funds to other projects. The primary objectives of RERA are to protect the interests of consumers in the real estate sector, promote transparency and accountability in all property transactions, and establish a fast-track mechanism for resolving disputes through dedicated adjudicating officers. By mandating that developers register their projects and upload detailed records, layout plans, land titles, and approvals to state portals, the Act ensures buyers have access to verified information. Additionally, the Act mandates that seventy percent of the funds collected from buyers be maintained in a separate escrow account, ensuring money is used solely for the construction of that specific project. This financial discipline minimizes the risk of developer insolvency and project abandonment, creating a more balanced, secure, and professional real estate environment for consumers and investors alike.
            </p>
          </div>

          {/* H3: Applicability of RERA to Building Projects */}
          <div className="flex flex-col gap-3">
            <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
              Applicability of RERA to Building Projects
            </h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
              The jurisdiction of RERA applies to a broad range of real estate undertakings across the country, setting clear and binding criteria for project registration. Specifically, any residential or commercial project must be registered with the respective state RERA authority if the total land area proposed for development exceeds five hundred square meters, or if the number of apartments proposed for construction exceeds eight units. Developers are legally prohibited from advertising, marketing, booking, selling, or offering for sale any plot, apartment, or building without first obtaining a formal registration number. For ongoing projects that had not yet received a completion certificate or occupancy certificate when the Act came into force, developers were required to register them immediately, bringing older, delayed developments under the preview of the regulator. The law also covers plotted developments, mixed-use buildings, and phased developments, requiring each phase to be registered as a separate project with its own timeline. Projects designed solely for renovation, repair, or redevelopment that do not involve new marketing or sales are exempt from registration. Understanding these rules helps homebuyers check if a developer is registered, and it protects them from buying properties in unauthorized, high-risk developments.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
