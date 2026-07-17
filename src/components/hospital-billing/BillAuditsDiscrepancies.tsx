import React from "react";

export default function BillAuditsDiscrepancies({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 7
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Hospital Bill Audits and Discrepancies
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
            Reviewing the details of your medical invoice is crucial to identify overcharges. Demanding an itemized statement and conducting an audit against medical records prevents fraud such as double billing or inflated consumable prices.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            How to Demand an Itemized Medical Bill Statement
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            Demanding a detailed, itemized medical bill statement is the fundamental right of every patient under the Clinical Establishments Act and consumer protection regulations. When a patient is discharged, hospitals frequently present a single summary bill containing broad headings like pharmacy, consumables, room charges, or investigations, without providing the daily breakdown of the individual items. Patients and their family members should refuse to pay the bill until the hospital provides a complete itemized copy showing the quantity, date, unit price, and total charge for every single tablet, syringe, diagnostic test, and doctor visit. To secure this, the family must submit a written request to the billing department or the hospital administrator, invoking their right to information and billing transparency. Under the Patient Charter issued by the National Human Rights Commission (NHRC), patients are entitled to receive a complete copy of their medical records, daily treatment charts, nursing notes, and itemized bills. If the billing department refuses or delays the request, you should escalate the matter to the medical superintendent. Obtaining the itemized statement is a crucial prerequisite for conducting a bill audit, as it exposes the exact details of the pricing, allowing you to cross-verify the billing accuracy and identify any inflated charges before clearing the final payments, protecting your consumer interests.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Identifying Double Billing and Charge Inflations
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            Conducting a thorough audit of the itemized hospital bill is essential to identify common fraudulent practices like double billing and charge inflation. Double billing occurs when the hospital charges twice for the same service, such as billing under room rent and charging a separate nursing care fee, when nursing is already included in the room rent tariff. Similarly, hospitals may charge for surgical equipment under a package and bill for the same items separately under consumables. Charge inflation is frequently observed in the pricing of medicines and implants. Hospitals are legally required to sell medicines at or below the Maximum Retail Price (MRP). However, they often inflate prices by billing for premium brands when generic drugs were administered, or charging inflated rates for surgical implants and stents that exceed NPPA caps. Another common discrepancy is billing for services never rendered, such as charging for daily physiotherapist visits or laboratory tests that are not recorded in the patient diagnostic reports or daily nursing notes. Family members should carefully compare the itemized bill with the daily prescriptions and the nursing charts to verify that every billed item was actually used. Identifying these discrepancies and presenting them to the billing manager with proof from the medical files is the most effective way to negotiate a bill reduction, ensuring you only pay for legitimate healthcare services.
          </p>
        </div>
      </div>
    </section>
  );
}
