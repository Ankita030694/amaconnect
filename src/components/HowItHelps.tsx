import Image from "next/image";

export default function HowItHelps() {
  return (
    <section className="w-full font-sans bg-[#0A0A0A] relative overflow-hidden py-12 sm:py-16 border-t border-[#D4AF37]/10">
      
      {/* Ambient background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[600px] bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.08)_0%,rgba(0,0,0,0)_70%)] pointer-events-none z-0" />

      {/* Golden Wavy Light Trails */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        {/* Bottom-left to center */}
        <svg className="absolute w-full h-[120%] top-[-10%] left-0 opacity-[0.25] motion-safe:animate-[waveFloat_25s_ease-in-out_infinite_alternate] blur-3xl md:blur-[80px]" viewBox="0 0 1000 1000" preserveAspectRatio="none">
          <defs>
            <linearGradient id="gold-wave-1" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FFD54A" stopOpacity="0" />
              <stop offset="40%" stopColor="#F5C542" stopOpacity="1" />
              <stop offset="70%" stopColor="#B8860B" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#FFD54A" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path 
            d="M-100,1100 C 200,900 300,500 800,600 C 1200,700 1100,200 1300,100" 
            fill="none" 
            stroke="url(#gold-wave-1)" 
            strokeWidth="120" 
            strokeLinecap="round"
          />
        </svg>

        {/* Top-right fading behind heading */}
        <svg className="absolute w-full h-[100%] top-[-10%] right-0 opacity-[0.20] motion-safe:animate-[waveFloat_35s_ease-in-out_infinite_alternate_reverse] blur-3xl md:blur-[100px]" viewBox="0 0 1000 1000" preserveAspectRatio="none">
          <defs>
            <linearGradient id="gold-wave-2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#B8860B" stopOpacity="0" />
              <stop offset="40%" stopColor="#FFD54A" stopOpacity="1" />
              <stop offset="80%" stopColor="#F5C542" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#B8860B" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path 
            d="M1200,-100 C 900,100 700,400 400,300 C 100,200 -100,600 -200,700" 
            fill="none" 
            stroke="url(#gold-wave-2)" 
            strokeWidth="160" 
            strokeLinecap="round"
          />
        </svg>

        {/* Subtle smaller wave across middle */}
        <svg className="absolute w-[120%] h-[80%] top-[20%] left-[-10%] opacity-[0.15] motion-safe:animate-[waveFloat_45s_ease-in-out_infinite_alternate] blur-2xl md:blur-[60px]" viewBox="0 0 1000 1000" preserveAspectRatio="none">
          <defs>
            <linearGradient id="gold-wave-3" x1="0%" y1="50%" x2="100%" y2="50%">
              <stop offset="0%" stopColor="#F5C542" stopOpacity="0" />
              <stop offset="50%" stopColor="#FFD54A" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#B8860B" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path 
            d="M-200,500 C 200,300 600,700 1200,400" 
            fill="none" 
            stroke="url(#gold-wave-3)" 
            strokeWidth="90" 
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Main Content Wrapper - Centered, max-width */}
      <div className="max-w-[1200px] w-full mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center relative z-10">
        
        {/* Decorative Heading */}
        <div className="flex items-center justify-center gap-4 sm:gap-6 mb-10 sm:mb-14 w-full">
          <div className="h-[1px] w-12 sm:w-24 bg-gradient-to-l from-[#D4AF37]/60 to-transparent"></div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-wide text-center">
            How AMA Connect Helps You
          </h2>
          <div className="h-[1px] w-12 sm:w-24 bg-gradient-to-r from-[#D4AF37]/60 to-transparent"></div>
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full">
            
            {/* Card 1: Ask AMA */}
            <div className="bg-gradient-to-br from-[#2D2219] to-[#0F0A06] rounded-3xl p-6 sm:p-8 flex flex-col text-left overflow-hidden h-[360px] sm:h-[400px] relative border border-[#D4AF37]/20 hover:border-[#D4AF37]/40 transition-all duration-300 group shadow-lg shadow-black/50">
              
              <div className="relative z-10 flex flex-col h-full w-[60%] sm:w-[55%]">
                {/* Icon */}
                <div className="w-10 h-10 rounded-full flex items-center justify-center mb-4 border border-[#D4AF37]/50 bg-[#D4AF37]/10">
                  <svg className="w-5 h-5 text-[#D4AF37]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Ask AMA</h3>
                
                <p className="text-[#A0A0A0] text-sm leading-relaxed mb-auto">
                  Get answers from verified experts within 45 minutes.
                </p>

                <div className="w-10 h-10 rounded-full bg-[#D4AF37] flex items-center justify-center text-white mt-4 cursor-pointer hover:bg-[#b5952f] transition-colors shadow-[0_4px_14px_rgba(212,175,55,0.3)] shrink-0">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>

              {/* Image */}
              <div className="absolute -bottom-6 -right-6 w-[200px] h-[280px] sm:w-[240px] sm:h-[320px] z-0 group-hover:scale-105 transition-transform duration-500 origin-bottom-right rotate-[15deg]">
                <Image src="/phone.png" alt="Ask AMA mockup" fill className="object-top object-contain drop-shadow-md md:drop-shadow-2xl" priority sizes="(max-width: 768px) 100vw, 33vw" />
              </div>
            </div>

            {/* Card 2: Case Desk */}
            <div className="bg-gradient-to-br from-[#2D2219] to-[#0F0A06] rounded-3xl p-6 sm:p-8 flex flex-col text-left overflow-hidden h-[360px] sm:h-[400px] relative border border-[#D4AF37]/20 hover:border-[#D4AF37]/40 transition-all duration-300 group shadow-lg shadow-black/50">
              
              <div className="relative z-10 flex flex-col h-full w-[60%] sm:w-[55%]">
                <div className="w-10 h-10 rounded-full flex items-center justify-center mb-4 border border-[#D4AF37]/50 bg-[#D4AF37]/10">
                  <svg className="w-5 h-5 text-[#D4AF37]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                  </svg>
                </div>
                
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Case Desk</h3>
                
                <p className="text-[#A0A0A0] text-sm leading-relaxed mb-auto">
                  Track your case, manage documents and stay updated.
                </p>

                <div className="w-10 h-10 rounded-full bg-[#D4AF37] flex items-center justify-center text-white mt-4 cursor-pointer hover:bg-[#b5952f] transition-colors shadow-[0_4px_14px_rgba(212,175,55,0.3)] shrink-0">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>

              <div className="absolute -bottom-6 -right-6 w-[200px] h-[280px] sm:w-[240px] sm:h-[320px] z-0 group-hover:scale-105 transition-transform duration-500 origin-bottom-right rotate-[15deg]">
                <Image src="/casedesk.png" alt="Case Desk mockup" fill className="object-top object-contain drop-shadow-md md:drop-shadow-2xl" priority sizes="(max-width: 768px) 100vw, 33vw" />
              </div>
            </div>

            {/* Card 3: Ask Your Lawyer */}
            <div className="bg-gradient-to-br from-[#2D2219] to-[#0F0A06] rounded-3xl p-6 sm:p-8 flex flex-col text-left overflow-hidden h-[360px] sm:h-[400px] relative border border-[#D4AF37]/20 hover:border-[#D4AF37]/40 transition-all duration-300 group shadow-lg shadow-black/50">
              
              <div className="relative z-10 flex flex-col h-full w-[60%] sm:w-[55%]">
                <div className="w-10 h-10 rounded-full flex items-center justify-center mb-4 border border-[#D4AF37]/50 bg-[#D4AF37]/10">
                  <svg className="w-5 h-5 text-[#D4AF37]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                  </svg>
                </div>
                
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Ask Your Lawyer</h3>
                
                <p className="text-[#A0A0A0] text-sm leading-relaxed mb-auto">
                  Chat directly with your lawyer when you need.
                </p>

                <div className="w-10 h-10 rounded-full bg-[#D4AF37] flex items-center justify-center text-white mt-4 cursor-pointer hover:bg-[#b5952f] transition-colors shadow-[0_4px_14px_rgba(212,175,55,0.3)] shrink-0">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>

              <div className="absolute -bottom-6 -right-6 w-[200px] h-[280px] sm:w-[240px] sm:h-[320px] z-0 group-hover:scale-105 transition-transform duration-500 origin-bottom-right rotate-[15deg]">
                <Image src="/Chat.svg" alt="Ask Your Lawyer mockup" fill className="object-top object-contain drop-shadow-md md:drop-shadow-2xl" priority sizes="(max-width: 768px) 100vw, 33vw" />
              </div>
            </div>

        </div>
      </div>

      <style>{`
        @keyframes waveFloat {
          0% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-10px, 15px) scale(1.02); }
          100% { transform: translate(15px, -10px) scale(0.98); }
        }
      `}</style>
    </section>
  );
}
