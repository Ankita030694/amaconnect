import React from "react";

export default function SuicideSection4({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-8 pt-4">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 4
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Immediate Procedural Steps to Take When Named in a Suicide Note
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
            Discovering that you have been named in a suicide note is an extremely stressful experience that requires immediate, calculated legal action. Because Section 306 of the IPC is a non-bailable and cognizable offence, police can arrest the accused without a warrant. It is absolutely critical not to panic, avoid making hasty statements to the media or investigators, and prioritize securing your legal freedom through the appropriate judicial channels.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Retaining Specialized Criminal Defense Counsel
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            The very first step must be to consult and retain a qualified criminal defense advocate who specializes in abetment charges and anticipatory bail. Do not attempt to speak with the police or the family of the deceased without your lawyer present. An experienced advocate will review the facts, evaluate the suicide note if a copy is available, and prepare a strategy to protect you from arbitrary arrest. They will draft the necessary petitions and represent you in court, ensuring that your rights are protected throughout the investigative process.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Cooperating with Police Investigations and Documenting Evidence
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            While protecting your legal freedom, it is important to cooperate with the police investigation in a structured manner under the advice of your counsel. Gather and preserve all relevant evidence, including text messages, emails, financial records, and call logs that demonstrate the nature of your relationship with the deceased. If the relationship involved business or normal disagreements, documented proof of these transactions will help show the court that there was no malicious harassment or intent to instigate. Keeping a detailed timeline of events will also assist your lawyer in building a solid defense.
          </p>
        </div>
      </div>
    </section>
  );
}
