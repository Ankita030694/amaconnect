import React from "react";

export default function EligibilityCriteria({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mb-12">
      <div className="flex flex-col gap-6">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 5
          </span>
          <h2 className="text-xl sm:text-2xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Eligibility Criteria for Filing Divorce
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed text-justify mb-4">
            Before filing a divorce petition in India, the spouses must meet specific statutory eligibility criteria. These criteria are established to prevent couples from dissolving their marriage hastily, ensuring they have made serious attempts at reconciliation. Under Section 14 of the Hindu Marriage Act, 1955, no petition for divorce can be presented to the court within one year of the marriage ceremony. This rule applies to both mutual consent and contested divorce petitions. However, in cases of exceptional hardship suffered by the petitioner or exceptional depravity on the part of the respondent, the court can grant leave to file a petition before the completion of one year. The petitioner must file a separate application showing exceptional circumstances, which the judge reviews. If the court finds that the petition was filed using misrepresentation or concealment, it can dismiss the case or stay the decree until the one-year period expires.
          </p>
        </div>

        {/* Eligibility Criteria Component Block */}
        <div className="bg-[#FAF9F5] border border-[#D4AF37]/20 rounded-3xl p-6 sm:p-8">
          <h3 className="text-base font-bold text-[#2D2219] mb-4">
            Eligibility Reference Checklist
          </h3>
          <p className="text-xs text-gray-500 mb-6">
            Review these statutory requirements to ensure your petition is legally maintainable:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                title: "Minimum Marriage Duration",
                desc: "A petition cannot be presented within 1 year of the marriage date, unless exceptional hardship or depravity is proved."
              },
              {
                title: "Period of Separate Living",
                desc: "Mutual consent requires 1 year of continuous separate living. Certain personal laws require up to 2 years."
              },
              {
                title: "Territorial Jurisdiction",
                desc: "The petition must be filed where the marriage occurred, where the respondent lives, or where the couple last lived together."
              },
              {
                title: "Wife's Residential Choice",
                desc: "A female petitioner has the legal right to file in the family court of the area where she currently resides."
              }
            ].map((item, idx) => (
              <div key={idx} className="border border-gray-100 rounded-2xl p-4 bg-white shadow-sm flex flex-col gap-1.5">
                <span className="text-xs font-bold text-[#2D2219] flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#D4AF37]" />
                  {item.title}
                </span>
                <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="border border-gray-100 rounded-3xl p-6 sm:p-8 bg-white">
          <h3 className="text-base font-bold text-[#2D2219] mb-4">
            Minimum Period of Separate Living
          </h3>
          <p className="text-sm text-gray-600 leading-relaxed text-justify mb-4">
            The requirement of separate living is a fundamental precondition for obtaining a divorce by mutual consent under Section 13B of the Hindu Marriage Act. The spouses must show that they have been living separately for a continuous period of at least one year before presenting the petition. This separate living is defined not merely by physical distance but by the complete breakdown of conjugal association. The couple must have ceased sharing a common household, fulfilling conjugal duties, and engaging in sexual relations. For Christian marriages governed by the Indian Divorce Act of 1869, the required separate living period was previously two years, but amendments have reduced it to one year to match other personal laws. For marriages under the Parsi Marriage and Divorce Act, the requirement remains a minimum of one year of separation, during which the parties have been unable to live together.
          </p>
        </div>

        <div className="border border-gray-100 rounded-3xl p-6 sm:p-8 bg-[#FAF9F5]">
          <h3 className="text-base font-bold text-[#2D2219] mb-4">
            Jurisdictional Residency Requirements
          </h3>
          <p className="text-sm text-gray-600 leading-relaxed text-justify">
            Residency requirements are key for establishing a court's authority to hear a divorce petition. Under Indian matrimonial laws, a petition is filed based on residency or the place of marriage solemnization. Under Section 19 of the Hindu Marriage Act, the case is presented to the court within whose jurisdiction the marriage took place, where the respondent lives, or where the couple last resided. If the petitioner is the wife, she can file the case where she currently resides, providing relief from traveling long distances to the husband's jurisdiction. If the petitioner resides outside India, or if the respondent's whereabouts are unknown, the case can be filed where the petitioner resides. Proving residency requires submitting utility bills, rent agreements, or employee records, ensuring the court's jurisdiction cannot be challenged by the other party.
          </p>
        </div>
      </div>
    </section>
  );
}
