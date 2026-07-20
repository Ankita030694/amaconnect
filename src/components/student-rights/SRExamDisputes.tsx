import React from "react";

export default function SRExamDisputes({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 5
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Arbitrary Disqualifications and Exam Disputes
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
            Educational boards and universities sometimes act arbitrarily when conducting exams, withholding marksheets, or accusing students of cheating without proper proof. Affected students must act quickly to secure their academic records and challenge these arbitrary decisions.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Legal Remedies for Withheld Marksheets and Results
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            Universities often withhold a student's marksheet, degree certificate, or exam results over pending fee disputes, attendance shortages, or minor documentation discrepancies. However, courts have repeatedly ruled that universities cannot hold a student's degree hostage over fee disputes.
          </p>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            If a university arbitrarily withholds results, the student should first send a formal representation to the controller of examinations. If the administration refuses to release the documents, the student can file a writ petition (Mandamus) before the High Court, asking the court to direct the university to release their certificates, enabling them to pursue employment or higher studies.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Challenging Unfair Accusations of Unfair Means (UMC)
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            An Unfair Means Case (UMC) accusation can damage a student's career, leading to exam disqualification, suspensions, or rustication. Universities must follow fair procedures before deciding on UMC cases.
          </p>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            The student must be provided with: a copy of the invigilator's report, the specific evidence collected (such as cheating slips or digital records), and a formal opportunity to explain their side before a UMC Committee. If the committee penalizes the student without a hearing, the decision violates natural justice. The student can challenge the UMC order in civil courts or through writ petitions, showing procedural errors or lack of evidence, securing their academic record.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <div className="bg-[#FAF8F5] border border-gray-100 rounded-2xl p-6">
              <h4 className="font-bold text-[#2D2219] mb-2">Writ of Mandamus</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                High Court orders directing colleges to release degrees or marksheets. Restricts colleges from holding certificates over commercial disputes.
              </p>
            </div>
            <div className="bg-[#FAF8F5] border border-gray-100 rounded-2xl p-6">
              <h4 className="font-bold text-[#2D2219] mb-2">UMC Defense Rights</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Entitles the student to access invigilator reports and present a defense. Arbitrary UMC orders can be set aside by courts for violating fair procedure.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
