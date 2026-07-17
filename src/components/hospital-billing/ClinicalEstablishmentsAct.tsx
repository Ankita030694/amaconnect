import React from "react";

export default function ClinicalEstablishmentsAct({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 3
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Complaints Under the Clinical Establishments Act
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
            Healthcare providers must conform to price transparency standards established under national and state clinical regulations. Patient families can file complaints with district registering authorities to penalize non-compliant hospitals.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Statutory Standards for Price Disclosure and Billing
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            The Clinical Establishments (Registration and Regulation) Act, 2010, along with various state-specific clinical establishment acts, sets strict statutory standards to ensure transparency in hospital billing and prevent overcharging. Under these regulations, every registered hospital, nursing home, and diagnostic center is legally required to disclose its price list for all services, consultations, room rents, surgeries, and investigations. This price list must be prominently displayed in the local language and English at the reception area and on the hospital official website. The act mandates that clinical establishments must charge rates that are within the range determined by the central or state governments in consultation with representatives of medical associations. Furthermore, hospitals are prohibited from charging prices for medicines, implants, and consumables that exceed the Maximum Retail Price (MRP) printed on the packaging, or the price caps fixed by the National Pharmaceutical Pricing Authority (NPPA). The billing process must be completely transparent, and hospitals must provide patients with a detailed, itemized estimate of expenses at the time of admission, updating them daily regarding the accumulated charges. If a hospital fails to display its pricing, charges rates higher than the declared price list, or violates price caps on implants, it constitutes a direct violation of the statutory standards, exposing the clinical establishment to severe penalties, suspension of operations, or cancellation of registration by the state health authorities.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Filing Complaints with the District Registering Authority
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            When a hospital violates the provisions of the Clinical Establishments Act by overcharging, failing to disclose prices, or detaining a patient, the victim or their family members can file a formal complaint with the District Registering Authority (DRA). The DRA is the local regulatory body responsible for registering, monitoring, and regulating all healthcare facilities within the district, and is typically headed by the District Magistrate or the Chief Medical Officer (CMO). The complaint must be submitted in writing, detailing the specific violations, and supported by copies of the disputed bills, admission summaries, and any communication with the hospital administration. Upon receiving the complaint, the DRA has the power to initiate an inquiry, summon the hospital representatives, inspect the medical records, and conduct physical audits of the premises. Under the Act, if the DRA finds that the clinical establishment has violated the billing rules or overcharged the patient, it can impose monetary penalties ranging from ten thousand to five lakh rupees depending on the nature of the offense. For repeated violations, the authority can suspend or cancel the hospital registration certificate, effectively shutting down the facility. Filing a complaint with the DRA provides a highly effective administrative remedy that hits clinical establishments directly in their operating licenses, forcing them to comply with price disclosure rules and treat patients fairly.
          </p>
        </div>
      </div>
    </section>
  );
}
