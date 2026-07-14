import React from "react";
import Link from "next/link";

export default function LoanSettleSidebar() {
  return (
    <div className="flex flex-col gap-6 sticky top-32 font-sans">
      
      {/* Widget 1: Lead Gen Hook */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100 flex flex-col">
        <div className="w-8 h-8 rounded-full bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] font-bold text-sm mb-4">
          ?
        </div>
        <h3 className="text-xl font-bold text-[#2D2219] mb-3 leading-tight">
          Facing Loan App Harassment?
        </h3>
        <p className="text-gray-600 text-xs mb-6 leading-relaxed">
          Ask a pro bono lawyer on AMAConnect today and get free, verified answers to stop recovery threats.
        </p>
        <Link 
          href="/ask-me-anything"
          className="w-full bg-[#1A1A1A] text-white text-center font-bold py-3.5 rounded-xl hover:bg-black transition-colors"
        >
          Ask a Question
        </Link>
      </div>

      {/* Widget 2: Free Legal Aid Hook */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100 flex flex-col">
        <h3 className="text-lg font-bold text-[#2D2219] mb-3 leading-tight">
          Pro Bono Legal Assistance
        </h3>
        <p className="text-gray-600 text-xs mb-5 leading-relaxed">
          Struggling to draft a formal cease and desist notice? Connect with legal experts for drafting help.
        </p>
        <Link 
          href="/pro-bono-free-legal-aid"
          className="w-full border border-gray-200 text-gray-800 text-center font-bold py-3 rounded-xl hover:bg-gray-50 transition-colors text-xs"
        >
          Get Free Drafting Help
        </Link>
      </div>

      {/* Widget 3: Support Communities */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100 flex flex-col">
        <h3 className="text-lg font-bold text-[#2D2219] mb-3 leading-tight">
          Borrower Support Groups
        </h3>
        <p className="text-gray-600 text-xs mb-5 leading-relaxed">
          You are not alone in this fight. Join verified support communities of borrowers who successfully settled.
        </p>
        <Link 
          href="/communities"
          className="w-full border border-gray-200 text-gray-800 text-center font-bold py-3 rounded-xl hover:bg-gray-50 transition-colors text-xs"
        >
          Join Our Communities
        </Link>
      </div>
      
    </div>
  );
}
