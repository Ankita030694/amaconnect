import React from "react";

export default function InformingRTO({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 2
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Informing the Regional Transport Office (RTO)
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
            Updating the transport department records is a mandatory statutory requirement under motor vehicle laws. Placing a theft endorsement on the vehicle registration ensures that the stolen asset cannot be re-registered or misused.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Submitting Theft Intimation Form to RTO
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            In addition to the police and the insurance company, the policyholder is legally required to notify the Regional Transport Office (RTO) where the vehicle was registered. Under the provisions of the Motor Vehicles Act, 1988, any change in the possession of the vehicle due to theft must be reported to the transport authorities immediately. The intimation to the RTO must be made in writing, typically using Form 28 (Application for No Objection Certificate) and other state-specific theft notification forms. The written letter must detail the registration number of the vehicle, the date of theft, the details of the police station where the FIR was registered, and the FIR number. You must attach copies of the registration certificate (RC), the insurance policy, the driving license of the person who last drove the vehicle, and the certified copy of the FIR. The RTO will record this notification in their database, ensuring that the stolen vehicle cannot be illegally sold, transferred, or re-registered under another name. Under most state rules, the notification to the RTO must be submitted within fourteen days of the incident. Failing to notify the transport office can lead to severe legal consequences if the stolen vehicle is subsequently used for criminal activities or smuggling, as the registered owner remains prima facie liable for all acts involving the vehicle until the RTO records are officially updated with the theft information.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Securing Theft Endorsement on Registration Records
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            Once the RTO receives your written intimation and supports it with the copy of the FIR, they will process the application to place a formal theft endorsement on the registration records of the vehicle. This endorsement, commonly referred to as the RTO non-use or theft status update, is a critical document required by the insurance company before they will release the claim payout. The transport authority will update the electronic records of the vehicle on the centralized Vahan database, showing the status as stolen. The RTO will then issue an official letter or certificate confirming that the theft of the vehicle has been recorded in their books. If you are applying for a total loss claim, the insurance company will require you to secure a transfer of the registration certificate in their name or submit a deregistration certificate from the RTO. Under Section 55 of the Motor Vehicles Act, 1988, if a vehicle has been destroyed or rendered permanently incapable of use, the registration must be canceled. In cases of theft, the insurer will instruct you to submit Form 29 and Form 30 to transfer the ownership to the insurance company, as they will take possession of the vehicle if it is recovered in the future. Securing the official RTO theft endorsement and preparing the ownership transfer forms is a mandatory step that must be completed diligently to satisfy the insurer compliance team.
          </p>
        </div>
      </div>
    </section>
  );
}
