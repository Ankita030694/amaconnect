import React from "react";
import Link from "next/link";

export default function LegalNoticeSidebar() {
  return (
    <div className="flex flex-col gap-4 font-sans">
      
      {/* Widget 1: Lead Gen Hook */}
      <div className="bg-white rounded-3xl p-4 sm:p-5 shadow-sm border border-gray-100 flex flex-col">
        <div className="w-8 h-8 rounded-full bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] font-bold text-sm mb-3">
          📝
        </div>
        <h3 className="text-lg font-bold text-[#2D2219] mb-2 leading-tight">
          Need a Professional Draft?
        </h3>
        <p className="text-gray-600 text-xs mb-4 leading-relaxed">
          Create legally sound legal notices, responses, and agreements instantly using our professional drafting templates.
        </p>
        <Link 
          href="/contact"
          className="w-full bg-[#D4AF37] text-[#2D2219] hover:bg-[#b8952f] text-center font-bold py-2.5 rounded-xl transition-all shadow-md hover:scale-[1.02] text-xs"
        >
          Request Notice Draft
        </Link>
      </div>

      {/* Widget 2: App Stores */}
      <div className="bg-white rounded-3xl p-4 sm:p-5 shadow-sm border border-gray-100 flex flex-col">
        <h3 className="text-lg font-bold text-[#2D2219] mb-1.5 leading-tight">
          Download AMAConnect App
        </h3>
        <p className="text-gray-600 text-xs mb-4 leading-relaxed">
          Access legal consultation, securely upload bills and evidence, and get real-time assistance on your mobile phone.
        </p>
        
        <div className="flex flex-col gap-3 w-full">
          {/* Google Play Store */}
          <a 
            href="https://play.google.com/store/apps/details?id=com.ama.ama_legal_solutions&pcampaignid=web_share"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Get it on Google Play"
            className="flex items-center justify-center gap-3 bg-[#01875f] hover:bg-[#00704e] text-white px-4 py-2.5 rounded-xl font-semibold text-sm transition-all hover:scale-[1.02] active:scale-[0.98] shadow-sm hover:shadow-md cursor-pointer"
          >
            <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24">
              <path
                d="M3.25 1.55a1.73 1.73 0 0 0-.47 1.22v18.46a1.73 1.73 0 0 0 .47 1.22l.06.06L13.88 12v-.15L3.31 1.5z"
                fill="#00F0FF"
              />
              <path
                d="M17.41 15.58L13.88 12v-.15L17.41 8.3l.08.05 4.17 2.37c1.19.67 1.19 1.78 0 2.46l-4.17 2.37-.08.03z"
                fill="#FFC700"
              />
              <path
                d="M17.49 15.53L13.88 11.92L3.25 22.45a1.44 1.44 0 0 0 1.83.06l12.41-7.07"
                fill="#FF003F"
              />
              <path
                d="M17.49 8.35L5.08 1.28A1.44 1.44 0 0 0 3.25 1.34L13.88 11.93l3.61-3.58"
                fill="#00E676"
              />
            </svg>
            <div className="text-left leading-none">
              <span className="text-[8px] text-white/80 block font-medium uppercase tracking-wider mb-0.5">GET IT ON</span>
              <span className="font-bold text-xs block">Google Play</span>
            </div>
          </a>

          {/* Apple App Store */}
          <a 
            href="https://apps.apple.com/in/app/ama-legal-solutions/id6755156186"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Download on the App Store"
            className="flex items-center justify-center gap-3 bg-black hover:bg-gray-900 text-white px-4 py-2.5 rounded-xl font-semibold text-sm transition-all hover:scale-[1.02] active:scale-[0.98] shadow-sm hover:shadow-md cursor-pointer"
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0 fill-current">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 4.17c.66-.81 1.11-1.93.99-3.06-.96.04-2.13.64-2.82 1.45-.6.69-1.12 1.83-.98 2.94 1.07.08 2.15-.52 2.81-1.33z" />
            </svg>
            <div className="text-left leading-none">
              <span className="text-[8px] text-white/80 block font-medium uppercase tracking-wider mb-0.5">DOWNLOAD ON THE</span>
              <span className="font-bold text-xs block">App Store</span>
            </div>
          </a>
        </div>
      </div>

      {/* Widget 3: Legal Statistics */}
      <div className="bg-[#1A1410] rounded-3xl p-4 sm:p-5 text-white shadow-lg flex flex-col">
        <h3 className="text-sm font-bold mb-3 border-b border-white/10 pb-2 tracking-tight">
          Dispute Resolution Statistics
        </h3>
        <div className="space-y-3">
          <div>
            <p className="text-[9px] text-gray-400 mb-0.5 uppercase tracking-wider">Settled Before Trial</p>
            <p className="text-base font-extrabold text-[#D4AF37]">Over 80%</p>
          </div>
          <div>
            <p className="text-[9px] text-gray-400 mb-0.5 uppercase tracking-wider">Pre-Action Notices Sent</p>
            <p className="text-base font-extrabold text-white">45,000+ Yearly</p>
          </div>
          <div>
            <p className="text-[9px] text-gray-400 mb-0.5 uppercase tracking-wider">Success Rate of Reply Notices</p>
            <p className="text-base font-extrabold text-white">72% Case Settlement</p>
          </div>
        </div>
      </div>
      
    </div>
  );
}
