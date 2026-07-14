import React from "react";

export default function OverviewPOSH({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mb-12">
      <div className="flex flex-col gap-6">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 1
          </span>
          <h2 className="text-xl sm:text-2xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Overview of POSH Act in India
          </h2>
          
          <h3 className="text-base sm:text-lg font-bold text-[#2D2219] mt-6 mb-3">
            Historical Background and Vishaka Guidelines
          </h3>
          <p className="text-sm text-gray-600 leading-relaxed text-justify mb-4">
            The history of workplace safety regulations for women in India underwent a major regulatory shift with the landmark Supreme Court judgement in the case of Vishaka versus State of Rajasthan in 1997. Prior to this historic ruling, women facing sexual harassment at work had no specific recourse under civil law, and their only remedy was to file criminal complaints under general sections of the Indian Penal Code, which were completely inadequate for addressing the complex power dynamics of professional environments. The Supreme Court, recognizing this legislative vacuum, exercised its powers under Article 142 of the Constitution of India to formulate a set of legally binding directives. These guidelines, widely known as the Vishaka Guidelines, mandated that all employers, in both the public and private sectors, establish mechanisms to prevent and redress sexual harassment. They redefined sexual harassment as a violation of the fundamental rights of women to equality, non-discrimination, and life with dignity, as guaranteed under Articles 14, 15, and 21 of the Constitution, as well as their right to practice any profession or carry out any trade or business under Article 19(1)(g). For sixteen years, these guidelines served as the law of the land, establishing the precedent that employers bear a primary duty of care to ensure a safe, non-hostile working environment for their female staff, laying the foundation for future legislative efforts. The court also emphasized that the definition of harassment goes beyond physical assault, encompassing verbal abuse, suggestive comments, and non-verbal gestures that humiliate a woman or create an intimidating workspace. This judicial framework successfully shifted the burden of workplace safety from the individual victim to the corporate organization, establishing the very first internal grievance redressal bodies in India, which eventually paved the way for the formal enactment of the POSH Act in 2013.
          </p>
        </div>

        {/* SECTION TYPE: Eligibility Criteria */}
        <div className="bg-[#FAF9F5] border border-[#D4AF37]/20 rounded-3xl p-6 sm:p-8">
          <h3 className="text-base font-bold text-[#2D2219] mb-3">
            Eligibility Criteria for Filing a POSH Complaint
          </h3>
          <p className="text-xs text-gray-500 mb-6 leading-relaxed">
            Under the POSH Act, statutory protection is extended to a wide range of individuals. Review the core eligibility criteria required to file a complaint before the Internal Complaints Committee:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                title: "Aggrieved Woman Status",
                desc: "Any female, regardless of age, employment status, or whether she is a permanent, temporary, contractual, or volunteer worker is eligible."
              },
              {
                title: "Visitor and Third-Party Protection",
                desc: "Female clients, visitors, customers, and daily-wage laborers who experience harassment within the workplace premises are fully covered."
              },
              {
                title: "Workplace Connection",
                desc: "The incident must occur at the primary office, a virtual meeting, client location, business trip, or transit provided by the employer."
              },
              {
                title: "Statutory Limitation Window",
                desc: "The complaint must be filed within three months from the date of the incident, or the last incident in case of continuous harassment."
              }
            ].map((item, idx) => (
              <div key={idx} className="border border-gray-100 rounded-2xl p-4 bg-white shadow-sm flex flex-col gap-1.5">
                <span className="text-xs font-bold text-[#2D2219] flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#D4AF37]" />
                  {item.title}
                </span>
                <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-base sm:text-lg font-bold text-[#2D2219] mt-6 mb-3">
            Scope and Definition of Workplace Harassment
          </h3>
          <p className="text-sm text-gray-600 leading-relaxed text-justify mb-6">
            The formalization of the Vishaka Guidelines came to fruition with the enactment of the Sexual Harassment of Women at Workplace (Prevention, Prohibition and Redressal) Act, 2013, commonly referred to as the POSH Act. The scope of this statutory framework is remarkably expansive, designed to cover all women, regardless of their age, employment status, or nature of work. Under the Act, an aggrieved woman is defined to include permanent, temporary, ad-hoc, contractual, daily-wage workers, trainees, interns, and even visitors or clients who experience harassment within the office premises. Furthermore, the definition of a workplace is not restricted to a traditional physical office. It extends to any location visited by the employee arising out of or during the course of employment, including work-related travel, company-sponsored events, client sites, and transportation provided by the employer. The Act defines sexual harassment to include unwelcome behaviors such as physical contact and advances, a demand or request for sexual favors, making sexually colored remarks, showing pornography, or any other unwelcome physical, verbal, or non-verbal conduct of a sexual nature. Crucially, the law recognizes two primary forms of harassment: quid pro quo, where professional benefits are conditioned on sexual favors, and hostile work environment, where the conduct creates an intimidating, offensive, or oppressive atmosphere that interferes with work performance. This wide-ranging definition ensures that modern working arrangements, including virtual offices, remote work settings, and digital communication channels, are fully covered under the law. By codifying these definitions, the POSH Act ensures that employers cannot escape liability by claiming that an incident occurred outside typical office hours or off official premises, thereby establishing a comprehensive protective shield for women in the contemporary workforce.
          </p>
        </div>

        {/* SECTION TYPE: Comparison Table */}
        <div className="border border-gray-100 rounded-3xl p-6 sm:p-8 bg-white">
          <h3 className="text-base font-bold text-[#2D2219] mb-4">
            Comparison Table: Vishaka Guidelines vs. POSH Act 2013
          </h3>
          <p className="text-xs text-gray-500 mb-6 leading-relaxed">
            The transition from judicial guidelines to codified statute strengthened the enforcement mechanisms and expanded the definitions of workplace safety:
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <th className="py-3 px-4 font-bold text-[#2D2219]">Comparison Aspect</th>
                  <th className="py-3 px-4 font-bold text-[#2D2219]">Vishaka Guidelines (1997)</th>
                  <th className="py-3 px-4 font-bold text-[#2D2219]">POSH Act (2013)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  {
                    aspect: "Legal Status",
                    vishaka: "Judicial directives under Article 141 of the Constitution.",
                    posh: "Codified statutory legislation passed by the Parliament of India."
                  },
                  {
                    aspect: "Definition of Workplace",
                    vishaka: "Limited primarily to traditional, physical office workspaces.",
                    posh: "Highly expansive, including virtual offices, transit, and client locations."
                  },
                  {
                    aspect: "Committee Composition",
                    vishaka: "Recommended internal redressal bodies with female leadership.",
                    posh: "Strictly mandates an ICC with at least 50 percent women and an external member."
                  },
                  {
                    aspect: "Non-compliance Penalties",
                    vishaka: "No direct statutory fines, enforced via judicial contempt.",
                    posh: "Fines up to fifty thousand rupees and cancellation of business licenses."
                  }
                ].map((row, idx) => (
                  <tr key={idx} className="hover:bg-gray-50/55 transition-colors">
                    <td className="py-3.5 px-4 font-bold text-[#2D2219]">{row.aspect}</td>
                    <td className="py-3.5 px-4 text-gray-600 leading-relaxed">{row.vishaka}</td>
                    <td className="py-3.5 px-4 text-gray-600 leading-relaxed">{row.posh}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
