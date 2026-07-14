import React from "react";

export default function EmergencyCare({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 7
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Emergency Medical Care and Hospital Duties
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
            Emergency medical care represents a critical intersection of human rights, constitutional duties, and medical ethics in India, where time is of the essence. When a patient arrives at a hospital in a critical condition, whether due to a road accident, cardiac arrest, or severe trauma, the immediate duty of the healthcare facility is to save their life. Historically, emergency admissions in India were plagued by administrative hurdles, police reporting delays, and financial demands, often resulting in the loss of patient lives during the golden hour of treatment. To address this crisis, the Indian legal system has established that the right to receive timely emergency medical treatment is an integral part of the right to life under Article 21 of the Constitution. Hospitals, whether owned by the government or private entities, are legally bound to prioritize medical stabilization over administrative formalities or financial payments. This means that a hospital cannot deny treatment or refuse admission to an emergency patient under the pretext of lack of funds, lack of beds, or because the case is of a medico legal nature requiring police involvement. The legal framework surrounding emergency care is designed to ensure that every citizen, regardless of their socio economic status, has immediate access to life saving interventions when faced with an acute medical crisis. Understanding these rights and duties is essential for both patients and healthcare providers, as it helps prevent tragic delays, establishes clear lines of accountability, and ensures that the clinical team operates under a robust, legally mandated framework that prioritizes human life above all else.
          </p>
        </div>

        <div className="space-y-10">
          {/* H3: The Statutory Right to Medical Stabilization */}
          <div className="flex flex-col gap-3">
            <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
              The Statutory Right to Medical Stabilization
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed text-justify">
              The right to medical stabilization is a fundamental component of emergency healthcare, establishing that a patient in a life threatening condition must receive basic clinical support before any other administrative action is taken. Under the Clinical Establishments Act and guidelines from the Ministry of Health and Family Welfare, stabilization is defined as the provision of such medical treatment as may be necessary to assure, within reasonable medical probability, that no material deterioration of the condition is likely to result from or occur during the transfer of the individual from the facility. When a patient arrives at an emergency department, the hospital staff must immediately assess the airway, breathing, and circulation, administering necessary fluids, medications, or surgical interventions to secure these vital functions. This obligation applies to all clinical establishments, including private tertiary care hospitals, which often try to redirect patients to government facilities to avoid uncompensated care. The law explicitly forbids this practice, commonly known as patient dumping, requiring the hospital to stabilize the patient before attempting any transfer. Only when the patient's condition is sufficiently stable, and the receiving facility has confirmed the availability of a bed and specialized staff, can a transfer be legally executed. If a hospital refuses to stabilize an emergency patient due to an inability to pay, it constitutes a clear breach of statutory duty, exposing the hospital to heavy administrative fines, suspension of their license, and civil lawsuits for damages. This statutory right ensures that the first hours of critical care are focused entirely on saving lives rather than assessing financial capability.
            </p>
          </div>

          {/* H3: Supreme Court Rulings on Emergency Admissions */}
          <div className="flex flex-col gap-3">
            <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
              Supreme Court Rulings on Emergency Admissions
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed text-justify">
              The Supreme Court of India has played a pivotal role in establishing emergency medical care as an absolute right. In the landmark case of Pt. Parmanand Katara v. Union of India, decided in 1989, the petitioner challenged the practice of hospitals refusing to treat accident victims until police formalities were completed. The Supreme Court issued a historical ruling, declaring that the preservation of human life is of paramount importance. The court held that every medical practitioner, whether practicing in a government hospital or a private clinic, has an obligation to extend medical assistance for preserving life. The court clarified that no law or state action can intervene to delay this duty, and medical professionals must not fear harassment from police or legal authorities for providing immediate treatment in medico legal cases. This precedent was further strengthened in Paschim Banga Khet Mazdoor Samity v. State of West Bengal, where the court held that the failure of a government hospital to provide timely treatment to an emergency patient due to a lack of beds constitutes a direct violation of the right to life under Article 21. The judiciary established that the State cannot plead financial constraints or administrative limitations to avoid its constitutional obligation to preserve life. These judgments have been incorporated into national health policies and the Clinical Establishments Act, creating a binding legal framework that mandates immediate medical response in emergencies. Today, any hospital that denies admission or delays stabilization for an emergency patient, citing paperwork, police clearance, or advance payment, faces severe judicial censure and substantial civil liability for negligence.
            </p>
          </div>

          {/* H3: Emergency Medical Services and Staff Duties */}
          <div className="flex flex-col gap-3">
            <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
              Emergency Medical Services and Staff Duties
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed text-justify">
              The duties of emergency medical technicians, nurses, and hospital staff are critical to ensuring the seamless delivery of life saving care in the emergency department. These professionals are the first line of response, responsible for triaging patients based on the severity of their conditions rather than the order of arrival. Under standard clinical protocols, emergency medical staff must perform rapid clinical assessments, initiate cardiac monitoring, administer emergency medications, and prepare patients for immediate surgical or medical procedures. A critical aspect of their duty is to maintain detailed, real time records of all interventions, drug dosages, and vital signs, as these logs form the primary evidence in any future negligence claim. Additionally, emergency department staff have a duty to communicate effectively with the patient's family, keeping them informed of the patient's status and obtaining consent when feasible, though consent requirements may be bypassed in life threatening situations when the patient is unconscious. Furthermore, hospital administrators have a duty to ensure that the emergency room is adequately staffed with qualified personnel and equipped with functioning life support machinery at all times. If a patient suffers harm due to defective equipment or the absence of a trained doctor in the emergency bay, the hospital faces corporate negligence liability. The legal system expects emergency professionals to act with the speed and skill expected in a high pressure environment, balancing clinical guidelines with the urgent need to stabilize the patient, making their role both legally challenging and clinically vital in the Indian healthcare landscape. This requires rigorous training and continuous standard audits of clinical operations to prevent preventable mortality in critical situations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
