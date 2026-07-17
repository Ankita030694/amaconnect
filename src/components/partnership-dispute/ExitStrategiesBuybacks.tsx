import React from "react";

export default function ExitStrategiesBuybacks({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 8
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Exit Strategies and Share Buybacks
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
            A partner retirement or founder exit can jeopardize company operations if not managed through predefined exit strategies. Clear valuation formulas, buyback terms, and name rights agreements prevent transition conflicts.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Drafting Clear Valuation and Buyback Provisions
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            A well-structured exit strategy is a hallmark of a mature business agreement, ensuring that a partner departure does not lead to financial distress or litigation. The partnership deed or co-founder agreement must contain detailed provisions regarding share valuation and buyback mechanisms. Valuation disputes are incredibly common, as outgoing partners often demand unrealistic payouts for their share of the business. To prevent this, the agreement should define the exact valuation methodology to be used, such as book value, discounted cash flow, or valuation determined by an independent chartered accountant. The agreement must outline a clear timeline and procedure for the buyback, specifying how the purchase price will be paid, such as in quarterly installments over twelve to twenty-four months, to prevent immediate cash flow strain on the business. It is also essential to include a right of first refusal, which dictates that if a founder wants to sell their shares to a third party, they must first offer them to the remaining co-founders at the same price. By incorporating these clear valuation and buyback provisions, the co-founders establish a fair, predictable exit process that protects both the departing individual and the ongoing business from financial disruption, protecting corporate liquidity while offering a clean legal exit path for founders who choose to pursue other professional opportunities.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Handling Retiring Partners and Name Rights
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            When a partner retires from a partnership firm, their departure triggers several statutory requirements under the Indian Partnership Act, 1932. Under Section 32 of the Act, a partner can retire with the consent of all other partners, in accordance with an express agreement in the deed, or by giving written notice to all other partners in a partnership at will. To terminate their liability to third parties for future acts of the firm, the retiring partner or the remaining partners must publish a public notice of retirement in the official gazette and in at least one vernacular newspaper. Until this public notice is given, the retiring partner remains jointly and severally liable for any debts or obligations incurred by the firm, highlighting the critical importance of executing this administrative step immediately upon retirement. Another sensitive issue during retirement is the ownership of the firm name and goodwill. Under Section 36 of the Act, unless there is a contract to the contrary, a retiring partner has the right to carry on a competing business and advertise it, but they cannot use the firm name, represent themselves as carrying on the business of the old firm, or solicit the customers of the old firm. The partnership deed must explicitly state whether the retiring partner retains any rights to the firm name, trade secrets, or brand elements, and outline any non-compete restrictions. Clarifying these name rights and public notice requirements prevents post-retirement litigation and protects the brand identity built by the remaining partners.
          </p>
        </div>
      </div>
    </section>
  );
}
