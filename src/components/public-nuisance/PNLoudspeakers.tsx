import React from "react";

export default function PNLoudspeakers({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 5
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Combating Noise from Loudspeakers &amp; Events
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
            Loudspeakers used during festivals, weddings, political rallies, and private events are a major source of urban noise pollution. While citizens have the right to celebrate, they must do so within the decibel limits and timelines established by the Supreme Court of India.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Restrictions on Nighttime Use of Sound Systems
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            Under Rule 5 of the Noise Pollution Rules 2000, using loudspeakers or public address systems at night is strictly prohibited. The nighttime restriction window is set between 10:00 PM to 6:00 AM. 
          </p>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            While state governments have the power to permit loudspeaker use until 12:00 midnight on specific festive or national occasions (limited to a maximum of fifteen days in a calendar year), even during these relaxed periods, the noise levels must comply with residential standards. Using sound systems during normal nights without a written permit is a direct violation, allowing immediate police action.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Police Obligations to Enforce Noise Regulations
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            The local police department is the primary enforcement agency under the Noise Rules. When a citizen calls the emergency helpline (112 or 100) to report loud music after 10:00 PM, the police are legally obligated to respond and take action.
          </p>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            The responding officers must visit the site, measure the noise level if they have portable decibel meters, and direct the organizers to shut down the sound system. Under Rule 7 and 8, the police have the authority to seize the loudspeakers, amplifiers, and generators used in the violation. If the organizers refuse to comply or repeat the violation, the police can register a criminal complaint (FIR) under the Environment Protection Act, which carries penalties of up to five years of imprisonment, a fine of one lakh rupees, or both.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <div className="bg-[#FAF8F5] border border-gray-100 rounded-2xl p-6">
              <h4 className="font-bold text-[#2D2219] mb-2">Nighttime Restriction Window</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                10:00 PM to 6:00 AM. State extensions until midnight are limited to fifteen days per year, and must still comply with decibel limits.
              </p>
            </div>
            <div className="bg-[#FAF8F5] border border-gray-100 rounded-2xl p-6">
              <h4 className="font-bold text-[#2D2219] mb-2">Police Action &amp; Seizures</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Officers must visit, stop the noise, and seize equipment. Defaults can lead to FIRs carrying heavy fines or jail terms under environmental laws.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
