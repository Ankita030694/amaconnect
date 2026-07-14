import React from "react";
import Link from "next/link";

export default function LegalRemedies({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 2
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Legal Remedies for Property Owners
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
            The Indian legal framework provides strong, statutory remedies for property owners to protect their real estate investments. Under the Specific Relief Act, 1963, and the Code of Civil Procedure, 1908, owners can petition the civil courts to restrain trespassers, declare legal ownership, and recover physical possession. Familiarity with these specific actions is necessary to deploy the correct remedy at the right time.
          </p>
        </div>

        {/* Success Story Section Type */}
        <div className="bg-[#F4FDF4] border border-[#C2E7C2] rounded-3xl p-6 sm:p-8 my-2 shadow-sm">
          <p className="text-xs text-[#2E7D32] font-bold uppercase tracking-wider mb-2">
            Success Story: Recovery of Commercial Plot
          </p>
          <h3 className="text-lg font-bold text-[#1B5E20] mb-2">
            Reclaiming Land from Holdover Commercial Tenant
          </h3>
          <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-4">
            An NRI property owner in Delhi faced a severe issue when a commercial tenant refused to vacate a prime retail showroom after the lease expired, claiming tenancy rights under outdated rent laws. Rather than resorting to self-help, the owner filed a suit for ejectment and mesne profits in the Delhi District Court. By presenting a registered lease deed and clean mutation records, the court passed a summary judgment under Order XII Rule 6 of the CPC, ordering the tenant to vacate within three months and pay market-rate damages for the holdover period.
          </p>
          <Link 
            href="/success-stories"
            className="text-xs font-bold text-[#2E7D32] hover:text-[#1B5E20] underline transition-colors"
          >
            Read more legal victory stories
          </Link>
        </div>

        <div className="space-y-10">
          {/* H3: Filing a Suit for Permanent Injunction */}
          <div className="flex flex-col gap-3">
            <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
              Filing a Suit for Permanent Injunction
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed text-justify">
              A suit for permanent injunction is a preventive remedy filed under Section 38 of the Specific Relief Act, 1963. Its primary goal is to restrain a third party, such as a neighbor, developer, or municipal body, from performing any action that violates the owner's legal rights, such as entering the property, altering the physical structure, or attempting to sell the land. Along with the main suit, plaintiffs almost always file an application for a temporary injunction under Order 39, Rules 1 and 2 of the Code of Civil Procedure, 1908. If the court is satisfied that the plaintiff has a prima facie case, that the balance of convenience lies in their favor, and that irreparable injury will be caused if the relief is denied, it passes an interim order protecting the property. This prevents the defendant from disturbing the status quo while the trial is ongoing. In urgent cases, the court can even grant an ex-parte ad-interim injunction without waiting to hear the other side first.
            </p>
          </div>

          {/* H3: Filing a Suit for Declaration of Title */}
          <div className="flex flex-col gap-3">
            <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
              Filing a Suit for Declaration of Title
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed text-justify">
              When a person's legal character or right to any property is denied or threatened by another party, they must file a suit for declaration under Section 34 of the Specific Relief Act, 1963. A declaration from the court operates as an official recognition of the plaintiff's absolute ownership, clarifying any doubts regarding the property's title. However, Section 34 contains a strict proviso: the court will not pass a mere declaration if the plaintiff is able to seek further consequential relief but has failed to do so. This means that if the plaintiff is out of physical possession, they cannot simply file a suit for declaration of title; they must also ask for the recovery of physical possession as consequential relief. Failing to ask for consequential relief will result in the dismissal of the suit. This rule prevents a multiplicity of proceedings, ensuring that all aspects of the property dispute, including title, possession, and mesne profits, are resolved within a single comprehensive trial.
            </p>
          </div>

          {/* H3: Possession Recovery under Relief Act */}
          <div className="flex flex-col gap-3">
            <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
              Possession Recovery under Relief Act
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed text-justify">
              The Specific Relief Act, 1963, provides two distinct paths for recovering possession of immovable property: Section 5 and Section 6. Section 5 states that a person entitled to the possession of specific immovable property may recover it in the manner prescribed by the Code of Civil Procedure, 1908, which involves proving their superior title over the property in a standard trial. Conversely, Section 6 offers a quick, summary remedy for any person who has been dispossessed of their property without their consent, otherwise than in due course of law. To succeed under Section 6, the plaintiff only needs to prove that they were in peaceful physical possession and were illegally dispossessed within six months prior to filing the suit. Under Section 6, the court will not examine the question of title, and no appeal or review is permitted against any order passed under this section. This fast-track remedy is designed to discourage self-help evictions and maintain public order by forcing parties to resolve title disputes through peaceful legal channels.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
