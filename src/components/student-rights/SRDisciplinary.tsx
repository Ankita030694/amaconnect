import React from "react";

export default function SRDisciplinary({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 6
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Student Disciplinary Inquiries
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
            When campus administrations accuse students of misconduct, vandalism, or violating code rules, they must follow fair procedures. Disciplinary actions cannot be taken based on personal bias or without giving the student a fair chance to defend themselves.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Enforcing Principles of Natural Justice on Campus
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            The principles of natural justice require that no student should be condemned unheard, and the deciding authority must act without bias. These principles apply to all academic institutions, including private universities.
          </p>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            If a university decides to rusticate, suspend, or penalize a student, it must base its decision on verified evidence rather than rumors or assumptions. The committee members conducting the inquiry must not be directly involved in the incident, ensuring an unbiased decision.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Right to Show Cause Notices and Personal Hearings
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            Before taking any disciplinary action, the university must serve a formal show-cause notice to the student. The notice must specify: the exact charges, the rules violated, and the supporting evidence, giving the student a reasonable time (typically seven to fourteen days) to reply.
          </p>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            The student is also entitled to a personal hearing before the disciplinary committee to explain their actions and present witnesses. If a university rusticated a student without serving a show-cause notice or conducting a hearing, the suspension is legally invalid. The student can challenge it in courts, securing immediate stay orders to resume classes, protecting their education.
          </p>

          <div className="bg-[#FAF8F5] border border-gray-100 rounded-2xl p-6 mt-4">
            <h4 className="font-bold text-[#2D2219] mb-3">Disciplinary Inquiry Standards</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs sm:text-sm text-gray-600">
              <div>
                <span className="text-[#D4AF37] font-bold block mb-1">Notice Requirements</span>
                <ul className="space-y-1 list-disc list-inside text-gray-500">
                  <li>Written show cause notice stating exact charges.</li>
                  <li>Copy of the evidence and witness statements.</li>
                  <li>Reasonable timeline to draft and submit a reply.</li>
                  <li>Direct citation of code of conduct clauses.</li>
                </ul>
              </div>
              <div>
                <span className="text-[#D4AF37] font-bold block mb-1">Inquiry Process</span>
                <ul className="space-y-1 list-disc list-inside text-gray-500">
                  <li>Personal hearing before an unbiased committee.</li>
                  <li>Right to present defense witnesses and documents.</li>
                  <li>Written reasoned order detailing final decisions.</li>
                  <li>Right to appeal to the university chancellor or courts.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
