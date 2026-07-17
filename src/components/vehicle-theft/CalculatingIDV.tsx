import React from "react";

export default function CalculatingIDV({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 5
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Calculating Insured Declared Value (IDV)
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
            The payout for a stolen vehicle is determined by the Insured Declared Value (IDV) listed in the policy schedule. Policyholders must verify the calculation of this value and challenge any unauthorized deductions applied by the insurer during settlement.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Determining Settlement Amount Based on IDV
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            The settlement amount for a stolen vehicle claim is not determined by the current market price of the vehicle or the original purchase price, but is strictly based on the Insured Declared Value (IDV) specified in the active insurance policy schedule. The IDV is the maximum sum insured fixed by the insurance company at the commencement of each policy period. It represents the maximum liability of the insurer in case of a total loss, constructive total loss, or theft of the vehicle. The IDV is calculated based on the manufacturer listed selling price of the vehicle brand, model, and variant, adjusted for depreciation according to the age of the vehicle. For a brand-new vehicle, the IDV is typically fixed at ninety-five percent of the manufacturer invoice price. For older vehicles, the IDV is reduced annually by applying a standardized depreciation scale established by the General Insurance Rules. Specifically, the depreciation rates are: five percent for vehicles up to six months old; ten percent for up to one year; twenty percent for up to two years; thirty percent for up to three years; forty percent for up to four years; and fifty percent for up to five years. For vehicles older than five years, the IDV is determined by mutual agreement between the insurer and the policyholder based on an assessment of the vehicle roadworthiness. Claimants must verify that the settlement amount offered by the insurer matches the exact IDV listed on the policy page.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Dealing with Deductions for Depreciation and Taxes
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            When settling a vehicle theft claim, insurance companies frequently attempt to apply various deductions to reduce the final payout amount, leading to disputes with policyholders. Claimants must understand which deductions are legally permissible and which constitute unfair trade practices. Under standard motor insurance rules, the insurer must pay the full Insured Declared Value (IDV) without applying any depreciation depreciation deductions to the overall vehicle, as the IDV already accounts for annual depreciation. However, the insurer is permitted to deduct a minor compulsory deductible fee, which is a standard administrative charge set by the regulator, usually ranging from one hundred to one thousand rupees depending on the engine capacity. Insurers also routinely deduct the value of road taxes and registration fees paid during the purchase, as these taxes are paid to the state government and are not covered under the vehicle damage policy. If the claimant had not paid the full premium due to installment plans, the unpaid premium balance will also be deducted from the settlement. A common area of dispute is the deduction of depreciation on specific consumable parts or accessories. Policyholders should challenge any arbitrary deductions made by the insurer claims team that violate the terms of the policy. Reviewing the detailed settlement sheet provided by the insurer and comparing it against the policy schedule ensures that the company does not make unauthorized deductions, protecting your right to receive the complete IDV payout.
          </p>
        </div>
      </div>
    </section>
  );
}
