import React from "react";

export default function MandatoryVoluntaryUses({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 4
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Aadhaar Mandatory vs Voluntary Uses
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
            Aadhaar cannot be legally demanded for non-welfare commercial transactions. Service providers must establish alternative identity verification pathways to respect consumer choice and consent.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Services where Aadhaar Cannot Be Forced
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            In the wake of the Supreme Court Puttaswamy ruling, the legal boundaries regarding the mandatory use of Aadhaar have been strictly defined, and any attempt by private or public bodies to force Aadhaar for non-essential services is a violation of the law. The Supreme Court declared that Aadhaar can only be made mandatory for receiving state welfare subsidies, benefits, or services that are funded directly from the Consolidated Fund of India under Section 7 of the Aadhaar Act. Crucially, the Court struck down the mandatory link between Aadhaar and bank accounts, mobile SIM card connections, school admissions, and competitive exams. Private telecom operators, commercial banks, fintech applications, and educational institutions are legally prohibited from forcing customers or students to provide their Aadhaar numbers as a condition for receiving services. Gaining a mobile connection, opening a basic savings account, purchasing a train ticket, or checking into a hotel are voluntary transactions where Aadhaar cannot be demanded as the sole identification proof. Furthermore, the Reserve Bank of India (RBI) and the Telecom Regulatory Authority of India (TRAI) have updated their Master Directions to align with this ruling, instructing banks and telecom providers to accept alternative identification documents. Understanding these legal boundaries protects citizens from unauthorized data collection, enabling them to confidently refuse demands for their unique identification numbers in their daily commercial dealings, preserving their privacy.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Providing Alternate Identity Verification Options
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            When a service provider offers Aadhaar as a method for identity verification, the law requires them to provide residents with alternative, legally valid identification options. Under the Aadhaar and Other Laws (Amendment) Act, 2019, any entity performing identity verification or e-KYC must allow the customer to choose their preferred mode of identification. If a customer does not wish to share their Aadhaar card, the service provider must accept alternative government issued documents, such as a passport, PAN card, voter identity card, driving license, or any other officially valid document (OVD) prescribed by regulatory authorities. The service provider cannot deny the service, charge an additional fee, or offer inferior service terms to customers who opt out of Aadhaar verification. For example, when opening a bank account or buying a SIM card, you have the right to request a physical KYC or paper based verification using your voter card or driving license. To ensure biometric safety and prevent data leaks, the amendment also permits residents to use a Masked Aadhaar or a Virtual ID (VID) for authentication instead of sharing their physical Aadhaar number. Knowing these statutory amendment provisions allows consumers to defend their digital privacy, forcing service providers to establish robust paper based or digital alternative KYC pathways that respect the choice and consent of the citizen, maintaining absolute data control.
          </p>
        </div>
      </div>
    </section>
  );
}
