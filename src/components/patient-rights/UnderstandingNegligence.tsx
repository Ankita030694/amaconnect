import React from "react";

export default function UnderstandingNegligence({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 1
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Understanding Medical Negligence in India
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
            Medical negligence in India is a complex legal domain where the boundaries of civil liability, consumer protection, criminal accountability, and constitutional duties overlap. When patients seek treatment, they place their health and lives in the hands of medical practitioners. Under the Indian legal system, any failure by a healthcare professional to exercise reasonable care and skill can lead to legal action. This section examines the constitutional foundations of patient healthcare rights and the primary judicial tests used by courts to evaluate claims of medical malpractice.
          </p>
        </div>

        <div className="space-y-10">
          {/* H3: Constitutional Basis of Right to Health */}
          <div className="flex flex-col gap-3">
            <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
              Constitutional Basis of Right to Health
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed text-justify">
              The right to health is not explicitly mentioned as a fundamental right in the Constitution of India, yet the Supreme Court of India has dynamically read it into the right to life under Article 21. In the landmark case of Paschim Banga Khet Mazdoor Samity v. State of West Bengal, the court held that the constitutionally guaranteed right to life includes the right to receive timely medical treatment in emergencies. This ruling established that government hospitals and their medical officers have a non-negotiable obligation to provide immediate assistance to patients, and the denial of emergency medical aid due to administrative delays or lack of beds is a direct violation of Article 21. Additionally, the Directive Principles of State Policy, specifically Article 38, Article 39(e), Article 41, and Article 47, place a positive duty on the State to secure social welfare, improve public health, and prevent the abuse of citizens, which reinforces the constitutional framework. Consequently, if a public healthcare facility fails to provide standard care, patients can file writ petitions in the High Courts or the Supreme Court, seeking compensation and institutional reform. The judiciary has consistently ruled that the preservation of human life is of paramount importance, and no state agency can cite financial constraints to avoid its constitutional obligation to provide essential medical services.
            </p>
          </div>

          {/* H3: Defining Negligence: The Bolam Test Standard */}
          <div className="flex flex-col gap-3">
            <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
              Defining Negligence: The Bolam Test Standard
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed text-justify">
              In civil and consumer law, the standard used to define medical negligence is derived from the English case Bolam v. Friern Hospital Management Committee, which was subsequently adopted and refined by the Supreme Court of India in Jacob Mathew v. State of Punjab. Under the Bolam standard, a doctor is not guilty of negligence if they acted in accordance with a practice accepted as proper by a responsible body of medical professionals skilled in that particular branch of medicine. The law does not expect a medical practitioner to possess the highest possible degree of professional skill, but rather the ordinary, reasonable skill of an average competent practitioner in their field. To establish negligence, a claimant must demonstrate three key elements: the existence of a legal duty of care, a breach of that duty, and direct consequential damage caused by the breach. If there are two acceptable schools of medical thought regarding a specific surgical procedure or course of treatment, and the doctor follows one of them, they cannot be held negligent simply because the alternative method might have produced a better outcome. The Bolam test acts as a safeguard, ensuring that doctors are not penalized for errors in judgment that fall within the spectrum of reasonable clinical practice, thereby preventing defensive medicine.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
