import React from "react";

export default function EmployerResponsibilities({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mb-12">
      <div className="flex flex-col gap-6">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 5
          </span>
          <h2 className="text-xl sm:text-2xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Employer Responsibilities and Penalties
          </h2>
          
          <h3 className="text-base sm:text-lg font-bold text-[#2D2219] mt-6 mb-3">
            Mandatory Workplace POSH Awareness Audits
          </h3>
          <p className="text-sm text-gray-600 leading-relaxed text-justify mb-4">
            Under the POSH Act, employers bear a proactive, statutory obligation to maintain a safe and harassment-free working environment. Section 19 of the Act outlines several duties that organizations must perform to ensure compliance. Employers are legally required to display the penal consequences of sexual harassment and the contact details of the ICC members in conspicuous locations across the office. Additionally, organizations must conduct regular workshops, training programs, and awareness audits for their employees to sensitize them on workplace safety rights. These workshops must be supplemented by specialized orientation programs for the members of the ICC, ensuring that the committee is fully equipped to handle complaints with legal accuracy, empathy, and confidentiality. Employers are also required to declare a zero-tolerance policy against sexual harassment, making it an integral part of the service rules or employment contracts. Furthermore, organizations must compile an annual compliance report detailing the number of harassment complaints received, the number of cases disposed of, and those that are pending resolution. This annual report must be submitted to the District Officer or the state government's labor department, providing a transparent record of the company's compliance status. These audits and filings are not merely optional corporate social responsibility activities but mandatory legal requirements. They ensure that the management remains accountable to state authorities, preventing companies from sweeping harassment cases under the carpet or neglecting their duties of care towards their workforce.
          </p>
        </div>

        <div className="border border-gray-100 rounded-3xl p-6 sm:p-8 bg-[#FAF9F5]">
          <h3 className="text-base sm:text-lg font-bold text-[#2D2219] mb-3">
            Fines and License Cancellations for Default
          </h3>
          <p className="text-sm text-gray-600 leading-relaxed text-justify">
            Failing to comply with the statutory provisions of the POSH Act carries severe financial and administrative consequences for organizations. Under Section 26 of the Act, if an employer fails to constitute an Internal Complaints Committee, fails to take action on the recommendations submitted by the ICC, or fails to file the mandatory annual compliance report, they can be fined up to fifty thousand rupees. While this initial fine may seem manageable for large corporations, the statute contains a much more potent enforcement mechanism for repeat violations. If an employer is convicted of the same offense a second time, they can face double the fine amount, and more critically, the local authorities or courts can order the cancellation, withdrawal, or non-renewal of their business license, registration, or regulatory permissions required to carry out commercial activities. This means that persistent non-compliance can lead to the complete shut-down of business operations in India. By linking POSH compliance to the very survival of the business entity, the legislature has sent a clear message that employee safety is a core corporate governance requirement. Courts in India have repeatedly held that organizations cannot plead ignorance of the law or cite internal administrative difficulties to justify their failure to establish an active, legally constituted ICC, making proactive compliance audits essential for all corporate entities. Additionally, director-level liability can also arise if it is proved that the failure to comply occurred with the consent, connivance, or neglect of any director, manager, or officer of the company, showing that the legal system is willing to pierce the corporate veil to enforce workplace safety standards and penalize individual officers.
          </p>
        </div>
      </div>
    </section>
  );
}
