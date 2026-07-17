import React from "react";

export default function DraftingRTI({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 2
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Drafting the RTI Application
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
            A well-structured RTI application is the key to obtaining quick and accurate replies. Learning how to formulate questions as objective requests for records prevents administrative delays and avoids common ground for rejection by public offices.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Formatting Your Query Clearly and Objectively
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            Drafting a successful RTI application requires clarity, specificity, and objectivity. One of the most common reasons why public authorities reject or delay RTI applications is that the queries are framed as vague, open-ended questions, hypothetical scenarios, or requests for opinions and explanations. The Right to Information Act, 2005, only obligates public authorities to provide information that is already available in their physical or digital records. It does not require them to create new information, solve problems, or explain why a particular decision was made. Therefore, your queries should always be structured as requests for specific documents, records, reports, registers, emails, circulars, or logbooks. When writing your application, it is best to use a numbered list and keep each query simple and focused. You should provide as much context as possible, including relevant dates, file numbers, project locations, and department names. For instance, instead of asking why a road in your area has not been repaired, you should request the copies of the budget allocated, the tender documents, the contract agreements, and the completion certificates for that specific road project within a defined timeframe. Avoiding emotive language, complaints, or allegations is also crucial. By keeping the application objective and focused strictly on the retrieval of records, you minimize the risk of the public information officer claiming that the information requested is too broad or non-existent.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
            Specifying the Public Information Officer (PIO)
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            Every public authority covered by the Right to Information Act is legally required to designate a Central Public Information Officer (CPIO) or State Public Information Officer (SPIO) to process requests. When drafting your application, you must address it to the Public Information Officer of the specific department or organization holding the records. Determining which public authority is the actual custodian of the information you seek is a critical step, as addressing the application to the wrong department can lead to delays. If you are unsure of the exact officer, you should address the application to the Public Information Officer of the main ministry or administrative department. Under Section 6(3) of the Act, if a PIO receives an application requesting information that is held by another public authority, they are legally obligated to transfer the application, or the relevant parts of it, to that other authority within five days of receipt and immediately notify the applicant about the transfer. While this statutory provision acts as a safety net, relying on it can add extra time to your filing timeline. To ensure a swift response, you should search the official websites of the relevant public authority, which are mandated under Section 4 of the Act to publish the names, designations, and contact details of their designated public information officers and appellate authorities. Taking the time to locate and address the correct officer directly ensures that your application lands on the right desk immediately, accelerating the response process.
          </p>
        </div>
      </div>
    </section>
  );
}
