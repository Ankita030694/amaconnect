import React from "react";

export default function PatientRightsFAQ({ id }: { id?: string }) {
  const faqs = [
    {
      question: "What qualifies as medical negligence under Indian law?",
      answer: "Medical negligence occurs when a healthcare professional breaches their legal duty of care toward a patient, resulting in injury, suffering, or death. To establish negligence, courts look at whether the practitioner exercised the ordinary, reasonable skill expected from a competent doctor in their field (the Bolam Test standard). Examples include leaving surgical instruments inside a patient body, administering incorrect drug dosages, or operating without consent."
    },
    {
      question: "Who bears the burden of proof in a medical malpractice case?",
      answer: "The initial burden of proof lies on the patient or the complainant to establish a prima facie case of negligence by presenting relevant medical records, treatment logs, and expert medical opinions. Once the complainant establishes that the treatment deviated from standard clinical protocols and caused direct harm, the burden of proof shifts to the hospital or doctor to show they exercised reasonable care."
    },
    {
      question: "Can I file a consumer complaint against a government hospital or doctor?",
      answer: "Yes, but with conditions. The Supreme Court in the V.P. Shantha case ruled that medical services at government hospitals are covered under the Consumer Protection Act only if the hospital charges some patients (e.g. paying ward services) or if the employer reimburses the fees. If the government hospital provides services absolutely free of cost to all patients, it does not count as a service under consumer law, and the patient must file a civil suit or writ petition instead."
    },
    {
      question: "What is the limitation period for filing a medical negligence claim in India?",
      answer: "Under the Consumer Protection Act, 2019, a complaint must be filed within two years from the date on which the cause of action arose (i.e. the date when the negligence occurred or when the injury was discovered). For civil suits seeking damages in civil courts, the limitation period is three years from the date of the incident under the Limitation Act, 1963."
    },
    {
      question: "Can a doctor be arrested immediately if a patient dies during treatment?",
      answer: "No. Under the Supreme Court guidelines in Jacob Mathew v. State of Punjab, the police cannot arrest a doctor or register an FIR for criminal negligence under Section 304A IPC without first obtaining an independent medical opinion. A competent government doctor or medical board must examine the case files and provide a written report confirming a prima facie case of gross negligence before any arrest is made."
    },
    {
      question: "Is it legal for a hospital to hold a deceased patient body for unpaid bills?",
      answer: "No, this is strictly illegal. The Charter of Patients Rights, formulated under the Clinical Establishments Act and supported by various High Court rulings, states that hospitals cannot hold a patient body hostage to extort outstanding bills from grieving relatives. Doing so is a violation of human dignity. The hospital must release the body and can recover its financial dues through separate, lawful civil proceedings."
    },
    {
      question: "What essential documents do I need to collect to prove medical negligence?",
      answer: "You must collect complete medical records, which include admission forms, daily doctor notes, nursing charts, diagnostic lab reports, imaging films, anesthesia logs, surgery notes, and the final discharge summary. Hospitals are legally required to provide certified copies of these records within seventy-two hours of a written request under the Medical Council of India Regulations, 2002."
    },
    {
      question: "Does a patient have a legal right to seek a second opinion in India?",
      answer: "Yes, the right to seek a second opinion is a recognized statutory right under the Charter of Patients Rights and the Clinical Establishments Act. Hospital authorities must respect this choice and provide all necessary medical records, diagnostic test results, and treatment summaries to the patient or their family to facilitate consultation with another healthcare professional."
    }
  ];

  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 9
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed mb-6">
            Get quick, legally verified answers to common questions about patient rights, medical council procedures, and filing consumer complaints for malpractice in India.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-[#FAF9F5] border border-gray-100 rounded-3xl p-6 shadow-sm">
              <h3 className="text-base font-bold text-[#2D2219] mb-3 flex gap-3">
                <span className="text-[#D4AF37]">Q.</span>
                {faq.question}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed pl-6 text-justify">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
