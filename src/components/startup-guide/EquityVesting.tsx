import React from "react";

export default function EquityVesting({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 border-b border-gray-100 pb-12">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 7
          </span>
          <h2 className="text-xl sm:text-2xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Founders Agreement and Equity Vesting
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed text-justify mb-6">
            A carefully structured founders agreement is the ultimate cornerstone of a sustainable startup, ensuring alignment and long term commitment among the founding team. The most critical component of this agreement is the equity vesting schedule, which controls how founders earn their shares over time rather than receiving their entire equity allocation upfront on day one. A standard, industry accepted vesting schedule spans a period of four years with a one year cliff. Under this model, if a founder leaves the startup before completing twelve full months of service, they walk away with zero percent of their allocated shares. This one year cliff protects the company and the remaining co-founders from having a significant portion of their cap table locked up by someone who departed early in the venture's lifecycle. After the cliff period is completed, the remaining shares vest incrementally on a monthly or quarterly basis over the next thirty six months. For instance, a founder with a four year monthly vesting schedule would vest one forty eighth of their total equity each month. Implementing such structured schedules ensures that founders are rewarded proportionally for their continuous contributions to the business, aligning their personal financial incentives with the long term growth and success of the company. Investors universally look for these vesting provisions during due diligence, as it mitigates the risk of a key founder departing with a massive block of equity, which could make the company uninvestable for subsequent rounds. Consequently, establishing clear cliff boundaries and monthly distributions is not just a formal exercise but a survival mechanism for early stage entities.
          </p>
        </div>

        <div className="bg-[#FAF9F5] border border-gray-100 rounded-3xl p-6 sm:p-8">
          <h3 className="text-base font-bold text-[#2D2219] mb-4">
            Reverse Vesting Mechanisms
          </h3>
          <p className="text-sm text-gray-600 leading-relaxed text-justify">
            To reinforce this protective structure, startups frequently utilize reverse vesting, which is a mechanism where founders are issued all their shares upfront but the company retains the right to buy back unvested shares at a nominal price if they depart. Under Indian corporate law, direct buybacks can be procedurally complex and are subject to strict regulations under the Companies Act of 2013. To navigate this challenge, reverse vesting is structured through a shareholder agreement where the unvested shares are held in an escrow account or are subject to a transfer restriction. If a co-founder leaves the startup before the full four year period, the company, or the remaining founders, have a contractual option to purchase the unvested shares for a nominal fee, such as one rupee per share. This structure ensures that voting rights and economic ownership remain closely tied to active operational participation. Reverse vesting clauses must clearly differentiate between departures of good leavers, who might resign due to health reasons or a mutual agreement, and bad leavers, who are terminated for fraud, negligence, or breach of contract. For a good leaver, the company might allow them to retain a small portion of their vested shares or offer a fair market value buyout, whereas a bad leaver typically forfeits all unvested equity instantly and may face clawback provisions on previously vested shares. Implementing reverse vesting is essential for protecting the remaining co-founders who continue to dedicate their time and effort to build the startup, thereby preventing passive shareholders from hindering operations.
          </p>
        </div>

        <div className="border border-gray-100 rounded-3xl p-6 sm:p-8 bg-white shadow-sm">
          <h3 className="text-base font-bold text-[#2D2219] mb-4">
            Dispute Resolution and Exit Clauses
          </h3>
          <p className="text-sm text-gray-600 leading-relaxed text-justify">
            Finally, the founders agreement must outline detailed dispute clauses and exit mechanisms to handle internal conflicts before they escalate and paralyze business operations. Differences in strategic vision, working styles, or operational execution are common in fast-growing startups, making clear resolution pathways necessary. The agreement should specify a step-by-step escalation matrix, beginning with informal mediation sessions facilitated by an independent, mutually respected advisor or key board member. If mediation fails to resolve the deadlock, the agreement should mandate binding arbitration under the Arbitration and Conciliation Act of 1996, designating a specific seat, such as New Delhi or Mumbai, to avoid prolonged and expensive public litigation in courts. Furthermore, the agreement must include deadlock resolution mechanisms, such as a buy-sell clause or a shot-gun clause, where one founder can offer to buy out the other founder's shares at a specific valuation, and the receiving founder must either accept the buyout or purchase the offering founder's shares at that same valuation. The agreement must also clearly define the exit process, including right of first refusal, or ROFR, and tag-along or drag-along rights, which govern how shares can be sold to external parties. Proactively addressing these scenarios in a legally binding founders agreement prevents gridlock, protects minority shareholders, and provides a clear operational roadmap for the company's survival during times of internal transition. Therefore, setting up comprehensive dispute resolution mechanisms is a primary priority when drafting early corporate documents, ensuring that administrative deadlocks never get in the way of building a global enterprise and preserving venture velocity.
          </p>
        </div>

        {/* Vesting Comparison Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="border border-gray-100 rounded-2xl p-5 shadow-sm bg-white">
            <h4 className="text-xs font-bold text-[#2D2219] mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              Standard Vesting Schedule
            </h4>
            <p className="text-xs text-gray-500 leading-relaxed">
              Four years vesting with a twelve month cliff. Protects co-founders against early exits by ensuring equity is earned over time.
            </p>
          </div>
          <div className="border border-gray-100 rounded-2xl p-5 shadow-sm bg-white">
            <h4 className="text-xs font-bold text-[#2D2219] mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-500" />
              Dispute & Exit Clauses
            </h4>
            <p className="text-xs text-gray-500 leading-relaxed">
              Include ROFR, tag-along, and drag-along rights, plus binding arbitration seat in India to prevent operational deadlocks.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
