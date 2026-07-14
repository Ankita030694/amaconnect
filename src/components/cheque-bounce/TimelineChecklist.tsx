"use client";

import React, { useState } from "react";

type Step = {
  id: number;
  label: string;
  timeline: string;
  description: string;
  importantHint: string;
};

export default function TimelineChecklist({ id }: { id?: string }) {
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);

  const steps: Step[] = [
    {
      id: 1,
      label: "Present Cheque to Bank",
      timeline: "Within 3 Months",
      description: "The cheque must be presented to the bank within its validity period, which is exactly three months from the date written on the cheque.",
      importantHint: "Do not present the cheque after three months, as it will be considered stale and invalid."
    },
    {
      id: 2,
      label: "Receive Cheque Return Memo",
      timeline: "Immediate",
      description: "When the cheque bounces, the bank issues a Cheque Return Memo stating the reason for dishonor.",
      importantHint: "Save this document and note the date you received it. This starts the 30 day notice period."
    },
    {
      id: 3,
      label: "Send Section 138 Demand Notice",
      timeline: "Within 30 Days",
      description: "You must send a formal written notice to the drawer demanding the cheque amount within thirty days of receiving the return memo.",
      importantHint: "Send this via Registered Post AD or Speed Post, and keep the receipt as proof."
    },
    {
      id: 4,
      label: "Wait for Grace Period to End",
      timeline: "Exactly 15 Days",
      description: "The drawer is given exactly fifteen days from the date they receive the notice to make the payment.",
      importantHint: "You cannot file a court case during these fifteen days. Doing so will make the complaint premature."
    },
    {
      id: 5,
      label: "File Criminal Complaint in Court",
      timeline: "Within 30 Days",
      description: "If the drawer fails to pay within fifteen days, you must file a formal complaint in the magistrate court within thirty days.",
      importantHint: "The thirty day period begins on the sixteenth day after the notice was delivered."
    }
  ];

  const toggleStep = (stepId: number) => {
    if (completedSteps.includes(stepId)) {
      setCompletedSteps(completedSteps.filter((x) => x !== stepId));
    } else {
      setCompletedSteps([...completedSteps, stepId]);
    }
  };

  const progressPercent = Math.round((completedSteps.length / steps.length) * 100);

  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 4
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Timelines and Limitation Period Checklist
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
            In Section 138 cases, compliance with statutory timelines is non-negotiable. The Supreme Court of India has repeatedly ruled that courts cannot entertain complaints where timelines are breached, unless there is exceptional justification. Use this timeline checklist to track your case step by step.
          </p>
        </div>

        {/* Interactive Checklist UI */}
        <div className="bg-[#FAF9F5] rounded-3xl p-6 sm:p-8 border border-gray-100">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
            <div>
              <h3 className="text-lg font-bold text-[#2D2219]">Interactive Timeline Tracker</h3>
              <p className="text-xs text-gray-500">Check each step to monitor your legal compliance progress.</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-gray-600">Progress:</span>
              <span className="bg-[#D4AF37]/10 text-[#D4AF37] px-3 py-1 rounded-full text-xs font-extrabold">
                {progressPercent}% Complete
              </span>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="w-full h-2 bg-gray-200 rounded-full mb-8 overflow-hidden">
            <div 
              className="h-full bg-[#D4AF37] transition-all duration-300"
              style={{ width: `${progressPercent}%` }}
            />
          </div>

          <div className="space-y-6">
            {steps.map((step) => {
              const isDone = completedSteps.includes(step.id);
              return (
                <div 
                  key={step.id} 
                  className={`flex gap-4 p-5 rounded-2xl border transition-all duration-200 ${
                    isDone ? "bg-white border-[#D4AF37]/30 shadow-sm" : "bg-white/40 border-gray-150"
                  }`}
                >
                  <div className="pt-1">
                    <button
                      onClick={() => toggleStep(step.id)}
                      className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                        isDone 
                          ? "bg-[#D4AF37] border-[#D4AF37] text-white" 
                          : "border-gray-300 hover:border-[#D4AF37]"
                      }`}
                      aria-label={`Mark step ${step.id} as complete`}
                    >
                      {isDone && (
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                      )}
                    </button>
                  </div>
                  <div className="flex-grow">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                      <h4 className={`text-sm sm:text-base font-bold ${isDone ? "text-gray-900 line-through decoration-gray-400" : "text-[#2D2219]"}`}>
                        Step {step.id}: {step.label}
                      </h4>
                      <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-wider bg-[#D4AF37]/10 px-2 py-0.5 rounded-full">
                        {step.timeline}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-3">
                      {step.description}
                    </p>
                    <div className="bg-amber-50/50 border border-amber-100 rounded-xl p-3 text-xs text-amber-900 flex items-start gap-2">
                      <span className="font-extrabold text-amber-700">Tip:</span>
                      <span>{step.importantHint}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
