import React from "react";

export default function CriminalLiability({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 5
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Criminal Liability of Medical Professionals
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
            In rare cases where medical negligence is so severe that it demonstrates a reckless disregard for human life, healthcare professionals can face criminal charges. Unlike civil or consumer actions, which focus on compensation, criminal prosecution seeks to penalize doctors with imprisonment. However, recognizing the risk of frivolous criminal complaints, the Indian judiciary has established strict, protective guidelines to shield medical practitioners from unnecessary arrests and harassment.
          </p>
        </div>

        <div className="space-y-10">
          {/* H3: Understanding Section 304A of Indian Penal Code */}
          <div className="flex flex-col gap-3">
            <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
              Understanding Section 304A of Indian Penal Code
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed text-justify">
              Under the Indian Penal Code, 1860, criminal medical negligence is prosecuted primarily under Section 304A, which deals with causing death by negligence. This section states that whoever causes the death of any person by doing any rash or negligent act not amounting to culpable homicide shall be punished with imprisonment of either description for a term which may extend to two years, or with a fine, or with both. It is vital to note that the degree of negligence required to establish criminal liability is significantly higher than that required under civil or consumer law. The Supreme Court has clarified that to convict a medical professional under criminal law, the negligence must be gross or reckless in nature. Simple errors of judgment, differences of medical opinion, or failure to cure a patient do not attract criminal prosecution. The prosecution must prove beyond a reasonable doubt that the doctor exhibited such a high degree of indifference to the safety of the patient that it crossed the line from civil liability to a crime against the State, which is a very high evidentiary standard.
            </p>
          </div>

          {/* H3: Supreme Court Guidelines on Doctor Arrests */}
          <div className="flex flex-col gap-3">
            <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
              Supreme Court Guidelines on Doctor Arrests
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed text-justify">
              To prevent patients from using threat of arrest as a tool to extort doctors, the Supreme Court in Jacob Mathew v. State of Punjab issued mandatory guidelines regulating criminal investigations against medical professionals. The court ruled that the police must not register a First Information Report, or FIR, against a doctor for criminal negligence, nor arrest them as a matter of course, without obtaining a preliminary medical opinion. Before initiating criminal proceedings, the investigating police officer must refer the case file to a competent independent medical board or a government doctor specialized in the relevant branch of medicine. The officer can only proceed with an arrest or formal charges if this independent medical report confirms a prima facie case of gross negligence. This protection ensures that doctors can perform high risk procedures and emergency operations without the constant fear of criminal prosecution, balancing the rights of patients to seek justice with the doctor professional need for operational security.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
