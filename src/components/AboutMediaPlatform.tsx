import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function AboutMediaPlatform() {
  return (
    <section className="w-full bg-[#FDFBF7] pt-4 sm:pt-6 pb-8 sm:pb-12 border-b border-[#E5E0D8]/40 font-sans relative overflow-hidden">
      
      {/* Background Subtle Gradient */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.05)_0,rgba(212,175,55,0)_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Text Content */}
          <div className="flex flex-col order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-8 h-[2px] bg-[#D4AF37]"></span>
              <span className="text-[#D4AF37] font-bold tracking-wider uppercase text-xs sm:text-sm">Premier Media Platform</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#2D2219] leading-[1.1] mb-6">
              Learn from the <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#B8860B]">Legal Elite</span>
            </h2>
            
            <p className="text-[#64748b] text-base sm:text-lg font-medium leading-relaxed mb-6">
              AMA Connect goes beyond just being a legal support app—it serves as a premier media platform. We bring you exclusive, in-depth interviews with India's top lawyers, judges, and legal luminaries. 
            </p>
            
            <p className="text-[#64748b] text-base sm:text-lg font-medium leading-relaxed mb-10">
              Through their personal stories, experiences, and insights, you can stay informed, find inspiration, and better understand the legal world directly from the professionals who shape it every day.
            </p>
            
            <div>
              <Link 
                href="/interviews" 
                className="inline-flex items-center justify-center gap-3 bg-[#2D2219] hover:bg-[#D4AF37] text-white px-8 py-4 rounded-full font-bold transition-all duration-300 hover:shadow-[0_8px_25px_rgba(212,175,55,0.4)] hover:-translate-y-1 w-full sm:w-auto group"
              >
                Watch Interviews
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Visual Content - Video/Interview Collage */}
          <div className="relative w-full h-[400px] sm:h-[500px] lg:h-[550px] order-1 lg:order-2 flex items-center justify-center">
            
            {/* Main Featured Image */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] h-[75%] rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] border-4 border-white z-20 group cursor-pointer transition-transform duration-500 hover:scale-[1.02]">
                <Image 
                    src="/main_interview.jpg" 
                    alt="Featured Lawyer Interview" 
                    fill 
                    className="object-cover transition-transform duration-700 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500" />
                


                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md px-4 py-3 rounded-xl border border-white/20 shadow-lg transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <p className="text-[#D4AF37] text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-1">Featured Episode</p>
                    <p className="text-[#2D2219] font-bold text-sm sm:text-base line-clamp-1">Inside the mind of top legal experts</p>
                </div>
            </div>

            {/* Decorative Floating Image */}
            
            <div className="absolute bottom-[5%] right-[5%] w-[35%] h-[35%] rounded-2xl overflow-hidden shadow-xl border-[3px] border-white z-30 opacity-90 animate-[float_7s_ease-in-out_infinite_1s_both] bg-[#FDFBF0]">
                <Image src="/Interview.png" alt="Legal Discussion" fill className="object-cover object-center" />
            </div>

            {/* Decorative Element */}
            <div className="absolute top-[10%] right-[10%] w-24 h-24 bg-[#D4AF37]/10 rounded-full blur-2xl z-0" />
            <div className="absolute bottom-[20%] left-[10%] w-32 h-32 bg-[#D4AF37]/15 rounded-full blur-2xl z-0" />

          </div>
          
        </div>
      </div>

      <style>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
          100% { transform: translateY(0px); }
        }
      `}</style>
    </section>
  );
}
