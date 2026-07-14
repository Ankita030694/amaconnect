import React from "react";
import Link from "next/link";

export default function LegalNoticeSidebar() {
  return (
    <div className="flex flex-col gap-6 sticky top-32 font-sans">
      
      {/* Widget 1: Lead Gen Hook */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100 flex flex-col">
        <div className="w-8 h-8 rounded-full bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] font-bold text-sm mb-4">
          📝
        </div>
        <h3 className="text-xl font-bold text-[#2D2219] mb-3 leading-tight">
          Need a Professional Draft?
        </h3>
        <p className="text-gray-600 text-xs mb-6 leading-relaxed">
          Create legally sound legal notices, responses, and agreements instantly using our professional drafting templates.
        </p>
        <Link 
          href="/drafts"
          className="w-full bg-[#D4AF37] text-[#2D2219] hover:bg-[#b8952f] text-center font-bold py-3.5 rounded-xl transition-all shadow-md hover:scale-[1.02]"
        >
          Get Notice Draft Now
        </Link>
      </div>

      {/* Widget 2: Community Outreach */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100 flex flex-col">
        <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-sm mb-4">
          👥
        </div>
        <h3 className="text-lg font-bold text-[#2D2219] mb-2 leading-tight">
          Discuss with Legal Experts
        </h3>
        <p className="text-gray-600 text-xs mb-4 leading-relaxed">
          Join our active legal community to discuss drafting issues, share experiences, and get advice from verified advocates.
        </p>
        <Link 
          href="/communities"
          className="w-full bg-[#1A1A1A] text-white hover:bg-black text-center font-semibold py-3 rounded-xl transition-colors text-sm"
        >
          Join AMA Communities
        </Link>
      </div>

      {/* Widget 3: Legal Statistics */}
      <div className="bg-[#1A1410] rounded-3xl p-6 sm:p-8 text-white shadow-lg flex flex-col">
        <h3 className="text-base font-bold mb-4 border-b border-white/10 pb-3 tracking-tight">
          Dispute Resolution Statistics
        </h3>
        <div className="space-y-4">
          <div>
            <p className="text-[10px] text-gray-400 mb-0.5 uppercase tracking-wider">Settled Before Trial</p>
            <p className="text-lg font-extrabold text-[#D4AF37]">Over 80%</p>
          </div>
          <div>
            <p className="text-[10px] text-gray-400 mb-0.5 uppercase tracking-wider">Pre-Action Notices Sent</p>
            <p className="text-lg font-extrabold text-white">45,000+ Yearly</p>
          </div>
          <div>
            <p className="text-[10px] text-gray-400 mb-0.5 uppercase tracking-wider">Success Rate of Reply Notices</p>
            <p className="text-lg font-extrabold text-white">72% Case Settlement</p>
          </div>
        </div>
      </div>
      
    </div>
  );
}
