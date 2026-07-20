import React from "react";

export default function ARPoliceComplaints({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 5
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Filing Police Complaints for Animal Cruelty
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
            Poisoning stray dogs, beating community cats, or relocating animals illegally are cognizable criminal offenses in India. Citizens who witness these acts have a legal right and responsibility to report them to the police, ensuring offenders are prosecuted.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Sections 428 and 429 of IPC for Killing/Maiming Animals
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            Under Section 428 of the Indian Penal Code (IPC), killing, poisoning, maiming, or rendering useless any animal of the value of ten rupees or upwards is a punishable offense. The section carries a maximum penalty of two years of imprisonment, a fine, or both.
          </p>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            For larger or valuable animals (including any cattle, camel, horse, or any animal of the value of fifty rupees or upwards), Section 429 IPC increases the penalty. Violators face up to five years of imprisonment, a fine, or both. These sections (now corresponding BNS sections) apply to street animals as well, recognizing them as protected living property.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            How to File an FIR for Poisoning or Relocating Strays
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            To register an FIR, the witness should visit the local police station with written details of the incident. The complaint must contain: names of the accused, date/time, description of the cruelty (such as placing poisoned food or beatings), and witness statements.
          </p>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            If an animal has died, the police must send the carcass for post-mortem to a government veterinary hospital to confirm the cause of death. If local officers refuse to register the FIR, the complainant can send a written representation to the Superintendent of Police (SP) under Section 154(3) of the CrPC, or approach the local Judicial Magistrate under Section 156(3) to direct the registration of the case, enforcing the law.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <div className="bg-[#FAF8F5] border border-gray-100 rounded-2xl p-6">
              <h4 className="font-bold text-[#2D2219] mb-2">IPC Section 428 &amp; 429</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Penalizes killing, maiming, or poisoning animals. Sentences range from two to five years in jail, covering street dogs and domestic pets alike.
              </p>
            </div>
            <div className="bg-[#FAF8F5] border border-gray-100 rounded-2xl p-6">
              <h4 className="font-bold text-[#2D2219] mb-2">FIR Action Protocol</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Submit written complaint with photo/video evidence. Request post-mortem for deceased animals. Escalate to senior officers if local police refuse.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
