import React from "react";

export default function SuicideSection1({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-8 pt-4">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 1
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Understanding Section 306 IPC and the Legal Framework of Abetment of Suicide
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
            The offence of abetment of suicide in India is governed primarily by Section 306 of the Indian Penal Code (IPC), which criminalizes any act that directly instigates or assists a person in taking their own life. If any individual commits suicide, whoever abets the commission of such suicide is liable to be punished with imprisonment of either description for a term which may extend to ten years, and shall also be liable to fine. Because of the severe penalties involved, courts scrutinize these charges with intense detail to prevent the misuse of the law in situations involving normal relationship friction, professional stresses, or business disputes where there was no criminal intent.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Statutory Definition of Abetment under Section 107 IPC
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            To establish abetment under Section 306, the prosecution must link the accused actions directly to the definition of abetment found in Section 107 of the IPC. Under Section 107, a person abets the doing of a thing in three distinct ways: first, by instigating any person to do that thing; second, by engaging in a conspiracy with one or more other persons for the doing of that thing; or third, by intentionally aiding, by any act or illegal omission, the doing of that thing. In suicide abetment cases, the prosecution must show that the accused engaged in active instigation, conspiracy, or intentional aid. Crucially, the mere existence of a dispute or the act of demanding legally owed money does not constitute abetment unless there is a clear intent to provoke the deceased to commit suicide.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            The Transition to the Bharatiya Nyaya Sanhita (BNS) Framework
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            Under the new criminal law framework introduced through the Bharatiya Nyaya Sanhita (BNS), the provisions corresponding to Section 306 IPC are captured under Section 108 of the BNS. The essential legal principles, statutory definitions of abetment, and maximum punishments remain consistent with the legacy IPC framework. However, the legal transition requires practitioners to cite the updated sections when filing petitions, bail applications, or quashing requests in jurisdictions where the BNS has taken full effect. Understanding the procedural alignment between the old and new codes is critical for maintaining consistency in court pleadings and navigating the transition.
          </p>
        </div>
      </div>
    </section>
  );
}
