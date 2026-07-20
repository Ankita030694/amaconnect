import React from "react";

export default function ARPetOwnerRights({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 2
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Pet Owner Rights and AWBI Guidelines
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
            Many Resident Welfare Associations (RWAs) and cooperative housing societies attempt to impose arbitrary bans on pets or restrict their movement, creating stress for pet owners. However, the Animal Welfare Board of India (AWBI) has issued clear, legally binding guidelines that restrict these bans.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Legality of Housing Society (RWA) Bans on Pets
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            According to the official circulars issued by the AWBI, housing societies cannot ban residents from keeping pets, including dogs, cats, and birds. Even if a majority of the residents or the general body passes a resolution to ban pets, such a resolution is legally void and cannot be enforced.
          </p>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            The AWBI guidelines clarify that pets are family members, and forcing a resident to vacate their flat or abandon their pet violates their right to life and property. Any attempt by an RWA to force a pet owner out of the society or demand the removal of a pet is illegal and can be challenged in consumer courts or cooperative courts, protecting the family.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            AWBI Rules on Elevator Use and Common Areas
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            RWAs cannot restrict pets from using common facilities, such as lifts, elevators, parks, and corridors. The AWBI guidelines explicitly state that dogs cannot be barred from using elevators, as they are essential for reaching higher floors.
          </p>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            However, pet owners must practice responsible pet ownership. This includes: keeping the dog on a leash in common areas, ensuring the pet does not cause a public nuisance, and cleaning up if the pet defecates in common areas. RWAs cannot impose separate elevator charges or demand special security deposits for pet owners, as doing so constitutes discrimination under the law.
          </p>

          <div className="bg-[#FAF8F5] border border-gray-100 rounded-2xl p-6 mt-4">
            <h4 className="font-bold text-[#2D2219] mb-3">AWBI Housing Society Rules</h4>
            <ul className="space-y-3 text-xs sm:text-sm text-gray-600">
              <li className="flex items-start gap-2">
                <span className="text-[#D4AF37] font-bold">1. No Bans:</span> Society resolutions banning pets are illegal and invalid.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#D4AF37] font-bold">2. Elevator Access:</span> Lifts cannot be restricted for pets. Lying charges is prohibited.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#D4AF37] font-bold">3. Common Parks:</span> Societies can schedule park timings but cannot ban pets completely.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#D4AF37] font-bold">4. Pet Sizes:</span> RWAs cannot restrict pets based on breed size, weight, or barking volume.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
