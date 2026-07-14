import React from "react";

export default function LitigationTimeline({ id }: { id?: string }) {
  const steps = [
    {
      title: "Drafting and Filing Plaint",
      description: "Plaintiff prepares and files the plaint with documents and court fees.",
      duration: "Month 1 to 2"
    },
    {
      title: "Summons and Written Statement",
      description: "Court issues summons, and defendant must file a written statement within 30 to 90 days.",
      duration: "Month 3 to 5"
    },
    {
      title: "Replication and Framing Issues",
      description: "Plaintiff responds to the written statement, and the judge frames the core legal issues.",
      duration: "Month 6 to 8"
    },
    {
      title: "Plaintiff and Defendant Evidence",
      description: "Examination in chief and cross examination of witnesses from both sides.",
      duration: "Month 9 to 24"
    },
    {
      title: "Final Arguments and Judgment",
      description: "Both advocates present arguments, and the court delivers the final decree.",
      duration: "Month 25 to 36"
    }
  ];

  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 5
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Timeline of a Property Litigation Case
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
            Property disputes in Indian civil courts follow a structured timeline governed by the Code of Civil Procedure, 1908. While cases are notorious for delays, understanding the procedural steps helps litigators manage timelines and prepare strategic interventions at each stage.
          </p>
        </div>

        {/* Visual Timeline Grid */}
        <div className="border border-gray-100 rounded-3xl p-6 sm:p-8 bg-[#FAF9F5] shadow-sm">
          <h3 className="text-sm font-bold text-[#2D2219] mb-6 uppercase tracking-wider">
            Phase-by-Phase Process
          </h3>
          <div className="relative border-l-2 border-[#D4AF37]/30 pl-6 space-y-8 ml-2">
            {steps.map((step, idx) => (
              <div key={idx} className="relative">
                {/* Timeline Dot */}
                <div className="absolute -left-[31px] top-1.5 w-4.5 h-4.5 rounded-full bg-[#D4AF37] border-4 border-white shadow-sm flex items-center justify-center" />
                
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1">
                  <h4 className="text-sm font-bold text-[#2D2219]">{step.title}</h4>
                  <span className="text-[10px] font-bold text-[#D4AF37] bg-[#D4AF37]/10 px-2 py-0.5 rounded-md uppercase self-start sm:self-auto">
                    {step.duration}
                  </span>
                </div>
                <p className="text-xs text-gray-500 mt-1 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-10">
          {/* H3: Filing the Plaint and Written Statement */}
          <div className="flex flex-col gap-3">
            <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
              Filing the Plaint and Written Statement
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed text-justify">
              The litigation process officially starts when the plaintiff files a plaint in the civil court of lowest jurisdiction, accompanied by the necessary court fees and all supporting documents that establish ownership or possession. The plaint must clearly outline the facts, the cause of action, and the specific reliefs sought from the court. Once the court admits the plaint, it issues formal summons to the defendant. Under Order VIII Rule 1 of the Code of Civil Procedure, 1908, the defendant is required to file a detailed written statement containing their defense within thirty days of receiving the summons, which can be extended up to a maximum of ninety days under special circumstances. If the defendant fails to file within this period, the court can proceed to pass an ex-parte judgment. The written statement must contain specific denials of each allegation made in the plaint. Any allegation not denied specifically is deemed to be admitted by the defendant. The plaintiff may then file a replication, which is a reply to the defendant's written statement, to clarify facts.
            </p>
          </div>

          {/* H3: Trial Stage: Evidence and Final Argument */}
          <div className="flex flex-col gap-3">
            <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
              Trial Stage: Evidence and Final Argument
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed text-justify">
              After the pleadings are complete, the court frames the issues, which are the core points of dispute that the judge must resolve. Once issues are framed, the case enters the trial stage, beginning with the plaintiff's evidence. The plaintiff and their witnesses present their examination in chief via affidavits, after which they are cross examined by the defendant's advocate to test their credibility and find inconsistencies. Following the conclusion of the plaintiff's evidence, the defendant presents their witnesses, who undergo the same process of examination in chief and cross examination. This stage is highly critical and requires careful handling of documents, such as sale deeds, mutation records, and survey maps, which must be formally exhibited. Once all evidence is recorded, the advocates for both parties present their final oral arguments, referencing statutory provisions and past judgments to persuade the judge. The court then reserves the case for judgment, subsequently delivering the final decree that resolves the dispute.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
