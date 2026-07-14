import React from "react";

export default function ChequeOverview({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 1
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Understanding Cheque Dishonor in India
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
            In modern commercial transactions, a cheque remains a vital instrument for facilitating payments and securing credit. However, when a cheque is presented to a banking institution and is returned unpaid, it is legally termed as dishonor. Under the Negotiable Instruments Act, 1881, cheque dishonor is not merely a breach of contract but also a criminal offense under Section 138, subject to specific conditions. The statutory framework is designed to promote credibility in banking transactions and protect honest payees from drawer negligence or fraudulent intent.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[#FAF9F5] rounded-3xl p-6 border border-gray-100">
            <h3 className="text-base sm:text-lg font-bold text-[#2D2219] mb-3">
              Key Parties Involved
            </h3>
            <ul className="space-y-3 text-xs sm:text-sm text-gray-600">
              <li className="leading-relaxed">
                <strong className="text-gray-900">The Drawer:</strong> The individual or entity who signs and issues the cheque to initiate the payment.
              </li>
              <li className="leading-relaxed">
                <strong className="text-gray-900">The Drawee:</strong> The bank where the drawer holds the account, directed to pay the specified sum.
              </li>
              <li className="leading-relaxed">
                <strong className="text-gray-900">The Payee:</strong> The beneficiary or person to whom the cheque is addressed and is meant to receive the funds.
              </li>
              <li className="leading-relaxed">
                <strong className="text-gray-900">Holder in Due Course:</strong> Any person who possesses the instrument for legal consideration and in good faith.
              </li>
            </ul>
          </div>

          <div className="bg-[#FAF9F5] rounded-3xl p-6 border border-gray-100">
            <h3 className="text-base sm:text-lg font-bold text-[#2D2219] mb-3">
              The Cheque Return Memo
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed text-justify">
              When a cheque bounces, the drawee bank issues an official document called a Cheque Return Memo to the payee bank. This memo is a crucial legal document. It records the exact date of presentation, the date of return, and the statutory reason for non-payment, such as insufficient funds or signature mismatch. The 30 day limitation period for sending a mandatory legal notice under Section 138 begins exactly on the day the payee receives this return memo from their own bank.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="text-lg font-bold text-[#2D2219]">
            The Objective of Section 138 NI Act
          </h3>
          <p className="text-sm text-gray-600 leading-relaxed text-justify">
            The parliament introduced Section 138 into the Negotiable Instruments Act to enhance the acceptability of cheques in settlement of liabilities by making the drawer criminally liable in case of dishonor. The provision acts as a strong deterrent, ensuring that drawer commitments are honored. Crucially, the Supreme Court has clarified that Section 138 is a regulatory offense designed to enforce civil recoveries through a criminal trial process, creating a unique hybrid remedy for lenders and business operators.
          </p>
        </div>
      </div>
    </section>
  );
}
