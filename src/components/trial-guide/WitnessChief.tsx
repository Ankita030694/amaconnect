import React from "react";

export default function WitnessChief({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 5
          </span>
          <h2 className="text-xl sm:text-2xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Witness Examination-in-Chief
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed text-justify mb-4">
            The Examination-in-Chief is your opportunity to build the foundation of your case. It is where your witness presents their first-hand account, records, or expert testimony. A poorly structured chief examination can leave gaps that opposing counsel will exploit during cross-examination.
          </p>
        </div>

        {/* Quote Block */}
        <div className="border-l-4 border-[#D4AF37] bg-[#FDFBF7] p-5 rounded-r-2xl italic text-gray-700 text-sm leading-relaxed my-2">
          "The secret to a great examination-in-chief is letting the witness speak, not the advocate. You are the director, they are the actor. Your questions must be open-ended, letting their answers carry the weight of truth."
          <span className="block text-xs font-bold text-gray-900 mt-2 not-italic">— Senior Advocate K. T. S. Tulsi, Advocate Masterclass Logs</span>
        </div>

        {/* Chief Rules */}
        <div className="space-y-6">
          <div className="flex gap-4 items-start">
            <div className="w-6 h-6 rounded bg-gray-50 flex items-center justify-center text-gray-700 flex-shrink-0 mt-0.5 font-bold text-xs">
              01
            </div>
            <div>
              <h3 className="font-bold text-gray-900 text-sm mb-1">Strict Prohibition of Leading Questions</h3>
              <p className="text-xs text-gray-500 leading-relaxed text-justify">
                Under Sections 141 and 142 of the Indian Evidence Act, leading questions (questions that suggest the answer you want, such as "Was the car driving at 80 km/h?") are strictly prohibited during Examination-in-Chief, unless they are introductory, undisputed, or explicitly permitted by the judge. Your questions must be open-ended: "What did you see next?", "How fast was the vehicle moving?".
              </p>
            </div>
          </div>

          <div className="flex gap-4 items-start">
            <div className="w-6 h-6 rounded bg-gray-50 flex items-center justify-center text-gray-700 flex-shrink-0 mt-0.5 font-bold text-xs">
              02
            </div>
            <div>
              <h3 className="font-bold text-gray-900 text-sm mb-1">Chronological Fact Flow</h3>
              <p className="text-xs text-gray-500 leading-relaxed text-justify">
                Structure the examination in a strictly chronological timeline. A scattered deposition confuses the judge and is harder to log in the court record. Begin with the witness's background, their connection to the dispute, and guide them step-by-step through the events.
              </p>
            </div>
          </div>

          <div className="flex gap-4 items-start">
            <div className="w-6 h-6 rounded bg-gray-50 flex items-center justify-center text-gray-700 flex-shrink-0 mt-0.5 font-bold text-xs">
              03
            </div>
            <div>
              <h3 className="font-bold text-gray-900 text-sm mb-1">Exhibiting Documents Properly</h3>
              <p className="text-xs text-gray-500 leading-relaxed text-justify">
                If your witness is proving documentary evidence, make sure they identify the signature or writing. Ask them: "Whose signature is at Mark A?", "How do you recognize this signature?". Proving documents during chief examination is a crucial procedural step to secure their admission into the evidence record.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
