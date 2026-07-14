import React from "react";

export default function LeaseProvisions({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-8 pt-8 border-t border-gray-100">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 2
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Standard Provisions of a Lease Agreement
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
            A lease agreement is a legally binding contract that establishes the terms and conditions of a tenancy. It serves as the primary document for resolving disputes between landlords and tenants. For a lease agreement to be effective and enforceable in court, it must contain specific standard provisions and meet strict registration requirements.
          </p>
        </div>

        <div className="space-y-10">
          {/* H3: Essential Terms of a Rental Agreement */}
          <div className="flex flex-col gap-3">
            <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
              Essential Terms of a Rental Agreement
            </h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
              Every lease agreement should clearly define the identity of the parties, description of the property, lease term, and the financial obligations. The agreement must state the monthly rent amount, the payment due date, late payment penalties, and the security deposit amount. It should also specify the notice period required by either party to terminate the lease, typically 30 or 60 days, and outline who is responsible for paying property taxes, utility bills, and routine maintenance charges.
            </p>
          </div>

          {/* H3: Eligibility Criteria for Legally Valid Registration */}
          <div className="flex flex-col gap-3">
            <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
              Eligibility Criteria for Legally Valid Registration
            </h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
              For a lease agreement to have high legal validity and be admissible as primary evidence in a court or before a rent authority, it must satisfy specific eligibility criteria:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-gray-600">
              <li>
                <strong>Competent Parties:</strong> Both the lessor (landlord) and lessee (tenant) must be legally competent to contract under the Indian Contract Act, 1872. They must be of legal age, of sound mind, and have the legal capacity to enter into an agreement.
              </li>
              <li>
                <strong>Clear Title or Authority:</strong> The landlord must possess clear ownership of the property, or have valid authorization (such as a registered Power of Attorney) to lease the property.
              </li>
              <li>
                <strong>Written Document:</strong> Oral tenancies are not eligible for registration under modern rent acts, particularly the Model Tenancy Act. The agreement must be written.
              </li>
              <li>
                <strong>Adequate Stamp Duty:</strong> The document must be printed on stamp paper of appropriate value or have e-stamp duty paid, as calculated under the local State Stamp Act based on the lease term and rent.
              </li>
              <li>
                <strong>Registration Requirement:</strong> Under Section 17 of the Registration Act, 1908, any lease of immovable property from year to year, or for any term exceeding one year, or reserving a yearly rent, must be compulsorily registered at the local Sub-Registrar's Office.
              </li>
              <li>
                <strong>Identification and Witnesses:</strong> Both parties must provide official identification (such as Aadhaar or PAN card) and be accompanied by two witnesses who also provide valid identification proof.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
