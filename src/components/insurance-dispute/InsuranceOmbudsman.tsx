import React from "react";

export default function InsuranceOmbudsman({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 5
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Approaching the Insurance Ombudsman
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
            The Insurance Ombudsman offers an independent, cost-free, and time-bound alternative to resolve claim rejections without engaging in expensive court battles. Designed specifically for individual policyholders, this forum resolves disputes through mediation and binding awards.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Pecuniary Jurisdiction and Eligibility Limits
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            The Insurance Ombudsman is a highly effective, cost free quasi-judicial forum established by the government of India under the Redressal of Public Grievances Rules, 1998, to resolve disputes between insurers and individual policyholders. To approach the Ombudsman, you must meet specific statutory eligibility criteria. First, the complaint must be filed within one year from the date the rejection letter was received from the insurer GRO or after the expiry of thirty days since you submitted your appeal to the GRO and received no response. Second, the policyholder must not have initiated proceedings on the same dispute in any consumer court, civil court, or arbitration forum. In terms of pecuniary jurisdiction, the Ombudsman has the legal authority to award compensation or settle claims up to a maximum limit of thirty lakh rupees, which covers the majority of retail health, life, motor, and travel insurance policies. If your dispute involves an amount exceeding thirty lakh rupees, the Ombudsman will lack the jurisdiction to entertain the complaint, and you must file your claim in the appropriate Consumer Commission. There are currently seventeen Insurance Ombudsman offices across India, situated in major cities like Mumbai, Delhi, Kolkata, Chennai, Bengaluru, and Hyderabad. Each office has a defined territorial jurisdiction covering specific states or districts. Determining the correct regional Ombudsman based on the location of the insurance company branch office or your residential address is essential to ensure that your complaint is admitted without administrative delays.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Step-by-Step Filing Procedure Without Lawyers
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            One of the greatest benefits of the Insurance Ombudsman system is that it is specifically designed to be accessible to common citizens without the need to hire legal professionals or advocates. In fact, under the rules, lawyers are not permitted to represent either party during the proceedings, which levels the playing field for consumers. The filing process begins by preparing the complaint in writing using Form P, which is the standard application format available at the Ombudsman offices and on their online portal. Form P requires you to fill in your personal details, details of the insurance policy, the name of the insurer, a brief summary of the facts, and the specific relief or claim amount you are seeking. You must also sign a declaration stating that the matter is not pending before any other court. Along with Form P, you must attach Form Q, which is the official consent letter authorizing the Ombudsman to act as a mediator and arbitrator for the dispute. The physical or digital complaint dossier must include a copy of the original policy bond, the claim rejection letter, the appeal sent to the GRO, the tracking receipts, and all relevant medical or financial records. Once submitted, the Ombudsman office will review the documents and schedule a hearing date. The hearing is conducted in an informal, consumer-friendly setting where the policyholder can explain their case directly to the Ombudsman. The Ombudsman will then issue a binding recommendation or award within three months of receiving the complaint.
          </p>
        </div>
      </div>
    </section>
  );
}
