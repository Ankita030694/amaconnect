import React from "react";

export default function MNDTribunals({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 4
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Approaching Municipal Tribunals
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
            To reduce the burden on civil courts, many states have established specialized administrative tribunals to handle disputes involving local municipal bodies. These tribunals are the primary forum for challenging demolition orders, offering faster hearings.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Appeals against Final Demolition Orders in Tribunals
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            Specialized bodies, such as the Appellate Tribunal MCD (ATMCD) in Delhi or corresponding Municipal Appellate Tribunals in other states, have the authority to hear appeals against orders passed by municipal commissioners. 
          </p>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            When a property owner receives a final order directing demolition within a set number of days, they can file an appeal before the tribunal. The tribunal functions like a court, reviewing the municipal records, hearing arguments, and assessing whether the municipal body followed the proper legal procedures. The tribunal holds the authority to stay, modify, or set aside the demolition order entirely, providing a specialized administrative remedy.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Limitation Periods for Filing Appeals
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            Property owners must pay close attention to the strict limitation periods for filing appeals before municipal tribunals. The municipal acts set short windows for filing, typically between fifteen to thirty days from the date the final demolition order is served.
          </p>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            If an owner fails to file the appeal within this period, the tribunal may refuse to hear the case, leaving the property vulnerable to demolition. Under Section 5 of the Limitation Act, 1963, the tribunal can condone delays only if the owner can show sufficient cause, such as a medical emergency or natural disaster. However, to ensure maximum safety, owners should file their appeals immediately upon receiving the final order.
          </p>

          <div className="bg-[#FAF8F5] border border-gray-100 rounded-2xl p-6 mt-4">
            <h4 className="font-bold text-[#2D2219] mb-3">Tribunal Appeals Quick Facts</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs sm:text-sm text-gray-600">
              <div>
                <span className="text-[#D4AF37] font-bold block mb-1">Administrative Jurisdiction</span>
                <ul className="space-y-1 list-disc list-inside text-gray-500">
                  <li>Specialized forum to review commissioner decisions.</li>
                  <li>Reviews whether proper show-cause hearings occurred.</li>
                  <li>Has the power to cancel, suspend, or stay demolition orders.</li>
                </ul>
              </div>
              <div>
                <span className="text-[#D4AF37] font-bold block mb-1">Filing Limitations</span>
                <ul className="space-y-1 list-disc list-inside text-gray-500">
                  <li>Appeal window is typically fifteen to thirty days.</li>
                  <li>Condonation of delay requires proof of emergency.</li>
                  <li>Bypasses standard civil court backlogs.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
