import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function CyberFraudSidebar() {
  return (
    <div className="flex flex-col gap-6 sticky top-32 font-sans">
      
      {/* Widget 1: Lead Gen Hook */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100 flex flex-col">
        <div className="w-8 h-8 rounded-full bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] font-bold text-sm mb-4">
          🛡️
        </div>
        <h3 className="text-xl font-bold text-[#2D2219] mb-3 leading-tight">
          Victim of Online Fraud?
        </h3>
        <p className="text-gray-600 text-xs mb-6 leading-relaxed">
          Ask a cyber legal expert on AMAConnect and get free, verified guidance on how to freeze scammer accounts and recover your lost funds.
        </p>
        <Link 
          href="/ask-me-anything"
          className="w-full bg-[#1A1A1A] text-white hover:bg-black text-center font-bold py-3.5 rounded-xl transition-all shadow-md hover:scale-[1.02]"
        >
          Ask on AMAConnect
        </Link>
      </div>

      {/* Widget 2: Author Bio Widget */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100 flex flex-col">
        <div className="flex items-center gap-4 mb-4">
          <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-[#D4AF37]/20 flex-shrink-0">
            <Image 
              src="/anujbhiya.png" 
              alt="Anuj Anand Malik" 
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h4 className="font-bold text-[#2D2219] text-sm">Anuj Anand Malik</h4>
            <p className="text-xs text-gray-500 font-medium">Founder, AMA Legal Solutions</p>
          </div>
        </div>
        <p className="text-gray-600 text-xs mb-4 leading-relaxed text-justify">
          Anuj Anand Malik is a trusted advocate and banking lawyer. He leads a result-driven law firm helping individuals navigate financial fraud, banking disputes, and cyber crime recovery under Indian law.
        </p>
        <Link 
          href="/ask-me-anything"
          className="text-xs font-bold text-[#D4AF37] hover:underline flex items-center gap-1"
        >
          Consult Anuj Malik &rarr;
        </Link>
      </div>

      {/* Widget 3: Cyber Helpline & Resources */}
      <div className="bg-[#1A1410] rounded-3xl p-6 sm:p-8 text-white shadow-lg flex flex-col">
        <h3 className="text-base font-bold mb-4 border-b border-white/10 pb-3 tracking-tight">
          Emergency Cyber Contacts
        </h3>
        <div className="space-y-4">
          <div>
            <p className="text-[10px] text-gray-400 mb-0.5 uppercase tracking-wider">National Helpline Number</p>
            <a href="tel:1930" className="text-lg font-extrabold text-[#D4AF37] hover:underline block">
              1930
            </a>
          </div>
          <div>
            <p className="text-[10px] text-gray-400 mb-0.5 uppercase tracking-wider">Online Reporting Portal</p>
            <a 
              href="https://cybercrime.gov.in" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-sm font-semibold text-white hover:underline block"
            >
              cybercrime.gov.in
            </a>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-white/10 flex flex-col gap-2">
          <Link 
            href="/communities"
            className="text-xs font-medium text-gray-300 hover:text-white hover:underline"
          >
            Join Cyber Support Communities
          </Link>
          <Link 
            href="/pro-bono-free-legal-aid"
            className="text-xs font-medium text-gray-300 hover:text-white hover:underline"
          >
            Apply for Free Legal Aid
          </Link>
        </div>
      </div>
      
    </div>
  );
}
