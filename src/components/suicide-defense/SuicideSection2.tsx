import React from "react";

export default function SuicideSection2({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-8 pt-4">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 2
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Deciphering the Evidentiary Value of a Suicide Note in Criminal Trials
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
            A suicide note is often treated as the primary piece of evidence in investigations under Section 306 of the IPC or Section 108 of the BNS. However, its presence does not automatically guarantee a conviction. Courts examine the document to determine if it reflects a genuine, voluntary statement or is the result of coercion, manipulation, or temporary emotional distress. Investigating agencies must conduct handwriting analysis and forensic testing to confirm the authorship and authenticity of the note before it can be relied upon as a primary basis for prosecution.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Admissibility of Suicide Notes under the Indian Evidence Act
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            Under Section 32 of the Indian Evidence Act, 1872, or the corresponding provision of the Bharatiya Sakshya Adhiniyam, a suicide note is admissible as a dying declaration when it relates to the cause of the writer death. This makes it a highly potent piece of evidence that can be admitted without the traditional requirement of cross-examining the author. Nevertheless, the court will closely analyze whether the statements in the note are corroborated by other independent evidence. If the note contains vague allegations, lacks specific details, or displays inconsistencies, the trial court will refuse to rely on it as a sole basis for holding the accused guilty of abetment.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Distinguishing Between Direct Accusation and Emotional Outpourings
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            A crucial part of criminal defense in these cases is helping the court distinguish between direct, malicious accusations and mere emotional outpourings of a sensitive mind. Many suicide notes name individuals not because of any criminal instigation, but because the deceased felt overwhelmed by life circumstances, financial losses, or relationship issues. The Supreme Court has repeatedly held that if a person of hyper-sensitive nature decides to end their life due to ordinary conflicts, the individuals mentioned in the note cannot be held criminally liable for abetment. Defense counsel must demonstrate that the note represents a subjective emotional reaction rather than objective evidence of a crime.
          </p>
        </div>
      </div>
    </section>
  );
}
