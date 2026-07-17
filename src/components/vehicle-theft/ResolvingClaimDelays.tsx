import React from "react";

export default function ResolvingClaimDelays({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 6
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Resolving Delays in Claim Settlement
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
            Insurers often delay settling vehicle theft claims by stretching the investigation process or requesting redundant documents. Policyholders can counter these delays by filing grievances with the IRDAI or approaching the Consumer Commission.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Filing Grievance with IRDAI for Insurer Delays
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            Inordinate delays in settling motor theft claims are a persistent grievance for policyholders in India. Insurers often delay payouts by demanding unnecessary documents, raising frivolous objections, or taking months to verify the untraced report. Under the IRDAI Protection of Policyholders Interests Regulations, insurance companies are legally required to settle a claim or raise objections within thirty days of receiving all the required documents. If the claim requires an investigation, the insurer must appoint an investigator immediately, and the investigation report must be submitted within thirty days. If the insurer fails to resolve the claim within these timelines, the policyholder can file a formal grievance with the IRDAI through the online Bima Bharosa portal. Filing a complaint on Bima Bharosa logs the dispute directly in the regulatory tracking system, forcing the insurance company to provide a formal response within fifteen days. In cases where the delay is unjustified, the IRDAI regulations mandate that the insurer must pay interest on the claim amount at a rate that is two percent above the bank rate prevalent at the beginning of the financial year. This interest penalty serves as a strong deterrent against delay tactics, encouraging swift settlements. To ensure a successful filing, policyholders should maintain a complete chronological record of all document submissions, email communications, and RTO filings to prove that the delay lies entirely on the insurer side and protect their financial interest.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Approaching Consumer Court for Deficiency in Service
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            If the insurance company continues to delay the settlement or rejects the theft claim on unjustified technical grounds, the policyholder can approach the Consumer Commission to seek redressal. Under the Consumer Protection Act, 2019, delaying or wrongfully denying a valid insurance claim is classified as a deficiency of service. The policyholder can file a formal complaint before the District Consumer Disputes Redressal Commission having jurisdiction over their residence or the place of the insurer office. The complaint must contain a detailed narrative of the theft, the police FIR, the RTO notifications, the submission of the untraced report, and the proof of delay or wrongful denial by the insurer. Claimants can seek several reliefs from the commission, including a direction to the insurer to pay the full Insured Declared Value (IDV) along with interest, usually calculated at nine to twelve percent from the date of the claim submission. In addition, the commission can award substantial compensation for the mental harassment, agony, and inconvenience caused by the delay, as well as the litigation costs incurred in pursuing the case. The Consumer Commission provides a robust judicial forum that holds corporate entities accountable. The e-Daakhil portal has made the filing process highly accessible, allowing policyholders to submit their complaints online. Presenting a well-documented case with clear proof of compliance with all policy requirements increases the likelihood of securing a favorable judgment.
          </p>
        </div>
      </div>
    </section>
  );
}
