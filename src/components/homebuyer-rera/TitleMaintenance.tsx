import React from "react";

export default function TitleMaintenance({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 7
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            RERA Rules on Title and Maintenance
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
            The transition of project ownership and maintenance from the developer to the homebuyers is a critical process that RERA regulates. The law sets clear obligations on conveyance deeds, common area handovers, and long-term builder liability.
          </p>
        </div>

        <div className="space-y-10">
          <div className="flex flex-col gap-3">
            <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
              Conveyance Deeds and Title Transfer
            </h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
              Under the Real Estate Regulation and Development Act, the legal transfer of title through a registered conveyance deed is a non-negotiable obligation that developers must fulfill within a strict timeline. Historically, builders delayed executing conveyance deeds for years to maintain control over the property, exploit undivided land shares, or demand arbitrary charges from residents. RERA addresses this imbalance by mandating under Section 17 that the promoter must execute a registered conveyance deed in favor of the allottee or the association of allottees within three months from the date of issue of the occupancy certificate. This execution ensures that the homebuyer obtains absolute, undisputed legal ownership of the physical apartment as well as their proportionate share in the common areas and undivided land. The developer is also responsible for handing over all title documents, sanctioned plans, utility layouts, and legal clearances to the association within thirty days of obtaining the occupancy certificate. Failure to execute the conveyance deed on time allows buyers to approach the state RERA authority to seek directions for executing a deemed conveyance. Deemed conveyance is a powerful administrative remedy where the authority overrides the developer's non-cooperation and directs the sub-registrar to register the land and building title in the name of the housing society or association of allottees. This transfer is vital because it establishes clear legal ownership, allows the association to manage the building, prevents unauthorized construction, and enables owners to sell, mortgage, or transfer their property without requiring consent or NOCs from the developer. Furthermore, a registered title shields buyers from any claims by third parties or financial institutions that may have provided project loans to the promoter during development.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
              Common Area Handovers to the Association of Allottees
            </h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
              The handover of common areas is another critical transition stage that RERA regulates with strict guidelines to prevent developers from retaining control over shared amenities. Common areas include gardens, elevators, community halls, water tanks, staircases, and open spaces, all of which represent a significant portion of what buyers pay for. Section 17 of the RERA Act mandates that once the occupancy certificate is obtained, the developer must hand over the physical possession of these common areas to the association of allottees. In the absence of local laws specifying a timeframe, this handover must take place within thirty days of the occupancy certificate being issued. To facilitate a smooth transition, the developer must provide the association with all structural, plumbing, electrical, and firefighting plans, as well as operational manuals for lifts, generators, and water treatment systems. The association of allottees, which must be formed within three months of the majority of units being booked, assumes the responsibility of managing and maintaining these spaces. Builders often attempt to retain control of parking spaces, terrace rights, or open areas to monetize them, but RERA explicitly defines these as common property belonging collectively to the allottees. Any attempt to sell or lease common areas is illegal, and the association has full authority to claim control over these spaces. A formal handover prevents builders from abusing maintenance funds and allows residents to manage their community independently. Additionally, the promoter must pay all municipal taxes, electricity bills, and water charges outstanding up to the date of physical handover, ensuring the newly formed association does not start with legacy debts. If a promoter fails to provide the required documents or clear these financial dues, the association can file a complaint before the authority to seek immediate intervention and financial compensation.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
              Builder Liability and Maintenance Period
            </h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
              The builder's liability during the maintenance period is structured under RERA to ensure developers remain accountable for quality even after delivering possession. Under Section 14(3) of the Act, if any structural defect or defect in workmanship, quality, or provision of services is brought to the notice of the promoter within five years from the date of handover of possession, the promoter is legally bound to rectify it. This rectification must be carried out without any additional charge to the homebuyer, and it must be completed within thirty days of the defect being reported. If the builder fails to resolve the issue within this timeframe, the aggrieved buyer is entitled to receive appropriate financial compensation under the Act. To protect homebuyers during the initial occupancy phase, the builder must maintain the building and pay all maintenance charges until the handover of common areas to the association of allottees is complete. This system prevents builders from walking away from a project immediately after construction, leaving residents to deal with faulty plumbing, cracking walls, or defective elevators. The five-year structural warranty is a major safeguard, establishing a long-term quality benchmark that developers must adhere to. Homebuyers should conduct a detailed inspection of their units and common spaces upon taking possession, logging all visible issues in writing to preserve their right to demand free repairs under this critical statutory protection. Additionally, builders must hand over any accumulated maintenance funds or sinking funds collected from allottees, along with full accounts and audits, directly to the association of allottees. If the builder refuses to account for or transfer these balances, it constitutes a breach under the Act, allowing the association to pursue legal remedies before RERA to reclaim the funds with penal interest.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
