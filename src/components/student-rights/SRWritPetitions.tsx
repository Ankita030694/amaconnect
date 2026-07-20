import React from "react";

export default function SRWritPetitions({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 8
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Writ Petitions Against Educational Boards
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
            When educational boards, state universities, or national testing agencies act in violation of their own rules, the affected students can approach the highest state courts. Writ petitions serve as a powerful tool to enforce accountability and protect academic careers.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Approaching High Courts for Re-evaluation Disputes
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            Students often find massive discrepancies in their marks, suggesting evaluation errors. While boards have their own re-checking rules, they are sometimes restrictive or refuse to show the answer sheets.
          </p>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            Under Article 226 of the Constitution, a student can file a writ petition before the High Court seeking a direction for the board to produce their answer key and evaluated sheet. High Courts have repeatedly ordered independent re-evaluations when students could demonstrate blatant marking errors or math discrepancies, ensuring evaluation transparency.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Filing Writs to Prevent Arbitrary Rustication
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            Rustication is a severe academic punishment that can end a student's educational path. If a university rusticates a student without solid proof, based on political vendetta or administrative bias, the decision can be challenged immediately.
          </p>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            The student can file a writ petition seeking a Writ of Certiorari to quash the rustication order, and a Writ of Mandamus to direct the college to let them attend classes and sit for exams. The petition must show: violation of natural justice, lack of show-cause notice, or absence of concrete evidence. Courts review these cases with high priority, granting interim relief to ensure the student does not lose an academic year due to administrative high-handedness.
          </p>

          <div className="bg-[#FAF8F5] border border-gray-100 rounded-2xl p-6 mt-4">
            <h4 className="font-bold text-[#2D2219] mb-3">High Court Writ Remedies</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm text-gray-600">
              <div>
                <span className="text-[#D4AF37] font-bold block mb-1">Writ of Certiorari</span>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Used to quash illegal disciplinary orders, rustication decrees, or arbitrary exam disqualifications passed by university boards.
                </p>
              </div>
              <div>
                <span className="text-[#D4AF37] font-bold block mb-1">Writ of Mandamus</span>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Directs universities or board authorities to fulfill their duties, such as conducting re-evaluations, releasing results, or re-admitting students.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
