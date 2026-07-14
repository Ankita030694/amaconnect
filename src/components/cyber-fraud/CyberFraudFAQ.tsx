import React from "react";

export default function CyberFraudFAQ({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 9
          </span>
          <h2 className="text-xl sm:text-2xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed text-justify mb-8">
            Find quick, authoritative answers to the most common questions regarding banking fraud, UPI scams, customer liability rules, and police cell complaints under Indian law.
          </p>

          <div className="space-y-6">
            <div>
              <h3 className="text-base font-bold text-[#2D2219] mb-2">
                1. What is the very first step I should take if money is fraudulently debited from my account?
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed text-justify">
                You should immediately call the national cyber crime helpline at 1930 and report the incident. This triggers a real-time tracking mechanism through the Citizen Financial Cyber Fraud Reporting System to freeze the money in the recipient's bank account. Following this, immediately notify your bank to block your cards, disable UPI, and freeze your net banking.
              </p>
            </div>

            <div>
              <h3 className="text-base font-bold text-[#2D2219] mb-2">
                2. Under RBI guidelines, am I responsible for losses in case of unauthorized electronic banking transactions?
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed text-justify">
                According to the RBI customer protection guidelines, you have zero liability if the unauthorized transaction occurred due to a system failure within the bank, or a third-party breach where you are not at fault and you report it within three working days. If the report is delayed to four to seven working days, your maximum liability is capped depending on your account and card type.
              </p>
            </div>

            <div>
              <h3 className="text-base font-bold text-[#2D2219] mb-2">
                3. How long does a bank have to refund my money after I report an online fraud?
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed text-justify">
                Once you report the unauthorized electronic transaction, the bank is legally obligated to credit a shadow reversal of the stolen amount back to your bank account within ten working days. This temporary credit remains active while the bank conducts its investigation, ensuring you do not suffer a lack of liquidity during the resolution process.
              </p>
            </div>

            <div>
              <h3 className="text-base font-bold text-[#2D2219] mb-2">
                4. Is it possible to recover money if I voluntarily shared an OTP or scanned a suspicious QR code?
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed text-justify">
                If you voluntarily shared credentials or scanned a QR code, the initial transaction is considered user negligence, and you are responsible for the losses incurred up until you report the breach to the bank. However, the moment you report the fraud to the bank, the bank is fully liable for any subsequent unauthorized transactions that occur after that time.
              </p>
            </div>

            <div>
              <h3 className="text-base font-bold text-[#2D2219] mb-2">
                5. Can the police refuse to register my complaint for an online financial scam?
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed text-justify">
                No, the police cannot refuse to register your complaint. Under Section 154 of the Code of Criminal Procedure, or the corresponding provisions in the new Bharatiya Nagarik Suraksha Sanhita, they are legally bound to register a First Information Report for cognizable offenses, including cyber fraud. If the local station lacks a cyber unit, they must register a Zero FIR and transfer it to the cyber cell.
              </p>
            </div>

            <div>
              <h3 className="text-base font-bold text-[#2D2219] mb-2">
                6. What legal remedies are available to me under the Information Technology Act 2000?
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed text-justify">
                Under Section 46 of the Information Technology Act, you can file a civil petition before the Adjudicating Officer of your state, who possesses the powers of a civil court. You can seek compensation for damages up to five crore rupees from negligent banks, telecom companies, or payment aggregators who failed to maintain reasonable security practices under Section 43A.
              </p>
            </div>

            <div>
              <h3 className="text-base font-bold text-[#2D2219] mb-2">
                7. What evidence do I need to prepare to file a cyber crime complaint?
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed text-justify">
                You should gather comprehensive electronic evidence. This includes bank statements highlighting the fraudulent debit, screenshots of the transaction SMS, receipt or transaction confirmation, screenshots of any WhatsApp or Telegram chats with the scammer, call logs showing the scammer's number, and printouts of any phishing links or emails.
              </p>
            </div>

            <div>
              <h3 className="text-base font-bold text-[#2D2219] mb-2">
                8. What is SIM swapping and how does it affect my bank account security?
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed text-justify">
                SIM swapping is an identity theft technique where a scammer uses forged identity documents to obtain a duplicate SIM card for your mobile number from your telecom service provider. Once active, your original SIM loses signal, and the scammer receives all your phone calls and transaction OTPs, allowing them to access and drain your bank accounts.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
