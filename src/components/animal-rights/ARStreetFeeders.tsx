import React from "react";

export default function ARStreetFeeders({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 4
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Rights of Street Animal Feeders
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
            Feeding community animals, especially stray dogs and cats, often attracts hostility from neighbors or housing society boards. However, the law strongly protects the rights of animal feeders, recognizing that feeding is an essential step towards successful sterilization and vaccination.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Delhi High Court Guidelines on Feeding Community Dogs
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            In a landmark judgment (Dr. Maya D. Chhabra v. State), the Delhi High Court established detailed guidelines on the rights of street animal feeders. The court ruled that community dogs have a right to food, and citizens have a right to feed them without facing harassment or violence.
          </p>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            The guidelines direct RWAs and municipal bodies to designate specific feeding spots in every residential area, away from children's play areas and common entrances. Feeders must use these designated spots to prevent littering, while residents are prohibited from threatening, abusing, or physical assaulting the feeders, protecting public safety.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Legal Safeguards against Relocating Street Animals
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            Relocating stray dogs from their original territory is strictly illegal under Indian law. According to the Animal Birth Control (Dog) Rules, 2001 (updated in 2023), stray dogs can only be captured for sterilization and vaccination by municipal teams.
          </p>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            Once the sterilization and post-operative recovery are complete, the municipal team is legally required to release the dog back to the exact location from where it was captured. Removing dogs to dump them in distant areas is a criminal offense under the PCA Act. Relocating dogs disrupts their territories, increases aggression, and compromises rabies control programs, making it critical to enforce these safeguards.
          </p>

          <div className="bg-[#FAF8F5] border border-gray-100 rounded-2xl p-6 mt-4">
            <h4 className="font-bold text-[#2D2219] mb-3">Street Feeding &amp; Relocation Safeguards</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs sm:text-sm text-gray-600">
              <div>
                <span className="text-[#D4AF37] font-bold block mb-1">Feeder Rights</span>
                <ul className="space-y-1 list-disc list-inside text-gray-500">
                  <li>Right to feed community animals protected by High Courts.</li>
                  <li>Mandates RWAs to establish designated feeding spots.</li>
                  <li>Prohibits physical or verbal harassment of feeders.</li>
                  <li>Encourages feeding to support sterilization programs.</li>
                </ul>
              </div>
              <div>
                <span className="text-[#D4AF37] font-bold block mb-1">Relocation Rules</span>
                <ul className="space-y-1 list-disc list-inside text-gray-500">
                  <li>Bans relocation of stray dogs from their areas.</li>
                  <li>Sterilized dogs must return to their exact capture spots.</li>
                  <li>Captures restricted to registered municipal vans.</li>
                  <li>Violating relocation attempts face criminal prosecution.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
