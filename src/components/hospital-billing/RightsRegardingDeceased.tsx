import React from "react";

export default function RightsRegardingDeceased({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 2
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Rights Regarding the Deceased
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
            Withholding the body of a deceased patient to coerce payment is an illegal and deeply unethical practice. Grieving families have immediate statutory and constitutional remedies to force the release of their loved ones.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            The Unlawful Practice of Withholding Dead Bodies
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            Withholding the dead body of a patient to force the grieving family to pay outstanding hospital bills is an unlawful, inhumane, and highly punishable act under Indian law. The Right to Life under Article 21 of the Constitution has been judicially interpreted to include the right to a decent burial or cremation in accordance with the religious beliefs of the deceased. A dead body is not a commercial asset, property, or a lien that can be seized or retained by a hospital as security for unpaid debts. Holding a corpse hostage violates the sanctity of death and causes immense emotional trauma to the bereaved family members. High Courts in India have declared that under no circumstances can a clinical establishment justify the withholding of a dead body due to billing disputes. Doing so constitutes a criminal offense under the Indian Penal Code, including wrongful confinement of a corpse and outraging the feelings of the family. The courts have emphasized that a hospital must release the body immediately upon death, allowing the family to perform the final rites with dignity. The hospital cannot place any conditions or withhold death certificates or medical summaries to compel payment. Any hospital administration attempting to use this coercive tactic is liable to face immediate police intervention, criminal prosecution of its trustees and directors, and heavy punitive damages awarded by courts to penalize the high handed behavior, protecting the fundamental dignity of the deceased.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Remedies to Force Release of a Deceased Family Member
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            When a hospital refuses to release the dead body of a family member due to outstanding bills, the family must take immediate legal action to resolve the situation. The first step is to submit a formal, written demand to the medical superintendent or administrative head of the hospital, stating that withholding a body is a criminal offense and demanding its immediate release. Simultaneously, the family should file an emergency complaint with the local police station, requesting them to intervene under Section 340 and 342 of the IPC for wrongful confinement. Police officers are duty bound to visit the hospital and secure the release of the body. If the local police delay action, the family can approach the Sub-Divisional Magistrate or file an urgent writ petition of Habeas Corpus in the High Court. High Courts view these cases with extreme urgency and can issue immediate directions to the police and hospital management to release the body within hours. In addition to forcing the release, the family can file a complaint before the State Human Rights Commission or the State Medical Council to investigate the ethical violation. The hospital can still pursue civil debt recovery methods to collect their bills, but they must release the body immediately. Knowing these remedies helps families act decisively during a time of grief, ensuring they are not bullied by hospital administrations using illegal detention tactics.
          </p>
        </div>
      </div>
    </section>
  );
}
