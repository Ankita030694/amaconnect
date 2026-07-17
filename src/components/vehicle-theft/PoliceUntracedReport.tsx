import React from "react";

export default function PoliceUntracedReport({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 4
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            The Police Untraced Report (Final Report)
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
            The final report submitted by the police to the judicial magistrate is the ultimate proof required to settle a vehicle theft claim. Understanding Section 173 CrPC and the court procedure to secure a certified copy of this report is essential for every claimant.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            What is Section 173 CrPC Untraced Report
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            The single most crucial document for resolving a vehicle theft insurance claim is the official Untraced Report, which is the final report submitted by the police under Section 173 of the Code of Criminal Procedure (CrPC). When an FIR is registered for theft, the police are legally required to launch an investigation to locate the stolen vehicle and apprehend the culprits. If, after conducting a thorough search and investigation over several weeks or months, the police are unable to find the vehicle or identify the thieves, they must close the case. The investigating officer will prepare a final report stating that the vehicle remains untraced despite all efforts. This report, commonly referred to as the untraced report or final report (FR), is submitted by the police to the local judicial magistrate having jurisdiction over the police station. The untraced report is a vital legal document because it serves as official, independent confirmation by state authorities that the vehicle is permanently lost and cannot be recovered. Insurance companies will generally refuse to settle a theft claim or release the payout until this untraced report is submitted by the policyholder, as it eliminates the possibility of the owner hiding the vehicle to claim insurance money. Understanding the statutory nature of the Section 173 CrPC report helps claimants monitor the progress of the police investigation and prepare their follow-up actions once the police decide to close the case.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            How to Request Untraced Report from Judicial Magistrate
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            Once the police investigator prepares the untraced report under Section 173 CrPC, securing a certified copy requires specific legal steps before the local Judicial Magistrate Court. After the police submit the final report to the court, the magistrate will issue a notice to the complainant (the vehicle owner) to appear and record their statement. During this court appearance, the magistrate will ask the owner if they have any objections to the police closing the case. If the owner agrees that the vehicle remains untraced, the magistrate will accept the final report and pass an official order closing the case as untraced. The owner must then apply to the court registry for a certified copy of the magistrate order and the untraced report. Securing this certified copy is a critical administrative step, as insurance companies will not accept photocopies or simple police letters. The process of getting the final report accepted by the court can sometimes take several months due to judicial delays. To accelerate the process, claimants can file a petition through an advocate requesting the court to accept the report and release the order. Obtaining the certified magistrate order accepting the untraced report completes the investigation phase, and submitting this order to the insurance company removes the final major administrative hurdle, forcing the insurer to process the payment of the Insured Declared Value (IDV) immediately.
          </p>
        </div>
      </div>
    </section>
  );
}
