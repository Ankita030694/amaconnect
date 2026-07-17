import React from "react";

export default function FilingInsuranceClaim({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 3
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Filing the Insurance Claim
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
            Filing a motor theft claim requires compiling a rigorous set of documents and physical evidence. Submitting the original keys and preparing a comprehensive paper trail is essential to satisfy the requirements of the insurer investigation team.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Submitting Claim Form and Original Car Keys
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            Once the preliminary notifications are complete, you must submit a formal motor insurance claim form to the company. The claim form must be filled in with absolute accuracy, providing details about the policyholder, the vehicle, the date of the theft, and the details of the police FIR. Along with the claim form, a highly critical requirement is the submission of the original car keys. For most modern passenger cars, the insurer will require you to submit both sets of original keys that were provided by the manufacturer. The submission of both keys is a standard legal safeguard used by insurers to verify that the vehicle was not left unlocked or unattended, and that the owner did not facilitate the theft through negligence. If you have lost one of the original keys prior to the theft, you must have notified the insurer earlier or be prepared to provide a detailed explanation, backed by a police complaint or a repair invoice showing key replacement. If you fail to submit both keys, the insurance company will investigate the claim with high suspicion, and may reject it by alleging a breach of the reasonable care clause. The reasonable care clause requires the policyholder to take all reasonable steps to safeguard the vehicle from loss. Submitting both original keys serves as key physical evidence that you took proper precautions, facilitating a smoother claim approval process, which is why claimants must guard their spare keys carefully.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Documents Checklist: RC, Driving License, and Insurance Copy
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            Securing a vehicle theft claim settlement requires a comprehensive compilation of documents that establish your ownership and the legality of the vehicle operations at the time of the theft. The mandatory documents checklist includes the original registration certificate (RC) of the vehicle, which must be submitted to the insurer. You must also provide a copy of the active motor insurance policy certificate showing that theft coverage was in place on the date of the incident. The insurer will require a copy of the driving license of the person who was in possession of the vehicle or who parked it last, to verify that the vehicle was operated by a licensed driver in compliance with the Motor Vehicles Act. In addition, you must submit the certified copy of the police FIR, the written notifications sent to the RTO along with their acknowledgment receipts, and the ready reckoner valuation of the vehicle. If the vehicle was purchased under a hire purchase or loan agreement, you must secure a No Objection Certificate (NOC) from the financing bank or financial institution, directing the insurer to pay the claim amount to the bank to settle the loan. Preparing this dossier with complete, self-attested photocopies of all records and obtaining formal acknowledgment from the insurance office is essential. A single missing document or discrepancy in the paperwork can halt the settlement process, making a thorough review of the checklist a top priority.
          </p>
        </div>
      </div>
    </section>
  );
}
