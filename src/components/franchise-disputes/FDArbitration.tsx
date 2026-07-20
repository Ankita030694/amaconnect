import React from "react";

export default function FDArbitration({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 8
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Resolving Franchise Disputes via Arbitration
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
            When disputes over royalties, territorial rights, or terminations arise, resolving them through traditional civil courts can take years. To avoid this delay, commercial franchise agreements must include specialized alternative dispute resolution clauses.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Drafting Effective Mediation and Arbitration Clauses
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            A well-drafted dispute resolution clause must outline a step-by-step escalation process. First, the parties should engage in mutual discussions or formal mediation, usually within a fifteen to thirty-day timeline.
          </p>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            If mediation fails, the dispute is referred to binding arbitration under the Arbitration and Conciliation Act, 1996. The clause should specify: the number of arbitrators (typically a sole arbitrator appointed by mutual consent), the language of the proceedings, and the governing rules. Arbitration ensures confidentiality, privacy, and results in a binding arbitral award that is enforceable as a decree of the court, protecting business operations.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Establishing Jurisdictions for Fast-Track Trials
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            To prevent jurisdictional conflicts, the agreement must explicitly define the seat and venue of arbitration, along with the exclusive jurisdiction of courts. The seat of arbitration decides which court supervises the proceedings and hears challenges to the arbitral award.
          </p>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            For instance, specifying the seat as Mumbai or New Delhi gives exclusive jurisdiction to the courts of that city to handle interim applications under Section 9 of the Arbitration Act. Furthermore, the parties can agree to use fast-track arbitration under Section 29B of the Act, which requires the arbitrator to pass the final award within six months, bypassing long litigation delays and ensuring speedy resolution.
          </p>

          <div className="bg-[#FAF8F5] border border-gray-100 rounded-2xl p-6 mt-4">
            <h4 className="font-bold text-[#2D2219] mb-3">Arbitration Clause Drafting Tips</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm text-gray-600">
              <div>
                <span className="text-[#D4AF37] font-bold block mb-1">Escalation &amp; Seat</span>
                <ul className="space-y-1 list-disc list-inside text-gray-500">
                  <li>Mandate a fifteen-day prior mediation attempt.</li>
                  <li>Specify a sole arbitrator appointed by mutual consent.</li>
                  <li>Define the seat and venue of arbitration clearly.</li>
                  <li>Grant exclusive jurisdiction to a designated city court.</li>
                </ul>
              </div>
              <div>
                <span className="text-[#D4AF37] font-bold block mb-1">Speed &amp; Security</span>
                <ul className="space-y-1 list-disc list-inside text-gray-500">
                  <li>Incorporate fast-track options under Section 29B.</li>
                  <li>Specify the English language for all filings.</li>
                  <li>Incorporate Section 9 provisions for interim relief.</li>
                  <li>Confidentiality agreements for arbitral proceedings.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
