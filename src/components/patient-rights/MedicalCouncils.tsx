import React from "react";
import Link from "next/link";

export default function MedicalCouncils({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 4
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Filing Complaints with Medical Councils
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
            While consumer commissions offer financial compensation, they cannot restrict a physician from practicing medicine. To address professional ethics and the right to practice, patients must file complaints with the appropriate State Medical Council. These councils function as quasi-judicial bodies responsible for maintaining professional ethics and investigating violations of the Indian Medical Council Regulations, 2002, which have been preserved under the National Medical Commission Act, 2019.
          </p>
        </div>

        <div className="space-y-10">
          {/* H3: Professional Misconduct and State Councils */}
          <div className="flex flex-col gap-3">
            <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
              Professional Misconduct and State Councils
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed text-justify">
              Under the National Medical Commission framework, every practicing doctor must be registered with their respective State Medical Council, such as the Delhi Medical Council or the Maharashtra Medical Council. These councils have the statutory authority to investigate complaints of professional misconduct against registered practitioners. Misconduct is defined broadly under Chapter 7 of the Indian Medical Council Professional Conduct, Etiquette and Ethics Regulations, 2002. It includes actions such as prescribing generic drugs inappropriately, practicing fee-splitting or receiving commissions, issuing false medical certificates, disclosing patient medical secrets without consent, performing illegal sex-determination tests, and displaying advertisements to solicit patients. Furthermore, any doctor who fails to provide emergency medical treatment, or who performs surgical procedures without obtaining proper informed consent, can be held liable for professional misconduct. A patient or their relative can submit a signed complaint accompanied by relevant affidavits and medical records to the registrar of the state council where the doctor is registered.
            </p>
          </div>

          {/* H3: The Disciplinary Action and Appeals Process */}
          <div className="flex flex-col gap-3">
            <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
              The Disciplinary Action and Appeals Process
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed text-justify">
              Once a complaint is received, the State Medical Council initiates an inquiry by forwarding a copy of the complaint to the accused doctor, demanding a written explanation within a specified timeframe, usually thirty days. The council often refers the case to an executive committee or an independent ethical committee comprised of medical experts to analyze whether the clinical actions deviated from standard medical protocols. Both the patient and the physician are given an opportunity to present oral arguments and submit expert witness evidence. If the council finds the doctor guilty of professional misconduct, it can take disciplinary action, which ranges from issuing a formal warning or censure to suspending the doctor license to practice for a specific period, or permanently removing their name from the Indian Medical Register. If either the complainant or the doctor is dissatisfied with the decision of the State Medical Council, they have the statutory right to file an appeal with the Ethics and Medical Registration Board of the National Medical Commission in New Delhi within sixty days of receiving the order, ensuring a multi-tier grievance redressal system.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
