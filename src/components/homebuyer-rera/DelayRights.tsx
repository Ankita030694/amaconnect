import React from "react";

export default function DelayRights({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 2
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Homebuyer Rights against Project Delays
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
            Project delays have long been the primary source of conflict in the Indian real estate market. Under the RERA framework, homebuyers are equipped with clear, statutory remedies to protect their capital and hold developers accountable for missed project deadlines.
          </p>
        </div>

        <div className="space-y-10">
          {/* H3: Right to Withdraw and Claim Full Refund */}
          <div className="flex flex-col gap-3">
            <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
              Right to Withdraw and Claim Full Refund
            </h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
              Under Section 18 of the Real Estate, Regulation and Development, Act, a homebuyer is granted an absolute right to withdraw from a project if the developer fails to complete the construction or hand over possession of the unit in accordance with the terms of the agreement for sale. When a builder misses the contractually agreed completion date, including any grace periods, the buyer is under no legal obligation to wait indefinitely or accept revised timelines. The law permits the buyer to demand a full refund of the entire amount paid to date, along with interest calculated from the date of each payment to the date of actual refund. The interest rate is prescribed by state RERA rules, which is typically pegged at the State Bank of India marginal cost of funds based lending rate plus two percent. This interest acts as compensation for the loss of capital use. If the developer fails or refuses to refund the money, the buyer can file a formal complaint with the RERA authority. The Supreme Court of India has repeatedly upheld this right, declaring that buyers cannot be forced to accept delayed possession or be bound by one-sided agreements. This ensures consumers can safely recover their hard-earned money and walk away from failing projects.
            </p>
          </div>

          {/* H3: Right to Monthly Interest for Delayed Possession */}
          <div className="flex flex-col gap-3">
            <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
              Right to Monthly Interest for Delayed Possession
            </h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
              Alternatively, if a homebuyer decides not to withdraw from the project and chooses to wait for construction to finish, they have the legal right to claim monthly interest for every month of delay. According to Section 18, the developer is required to pay interest to the buyer for every single month of delay starting from the original committed possession date up until the actual date the occupancy certificate is obtained and physical possession is offered. This monthly interest serves as compensation for the buyer's ongoing financial burdens, such as paying rent for temporary housing or paying interest on home loans while waiting for their property. The rate of interest is similarly set at the State Bank of India lending rate plus two percent. Developers are legally prohibited from adjusting or offsetting these interest payments against other charges without the express written consent of the buyer. If the builder refuses to pay this monthly interest, the buyer can approach the state RERA authority for enforcement. The regulator has the authority to issue execution orders, and if the builder fails to comply, the amount can be recovered as arrears of land revenue, providing a strong mechanism to hold developers financially accountable for delays.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
