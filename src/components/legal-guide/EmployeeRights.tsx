import React from "react";

export default function EmployeeRights({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 4
          </span>
          <h2 className="text-xl sm:text-2xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Employee Rights &amp; Labor Law Guide
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed text-justify mb-4">
            Indian labor and employment laws provide strong guardrails for employees in corporate (white-collar) as well as industrial (blue-collar) sectors. Knowing your rights regarding termination, leaves, wage delays, and safety is key to protecting your career.
          </p>
        </div>

        {/* 4 Pillars of Employee Rights */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border border-gray-100 rounded-3xl p-6 shadow-sm bg-white hover:shadow-md transition-shadow">
            <div className="w-8 h-8 rounded-full bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] font-bold text-sm mb-4">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <h3 className="text-xs font-bold text-[#2D2219] mb-1.5">Wrongful Termination Notice</h3>
            <p className="text-xs text-gray-500 leading-relaxed">
              Employers must follow termination clauses stated in your employment agreement (typically 1 to 3 months of notice or equivalent pay in lieu of notice). Arbitrary termination without cause or notice constitutes wrongful termination, and is contestable in labor courts or civil courts.
            </p>
          </div>

          <div className="border border-gray-100 rounded-3xl p-6 shadow-sm bg-white hover:shadow-md transition-shadow">
            <div className="w-8 h-8 rounded-full bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] font-bold text-sm mb-4">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 className="text-xs font-bold text-[#2D2219] mb-1.5">Maternity Benefit Act Protections</h3>
            <p className="text-xs text-gray-500 leading-relaxed">
              Female employees are entitled to 26 weeks of paid maternity leave. The law prohibits discharging or dismissing a woman solely because she is absent on account of maternity leave. Establishments with 50+ employees must also provide creche facilities.
            </p>
          </div>

          <div className="border border-gray-100 rounded-3xl p-6 shadow-sm bg-white hover:shadow-md transition-shadow">
            <div className="w-8 h-8 rounded-full bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] font-bold text-sm mb-4">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xs font-bold text-[#2D2219] mb-1.5">Wage &amp; Gratuity Protection</h3>
            <p className="text-xs text-gray-500 leading-relaxed">
              Wages must be paid in full and on time. If you have worked continuously in an organization with 10+ employees for 5 years or more, you are legally entitled to receive Gratuity upon resignation, retirement, or termination.
            </p>
          </div>

          <div className="border border-gray-100 rounded-3xl p-6 shadow-sm bg-white hover:shadow-md transition-shadow">
            <div className="w-8 h-8 rounded-full bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] font-bold text-sm mb-4">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="text-xs font-bold text-[#2D2219] mb-1.5">POSH Act Compliance</h3>
            <p className="text-xs text-gray-500 leading-relaxed">
              The POSH Act mandates that every employer with 10+ workers must constitute an Internal Complaints Committee (ICC) to investigate complaints of sexual harassment. ICC inquiries are legally binding and must be resolved confidentially.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
