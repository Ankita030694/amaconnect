import React from "react";

export default function ConsumerCommissionOvercharging({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 4
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Approaching Consumer Commissions for Overcharging
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
            Wrongful overbilling and refusal to release patients fall under deficiency of service and unfair trade practices. Filing complaints before Consumer Commissions allows victims to recover overcharged amounts and seek punitive damages.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Filing Cases for Deficiency of Service and Unfair Trade Practices
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            Hospital overcharging, inflation of medical bills, and charging for services never rendered constitute a clear deficiency in service and an unfair trade practice under the Consumer Protection Act, 2019. In the landmark case of Indian Medical Association v. V.P. Shantha, the Supreme Court of India ruled that medical services rendered by doctors and hospitals fall within the ambit of the Consumer Protection Act, provided the services are paid for. This ruling opened a robust legal avenue for patients and their families to seek justice against predatory hospital practices. When a hospital demands payments that exceed the pre-approved package, bills for items that were never used, or charges prices above the MRP, the patient can file a consumer complaint before the District Consumer Disputes Redressal Commission. The complaint can seek refunds of the overcharged amounts, compensation for mental harassment and physical suffering, and litigation costs. In cases where the hospital detained the patient or refused to release a dead body, the Consumer Commission can award heavy punitive damages for the extreme deficiency in service. The filing process has been simplified through the e-Daakhil portal, allowing consumers to file complaints online without having to visit the court physically. Approaching the Consumer Commission not only provides financial restitution to the affected family but also sets a strong legal precedent that holds corporate hospital chains accountable for their commercial practices, discouraging overcharging.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Compiling Medical Bills, Prescriptions, and Audits as Evidence
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            To succeed in a consumer complaint against hospital overcharging, compiling a meticulous, irrefutable dossier of evidence is critical. The primary evidence consists of the complete, itemized medical bill provided by the hospital, which must show the detailed breakdown of charges for room rent, ICU charges, nursing care, doctor visits, medicines, surgical procedures, and investigations. Policyholders should match this itemized statement against the initial price estimate and the hospital declared tariff list to identify unauthorized increases. You must compile all doctor prescriptions, daily treatment charts, and nursing notes, which record the exact medicines administered and procedures conducted. Comparing the nursing notes with the billing sheet often reveals discrepancies, such as charging for five surgical kits when only one was prescribed and used. It is also essential to retain all payment receipts, online bank transfer records, and communications sent to the insurance company showing the pre-authorization limits and deductions. If the hospital used coercive tactics or detained the patient, keep copies of police complaints, mobile phone recordings, written communications, or emails exchanged with the hospital administration as proof of confinement. Obtaining an independent audit report from a certified medical auditor or a private doctor can also strengthen your case, as it provides the consumer court with expert verification of the charge inflation, making it difficult for the hospital to defend the bill.
          </p>
        </div>
      </div>
    </section>
  );
}
