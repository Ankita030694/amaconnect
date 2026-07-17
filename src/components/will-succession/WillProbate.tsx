import React from "react";

export default function WillProbate({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 7
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            The Probate Process in Court
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
            A probate is an official court document certifying the validity of a Will and confirming the executor's authority to manage the deceased's estate. Getting probate is a formal legal process that must be conducted before a competent civil court, providing complete legal protection for the distribution of properties.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            What is Probate and When is it Mandatory
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            A probate is issued under the seal of a court of competent jurisdiction. Under Section 213 of the Indian Succession Act, 1925, obtaining probate is mandatory to establish the rights of an executor or beneficiary under a Will if the Will was executed within the municipal limits of Chennai, Kolkata, or Mumbai, or if the immovable properties mentioned in the Will are located within these metropolitan areas.
          </p>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            For wills made outside these areas, probate is optional. However, even when optional, government agencies, housing societies, and banks often refuse to transfer land titles, stock portfolios, or high value bank accounts to the executor without probate. Obtaining probate protects the executor from personal liability, as the court's stamp confirms the Will's legal validity.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Step-by-Step Procedure to Obtain Probate
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            The probate process begins when the executor files a petition in the competent civil court (usually the District Court or High Court). The petition must include the original Will, the testator's death certificate, a list of assets, and the names of the legal heirs. The executor must also submit a declaration confirming they are the person named in the Will.
          </p>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            Once filed, the court issues public notices in local newspapers and sends direct notices to the deceased's close legal heirs, allowing them to raise objections within a set period. If no objections are raised, the executor must pay the court fee, which is a percentage of the estate's value. The court then examines at least one of the attesting witnesses to verify the execution. If satisfied, the court grants probate, giving the executor the legal authority to distribute the assets.
          </p>

          <div className="bg-[#FAF8F5] border border-gray-100 rounded-2xl p-6 mt-4">
            <h4 className="font-bold text-[#2D2219] mb-3">The Probate Timeline</h4>
            <ul className="space-y-3 text-xs sm:text-sm text-gray-600">
              <li className="flex items-start gap-2">
                <span className="text-[#D4AF37] font-bold">1. Petition Filing:</span> Submitting the original Will, death certificate, asset schedule, and valuations to the court.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#D4AF37] font-bold">2. Citation &amp; Public Notice:</span> Issuing newspaper notices and serving notices to close relatives to check for objections.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#D4AF37] font-bold">3. Witness Deposition &amp; Fee Payment:</span> Examining the attesting witnesses under oath and paying the required court fee stamps.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#D4AF37] font-bold">4. Issuance of Probate:</span> Granting of the court certificate with the Will attached, allowing the transfer of assets.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
