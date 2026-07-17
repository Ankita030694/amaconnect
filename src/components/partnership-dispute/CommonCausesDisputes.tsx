import React from "react";

export default function CommonCausesDisputes({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 4
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Common Causes of Co-Founder Disputes
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
            Even the most promising ventures can derail due to internal conflicts. Disagreements over commercial expansion, capital calls, and financial transparency are major catalysts for legal disputes between co-founders.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Disagreements over Business Strategy and Capital Call
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            As a business evolves, differences in opinion regarding long term strategy and financial expansion are almost inevitable. In both partnerships and startup boards, founders frequently clash over key strategic decisions, such as entering new markets, changing the core product offering, raising venture capital, or taking commercial debt. These disagreements can quickly paralyze the business, leading to corporate deadlocks that halt daily operations. Another major trigger for co-founder disputes is the need for additional capital. When a firm requires urgent funding to sustain operations, and the partners must execute a capital call under the partnership deed, disputes frequently arise if one partner is unable or unwilling to contribute their share. If the agreement does not outline the consequences of failing to meet a capital call, the active partners may feel resentful, leading to accusations of unfair burden sharing. To resolve these situations, the partnership deed or co-founder agreement should contain clear provisions for diluting the equity of the non-contributing partner or converting their unpaid capital contribution into debt. Without these built-in dilution mechanisms, strategic and financial disagreements can lead to personal animosity, gridlock, and the eventual collapse of the business, forcing the partners to seek judicial intervention to resolve the deadlock and protect the assets.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Misappropriation of Funds and Breach of Duty
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            Trust is the cornerstone of any business partnership, and any breach of fiduciary duty can cause immediate, irreversible damage to the venture. Misappropriation of partnership funds is one of the most serious causes of co-founder disputes. This includes unauthorized withdrawal of cash, using the firm bank account or credit cards for personal expenses, siphoning off business opportunities to separate personal entities, or taking secret commissions from vendors. Under Section 9 of the Indian Partnership Act, 1932, partners are legally bound to carry on the business of the firm to the greatest common advantage, to be just and faithful to each other, and to render true accounts and full information of all things affecting the firm. A breach of this statutory duty exposes the defaulting partner to severe civil and criminal liabilities. If a partner uses the firm property or business connections to generate personal profits without the consent of the other partners, they are legally required to account for and pay over those profits to the firm. When fraud or misappropriation is discovered, the non-defaulting co-founders must act quickly to secure the firm assets, freeze bank accounts, and gather forensic financial evidence. Proving a breach of fiduciary duty requires meticulous documentation, audit reports, and bank statements, which form the basis for civil suits for recovery or criminal complaints for criminal breach of trust.
          </p>
        </div>
      </div>
    </section>
  );
}
