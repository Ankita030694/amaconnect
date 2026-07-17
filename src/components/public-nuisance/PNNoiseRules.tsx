import React from "react";

export default function PNNoiseRules({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 2
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Noise Pollution Rules and Limits
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
            Noise is not just an annoyance. Continuous exposure to high decibel noise causes serious health hazards, including hearing loss, hypertension, sleep deprivation, and psychological stress. To regulate noise, the Central Government has established strict standards for ambient noise levels.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            The Noise Pollution Regulation and Control Rules 2000
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            The Noise Pollution (Regulation and Control) Rules, 2000, were framed under the Environment (Protection) Act, 1986, to regulate and control noise producing sources. The rules empower state governments to designate specific zones: industrial, commercial, residential, and silent zones. 
          </p>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            Under these rules, using loudspeakers, public address systems, or sound-producing instruments is strictly prohibited without securing written permission from the competent authority. The regulations also give authority to local police and environmental officers to inspect sites, seize noise equipment, and prosecute violators, ensuring compliance.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Permissible Decibel Levels for Residential and Silent Zones
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            The rules set strict permissible decibel (dB) limits for each zone, divided between daytime (6:00 AM to 10:00 PM) and nighttime (10:00 PM to 6:00 AM). In residential zones, the permissible noise limit is fifty-five dB during the day and is reduced to forty-five dB at night.
          </p>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            In silent zones, which cover areas within one hundred meters of hospitals, educational institutions, and courts, the limits are even stricter: fifty dB during the day and forty dB at night. Any activity that exceeds these limits by ten dB or more in the ambient air is a violation of the rules, allowing citizens to file official complaints, protecting the environment.
          </p>

          <div className="bg-[#FAF8F5] border border-gray-100 rounded-2xl p-6 mt-4">
            <h4 className="font-bold text-[#2D2219] mb-3">Permissible Ambient Noise Levels (dB Leq)</h4>
            <div className="overflow-x-auto">
              <table className="w-full text-xs sm:text-sm text-left text-gray-600">
                <thead>
                  <tr className="border-b border-gray-200 text-gray-700 font-bold">
                    <th className="py-2">Zone Category</th>
                    <th className="py-2">Daytime Limit (6 AM to 10 PM)</th>
                    <th className="py-2">Nighttime Limit (10 PM to 6 AM)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 text-gray-500">
                  <tr>
                    <td className="py-2 font-semibold text-gray-700">Industrial Area</td>
                    <td className="py-2">75 dB</td>
                    <td className="py-2">70 dB</td>
                  </tr>
                  <tr>
                    <td className="py-2 font-semibold text-gray-700">Commercial Area</td>
                    <td className="py-2">65 dB</td>
                    <td className="py-2">55 dB</td>
                  </tr>
                  <tr>
                    <td className="py-2 font-semibold text-gray-700">Residential Area</td>
                    <td className="py-2">55 dB</td>
                    <td className="py-2">45 dB</td>
                  </tr>
                  <tr>
                    <td className="py-2 font-semibold text-gray-700">Silence Zone</td>
                    <td className="py-2">50 dB</td>
                    <td className="py-2">40 dB</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
