import React from "react";

export default function LandmarkCases({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 8
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Case Studies on Landmark Judgments
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
            The evolution of medical negligence jurisprudence in India has been driven by landmark judgments of the Supreme Court and the National Consumer Disputes Redressal Commission. These rulings have established critical legal precedents, defined the standards of doctor accountability, and determined the limits of financial liability. Reviewing these key cases provides patients and legal practitioners with essential guidance on how courts interpret evidence and calculate compensation.
          </p>
        </div>

        {/* Case Study Section Type */}
        <div className="bg-[#FAF9F5] border border-gray-200 rounded-3xl p-6 sm:p-8 my-2 shadow-sm">
          <p className="text-xs text-[#D4AF37] font-bold uppercase tracking-wider mb-2">
            Landmark Case Study
          </p>
          <h3 className="text-lg font-bold text-[#2D2219] mb-3">
            Dr. Kunal Saha v. AMRI Hospital (Record Medical Compensation)
          </h3>
          <div className="space-y-3 text-xs sm:text-sm text-gray-600 leading-relaxed">
            <p>
              <strong>Facts of the Case:</strong> Anuradha Saha, a child psychologist and wife of US based physician Dr. Kunal Saha, visited India in 1998. She developed a skin allergy and was treated at AMRI Hospital, Kolkata, where doctors administered excessive doses of Depomedrol (a steroid injection), leading to Toxic Epidermal Necrolysis, a life threatening skin condition. The hospital failed to provide standard supportive care, resulting in her untimely death.
            </p>
            <p>
              <strong>Legal Issues:</strong> Whether the administration of steroid doses far exceeding manufacturer recommendations constituted a breach of standard care, and how to compute compensation for the loss of life of a young professional.
            </p>
            <p>
              <strong>Court Judgment:</strong> After a fifteen year legal battle, the Supreme Court of India in 2013 held the hospital and the treating physicians guilty of medical negligence. The court awarded a historic compensation of approximately eleven point four crore rupees, including accrued interest.
            </p>
            <p>
              <strong>Key Precedent:</strong> The Supreme Court rejected the traditional low cap multiplier method for calculating medical damages. It established that compensation must be realistic, active, and sufficient to deter systemic institutional negligence in private hospitals, marking a major shift in Indian medical tort law.
            </p>
          </div>
        </div>

        <div className="space-y-10">
          {/* H3: The Kunal Saha Case and Record Compensation */}
          <div className="flex flex-col gap-3">
            <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
              The Kunal Saha Case and Record Compensation
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed text-justify">
              The judgment in Dr. Kunal Saha v. AMRI Hospital redefined the financial consequences of medical negligence in India. Prior to this case, consumer forums and civil courts typically awarded nominal compensation, often using standard motor accident formula templates that severely undervalued human life. In this landmark decision, the Supreme Court recognized that private medical facilities charge premium fees and must therefore face realistic, proportional penalties for deficient services. The court computed compensation by taking into account the potential future earnings of the deceased, her professional qualifications, and the mental trauma suffered by the surviving spouse. By ordering the hospital to pay the majority of the compensation and holding individual doctors personally liable for smaller shares, the Supreme Court sent a clear warning to private healthcare chains. This ruling established that medical establishments must maintain standard protocols, ensure proper peer review, and prioritize patient safety, as the financial consequences of negligence can now threaten their corporate existence.
            </p>
          </div>

          {/* H3: Decisions on Medical Consent Requirements */}
          <div className="flex flex-col gap-3">
            <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
              Decisions on Medical Consent Requirements
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed text-justify">
              Consent is a fundamental patient right that has been heavily litigated in Indian courts. The definitive judgment on this issue is Samira Kohli v. Dr. Prabha Manchanda, decided by the Supreme Court of India in 2008. In this case, the plaintiff had consented to a diagnostic laparoscopy and conservative surgery. While the patient was under anesthesia, the surgeon decided to perform an additional, irreversible hysterectomy, claiming it was in the patient interest. The Supreme Court ruled that the surgeon action constituted a clear breach of the duty of care and a trespass to the body. The court established that a patient consent for a diagnostic procedure does not automatically authorize the doctor to perform a therapeutic or surgical removal unless there is an immediate, life threatening emergency during surgery. The judgment clarified that broad, general consent forms signed during admission are legally invalid for specific surgeries, and doctors must obtain separate, informed consent for distinct procedures. This ruling safeguards patient autonomy, ensuring that medical professionals cannot unilaterally make life-altering bodily choices for conscious patients.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
