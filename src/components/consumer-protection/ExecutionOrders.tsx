import React from "react";

export default function ExecutionOrders({ id }: { id?: string }) {
  const enforcementMechanisms = [
    {
      title: "Civil Enforcement (Section 71)",
      desc: "Every order made by a Consumer Commission can be enforced in the same manner as a decree of a civil court. Under Order XXI of the Civil Procedure Code, the commission can issue attachment warrants against the opposite party's bank accounts, movable property, or immovable assets to recover the ordered compensation.",
    },
    {
      title: "Penal Execution (Section 72)",
      desc: "If a party fails to comply with an order, the complainant can initiate criminal execution proceedings. Under Section 72, the non-complying party can be punished with imprisonment from one month to three years, or a fine ranging from twenty-five thousand to one lakh rupees, or both.",
    },
    {
      title: "Powers of a First Class Judicial Magistrate",
      desc: "To speed up execution, the Consumer Commissions are vested with the powers of a First Class Judicial Magistrate under the Code of Criminal Procedure for the trial of offenses under Section 72. This enables them to issue arrest warrants directly without involving civil courts.",
    },
  ];

  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 8
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Execution of Consumer Court Orders
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-6">
            Obtaining a favorable judgment is only the first step. If the seller, manufacturer, or service provider refuses or delays compliance with the commission's directions, the consumer has robust legal mechanisms to execute the order. The Consumer Protection Act, 2019, provides both civil attachment and criminal enforcement routes to compel compliance.
          </p>
        </div>

        {/* Enforcement Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {enforcementMechanisms.map((mechanism, idx) => (
            <div 
              key={idx} 
              className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:border-[#D4AF37]/10 transition-all flex flex-col"
            >
              <div className="w-10 h-10 rounded-full bg-[#D4AF37]/10 text-[#D4AF37] flex items-center justify-center font-bold text-sm mb-4 shrink-0">
                {idx === 0 ? "⚖️" : idx === 1 ? "🔒" : "📜"}
              </div>
              <h3 className="text-base font-bold text-[#2D2219] mb-3">
                {mechanism.title}
              </h3>
              <p className="text-xs sm:text-sm text-gray-500 leading-relaxed text-justify flex-grow">
                {mechanism.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Action Plan for Non-Compliance */}
        <div className="bg-[#FAF8F5] border border-gray-200/60 rounded-3xl p-6 sm:p-8">
          <h3 className="text-base sm:text-lg font-bold text-[#2D2219] mb-4">
            Action Plan: What to Do if a Seller Ignores a Court Order
          </h3>
          <ol className="list-decimal pl-5 space-y-3 text-xs sm:text-sm text-gray-600">
            <li>
              <strong className="text-[#2D2219]">Wait for the Appeal Period:</strong> The opposite party has 30 to 45 days to file an appeal in the higher commission. If no appeal is filed within this window, the order becomes final and binding.
            </li>
            <li>
              <strong className="text-[#2D2219]">Send a Demand Letter:</strong> Send a formal letter via registered post enclosing the copy of the order and requesting compliance within ten days to show your intent to execute.
            </li>
            <li>
              <strong className="text-[#2D2219]">File an Execution Application:</strong> File an Execution Application under Section 71 and Section 72 in the same commission that passed the original order.
            </li>
            <li>
              <strong className="text-[#2D2219]">Request Warrants:</strong> Request the commission to issue show-cause notices, property attachment warrants, or arrest warrants against the directors/proprietors of the defaulting company.
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}
