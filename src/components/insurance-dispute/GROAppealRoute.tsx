import React from "react";

export default function GROAppealRoute({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 3
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            The Grievance Redressal Officer (GRO) Route
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
            The first stage of contesting a claim rejection is engaging with the insurer internal grievance department. Regulated by the state, this internal mechanism is designed to resolve complaints swiftly before escalating to regulatory authorities.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Filing an Official Written Appeal to the GRO
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            Before escalating an insurance dispute to external regulatory or judicial bodies, the policyholder must exhaust the internal grievance redressal mechanism of the insurance company. Under IRDAI regulations, every insurance provider is legally mandated to appoint a designated Grievance Redressal Officer (GRO) at their head office and regional offices. The details of the GRO, including their email address, physical address, and telephone number, must be prominently displayed on the insurer official website and in the policy document. Filing an appeal to the GRO involves writing a formal complaint letter that systematically challenges the reasons stated in the claim rejection letter. In this written appeal, you must provide your policy number, the claim registration number, the date of rejection, and a detailed narrative explaining why the denial was incorrect. You must attach all supporting documents, such as hospital discharge summaries, medical certificates, bills, and previous correspondence. It is critical to request a formal acknowledgment of your complaint, which will contain a unique grievance tracking number. Sending the appeal via registered post or from your registered email address ensures that you have solid proof of filing. The GRO is required to act as an independent reviewer within the company, examining the claim objectively rather than simply rubber-stamping the decision of the claims department. Approaching the GRO is not just a procedural formality, as it often resolves disputes involving administrative errors or minor medical misunderstandings without the need for litigation.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Statutory Timeframes for Insurer Responses
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            The Insurance Regulatory and Development Authority of India has established strict timelines under its Protection of Policyholders Interests Regulations to ensure that consumer grievances are resolved promptly. When you submit a complaint to the Grievance Redressal Officer, the insurance company is legally required to send a formal written acknowledgment within three working days of receiving the grievance. This acknowledgment must contain the name and designation of the officer handling the complaint, along with the tracking details. The regulations mandate that the insurer must resolve the grievance and provide a final written response to the complainant within fifteen days from the date of receipt. The final response must either accept the grievance and outline the resolution plan, or reject it by providing detailed reasons and explaining the legal or medical grounds for the decision. If the insurance company fails to respond within this fifteen-day statutory window, or if the response they provide is unsatisfactory, the policyholder gains the legal right to escalate the dispute to the regulator or the Insurance Ombudsman. It is essential for policyholders to log the exact dates of sending the complaint and receiving the response, as these dates form the basis of the timelines required by external forums. Allowing the insurer fifteen days to resolve the matter internally is a mandatory pre-requisite, and premature filings in higher forums are usually rejected or sent back to the GRO for initial review.
          </p>
        </div>
      </div>
    </section>
  );
}
