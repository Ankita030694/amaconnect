import React from "react";

export default function StatutoryRights({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 2
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Statutory Rights of Patients under Indian Law
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
            In addition to broad constitutional rights, patients in India are protected by specific statutory provisions designed to address the power imbalance between healthcare establishments and individual citizens. These statutes establish a baseline of care, access to information, and personal autonomy that every hospital, clinic, and medical practitioner must respect. Violations of these statutory rights provide patients with immediate grounds for civil litigation, consumer complaints, and professional misconduct investigations.
          </p>
        </div>

        {/* Step Checklist Section Type */}
        <div className="bg-[#FAF9F5] border border-gray-200 rounded-3xl p-6 sm:p-8 my-2 shadow-sm">
          <p className="text-xs text-[#D4AF37] font-bold uppercase tracking-wider mb-2">
            Procedural Checklist
          </p>
          <h3 className="text-lg font-bold text-[#2D2219] mb-4">
            Steps to Formally Request and Obtain Complete Medical Records
          </h3>
          <div className="space-y-4">
            <div className="flex gap-4 items-start">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#D4AF37]/10 text-[#D4AF37] flex items-center justify-center font-bold text-xs mt-0.5">
                1
              </span>
              <div>
                <h4 className="text-sm font-bold text-[#2D2219]">Submit a Written Application</h4>
                <p className="text-xs text-gray-600 leading-relaxed mt-1">
                  Draft a formal letter addressed to the Medical Superintendent or Hospital Administrator requesting complete records, including indoor patient case sheets, nursing logs, doctor notes, diagnostic reports, and discharge summaries.
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#D4AF37]/10 text-[#D4AF37] flex items-center justify-center font-bold text-xs mt-0.5">
                2
              </span>
              <div>
                <h4 className="text-sm font-bold text-[#2D2219]">Reference Legal Provisions</h4>
                <p className="text-xs text-gray-600 leading-relaxed mt-1">
                  Cite Clause 1.3.2 of the Indian Medical Council Professional Conduct, Etiquette and Ethics Regulations, 2002, which obligates providers to supply these records within 72 hours of receiving the application.
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#D4AF37]/10 text-[#D4AF37] flex items-center justify-center font-bold text-xs mt-0.5">
                3
              </span>
              <div>
                <h4 className="text-sm font-bold text-[#2D2219]">Ensure Payment of Standard Fees</h4>
                <p className="text-xs text-gray-600 leading-relaxed mt-1">
                  Pay the reasonable photocopying or administrative fee charges requested by the hospital. Obtain an official receipt for the payment to create a formal paper trail of your request.
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#D4AF37]/10 text-[#D4AF37] flex items-center justify-center font-bold text-xs mt-0.5">
                4
              </span>
              <div>
                <h4 className="text-sm font-bold text-[#2D2219]">Document Receipt or Refusal</h4>
                <p className="text-xs text-gray-600 leading-relaxed mt-1">
                  Upon receiving the documents, verify that each page has a stamp, date, and page number. If the hospital refuses, obtain a written refusal or send a follow-up letter via registered post to document the denial.
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#D4AF37]/10 text-[#D4AF37] flex items-center justify-center font-bold text-xs mt-0.5">
                5
              </span>
              <div>
                <h4 className="text-sm font-bold text-[#2D2219]">Escalate to State Medical Council</h4>
                <p className="text-xs text-gray-600 leading-relaxed mt-1">
                  If the hospital fails to provide the records within 72 hours, file a formal complaint with the State Medical Council against the treating doctors and the administrative staff for professional misconduct.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-10">
          {/* H3: Clinical Establishments Act Charter of Rights */}
          <div className="flex flex-col gap-3">
            <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
              Clinical Establishments Act Charter of Rights
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed text-justify">
              The Clinical Establishments (Registration and Regulation) Act, 2010, along with the rules framed by individual states, establishes the regulatory standard for medical facilities. Under this statutory framework, the Ministry of Health and Family Welfare, in collaboration with the National Human Rights Commission, formulated a comprehensive Charter of Patients Rights. This charter lists seventeen fundamental rights, including the right to emergency medical care, the right to a second opinion, the right to transparency in treatment costs, and the right to non-discriminatory treatment. Under these rules, hospitals are strictly prohibited from holding a deceased patient body hostage to extort outstanding financial dues from relatives. Furthermore, every healthcare provider must display a list of services and their associated costs in a prominent location, ensuring that patients can make informed financial decisions. If a clinical establishment violates these principles, state authorities can impose financial penalties, suspend registration, or close the facility, providing a direct administrative remedy to ensure accountability and professional standards.
            </p>
          </div>

          {/* H3: Right to Medical Records and Informed Consent */}
          <div className="flex flex-col gap-3">
            <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
              Right to Medical Records and Informed Consent
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed text-justify">
              One of the most critical statutory rights is the right to access complete medical records, which is legally protected under Clause 1.3.2 of the Indian Medical Council Professional Conduct Regulations, 2002. This rule obligates hospital authorities to supply copy records to the patient or their authorized representative within seventy-two hours of a request, and a failure to do so is classified as professional misconduct. Alongside the right to information is the doctrine of informed consent, which was clarified by the Supreme Court of India in Samira Kohli v. Dr. Prabha Manchanda. The court ruled that real consent must be obtained before any surgical procedure, and a doctor cannot perform an additional, non-emergency procedure during surgery based on broad, generic consent. The consent must be voluntary, specific, and based on a full explanation of the diagnosis, the nature of the treatment, potential risks, and alternative options. Any medical intervention performed without obtaining valid, informed consent constitutes a breach of the duty of care and is treated as an assault or trespass to the person, giving rise to substantial claims for damages in consumer and civil courts.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
