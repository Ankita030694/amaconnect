import React from "react";

export default function SuicideSection6({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-8 pt-4">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 6
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Petitioning for Quashing of the FIR under Section 482 CrPC
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
            If the FIR filed against you is clearly baseless, vexatious, or motivated by personal enmity, you have the right to approach the High Court for quashing the FIR. This is done by filing a petition under Section 482 of the CrPC, which recognizes the inherent powers of the High Court to make such orders as may be necessary to give effect to any order under this Code, or to prevent abuse of the process of any court or otherwise to secure the ends of justice. A successful quashing petition completely terminates the criminal proceedings before the trial starts.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Legal Grounds for Exercising Inherent High Court Powers
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            The High Court exercises its powers under Section 482 sparingly and with caution. To succeed in a quashing petition in a Section 306 IPC case, the petitioner must demonstrate that even if the allegations in the FIR are accepted in their entirety, they do not disclose the essential ingredients of the offence of abetment. If the FIR fails to show any positive act of instigation, any conspiracy, or any intentional aid by the accused that directly led to the suicide, the High Court will intervene to prevent the accused from undergoing the harassment of a long and futile criminal trial.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Precedents of Successful FIR Quashing in Section 306 IPC Cases
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            There are numerous judicial precedents where High Courts have quashed FIRs under Section 306 IPC. For instance, in cases where a bank manager demanded loan repayment, a teacher disciplined a student, or a supervisor pointed out poor performance at work, and the individual subsequently committed suicide naming them in a note, High Courts have quashed the FIRs. The courts held that these actions were part of regular professional duties and lacked the requisite mens rea or intent to instigate. Citing these relevant precedents is a crucial part of presenting a strong quashing petition.
          </p>
        </div>
      </div>
    </section>
  );
}
