import React from "react";

export default function SCMProtection({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 7
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Protection against Abuse and Medical Care
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
            Ensuring the physical safety and health of the elderly is a core duty of the state under the Senior Citizens Act. The legislation moves beyond basic financial support to mandate the creation of medical infrastructure and specialized police units to protect senior citizens from abuse and neglect.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            State Obligations for Geriatric Care and Security
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            Chapter five of the Act lists the duties of state governments regarding medical support for senior citizens. The law mandates that all government hospitals must provide dedicated geriatric wards, set up separate queues for senior citizens, and offer specialized treatment facilities for age related disorders.
          </p>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            Additionally, state governments are required to establish and maintain old age homes, ensuring that at least one home is available in every district. These homes must provide shelter, food, clothing, and medical care to indigent senior citizens who lack family support or resources, ensuring no elderly individual is left abandoned without care.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Establishing Senior Citizen Support Police Cells
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            To protect senior citizens from physical abuse, fraud, and harassment, police departments across India have set up specialized Senior Citizen Support Cells. These cells maintain a registry of elderly residents living alone in their jurisdiction.
          </p>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            Beat officers are assigned to visit registered senior citizens regularly to check on their safety, verify domestic workers, and advise them on home security. If an elderly person faces harassment or threat of eviction from their children, they can call a dedicated toll-free helpline (14567) to secure immediate police protection. The police coordinate with local Protection Officers and NGOs to resolve disputes and keep the elderly safe, providing peace of mind.
          </p>

          <div className="bg-[#FAF8F5] border border-gray-100 rounded-2xl p-6 mt-4">
            <h4 className="font-bold text-[#2D2219] mb-3">Welfare and Protection Measures</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm text-gray-600">
              <div>
                <span className="text-[#D4AF37] font-bold block mb-1">Geriatric Health Support</span>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Mandatory dedicated queues and geriatric wards in government hospitals. Free or subsidized treatments for age-related illnesses.
                </p>
              </div>
              <div>
                <span className="text-[#D4AF37] font-bold block mb-1">Police Protection Units</span>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Regular safety visits by beat officers, secure registration portals, and immediate response helpline (14567) to address elder abuse.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
