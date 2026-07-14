import React from "react";

export default function InterestRights({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 8
          </span>
          <h2 className="text-xl sm:text-2xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Legal Rights against Arbitrary Interest Hikes
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed text-justify mb-4">
            Indian financial regulations establish clear limits on interest pricing, providing borrowers with robust legal defenses against the usurious rates charged by predatory lending applications. Many illegal digital lending platforms operate under the guise of micro-loans, charging exorbitant interest rates that can translate to annual percentage rates exceeding three hundred percent. These platforms deliberately obscure the true cost of borrowing by quoting weekly or daily rates, which makes the loan seem affordable at first glance. However, under Section 21A of the Banking Regulation Act and various state-specific money lenders acts, courts have the power to intervene when interest rates are found to be unconscionable and usurious. Legitimate financial transactions are governed by the principle of reasonable pricing, and courts frequently strike down contracts where the interest charged is deemed to be extortionate or designed to trap the borrower in perpetual debt. Furthermore, the Reserve Bank of India has repeatedly emphasized that lending rates must be fair, transparent, and aligned with the operational costs of the financial institution rather than being used as a tool for exploitation. When a borrower is subjected to such extreme interest pricing, they have the legal right to challenge the contract and offer to pay only the principal amount along with a reasonable, legally permissible rate of interest. Citing state money lending regulations in discussions with lenders often forces them to renegotiate, as they are fully aware that their exorbitant rates would never stand scrutiny in a court of law. This legal stand protects the borrower from paying compounded interest on penalties, establishing a fair basis for settling the actual principal without accepting predatory conditions.
          </p>
        </div>

        <div>
          <h3 className="text-base font-bold text-[#2D2219] mb-3">Legal Protections against Accumulating Penalties</h3>
          <p className="text-sm text-gray-600 leading-relaxed text-justify">
            One of the most predatory tactics used by digital lenders is the rapid and illegal accumulation of penalty fees and late payment charges. When a borrower misses a payment deadline even by a single day, these apps automatically apply massive compounding penalties, often adding fifty percent or more of the principal amount as a flat penalty fee within a week. In many cases, the total outstanding demand doubles or triples within a month due to these arbitrary charges, making it impossible for the borrower to pay. Under the guidelines of the Reserve Bank of India, this practice is strictly prohibited. The regulator has issued explicit directives stating that penal interest or charges must be reasonable and cannot be capitalized. This means lenders cannot charge interest on the penalty itself, nor can they use compounding penalties to exponentially increase the debt size. Legitimate financial institutions are required to clearly disclose all penal charges upfront in the Key Fact Statement, and any penalty applied must be proportional to the default. Predatory apps ignore these directives entirely, using arbitrary penalties as a tool of financial coercion. Borrowers should know that they have no legal obligation to pay these unauthorized, compounding penalties. During debt settlement negotiations, the borrower can legally insist on the waiver of all accumulated penalties and late fees, offering only the legitimate principal amount. Citing the RBI circular on fair penal charges provides strong leverage, as it forces the lender to acknowledge that their penalty structures are illegal and unenforceable. Having this regulatory backing helps you resist their psychological pressure, as you have a solid legal basis to demand the removal of all capitalized late fees during any settlement dialogue.
          </p>
        </div>

        <div>
          <h3 className="text-base font-bold text-[#2D2219] mb-3">RBI Guidelines on Loan Pricing Caps</h3>
          <p className="text-sm text-gray-600 leading-relaxed text-justify">
            The Reserve Bank of India has established a clear regulatory framework governing the pricing of digital loans, ensuring that borrowers are protected from exploitative financial terms. Under the RBI guidelines for digital lending, all regulated entities including banks and Non-Banking Financial Companies are required to present the Annual Percentage Rate, which represents the comprehensive cost of the loan including interest, processing fees, and all other charges, in a highly transparent format. Lenders are strictly prohibited from changing the interest rate or terms of the loan during the tenure without explicit prior notification and the borrower written consent. Furthermore, the Reserve Bank of India mandates that all lending rates must be tied to a board-approved policy, ensuring that the pricing model is objective and based on actual cost metrics rather than arbitrary decisions. Any digital lending app that charges rates exceeding these internal policies or fails to provide a Key Fact Statement is in direct violation of the digital lending guidelines. When confronted with arbitrary hikes or hidden fees, borrowers have the right to lodge a formal complaint with the RBI Integrated Ombudsman. For unregistered apps, their entire operations are illegal, meaning they violate not only the pricing guidelines but also the basic requirement of holding a valid lending license. Understanding these pricing regulations provides borrowers with the necessary legal framework to challenge predatory claims, allowing them to refuse arbitrary interest hikes and settle their obligations under fair, transparent, and legally recognized financial terms. This systemic framework ensures that all charges are calculated using transparent methods, eliminating the risk of unexpected fees that typically plague unauthorized mobile lending products.
          </p>
        </div>
      </div>
    </section>
  );
}
