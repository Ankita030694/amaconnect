import React from "react";
import Link from "next/link";

export default function StartupGuideSidebar() {
  return (
    <div className="flex flex-col gap-6 sticky top-32 font-sans">
      
      {/* Widget 1: Lead Gen Hook (points to /contact) */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100 flex flex-col">
        <div className="w-8 h-8 rounded-full bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] font-bold text-sm mb-4">
          ?
        </div>
        <h3 className="text-xl font-bold text-[#2D2219] mb-3 leading-tight">
          Need Help with Incorporation?
        </h3>
        <p className="text-gray-600 text-xs mb-6 leading-relaxed">
          Connect with experienced Chartered Accountants and corporate lawyers on AMAConnect to handle your company registration and DPIIT application seamlessly.
        </p>
        <Link 
          href="/contact"
          className="w-full bg-[#1A1A1A] text-white text-center font-bold py-3.5 rounded-xl hover:bg-black transition-colors"
        >
          Contact Legal Expert
        </Link>
      </div>

      {/* Widget 2: Legal Drafts & Templates (points to /drafts) */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100 flex flex-col">
        <h3 className="text-lg font-bold text-[#2D2219] mb-3 leading-tight">
          Startup Legal Drafts
        </h3>
        <p className="text-gray-600 text-xs mb-6 leading-relaxed font-medium">
          Get verified templates for co-founders agreements, IP assignment agreements, and initial board resolutions to protect your business interest from day one.
        </p>
        <Link 
          href="/drafts"
          className="text-[#D4AF37] text-center font-bold py-3 border border-[#D4AF37]/30 rounded-xl hover:bg-[#D4AF37]/5 transition-colors text-xs"
        >
          Browse Legal Templates
        </Link>
      </div>

      {/* Widget 3: About AMAConnect (points to /about) */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100 flex flex-col">
        <h3 className="text-sm font-bold text-[#2D2219] mb-2 leading-tight">
          About AMAConnect
        </h3>
        <p className="text-gray-500 text-xs mb-4 leading-relaxed">
          We are dedicated to bridging the gap between quality legal advice and growing startups. Our platform offers access to top practitioners across corporate law, taxation, and regulatory compliance.
        </p>
        <Link 
          href="/about"
          className="text-[#1A1A1A] text-xs font-bold hover:underline"
        >
          Read Our Story &rarr;
        </Link>
      </div>
      
    </div>
  );
}
