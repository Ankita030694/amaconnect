import React from "react";

export default function SRAntiRagging({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 2
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Anti-Ragging Laws and Campus Safety
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
            Ragging is a severe form of abuse that threatens the mental and physical well-being of freshers on college campuses. To eliminate this practice, the University Grants Commission (UGC) and the Supreme Court of India have established zero tolerance rules and strict criminal penalties.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            UGC Regulations and Supreme Court Guidelines
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            Following the Supreme Court judgment in the Raghavan Committee case, the UGC notified the Regulations on Curbing the Menace of Ragging in Higher Educational Institutions, 2009. These rules define ragging broadly to cover: physical abuse, teasing, psychological harassment, financial exploitation, or forcing students to perform acts causing embarrassment or fear.
          </p>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            Universities are legally required to establish active Anti-Ragging Committees, Anti-Ragging Squads, and host anonymous complaint drop boxes. Institutions must publish warning notices, distribute anti-ragging booklets to new students, and obtain signed undertakings from both students and parents during admission, ensuring awareness.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Filing FIRs and Institutional Action against Seniors
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            When a ragging incident occurs, the affected student should report the details to the college Anti-Ragging Committee or call the UGC national helpline (1800-180-5522). If the committee confirms the incident, the college administration is legally required to file a First Information Report (FIR) at the local police station within twenty-four hours.
          </p>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            If the college fails to file the FIR, they face losing their UGC affiliation. The police register the case under relevant sections of the Indian Penal Code, such as Section 323 (hurting), 341 (wrongful restraint), 506 (criminal intimidation), or corresponding BNS sections. The university must suspend the accused seniors, rusticate them from campus hostels, and ban them from admissions to other colleges, protecting the fresher's rights.
          </p>

          <div className="bg-[#FAF8F5] border border-gray-100 rounded-2xl p-6 mt-4">
            <h4 className="font-bold text-[#2D2219] mb-3">Anti-Ragging Support Framework</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs sm:text-sm text-gray-600">
              <div>
                <span className="text-[#D4AF37] font-bold block mb-1">Support Channels</span>
                <ul className="space-y-1 list-disc list-inside text-gray-500">
                  <li>UGC National Helpline: 1800-180-5522.</li>
                  <li>Online portal for anonymous complaints.</li>
                  <li>Campus Anti-Ragging Committees and Squads.</li>
                  <li>Undertakings signed by parents and students.</li>
                </ul>
              </div>
              <div>
                <span className="text-[#D4AF37] font-bold block mb-1">Administrative Actions</span>
                <ul className="space-y-1 list-disc list-inside text-gray-500">
                  <li>Mandatory FIR filing by the college within 24 hours.</li>
                  <li>Suspension and rustication of accused students.</li>
                  <li>Academic derecognition of negligent colleges.</li>
                  <li>Police prosecution under criminal laws.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
