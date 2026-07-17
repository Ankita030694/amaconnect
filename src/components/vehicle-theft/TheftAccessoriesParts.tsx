import React from "react";

export default function TheftAccessoriesParts({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 8
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Theft of Insured Parts and Accessories
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
            Thieves may target specific high-value components rather than stealing the entire vehicle. Policyholders must understand the rules for claiming stolen accessories and the differences in settling partial vs. total loss claims.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Claiming for Stolen Accessories and Tires
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            When a vehicle is parked on a public street, thieves may not steal the entire vehicle but may remove expensive components, such as high-end music systems, alloy wheels, tires, side mirrors, or catalytic converters. Claiming insurance compensation for these stolen accessories requires a specific policy configuration. A standard comprehensive motor insurance policy covers the physical structure of the vehicle, but coverage for non-standard accessories, such as aftermarket stereo systems, screens, or premium leather seats, is not automatic. To claim for these items, the policyholder must have declared their value during policy purchase and paid an additional premium for electrical or non-electrical accessories cover. If the theft involves standard components like tires or mirrors, they are covered under the main policy, but the claim will attract depreciation deductions based on the age of the vehicle. For example, depreciation on rubber parts like tires is fixed at fifty percent, meaning you will only receive half the replacement cost. To avoid these deductions, policyholders can purchase zero depreciation or return to invoice add-on covers. When filing a claim for stolen parts, you must still file a police complaint or FIR, take photographs of the damage, and submit the invoices for the replacement parts. The insurer will appoint a surveyor to inspect the vehicle and approve the repair costs, allowing you to recover the expenses incurred in replacing the stolen components.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Difference Between Vehicle Theft and Component Theft
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            It is important for policyholders to understand the technical and procedural differences between a full vehicle theft claim and a component theft claim. A full vehicle theft is treated as a total loss claim. In this scenario, the entire vehicle is missing, and the settlement amount is based on the full Insured Declared Value (IDV) of the vehicle. The process requires deregistering the vehicle at the RTO, transferring the RC to the insurer, and obtaining a judicial untraced report under Section 173 CrPC. The settlement process is lengthy, often taking three to six months due to police and court timelines. On the other hand, component theft is processed as a partial loss or damage claim. The vehicle remains in the possession of the owner, and only specific parts are missing or damaged. The settlement is based on the cost of repairing the damage and replacing the stolen parts, subject to depreciation rules. Crucially, a component theft claim does not require an RTO deregistration, RC transfer, or a judicial untraced report; a copy of the police FIR and the surveyor report are sufficient to process the claim. The settlement for component theft is relatively fast, typically resolved within two to three weeks through the network garage system. Understanding these differences helps policyholders manage their expectations and follow the correct procedures depending on the nature of the theft.
          </p>
        </div>
      </div>
    </section>
  );
}
