import React from "react";
import Link from "next/link";

export default function LegalGuideSidebar() {
  return (
    <div className="flex flex-col gap-6 sticky top-32 font-sans">
      
      {/* Widget 1: Lead Gen Hook (matches RightSidebarWidgets style) */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100 flex flex-col">
        <div className="w-8 h-8 rounded-full bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] font-bold text-sm mb-4">
          ?
        </div>
        <h3 className="text-xl font-bold text-[#2D2219] mb-3 leading-tight">
          Have a specific question about your rights?
        </h3>
        <p className="text-gray-600 text-xs mb-6 leading-relaxed">
          Ask a pro bono lawyer on AMAConnect and get free, verified answers to your legal queries.
        </p>
        <Link 
          href="/ask-me-anything"
          className="w-full bg-[#1A1A1A] text-white text-center font-bold py-3.5 rounded-xl hover:bg-black transition-colors"
        >
          Ask on AMAConnect
        </Link>
      </div>

      {/* Widget 2: Essential Helpline Numbers */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100 flex flex-col">
        <h3 className="text-lg font-bold text-[#2D2219] mb-4 leading-tight">
          Government Helplines
        </h3>
        
        <div className="space-y-4">
          {[
            { name: "National Consumer Helpline", number: "1915" },
            { name: "Women's Helpline (Domestic Abuse)", number: "181 / 1091" },
            { name: "Child Helpline", number: "1098" },
            { name: "National Emergency Helpline", number: "112" }
          ].map((helpline, idx) => (
            <div key={idx} className="flex justify-between items-center py-2 border-b border-gray-50 last:border-0 last:pb-0">
              <span className="text-gray-500 font-medium text-xs max-w-[70%]">{helpline.name}</span>
              <a href={`tel:${helpline.number.split(" / ")[0]}`} className="text-[#D4AF37] font-black text-xs hover:underline">
                {helpline.number}
              </a>
            </div>
          ))}
        </div>
      </div>
      
    </div>
  );
}
