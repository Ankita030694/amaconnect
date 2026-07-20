import React from "react";

export default function VirtualIDMaskedAadhaar({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 7
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Virtual ID (VID) and Masked Aadhaar
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
            Sharing your physical Aadhaar number exposes you to visual profiling and leaks. Generating Virtual IDs and downloading Masked Aadhaar cards allow you to verify your identity securely while concealing critical numeric identifiers.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            How to Generate and Use Virtual ID for E-KYC
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            A Virtual ID (VID) is a temporary, revocable sixteen digit random number mapped to a resident Aadhaar number, designed to provide an additional layer of security and privacy during e-KYC authentication. The primary benefit of using a VID is that it allows you to authenticate your identity without sharing your actual twelve digit Aadhaar number, reducing the risk of identity theft. To generate a VID, you can visit the official UIDAI myAadhaar portal or use the mAadhaar mobile application. After logging in using your Aadhaar number and entering the mobile OTP, select the Virtual ID Generator option from the services list. The system will allow you to generate a new VID or retrieve your existing one. The generated VID is sent to your registered mobile number instantly. You can use this sixteen digit VID at any authentication point, such as a bank, telecom provider, or financial application, in place of your physical Aadhaar number. The requesting agency will submit the VID to the UIDAI servers, which will verify your identity and return the authentication response without revealing your Aadhaar number to the agency. VIDs are temporary and remain valid for a minimum of one calendar day or until you generate a new one, which automatically invalidates the old VID. Utilizing VIDs is highly recommended to protect your core identity details, maintaining privacy.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Legal Validity and Benefits of Masked Aadhaar Cards
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            A Masked Aadhaar card is an officially valid format of the Aadhaar card where the first eight digits of the Aadhaar number are replaced with asterisks, leaving only the last four digits visible. This format is designed to protect your physical card details from unauthorized scanning or photocopying while retaining its legal validity for verification. Under the guidelines issued by the UIDAI and the Ministry of Electronics and Information Technology (MeitY), a Masked Aadhaar is a legally acceptable proof of identity and address for all voluntary verification purposes, such as checking into hotels, boarding domestic flights, or securing entry to private buildings. The main benefit of using a Masked Aadhaar is that it prevents visual identity theft and stops third parties from collecting your full unique identification number. Many private entities collect photocopies of Aadhaar cards without implementing proper data security, leaving the records vulnerable to leaks. By sharing a Masked Aadhaar, you satisfy the identity proof requirement while ensuring that your full Aadhaar number is never stored on unsecured local servers. Residents can easily download a Masked Aadhaar from the myAadhaar portal by checking the Do you want a masked Aadhaar option before downloading their e-Aadhaar PDF. Implementing this simple practice is an essential digital hygiene measure that protects your identity data from leakage and unauthorized commercial profiling, ensuring safe sharing.
          </p>
        </div>
      </div>
    </section>
  );
}
