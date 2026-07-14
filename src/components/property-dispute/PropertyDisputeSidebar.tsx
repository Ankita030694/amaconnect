import React from "react";
import Link from "next/link";

export default function PropertyDisputeSidebar() {
  return (
    <div className="flex flex-col gap-6 sticky top-32 font-sans">
      
      {/* Widget 1: Lead Gen Hook (points to /ask-me-anything) */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100 flex flex-col">
        <div className="w-8 h-8 rounded-full bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] font-bold text-sm mb-4">
          ⚖️
        </div>
        <h3 className="text-xl font-bold text-[#2D2219] mb-3 leading-tight">
          Facing a property or land dispute?
        </h3>
        <p className="text-gray-600 text-xs mb-6 leading-relaxed">
          Ask a verified property lawyer on AMAConnect and receive clear, actionable guidance for your legal queries today.
        </p>
        <Link 
          href="/ask-me-anything"
          className="w-full bg-[#1A1A1A] text-white text-center font-bold py-3.5 rounded-xl hover:bg-black transition-colors"
        >
          Consult on AMAConnect
        </Link>
      </div>

      {/* Widget 2: Essential Legal Resources */}
      <div className="bg-[#1A1410] rounded-3xl p-6 sm:p-8 text-white shadow-lg flex flex-col">
        <h3 className="text-lg font-bold mb-4 border-b border-white/10 pb-3 tracking-tight">
          Essential Resources
        </h3>
        <div className="space-y-4">
          <div>
            <p className="text-[10px] text-gray-400 mb-1 uppercase tracking-wider">Ready to File?</p>
            <Link 
              href="/drafts" 
              className="text-xs font-bold text-[#D4AF37] hover:underline"
            >
              Download Court Pleadings &amp; Drafts
            </Link>
          </div>
          <div>
            <p className="text-[10px] text-gray-400 mb-1 uppercase tracking-wider">Real Case Results</p>
            <Link 
              href="/success-stories" 
              className="text-xs font-bold text-white hover:text-[#D4AF37] hover:underline"
            >
              Explore Success Stories
            </Link>
          </div>
          <div>
            <p className="text-[10px] text-gray-400 mb-1 uppercase tracking-wider">Helpline Support</p>
            <p className="text-xs font-bold text-white">24/7 Digital Legal Forums</p>
          </div>
        </div>
      </div>
      
    </div>
  );
}
