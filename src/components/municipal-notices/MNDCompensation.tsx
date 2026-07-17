import React from "react";

export default function MNDCompensation({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 8
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Demolition Compensation and Rights
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
            If a municipal corporation executes a demolition illegally, without serving proper notices or in violation of an active court stay order, the property owner has a right to seek compensation. The law provides paths to recover financial losses and hold the guilty officers personally accountable.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Claiming Damages for Illegal Demolitions Without Due Process
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            A property owner can file a civil suit for damages and compensation against the municipal corporation before the local civil court. In the suit, the owner must document the exact cost of the demolished structure, loss of personal belongings, and any business interruptions caused by the action. 
          </p>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            High Courts and the Supreme Court of India have increasingly awarded heavy damages, running into lakhs or crores of rupees, for demolitions conducted without following due process. The courts emphasize that the right to property is a constitutional right under Article 300A, and the state cannot deprive citizens of their homes without strict compliance with statutory rules.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Personal Liability of Municipal Officers for Malafide Actions
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            While public officers generally enjoy immunity for actions taken in good faith, this protection does not cover malicious, biased, or negligent actions. If a municipal officer executes a demolition spitefully, ignoring a court stay order or refusing to accept a registered reply, they can be held personally liable.
          </p>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            The civil court can order that the compensation awarded to the property owner be recovered directly from the personal salaries or assets of the guilty municipal officers. Additionally, the owner can initiate contempt of court proceedings against the officers if they knowingly violated a stay order. Contempt of court carries serious penalties, including fine and imprisonment, ensuring public servants act with responsibility and respect for the judiciary.
          </p>

          <div className="bg-[#FAF8F5] border border-gray-100 rounded-2xl p-6 mt-4">
            <h4 className="font-bold text-[#2D2219] mb-3">Protection and Liability Outcomes</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm text-gray-600">
              <div>
                <span className="text-[#D4AF37] font-bold block mb-1">Financial Damages Recovery</span>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Civil suits under Article 300A to recover construction costs, property damage, and business losses caused by illegal, hasty demolitions.
                </p>
              </div>
              <div>
                <span className="text-[#D4AF37] font-bold block mb-1">Personal and Contempt Penalties</span>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Contempt of court filings for violating stay orders. Courts can direct recovery of compensation directly from the personal salaries of guilty officers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
