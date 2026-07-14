import React from "react";

export default function ImmediateActionPlan({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 2
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            The Golden Hours: Immediate Action Plan
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
            The term golden hours in the context of cyber financial fraud refers to the critical initial window of two to three hours immediately following the unauthorized transfer of funds. During this brief period, the stolen money typically resides in transition, moving through intermediary bank accounts or digital wallets before being withdrawn as cash by the fraudsters. If a victim acts within this crucial window, the probability of freezing the transaction and recovering the funds is exceptionally high. Law enforcement agencies and banking institutions have established direct communication links and integrated portals to leverage this timeline, but the success of the system depends entirely on the speed and precision of the victim's response. Delaying action by even a few hours allows perpetrators to layer the transactions across multiple accounts, making the recovery process significantly more complex and legally protracted. Therefore, understanding the immediate steps to take is not just advisory, it is a critical legal necessity that determines whether your hard-earned money can be successfully clawed back. This phase requires a systematic response, including calling the national helpline, notifying the issuing bank, and capturing every shred of transaction data. By following a rigid sequence of actions immediately after discovering the fraud, victims can leverage the inter-bank registry networks to trap the funds before they exit the formal banking sector, making recovery a straightforward administrative matter rather than a prolonged court battle. Ultimately, a victim's actions during these first few hours dictate the speed and feasibility of the entire recovery process, highlighting why public awareness of the golden hours is the single most effective tool against digital thieves.
          </p>
        </div>

        {/* Step Checklist Section Type */}
        <div className="bg-[#FAF9F5] border border-[#EAE6DF] rounded-3xl p-6 sm:p-8 my-2 shadow-sm">
          <p className="text-xs text-[#D4AF37] font-bold uppercase tracking-wider mb-3">
            Step Checklist: Golden Hour Action Plan
          </p>
          <h3 className="text-lg font-bold text-[#2D2219] mb-4">
            Critical Steps to Recover Stolen Funds
          </h3>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#D4AF37]/10 text-[#D4AF37] flex items-center justify-center font-bold text-xs mt-0.5">
                1
              </span>
              <div>
                <p className="text-sm font-bold text-[#2D2219]">Call the National Cyber Helpline (1930)</p>
                <p className="text-xs text-gray-600 mt-0.5">Dial immediately to log the fraud in the Citizen Financial Cyber Fraud Reporting System. Provide the transaction ID, date, bank account number, and amount.</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#D4AF37]/10 text-[#D4AF37] flex items-center justify-center font-bold text-xs mt-0.5">
                2
              </span>
              <div>
                <p className="text-sm font-bold text-[#2D2219]">Contact Your Bank's Fraud Department</p>
                <p className="text-xs text-gray-600 mt-0.5">Report the unauthorized transaction, block your debit/credit cards, freeze your internet banking services, and request a transaction dispute form (chargeback form).</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#D4AF37]/10 text-[#D4AF37] flex items-center justify-center font-bold text-xs mt-0.5">
                3
              </span>
              <div>
                <p className="text-sm font-bold text-[#2D2219]">Collect All Electronic Evidence</p>
                <p className="text-xs text-gray-600 mt-0.5">Take screenshots of the transaction SMS, receipt, WhatsApp chats, call logs, phishing URLs, or emails. Keep these safe for filing the cyber cell complaint.</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#D4AF37]/10 text-[#D4AF37] flex items-center justify-center font-bold text-xs mt-0.5">
                4
              </span>
              <div>
                <p className="text-sm font-bold text-[#2D2219]">File an Official Online Cyber Cell Complaint</p>
                <p className="text-xs text-gray-600 mt-0.5">Visit cybercrime.gov.in and upload the detailed complaint along with the gathered evidence to obtain a formal complaint acknowledgment receipt.</p>
              </div>
            </li>
          </ul>
        </div>

        <div className="space-y-10">
          {/* H3: Reporting to the Bank within Three Hours */}
          <div className="flex flex-col gap-3">
            <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
              Reporting to the Bank within Three Hours
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed text-justify">
              Reporting the unauthorized transaction to your bank within three hours is the most vital step in limiting your personal financial liability under regulatory norms. The Reserve Bank of India has issued clear, binding directives stating that if a customer reports an unauthorized electronic transaction within three banking days, and the security compromise lies within the banking system or is due to a third-party breach where the customer is not at fault, the customer's liability is completely zero. However, reporting within the first three hours is even more critical because it allows the bank's fraud monitoring unit to trigger an immediate recall request to the beneficiary bank. To do this, you must immediately contact the bank's dedicated cyber fraud helpline, block all credit or debit cards, freeze your net banking profile, and request a transaction dispute form. The bank is legally obligated to register your complaint, provide a unique reference ticket number, and initiate an internal investigation. Failing to report the transaction within this initial window or delaying communications can shift the liability onto the customer, especially if the bank can prove that the breach occurred due to customer negligence such as sharing OTPs or credentials. Therefore, contacting your bank within the golden hours serves as a vital legal safeguard, cementing your eligibility for a complete refund and forcing the financial institution to assume the burden of proving any alleged negligence on your part during subsequent disputes.
            </p>
          </div>

          {/* H3: Freezing Scammer Accounts via Police Registry */}
          <div className="flex flex-col gap-3">
            <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
              Freezing Scammer Accounts via Police Registry
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed text-justify">
              Freezing the scammer's bank accounts via the police registry is facilitated by the Citizen Financial Cyber Fraud Reporting System, which is accessible through the national helpline number 1930. When a victim dials 1930, the call is routed to the state's cyber police control room, where a trained operator collects essential details including the victim's bank name, transaction ID, date, amount, and the destination account details. This information is immediately entered into the National Cyber Crime Portal's live dashboard, which is directly linked to all major banking institutions, payment aggregators, and digital wallets in India. Once the entry is logged, the system automatically alerts the beneficiary bank, commanding them to temporarily block or freeze the disputed funds in the scammer's account. This prevents the fraudster from withdrawing the money or moving it to other accounts. The police registry acts as a real-time liaison, bypassing traditional bureaucratic delays that previously allowed criminals to escape with stolen funds. Securing an immediate freeze through this police network is the most effective way to preserve the money while the formal investigation proceeds. This rapid intervention mechanism bridges the gap between law enforcement and financial operations, ensuring that the swift action taken by the victim is immediately converted into an enforceable administrative freeze on the scammer's assets, significantly increasing the probability of a successful fund reversal.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
