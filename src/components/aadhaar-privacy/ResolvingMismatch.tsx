import React from "react";

export default function ResolvingMismatch({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 3
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Resolving Data Mismatch Discrepancies
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
            Database mismatches and age related biometric changes can result in service exclusion. Implementing exception handling protocols and alternative verification options ensures uninterrupted access to welfare and banking.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Correcting Chronic Name, Gender, and Date of Birth Errors
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            Chronic discrepancies in vital Aadhaar database fields such as name, gender, date of birth, or address can cause significant disruptions when applying for passports, opening bank accounts, or filing income tax returns. The UIDAI allows citizens to update these details either online or by visiting an authorized Aadhaar Enrollment Center. To update your name or date of birth online, log in to the myAadhaar portal and submit the correction request along with supporting documents, such as a passport, PAN card, birth certificate, or school leaving certificate. The portal provides a list of acceptable documents for identity verification, and the scanned copy must match the requested changes perfectly. It is important to note that the UIDAI enforces a strict limit on the number of times a resident can update their details: names can only be updated twice, gender once, and date of birth once in a lifetime. If you exceed these update limits, the system will reject any further request, and you must apply for an exception handling process. Exception handling requires you to visit a UIDAI Regional Office, submit a physical petition explaining the chronic mismatch, and provide comprehensive proof of identity, such as a gazette notification or court order. Navigating these database corrections is crucial to ensure that your Aadhaar card details align perfectly with your other legal identity records, avoiding future administrative rejections.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Resolving Fingerprint and Iris Matching Failures for Pensioners
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            For many senior citizens and manual laborers, age related changes or physical wear can cause biometric verification failures, preventing them from accessing essential state pensions, subsidized rations, or banking services. As people age, the ridges on their fingerprints can fade, and health conditions like cataracts can impact iris verification, making it difficult for biometric scanners to match their live biometrics with the records stored in the UIDAI database. To resolve these chronic biometric failures, the UIDAI has introduced specific guidelines on exception handling and alternative authentication methods. First, the resident should visit an Aadhaar center to perform a biometric update, which allows the operator to recapture their fingerprints and iris scans using high sensitivity modern equipment. If biometric verification continues to fail despite updates, the service provider (such as the pension department or ration shop) is legally required to implement fallback options. Under Section 7 of the Aadhaar Act, no resident can be denied their legal benefits due to biometric matching failures. The service provider must authenticate the resident using a mobile OTP sent to their registered Aadhaar number, or by performing a physical verification of their Aadhaar card alongside another government identity proof. Knowing these exception rules allows pensioners to resist illegal denial of services by administrators who insist solely on biometric verification, ensuring they receive their welfare benefits without unnecessary hardship.
          </p>
        </div>
      </div>
    </section>
  );
}
