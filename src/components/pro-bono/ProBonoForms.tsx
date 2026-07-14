"use client";

import React from "react";
import Link from "next/link";

export default function ProBonoForms({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32">
      <div className="w-full bg-[#1A1410] rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-2xl text-center">
        
        {/* Subtle Background Elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4AF37] opacity-5 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3 pointer-events-none" />
        
        <div className="relative z-10 flex flex-col items-center max-w-2xl mx-auto">
          <div className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-4 tracking-tight">
              Join the Access to Justice Initiative
            </h2>
            <p className="text-sm sm:text-base text-gray-400 leading-relaxed mb-6">
              Whether you are an individual urgently seeking free legal aid, or an advocate willing to pledge your time, please reach out to our triage team directly to get started.
            </p>
          </div>

          <Link 
            href="/contact" 
            className="bg-[#D4AF37] text-white font-bold text-base sm:text-lg px-8 py-4 rounded-xl hover:bg-[#B8972E] transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 inline-flex items-center gap-3"
          >
            Contact Us
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </Link>
          
        </div>
      </div>
    </section>
  );
}
