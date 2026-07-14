import React from "react";

export default function EmployeeRights({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mb-12">
      <div className="flex flex-col gap-6">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 6
          </span>
          <h2 className="text-xl sm:text-2xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Employee Rights and Protection Rules
          </h2>
          
          <h3 className="text-base sm:text-lg font-bold text-[#2D2219] mt-6 mb-3">
            Protection against Retaliation and Hostility
          </h3>
          <p className="text-sm text-gray-600 leading-relaxed text-justify mb-4">
            One of the most significant barriers preventing women from reporting workplace harassment is the fear of professional retaliation and systemic victimization. Aggrieved employees often worry that filing a complaint will result in negative performance appraisals, missed promotion opportunities, social isolation within the team, or even termination of employment. The POSH Act actively addresses these concerns by incorporating robust protection clauses designed to prevent any post-filing hostility. Section 19 of the Act, read alongside individual service rules, establishes that retaliation against a complainant or witness is a severe disciplinary offense. Employers and the ICC are legally obligated to ensure that the complainant is not subjected to a hostile working environment or career disadvantage during or after the inquiry. Any attempts by the respondent or aligned management to threaten, demote, marginalize, or intimidate the complainant must be treated as an independent ground for disciplinary action, regardless of the final outcome of the main harassment inquiry. The law recognizes that a safe workspace is not just about the absence of physical harassment, but also the preservation of professional dignity and career security. ICC members are trained to monitor the workplace climate during the proceedings, and employees are encouraged to report any subtle signs of victimization, such as sudden changes in work allocation, exclusionary behavior by supervisors, or unwarranted warnings, which can be immediately addressed through interim orders.
          </p>
        </div>

        <div className="border border-gray-100 rounded-3xl p-6 sm:p-8 bg-[#FAF9F5]">
          <h3 className="text-base sm:text-lg font-bold text-[#2D2219] mb-3">
            Right to Transfer or Leave during Inquiry
          </h3>
          <p className="text-sm text-gray-600 leading-relaxed text-justify">
            To shield the complainant from daily contact with the accused and to protect her mental and physical well-being during the investigation, Section 12 of the POSH Act provides powerful interim relief mechanisms. During the pendency of the inquiry, upon a written request submitted by the aggrieved woman, the ICC can recommend that the employer implement immediate protective measures. These measures include transferring either the complainant or the respondent to another department, team, or branch, thereby eliminating any professional interaction between them. Alternatively, the ICC can recommend granting the complainant paid leave for up to three months. Crucially, this leave is in addition to the regular annual or sick leave she is otherwise entitled to, meaning it does not exhaust her standard leave balance. Furthermore, the committee can recommend restraining the respondent from reporting on the complainant's work performance or writing her confidential appraisal reports, assigning those duties to other unbiased supervisors. Employers are legally bound to implement these recommendations and report compliance back to the ICC. These interim provisions are vital because they recognize that forcing a complainant to work alongside the accused while testifying can lead to severe anxiety and compromised testimonies, thereby ensuring that the legal inquiry takes place in a non-coercive, supportive atmosphere. These relief options also extend to protecting witnesses who might otherwise feel intimidated to testify. By providing a clear legal right to step away from a toxic setting without facing financial loss or career stagnation, the Act ensures that the procedural aspects of the inquiry do not themselves become a source of secondary trauma for the victim.
          </p>
        </div>
      </div>
    </section>
  );
}
