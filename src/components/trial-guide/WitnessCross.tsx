import React from "react";

export default function WitnessCross({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 6
          </span>
          <h2 className="text-xl sm:text-2xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            The Art of Cross-Examination
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed text-justify mb-4">
            Cross-examination is often described as the ultimate test of litigation skill, and rightly so. Under Section 143 of the Indian Evidence Act, leading questions are fully permitted during cross. This is your exclusive opportunity to seize control of the narrative, test the opposing witness's veracity, expose evidentiary gaps, and demonstrate inherent bias.
          </p>
          <p className="text-sm text-gray-600 leading-relaxed text-justify mb-4">
            Many young lawyers mistakenly believe that cross-examination is about destroying a witness dramatically. In reality, effective cross-examination is surgical. It relies on meticulous preparation, tight leading questions, and a profound understanding of human psychology.
          </p>
        </div>

        {/* Quote Block */}
        <div className="border-l-4 border-[#D4AF37] bg-[#FDFBF7] p-6 rounded-r-2xl italic text-gray-700 text-sm leading-relaxed my-2">
          "The greatest mistake a junior cross-examiner makes is asking 'Why?'. As soon as you ask 'Why', you give the witness a platform to explain away their contradiction and regain control. Keep your questions short, statements tight, and only demand a Yes or No. You are testifying; the witness is merely agreeing."
          <span className="block text-xs font-bold text-gray-900 mt-3 not-italic">— Senior Advocate Soli Sorabjee, Selected Speeches</span>
        </div>

        {/* Cross Strategies */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
          <div className="bg-[#FAF9F5] border border-gray-100 rounded-3xl p-6 shadow-sm">
            <h3 className="text-sm font-bold text-[#2D2219] mb-3">1. Impeaching Witness Credibility</h3>
            <p className="text-xs text-gray-600 leading-relaxed text-justify">
              Under Section 146 and 155 of the Evidence Act, you can impeach a witness's credit by showing they have a financial stake in the outcome, are biased towards the party, or have a track record of dishonesty. Use prior inconsistent statements (in writing or police reports under Section 145) to confront them directly. Trap them into committing to their current lie before exposing the previous written truth.
            </p>
          </div>

          <div className="bg-[#FAF9F5] border border-gray-100 rounded-3xl p-6 shadow-sm">
            <h3 className="text-sm font-bold text-[#2D2219] mb-3">2. Maintain Tight Control (The "Leading" Rule)</h3>
            <p className="text-xs text-gray-600 leading-relaxed text-justify">
              Never let the witness narrate stories. Formulate leading statements: "You were not present at the site at 10 AM, correct?" instead of "Where were you at 10 AM?". If the witness tries to elaborate, bring them back politely but firmly: "Thank you, but please answer my question with a simple Yes or No." If they persist, request the judge to direct the witness.
            </p>
          </div>

          <div className="bg-[#FAF9F5] border border-gray-100 rounded-3xl p-6 shadow-sm">
            <h3 className="text-sm font-bold text-[#2D2219] mb-3">3. Watch Tone and Posture</h3>
            <p className="text-xs text-gray-600 leading-relaxed text-justify">
              Avoid aggressive body language or raising your voice. A calm, methodical, and respectful tone is much more effective at uncovering contradictions than hostile shouting. Bullying witnesses also invites prompt objections from opposing counsel and warnings from the judge. Kill them with courtesy.
            </p>
          </div>

          <div className="bg-[#FAF9F5] border border-gray-100 rounded-3xl p-6 shadow-sm">
            <h3 className="text-sm font-bold text-[#2D2219] mb-3">4. The Golden Rule: Stop When You Win</h3>
            <p className="text-xs text-gray-600 leading-relaxed text-justify">
              When the witness admits a crucial contradiction, move on immediately. Do not try to force them to admit they lied, and do not explain the significance of the admission during the examination. If you push one step too far ("So you admit you were lying earlier?"), you give them a chance to explain it away. Save the analysis for your final oral arguments.
            </p>
          </div>
        </div>

        {/* Tip Box */}
        <div className="bg-red-50/50 border border-red-100 rounded-3xl p-6 flex flex-col sm:flex-row gap-5 items-start mt-2">
          <div className="w-12 h-12 rounded-2xl bg-red-100 flex items-center justify-center text-red-600 flex-shrink-0">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
              <line x1="12" y1="9" x2="12" y2="13"/>
              <line x1="12" y1="17" x2="12.01" y2="17"/>
            </svg>
          </div>
          <div>
            <h3 className="text-base font-bold text-red-950 mb-2">
              Warning: Fishing Expeditions
            </h3>
            <p className="text-sm text-red-900/80 leading-relaxed text-justify">
              Never ask a question in cross-examination to which you do not already know the answer. A cross-examination is not an investigation; it is a demonstration. If you ask an open-ended question hoping to stumble upon a favorable fact, you risk the witness dropping a bombshell that destroys your entire defense.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
