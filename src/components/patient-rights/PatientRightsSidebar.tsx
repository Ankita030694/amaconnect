import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function PatientRightsSidebar() {
  return (
    <div className="flex flex-col gap-6 sticky top-32 font-sans">
      
      {/* Widget 1: Lead Gen Hook */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100 flex flex-col">
        <div className="w-8 h-8 rounded-full bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] font-bold text-sm mb-4">
          ⚖️
        </div>
        <h3 className="text-xl font-bold text-[#2D2219] mb-3 leading-tight">
          Facing Medical Negligence?
        </h3>
        <p className="text-gray-600 text-xs mb-6 leading-relaxed">
          Consult with a verified advocate on AMAConnect to explore your options under consumer protection and medical council guidelines.
        </p>
        <Link 
          href="/ask-me-anything"
          className="w-full bg-[#1A1A1A] text-white text-center font-bold py-3.5 rounded-xl hover:bg-black transition-colors"
        >
          Ask on AMAConnect
        </Link>
      </div>

      {/* Widget 2: Author Bio Card */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100 flex flex-col">
        <div className="flex items-center gap-4 mb-4">
          <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-[#D4AF37]/20">
            <Image 
              src="/anujbhiya.png" 
              alt="Anuj Anand Malik"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h4 className="text-sm font-bold text-[#2D2219]">Anuj Anand Malik</h4>
            <p className="text-[10px] text-gray-500 font-medium">Founder, AMA Legal Solutions</p>
          </div>
        </div>
        <p className="text-gray-600 text-xs mb-4 leading-relaxed text-justify">
          Anuj Anand Malik is a trusted advocate and legal advisor. With over a decade of litigation experience in consumer disputes, banking, and compliance, he leads a result-driven firm helping clients navigate medical negligence and legal remedy procedures.
        </p>
        <a 
          href="https://www.linkedin.com/in/iamanujmalik/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-bold text-[#D4AF37] hover:underline"
        >
          Connect on LinkedIn
        </a>
      </div>

      {/* Widget 3: Resources & Community Links */}
      <div className="bg-[#1A1410] rounded-3xl p-6 sm:p-8 text-white shadow-lg flex flex-col">
        <h3 className="text-base font-bold mb-4 border-b border-white/10 pb-3 tracking-tight">
          Helpful Forums
        </h3>
        <div className="space-y-4">
          <div>
            <p className="text-[10px] text-gray-400 mb-1 uppercase tracking-wider">Free Legal Aid</p>
            <Link 
              href="/pro-bono-free-legal-aid" 
              className="text-xs font-bold text-[#D4AF37] hover:underline"
            >
              Get Pro Bono Legal Support
            </Link>
          </div>
          <div>
            <p className="text-[10px] text-gray-400 mb-1 uppercase tracking-wider">Patient Support</p>
            <Link 
              href="/communities" 
              className="text-xs font-bold text-white hover:text-[#D4AF37] hover:underline"
            >
              Join Our Legal Communities
            </Link>
          </div>
          <div>
            <p className="text-[10px] text-gray-400 mb-1 uppercase tracking-wider">Inquiries</p>
            <p className="text-xs font-medium text-gray-300">
              Response within 24 hours for verified cases
            </p>
          </div>
        </div>
      </div>
      
    </div>
  );
}
