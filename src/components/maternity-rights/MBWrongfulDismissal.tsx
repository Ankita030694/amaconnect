import React from "react";

export default function MBWrongfulDismissal({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 8
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Wrongful Dismissal and Court Remedies
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
            When employers violate Section 12 by firing a pregnant employee, or when they refuse to comply with a Labor Inspector's recovery order, the employee must pursue formal judicial remedies. Labor courts in India hold wide powers to undo these illegal acts and penalize the employer.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Approaching the Industrial Tribunal or Labor Court
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            The employee can file a petition before the local Labor Court or Industrial Tribunal under the Industrial Disputes Act, 1947, challenging her termination as a wrongful dismissal. If she was a manager or held a position not covered by the Industrial Disputes Act, she can file a writ petition under Article 226 of the Constitution before the High Court, challenging the termination as a violation of her fundamental right to equality and life.
          </p>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            During the trial, the employer has the burden to prove that the termination was completely unrelated to the pregnancy or leave. Because the law strongly favors the employee in maternity cases, the court reviews the timing of the termination closely. If the dismissal occurred immediately after the employee declared her pregnancy or applied for leave, it is treated as a wrongful dismissal.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Seeking Reinstatement, Back Wages, and Damages
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            If the court or tribunal finds the dismissal to be illegal, it can order several remedies to restore the employee's rights. First, the court can order immediate reinstatement, directing the employer to restore her to the same job, designation, and location.
          </p>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            Second, the court can award full back wages for the entire period she was out of work. This includes her regular salary, bonuses, interest, and any maternity benefits she was entitled to. Third, the court can award substantial financial damages for the mental agony, physical stress, and career disruption caused by the illegal termination. These remedies make wrongful termination expensive for employers, deterring discrimination.
          </p>

          <div className="bg-[#FAF8F5] border border-gray-100 rounded-2xl p-6 mt-4">
            <h4 className="font-bold text-[#2D2219] mb-3">Wrongful Dismissal Judicial Outcomes</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs sm:text-sm text-gray-600">
              <div className="space-y-2">
                <span className="text-[#D4AF37] font-bold block">Immediate Reinstatement</span>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Court orders directing the employer to take the employee back, restoring her original job, designation, and location without loss of seniority.
                </p>
              </div>
              <div className="space-y-2">
                <span className="text-[#D4AF37] font-bold block">Complete Back Wages</span>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Recovery of all unpaid salaries, allowances, and maternity benefits she would have earned during the litigation period.
                </p>
              </div>
              <div className="space-y-2">
                <span className="text-[#D4AF37] font-bold block">Compensatory Damages</span>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Financial awards for mental harassment, physical stress during pregnancy, and professional damage caused by the illegal retrenchment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
