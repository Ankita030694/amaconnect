import React from "react";

export default function FilingComplaint({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mb-12">
      <div className="flex flex-col gap-6">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 3
          </span>
          <h2 className="text-xl sm:text-2xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Filing a POSH Complaint: Step-by-Step
          </h2>
          
          <h3 className="text-base sm:text-lg font-bold text-[#2D2219] mt-6 mb-3">
            Drafting and Submitting the Complaint Sheet
          </h3>
          <p className="text-sm text-gray-600 leading-relaxed text-justify mb-4">
            Initiating a formal dispute under the POSH Act requires a meticulous drafting and submission process to ensure that the Internal Complaints Committee has all the necessary information to proceed. An aggrieved woman is required to submit a written complaint detailing the harassment, along with supporting documents, the names and contact details of witnesses, and any direct or circumstantial evidence available. The law mandates that the complainant must submit six physical copies of the complaint, along with the evidence, to allow the committee to distribute copies to the respondent and keep official records for the inquiry proceedings. If the aggrieved woman is unable to make a written complaint due to physical or mental incapacity, or due to severe emotional distress, the Presiding Officer or any member of the ICC is legally obligated to provide all reasonable assistance to help her draft the complaint in writing. When drafting the complaint, the complainant should outline the events chronologically, specifying the exact dates, times, locations, and nature of the unwelcomed behavior, as well as any immediate protests made. Supporting evidence can include digital communications, such as email logs, text messages, audio recordings, or WhatsApp chats, which are admissible under the Indian Evidence Act. Organizing these records clearly helps the committee establish a prima facie case, ensuring that the investigation begins without unnecessary administrative delays. Furthermore, the complaint should also detail the impact of the harassment on the woman's physical, emotional, and professional well-being, providing the committee with a holistic understanding of the hostile conditions she had to endure. In cases where the aggrieved woman is deceased, her legal heirs or any person who has knowledge of the incident can file the complaint with the written consent of her heirs, ensuring that justice is not denied due to tragic outcomes.
          </p>
        </div>

        {/* SECTION TYPE: Step Checklist */}
        <div className="bg-[#FAF9F5] border border-[#D4AF37]/20 rounded-3xl p-6 sm:p-8">
          <h3 className="text-base font-bold text-[#2D2219] mb-3">
            Step-by-Step POSH Filing Checklist
          </h3>
          <p className="text-xs text-gray-500 mb-6 leading-relaxed">
            Follow this chronological step checklist to draft, compile, and submit a legally sound POSH complaint to your organization's Internal Complaints Committee:
          </p>
          <div className="space-y-4">
            {[
              {
                step: "Step 1: Document the Incidents Chronologically",
                desc: "Write down the exact dates, times, locations, and specific details of each incident immediately. Note what was said, what actions were taken, and your immediate reaction or protest."
              },
              {
                step: "Step 2: Collect and Secure Corroborative Evidence",
                desc: "Backup all digital evidence including emails, chat transcripts, WhatsApp messages, call logs, and photographs. Keep copy files on a personal device to prevent loss of access."
              },
              {
                step: "Step 3: Identify and List Relevant Witnesses",
                desc: "Identify colleagues, clients, or bystanders who witnessed the incident or to whom you spoke immediately after the event. Note their names and contact details."
              },
              {
                step: "Step 4: Draft the Written Complaint Sheet",
                desc: "Draft a formal statement of facts. State the facts clearly, reference the collected evidence, and explicitly ask the ICC to initiate an inquiry under the POSH Act."
              },
              {
                step: "Step 5: File Six Copies with the ICC Presiding Officer",
                desc: "Print and sign six copies of the written complaint along with the evidence pack. Submit them to the Presiding Officer and obtain a signed and dated acknowledgement receipt."
              },
              {
                step: "Step 6: Participate in the Preliminary Review",
                desc: "Attend the initial briefing if requested by the ICC. Review your options for conciliation or request the committee to proceed directly with a formal inquiry."
              }
            ].map((item, idx) => (
              <div key={idx} className="flex gap-4 items-start bg-white p-4 rounded-2xl border border-gray-100 shadow-sm">
                <span className="w-6 h-6 rounded-full bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] font-bold text-xs flex-shrink-0 mt-0.5">
                  {idx + 1}
                </span>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-[#2D2219] mb-1">{item.step}</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-base sm:text-lg font-bold text-[#2D2219] mt-6 mb-3">
            Statutory Limitation and Filing Window
          </h3>
          <p className="text-sm text-gray-600 leading-relaxed text-justify">
            Matrimonial and labor laws in India place significant emphasis on the timely filing of complaints to ensure the reliability of evidence and the freshness of witness testimonies. Under Section 9 of the POSH Act, a complaint must be filed within a strict timeline of three months from the date of the incident. In situations where the harassment is continuous and involves a series of incidents, the complaint must be filed within three months from the date of the final incident in that series. The legislature, recognizing the intense psychological trauma, fear of professional backlash, and social stigma that often prevent victims from reporting harassment immediately, has provided a built-in extension window. The ICC can extend this three-month limitation period by another three months if it is satisfied that the circumstances were exceptional and prevented the woman from presenting the complaint within the initial statutory timeframe. However, the committee is required to record the reasons for granting this extension in writing, making it a matter of official record. Complainants should note that while the law allows for a maximum of six months under exceptional circumstances, filing as close to the incident as possible is highly recommended to protect the integrity of the evidence. Delayed filings often face intense scrutiny from the respondent's counsel, who may argue that the delay indicates fabrication or afterthought, making it essential to document the exact reasons for any delay in the initial complaint sheet.
          </p>
        </div>
      </div>
    </section>
  );
}
