import React from "react";

export default function PartnerThirdPartyLiability({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 7
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Liability of Partners to Third Parties
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
            Traditional partnership firms expose their partners to unlimited personal liability for firm debts. Exploring the statutory joint and several liability rules and comparing them with Limited Liability Partnership (LLP) structures is essential to safeguard personal assets.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Joint and Several Liability for Firm Debts
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            One of the most significant legal risks of operating as a traditional partnership in India is the nature of partner liability to third parties. Under Section 25 of the Indian Partnership Act, 1932, every partner is jointly and severally liable for all acts of the firm done while they are a partner. This means that if the partnership firm incurs debts, fails to pay creditors, or defaults on commercial contracts, the creditors have the legal right to file a lawsuit against all partners collectively or target any single partner individually to recover the entire outstanding amount. There is no distinction under traditional partnership law between the business assets of the firm and the personal assets of the partners. If the assets of the firm are insufficient to clear the business debts, the personal properties, bank accounts, and investments of the individual partners can be attached and sold by court order to satisfy the claims of the creditors. This joint and several liability applies even if the debt was incurred by another partner without your direct knowledge, provided the act was done in the ordinary course of the firm business. This exposure represents a massive financial risk, as a single dishonest or negligent partner can bankrupt all other partners. Understanding this strict liability is essential for anyone entering a partnership, and highlights why partners must exercise continuous supervision over the financial transactions, bank operations, and contracts executed by their fellow partners.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Protecting Personal Assets via LLP Structures
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            To eliminate the unlimited personal liability associated with traditional partnerships, the government introduced the Limited Liability Partnership (LLP) structure under the Limited Liability Partnership Act, 2008. An LLP is a hybrid business entity that combines the administrative flexibility of a partnership with the limited liability protections of a private limited company. Under the LLP structure, the LLP exists as a separate legal entity distinct from its partners, possessing its own corporate name, permanent account number, and the capacity to hold property in its own name. The most significant benefit of an LLP is that the personal liability of each partner is strictly limited to their agreed capital contribution as outlined in the LLP agreement. The personal assets of the partners, such as their homes, cars, or personal savings, are completely protected and cannot be attached by creditors to settle the debts of the LLP. Furthermore, under Section 28 of the LLP Act, a partner is not liable for the independent or unauthorized actions, negligence, or misconduct of other partners. This shielding of personal liability removes the risk of joint and several liability that plagues traditional partnerships. Because of these robust asset protection benefits, the majority of modern startups and professional service firms in India prefer incorporating as LLPs rather than traditional partnership firms, ensuring that their personal financial security remains intact as the business grows.
          </p>
        </div>
      </div>
    </section>
  );
}
