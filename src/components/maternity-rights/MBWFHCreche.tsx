import React from "react";

export default function MBWFHCreche({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 6
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Work from Home and Creche Facilities
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
            The 2017 amendments to the Maternity Benefit Act introduced progressive provisions to help returning mothers balance childcare and professional duties. These rules require companies to build local childcare facilities and allow flexible remote work options.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            The statutory obligation to provide Creches for large offices
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            Under Section 11A of the Act, every establishment employing fifty or more employees is legally required to establish a creche facility within a reasonable distance from the office premises. The facility can be set up individually by the company or shared with other establishments in the vicinity.
          </p>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            The employer must allow the female employee four visits daily to the creche, which includes the intervals for rest allowed to her. The creche facility must be clean, safe, and managed by trained staff. The employer is required to declare these details at the time of recruitment, ensuring new joiners are aware of their rights.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Guidelines on Mutually Agreeable Remote Work Agreements
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            Section 5(5) of the Act introduces a provision for work from home options. It states that if the nature of work assigned to a woman is such that she can perform it from home, the employer may allow her to work remotely after completing her twenty-six weeks of paid leave.
          </p>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            Unlike creche facilities, which are mandatory, remote work depends on the nature of the job and mutual agreement between the employer and the employee. The terms, duration of remote work, and performance tracking should be clearly documented in a written agreement. This helps prevent disputes and supports returning mothers who wish to continue working while caring for their infants.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <div className="bg-[#FAF8F5] border border-gray-100 rounded-2xl p-6">
              <h4 className="font-bold text-[#2D2219] mb-2">Creche Obligations (Section 11A)</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Mandatory for all offices with fifty or more workers. Allows the mother four daily visits to the creche, including standard rest intervals.
              </p>
            </div>
            <div className="bg-[#FAF8F5] border border-gray-100 rounded-2xl p-6">
              <h4 className="font-bold text-[#2D2219] mb-2">Work From Home (Section 5)</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Applies if the job nature allows remote execution. Requires a mutually signed agreement between employer and employee after leave completion.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
