"use client";

import React from "react";
import Link from "next/link";

export default function LawyerLeadForm({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 bg-[#2D2219] relative overflow-hidden rounded-3xl p-6 sm:p-12 shadow-2xl text-center">
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.1)_0%,transparent_60%)] pointer-events-none" />

      <div className="w-full relative z-10 flex flex-col items-center max-w-2xl mx-auto">
        
        {/* Top Copy */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
            <span className="text-xs font-bold text-gray-300 uppercase tracking-wider">
              Exclusive Network
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mb-6 tracking-tight leading-tight">
            Claim Your Free Profile Today
          </h2>
          <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-4">
            Claim your free professional profile on AMAConnect and instantly position your practice in front of 10,000+ highly motivated monthly clients. Stop waiting for unpredictable referrals and start scaling your independent law firm with predictable, algorithmic lead generation.
          </p>
          <p className="text-sm text-gray-400 leading-relaxed">
            Our compliance team will manually cross-reference your Bar Council enrollment ID with the official state registries to verify your profile and activate your secure dashboard.
          </p>
        </div>

        <Link 
          href="/contact" 
          className="bg-[#D4AF37] text-white font-bold text-base sm:text-lg px-8 py-4 rounded-xl hover:bg-[#B8972E] transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 inline-flex items-center gap-3"
        >
          Get Started
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </Link>
        
      </div>
    </section>
  );
}
