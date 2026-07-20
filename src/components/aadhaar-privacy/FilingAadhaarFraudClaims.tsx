import React from "react";

export default function FilingAadhaarFraudClaims({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 8
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Filing Legal Claims for Aadhaar Fraud
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
            Victims of biometric misuse or data leaks have legal pathways to prosecute offenders and seek restitution. Citing Information Technology laws and banking circulars allows victims to recover financial losses caused by authentication fraud.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Sections Penalizing Biometric Misuse and Unauthorized Sharing
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            The Aadhaar Act, 2016, contains strict penal provisions to deter and punish biometric misuse, data breaches, and unauthorized sharing of personal information. Chapter VII of the Act outlines various offenses and penalties associated with the Aadhaar database. Under Section 37, any person who discloses, transmits, copies, or disseminates identity information collected during enrollment or authentication is liable to be punished with imprisonment for a term which may extend to three years, or a fine up to ten thousand rupees, or both. Section 38 penalizes unauthorized access to the Central Identities Data Repository (CIDR), imposing imprisonment up to three years and a minimum fine of ten lakh rupees for hacking or tampering with the database. Furthermore, Section 39 imposes a penalty for unauthorized use of identity information by requesting entities, making it a punishable offense to use biometric data for purposes other than those consented to by the resident. It is important to note that under Section 47 of the Act, courts can only take cognizance of offenses under the Act upon a formal complaint filed by the UIDAI or an officer authorized by it. However, the government has amended this section to permit individual residents to file complaints directly in cases where their data privacy or identity has been violated, providing a crucial legal pathway for victims to seek justice against fraudulent operators and securing their data privacy.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Seeking Compensation for Financial Fraud Caused by Aadhaar Leaks
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            When a resident suffers financial loss due to Aadhaar data leaks, biometric cloning, or fraudulent AEPS transactions, they can seek financial compensation and legal redressal under various Indian laws. While the Aadhaar Act focuses primarily on criminal penalties for data breaches, it does not contain direct provisions for compensating individual victims of financial fraud. To recover lost funds and claim damages, victims must approach other legal forums. First, under the Information Technology Act, 2000, Section 43A mandates that any body corporate possessing, dealing, or handling sensitive personal data in a computer resource must implement reasonable security practices. If their failure to protect data causes wrongful loss or gain to any person, they are liable to pay damages by way of compensation to the affected individual. Victims can file a claim before the Adjudicating Officer appointed under the IT Act at the state level. Additionally, victims can approach the Consumer Disputes Redressal Commission, filing a case against their bank or the financial intermediary for deficiency in service. The Reserve Bank of India (RBI) customer liability circulars protect consumers, stating that if a banking fraud occurs due to a third party breach or system vulnerability and the customer reports the fraud within three working days, the customer has zero liability for the loss. Compiling detailed bank logs, police complaints, and UIDAI authentication records is critical to support your claim and recover your funds.
          </p>
        </div>
      </div>
    </section>
  );
}
