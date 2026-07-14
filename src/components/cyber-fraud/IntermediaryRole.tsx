import React from "react";

export default function IntermediaryRole({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 6
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Role of Intermediaries in Fraud Prevention
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
            In the modern digital ecosystem, the prevention of online financial fraud cannot rest solely on the shoulders of the end-user or law enforcement agencies; it requires the active and legally mandated participation of intermediaries, including telecommunications service providers, internet service providers (ISPs), and digital payment gateways. Under Section 79 of the Information Technology Act, intermediaries enjoy safe harbor protection from liability for third-party content or transactions, but this immunity is strictly conditional upon their compliance with due diligence guidelines and prompt action upon receiving notice of unlawful activity. Telecom operators, for instance, are obligated to enforce strict Know Your Customer (KYC) protocols during SIM card issuance to prevent SIM-swapping scams, while ISPs must monitor network traffic for phishing activities and block fraudulent domains identified by authorities. Similarly, payment gateways and aggregators are governed by Reserve Bank of India (RBI) mandates that require real-time transaction monitoring, implementation of multi-factor authentication, and the establishment of fraud detection systems capable of flagging suspicious patterns. When an intermediary fails to execute these statutory duties, they risk losing their safe harbor protection, exposing themselves to substantial civil liability for negligence under Section 43A of the Information Technology Act. This legal framework ensures that intermediaries act as active gatekeepers rather than passive pipes, forcing them to implement robust cybersecurity measures and cooperate seamlessly with law enforcement agencies. By holding these tech platforms accountable, the law establishes a co-regulatory model where private infrastructure providers must actively defend users from cybercriminals, bridging the gap between technological vulnerability and regulatory enforcement.
          </p>
        </div>

        <div className="space-y-10">
          {/* H3: Telecom and Internet Service Providers */}
          <div className="flex flex-col gap-3">
            <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
              Telecom and Internet Service Providers
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed text-justify">
              Telecommunications companies and ISPs serve as the primary gateway to the digital world, and their obligations in preventing cyber fraud are heavily regulated under licensing agreements and the Information Technology Act. The most prevalent vector for financial fraud is SIM swapping, where scammers use forged identity documents to convince a telecom provider to issue a duplicate SIM card, thereby routing all OTPs and banking alerts to the criminal. To combat this, guidelines from the Department of Telecommunications (DoT) mandate that telecom companies verify subscriber identities using biometric or digital KYC before activating any duplicate SIM card. Additionally, telecom operators are required to implement a mandatory cooling-off period of at least twenty-four hours during which SMS services are disabled on newly issued SIM cards, preventing immediate unauthorized financial transactions. On the ISP front, companies are obligated to retain traffic logs and internet protocol (IP) address allocations for at least two years to facilitate forensic tracking of cybercriminals. ISPs must also execute block orders issued by the Ministry of Electronics and Information Technology (MeitY) to take down phishing sites and malicious domains immediately. If a telecom company or ISP acts negligently, such as by bypassing KYC verification for a subscriber or ignoring warning signs of fraud, they can be held liable for facilitating identity theft under Section 66C and Section 43A of the Information Technology Act. In such cases, victims can petition the Adjudicating Officer to demand substantial damages, as these service providers have a statutory duty of care to protect consumer details and communications network integrity, making them active partners in the enforcement framework.
            </p>
          </div>

          {/* H3: Digital Payment Gateways and Aggregators */}
          <div className="flex flex-col gap-3">
            <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
              Digital Payment Gateways and Aggregators
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed text-justify">
              Digital payment gateways and aggregators represent the critical financial conduits through which fraudulent transactions are completed, placing them under intense regulatory scrutiny regarding fraud prevention. Under RBI guidelines and the Payment and Settlement Systems Act, payment intermediaries must deploy advanced fraud monitoring tools that operate in real time to detect and block transactions displaying anomalous characteristics. These portals are legally obligated to execute multi-factor authentication, ensure secure encryption standards, and comply with strict transaction limits designed to mitigate potential fraud velocity. Furthermore, they are required to coordinate with beneficiary banks to execute immediate fund freezing orders when a transaction is reported as fraudulent on the national cyber crime helpline database. When payment aggregators fail to implement these fraud control measures, or ignore reports of fraudulent merchant accounts on their platform, they can be held liable for administrative failures and systemic negligence. Section 43A of the Information Technology Act is frequently invoked against these entities if security gaps in their transaction processing software facilitate unauthorized account access or fund transfers. This establishes a clear legal standard: payment processors are not mere neutral channels, but are active gatekeepers of the financial system who must protect consumer transactions. By enforcing these stringent compliance rules, regulators aim to minimize the window of opportunity for cybercriminals, ensuring that digital payment channels remain safe, secure, and resilient against evolving hacking methodologies. Through RBI's Master Directions, these intermediaries are forced to audit their systems regularly, establishing a robust framework that protects the financial interests of millions of digital transaction users nationwide.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
