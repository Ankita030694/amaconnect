import React from "react";

export default function ARBreedingRules({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 7
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            AWBI Rules on Pet Breeding and Sales
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
            Commercial breeding and sale of pets are heavily regulated in India to prevent exploitation and inhuman conditions. Unregulated puppy mills and pet shops operating without valid certificates violate federal rules, and citizens can report these illegal businesses.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Mandatory Registration of Breeders and Shops
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            Pet breeding is regulated under the Prevention of Cruelty to Animals (Dog Breeding and Marketing) Rules, 2017, and the Pet Shop Rules, 2018. These rules make it mandatory for all commercial breeders and pet shops to register with the respective State Animal Welfare Board (SAWB).
          </p>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            An unregistered breeding setup or pet shop is illegal. To secure registration, operators must satisfy standards regarding: cage sizes, ventilation, veterinary care, cleanliness, and maintain records of all purchases and sales. SAWBs hold the power to conduct inspections, seize animals, and seal unregistered shops, protecting animal health.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Banned Practices under Breeding Rules
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            The breeding rules explicitly ban several exploitative practices commonly seen in the industry. For instance, breeding female dogs under the age of eighteen months or over the age of eight years is strictly prohibited.
          </p>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            Additionally, breeding a female dog more than once a year is banned, ensuring she has time to recover. Selling puppies under the age of eight weeks is illegal, as they require maternal care. Banned cosmetic surgeries, such as tail docking or ear cropping (unless recommended by a veterinarian for medical reasons), are treated as cruelty under Section 11 of the PCA Act. Citizens can report these violations to municipal boards and animal groups to shut down these operations.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <div className="bg-[#FAF8F5] border border-gray-100 rounded-2xl p-6">
              <h4 className="font-bold text-[#2D2219] mb-2">SAWB Permits &amp; Audits</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Requires state board registration for all commercial breeders and pet shops. Mandates record keeping, veterinary checkups, and standard cage sizes.
              </p>
            </div>
            <div className="bg-[#FAF8F5] border border-gray-100 rounded-2xl p-6">
              <h4 className="font-bold text-[#2D2219] mb-2">Banned Exploitative Acts</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Bans breeding dogs under eighteen months, tail docking, ear cropping, and selling puppies under eight weeks. Violations lead to immediate animal seizures.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
