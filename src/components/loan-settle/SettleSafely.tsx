import React from "react";
import Link from "next/link";

export default function SettleSafely({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 6
          </span>
          <h2 className="text-xl sm:text-2xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Resolving Loan Debts: Settle Safely
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed text-justify mb-4">
            Resolving outstanding loan debts through a safe settlement process requires a combination of patience, clear communication, and legal vigilance. For borrowers who have suffered harassment and are dealing with high interest rates, the ultimate goal is to close the account permanently without exposing themselves to further exploitation. A secure settlement ensures that the lender accepts the paid amount as full and final satisfaction of the debt, preventing them or any subsequent collection agency from raising future claims. By insisting on written agreements and official confirmation, borrowers can safely navigate the settlement process, protect their credit rating, and permanently eliminate the threat of recovery agents.
          </p>
        </div>

        <div>
          <h3 className="text-base font-bold text-[#2D2219] mb-3">Negotiating a One-Time Settlement (OTS)</h3>
          <p className="text-sm text-gray-600 leading-relaxed text-justify">
            A One-Time Settlement is a formal agreement where the lender agrees to accept a lower amount than the total outstanding balance to close the loan account. When negotiating an OTS, especially with digital lending platforms, the borrower should offer to pay the principal loan amount while requesting a complete waiver of the inflated interest, processing fees, and late penalties. It is absolutely essential that all negotiations are conducted in writing, preferably via official email, rather than over phone calls or WhatsApp. Do not make any payment until the lender provides a formal settlement letter on their official letterhead, specifying the agreed settlement amount, the payment deadline, and a clear statement that the account will be closed with no further liability. Verbal promises from recovery agents are completely worthless and are often used as a trick to extract partial payments before resuming harassment. If you need help structuring your proposal or understanding the terms of a settlement offer, you can ask a question in our{" "}
            <Link href="/ask-me-anything" className="text-[#D4AF37] font-bold hover:underline">
              Ask Me Anything forum
            </Link>{" "}
            to get feedback from legal experts.
          </p>
        </div>

        <div>
          <h3 className="text-base font-bold text-[#2D2219] mb-3">Closing the Loan and Obtaining an NOC</h3>
          <p className="text-sm text-gray-600 leading-relaxed text-justify">
            The final step in the debt settlement process is obtaining a No Objection Certificate or a No Dues Certificate from the lender after the settled payment has been made. The NOC is a vital legal document certifying that the loan has been fully repaid and that the lender has no remaining claims against the borrower. Upon receiving the settlement payment, registered lenders are legally required to issue this certificate and update your credit status with bureaus like CIBIL within thirty days. Ensure that the NOC clearly references your loan account number, your full name, the settlement letter details, and states that the outstanding balance is now zero. For illegal 7-day lending apps, which do not issue official NOCs or report to credit bureaus, your primary objective is to secure written confirmation of closure via their official support channels, while simultaneously blocking all access to your device. Keep copies of the settlement letter, payment receipts, and the NOC or closure email stored safely, as these documents are your ultimate proof of debt resolution if any future dispute arises.
          </p>
        </div>
      </div>
    </section>
  );
}
