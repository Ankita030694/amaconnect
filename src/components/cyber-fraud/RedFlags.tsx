import React from "react";

export default function RedFlags({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 8
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Red Flags of Digital Payment Frauds
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
            Prevention remains the most effective defense against the growing menace of digital payment frauds. While regulatory guidelines and legal recovery mechanisms exist, avoiding the scam entirely saves victims from significant stress, legal delays, and temporary loss of capital. Fraudsters rely heavily on social engineering, exploiting urgency, fear, or greed to bypass advanced technological security barriers. By mimicking legitimate service providers, government officials, or business partners, they manipulate victims into performing actions that compromise their accounts. Recognizing the psychological and technical patterns of these digital traps is crucial for maintaining personal security. In the vast majority of cases, scammers drop subtle clues or display behavioral anomalies, known as red flags, which can immediately alert a vigilant user to the fraudulent nature of the interaction. Developing a keen eye for these warning signs is the primary line of defense in the digital age, enabling users to identify and abort potential scams before any funds leave their account. This preemptive security discipline includes cross-checking URLs, refusing to share verification tokens, and verifying caller identities through independent, verified channels. Ultimately, by cultivating a state of informed skepticism during unexpected financial requests, users can effectively block scammers at the point of contact, rendering their social engineering strategies completely useless. This proactive approach not only shields individual wealth but also disrupts the broader illicit economy, as scammers are forced to abandon their targets when confronted with well-informed and cautious consumers.
          </p>
        </div>

        {/* Red Flags List Section Type */}
        <div className="bg-red-50 border border-red-200 rounded-3xl p-6 sm:p-8 my-2 shadow-sm">
          <p className="text-xs text-red-600 font-bold uppercase tracking-wider mb-3">
            Critical Warning Signs: Red Flags List
          </p>
          <h3 className="text-lg font-bold text-red-950 mb-4">
            Never Ignore These Digital Warning Signals
          </h3>
          <ul className="space-y-4 text-sm text-gray-700">
            <li className="flex items-start gap-3">
              <span className="text-red-600 font-bold mt-0.5">⚠️</span>
              <div>
                <p className="font-bold text-red-950">Receive Payment QR Codes</p>
                <p className="text-xs text-gray-600 mt-0.5">Any request asking you to scan a QR code or enter your UPI PIN to receive money is a scam. UPI PINs are only used to send money.</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-600 font-bold mt-0.5">⚠️</span>
              <div>
                <p className="font-bold text-red-950">Urgent Request for OTP or Passwords</p>
                <p className="text-xs text-gray-600 mt-0.5">Representatives from banks, telecom providers, or payment systems will never call you to request your OTP, password, or security answers.</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-600 font-bold mt-0.5">⚠️</span>
              <div>
                <p className="font-bold text-red-950">Installing Remote Access Apps</p>
                <p className="text-xs text-gray-600 mt-0.5">Never download screen mirroring applications like Anydesk or TeamViewer on the advice of an unknown caller, as it gives them full control over your device.</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-600 font-bold mt-0.5">⚠️</span>
              <div>
                <p className="font-bold text-red-950">Sponsored Search Engine Helpline Numbers</p>
                <p className="text-xs text-gray-600 mt-0.5">Avoid calling numbers listed in sponsored search ads. Always cross-check numbers on the official website of the company or bank.</p>
              </div>
            </li>
          </ul>
        </div>

        <div className="space-y-10">
          {/* H3: Suspicious QR Codes and OTP Requests */}
          <div className="flex flex-col gap-3">
            <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
              Suspicious QR Codes and OTP Requests
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed text-justify">
              Suspicious QR codes and unsolicited OTP requests are two of the most prevalent red flags in digital transaction frauds. A fundamental rule of the Unified Payments Interface ecosystem that every user must remember is that scanning a QR code or entering a UPI PIN is strictly required only to send or pay money, never to receive money. Scammers frequently list items for sale on online marketplaces and contact sellers, claiming they want to buy the item and send a QR code to transfer the payment. Scanning this code and entering the PIN immediately debits the victim's account instead of crediting it. Similarly, One Time Passwords serve as the final security gate for sensitive banking transactions, including password resets, beneficiary additions, and fund transfers. Legitimate banks and financial institutions will never call, text, or email a customer to request an OTP. Any phone call where the operator demands an OTP under the threat of blocking an account or cancelling a transaction is a definitive indicator of fraud, and the interaction must be terminated immediately. Recognizing these basic structural parameters of the payment ecosystem allows consumers to instantly identify when an transaction workflow is being manipulated, providing a simple yet foolproof shield against the most common technical exploits used by cyber criminals today.
            </p>
          </div>

          {/* H3: Fake Customer Care Numbers and Search Ads */}
          <div className="flex flex-col gap-3">
            <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
              Fake Customer Care Numbers and Search Ads
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed text-justify">
              The proliferation of fake customer care numbers on search engine ads and social media platforms has become a highly successful vector for cyber criminals. When individuals face issues with bank transfers, courier deliveries, or utility payments, they frequently search Google or social platforms for customer care contact details. Fraudsters exploit this behavior by publishing fake helpline numbers on search ads, Google Maps listings, and social media comments. When a victim dials these numbers, the fraudulent operator answers professionally, pretending to represent the organization. They convince the victim that to resolve the issue, they must install a remote screen sharing application or make a nominal verification payment of ten rupees through a specific link. Once the screen sharing app is active, the fraudster views the victim's banking credentials and OTPs, executing unauthorized transfers in real time. Consumers must verify contact information only through the official websites of the respective organizations and avoid trusting search engine advertisements blindly. This standard operational practice is critical because search engine algorithms do not verify the legitimacy of paid advertisements, allowing criminals to buy premium visibility and impersonate trusted brands, utilities, and public departments with ease.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
