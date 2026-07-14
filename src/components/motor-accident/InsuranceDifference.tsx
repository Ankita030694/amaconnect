import React from "react";

interface InsuranceDifferenceProps {
  id: string;
}

export default function InsuranceDifference({ id }: InsuranceDifferenceProps) {
  const comparisonData = [
    {
      feature: "Legal Requirement",
      thirdParty: "Mandatory by law under Section 146 of the Motor Vehicles Act.",
      ownDamage: "Optional, though highly recommended for financial security."
    },
    {
      feature: "Coverage Scope",
      thirdParty: "Covers bodily injury, death, and property damage of third parties.",
      ownDamage: "Covers damage, theft, fire, or total loss of the insured vehicle."
    },
    {
      feature: "Compensation Limit",
      thirdParty: "Unlimited for injury or death; capped at 7.5 lakh rupees for property.",
      ownDamage: "Capped at the Insured Declared Value (IDV) minus depreciation."
    },
    {
      feature: "Dispute Forum",
      thirdParty: "Adjudicated by the Motor Accident Claims Tribunal (MACT).",
      ownDamage: "Settled via insurance company, Consumer Forums, or Ombudsman."
    },
    {
      feature: "No Claim Bonus",
      thirdParty: "No impact on renewal discounts; premium remains flat.",
      ownDamage: "Resets or reduces the accumulated No Claim Bonus (NCB) upon claim."
    },
    {
      feature: "Premium Rates",
      thirdParty: "Fixed annually by the IRDAI based on vehicle engine capacity.",
      ownDamage: "Determined by vehicle age, model, geographical zone, and add-ons."
    }
  ];

  return (
    <section id={id} className="py-8 border-b border-gray-100 scroll-mt-24">
      <h2 className="text-2xl sm:text-3xl font-bold text-[#2D2219] mb-6">
        Difference between Third Party and Own Damage
      </h2>

      <div className="space-y-6 text-gray-700 leading-relaxed text-sm sm:text-base">
        <div>
          <h3 className="text-xl font-bold text-[#2D2219] mb-3">
            Mandatory Third Party Insurance Coverages
          </h3>
          <p className="mb-4">
            Third-party insurance, also known as act-only cover, is a statutory requirement under Section 146 of the Motor Vehicles Act of 1988. In India, it is a punishable offense to operate any motor vehicle in a public place without a valid third-party insurance policy. The primary objective of this mandatory coverage is to protect the general public from financial loss resulting from accidents caused by the insured vehicle. In this arrangement, the first party is the vehicle owner, the second party is the insurance company, and the third party is any individual who suffers bodily injury, death, or property damage due to the vehicle.
          </p>
          <p className="mb-4">
            Under the law, the liability for third-party bodily injury or death is entirely unlimited, meaning the insurance company must pay whatever compensation the tribunal awards based on the victim's age, income, and dependency. For third-party property damage, however, the liability is capped at a maximum of seven lakh fifty thousand rupees, though policyholders can choose to reduce this limit to save on premium costs. Third-party insurance does not cover any damage to the insured vehicle itself or injuries sustained by the driver of the insured vehicle, unless an additional personal accident cover is specifically purchased. It is purely designed to insulate the vehicle owner from crippling financial liabilities arising from harm caused to others, ensuring that innocent road accident victims receive their legal dues regardless of the driver's personal financial capacity.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold text-[#2D2219] mb-3">
            Claiming Own Damage for Vehicle Repairs
          </h3>
          <p className="mb-4">
            Own Damage insurance, unlike third-party cover, is entirely optional but highly recommended to protect the vehicle owner from direct financial loss caused by damage to their own vehicle. This policy covers repair or replacement costs arising from traffic accidents, fire, theft, natural disasters like floods and earthquakes, and malicious acts or riots. When an accident occurs, claiming Own Damage involves a distinct procedure compared to a third-party claim. The owner must immediately inform the insurance company and arrange for the vehicle to be towed to an authorized cashless garage or get a surveyor to inspect the damage before repairs begin.
          </p>
          <p className="mb-4">
            The compensation is calculated based on the Insured Declared Value, or IDV, which represents the maximum sum assured under the policy, minus the statutory depreciation on parts such as plastic, glass, and rubber. Own damage claims do not go through the Motor Accident Claims Tribunal; instead, they are settled directly between the policyholder and the insurance company under the terms of the insurance contract, governed by the Insurance Regulatory and Development Authority of India, or IRDAI. Policyholders can also opt for add-on covers like zero depreciation, engine protection, and roadside assistance to avoid out of pocket expenses. Claiming own damage does, however, affect the No Claim Bonus, or NCB, which is a discount offered on renewal premiums for claim-free years, meaning owners must carefully evaluate whether small repair bills are worth filing a claim.
          </p>
        </div>

        {/* Comparison Table Section */}
        <div className="mt-8">
          <h4 className="text-lg font-bold text-[#2D2219] mb-4">
            Comparison Table: Third Party vs Own Damage Insurance
          </h4>
          <div className="overflow-x-auto rounded-2xl border border-gray-100 shadow-sm">
            <table className="w-full text-left border-collapse bg-white">
              <thead>
                <tr className="bg-amber-50/50 border-b border-gray-100">
                  <th className="p-4 text-xs sm:text-sm font-bold text-[#2D2219] uppercase tracking-wider">
                    Feature
                  </th>
                  <th className="p-4 text-xs sm:text-sm font-bold text-[#2D2219] uppercase tracking-wider">
                    Third Party Coverage
                  </th>
                  <th className="p-4 text-xs sm:text-sm font-bold text-[#2D2219] uppercase tracking-wider">
                    Own Damage Coverage
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50 text-xs sm:text-sm text-gray-600">
                {comparisonData.map((row, index) => (
                  <tr key={index} className="hover:bg-amber-50/10 transition-colors">
                    <td className="p-4 font-bold text-[#2D2219] whitespace-nowrap">
                      {row.feature}
                    </td>
                    <td className="p-4">
                      {row.thirdParty}
                    </td>
                    <td className="p-4">
                      {row.ownDamage}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
