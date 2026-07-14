import React from "react";

interface HitAndRunProps {
  id: string;
}

export default function HitAndRun({ id }: HitAndRunProps) {
  return (
    <section id={id} className="py-8 border-b border-gray-100 scroll-mt-24">
      <h2 className="text-2xl sm:text-3xl font-bold text-[#2D2219] mb-6">
        Legal Recourse for Hit and Run Cases
      </h2>

      <div className="space-y-6 text-gray-700 leading-relaxed text-sm sm:text-base">
        <div>
          <h3 className="text-xl font-bold text-[#2D2219] mb-3">
            The Solatium Scheme and Compensation Rates
          </h3>
          <p className="mb-4">
            A hit and run accident, where the offending driver collides with a victim and flees the scene without revealing their identity or providing assistance, represents one of the most challenging scenarios in motor accident litigation. To address the severe financial and emotional distress faced by such victims and their families, the Government of India established the Solatium Scheme under the Motor Vehicles Act of 1988. This welfare scheme is managed through a dedicated Motor Vehicles Accident Fund, which is financed by contributions from insurance companies, the central government, and other statutory sources. Under Section 161 of the Motor Vehicles Act, the compensation rates for hit and run victims were historically very low, but the recent 2019 legislative amendments substantially increased these amounts to provide meaningful relief. Currently, the scheme mandates a fixed compensation of two lakh rupees in the event of the victim's death, representing an eightfold increase from the previous limit of twenty-five thousand rupees. In cases where the accident results in grievous hurt, the compensation has been raised to fifty thousand rupees from the earlier token sum of twelve thousand five hundred rupees. These funds are disbursed directly to the injured victim or the legal representatives of the deceased, providing immediate financial cushioning for urgent medical treatments, funeral expenses, and loss of livelihood, without requiring the claimant to identify the driver or the vehicle responsible for the tragedy. This prompt release of statutory aid serves as a vital safety net, ensuring that families are not left completely destitute while police authorities conduct their tracing investigations.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold text-[#2D2219] mb-3">
            Filing Procedure and Administrative Steps
          </h3>
          <p className="mb-4">
            The procedure for claiming compensation under the Solatium Scheme is distinct from standard MACT petitions and follows a structured administrative route. First, the claimant or their legal representative must file an application in Form I to the Claim Inquiry Officer, who is typically the Sub-Divisional Magistrate or Tehsildar of the area where the accident occurred. This application must be accompanied by essential documents, including a copy of the First Information Report (FIR) registered by the local police, a detailed medical report or post-mortem report, and a certificate of age and identity of the victim. Once the application is submitted, the Claim Inquiry Officer initiates an official investigation, directing the local police station to submit a verification report regarding the hit and run status of the vehicle. The officer also verifies the relationships of the legal representatives in case of a death claim. After conducting the inquiry, the officer prepares a comprehensive report in Form II and submits it to the District Magistrate, who acts as the Claim Settlement Commissioner. Upon reviewing the report, the Commissioner sanctions the compensation and directs the designated insurance company or the nodal agency to disburse the funds directly to the claimant's bank account via electronic transfer. This entire administrative process is designed to be completed within a fixed timeframe of fifteen days from the receipt of the inquiry report, ensuring that the procedural delays common in regular courts are minimized for these urgent cases. Litigants should coordinate closely with local revenue authorities to expedite this review and secure their payouts without unnecessary bureaucratic friction.
          </p>
        </div>
      </div>
    </section>
  );
}
