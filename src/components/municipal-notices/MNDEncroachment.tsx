import React from "react";

export default function MNDEncroachment({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 5
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Legal Remedies against Encroachment
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
            Property owners face threats not only from government bodies but also from private individuals, such as neighbors or builders constructing on their land. Encroachment is a violation of property rights that requires immediate action before the construction becomes permanent.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Filing Demarcation Applications to Verify Borders
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            Before initiating a legal dispute, the owner must establish the exact boundaries of their land. This is done by filing a Demarcation Application before the local revenue authority or Tehsildar under the state land revenue code. 
          </p>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            The revenue authority appoints a government surveyor to measure the property using official land registry records, maps, and GPS coordinates. The surveyor conducts the measurement in the presence of both parties, creating a formal demarcation report and map. This report serves as indisputable official proof showing whether the neighbor has crossed the boundary lines, providing a solid foundation for any subsequent court case.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Suit for Recovery of Possession and Ejectment
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            If the demarcation report shows encroachment, and the neighbor refuses to remove the illegal structure, the owner can file a civil lawsuit for recovery of possession under Section 5 or Section 6 of the Specific Relief Act, 1963.
          </p>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            In the lawsuit, the owner asks the court to issue a decree directing the defendant to return possession of the encroached land. The owner can also request a mandatory injunction directing the defendant to demolish the illegal structure at their own expense, along with damages for illegal use and occupation of the property. Once the court passes the decree, the owner can file an execution petition, directing the court bailiff and police to remove the structure and restore the land.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <div className="bg-[#FAF8F5] border border-gray-100 rounded-2xl p-6">
              <h4 className="font-bold text-[#2D2219] mb-2">Demarcation Process</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Filed before the local Tehsildar. Government surveyors use maps and GPS to create an official boundary verification report.
              </p>
            </div>
            <div className="bg-[#FAF8F5] border border-gray-100 rounded-2xl p-6">
              <h4 className="font-bold text-[#2D2219] mb-2">Possession Recovery Suit</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Filed under the Specific Relief Act. Requests the court to eject the encroacher, demolish the illegal structure, and restore the land.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
