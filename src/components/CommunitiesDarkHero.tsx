"use client";

import Image from "next/image";
import { Users, BookOpen, MessageSquare, ArrowRight } from 'lucide-react';

export default function CommunitiesDarkHero() {
  return (
    <section className="relative w-full bg-[#181512] border-y border-[#2A221D] overflow-hidden font-sans">
      
      {/* Background Decorative Elements (Moved outside max-w container to span full width) */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Dot Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.4] bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9IiNDOUEyMjciIG9wYWNpdHk9IjAuNSIvPjwvc3ZnPg==')] bg-[length:40px_40px]" />
        
        {/* Soft Radial Glow */}
        <div className="absolute top-1/2 left-[80%] -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(ellipse_at_center,rgba(201,162,39,0.15)_0%,transparent_70%)] rounded-full blur-[100px]" />
        
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(201,162,39,0.08)_0%,transparent_70%)] rounded-full blur-[80px]" />
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative min-h-[700px] flex flex-col lg:flex-row items-center z-10">
        
        {/* Left Content */}
        <div className="w-full lg:w-1/2 px-6 sm:px-12 lg:px-16 py-12 lg:py-16 z-10 flex flex-col justify-center items-center lg:items-start text-center lg:text-left animate-fade-in">
          <p className="text-[#C9A227] text-sm sm:text-[15px] font-bold tracking-[0.15em] uppercase mb-4 lg:mb-6 drop-shadow-sm">
            AMA CONNECT COMMUNITY
          </p>
          <h1 className="text-[44px] sm:text-6xl lg:text-[68px] font-extrabold text-white leading-[1.05] tracking-tight mb-6 lg:mb-8">
            Join the Legal <br className="hidden lg:block" />
            Community That <br className="hidden lg:block" />
            Helps You Grow
          </h1>
          <p className="text-[18px] sm:text-[22px] lg:text-[24px] text-white/65 leading-[1.4] mb-10 lg:mb-12 max-w-lg">
            Real questions, expert answers,<br className="hidden sm:block" />
            trusted legal discussions.
          </p>
          
          <div>
            <a 
              href="#communities"
              className="group inline-flex items-center justify-center gap-3 bg-[#C9A227] text-black px-8 py-4 sm:px-10 sm:py-5 rounded-[16px] font-bold text-[17px] sm:text-[18px] shadow-[0_0_20px_rgba(201,162,39,0.2)] hover:shadow-[0_0_30px_rgba(201,162,39,0.4)] hover:scale-[1.02] transition-all duration-300"
            >
              Join the Community
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </div>

          {/* Feature Row */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-center lg:justify-start gap-6 sm:gap-8 text-white mt-12 lg:mt-24 w-full">
            {/* Feature 1 */}
            <div className="flex items-center gap-4 group cursor-default">
              <Users className="w-7 h-7 sm:w-8 sm:h-8 text-[#C9A227] group-hover:scale-110 transition-transform duration-300" />
              <div className="text-left">
                <p className="text-[13px] sm:text-[14px] font-bold tracking-wide text-[#C9A227] uppercase leading-none mb-1.5">CONNECT</p>
                <p className="text-[13px] text-white/70 leading-none">Real people</p>
              </div>
            </div>
            
            <div className="hidden sm:block w-px h-10 bg-white/10" />

            {/* Feature 2 */}
            <div className="flex items-center gap-4 group cursor-default">
              <BookOpen className="w-7 h-7 sm:w-8 sm:h-8 text-[#C9A227] group-hover:scale-110 transition-transform duration-300" />
              <div className="text-left">
                <p className="text-[13px] sm:text-[14px] font-bold tracking-wide text-[#C9A227] uppercase leading-none mb-1.5">LEARN</p>
                <p className="text-[13px] text-white/70 leading-none">From experts</p>
              </div>
            </div>

            <div className="hidden sm:block w-px h-10 bg-white/10" />

            {/* Feature 3 */}
            <div className="flex items-center gap-4 group cursor-default">
              <MessageSquare className="w-7 h-7 sm:w-8 sm:h-8 text-[#C9A227] group-hover:scale-110 transition-transform duration-300" />
              <div className="text-left">
                <p className="text-[13px] sm:text-[14px] font-bold tracking-wide text-[#C9A227] uppercase leading-none mb-1.5">DISCUSS</p>
                <p className="text-[13px] text-white/70 leading-none">Real solutions</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Content: Floating Cards */}
        <div className="w-full lg:w-1/2 relative min-h-[500px] lg:min-h-0 py-12 lg:py-16 px-4 sm:px-12 flex justify-center items-center z-10">
          
          {/* Circular Outlines */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden lg:overflow-visible">
            <div className="absolute w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] rounded-full border border-white/[0.04] animate-[spin_60s_linear_infinite]" />
            <div className="absolute w-[450px] h-[450px] sm:w-[650px] sm:h-[650px] rounded-full border border-white/[0.02] animate-[spin_80s_linear_infinite_reverse]" />
          </div>

          <div className="relative w-full max-w-[520px] flex flex-col gap-5 sm:gap-6">
            
            {/* Card 1 */}
            <div className="w-full sm:w-[85%] sm:ml-auto bg-[#2A221D]/90 backdrop-blur-md rounded-[24px] border border-white/[0.08] p-4 sm:p-5 flex gap-4 shadow-2xl animate-float-slow hover:-translate-y-1 transition-all duration-300 cursor-default group">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden shrink-0 bg-white/10 group-hover:scale-105 transition-transform duration-300 shadow-inner">
                <Image src="https://i.pravatar.cc/100?img=11" width={48} height={48} alt="Avatar" className="w-full h-full object-cover" />
              </div>
              <div className="flex-1 pt-1">
                <p className="text-white/90 text-[14px] sm:text-[15px] leading-snug">
                  How can I file a consumer<br className="hidden sm:block"/> complaint online?
                </p>
              </div>
              <div className="text-white/40 text-[12px] sm:text-[13px] shrink-0 pt-1">
                2h ago
              </div>
            </div>

            {/* Card 2 (Featured) */}
            <div className="relative w-full bg-[#2A221D] rounded-[24px] border border-[#C9A227]/30 p-5 sm:p-6 flex gap-4 shadow-[0_20px_50px_rgba(0,0,0,0.5),0_0_30px_rgba(201,162,39,0.12)] z-10 animate-float hover:-translate-y-1.5 transition-all duration-300 cursor-default group">
              <div className="absolute inset-0 rounded-[24px] shadow-[inset_0_0_20px_rgba(201,162,39,0.05)] pointer-events-none border border-[#C9A227]/20 group-hover:border-[#C9A227]/50 transition-colors duration-500" />
              
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden shrink-0 bg-white/10 relative group-hover:scale-105 transition-transform duration-300 shadow-inner">
                <Image src="https://i.pravatar.cc/100?img=32" width={56} height={56} alt="Verified Lawyer" className="w-full h-full object-cover" />
                <div className="absolute bottom-0 right-0 w-4 h-4 bg-blue-500 rounded-full border-2 border-[#2A221D] flex items-center justify-center">
                  <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path></svg>
                </div>
              </div>
              <div className="flex-1 flex flex-col gap-3">
                <p className="text-white text-[15px] sm:text-[16px] leading-[1.5] drop-shadow-sm">
                  You can file a complaint on the National<br className="hidden sm:block" />
                  Consumer Helpline portal or through<br className="hidden sm:block" />
                  your District Consumer Commission.
                </p>
                <div className="flex items-center justify-between mt-2">
                  <div className="text-white/60 text-[13px] sm:text-[14px] flex items-center gap-2">
                    <span className="text-[#C9A227] font-serif text-lg leading-none mb-1">~</span> 12 Answers
                  </div>
                  
                  <div className="flex -space-x-2">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-[1.5px] border-[#2A221D] overflow-hidden">
                      <Image src="https://i.pravatar.cc/100?img=44" width={32} height={32} alt="User" className="w-full h-full object-cover" />
                    </div>
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-[1.5px] border-[#2A221D] overflow-hidden">
                      <Image src="https://i.pravatar.cc/100?img=12" width={32} height={32} alt="User" className="w-full h-full object-cover" />
                    </div>
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-[1.5px] border-[#2A221D] overflow-hidden">
                      <Image src="https://i.pravatar.cc/100?img=47" width={32} height={32} alt="User" className="w-full h-full object-cover" />
                    </div>
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-[1.5px] border-[#2A221D] bg-[#181512] flex items-center justify-center text-[10px] sm:text-[11px] text-white/80 font-medium z-10">
                      +8
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="w-full sm:w-[85%] sm:ml-auto bg-[#2A221D]/90 backdrop-blur-md rounded-[24px] border border-white/[0.08] p-4 sm:p-5 flex gap-4 shadow-2xl animate-float-medium hover:-translate-y-1 transition-all duration-300 cursor-default group">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden shrink-0 bg-white/10 group-hover:scale-105 transition-transform duration-300 shadow-inner">
                <Image src="https://i.pravatar.cc/100?img=15" width={48} height={48} alt="Avatar" className="w-full h-full object-cover" />
              </div>
              <div className="flex-1 pt-1">
                <p className="text-white/90 text-[14px] sm:text-[15px] leading-snug">
                  What documents are needed<br className="hidden sm:block"/> for a rental agreement?
                </p>
              </div>
              <div className="text-white/40 text-[12px] sm:text-[13px] shrink-0 pt-1">
                4h ago
              </div>
            </div>
            
          </div>
        </div>
      </div>
      
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
