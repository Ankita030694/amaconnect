import React from "react";

export default function PropertyForfeiture({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 7
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Forfeiture of Illegally Acquired Property
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
            The state has broad powers to freeze and seize assets linked to drug trafficking. Compiling clear financial records and filing appeals before the Appellate Tribunal is necessary to protect legitimate family properties.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Tracing and Seizing Assets Acquired through Drug Trafficking
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            Chapter VA of the NDPS Act, 1985, contains stringent provisions aimed at freezing, seizing, and forfeiting property derived from or used in illicit drug trafficking. Under Section 68A, these provisions apply to any person convicted of an NDPS offense carrying a sentence of ten years or more, as well as their associates, relatives, and any companies they control. The law establishes the office of the Competent Authority, which has the power to identify and trace illegally acquired assets. Investigations begin when the police or narcotics agencies report that an individual has accumulated substantial assets that are disproportionate to their known sources of income. The Competent Authority can issue a show-cause notice to the owner under Section 68H, requiring them to explain the source of funds used to acquire the properties. If the owner fails to respond within thirty days or cannot prove a legitimate source of income, the Competent Authority can order the forfeiture of the assets to the central government. The definition of property is broad, covering bank accounts, real estate, vehicles, and jewelry. The statutory intent is to dismantle the financial network of drug syndicates by making trafficking unprofitable. However, these tracing powers are extensive, and any lack of procedural compliance during the asset verification process can lead to the seizure of family properties that are completely unrelated to any illegal activity, affecting innocent relatives.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Defending Legitimate Assets from Arbitrary Seizure
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            Defending your legitimate assets from arbitrary seizure under Chapter VA requires a meticulous financial and legal strategy. When the Competent Authority issues a freezing or forfeiture notice, the burden of proof is on the property owner to demonstrate that the asset was acquired using clean, legally earned income. To mount a successful defense, the owner must compile exhaustive financial records, including income tax returns, audited balance sheets, bank account statements, loan agreements, and inheritance records. You must establish a clear paper trail connecting the purchase of the property to these legitimate sources of funds. If a property belongs to a relative who has no involvement in the alleged drug trade, they must file a separate objection showing they purchased it using their independent income. If the Competent Authority proceeds with the forfeiture despite evidence of legitimate acquisition, the owner has the right to file an appeal before the Appellate Tribunal for Forfeited Property within forty-five days of the order. The Appellate Tribunal conducts a judicial review of the case, evaluating if the Competent Authority complied with the statutory procedures and if there is a direct link between the property and drug profits. Securing professional accounting and legal assistance is critical to analyze the financial transactions, draft the replies, and present a convincing case to protect your family hard earned wealth from permanent forfeiture.
          </p>
        </div>
      </div>
    </section>
  );
}
