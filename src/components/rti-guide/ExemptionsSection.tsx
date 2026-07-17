import React from "react";

export default function ExemptionsSection({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 5
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Exemptions from Disclosure under Section 8
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
            While the Act promotes maximum disclosure, it restricts access to information that could compromise state security or infringe upon individual privacy. Understanding these legal exceptions is essential to avoid submitting unviable queries.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            National Security and Sovereign Interests
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            The right to information is not absolute, and the law strikes a balance between transparency and protecting vital state interests. Section 8(1) of the Right to Information Act, 2005, contains a comprehensive list of categories that are exempt from disclosure. Specifically, Section 8(1)(a) protects information that would prejudicially affect the sovereignty and integrity of India, the security, strategic, scientific, or economic interests of the state, relation with foreign states, or lead to incitement of an offense. Under this exemption, details regarding military deployments, weapons development, defense procurement strategies, intelligence agency reports, and diplomatic communications are guarded. Furthermore, Section 24 of the Act exempts certain security and intelligence organizations established by the central government, such as the Intelligence Bureau, Research and Analysis Wing, and national security guards, from the purview of the Act entirely. However, Section 24 contains an important proviso, which states that information pertaining to allegations of corruption and human rights violations cannot be excluded. In such cases, the information must be provided, subject to the approval of the Central Information Commission. Understanding these national security boundaries prevents applicants from submitting queries that are destined for rejection. If a public information officer invokes Section 8(1)(a) to refuse your request, they must provide a written justification showing how disclosure would harm the national interests. This ensures that the exemption is not used arbitrarily to shield ordinary administrative documents from public scrutiny.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Personal Information and Fiduciary Relationships
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            Another major category of exemptions focuses on protecting private interests and commercial confidentiality. Under Section 8(1)(e), information available to a person in their fiduciary relationship is exempt from disclosure, unless the competent authority is satisfied that the larger public interest warrants disclosure. This protects relationships built on trust, such as doctor and patient, lawyer and client, or bank and customer. Similarly, Section 8(1)(j) exempts personal information that has no relationship to any public activity or interest, or which would cause unwarranted invasion of the privacy of the individual. For example, medical records, tax filings, performance assessments, and bank statements of public servants cannot be accessed via RTI unless a compelling public interest is proven. Furthermore, Section 8(1)(d) protects commercial confidence, trade secrets, or intellectual property, where disclosure would harm the competitive position of a third party. However, Section 8 contains a powerful overriding clause at the end of Section 8(2), which states that a public authority may allow access to information if the public interest in disclosure outweighs the harm to the protected interests. During appeals, if an applicant can demonstrate that revealing the records would expose systemic corruption, financial irregularities, or public safety hazards, the commission may order the disclosure of otherwise exempt information. Balancing individual privacy and public transparency is one of the most complex aspects of the Act, and decisions are made on a case-by-case basis.
          </p>
        </div>
      </div>
    </section>
  );
}
