import React from "react";

export default function IPContracts({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 7
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            IP Protection in Contracts
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
            Contracts are the primary legal tool used to allocate and protect intellectual property rights during business transactions, product development, and employment. Without clear, written agreements, companies can lose ownership of the technology their workers or freelancers build. Using strong contract clauses helps businesses prevent disputes, secure their assets, and clarify ownership.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Non-Disclosure Agreements (NDAs) and IP Assignment
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            A Non-Disclosure Agreement (NDA) is the first line of defense when sharing proprietary ideas, designs, or source code with potential partners, employees, or investors. NDAs can be unilateral (protecting one party sharing information) or mutual (protecting both parties sharing information). A well-drafted NDA clearly defines what is confidential, details the permitted uses of that information, and establishes the consequences of unauthorized leaks.
          </p>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            While an NDA protects secrets, an Intellectual Property Assignment Agreement actually transfers ownership of the intellectual property from the creator to the business. Under Section 19 of the Copyright Act, 1957, an assignment must be in writing and signed by the assignor. The document must specify the work, the duration of the assignment, the territorial extent, and the royalty payments. If the territory is not specified in the agreement, it is legally presumed to apply only within India. If the duration is not mentioned, the assignment is legally presumed to expire after five years.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Work For Hire Clauses in Freelance Agreements
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            Under Section 17 of the Copyright Act, 1957, when an employee creates original work during their regular employment, the employer is legally considered the first owner of the copyright, unless a contract states otherwise. However, this default ownership rule does not apply to independent contractors, freelancers, or third-party agencies. 
          </p>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            When a business hires a freelancer to write software code, design a logo, or write marketing content, the freelancer legally owns the copyright to that work by default, even if the business paid them for it. To prevent this, freelance contracts must include a Work For Hire or intellectual property transfer clause. This clause must explicitly state that the freelancer transfers all intellectual property rights to the hiring business immediately upon creation. Setting these terms in writing before work begins protects the company's investments and ensures they fully own the assets they paid for.
          </p>

          <div className="bg-[#FAF8F5] border border-gray-100 rounded-2xl p-6 mt-4">
            <h4 className="font-bold text-[#2D2219] mb-3">Essential Contractual Clauses for IP Protection</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs sm:text-sm text-gray-600">
              <div className="space-y-2">
                <span className="text-[#D4AF37] font-bold block">Confidentiality Scope</span>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Clearly defines what counts as secret, such as source code, database structures, or marketing strategies.
                </p>
              </div>
              <div className="space-y-2">
                <span className="text-[#D4AF37] font-bold block">IP Assignment</span>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Explicitly transfers rights, listing the territory, duration, and payment structure as required by Section 19.
                </p>
              </div>
              <div className="space-y-2">
                <span className="text-[#D4AF37] font-bold block">Waiver of Moral Rights</span>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Ensures the creator will not object to future updates, modifications, or commercial changes to the work.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
