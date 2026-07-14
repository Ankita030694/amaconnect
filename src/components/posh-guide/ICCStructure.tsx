import React from "react";

export default function ICCStructure({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mb-12">
      <div className="flex flex-col gap-6">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 2
          </span>
          <h2 className="text-xl sm:text-2xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Structure of Internal Complaints Committee
          </h2>
          
          <h3 className="text-base sm:text-lg font-bold text-[#2D2219] mt-6 mb-3">
            Mandatory Composition of the ICC Board
          </h3>
          <p className="text-sm text-gray-600 leading-relaxed text-justify mb-4">
            The cornerstone of the redressal mechanism established by the POSH Act is the Internal Complaints Committee, commonly abbreviated as the ICC. Under Section 4 of the Act, every employer who runs an administrative unit or office employing ten or more workers is legally mandated to constitute this committee at all branches or office units. The composition of the ICC is strictly regulated by law to ensure fairness, gender-balance, and credibility in handling sensitive complaints. The committee must be headed by a Presiding Officer, who must be a woman employed at a senior level in the workplace. If a senior-level woman employee is not available within the branch, the Presiding Officer can be nominated from other administrative offices of the same employer, or even from another department or organization. In addition to the Presiding Officer, the employer must nominate at least two members from amongst the employees who are committed to the cause of women, or who have experience in social work, or possess legal knowledge regarding gender rights. This internal component of the board ensures that the grievance mechanism is accessible, familiar with the organizational hierarchy, and fully capable of understanding the operational context of the office environment. By mandating a female-led, gender-sensitive composition, the statute aims to build a safe space where aggrieved employees can report violations without facing social stigma or structural intimidation from male-dominated management layers.
          </p>
        </div>

        <div className="border border-gray-100 rounded-3xl p-6 sm:p-8 bg-[#FAF9F5]">
          <h3 className="text-base sm:text-lg font-bold text-[#2D2219] mb-3">
            Role of External Member and Term Limits
          </h3>
          <p className="text-sm text-gray-600 leading-relaxed text-justify">
            To prevent corporate bias, institutional cover-ups, or manager-level interference, the POSH Act introduces a mandatory requirement for an external member on the Internal Complaints Committee. This external member must be nominated from a non-governmental organization or association that is actively committed to the cause of women, or be a person who is thoroughly familiar with issues relating to sexual harassment, such as a gender rights advocate, social worker, or legal expert. The presence of this independent member is crucial, as they bring an objective, unbiased perspective to the inquiry, ensuring that corporate hierarchies do not influence the committee's decisions. The Act also establishes strict term limits, stipulating that the Presiding Officer and every member of the ICC can hold office for a maximum period of three years from the date of their nomination. Once this three-year tenure is completed, the committee must be reconstituted, and members must be replaced to prevent the consolidation of power or conflict of interest. Additionally, the external member is entitled to a statutory fee or travel allowance paid by the employer for each day of inquiry proceedings, ensuring their active participation. If any member is found guilty of disclosing confidential information, abusing their position, or facing criminal charges, they must be immediately removed from the committee. Failing to constitute or properly maintain the ICC constitutes a major legal default, exposing the organization to severe penalties, including administrative fines and business shut-downs.
          </p>
        </div>
      </div>
    </section>
  );
}
