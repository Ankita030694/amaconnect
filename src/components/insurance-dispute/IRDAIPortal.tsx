import React from "react";
import Link from "next/link";

export default function IRDAIPortal({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 4
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Escalating to the IRDAI Portal
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
            When direct appeals to the insurer fail, policyholders can leverage the regulatory oversight of the Insurance Regulatory and Development Authority of India. Using the centralized online portal ensures the complaint is logged and monitored by the government.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Filing complaints on Bima Bharosa Portal
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            If the insurance company fails to resolve your grievance within fifteen days, or if the GRO rejects your appeal, you can escalate the matter to the regulator. The IRDAI has established an online consumer complaint portal called the Bima Bharosa System, which was formerly known as the Integrated Grievance Management System (IGMS). This portal acts as a central repository and tracking tool for all insurance complaints in the country. To file a complaint, you must register as a user on the Bima Bharosa portal by providing your name, contact details, and email address. Once registered, you can log in and select the register complaint option, where you will enter details about your policy, the insurer name, the type of insurance, and the nature of the grievance. You must upload supporting files, such as the initial claim application, the rejection letter, and the appeal sent to the GRO. The Bima Bharosa system is integrated with the internal IT networks of all insurance companies operating in India. As soon as a complaint is registered, the system automatically routes it to the target insurance company for a response. The portal assigns a unique token number to the complaint, allowing the policyholder to track the progress of their case online. The insurer is required to update the resolution status on the portal, ensuring that the regulator has full visibility of how the complaint is handled, which prevents companies from ignoring customer grievances.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            The Role of IRDAI in Consumer Grievances
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            The Insurance Regulatory and Development Authority of India plays a vital supervisory role in protecting policyholders interests and regulating market conduct. While IRDAI does not act as a judicial court or pass individual arbitration awards for monetary claims, it uses the Bima Bharosa portal to monitor and enforce compliance with consumer protection guidelines. When a complaint is registered on Bima Bharosa, the regulator tracks the time taken by the insurance company to respond and resolve the issue. If an insurer consistently delays resolutions or shows a pattern of unfair claim rejections, the IRDAI can initiate audits, issue warnings, or impose heavy financial penalties on the company. The regulator guidelines on claim settlements are very clear: insurers must not reject claims on technical or administrative grounds unless there is clear evidence of fraud or material misrepresentation. Furthermore, the IRDAI has established the Protection of Policyholders Interests Regulations, which lay down the standards for servicing policies, handling claims, and managing grievances. The regulator also publishes annual reports detailing the grievance resolution rates and claim settlement ratios of all insurers, helping consumers make informed choices. If you need help preparing your complaint for the portal, you can share strategies or seek advice from other policyholders and legal experts in our active{" "}
            <Link href="/communities" className="text-[#D4AF37] hover:underline font-semibold">Communities</Link>{" "}
            forum or via the{" "}
            <Link href="/ask-me-anything" className="text-[#D4AF37] hover:underline font-semibold">Ask Me Anything</Link>{" "}
            portal. Leveraging the Bima Bharosa system ensures that the insurer is held accountable under the direct supervision of the national regulator.
          </p>
        </div>
      </div>
    </section>
  );
}
