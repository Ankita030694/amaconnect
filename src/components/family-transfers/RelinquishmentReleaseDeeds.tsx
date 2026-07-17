import React from "react";

export default function RelinquishmentReleaseDeeds({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 4
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Relinquishment Deeds and Release Deeds
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
            When multiple legal heirs inherit a property, consolidating the title requires specific transfer instruments. Relinquishment and release deeds allow co-owners to give up their shares in favor of other family members.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            When to Use a Relinquishment Deed for Ancestral Property
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            A Relinquishment Deed is a specialized legal instrument used when an owner of a property wants to voluntarily give up, release, or surrender their share in the property in favor of other co-owners. This instrument is most commonly used in the context of ancestral property or in cases of intestate succession, where a property owner dies without leaving a will. For example, if a father passes away without a will, his property is inherited equally by his wife and children as Class 1 legal heirs. If one or more children decide that they do not want their share of the property and wish to transfer their rights exclusively to their mother or a sibling, they can execute a relinquishment deed. This deed allows them to legally surrender their share, consolidating the property title in the name of the remaining heirs. To execute a valid relinquishment deed, the property must be ancestral or jointly owned, and the relinquishment must be made in favor of existing co-owners. It cannot be used to transfer property to an outsider or an unrelated person. The deed must be in writing, signed by the relinquishing party in the presence of witnesses, and mandatorily registered under Section 17 of the Registration Act, 1908. A registered relinquishment deed provides a clean, permanent legal record of the transfer, preventing the outgoing heirs or their descendants from claiming any future share or raising title disputes over the consolidated property.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Difference between Relinquishing and Releasing Rights
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            While the terms relinquishment deed and release deed are often used interchangeably in common conversation, they have distinct legal characteristics and are used in different scenarios. A relinquishment deed can only be executed in favor of a co-owner or a co-heir of the property. It is typically used for inherited or ancestral properties among members of the same family who have acquired a share in the property by birth or succession. The relinquishment is generally made without any monetary exchange or consideration. A release deed, on the other hand, can be executed in favor of any person who holds an interest in the property, whether they are a co-owner, a mortgagee, or a partner. A release deed is used to release or discharge a claim, right, or interest, and it can be executed for both ancestral and self-acquired properties. Crucially, a release deed can be executed for consideration, meaning the releasing party can receive a monetary payment in exchange for giving up their rights. For instance, in a joint venture or partnership, one partner can release their claim over firm assets to another partner in exchange for a buyout payment. Both deeds must be written on stamp paper and registered with the sub-registrar to have legal effect. Understanding these technical differences ensures that families select the correct deed, pay the appropriate stamp duty, and complete the property transaction without violating registration rules.
          </p>
        </div>
      </div>
    </section>
  );
}
