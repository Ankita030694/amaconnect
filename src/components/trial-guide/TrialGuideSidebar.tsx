import React from "react";
import Link from "next/link";

export default function TrialGuideSidebar() {
  return (
    <div className="flex flex-col gap-6 sticky top-32 font-sans">
      
      {/* Widget 1: Lead Gen Hook (matches RightSidebarWidgets style) */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100 flex flex-col">
        <div className="w-8 h-8 rounded-full bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] font-bold text-sm mb-4">
          👥
        </div>
        <h3 className="text-xl font-bold text-[#2D2219] mb-3 leading-tight">
          Join the Junior Advocate Community
        </h3>
        <p className="text-gray-600 text-xs mb-6 leading-relaxed">
          Ask questions directly to senior lawyers and network with fellow junior litigators and law students on AMAConnect.
        </p>
        <Link 
          href="/communities"
          className="w-full bg-[#1A1A1A] text-white text-center font-bold py-3.5 rounded-xl hover:bg-black transition-colors"
        >
          Join Community
        </Link>
      </div>

      {/* Widget 2: Mentorship Statistics */}
      <div className="bg-[#1A1410] rounded-3xl p-6 sm:p-8 text-white shadow-lg flex flex-col">
        <h3 className="text-lg font-bold mb-4 border-b border-white/10 pb-3 tracking-tight">
          Mentorship Impact
        </h3>
        <div className="space-y-4">
          <div>
            <p className="text-[10px] text-gray-400 mb-0.5 uppercase tracking-wider">Active Senior Mentors</p>
            <p className="text-lg font-extrabold text-[#D4AF37]">420+</p>
          </div>
          <div>
            <p className="text-[10px] text-gray-400 mb-0.5 uppercase tracking-wider">Mentorship Hours</p>
            <p className="text-lg font-extrabold text-white">8,900+</p>
          </div>
          <div>
            <p className="text-[10px] text-gray-400 mb-0.5 uppercase tracking-wider">Discussion Forums</p>
            <p className="text-lg font-extrabold text-white">24/7 Peer Q&amp;A</p>
          </div>
        </div>
      </div>
      
    </div>
  );
}
