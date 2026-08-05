import React from "react";

export default function SuicideSection7({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-8 pt-4">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 7
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Establishing a Robust Defense and Proving Innocence in Court
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
            If the case proceeds to trial, the defense team must build a robust case to counter the prosecution allegations. While the prosecution bears the burden of proving the guilt of the accused beyond a reasonable doubt, the defense must actively introduce evidence that negates the essential elements of abetment. Demonstrating that the deceased was suffering from depression, pre-existing mental health issues, or external financial pressures unrelated to the accused can significantly weaken the prosecution case.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Demonstrating Absence of Instigation or Intentional Aid
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            The core of the defense strategy lies in showing the absence of instigation or intentional aid. Defense counsel must cross-examine prosecution witnesses to establish that the interactions between the accused and the deceased were normal, professional, or part of standard business dealings. For example, if the dispute was over a financial transaction, showing that the accused filed a civil suit or sent a legal notice for recovery demonstrates that the dispute was handled through legal means, rather than through illegal harassment or instigation. This negates the claim of malicious intent.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Utilizing Electronic Evidence and Character Testimonials
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            Electronic evidence, such as WhatsApp chats, emails, and audio recordings, plays an increasingly important role in modern criminal defense. Under Section 65B of the Indian Evidence Act, or the corresponding new provisions, these records are fully admissible if accompanied by the required certificate. Presenting records of conversations that show a friendly, supportive, or normal relationship right up to the time of the incident can disprove claims of continuous harassment. Character testimonials and statements from neutral third parties can also help establish the reputation and conduct of the accused.
          </p>
        </div>
      </div>
    </section>
  );
}
