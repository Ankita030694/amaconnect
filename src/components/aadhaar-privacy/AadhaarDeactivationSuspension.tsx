import React from "react";

export default function AadhaarDeactivationSuspension({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 6
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Aadhaar Card Deactivation and Suspension
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
            The UIDAI can deactivate or suspend unique identification numbers due to duplicate enrollments, document errors, or quality issues. Cardholders must follow established biometric updates or judicial appeals to reactivate their numbers.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Under What Rules UIDAI Can Deactivate an Aadhaar
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            The UIDAI possesses the statutory authority to deactivate, suspend, or cancel an Aadhaar number under specific rules outlined in the Aadhaar (Enrolment and Update) Regulations, 2016. Under Regulation 27 and 28, an Aadhaar number can be deactivated if it is discovered that a single resident has been issued multiple Aadhaar numbers, which violates the one resident one Aadhaar principle. In such cases, the earliest generated Aadhaar number is retained, and all subsequent numbers are deactivated. Deactivation also occurs if the enrollment was completed using fraudulent, incomplete, or mismatched biometric or demographic data, or if the supporting identity and address documents are found to be forged. Furthermore, the UIDAI can suspend an Aadhaar number if the biometrics captured during enrollment are of low quality or contain errors that prevent reliable authentication. Another common trigger is the failure of a resident to update their biometric details upon reaching the age of five and fifteen, as mandated by the regulations. When an Aadhaar is deactivated or suspended, the cardholder will face immediate rejections during e-KYC authentication, halting their access to linked bank accounts, mobile SIM cards, and government welfare benefits. The UIDAI is required to notify the resident of the deactivation, providing the specific grounds for the decision and offering an opportunity to correct the records before final suspension, maintaining administrative transparency.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Legal Remedies to Reactivate a Suspended Aadhaar Number
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            If your Aadhaar number has been deactivated or suspended, you must pursue specific administrative and legal pathways to restore its active status. The primary remedy is to visit a permanent Aadhaar Enrollment Center or a regional UIDAI office to initiate a biometric and demographic re-verification process. You must submit a fresh enrollment or update request, providing a full set of fresh fingerprint and iris scans alongside original, valid identity and address documents. If the deactivation was due to low quality biometrics or failure to perform mandatory childhood updates, updating your biometric records at the center is usually sufficient to reactivate the number within a few days. However, if the deactivation was triggered by suspected fraud, document discrepancies, or duplication errors, the process is more complex. You must submit a formal appeal to the Grievance Redressal Officer at the regional office, presenting clear proof of identity and explaining the discrepancies. If the regional office rejects your reactivation appeal without a valid reason, you have the legal right to file a writ petition in the High Court under Article 226 of the Constitution, challenging the arbitrary deactivation as a violation of your right to livelihood and welfare benefits. The High Court can direct the UIDAI to conduct a fresh inquiry, grant you a hearing, and reactivate the number if no fraud is established, ensuring your legal rights are protected.
          </p>
        </div>
      </div>
    </section>
  );
}
