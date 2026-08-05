"use client";

import React from 'react';
import Image from 'next/image';

export default function Interviewtoaskbridge() {
  return (
    <section className="relative w-full bg-[#FAF9F6] pt-20 sm:pt-28 pb-0 overflow-hidden font-sans border-y border-[#E5E0D8]/40">
      
      {/* Background Subtle Gradients */}
      <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[600px] sm:w-[800px] h-[600px] sm:h-[800px] bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.05)_0,rgba(212,175,55,0)_60%)] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-[radial-gradient(circle_at_bottom_right,rgba(0,0,0,0.02)_0,rgba(0,0,0,0)_60%)] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 flex flex-col items-center text-center z-10">
        
        {/* Animated Icon Circle */}
        <div className="group relative w-16 h-16 sm:w-20 sm:h-20 mb-8 sm:mb-10 animate-[fadeInDown_0.8s_ease-out]">
          <div className="absolute inset-0 bg-[#D4AF37] rounded-full blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
          <div className="relative w-full h-full bg-white rounded-full flex items-center justify-center shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-[#F0EBE1] transform group-hover:scale-105 group-hover:-translate-y-1 transition-all duration-500">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              strokeWidth={2.5} 
              stroke="#D4AF37" 
              className="w-7 h-7 sm:w-9 sm:h-9"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
            </svg>
          </div>
        </div>

        {/* Heading */}
        <h2 className="text-[#2D2219] font-black text-4xl sm:text-5xl md:text-6xl tracking-tight mb-5 sm:mb-6 leading-[1.1] animate-[fadeInUp_0.8s_ease-out_0.2s_both]">
          Ask AMA
        </h2>

        {/* Subheading */}
        <p className="text-[#64748b] text-lg sm:text-xl md:text-2xl font-medium max-w-2xl leading-relaxed mb-12 sm:mb-20 animate-[fadeInUp_0.8s_ease-out_0.4s_both]">
          Get answers from verified experts <br className="hidden sm:block" /> within 45 minutes.
        </p>

        {/* Feature Badges (Mobile Hidden, Desktop Floating) & Phone */}
        <div className="relative w-full max-w-5xl flex justify-center mt-4">
            
            {/* Phone Container */}
            <div className="relative w-full max-w-[280px] sm:max-w-[340px] md:max-w-[400px] h-[350px] sm:h-[450px] md:h-[520px] mx-auto transform translate-y-12 z-20 group animate-[fadeInUp_1s_ease-out_0.6s_both]">
                <div className="absolute inset-0 bg-[#D4AF37] blur-3xl opacity-5 group-hover:opacity-10 transition-opacity duration-700 rounded-full" />
                <Image
                    src="/phone.png"
                    alt="Ask AMA App Screen"
                    fill
                    className="object-contain object-top drop-shadow-[0_20px_50px_rgba(0,0,0,0.15)] transition-transform duration-700 ease-out group-hover:-translate-y-4"
                    sizes="(max-width: 640px) 280px, (max-width: 768px) 340px, 400px"
                    priority
                />
            </div>

            {/* Floating Elements / Details */}
            <div className="hidden lg:flex absolute left-[5%] top-[15%] bg-white/90 backdrop-blur-md px-6 py-4 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-white items-center gap-4 z-30 animate-[float_6s_ease-in-out_infinite_both] hover:scale-105 transition-transform cursor-default">
                <div className="bg-[#D4AF37]/15 p-3 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-[#C79116]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                </div>
                <div className="flex flex-col items-start text-left">
                  <span className="font-extrabold text-[#2D2219] text-base leading-tight">100% Anonymous</span>
                  <span className="text-[#64748b] text-xs font-medium mt-0.5">Your privacy secured</span>
                </div>
            </div>

            <div className="hidden lg:flex absolute right-[2%] top-[30%] bg-white/90 backdrop-blur-md px-6 py-4 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-white items-center gap-4 z-30 animate-[float_7s_ease-in-out_infinite_1s_both] hover:scale-105 transition-transform cursor-default">
                <div className="bg-blue-50 p-3 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                </div>
                <div className="flex flex-col items-start text-left">
                  <span className="font-extrabold text-[#2D2219] text-base leading-tight">Lightning Fast</span>
                  <span className="text-[#64748b] text-xs font-medium mt-0.5">Answers within 45 mins</span>
                </div>
            </div>

            <div className="hidden lg:flex absolute left-[8%] bottom-[20%] bg-white/90 backdrop-blur-md px-6 py-4 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-white items-center gap-4 z-30 animate-[float_8s_ease-in-out_infinite_2s_both] hover:scale-105 transition-transform cursor-default">
                <div className="bg-green-50 p-3 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                </div>
                <div className="flex flex-col items-start text-left">
                  <span className="font-extrabold text-[#2D2219] text-base leading-tight">Verified Experts</span>
                  <span className="text-[#64748b] text-xs font-medium mt-0.5">Trusted legal guidance</span>
                </div>
            </div>

        </div>
      </div>

      <style>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
          100% { transform: translateY(0px); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
