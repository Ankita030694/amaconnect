import React from "react";

export default function PNIndustrialPollution({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 4
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Complaints Against Industrial Pollution
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
            Industries operating in or near residential areas often violate environmental laws by discharging untreated water, releasing harmful air pollutants, or running heavy machinery beyond permitted hours. Protecting citizens from these hazards requires using specialized environmental laws.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Role of State Pollution Control Boards
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            The State Pollution Control Boards (SPCBs), such as the Maharashtra Pollution Control Board (MPCB) or Delhi Pollution Control Committee (DPCC), are the primary regulatory authorities for monitoring industrial compliance. SPCBs hold the power to inspect factories, collect air and water samples, and verify if the industries hold a valid Consent to Operate.
          </p>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            If an industry violates emissions rules, the SPCB can issue show-cause notices. The board has the authority to cut off electricity and water supplies to the defaulting factory, or issue closure orders under the law, providing a strong administrative remedy.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Filing Complaints under Air and Water Acts
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            Citizens can file formal complaints under Section 31A of the Air (Prevention and Control of Pollution) Act, 1981, and Section 33A of the Water (Prevention and Control of Pollution) Act, 1974. The complaints can be submitted online on the respective SPCB portal or sent via registered post to the regional office.
          </p>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            The complaint must contain: details of the offending industry, descriptions of the pollutants, proof of proximity to residential housing, and any medical records showing adverse health impacts on residents. Upon receiving the complaint, the SPCB is required to conduct a site inspection and test the ambient air or local water quality. If violations are found, the SPCB can initiate criminal prosecution against the company directors before designated environmental courts, protecting the public.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <div className="bg-[#FAF8F5] border border-gray-100 rounded-2xl p-6">
              <h4 className="font-bold text-[#2D2219] mb-2">Consent to Operate Verification</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                SPCBs inspect factories to verify they hold valid permits and use required pollution control machinery. Unauthorized units can be shut down immediately.
              </p>
            </div>
            <div className="bg-[#FAF8F5] border border-gray-100 rounded-2xl p-6">
              <h4 className="font-bold text-[#2D2219] mb-2">Air &amp; Water Act filings</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Complaints filed under Section 31A of Air Act or Section 33A of Water Act. Authorizes boards to cut utilities and seal polluting factories.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
