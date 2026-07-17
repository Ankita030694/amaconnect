import React from "react";

export default function StateMedicalCouncils({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 8
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Role of State Medical Councils
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
            Doctors who participate in arbitrary overcharging or detainment of patients violate their professional ethics code. Patients can file misconduct complaints with State Medical Councils to enforce ethical standards.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Filing Professional Misconduct Complaints against Doctors
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            When a hospital is involved in overcharging, unnecessary surgeries, or detaining patients, the doctors involved may be violating the ethical guidelines established under the Indian Medical Council (Professional Conduct, Etiquette and Ethics) Regulations, 2002. Under these regulations, doctors are prohibited from participating in commercial exploitation, accepting cuts or commissions for diagnostics, or refusing to release patients due to financial disputes. If a doctor actively supports the hospital illegal detention policy or participates in billing inflation, the patient can file a formal complaint for professional misconduct with the State Medical Council where the doctor is registered. The complaint must be filed in writing and supported by an affidavit, detailing the specific ethical violations, and accompanied by medical records, treatment sheets, and bills as evidence. The State Medical Council has the authority to investigate the doctor conduct, hold hearings, and summon the doctor to explain their actions. If the council finds the doctor guilty of professional misconduct, it has the power to issue warnings, suspend their license to practice medicine for a specific period, or permanently remove their name from the medical register. Filing an ethical misconduct complaint holds doctors individually accountable for their actions, discouraging them from participating in corporate hospital malpractices, protecting patient rights, and restoring the ethical standards of the medical profession.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Medical Council Grievance and Appeal Mechanisms
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            The State Medical Councils provide a structured grievance redressal mechanism to handle complaints against registered practitioners, but victims must navigate the process with care to ensure their complaints are heard. Once a professional misconduct complaint is submitted, the executive committee of the council reviews the case to determine if there is a prima facie case of ethical violation. If the committee approves, they will serve a notice to the doctor, requiring them to submit a written explanation within a specified timeframe. The council will then conduct a formal inquiry, allowing both the complainant and the doctor to present arguments, cross-examine witnesses, and submit additional documentary evidence. Under the rules, the council is required to complete the inquiry and pass a decision within six months of receiving the complaint. If the complainant is not satisfied with the decision of the State Medical Council, or if the council delays the decision beyond the six month limit, the complainant has the right to file an appeal before the National Medical Commission (NMC). The NMC serves as the apex appellate authority and has the power to review the case, overturn the state council decisions, and enhance the penalties if necessary. Understanding these grievance and appeal mechanisms ensures that patients can persist in their legal pursuit of justice, holding medical professionals accountable at all levels.
          </p>
        </div>
      </div>
    </section>
  );
}
