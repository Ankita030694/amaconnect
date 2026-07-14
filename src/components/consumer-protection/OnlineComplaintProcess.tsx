import React from "react";

export default function OnlineComplaintProcess({ id }: { id?: string }) {
  const steps = [
    {
      step: "Step 1",
      title: "Register on e-Daakhil",
      desc: "Visit the official portal (edaakhil.nic.in) and register as a Consumer. You will need a valid email address, mobile number, and Aadhaar card or other government identification to verify your account via OTP.",
    },
    {
      step: "Step 2",
      title: "Select Jurisdiction",
      desc: "Determine whether your case falls under the District, State, or National Commission. Choose the correct Commission based on where you reside or where the opposite party's office is located, and the total value of your claim.",
    },
    {
      step: "Step 3",
      title: "Enter Party Details",
      desc: "Fill in the exact name, email, phone number, and physical address of the Complainant (you) and the Opposite Party (the manufacturer, retailer, or service provider). Accurate addresses are critical for serving court notices.",
    },
    {
      step: "Step 4",
      title: "Upload Draft Petition & Evidence",
      desc: "Upload the complaint petition, index, list of dates, and supporting evidence. All documents must be converted into PDF format, and each file should be clearly labeled and within the portal's size limits.",
    },
    {
      step: "Step 5",
      title: "Pay Court Fees Online",
      desc: "Pay the required court fee through the integrated online payment gateway on the e-Daakhil portal. Save the transaction receipt, as you will need to upload it to complete the filing process.",
    },
    {
      step: "Step 6",
      title: "Submit and Track",
      desc: "Submit your complaint. The portal will generate a unique filing number. The commission's registry will review the documents, and if found in order, the case will be listed for admission hearing.",
    },
  ];

  const checklistItems = [
    "Drafted Petition: Written statement detailing facts, defect/deficiency, and specific relief claimed (refund, replacement, or compensation).",
    "Affidavit: Signed and notarized affidavit confirming that the contents of the petition are true to your knowledge.",
    "Chronological List of Dates: A simple timeline detailing when the product was bought, when the defect appeared, and when you contacted the seller.",
    "Supporting Evidence: Copies of bills, cash memos, tax invoices, warranty cards, delivery receipts, and product photographs.",
    "Communication Logs: Printouts of emails, WhatsApp chats, or letters sent to the seller requesting resolution.",
    "Legal Notice (Recommended): A copy of the written legal notice sent to the opposite party prior to filing, along with the postal tracking receipt.",
    "Fee Receipt: PDF copy of the online court fee payment transaction receipt.",
    "Address Proof: Proof of your residence (Aadhaar, Voter ID, or passport) to establish territorial jurisdiction.",
  ];

  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 5
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Step-by-Step Online Complaint Process
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
            Filing a consumer complaint has been simplified with the introduction of the e-Daakhil portal. This online platform allows consumers to register complaints, pay court fees, and track the status of their cases from home, bypassing the need for physical visits to the court registry.
          </p>
        </div>

        {/* Six Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {steps.map((step, idx) => (
            <div 
              key={idx} 
              className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:border-[#D4AF37]/10 transition-all flex gap-4"
            >
              <span className="text-sm font-extrabold text-[#D4AF37] shrink-0 bg-[#FDFBF7] w-12 h-12 rounded-full border border-[#D4AF37]/20 flex items-center justify-center">
                {idx + 1}
              </span>
              <div>
                <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">{step.step}</span>
                <h3 className="text-sm sm:text-base font-bold text-[#2D2219] mt-0.5 mb-2">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* e-Daakhil Checklist */}
        <div className="bg-[#FAF8F5] border border-gray-200/60 rounded-3xl p-6 sm:p-8">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-2xl">📋</span>
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-[#2D2219]">
                Step Checklist for Filing on e-Daakhil
              </h3>
              <p className="text-xs text-gray-500 mt-1">
                Ensure you have scanned and prepared the following files before launching your application online.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {checklistItems.map((item, idx) => {
              const [boldPart, rest] = item.split(": ");
              return (
                <div 
                  key={idx} 
                  className="flex gap-3 items-start bg-white p-4 rounded-xl border border-gray-100 shadow-sm"
                >
                  <input 
                    type="checkbox" 
                    id={`chk-${idx}`} 
                    className="mt-1 accent-[#D4AF37] h-4 w-4 shrink-0 rounded border-gray-300" 
                    defaultChecked
                    disabled
                  />
                  <label htmlFor={`chk-${idx}`} className="text-xs text-gray-600 leading-relaxed cursor-pointer select-none">
                    <strong className="text-[#2D2219]">{boldPart}</strong>: {rest}
                  </label>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
