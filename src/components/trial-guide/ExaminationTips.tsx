import React from "react";

export default function ExaminationTips({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 3
          </span>
          <h2 className="text-xl sm:text-2xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Witness Examination Strategies
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed text-justify mb-4">
            Examining a witness is both an art and a science, requiring a deep understanding of psychology, trial procedure, and the rules of evidence under the Indian Evidence Act.
          </p>
        </div>

        {/* Quote Block 3 */}
        <div className="border-l-4 border-[#D4AF37] bg-[#FDFBF7] p-5 rounded-r-2xl italic text-gray-700 text-sm leading-relaxed my-2">
          "During cross-examination, never ask a question to which you do not already know the answer. Your job is not to fish for information—it is to expose contradictions and establish your case narrative."
          <span className="block text-xs font-bold text-gray-900 mt-2 not-italic">— Advocate Rebecca John, Curated Trial Masterclass</span>
        </div>

        {/* 3 stages of examination */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#FAF9F5] border border-gray-100 rounded-2xl p-5 shadow-sm">
            <span className="block text-xs font-bold text-[#D4AF37] mb-2 uppercase tracking-wider">I. Chief Examination</span>
            <h4 className="text-xs font-bold text-[#2D2219] mb-2">Build Your Narrative</h4>
            <p className="text-[11px] text-gray-500 leading-relaxed">
              Guide your witness to tell their story chronologically. Under Section 141-142 of the Evidence Act, you cannot ask leading questions during chief examination, except on introductory or undisputed matters.
            </p>
          </div>

          <div className="bg-[#FAF9F5] border border-gray-100 rounded-2xl p-5 shadow-sm">
            <span className="block text-xs font-bold text-[#D4AF37] mb-2 uppercase tracking-wider">II. Cross-Examination</span>
            <h4 className="text-xs font-bold text-[#2D2219] mb-2">Expose Vulnerabilities</h4>
            <p className="text-[11px] text-gray-500 leading-relaxed">
              Leading questions are fully permitted here. Focus on pointing out inconsistencies between their deposition and previous police statements or pleadings. Keep your questions short and get binary (yes/no) answers.
            </p>
          </div>

          <div className="bg-[#FAF9F5] border border-gray-100 rounded-2xl p-5 shadow-sm">
            <span className="block text-xs font-bold text-[#D4AF37] mb-2 uppercase tracking-wider">III. Re-Examination</span>
            <h4 className="text-xs font-bold text-[#2D2219] mb-2">Clarify Ambiguities</h4>
            <p className="text-[11px] text-gray-500 leading-relaxed">
              If the cross-examination created confusion or ambiguity, use re-examination to clarify those specific points. Do not introduce entirely new matters without the explicit permission of the judge.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
