import React from "react";

export default function StampDutyRegistration({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 3
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Stamp Duty and Registration of Gift Deeds
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
            The legal transfer of property ownership is not complete without paying stamp duty and securing registration. State laws offer beneficial concessions for close family relatives, which can significantly reduce transfer costs.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Stamp Duty Concessions for Close Family Relatives
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            Executing a gift deed involves paying stamp duty and registration fees, which are calculated based on the market value of the property as determined by the state ready reckoner rates. However, one of the greatest advantages of gifting property to close family members in India is the substantial stamp duty concessions offered by various state governments. While a standard property sale deed attracts a stamp duty of five to eight percent, states like Maharashtra, Uttar Pradesh, and Delhi have introduced nominal stamp duty rates for gifts made to linear ascendants or descendants, such as parents, spouses, children, or grandchildren. For instance, in Maharashtra, the stamp duty on a residential property gifted to a spouse, child, or grandchild is fixed at a nominal fee of two hundred rupees, plus a one percent local body tax, representing massive savings compared to standard transfer rates. Uttar Pradesh similarly offers significant concessions for family transfers, reducing the burden on family estate planning. It is important to note that these concessions are strictly limited to close relatives as defined under the respective state stamp acts. Gifting to collateral relatives, such as siblings, uncles, or cousins, or to unrelated persons will attract the full, standard stamp duty rates applicable to sale deeds. Partners looking to transfer property titles must verify the specific concessions, definitions of relatives, and documentation required by their respective state governments beforehand to ensure they receive these beneficial concessions.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Mandatory Registration under Registration Act 1908
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            Under Section 123 of the Transfer of Property Act, 1882, read with Section 17 of the Registration Act, 1908, the registration of a gift deed involving immovable property is mandatory, regardless of the value of the property. A gift of immovable property cannot be executed through a simple oral declaration, a written agreement on plain paper, or an unregistered stamp paper. If a gift deed is not formally registered with the sub-registrar, it holds no legal validity, and the donee cannot claim any ownership rights or mutation of records. The registration process requires the donor and the donee to visit the office of the Sub-Registrar of Assurances having jurisdiction over the area where the property is situated. The registered document must be signed by the donor and the donee, and attested by at least two independent witnesses. The parties must submit the original title deeds of the property, identity proofs, address proofs, ready reckoner valuation reports, and proof of payment of the prescribed stamp duty and registration fees. The registration fee is typically set at one percent of the property value, capped at a maximum limit in some states. The sub-registrar will verify the identity of the parties, record their biometrics and photographs, and issue a registration receipt. The original registered gift deed is typically returned within a few days, after which the donee can apply for mutation of property records in the municipal registers, completing the legal transfer.
          </p>
        </div>
      </div>
    </section>
  );
}
