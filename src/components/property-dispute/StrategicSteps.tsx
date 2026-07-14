import React from "react";
import Link from "next/link";

export default function StrategicSteps({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 8
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Filing a Court Case: Strategic Steps
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
            Before initiating litigation in a civil court, a property owner must lay down a solid evidentiary foundation. The success of a title declaration or permanent injunction suit depends heavily on the documentary evidence gathered prior to filing the plaint. Following these key strategic steps will ensure your case is built on solid grounds.
          </p>
        </div>

        {/* Action Callout Box with Drafts link */}
        <div className="bg-yellow-50/50 border border-yellow-100 rounded-3xl p-6 flex gap-4 items-start">
          <div className="w-10 h-10 rounded-2xl bg-yellow-100 flex items-center justify-center text-yellow-700 flex-shrink-0">
            📄
          </div>
          <div>
            <h3 className="text-sm font-bold text-yellow-950 mb-1">
              Prepare Your Legal Notices &amp; Drafts
            </h3>
            <p className="text-xs text-yellow-900/80 leading-relaxed mb-3">
              Sending a formal legal notice to the opposite party is a standard prerequisite in civil disputes. You can access professional, courtroom tested templates for legal notices, cease and desist letters, and property sale agreements to prepare your case.
            </p>
            <Link 
              href="/drafts"
              className="text-xs font-bold text-yellow-800 hover:text-yellow-950 underline"
            >
              Browse Legal Drafts Catalog
            </Link>
          </div>
        </div>

        <div className="space-y-10">
          {/* H3: Conducting a Thorough Search at Registrar */}
          <div className="flex flex-col gap-3">
            <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
              Conducting a Thorough Search at Registrar
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed text-justify">
              The first step in any property dispute strategy is conducting a comprehensive search at the Sub-Registrar Office where the property is registered. A title search covers a period of thirteen to thirty years to trace the historical chain of transactions, including sales, mortgages, gifts, and leases. By applying for an Encumbrance Certificate (EC), you can check if the property has any existing liabilities, pending disputes, or court attachments. It is common for fraudulent sellers to execute transactions on property that is already mortgaged to a bank. A thorough search of the registrar records will reveal these hidden details. If any document is missing from your personal records, you can apply for certified copies from the Sub-Registrar's database under the Registration Act, 1908. These certified copies are admissible as secondary evidence in court under Section 65 of the Indian Evidence Act, ensuring that your case does not suffer due to lost or misplaced original deeds.
            </p>
          </div>

          {/* H3: Obtaining Certified Records of Rights (RoR) */}
          <div className="flex flex-col gap-3">
            <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
              Obtaining Certified Records of Rights (RoR)
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed text-justify">
              In addition to registration documents, you must obtain updated, certified copies of the Record of Rights (RoR) from the local revenue or municipal office. The RoR, commonly known as Jamabandi, Khatauni, or 7/12 Extract depending on the state, is a primary document that records land possession, mutation history, crop patterns, and tax liabilities. While revenue records do not confer title on their own, they have strong presumptive value in court regarding physical possession and tax compliance. When a property is purchased, the buyer must ensure that their name is mutated in the revenue records. If the mutation is not updated, the previous owner's name will continue to appear, leading to potential disputes where their heirs might attempt to claim the land. Property owners should periodically check their land records on state digital land portals (such as Bhulekh, MahaBhumi, or Dharani) to detect any unauthorized mutation entries early and file timely objections before the revenue authorities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
