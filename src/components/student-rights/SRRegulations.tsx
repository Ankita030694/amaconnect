import React from "react";

export default function SRRegulations({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 4
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            UGC and AICTE University Regulations
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
            Higher education in India is regulated by statutory bodies to maintain academic quality and prevent commercial fraud. Students and parents must understand these regulations to verify the credentials of institutions and ensure their degrees hold legal value.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Verification of Deemed and Fake University Status
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            The University Grants Commission (UGC) is the primary statutory body regulating universities in India. Under Section 22 of the UGC Act, 1956, only universities established by a Central Act, State Act, or institutions deemed to be universities under Section 3 can grant degrees.
          </p>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            Every year, the UGC publishes a list of fake universities operating in India that are not authorized to award degrees. Students should verify the accreditation status on the official UGC and All India Council for Technical Education (AICTE) portals before enrolling. Enrolling in an unapproved institution can result in invalid degrees that are rejected by public employers and foreign universities, destroying career opportunities.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Statutory Standards for Degree Validation
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            For technical and professional courses, such as engineering, business management, pharmacy, or law, the institution must secure approvals from respective councils. These councils include the AICTE, Bar Council of India (BCI), or Medical Council of India (MCI).
          </p>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            The degrees awarded must comply with the nomenclature specified by the UGC under Section 22. If a university changes the course structure or degree names without securing approvals from the council, the degrees can be declared invalid. Affected students can approach consumer courts for compensation or file writ petitions in the High Court to direct the councils to validate their degrees under equity principles, protecting their futures.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <div className="bg-[#FAF8F5] border border-gray-100 rounded-2xl p-6">
              <h4 className="font-bold text-[#2D2219] mb-2">UGC Act Section 22</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Restricts the power to grant degrees to recognized universities. Fake universities are blacklisted annually on the UGC online portal.
              </p>
            </div>
            <div className="bg-[#FAF8F5] border border-gray-100 rounded-2xl p-6">
              <h4 className="font-bold text-[#2D2219] mb-2">Professional Council Approvals</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Technical, legal, and medical courses require BCI, AICTE, or MCI approval. Degrees without council validation are not recognized for practice.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
