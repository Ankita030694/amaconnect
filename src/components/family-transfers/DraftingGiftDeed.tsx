import React from "react";

export default function DraftingGiftDeed({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 2
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Drafting a Valid Gift Deed
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
            A gift deed is a formal legal contract that must be drafted with precise clauses to prevent future challenges. The document must record the voluntary intent of the donor and the explicit acceptance of the donee.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Acceptance by Donee and Declaration of Gift
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            Under Section 122 of the Transfer of Property Act, 1882, a gift is defined as a transfer of certain existing movable or immovable property made voluntarily and without consideration, by one person, called the donor, to another, called the donee, and accepted by or on behalf of the donee. This definition establishes that acceptance is a mandatory legal requirement to make a gift deed valid. The acceptance must be executed during the lifetime of the donor and while they are still capable of giving. If the donee dies before accepting the gift, the transaction is legally void under Section 122. In the draft of the gift deed, there must be a clear declaration of the gift by the donor, expressing their voluntary intention to transfer the property out of natural love and affection. Crucially, the donee must also sign the deed to formally record their acceptance of the property. Acceptance can also be demonstrated by taking physical possession of the property, collecting rent from tenants, or holding the original title deeds. However, in the case of immovable property, executing a written deed signed by both the donor and the donee in the presence of two witnesses is the only legally secure method. If the donee is a minor, a natural guardian can accept the gift on their behalf, but the minor can elect to accept or reject the gift upon attaining majority, ensuring their legal rights are protected under property laws.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Essential Clauses: No Consideration and Transfer of Title
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            Drafting a valid gift deed requires the inclusion of specific essential clauses to ensure it withstands legal scrutiny. The most critical clause is the no consideration clause, which must explicitly state that the property is being transferred voluntarily, out of natural love and affection, and that no monetary price, exchange, or financial service is being paid by the donee. If the deed contains any reference to a payment or reciprocal obligation, it ceases to be a gift deed and will be classified as a sale deed or an exchange deed, attracting full stamp duty and tax implications. Another vital provision is the transfer of title clause, which must clearly declare that the donor is conveying all their ownership rights, title, and interest in the property to the donee absolutely and forever, without retaining any right of recovery or future claim. The deed must also contain a property description clause, providing a detailed description of the property, including its boundaries, survey numbers, dimensions, and municipal details. In addition, the donor must declare that the property is free from all encumbrances, litigation, mortgages, or family disputes, and that they possess a clear, marketable title. To protect the donee, the deed should state that the donee is entitled to peaceably enter, possess, and enjoy the property without any interruption by the donor or their heirs, ensuring an absolute and secure transfer of ownership.
          </p>
        </div>
      </div>
    </section>
  );
}
