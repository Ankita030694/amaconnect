import React from "react";

export default function PatentBasics({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 6
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Patent Registration Basics
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
            Patents protect original, functional inventions, giving the inventor exclusive rights to manufacture, use, and sell their creation for twenty years. Governed by the Patents Act, 1970, patent registration is a highly technical process requiring precise scientific and legal documentation. Knowing the criteria for patentability and filing methods is essential for inventors seeking to protect their ideas.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Criteria for Patentability and Prior Art Search
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            For an invention to be patentable in India, it must satisfy three core legal requirements: novelty, inventive step, and industrial applicability. Novelty means the invention has not been published, used, or disclosed anywhere in the world before the filing date. The inventive step requirement means the technology must not be obvious to a person skilled in that specific technical field. Industrial applicability requires the invention to be capable of being made or used in an industry, showing real utility.
          </p>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            Additionally, the invention must not fall under the non-patentable categories listed in Section 3 of the Patents Act. Section 3 excludes discoveries of scientific principles, mere discoveries of new forms of known substances (under Section 3d), algorithms, business methods, software per se, and traditional knowledge. To verify novelty, inventors must conduct a prior art search. This involves searching database portals like the Indian Patent Advanced Search System, Google Patents, and Espacenet to ensure the invention does not already exist in published patents or literature.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Provisional vs Complete Specifications
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            If an invention is still in the development stage, the inventor can file a provisional specification. A provisional application requires a general description of the invention without detailed patent claims. This step is useful because it secures a priority date for the invention and gives the inventor twelve months to refine the design, conduct tests, and secure funding.
          </p>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            To maintain the application, a complete specification must be filed within twelve months of the provisional filing. The complete specification is a detailed document containing the scientific description, detailed drawings, and specific patent claims that define the legal boundaries of the protection. Failing to file the complete specification within the twelve month window leads to the abandonment of the application, showing how important it is to manage patent timelines carefully.
          </p>

          <div className="bg-[#FAF8F5] border border-gray-100 rounded-2xl p-6 mt-4">
            <h4 className="font-bold text-[#2D2219] mb-3">Comparing Specifications</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-wider block mb-2">Provisional Application</span>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Secures an early priority date. Requires a general description of the invention without formal patent claims. The complete specification must be filed within twelve months.
                </p>
              </div>
              <div>
                <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-wider block mb-2">Complete Application</span>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Defines the final boundaries of the invention. Includes a detailed scientific description, drawings, and formal patent claims. It undergoes examination and publication.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
