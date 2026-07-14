import React from "react";

export default function RTIAct({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 6
          </span>
          <h2 className="text-xl sm:text-2xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Right to Information (RTI) Act
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed text-justify mb-4">
            The **Right to Information (RTI) Act, 2005** is a powerful tool that enables Indian citizens to request information from public authorities, fostering transparency, accountability, and citizen empowerment in governance.
          </p>
        </div>

        {/* Process Flow Cards */}
        <div className="bg-[#FAF9F5] border border-gray-100 rounded-3xl p-6 sm:p-8 flex flex-col gap-6">
          <h3 className="text-base font-bold text-[#2D2219]">How to File an RTI Application</h3>
          
          <div className="space-y-4">
            {[
              {
                step: "A",
                title: "Identify the Department & Public Information Officer (PIO)",
                desc: "Determine which government department or ministry holds the information you seek. Every public authority has a designated Public Information Officer (PIO) who receives RTI requests."
              },
              {
                step: "B",
                title: "Draft the Request",
                desc: "Write your questions clearly in English, Hindi, or the official regional language. Keep your questions precise and direct. Avoid asking for opinions or explanations—ask for records, logs, or documents instead."
              },
              {
                step: "C",
                title: "Pay the Fee & Submit",
                desc: "Submit the request along with a nominal fee of ₹10 (waived for BPL card holders). You can submit it physically via post or digitally using the central portal 'rtionline.gov.in' or state portals."
              }
            ].map((step, idx) => (
              <div key={idx} className="flex gap-4 items-start">
                <div className="w-8 h-8 rounded-full border border-[#D4AF37]/50 text-[#D4AF37] flex items-center justify-center font-bold text-xs flex-shrink-0 bg-white">
                  {step.step}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-xs mb-0.5">{step.title}</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Response Timelines */}
        <div className="border border-gray-100 rounded-2xl p-5 shadow-sm bg-white">
          <h3 className="text-sm font-bold text-[#2D2219] mb-3">Crucial Timelines for RTI Response</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-gray-50 rounded-xl p-4">
              <span className="block text-2xl font-black text-[#D4AF37] mb-1">30 Days</span>
              <p className="text-[11px] text-gray-500 leading-normal">
                Standard window within which the PIO must reply or supply the requested info.
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-4">
              <span className="block text-2xl font-black text-red-500 mb-1">48 Hours</span>
              <p className="text-[11px] text-gray-500 leading-normal">
                Strict response timeline if the requested information concerns the life or liberty of a person.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
