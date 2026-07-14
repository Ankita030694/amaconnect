import React from "react";

export default function ChamberMockTrials({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 3
          </span>
          <h2 className="text-xl sm:text-2xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Chamber Rehearsals &amp; Mock Trials
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed text-justify mb-4">
            A witness should never step into the witness box unprepared. Conducting mock trial sessions in your chamber is essential to align expectations, reduce anxiety, and ensure that the witness can face cross-examination without panic.
          </p>
        </div>

        {/* Quote Block */}
        <div className="border-l-4 border-[#D4AF37] bg-[#FDFBF7] p-5 rounded-r-2xl italic text-gray-700 text-sm leading-relaxed my-2">
          "Witness coaching is illegal, but witness preparation is an ethical duty. You must explain the courtroom layout, how questions will be asked, and subject them to a mock cross-examination so they are not shocked by opposing counsel's tone."
          <span className="block text-xs font-bold text-gray-900 mt-2 not-italic">— Senior Advocate Ram Jethmalani, Chamber Guidelines Archive</span>
        </div>

        {/* Details Checklist */}
        <div className="bg-[#FAF9F5] border border-gray-100 rounded-3xl p-6 sm:p-8">
          <h3 className="text-sm font-bold text-[#2D2219] mb-4">Essential Steps in Chamber Preparation</h3>
          <ul className="space-y-4">
            {[
              {
                title: "Simulate the Opposing Cross-Examination",
                desc: "Ask your colleague or co-counsel to play the role of opposing counsel and aggressively cross-examine your witness based on previous statements or records. This exposes vulnerable areas in their memory."
              },
              {
                title: "Explain Courtroom Geography & Mechanics",
                desc: "Many witnesses have never seen a courtroom. Describe where the judge, court clerks, stenographers, and counsels stand. Instruct them to stand upright, speak audibly, and address their responses directly to the judge."
              },
              {
                title: "Briefing on the 'I Don't Remember' Trap",
                desc: "Instruct the witness that if they do not remember a specific date or detail, it is perfectly legal and safe to say 'I do not recall at this moment' instead of guessing or fabricating an answer under pressure."
              },
              {
                title: "No Consulting Counsel During Deposition",
                desc: "Remind the witness that once they stand in the witness box, they cannot look at you or gesture to you for help. They are on their own, and any eye contact with you during questioning will be noted by the judge."
              }
            ].map((item, idx) => (
              <li key={idx} className="flex gap-3 items-start">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] mt-1.5 flex-shrink-0" />
                <div>
                  <h4 className="text-xs font-bold text-gray-900 mb-0.5">{item.title}</h4>
                  <p className="text-xs text-gray-500 leading-relaxed text-justify">{item.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
}
