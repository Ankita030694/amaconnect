import React from "react";

export default function RbiGuidelines({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 4
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            RBI Guidelines on Customer Liability
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
            The regulatory framework governing customer protection and financial liability in electronic transactions is established by the Reserve Bank of India through a landmark circular issued on July 6, 2017, titled Customer Protection, Limiting Liability of Customers in Unauthorized Electronic Banking Transactions. This binding circular is a powerful legal shield for consumers, shifting the financial burden of digital fraud away from the individual and onto the banking institutions, provided specific criteria are met. The underlying philosophy of the central bank guidelines is that banks must maintain secure electronic infrastructure and that customers should not suffer losses due to systemic security failures or third-party breaches where they had no involvement. By establishing clear timeframes and dividing liability based on who is at fault, the central bank has created a predictable legal regime that forces commercial banks to take digital security seriously. Understanding the detailed nuances of these guidelines is essential for any fraud victim seeking to hold their bank accountable and reclaim their funds, as banks frequently attempt to reject liability claims by default. This central bank directive functions as a fundamental consumer rights charter, preventing banks from summarily dismissing customer complaints and establishing a clear, time-bound legal protocol that financial institutions must follow when resolving disputes related to unauthorized electronic transactions. Ultimately, this directive establishes that the safety of the digital banking environment is a shared responsibility, but the financial risk of system-wide failures resides squarely with the banks rather than the retail consumer, ensuring trust in the banking system remains intact.
          </p>
        </div>

        {/* Myth vs Fact Section Type */}
        <div className="bg-[#F4F8FD] border border-[#C2D7E7] rounded-3xl p-6 sm:p-8 my-2 shadow-sm">
          <p className="text-xs text-[#0288D1] font-bold uppercase tracking-wider mb-3">
            Myth vs Fact: Bank Liability in Online Fraud
          </p>
          <h3 className="text-lg font-bold text-[#01579B] mb-4">
            Debunking Misconceptions About Bank Refunds
          </h3>
          <div className="space-y-4">
            <div className="border-b border-[#C2D7E7]/50 pb-4 last:border-0 last:pb-0">
              <p className="text-xs font-bold text-[#D32F2F] uppercase tracking-wide">Myth</p>
              <p className="text-sm text-gray-700 font-semibold mt-0.5">If money is debited from my account due to online fraud, the bank is never responsible for refunding it.</p>
              <p className="text-xs font-bold text-[#388E3C] uppercase tracking-wide mt-2">Fact</p>
              <p className="text-sm text-gray-600 mt-0.5">Under the RBI circular, if the fraud is due to a system breach or a third-party compromise reported within three working days, the customer has zero liability, and the bank must refund the full amount.</p>
            </div>
            <div className="border-b border-[#C2D7E7]/50 pb-4 last:border-0 last:pb-0">
              <p className="text-xs font-bold text-[#D32F2F] uppercase tracking-wide">Myth</p>
              <p className="text-sm text-gray-700 font-semibold mt-0.5">If I accidentally share an OTP or PIN with a scammer, I lose all rights to complain or seek money back.</p>
              <p className="text-xs font-bold text-[#388E3C] uppercase tracking-wide mt-2">Fact</p>
              <p className="text-sm text-gray-600 mt-0.5">While customer negligence (sharing OTP) makes you liable for transactions until you report the fraud, the bank is fully liable for any subsequent unauthorized transactions that occur after you request them to freeze your account.</p>
            </div>
            <div className="border-b border-[#C2D7E7]/50 pb-4 last:border-0 last:pb-0">
              <p className="text-xs font-bold text-[#D32F2F] uppercase tracking-wide">Myth</p>
              <p className="text-sm text-gray-700 font-semibold mt-0.5">The bank can take several months or years to credit my account while they conduct their internal fraud investigation.</p>
              <p className="text-xs font-bold text-[#388E3C] uppercase tracking-wide mt-2">Fact</p>
              <p className="text-sm text-gray-600 mt-0.5">The RBI circular mandates that the bank must credit a shadow reversal of the stolen funds to the customer's account within ten working days from the date of reporting the unauthorized transaction.</p>
            </div>
          </div>
        </div>

        <div className="space-y-10">
          {/* H3: Zero Liability for Unauthorized Transactions */}
          <div className="flex flex-col gap-3">
            <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
              Zero Liability for Unauthorized Transactions
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed text-justify">
              Zero customer liability is the gold standard of protection under the RBI circular, ensuring that the victim does not lose a single rupee due to unauthorized digital activity. According to the guidelines, a customer has absolutely zero liability in two distinct scenarios. First, if the unauthorized transaction occurs due to a proven security breach or fraud within the bank's own systems, the customer is protected regardless of whether they report the incident or not. Second, and more commonly, a customer enjoys zero liability in cases of third-party breaches where the security compromise occurs neither due to the bank's system nor due to the customer's negligence, but lies elsewhere in the digital payment ecosystem. To qualify for zero liability in this second scenario, the customer must report the unauthorized transaction to the bank within three working days of receiving the transaction alert. Once reported, the bank is legally required to credit the shadow reversal of the disputed amount back into the customer's account within ten working days, ensuring that the customer does not suffer liquidity issues while the bank carries out its investigation. This immediate credit requirement is a crucial mechanism that protects consumers from financial distress, shifting the temporary carrying cost of the disputed funds onto the banking institution during the investigation period.
            </p>
          </div>

          {/* H3: Limited Liability rules for Customer Neglect */}
          <div className="flex flex-col gap-3">
            <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
              Limited Liability rules for Customer Neglect
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed text-justify">
              While the RBI guidelines offer exceptional protection, they also outline situations where the customer may face limited liability or complete liability, particularly in cases involving customer neglect. Under the central bank's circular, if the unauthorized transaction occurred because the customer shared their secret banking credentials, such as their debit card PIN, net banking password, or transaction OTP, the customer must bear the entire financial loss until the unauthorized transaction is reported to the bank. Any loss occurring after the transaction is officially reported will be borne entirely by the bank. Furthermore, if the security compromise lies elsewhere in the system and the customer is not at fault, but delays reporting the incident beyond the three day window, the customer's liability becomes limited. If reported within four to seven working days, the maximum liability for the customer is capped between five thousand rupees and twenty-five thousand rupees, depending on the type of bank account and card tier. If the delay exceeds seven working days, the customer's liability is determined in accordance with the bank's board-approved policy, highlighting the absolute necessity of immediate notification. This tiered system underscores the fact that while consumers are heavily protected, they must exercise due diligence and act with urgency to preserve their full legal rights under the central banking framework.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
