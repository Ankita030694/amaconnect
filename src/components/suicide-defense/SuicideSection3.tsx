import React from "react";

export default function SuicideSection3({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-8 pt-4">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 3
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Supreme Court Benchmarks on Active Instigation versus Normal Disputes
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
            The jurisprudence surrounding abetment of suicide has been thoroughly refined by the Supreme Court of India. The apex court has repeatedly established that to convict a person under Section 306 IPC, there must be clear proof of active play or direct instigation by the accused. The prosecution must demonstrate that the accused committed a positive act which left the deceased with no other option but to end their life. In the absence of such a positive act, a prosecution under Section 306 cannot be sustained, protecting citizens from being unfairly prosecuted for normal relationship issues.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            The Requirement of Mens Rea and Proximate Nexus
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            A key benchmark established by the judiciary is the absolute requirement of mens rea, meaning a clear, guilty mind or intent to abet the suicide. The accused must have intended to provoke, incite, or encourage the deceased to take their own life. Furthermore, there must be a proximate nexus, meaning a direct and immediate connection, between the actions of the accused and the committing of suicide. If the alleged harassment occurred months before the incident, or if there was a significant break in time between the conflict and the suicide, courts will generally find that the proximate nexus is broken, making a conviction under Section 306 legally unsustainable.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Landmark Judgments Defining the Boundaries of Harassment
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            In landmark cases such as Sanju Prasad alias Sanjay Sen versus State of Madhya Pradesh, and the pivotal ruling in SS Chheena versus Vijay Kumar Mahajan, the Supreme Court clarified that abetment involves a mental process of instigating a person or intentionally aiding a person in doing a thing. Without a positive act on the part of the accused to instigate or aid in committing suicide, conviction cannot be sustained. The court held that harassment, by itself, does not amount to abetment unless there is a clear intention to push the person to commit suicide. These guidelines form the cornerstone of any legal defense strategy.
          </p>
        </div>
      </div>
    </section>
  );
}
