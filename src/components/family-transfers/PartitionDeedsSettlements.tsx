import React from "react";

export default function PartitionDeedsSettlements({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 5
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Partition Deeds and Family Settlements
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
            Dividing joint family holdings amicably requires structured agreements. Partition deeds and family settlements allow co-owners to separate their shares physically or record mutual compromises to secure independent titles.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Dividing Coparcenary Property Among Joint Owners
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            In Hindu law, coparcenary property refers to ancestral property that is held jointly by members of a Hindu Undivided Family (HUF). When the joint owners or coparceners decide to divide their joint holdings and convert their joint ownership into individual, absolute ownership, they must execute a Partition Deed. Under property laws, partition involves dividing a single property into distinct physical shares or allocating separate properties to each co-owner according to their legal share. A Partition Deed must specify the exact share of each partner and describe the physical division of the land or building, complete with a map or blueprint showing the boundaries of each partition. If physical division is not possible, such as in a single residential apartment, the partners can agree to sell the property and divide the sale proceeds, or one partner can buy out the shares of the other partners. To be legally binding, a Partition Deed must be executed on stamp paper of the appropriate value and registered with the sub-registrar. Once registered, each partner becomes the absolute owner of their specific share and has the full right to sell, gift, or mortgage it independently. Executing a partition deed is a highly effective way to resolve joint ownership deadlocks, allowing each coparcener to enjoy their property share peaceably, make physical improvements to their designated portion, and secure loans or mortgages using their independent title as collateral.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Registering Family Settlement Agreements to Avoid Disputes
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            A Family Settlement Agreement, also known as a family compromise or family arrangement, is an alternative, highly amicable method to resolve property disputes among relatives. Unlike a partition deed, which physically divides property, a family settlement is an agreement where family members record a mutual understanding regarding the distribution of assets, businesses, and liabilities. The courts in India look upon family settlements with favor, as they resolve domestic conflicts, preserve family peace, and prevent long, expensive litigation in civil courts. To be legally recognized, a family settlement agreement must be bonafide, voluntary, and aimed at resolving a pre-existing dispute or maintaining family harmony. The agreement must list all family members, describe the properties involved, and outline the agreed distribution. A critical legal aspect is whether a family settlement agreement must be registered. If the agreement is merely a memorandum recording a past verbal family arrangement that has already been acted upon, it does not require registration. However, if the agreement itself creates, declares, assigns, or extinguishes any right, title, or interest in an immovable property in present, it must be written on stamp paper and registered under Section 17 of the Registration Act, 1908. Registering the family settlement agreement ensures it has full evidentiary value in court, making it binding on all family members and preventing future generations from challenging the agreed distribution of family wealth.
          </p>
        </div>
      </div>
    </section>
  );
}
