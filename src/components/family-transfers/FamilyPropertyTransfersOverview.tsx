import React from "react";

export default function FamilyPropertyTransfersOverview({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-8 pt-4">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 1
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Overview of Family Property Transfers
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
            Transferring property titles among family members requires a clear understanding of property law. Selecting the appropriate legal instrument prevents unnecessary taxation and ensures that the transfer is legally binding.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Statutory Definition of Transfer under Transfer of Property Act
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            The legal framework governing the transfer of immovable property in India is primarily codified under the Transfer of Property Act, 1882. Section 5 of this Act defines a transfer of property as an act by which a living person conveys property, in present or in future, to one or more other living persons, or to himself and one or more other living persons. The term living person includes individuals, corporate bodies, companies, associations, or bodies of individuals, whether incorporated or not. Immovable property, under the Act, includes land, benefits arising out of land, and things attached to the earth, such as buildings or trees. A transfer must involve a conveyance of title, which means the transferor must possess the legal capacity and ownership rights to convey the property, and the transferee must have the capacity to receive it. Under Section 7 of the Act, every person competent to contract and entitled to transferable property is competent to transfer such property either wholly or in part, and either absolutely or conditionally. The transfer of title is not complete upon mere physical possession or verbal agreements; it requires the execution of a written legal instrument, stamp duty payment, and mandatory registration with the sub-registrar of assurances. Understanding these statutory definitions is essential for family members to ensure that any transfer of property titles among relatives conforms strictly to the legal requirements of the Act, preventing future disputes among heirs.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Difference between Sale, Gift, and Relinquishment
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            When family members decide to transfer property titles among themselves, selecting the correct legal instrument is critical for financial and tax planning. The three most common instruments used are Sale Deeds, Gift Deeds, and Relinquishment Deeds. A Sale Deed, governed by Section 54 of the Transfer of Property Act, 1882, involves the transfer of property ownership in exchange for a monetary price or consideration. Gifting, under Section 122 of the Act, involves the voluntary transfer of property without any monetary consideration or exchange. A Gift Deed is executed out of natural love and affection, and the transfer must be accepted by the recipient, known as the donee, during the lifetime of the donor. A Relinquishment Deed, on the other hand, is a specialized instrument used specifically when a co-owner or legal heir voluntarily gives up or surrenders their share in an ancestral or jointly owned property in favor of other co-owners or co-heirs. Unlike a sale or a gift, which can convey property to any individual, a relinquishment deed can only be executed in favor of existing co-owners. While a sale deed attracts full stamp duty and capital gains taxes, a gift deed to close relatives often enjoys significant stamp duty concessions and income tax exemptions. Similarly, relinquishment deeds are highly cost effective instruments for consolidating family holdings. Choosing the wrong instrument can lead to unnecessary tax liabilities or make the transfer vulnerable to challenges by other heirs.
          </p>
        </div>
      </div>
    </section>
  );
}
