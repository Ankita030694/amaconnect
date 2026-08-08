"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import DownloadModal from "./DownloadModal";

export default function CTASection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Close modal on Escape key press and prevent background scrolling
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsModalOpen(false);
      }
    };
    if (isModalOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isModalOpen]);

  return (
    <section id="download" className="w-full">
      <div 
        className="relative overflow-hidden bg-[#FAF8F3] flex flex-col lg:flex-row items-stretch min-h-[600px]"
      >
        {/* Background Elements */}
        {/* Faint gold glow */}
        <div className="absolute top-1/2 right-1/4 w-[600px] h-[600px] -translate-y-1/2 translate-x-1/2 bg-[#C9A227]/10 rounded-full blur-[100px] pointer-events-none" />
        
        {/* Blurred Scales of Justice Background (Fallback to subtle gradient if image not present, but using a generic shape/gradient to simulate the blurred effect) */}
        <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-[0.03] pointer-events-none mix-blend-multiply bg-[url('/legal_scales_hero.png')] bg-cover bg-center bg-no-repeat blur-sm" />
        
        {/* Slight Vignette */}
        <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_100px_rgba(0,0,0,0.02)]" />

        {/* Left Content Section (52%) */}
        <div className="lg:w-[52%] px-6 py-12 sm:px-12 sm:py-16 lg:px-[72px] lg:py-[80px] flex flex-col justify-center relative z-10">
          
          {/* Eyebrow */}
          <div className="animate-fade-in-up" style={{ animationDuration: '600ms', animationFillMode: 'both' }}>
            <span className="text-[#C9A227] text-sm uppercase tracking-widest font-medium mb-6 block">
              YOUR LEGAL PARTNER, ALWAYS
            </span>
          </div>

          {/* Heading */}
          <h2 
            className="text-[40px] sm:text-[48px] lg:text-[64px] font-extrabold text-[#1F1B17] leading-[1.05] tracking-tight mb-6 animate-fade-in-up"
            style={{ animationDuration: '600ms', animationDelay: '100ms', animationFillMode: 'both' }}
          >
            Get Legal Help in<br className="hidden sm:block" /> Minutes. One<br className="hidden sm:block" /> <span className="text-[#C9A227]">Download</span> Away.
          </h2>
          
          {/* Subtitle */}
          <p 
            className="text-[#6B7280] text-[18px] sm:text-[22px] max-w-[560px] mb-10 leading-[1.4] animate-fade-in-up"
            style={{ animationDuration: '600ms', animationDelay: '200ms', animationFillMode: 'both' }}
          >
            Connect with verified lawyers, get instant advice, and resolve your legal issues all in one app.
          </p>

          {/* CTA Buttons */}
          <div 
            className="flex flex-col sm:flex-row flex-wrap gap-4 mb-14 animate-fade-in-up"
            style={{ animationDuration: '600ms', animationDelay: '300ms', animationFillMode: 'both' }}
          >
            {/* Primary Button */}
            <button 
              onClick={() => setIsModalOpen(true)}
              className="flex justify-center items-center gap-2 bg-[#C9A227] text-white px-8 py-4 rounded-[14px] font-semibold text-[18px] transition-all duration-200 shadow-[0_8px_16px_-4px_rgba(201,162,39,0.3)] hover:-translate-y-1 hover:bg-[#D4AF37] hover:shadow-[0_12px_20px_-4px_rgba(201,162,39,0.4)] active:translate-y-0"
            >
              Download App Now
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 5v14M19 12l-7 7-7-7" />
              </svg>
            </button>

            {/* Secondary Button */}
            <Link 
              href="/ask-me-anything" 
              className="flex justify-center items-center px-8 py-4 rounded-[14px] font-semibold text-[18px] border-2 border-[#1F1B17] bg-white text-[#1F1B17] hover:bg-[#FAF8F3] transition-all duration-200 hover:-translate-y-1 shadow-sm active:translate-y-0"
            >
              Ask a Question First
            </Link>
          </div>

          {/* Trust Feature Card */}
          <div 
            className="bg-white rounded-[20px] shadow-[0_10px_30px_-10px_rgba(0,0,0,0.08)] p-6 sm:p-8 flex flex-col sm:flex-row gap-6 sm:gap-0 justify-between items-center animate-fade-in-up group hover:-translate-y-1 transition-transform duration-300"
            style={{ animationDuration: '600ms', animationDelay: '400ms', animationFillMode: 'both' }}
          >
            {/* Feature 1 */}
            <div className="flex-1 flex flex-col items-center text-center w-full">
              <div className="w-10 h-10 rounded-full bg-[#FAF8F3] flex items-center justify-center text-[#C9A227] mb-3 group-hover:scale-110 transition-transform duration-200">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <path d="M9 12l2 2 4-4" />
                </svg>
              </div>
              <h4 className="text-[#1F1B17] font-semibold text-[16px] mb-1">Free to download</h4>
              <p className="text-[#6B7280] text-[14px]">100% free to use</p>
            </div>

            {/* Divider */}
            <div className="hidden sm:block w-px h-12 bg-gray-200 mx-4" />
            <div className="block sm:hidden w-12 h-px bg-gray-200 my-2" />

            {/* Feature 2 */}
            <div className="flex-1 flex flex-col items-center text-center w-full">
              <div className="w-10 h-10 rounded-full bg-[#FAF8F3] flex items-center justify-center text-[#C9A227] mb-3 group-hover:scale-110 transition-transform duration-200">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </div>
              <h4 className="text-[#1F1B17] font-semibold text-[16px] mb-1">Verified lawyers</h4>
              <p className="text-[#6B7280] text-[14px]">Experienced experts</p>
            </div>

            {/* Divider */}
            <div className="hidden sm:block w-px h-12 bg-gray-200 mx-4" />
            <div className="block sm:hidden w-12 h-px bg-gray-200 my-2" />

            {/* Feature 3 */}
            <div className="flex-1 flex flex-col items-center text-center w-full">
              <div className="w-10 h-10 rounded-full bg-[#FAF8F3] flex items-center justify-center text-[#C9A227] mb-3 group-hover:scale-110 transition-transform duration-200">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                </svg>
              </div>
              <h4 className="text-[#1F1B17] font-semibold text-[16px] mb-1">Instant response</h4>
              <p className="text-[#6B7280] text-[14px]">Get help in minutes</p>
            </div>
          </div>
        </div>

        {/* Right Image Section (48%) */}
        <div className="lg:w-[48%] relative flex justify-center items-center py-16 lg:py-0 px-6 min-h-[600px] overflow-hidden">
          
          {/* Blurred Background Image */}
          <div className="absolute right-[-10%] top-1/2 -translate-y-1/2 w-[120%] h-[120%] opacity-40 pointer-events-none z-0">
            <Image
              src="/legal_scales_hero.png"
              alt="Scales of Justice"
              fill
              className="object-cover object-right blur-md mix-blend-multiply"
            />
          </div>

          {/* The CSS Phone Mockup */}
          <div 
            className="relative w-full max-w-[320px] aspect-[9/19.5] bg-white rounded-[2.5rem] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] border-[8px] border-[#1F1B17] overflow-hidden z-10 flex flex-col animate-fade-in-up" 
            style={{ animationDuration: '800ms', animationDelay: '200ms', animationFillMode: 'both' }}
          >
            {/* Camera Hole Punch */}
            <div className="absolute top-2.5 inset-x-0 flex justify-center z-50">
              <div className="w-3.5 h-3.5 bg-[#1F1B17] rounded-full"></div>
            </div>

            {/* Phone Screen Content */}
            <div className="flex-1 flex flex-col w-full h-full bg-[#FAF8F3] overflow-hidden font-sans text-left">
              
              {/* Status Bar */}
              <div className="h-12 w-full px-5 pt-3 pb-1 flex justify-between items-center text-[11px] font-semibold text-black z-40 relative">
                <span>9:41</span>
                <div className="flex items-center gap-1.5">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 21L15.6 16.2C14.6 15.4 13.4 15 12 15C10.6 15 9.4 15.4 8.4 16.2L12 21ZM12 3C7.95 3 4.21 4.34 1.2 6.6L3 9C5.5 7.12 8.62 6 12 6C15.38 6 18.5 7.12 21 9L22.8 6.6C19.79 4.34 16.05 3 12 3Z"/></svg>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M2 22H22V2L2 22Z"/></svg>
                  <svg width="16" height="12" viewBox="0 0 24 24" fill="currentColor" className="border border-black rounded-[4px] p-[1px]"><path d="M2 4H20V20H2V4Z"/></svg>
                </div>
              </div>

              <div className="flex-1 overflow-y-auto pb-20 no-scrollbar px-4">
                {/* Top Row: Greeting */}
                <div className="flex justify-between items-center mt-2 mb-5">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-[#C9A227] flex justify-center items-center text-white text-xs font-bold">U</div>
                    <span className="text-[14px] font-bold text-[#1F1B17]">Hi, User</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-700">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                  </div>
                </div>

                {/* Promo Banner Card */}
                <div className="bg-[#1F1B17] rounded-[16px] p-4 relative overflow-hidden mb-6 shadow-md">
                  <div className="relative z-10 w-[70%]">
                    <span className="inline-block bg-[#C9A227]/20 text-[#C9A227] text-[10px] font-bold px-2 py-0.5 rounded-sm mb-2">AMA SOLUTIONS</span>
                    <h3 className="text-white text-[18px] font-bold leading-tight">India's First<br/>Pro Bono App</h3>
                  </div>
                  {/* Gavel Graphic Abstracted */}
                  <div className="absolute right-[-10px] bottom-[-10px] w-24 h-24 opacity-30">
                    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M75 25L25 75M75 25L60 10M75 25L90 40M25 75L10 60M25 75L40 90M55 45L45 55" stroke="#C9A227" strokeWidth="8" strokeLinecap="round"/>
                      <circle cx="50" cy="50" r="10" fill="#C9A227"/>
                    </svg>
                  </div>
                </div>

                {/* What would you like to do? */}
                <h4 className="text-[#1F1B17] text-[15px] font-bold mb-3">What would you like to do?</h4>

                {/* List Items */}
                <div className="bg-white rounded-[16px] p-1.5 shadow-sm mb-5 flex flex-col gap-1">
                  
                  {/* Item 1 */}
                  <div className="flex items-center p-2.5 rounded-[12px] hover:bg-gray-50 transition-colors">
                    <div className="w-10 h-10 rounded-full bg-[#FAF8F3] flex justify-center items-center text-[#C9A227] mr-3 shrink-0">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h5 className="text-[13px] font-bold text-[#1F1B17] truncate">Connect to Lawyer</h5>
                      <p className="text-[11px] text-[#6B7280] truncate">Talk to verified experts</p>
                    </div>
                    <div className="text-gray-400 shrink-0">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
                    </div>
                  </div>
                  
                  <div className="h-px bg-gray-100 mx-3"></div>

                  {/* Item 2 */}
                  <div className="flex items-center p-2.5 rounded-[12px] hover:bg-gray-50 transition-colors">
                    <div className="w-10 h-10 rounded-full bg-[#FAF8F3] flex justify-center items-center text-[#C9A227] mr-3 shrink-0">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h5 className="text-[13px] font-bold text-[#1F1B17] truncate">Track My Case</h5>
                      <p className="text-[11px] text-[#6B7280] truncate">Live status & case updates</p>
                    </div>
                    <div className="text-gray-400 shrink-0">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
                    </div>
                  </div>
                  
                </div>

                {/* Stats Row */}
                <div className="flex justify-between items-center text-center bg-white rounded-[16px] p-4 shadow-sm mb-5">
                  <div className="flex-1 border-r border-gray-100 last:border-0">
                    <div className="text-[14px] font-extrabold text-[#1F1B17]">200+</div>
                    <div className="text-[9px] text-[#6B7280] leading-tight mt-0.5">Cases<br/>Resolved</div>
                  </div>
                  <div className="flex-1 border-r border-gray-100 last:border-0">
                    <div className="text-[14px] font-extrabold text-[#1F1B17]">40+</div>
                    <div className="text-[9px] text-[#6B7280] leading-tight mt-0.5">Expert<br/>Lawyers</div>
                  </div>
                  <div className="flex-1 border-r border-gray-100 last:border-0">
                    <div className="text-[14px] font-extrabold text-[#1F1B17]">200+</div>
                    <div className="text-[9px] text-[#6B7280] leading-tight mt-0.5">Cities<br/>Served</div>
                  </div>
                </div>

                {/* Trusted by Leading Organizations */}
                <div className="text-center">
                  <p className="text-[10px] font-semibold text-[#1F1B17] mb-2 uppercase">Trusted by Leading Organizations</p>
                  <div className="flex justify-center items-center gap-3 grayscale">
                    <div className="w-8 h-8 rounded-lg bg-gray-200 flex justify-center items-center"><div className="w-3 h-3 bg-gray-400 rounded-sm"></div></div>
                    <div className="w-8 h-8 rounded-lg bg-gray-200 flex justify-center items-center"><div className="w-4 h-4 rounded-full border-[2px] border-gray-400"></div></div>
                    <div className="w-8 h-8 rounded-lg bg-gray-200 flex justify-center items-center"><div className="w-3 h-3 bg-gray-400 rotate-45"></div></div>
                    <div className="w-8 h-8 rounded-lg bg-gray-200 flex justify-center items-center"><div className="w-4 h-4 rounded-sm border-[2px] border-gray-400"></div></div>
                  </div>
                </div>

              </div>

              {/* Bottom Tab Bar */}
              <div className="absolute bottom-0 inset-x-0 bg-white border-t border-gray-100 pt-3 pb-6 px-4 flex justify-between items-center z-40 rounded-b-[2rem]">
                <div className="flex flex-col items-center justify-center gap-1 text-[#C9A227] cursor-pointer">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 3L20 9V20a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9L12 3z"></path>
                    <circle cx="12" cy="14" r="2.5"></circle>
                  </svg>
                  <span className="text-[9px] font-semibold">Home</span>
                </div>
                <div className="flex flex-col items-center justify-center gap-1 text-gray-400 hover:text-gray-600 cursor-pointer">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="10" y1="6" x2="21" y2="6"></line>
                    <line x1="10" y1="12" x2="21" y2="12"></line>
                    <line x1="10" y1="18" x2="21" y2="18"></line>
                    <circle cx="4" cy="6" r="1.5"></circle>
                    <circle cx="4" cy="12" r="1.5"></circle>
                    <circle cx="4" cy="18" r="1.5"></circle>
                  </svg>
                  <span className="text-[9px] font-semibold">Services</span>
                </div>
                <div className="flex flex-col items-center justify-center gap-1 text-gray-400 hover:text-gray-600 cursor-pointer">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                    <line x1="9" y1="9" x2="15" y2="9"></line>
                    <line x1="9" y1="13" x2="13" y2="13"></line>
                  </svg>
                  <span className="text-[9px] font-semibold">AMA</span>
                </div>
              </div>
              
              {/* Home indicator (iPhone line) */}
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-1/3 h-1 bg-gray-800 rounded-full z-50"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Global styles for animations if not present in tailwind config */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation-name: fadeInUp;
        }
      `}} />

      {/* Premium Download Modal */}
      <DownloadModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}

