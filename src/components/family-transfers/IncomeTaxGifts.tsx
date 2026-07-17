import React from "react";

export default function IncomeTaxGifts({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 6
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Income Tax Implications on Family Gifts
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
            Gifts are subject to scrutiny under the Income Tax Act, 1961. The law provides complete exemptions for properties gifted to close family relatives, but imposes heavy tax liabilities on transfers to unrelated individuals.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Tax Exemptions for Gifts Received from Relatives
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            Under the Income Tax Act, 1961, gifts received by an individual are generally classified as income from other sources and are subject to taxation. However, Section 56(2)(x) of the Act contains a major exemption for gifts received from relatives. The law defines a relative very specifically: it includes the spouse of the individual; any sibling of the individual; any sibling of the spouse; any linear ascendant or descendant of the individual; any linear ascendant or descendant of the spouse; and the spouses of any of these relatives. If you receive a gift of cash, gold, shares, or immovable property from any of these defined relatives, the transaction is completely exempt from income tax, regardless of the value of the gift. There is no upper limit on the value of property that can be gifted tax free among these family members. However, it is essential to understand that while the receipt of the gift is tax free, any future income generated from the gifted asset, such as rent from a gifted house or interest from gifted cash, may be subject to tax clubbing provisions. Under Section 64 of the Act, if a husband gifts property to his wife or a parent gifts property to a minor child, the income generated from that property is clubbed with the income of the donor and taxed at their tax rate. Maintaining a registered gift deed and recording the transactions in your bank statements is critical to prove the genuineness of the gift during tax audits.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Taxation on Gifting to Unrelated Persons
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            The tax treatment changes dramatically when property or cash is gifted to an unrelated person or a distant relative who does not fall under the statutory definition of relative. Under Section 56(2)(x) of the Income Tax Act, 1961, if an individual receives any sum of money or property without consideration, and the aggregate value exceeds fifty thousand rupees in a financial year, the entire value of the gift is taxed as income in the hands of the recipient. The value of the gift will be added to the recipient total income and taxed at their applicable slab rate. For immovable property, the value is calculated based on the stamp duty value (circle rate) of the property. If the difference between the stamp duty value and the actual transaction price (if sold at a discount) exceeds fifty thousand rupees, or ten percent of the consideration, the difference is taxed as income for the buyer. There are a few exceptions where gifts from unrelated persons are exempt, such as gifts received on the occasion of the individual marriage, under a will, by way of inheritance, or from local authorities and registered charitable trusts. For standard transactions, however, gifting property to friends, business partners, or distant relatives will trigger heavy tax liabilities for the donee. Consulting a tax advisor and drafting a clear contract is essential to understand these tax implications and structure the transaction in compliance with the income tax rules.
          </p>
        </div>
      </div>
    </section>
  );
}
