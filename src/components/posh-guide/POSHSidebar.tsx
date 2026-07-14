import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function POSHSidebar() {
  return (
    <div className="flex flex-col gap-6 sticky top-32 font-sans">
      
      {/* Widget 1: Lead Gen Hook */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100 flex flex-col">
        <div className="w-8 h-8 rounded-full bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] font-bold text-sm mb-4">
          ?
        </div>
        <h3 className="text-xl font-bold text-[#2D2219] mb-3 leading-tight">
          Need a Corporate POSH Policy?
        </h3>
        <p className="text-gray-600 text-xs mb-6 leading-relaxed">
          Create legally compliant POSH policy drafts, ICC handbook guides, and formal grievance template files tailored to Indian corporate regulations on AMAConnect.
        </p>
        <Link 
          href="/drafts"
          className="w-full bg-[#1A1A1A] text-white text-center font-bold py-3.5 rounded-xl hover:bg-black transition-colors text-xs"
        >
          Browse Legal Drafts
        </Link>
      </div>

      {/* Widget 2: Author Card */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100 flex flex-col items-center text-center">
        <div className="relative w-20 h-20 rounded-full overflow-hidden mb-4 border-2 border-[#D4AF37]/50">
          <Image 
            src="/anujbhiya.png" 
            alt="Anuj Anand Malik" 
            fill
            sizes="80px"
            className="object-cover"
          />
        </div>
        <h4 className="text-base font-bold text-[#2D2219] mb-1">
          Anuj Anand Malik
        </h4>
        <span className="text-[10px] font-bold text-[#D4AF37] uppercase tracking-wider bg-[#FDFBF7] px-2 py-0.5 rounded border border-[#D4AF37]/20 mb-3">
          Senior Compliance Advocate
        </span>
        <p className="text-gray-500 text-xs leading-relaxed mb-6">
          Anuj Anand Malik specializes in labor laws, gender sensitization audits, and representing complainants and employers in ICC inquiry disputes across India.
        </p>
        <div className="flex flex-col gap-2 w-full">
          <Link 
            href="/pro-bono-free-legal-aid"
            className="w-full bg-[#FAF9F5] border border-[#D4AF37]/30 text-[#2D2219] hover:bg-[#F5F2EA] text-center font-bold py-2.5 rounded-xl transition-colors text-xs"
          >
            Get Free Legal Aid
          </Link>
          <Link 
            href="/communities"
            className="w-full text-[#D4AF37] hover:underline text-center font-bold py-1.5 transition-colors text-xs"
          >
            Join Legal Communities
          </Link>
        </div>
      </div>

      {/* Widget 3: Help and Support Contacts */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100 flex flex-col">
        <h3 className="text-lg font-bold text-[#2D2219] mb-4 leading-tight">
          Important Contacts
        </h3>
        
        <div className="space-y-4">
          {[
            { name: "National Commission for Women", number: "011-26942369" },
            { name: "Ministry of Women & Child Dev Helpline", number: "1091 / 181" },
            { name: "Legal Aid Services Authority (NALSA)", number: "15100" }
          ].map((helpline, idx) => (
            <div key={idx} className="flex justify-between items-center py-2 border-b border-gray-50 last:border-0 last:pb-0">
              <span className="text-gray-500 font-medium text-xs max-w-[65%] leading-snug">{helpline.name}</span>
              <a href={`tel:${helpline.number.split(" / ")[0]}`} className="text-[#D4AF37] font-black text-xs hover:underline whitespace-nowrap">
                {helpline.number}
              </a>
            </div>
          ))}
        </div>
      </div>
      
    </div>
  );
}
