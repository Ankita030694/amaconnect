import React from "react";

export default function AROwnerLiability({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 6
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Liability of Pet Owners for Bites
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
            While pet owners hold strong rights to keep animals, they also bear legal responsibilities to ensure their pets do not cause harm to others. If a pet attacks or bites a neighbor or passerby, the owner can face serious civil and criminal consequences under Indian law.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Civil Liabilities and Damages for Negligence
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            Under the law of torts, a pet owner is civilly liable for any damage or injury caused by their animal if they failed to take reasonable care. This is known as negligence liability.
          </p>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            If a dog escapes a leash in a common area and bites a resident, the affected victim can file a lawsuit seeking financial compensation. The damages awarded by civil courts can cover: complete medical expenses, cost of vaccinations, compensation for loss of income during recovery, and damages for mental shock. Owners must keep their pets controlled in public corridors and elevators to avoid these liabilities.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Criminal Charges for Neglecting Dangerous Pets
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            Apart from civil claims, negligent pet owners can face criminal charges under Section 289 of the Indian Penal Code. This section penalizes negligent conduct with respect to animals.
          </p>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            Section 289 states that whoever knowingly or negligently omits to take such order with any animal in his possession as is sufficient to guard against any probable danger to human life, or any probable danger of grievous hurt from such animal, shall be punished. The penalty includes: imprisonment up to six months, a fine of up to one thousand rupees, or both. If the pet causes severe injury, the police can also add charges of causing grievous hurt by negligence under Section 338, increasing the penalties.
          </p>

          <div className="bg-[#FAF8F5] border border-gray-100 rounded-2xl p-6 mt-4">
            <h4 className="font-bold text-[#2D2219] mb-3">Owner Responsibility Guidelines</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs sm:text-sm text-gray-600">
              <div>
                <span className="text-[#D4AF37] font-bold block mb-1">Safety Measures</span>
                <ul className="space-y-1 list-disc list-inside text-gray-500">
                  <li>Use secure leashes and harnesses in public corridors.</li>
                  <li>Train pets to prevent defensive or aggressive biting.</li>
                  <li>Keep rabies and core vaccinations updated.</li>
                  <li>Supervise pets when visitors enter the residence.</li>
                </ul>
              </div>
              <div>
                <span className="text-[#D4AF37] font-bold block mb-1">Legal Repercussions</span>
                <ul className="space-y-1 list-disc list-inside text-gray-500">
                  <li>Civil claims for medical bills and income losses.</li>
                  <li>IPC Section 289 charges for negligent animal control.</li>
                  <li>Magistrate warnings and potential seizure of the pet.</li>
                  <li>Imprisonment up to six months for serious defaults.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
