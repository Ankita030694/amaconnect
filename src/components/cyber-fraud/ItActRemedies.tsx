import React from "react";

export default function ItActRemedies({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 5
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Legal Remedies under Information Technology Act
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
            The primary legislative instrument dealing with cyber crimes and digital commerce in India is the Information Technology Act 2000. Beyond prescribing criminal penalties for hackers and scammers, the Act establishes a comprehensive civil adjudication mechanism designed to help victims seek financial compensation for losses resulting from security breaches. This statutory pathway operates independently of standard civil courts, which are notoriously slow and burdened with massive case backlogs. Under Section 46 of the Information Technology Act, the central government appoints Adjudicating Officers, typically the Secretary of the Department of Information Technology in each state, to preside over disputes involving digital infractions. These Adjudicating Officers possess the powers of a civil court, including the authority to summon witnesses, demand the production of documents, and award damages by way of compensation. For victims of digital payment frauds, identity theft, and corporate security negligence, filing a petition before the Adjudicating Officer is a powerful and underutilized legal remedy that can force negligent banks, telecom operators, or payment gateways to pay substantial damages. This administrative tribunal provides a specialized forum where technical evidence regarding network security, digital signatures, and electronic records can be evaluated by experts, ensuring a much faster and more accurate resolution of cyber disputes than traditional civil litigation channels. By bypassing the traditional backlog of civil courts, this mechanism ensures that cyber fraud victims can seek swift financial restitution directly from the corporate entities whose security lapses facilitated the criminal act in the first place.
          </p>
        </div>

        <div className="space-y-10">
          {/* H3: Filing Claims before Adjudicating Officer */}
          <div className="flex flex-col gap-3">
            <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
              Filing Claims before Adjudicating Officer
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed text-justify">
              Filing a claim before the Adjudicating Officer involves a structured legal petition that must be drafted with precision, detailing the nature of the security failure and the exact financial damage suffered. The petition is filed under Section 43 or Section 45 of the Information Technology Act, which deal with unauthorized access to computer systems, data theft, and failure to protect sensitive personal data. The territorial jurisdiction of the Adjudicating Officer is determined by where the computer system or data was accessed, or where the victim resides. A nominal filing fee, calculated based on the compensation claimed, must be paid along with the petition. In the petition, the complainant must demonstrate that the respondent, which could be a bank that allowed an unauthorized transaction or a telecom provider that illegally issued a duplicate SIM card, failed to implement reasonable security practices. The Adjudicating Officer conducts hearings, evaluates technical evidence, and has the authority to award compensation up to five crore rupees. Decisions made by the Adjudicating Officer can be appealed before the Telecom Disputes Settlement and Appellate Tribunal, providing a complete judicial review mechanism. This dual-tiered structure guarantees that both the consumer and the corporate entity are granted a fair hearing under a specialized framework designed specifically to handle complex electronic evidence and digital transactions.
            </p>
          </div>

          {/* H3: Compensation for Identity Theft and Fraud */}
          <div className="flex flex-col gap-3">
            <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
              Compensation for Identity Theft and Fraud
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed text-justify">
              The Information Technology Act contains specific provisions that mandate compensation for identity theft and financial fraud, serving as a powerful deterrent against systemic negligence. Section 43A of the Act explicitly states that if a body corporate handling sensitive personal data is negligent in implementing and maintaining reasonable security practices, causing wrongful loss or wrongful gain to any person, such body corporate is liable to pay damages by way of compensation to the affected person. This section is frequently invoked against banks that fail to protect customer credentials or ignore fraud alerts. Furthermore, Section 66C and Section 66D of the Act prescribe strict criminal penalties for identity theft and cheating by personation using computer resources. When these criminal offenses are prosecuted alongside civil claims, the courts and Adjudicating Officers analyze the combined impact of the identity theft, factoring in not only the direct financial loss but also the mental agony, reputational damage, and legal costs incurred by the victim. This multi-layered compensation framework ensures that victims of cyber crimes have a viable pathway to be restored to their original financial position. By holding corporate entities financially accountable for security oversights, the law shifts the cost of cyber crime onto the parties best positioned to prevent it, encouraging systemic upgrades in data security across the financial and telecommunication industries.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
