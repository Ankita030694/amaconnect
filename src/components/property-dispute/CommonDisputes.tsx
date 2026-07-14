import React from "react";

export default function CommonDisputes({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 1
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Common Types of Property Disputes
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
            Property litigation in India is multi-faceted, often arising from historical recording gaps, family complexities, and rapid urbanization. Landowners frequently find themselves entangled in disputes that challenge their ownership, encroach on physical boundaries, or prevent them from enjoying their proprietary rights. Navigating these conflicts requires a solid understanding of civil and property laws.
          </p>
        </div>

        {/* Data Callout Section Type */}
        <div className="bg-[#FAF9F5] border-l-4 border-[#D4AF37] rounded-r-3xl p-6 sm:p-8 my-2 shadow-sm">
          <p className="text-xs text-[#D4AF37] font-bold uppercase tracking-wider mb-2">
            Data Callout: Judicial Statistics
          </p>
          <h3 className="text-xl sm:text-2xl font-extrabold text-[#2D2219] mb-2">
            66% of Civil Cases are Property Disputes
          </h3>
          <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
            According to studies by the Bangalore-based think-tank Daksh and various judicial reports, land and property disputes constitute approximately 66 percent of all pending civil litigation in Indian courts. Furthermore, the average resolution time for a property-related title or partition suit can span anywhere between seven to fifteen years, making preventive measures and early legal interventions highly crucial.
          </p>
        </div>

        <div className="space-y-10">
          {/* H3: Title Disputes and Boundary Conflicts */}
          <div className="flex flex-col gap-3">
            <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
              Title Disputes and Boundary Conflicts
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed text-justify">
              Title disputes involve challenges to the very ownership of a property, often stemming from conflicting claims, fraudulent transactions, or defective title deeds. In India, because land registration acts only as a record of transaction rather than a government-guaranteed title, an individual can easily fall victim to multiple sales of the same plot by fraudulent sellers. Boundary conflicts, on the other hand, arise when neighbors or adjoining landholders encroach upon a property due to missing demarcations, incorrect surveyor maps, or altered physical fences. Resolving these disputes requires a deep dive into historical chain documents, municipal mutation records, and registration records at the Sub-Registrar Office. Property owners must proactively verify that their name is updated in the local revenue register, as a discrepancy between the registered sale deed and the mutation record is the most common trigger for high-stakes title litigation. Under Section 34 of the Specific Relief Act, 1963, a rightful owner whose title is threatened can file a suit for declaration in the civil court to legally establish their absolute ownership and clear any cloud over their title.
            </p>
          </div>

          {/* H3: Illegal Possession and Tenant Holdovers */}
          <div className="flex flex-col gap-3">
            <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
              Illegal Possession and Tenant Holdovers
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed text-justify">
              Illegal possession occurs when an unauthorized person, such as a squatter, trespasser, or land grabber, physically occupies a property without the owner's consent. A closely related issue is tenant holdover, where a legitimate tenant refuses to vacate the premises after the lease term has expired or after the lease has been legally terminated by the landlord. In India, evicting a holdover tenant or an illegal occupant can be incredibly challenging due to pro-tenant legal frameworks and the strict prohibition of self-help eviction measures. Landlords who attempt to forcefully evict occupants by locking premises or disconnecting utility services can face criminal charges for trespass and harassment. Instead, owners must seek legal recourse through civil courts under the provisions of the Specific Relief Act, 1963. Section 5 of the Act allows an owner to recover possession of their immovable property using the procedures laid down in the Code of Civil Procedure, 1908. Section 6 provides a summary remedy for individuals who have been dispossessed without their consent, allowing them to recover possession within six months of dispossession without having to prove their underlying title, thereby acting as a swift deterrent against illegal physical grab attempts.
            </p>
          </div>

          {/* H3: Partition Suits among Family Heirs */}
          <div className="flex flex-col gap-3">
            <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
              Partition Suits among Family Heirs
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed text-justify">
              Partition suits are legal actions filed to divide joint family property among co-owners or legal heirs who cannot reach a mutual agreement on how to split the estate. Ancestral properties in India are governed by complex personal laws, including the Hindu Succession Act, 1956, which underwent a landmark amendment in 2005 to grant equal coparcenary rights to daughters. When a family patriarch passes away without leaving a valid will (dying intestate), the property devolves upon all legal heirs, leading to shared co-ownership. Disputes regularly arise when one heir attempts to sell the entire property without the consent of others, or when co-owners refuse to recognize the rightful share of female heirs or distant relatives. A partition suit is initiated by filing a plaint in a civil court, asking for a judicial division of the property. The court first determines the individual shares of each claimant and passes a preliminary decree. Subsequently, a court commissioner is appointed to inspect the property and suggest a physical division. If the property is indivisible, such as a single residential house, the court may order its sale and distribute the proceeds among the heirs. This process demands extensive evidence, including genealogy tables, birth certificates, and historical title records of the family estate.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
