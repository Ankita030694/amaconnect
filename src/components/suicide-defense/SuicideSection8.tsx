import React from "react";

export default function SuicideSection8({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-8 pt-4">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 8
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Pursuing Legal Remedies and Redress Against False Accusations
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
            Being falsely implicated in a suicide abetment case can cause irreparable damage to an individual personal reputation, career, and mental well-being. Once you have been acquitted by the court or the FIR has been quashed by the High Court, you have legal remedies to hold those who filed the false charges accountable. Taking these steps is important not only to restore your reputation but also to deter others from using severe criminal provisions for personal vendettas or blackmail.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Filing Counter-Claims and Defamation Proceedings
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            An acquitted individual can file a civil suit for damages or initiate criminal defamation proceedings under Section 499 and 500 of the IPC, or the corresponding sections under the BNS. If you can show that the allegations were made maliciously and without any reasonable cause, resulting in significant public humiliation and financial loss, the court can direct the complainants to pay substantial compensation. Criminal defamation carries a punishment of simple imprisonment for a term which may extend to two years, or with fine, or with both, serving as a strong remedy against false accusers.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Seeking Compensation for Malicious Prosecution
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            In addition to defamation, you can file a civil suit for malicious prosecution. To succeed, you must prove that you were prosecuted by the defendant, that the prosecution terminated in your favor (either through acquittal or quashing), that the prosecution was initiated without any reasonable or probable cause, and that it was motivated by malice. Proving these elements allows you to recover the legal expenses incurred during your defense, along with damages for the mental agony and loss of business or employment suffered due to the false abetment charges.
          </p>
        </div>
      </div>
    </section>
  );
}
