import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function HomebuyerReraSidebar() {
  return (
    <div className="flex flex-col gap-6 sticky top-32 font-sans">
      
      {/* Widget 1: Lead Gen Hook (points to /contact) */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100 flex flex-col">
        <div className="w-8 h-8 rounded-full bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] font-bold text-sm mb-4">
          ⚖️
        </div>
        <h3 className="text-xl font-bold text-[#2D2219] mb-3 leading-tight">
          Stuck with a delayed real estate project?
        </h3>
        <p className="text-gray-600 text-xs mb-6 leading-relaxed">
          Get in touch with our legal experts at AMA Legal Solutions to claim refunds, monthly interest, or enforce construction.
        </p>
        <Link 
          href="/contact"
          className="w-full bg-[#1A1A1A] text-white text-center font-bold py-3.5 rounded-xl hover:bg-black transition-colors"
        >
          Contact Our Team
        </Link>
      </div>

      {/* Widget 2: Author Profile (Anuj Anand Malik) */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100 flex flex-col items-center text-center">
        <div className="relative w-20 h-20 rounded-full overflow-hidden mb-4 border-2 border-[#D4AF37]">
          <Image 
            src="/anujbhiya.png" 
            alt="Anuj Anand Malik" 
            fill
            className="object-cover"
          />
        </div>
        <h4 className="text-base font-bold text-[#2D2219]">Anuj Anand Malik</h4>
        <p className="text-xs text-gray-500 mb-3">Senior Partner &amp; RERA Specialist</p>
        <p className="text-xs text-gray-600 leading-relaxed mb-4">
          Anuj Anand Malik specializes in real estate litigation and regulatory compliance, helping hundreds of homebuyers recover delayed possession and refunds.
        </p>
        <Link 
          href="/about"
          className="text-xs font-bold text-[#D4AF37] hover:underline"
        >
          View Full Bio
        </Link>
      </div>

      {/* Widget 3: Essential Resources */}
      <div className="bg-[#1A1410] rounded-3xl p-6 sm:p-8 text-white shadow-lg flex flex-col">
        <h3 className="text-lg font-bold mb-4 border-b border-white/10 pb-3 tracking-tight">
          Useful Resources
        </h3>
        <div className="space-y-4">
          <div>
            <p className="text-[10px] text-gray-400 mb-1 uppercase tracking-wider">Pleadings &amp; Drafts</p>
            <Link 
              href="/drafts" 
              className="text-xs font-bold text-[#D4AF37] hover:underline"
            >
              Download RERA Appeal Drafts
            </Link>
          </div>
          <div>
            <p className="text-[10px] text-gray-400 mb-1 uppercase tracking-wider">Free Consultation</p>
            <Link 
              href="/ask-me-anything" 
              className="text-xs font-bold text-white hover:text-[#D4AF37] hover:underline"
            >
              Submit Your RERA Query
            </Link>
          </div>
        </div>
      </div>
      
    </div>
  );
}
