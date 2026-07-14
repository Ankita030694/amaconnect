import React from "react";
import Link from "next/link";

export default function StepByStepProcess({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 3
          </span>
          <h2 className="text-xl sm:text-2xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Step-by-Step Debt Settlement Process
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed text-justify mb-4">
            Settling debt with digital platforms, especially when dealing with harassment, requires a structured and legally sound approach. Rather than succumbing to fear or hiding from lenders, borrowers should take proactive, formal measures to assert their rights. By moving the conversation from informal channels like WhatsApp to official, documented communications, you change the terms of engagement. This step-by-step settlement process is designed to protect your interests, establish a clear record of the dispute, and leverage official regulatory bodies to halt harassment while aiming for a mutually acceptable settlement. Each action you take must be backed by documented evidence, creating a shield that predatory recovery agents cannot easily penetrate.
          </p>
        </div>

        <div>
          <h3 className="text-base font-bold text-[#2D2219] mb-3">Serving a Formal Cease and Desist Notice</h3>
          <p className="text-sm text-gray-600 leading-relaxed text-justify">
            The first legal milestone in countering harassment is serving a formal cease and desist notice to the lending agency and its associated NBFC. A cease and desist notice is a legal document that formally commands the recipient to stop illegal actions, in this case, harassment, defamation, and breach of privacy. The notice should clearly detail the dates and times of the threatening calls, include screenshots of defamatory WhatsApp messages or groups, and cite specific violations of the Reserve Bank of India Fair Practice Code and the Information Technology Act. It must warn the lender that continued harassment will lead to criminal proceedings, including filing reports for extortion, criminal intimidation, and defamation under the Bharatiya Nyaya Sanhita. Borrowers can seek support from{" "}
            <Link href="/pro-bono-free-legal-aid" className="text-[#D4AF37] font-bold hover:underline">
              pro-bono free legal aid services
            </Link>{" "}
            to draft this notice professionally. Sending this document via registered email and post establishes a solid legal record, proving that you attempted to resolve the issue formally. Often, receiving a formal legal notice forces registered lenders to reign in their recovery agents and initiate a peaceful settlement discussion, as they wish to avoid costly litigation and regulatory investigations.
          </p>
        </div>

        <div>
          <h3 className="text-base font-bold text-[#2D2219] mb-3">Filing a Complaint with the RBI Ombudsman</h3>
          <p className="text-sm text-gray-600 leading-relaxed text-justify">
            If the lender is registered and fails to address the harassment or resolve the issue within 30 days of your notice, you should escalate the matter to the RBI Ombudsman. The RBI Complaint Management System is an online platform that allows borrowers to file grievances against regulated entities for deficiencies in service, including recovery harassment. When filing your complaint, you must provide the details of your loan, copies of the cease and desist notice, and concrete proof of the harassment, such as call logs and chat transcripts. The Ombudsman has the authority to investigate the lender, order compensation for harassment, and facilitate a fair settlement. For unregistered apps, since they do not fall under the direct jurisdiction of the RBI Ombudsman, the appropriate path is filing a complaint with the National Cyber Crime Portal or the local police station. In both cases, maintaining a meticulous record of all communications is critical, as these official complaints serve as powerful leverage when negotiating a settlement or defending against legal threats.
          </p>
        </div>

        {/* SECTION_TYPES: Step Checklist */}
        <div className="bg-[#FAF9F5] border border-gray-100 rounded-3xl p-6 sm:p-8">
          <h3 className="text-base font-bold text-[#2D2219] mb-6">Action Checklist for Settling Loan App Debts</h3>
          <div className="space-y-6">
            {[
              {
                step: "01",
                title: "Document Everything",
                desc: "Take screenshots of all abusive text messages, save recorded phone calls, compile lists of incoming numbers, and document any threat to contact family members. These serve as raw evidence."
              },
              {
                step: "02",
                title: "Verify the Lender Credential",
                desc: "Check the app website, terms of service, and loan agreement to identify if they have a partnership with a registered Non-Banking Financial Company (NBFC) or bank."
              },
              {
                step: "03",
                title: "Send Cease and Desist Notice",
                desc: "Draft and send a formal cease and desist notice via email to the customer support address and the grievance officer of the lender, warning them of criminal and civil actions if harassment continues."
              },
              {
                step: "04",
                title: "Report to Cyber Cell and RBI",
                desc: "If harassment persists, file an immediate complaint online at cybercrime.gov.in and, if the lender is registered, submit a grievance to the RBI Complaint Management System (sachet.rbi.org.in)."
              },
              {
                step: "05",
                title: "Propose a Written Settlement",
                desc: "Request a formal One-Time Settlement (OTS) in writing, offering to pay the principal amount in exchange for a complete waiver of illegal interest and a No Objection Certificate (NOC)."
              }
            ].map((item, idx) => (
              <div key={idx} className="flex gap-4 items-start border-b border-gray-100/50 pb-4 last:border-0 last:pb-0">
                <div className="w-8 h-8 rounded-xl bg-gray-900 text-white flex items-center justify-center font-bold text-xs flex-shrink-0">
                  {item.step}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm mb-1">{item.title}</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
