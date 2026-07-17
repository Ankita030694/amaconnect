import React from "react";

export default function DVIncidentReport({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 5
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Filing a Domestic Incident Report (DIR)
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
            The filing process for domestic violence complaints is designed to be accessible, bypasses complicated court procedures, and utilizes specialized protection structures. The primary document used to initiate proceedings is the Domestic Incident Report (DIR), which records the history of abuse and forms the basis for subsequent court hearings.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Role and Duties of a Protection Officer
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            Protection Officers are specialized government officials appointed by the state under the PWDVA to assist women in navigating the legal process. They are usually women and act as a bridge between the victim, the police, and the magistrate court. Their primary duty is to help women draft and file the Domestic Incident Report using Form one.
          </p>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            Additionally, Protection Officers help women obtain free legal aid, secure medical examinations for physical injuries, and arrange safe shelter homes if they cannot return to the shared household. When a court case begins, the Protection Officer ensures that the magistrate receives the completed DIR, serves the court notices to the husband, and monitors compliance with protection and maintenance orders.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Filing Complaints with NGOs and Police Cells
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            A domestic violence complaint does not need to be filed directly in court. A woman can approach a registered Service Provider (such as an NGO or women's helpline) or a local police station. Service Providers have the legal authority to record the DIR, provide counseling, and refer the complaint to the Protection Officer or magistrate.
          </p>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            Many police stations also have specialized Crimes Against Women (CAW) cells or family protection units. When a complaint is filed here, the police coordinate with the local Protection Officer to record the Domestic Incident Report. If the woman faces immediate danger, the police must assist her in moving to a safe location or shelter home and help her file for emergency protection orders, ensuring she is protected while the legal process is underway.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <div className="bg-[#FAF8F5] border border-gray-100 rounded-2xl p-6">
              <h4 className="font-bold text-[#2D2219] mb-2">Duties of Protection Officers</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Appointed by the state to assist women in drafting the DIR. Coordinates with police cells, arranges shelter, and ensures court notices are served to the respondent.
              </p>
            </div>
            <div className="bg-[#FAF8F5] border border-gray-100 rounded-2xl p-6">
              <h4 className="font-bold text-[#2D2219] mb-2">Role of Service Providers</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Registered NGOs and helper organizations authorized to record incident reports, offer counseling, and provide medical or shelter assistance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
