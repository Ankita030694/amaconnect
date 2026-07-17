import React from "react";

export default function TimelinesSection({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 6
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            RTI Timelines and Consequences of Delay
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
            The effectiveness of the Act relies heavily on its strict statutory timelines. The law contains penal provisions to hold public officers accountable if they delay responses or deliberately provide misleading information.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            The Statutory 30-Day Response Window
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            Timelines are a core pillar of the Right to Information Act, 2005, ensuring that the process of obtaining public records remains swift and efficient. Under Section 7(1) of the Act, the Public Information Officer is legally required to respond to a request within thirty days from the date of receiving the application. This response can either involve providing the requested information upon payment of any additional fee or rejecting the application by invoking specific exemptions under Section 8. However, there is a vital exception to this standard timeline: if the requested information concerns the life or liberty of a person, the PIO must provide the response within forty-eight hours of receiving the request. This life or liberty provision is typically invoked in matters involving detention, medical emergencies, or severe threats to safety. It is also important to note that if the application is transferred to another department under Section 6(3), the receiving authority gets an additional five days, extending the response limit to thirty-five days. If the PIO fails to give a decision within these statutory periods, it is legally deemed as a refusal. In such cases of deemed refusal, the applicant is entitled to receive the information free of cost, and they can immediately proceed to file a first appeal without waiting any further. Calculating these timelines carefully and recording the exact delivery dates is necessary to protect your rights and draft effective appeals when the state fails to respond.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Penalties for PIOs Intentionally Delaying Replies
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            To prevent administrative apathy and ensure strict adherence to the timelines, the Act contains strong penal provisions under Section 20. If the Central Information Commission or State Information Commission finds that a Public Information Officer has refused to receive an application, failed to respond within the statutory thirty-day window without reasonable cause, or intentionally denied a request with malafide intent, it can impose a financial penalty. The statutory penalty is fixed at two hundred and fifty rupees for each day of delay, up to a maximum cap of twenty-five thousand rupees per application. This penalty is recovered directly from the personal salary of the defaulting officer, making it a highly effective deterrent against delays. Furthermore, the commission has the authority to recommend disciplinary action against the officer under the service rules applicable to them. It is important to understand that the burden of proving that they acted reasonably and diligently lies entirely on the Public Information Officer. During commission hearings, if the PIO cannot provide a valid administrative or legal justification for the delay, the penalty is usually levied. In addition, if a PIO knowingly provides incorrect, incomplete, or misleading information, or destroys records that were requested, the commission can impose the same penalties and disciplinary recommendations. This strict accountability mechanism ensures that public servants treat RTI applications with priority and respect, safeguarding the democratic rights of citizens.
          </p>
        </div>
      </div>
    </section>
  );
}
