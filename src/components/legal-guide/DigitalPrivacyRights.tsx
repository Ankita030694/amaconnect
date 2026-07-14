import React from "react";

export default function DigitalPrivacyRights({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 8
          </span>
          <h2 className="text-xl sm:text-2xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Digital Privacy &amp; Cyber Rights
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed text-justify mb-4">
            In an increasingly digital India, understanding your cyber rights and data privacy options is as important as knowing your physical rights. The law has evolved to protect citizens against digital harassment, identity theft, financial fraud, and unauthorized data exploitation.
          </p>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[#FAF9F5] border border-gray-100 rounded-3xl p-6">
            <h3 className="text-xs font-bold text-[#2D2219] mb-2">Digital Personal Data Protection (DPDP) Act, 2023</h3>
            <p className="text-[11px] text-gray-500 leading-relaxed text-justify">
              This act mandates that corporate entities and government institutions (Data Fiduciaries) can only collect and process your personal data with explicit, unambiguous consent. You have the right to request access to the data stored, seek corrections or deletion of records, and file grievances with the Data Protection Board of India if your data is leaked or misused.
            </p>
          </div>

          <div className="bg-[#FAF9F5] border border-gray-100 rounded-3xl p-6">
            <h3 className="text-xs font-bold text-[#2D2219] mb-2">Reporting Cyber &amp; Financial Frauds</h3>
            <p className="text-[11px] text-gray-500 leading-relaxed text-justify">
              If you fall victim to credit card cloning, UPI phishing, or online banking frauds, immediately call the National Cyber Crime Helpline at **1930** or report the incident on **cybercrime.gov.in**. Under RBI circulars, reporting unauthorized electronic transactions within 3 days guarantees zero liability for the customer.
            </p>
          </div>

          <div className="bg-[#FAF9F5] border border-gray-100 rounded-3xl p-6">
            <h3 className="text-xs font-bold text-[#2D2219] mb-2">Protection against Non-Consensual Media Sharing</h3>
            <p className="text-[11px] text-gray-500 leading-relaxed text-justify">
              Under Sections 66E (violating privacy by capturing/publishing private areas) and 67A (publishing sexually explicit material) of the IT Act, sharing someone's private photos or videos without consent is a cognizable offence. Police are bound to register an FIR, and cyber cells can force platforms to take down content within 24-36 hours.
            </p>
          </div>

          <div className="bg-[#FAF9F5] border border-gray-100 rounded-3xl p-6">
            <h3 className="text-xs font-bold text-[#2D2219] mb-2">Right to be Forgotten &amp; Take Downs</h3>
            <p className="text-[11px] text-gray-500 leading-relaxed text-justify">
              Various High Courts have recognized the 'Right to be Forgotten' as an integral part of the Right to Privacy under Article 21. Citizens can petition search engines like Google and social networks to remove links containing outdated criminal records (after acquittal) or personal details that have no public interest.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
