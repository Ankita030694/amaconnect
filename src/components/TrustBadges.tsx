"use client";

import { ShieldCheck, Scale, Lock } from "lucide-react";

export default function TrustBadges() {
  return (
    <section className="w-full bg-[#FAFAFA] py-8 sm:py-12 px-4 sm:px-6 lg:px-8 border-t border-gray-150">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-center items-center gap-8 sm:gap-16 lg:gap-24">
        
        <div className="flex flex-col items-center text-center max-w-[220px] group cursor-default">
          <div className="w-14 h-14 rounded-full bg-[#FDF9F0] border border-[#D4AF37]/20 flex items-center justify-center mb-4 group-hover:bg-[#D4AF37]/10 group-hover:scale-110 transition-all duration-300 shadow-sm">
            <Lock className="w-6 h-6 text-[#D4AF37]" strokeWidth={2} />
          </div>
          <h4 className="font-extrabold text-[#2D2219] text-[15px] mb-1.5">100% Confidential</h4>
          <p className="text-[13px] text-gray-500 font-medium leading-relaxed">Your data, documents, and privacy are strictly protected.</p>
        </div>
        
        <div className="hidden sm:block w-px h-16 bg-gray-200"></div>

        <div className="flex flex-col items-center text-center max-w-[220px] group cursor-default">
          <div className="w-14 h-14 rounded-full bg-[#FDF9F0] border border-[#D4AF37]/20 flex items-center justify-center mb-4 group-hover:bg-[#D4AF37]/10 group-hover:scale-110 transition-all duration-300 shadow-sm">
            <Scale className="w-6 h-6 text-[#D4AF37]" strokeWidth={2} />
          </div>
          <h4 className="font-extrabold text-[#2D2219] text-[15px] mb-1.5">Verified Advocates</h4>
          <p className="text-[13px] text-gray-500 font-medium leading-relaxed">Connect with highly vetted and experienced legal professionals.</p>
        </div>

        <div className="hidden sm:block w-px h-16 bg-gray-200"></div>

        <div className="flex flex-col items-center text-center max-w-[220px] group cursor-default">
          <div className="w-14 h-14 rounded-full bg-[#FDF9F0] border border-[#D4AF37]/20 flex items-center justify-center mb-4 group-hover:bg-[#D4AF37]/10 group-hover:scale-110 transition-all duration-300 shadow-sm">
            <ShieldCheck className="w-6 h-6 text-[#D4AF37]" strokeWidth={2} />
          </div>
          <h4 className="font-extrabold text-[#2D2219] text-[15px] mb-1.5">Bank-Grade Security</h4>
          <p className="text-[13px] text-gray-500 font-medium leading-relaxed">End-to-end encryption for all your communications and files.</p>
        </div>

      </div>
    </section>
  );
}
