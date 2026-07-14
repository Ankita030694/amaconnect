import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function MotorAccidentSidebar() {
  return (
    <div className="flex flex-col gap-6 sticky top-32 font-sans">
      
      {/* Widget 1: Lead Gen Hook */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100 flex flex-col">
        <div className="w-8 h-8 rounded-full bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] font-bold text-sm mb-4">
          ?
        </div>
        <h3 className="text-xl font-bold text-[#2D2219] mb-3 leading-tight">
          Claim Compensation Now
        </h3>
        <p className="text-gray-600 text-xs mb-6 leading-relaxed">
          Connect with experienced accident claims attorneys to evaluate your case, compile required police and medical records, and file your petition before the six-month statutory deadline.
        </p>
        <Link 
          href="/contact"
          className="w-full bg-[#1A1A1A] text-white text-center font-bold py-3.5 rounded-xl hover:bg-black transition-colors"
        >
          Consult Claims Expert
        </Link>
      </div>

      {/* Widget 2: Author Bio Card */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100 flex flex-col items-center text-center">
        <div className="relative w-20 h-20 rounded-full overflow-hidden mb-4 border-2 border-[#D4AF37]">
          <Image 
            src="/anujbhiya.png"
            alt="Anuj Anand Malik"
            fill
            className="object-cover"
          />
        </div>
        <h4 className="font-bold text-[#2D2219] text-base mb-1">
          Anuj Anand Malik
        </h4>
        <span className="text-xs text-[#D4AF37] font-semibold mb-3 uppercase tracking-wider">
          Senior Legal Consultant
        </span>
        <p className="text-gray-600 text-xs leading-relaxed mb-4">
          Specializing in motor vehicle claims, insurance liability, and personal injury litigation under the Motor Vehicles Act at AMA Legal Solutions, with over a decade of trial experience.
        </p>
        <Link 
          href="/contact" 
          className="text-xs font-bold text-[#D4AF37] hover:underline"
        >
          View Professional Bio
        </Link>
      </div>
      
    </div>
  );
}
