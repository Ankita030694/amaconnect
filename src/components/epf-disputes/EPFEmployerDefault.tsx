import React from "react";

export default function EPFEmployerDefault({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 7
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Employer Default in PF Contributions
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
            A serious issue faced by employees is when an employer deducts the employee's share of PF contribution from their monthly salary but fails to deposit it with the EPFO. This is not just a regulatory compliance failure, but a criminal offense under Indian labor and penal laws.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Legal Remedies for Deducted But Unpaid PF Contributions
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            Under Section 14 of the EPF Act, the EPFO has the authority to prosecute defaulting employers. The regional commissioner can initiate inquiries under Section 7A to determine the outstanding dues. Defaulting employers are liable to pay the arrears along with interest (under Section 7Q) and damages (under Section 14B) for the delay period.
          </p>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            Employees can check their monthly contributions by downloading their EPF passbook on the member portal or checking SMS updates from the EPFO. If they discover their employer has deducted money but failed to deposit it, they can register a formal complaint on the EPFiGMS portal. The EPFO can attach the employer's bank accounts, recover the dues directly, and credit the missing amounts with interest to the employee's passbook.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Filing Labor Commission and Police Complaints
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            Apart from EPFO actions, employees can seek remedies under general criminal law. Under Explanation one and two of Section 405 of the Indian Penal Code, an employer who deducts employee contributions but fails to deposit them is legally deemed to have committed criminal breach of trust.
          </p>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            Employees can file a criminal complaint under Section 406 of the IPC at their local police station against the directors or partners of the company. Additionally, they can file a complaint with the state Labor Commissioner. The labor department can prosecute the employer for violating basic labor safety rules. These criminal and administrative pressures force defaulting employers to pay outstanding dues, securing the employee's retirement benefits.
          </p>

          <div className="bg-[#FAF8F5] border border-gray-100 rounded-2xl p-6 mt-4">
            <h4 className="font-bold text-[#2D2219] mb-3">Remedies for Unpaid PF Deposits</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs sm:text-sm text-gray-600">
              <div>
                <span className="text-[#D4AF37] font-bold block mb-1">EPFO Administrative Recovery</span>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Section 7A inquiries to determine dues, interest charges under Section 7Q, damages under Section 14B, and attachment of company bank accounts.
                </p>
              </div>
              <div>
                <span className="text-[#D4AF37] font-bold block mb-1">Criminal Prosecution</span>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Filing criminal breach of trust complaints under Section 406 of the IPC. Police can register an FIR and arrest company directors.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
