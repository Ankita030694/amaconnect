import React from "react";

export default function CyberFraudLandscape({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 1
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            The Landscape of Cyber Fraud in India
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
            The rapid digitization of the Indian financial ecosystem, fueled by the explosive adoption of the Unified Payments Interface, mobile banking applications, and digital wallets, has unfortunately been accompanied by a corresponding surge in highly sophisticated cyber crimes. The National Cyber Crime Reporting Portal registers hundreds of thousands of financial fraud complaints annually, illustrating how rapid technological progress can be weaponized by malicious actors. In this complex threat environment, victims frequently feel completely helpless, operating under the mistaken belief that once funds leave their bank account, they are lost forever. However, Indian jurisprudence has evolved significantly to establish robust regulatory frameworks, judicial remedies, and institutional mechanisms designed to safeguard consumers and facilitate the tracing and recovery of stolen assets. Understanding this legal landscape is the first step toward effective recourse, requiring victims to navigate a web of statutory provisions, regulatory directives, and law enforcement protocols that work in tandem to hold financial institutions accountable, track illicit monetary flows, and restore financial security to affected citizens. This guide offers a comprehensive analysis of the legal avenues available, the rights of digital banking consumers under Reserve Bank of India circulars, and the practical steps needed to freeze scammer accounts, file effective police complaints, and claim compensation for unauthorized electronic financial transactions under the Information Technology Act 2000. By acting within the critical timelines and leveraging the specialized adjudication machinery, victims of online fraud can successfully reclaim their stolen funds and ensure that systemic negligence by financial intermediaries is legally addressed.
          </p>
        </div>

        <div className="space-y-10">
          {/* H3: Common Scams: UPI Phishing and Identity Theft */}
          <div className="flex flex-col gap-3">
            <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
              Common Scams: UPI Phishing and Identity Theft
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed text-justify">
              UPI phishing and identity theft represent the vanguard of contemporary digital fraud in India, exploiting human psychology and technological vulnerabilities in equal measure. Scammer tactics have evolved beyond rudimentary phishing emails into highly localized and convincing social engineering operations. Common mechanisms include sending fraudulent collect requests on popular applications like Google Pay, PhonePe, or Paytm, where victims are misled into entering their secret UPI PIN under the false pretense of receiving lottery winnings, cashbacks, or government subsidies. Additionally, identity theft frequently manifests through SIM swapping, where fraudsters procure duplicate SIM cards from telecom providers using forged identity credentials, thereby intercepting the critical One Time Passwords required to execute high-value banking transactions. Another rampant scam involves remote access mirroring applications, where victims are coerced into downloading apps like Anydesk, TeamViewer, or RustDesk under the guise of customer service support, granting perpetrators complete visibility and control over their mobile screens and banking credentials. Under Indian law, these deceptive actions attract severe criminal penalties under the Information Technology Act 2000 and the Bharatiya Nyaya Sanhita, but preventing terminal financial losses requires immediate awareness of how these digital traps operate and the channels available to report them before the trail grows cold. To establish a strong case for recovery, victims must document every communication, transaction receipt, and phone number used by the fraudsters, as this digital evidence forms the bedrock of subsequent legal filings.
            </p>
          </div>

          {/* H3: Legality of Electronic Financial Transactions */}
          <div className="flex flex-col gap-3">
            <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
              Legality of Electronic Financial Transactions
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed text-justify">
              The legal validity and regulatory oversight of electronic transactions in India are primarily governed by the Information Technology Act 2000 and rules prescribed by the Reserve Bank of India under the Payment and Settlement Systems Act 2007. Section 10A of the Information Technology Act explicitly validates contracts formed through electronic means, establishing that electronic signatures, click-wrap agreements, and digital records carry the same legal weight as their traditional physical counterparts. Furthermore, electronic financial transactions executed via UPI, Immediate Payment Service, National Electronic Funds Transfer, or Real Time Gross Settlement are subject to strict security standards mandated by the central bank, including mandatory multi-factor authentication, end-to-end encrypted communication channels, and secure transaction logs. The National Payments Corporation of India acts as the facilitating body for retail payment systems, enforcing operational guidelines that member banks and third-party application providers must strictly comply with. When a dispute arises regarding an unauthorized electronic transaction, the burden of proof regarding security breaches and client authorization shifts dynamically based on regulatory compliance. This statutory framework ensures that electronic transactions are not merely convenient tools but are legally binding processes governed by comprehensive security expectations, where any failure by financial intermediaries can make them legally liable to compensate consumers. Thus, digital transactions are backed by a robust legal regime that protects consumer interests and holds banking entities to high standards of operational diligence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
