"use client";

import Image from "next/image";
import { MessageCircle, Scale, MessageSquare, BadgeCheck, MessageCircleHeart, MoreHorizontal, ArrowRight, Info, Link2 } from 'lucide-react';

export default function CommunitiesHero() {
  return (
    <section className="relative w-full bg-[#FAF8F3] pt-16 pb-20 sm:pb-28 lg:pb-36 px-4 sm:px-6 lg:px-8 overflow-hidden font-sans">
      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Premium Headline Block */}
          <div className="lg:col-span-6 flex flex-col items-start text-left z-10 lg:pr-8 pl-4 sm:pl-8 lg:pl-16 xl:pl-24 animate-fade-in-up">
            <p className="text-[#C9A227] text-sm font-bold tracking-[0.15em] uppercase mb-6">
              LEGAL WHATSAPP COMMUNITY
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-[64px] font-extrabold text-[#2B2118] leading-[1.1] tracking-tight mb-6">
              Join the WhatsApp community <br className="hidden sm:block" />
              solving real legal problems.
            </h1>
            <p className="text-[22px] sm:text-[26px] lg:text-[30px] text-[#6B7280] leading-[1.3] font-medium mb-10">
              Across live discussions and <br className="hidden sm:block" />
              expert guidance.
            </p>
            
            <a 
              href="#communities"
              className="group inline-flex items-center gap-3 bg-[#2B2118] text-white px-8 py-4 rounded-[16px] font-semibold text-[17px] shadow-[0_8px_20px_rgba(43,33,24,0.15)] hover:bg-[#1a140f] hover:-translate-y-1 hover:shadow-[0_12px_24px_rgba(43,33,24,0.25)] transition-all duration-300"
            >
              Join the WhatsApp Community
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </a>

            {/* Social Proof */}
            <div className="mt-10 flex items-center gap-4">
              <div className="flex -space-x-3">
                <div className="w-[42px] h-[42px] rounded-full border-2 border-[#FAF8F3] overflow-hidden bg-gray-200">
                  <Image src="https://i.pravatar.cc/100?img=11" width={42} height={42} alt="Member" className="object-cover w-full h-full" />
                </div>
                <div className="w-[42px] h-[42px] rounded-full border-2 border-[#FAF8F3] overflow-hidden bg-gray-200">
                  <Image src="https://i.pravatar.cc/100?img=32" width={42} height={42} alt="Member" className="object-cover w-full h-full" />
                </div>
                <div className="w-[42px] h-[42px] rounded-full border-2 border-[#FAF8F3] overflow-hidden bg-gray-200">
                  <Image src="https://i.pravatar.cc/100?img=44" width={42} height={42} alt="Member" className="object-cover w-full h-full" />
                </div>
                <div className="w-[42px] h-[42px] rounded-full border-2 border-[#FAF8F3] overflow-hidden bg-gray-200">
                  <Image src="https://i.pravatar.cc/100?img=12" width={42} height={42} alt="Member" className="object-cover w-full h-full" />
                </div>
              </div>
              <p className="text-[14px] text-[#6B7280] font-medium leading-snug max-w-[200px]">
                <span className="font-bold text-[#2B2118]">10K+ members</span> are already getting help and sharing insights
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Visual Composition */}
          <div className="lg:col-span-6 flex justify-center lg:justify-center mt-16 lg:-mt-16 xl:-mt-20 z-0 lg:-ml-8 xl:-ml-12">
            
            {/* Wrapper for Card and Floating Elements (Scaled down max width) */}
            <div className="relative w-full max-w-[400px]">
              
              {/* Ambient Background Glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[160%] h-[160%] bg-[radial-gradient(ellipse_at_center,rgba(201,162,39,0.12)_0%,transparent_70%)] rounded-full blur-3xl pointer-events-none -z-10" />

              {/* Dotted Paths and Floating Elements Container */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[160%] sm:w-[155%] lg:w-[160%] aspect-square z-0 pointer-events-none hidden sm:block">
                 
                 {/* The dashed ring */}
                 <div className="absolute inset-0 border-[1.5px] border-dashed border-[#C9A227]/50 rounded-full" />

                 {/* 1. Top Left Icon: Black Speech Bubble (...) */}
                 <div className="absolute top-[18%] left-[12%] -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-auto animate-float-slow">
                    <div className="relative bg-[#1A1A1A] p-3.5 rounded-[16px] shadow-xl flex items-center justify-center">
                       <MoreHorizontal className="w-6 h-6 text-white" />
                       {/* Speech Bubble Tail pointing towards card */}
                       <div className="absolute -bottom-1.5 -right-1.5 w-5 h-5 bg-[#1A1A1A] rounded-sm transform rotate-45 -z-10"></div>
                    </div>
                 </div>

                 {/* 2. Mid Left Gold Icon (Link) */}
                 <div className="absolute top-[50%] left-[0%] -translate-x-1/2 -translate-y-1/2 bg-[#C9A227] p-3 rounded-full shadow-lg z-20 pointer-events-auto animate-float-medium">
                    <Link2 className="w-6 h-6 text-white" />
                 </div>

                 {/* 3. Top Right Chat Icon (Plain Gold Circle) */}
                 <div className="absolute top-[20%] right-[10%] translate-x-1/2 -translate-y-1/2 bg-[#C9A227] p-3 rounded-full shadow-lg z-20 pointer-events-auto animate-float-fast">
                    <MessageSquare className="w-5 h-5 text-white" />
                 </div>

                 {/* 4. Mid Right Scale Icon: Black Speech Bubble */}
                 <div className="absolute top-[65%] right-[5%] translate-x-1/2 -translate-y-1/2 z-20 pointer-events-auto animate-float-slow">
                    <div className="relative bg-black p-4 rounded-[18px] shadow-2xl flex items-center justify-center">
                       <Scale className="w-8 h-8 text-[#C9A227]" />
                       {/* Speech Bubble Tail pointing towards card */}
                       <div className="absolute top-1/2 -left-2 w-6 h-6 bg-black rounded-sm transform -translate-y-1/2 rotate-45 -z-10"></div>
                    </div>
                 </div>
                 
                 {/* Top Accent Dot */}
                 <div className="absolute top-[0%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-[#C9A227] rounded-full" />
                 
                 {/* Lower Accent Dot (Bottom Right) */}
                 <div className="absolute top-[85%] right-[15%] translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-[#C9A227] rounded-full" />

              </div>


              {/* Main Discussion Card */}
              <div className="relative w-full bg-white rounded-[24px] shadow-[0_20px_50px_rgba(0,0,0,0.08)] border border-gray-100 z-10 animate-float">
                
                {/* Card Header */}
                <div className="px-6 py-5 border-b border-gray-50 flex justify-between items-center">
                  <h3 className="text-[15px] font-semibold text-[#8C939D]">Community Discussion</h3>
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]"></div>
                  </div>
                </div>

                {/* Discussion 1 (Question) */}
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-100">
                        <Image src="https://i.pravatar.cc/100?img=60" width={40} height={40} alt="Arjun Mehta" className="object-cover w-full h-full" />
                      </div>
                      <div>
                        <h4 className="text-[15px] font-bold text-[#2B2118]">Arjun Mehta</h4>
                        <p className="text-[13px] text-[#8C939D]">2h ago</p>
                      </div>
                    </div>
                    <MoreHorizontal className="w-5 h-5 text-gray-400" />
                  </div>
                  
                  <h2 className="text-[20px] font-bold text-[#2B2118] leading-snug mb-4">
                    How can I file a consumer complaint for a defective product?
                  </h2>
                  
                  <div className="flex flex-wrap gap-2 mb-5">
                    <span className="px-3 py-1 bg-orange-50 text-orange-700 text-[12px] font-semibold rounded-full border border-orange-100">
                      Consumer Complaints
                    </span>
                    <span className="px-3 py-1 bg-yellow-50 text-yellow-700 text-[12px] font-semibold rounded-full border border-yellow-100">
                      Consumer Rights
                    </span>
                  </div>

                  <div className="flex items-center gap-3 text-[14px] text-[#6B7280] font-medium">
                    <MessageCircle className="w-4 h-4" />
                    <span>12 answers</span>
                    
                    <div className="flex -space-x-2 ml-2">
                      <div className="w-6 h-6 rounded-full border-2 border-white overflow-hidden bg-gray-200">
                         <Image src="https://i.pravatar.cc/100?img=33" width={24} height={24} alt="Avatar" />
                      </div>
                      <div className="w-6 h-6 rounded-full border-2 border-white overflow-hidden bg-gray-200">
                         <Image src="https://i.pravatar.cc/100?img=12" width={24} height={24} alt="Avatar" />
                      </div>
                      <div className="w-6 h-6 rounded-full border-2 border-white overflow-hidden bg-gray-200">
                         <Image src="https://i.pravatar.cc/100?img=47" width={24} height={24} alt="Avatar" />
                      </div>
                      <div className="w-6 h-6 rounded-full border-2 border-white bg-gray-100 flex items-center justify-center text-[10px] font-bold text-gray-500">
                         +8
                      </div>
                    </div>
                  </div>
                </div>

                <div className="h-px bg-gray-100 w-full"></div>

                {/* Discussion 2 (Answer) */}
                <div className="p-6 bg-gray-50/50 rounded-b-[24px]">
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-100">
                        <Image src="https://i.pravatar.cc/100?img=42" width={40} height={40} alt="Adv. Neha Sharma" className="object-cover w-full h-full" />
                      </div>
                      <div>
                        <div className="flex items-center gap-1.5">
                          <h4 className="text-[15px] font-bold text-[#2B2118]">Adv. Neha Sharma</h4>
                          <BadgeCheck className="w-4 h-4 text-blue-500" />
                        </div>
                        <p className="text-[13px] text-[#8C939D]">1h ago</p>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-[15px] text-[#4B5563] leading-relaxed mb-4">
                    You can file a complaint on the National Consumer Helpline portal or approach the District Consumer Commission...
                  </p>

                  <div className="flex items-center gap-2 text-[#6B7280]">
                    <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white border border-gray-200 rounded-full text-[13px] font-medium shadow-sm cursor-pointer hover:bg-gray-50 transition-colors">
                       <MessageCircleHeart className="w-4 h-4 text-[#C9A227]" />
                       Helpful <span className="font-bold text-[#2B2118] ml-1">22</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Add inline styles for custom animations in global context if needed, but we can use simple Tailwind arbitrary values or just standard classes if we configure tailwind config. Let's stick to inline style tags for the animations since this is a one-off component rewrite. */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        @keyframes float-medium {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-8px) scale(1.05); }
        }
        @keyframes float-fast {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-6px) rotate(5deg); }
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-float-slow { animation: float-slow 8s ease-in-out infinite; }
        .animate-float-medium { animation: float-medium 5s ease-in-out infinite; }
        .animate-float-fast { animation: float-fast 4s ease-in-out infinite; }
        .animate-fade-in-up { animation: fade-in-up 1s ease-out forwards; }
        .animate-fade-in { animation: fade-in 1.5s ease-out forwards; }
      `}} />
    </section>
  );
}


