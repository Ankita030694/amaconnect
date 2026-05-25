import Image from "next/image";
import Link from "next/link";

export default function LawyersHero() {
  return (
    <section className="relative w-full bg-[#FCF9F4] pt-20 sm:pt-32 pb-16 sm:pb-24 lg:pb-40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="z-10 text-left">
            <h3 className="text-[#D4AF37] font-bold tracking-[0.2em] text-sm sm:text-base uppercase mb-4 sm:mb-6">
              RESOURCES / LAWYER STORIES
            </h3>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-[#2D241E] mb-6 sm:mb-10 leading-[1.1]">
              Lawyer Reviews<br />
              and Real Case<br />
              Stories
            </h1>
            <Link 
              href="/contact?reason=Suggest%20a%20Professional%20Interview" 
              className="inline-block bg-[#2D241E] text-white px-6 sm:px-10 py-3.5 sm:py-5 rounded-xl sm:rounded-2xl font-bold text-base sm:text-xl hover:bg-[#3D342E] transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
            >
              Get Featured on AMA
            </Link>
          </div>

          {/* Right Content - Vertical Scroll Visual */}
          <div className="relative h-auto min-h-[300px] lg:h-[400px] flex items-center justify-center lg:justify-end mt-12 sm:mt-20 lg:mt-0">
            {/* Ghost Card Above - Made more visible and better positioned */}
            <div className="hidden lg:flex absolute top-0 right-0 w-[95%] max-w-[780px] bg-white/40 backdrop-blur-xl rounded-[2.5rem] shadow-sm transform -translate-y-[85%] translate-x-4 opacity-40 z-0 h-[320px] pointer-events-none border border-white/50 overflow-hidden">
                 <div className="w-[35%] bg-[#FFB5A7]/20 h-full"></div>
                 <div className="flex-1 p-8">
                    <div className="h-8 w-64 bg-[#D4AF37]/20 rounded-lg mb-6"></div>
                    <div className="h-6 w-40 bg-gray-200/30 rounded-md mb-4"></div>
                    <div className="h-4 w-56 bg-gray-200/20 rounded-md"></div>
                 </div>
            </div>

            {/* Main Featured Card */}
            <div className="relative z-10 w-full max-w-[880px] bg-white rounded-[2rem] sm:rounded-[2.5rem] shadow-[0_32px_64px_-12px_rgba(0,0,0,0.12)] overflow-hidden flex flex-col sm:flex-row transition-all duration-500 hover:shadow-[0_48px_96px_-16px_rgba(0,0,0,0.18)] group h-auto sm:h-[350px]">
              {/* Image Section */}
              <div className="w-full sm:w-[35%] h-[200px] sm:h-full bg-[#FFB5A7]/30 flex items-end justify-center pt-8 overflow-hidden">
                <Image
                  src="/ashishbhay.png"
                  alt="Adv. Rohan Mehta"
                  width={280}
                  height={400}
                  className="object-contain h-[95%] w-auto transition-transform duration-500 group-hover:scale-105"
                  priority
                />
              </div>

              {/* Text Section */}
              <div className="flex-1 p-8 sm:p-10 flex flex-col justify-between">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-[#D4AF37] mb-4 leading-tight">
                    Salary not paid? Here's what to do
                  </h2>
                  <div className="mb-6">
                    <p className="text-xl sm:text-2xl font-bold text-[#2D241E]">Adv. Rohan Mehta</p>
                    <div className="flex items-center gap-2 text-green-600 font-bold text-sm sm:text-base mt-2">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                      </svg>
                      Verified Lawyer
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <p className="text-xs sm:text-sm font-bold text-[#2D241E]/60 uppercase tracking-[0.15em] mb-2">Specializes in</p>
                    <p className="text-gray-500 text-base sm:text-lg font-medium leading-relaxed">Labour Law • Employment Disputes</p>
                  </div>
                </div>

                <div className="flex items-center justify-between border-t border-gray-100 pt-6">
                  <div className="text-gray-400 text-sm sm:text-base font-semibold tracking-tight">
                    12 Jan 2026 • 8 min watch
                  </div>
                  <button className="text-[#D4AF37] font-black text-lg sm:text-xl hover:text-[#B3922E] transition-colors flex items-center gap-2 group/btn">
                    Watch Now
                  </button>
                </div>
              </div>
            </div>

            {/* Ghost Card Below - Made more visible and better positioned */}
            <div className="hidden lg:flex absolute bottom-0 right-0 w-[95%] max-w-[780px] bg-white/40 backdrop-blur-xl rounded-[2.5rem] shadow-sm transform translate-y-[85%] translate-x-4 opacity-40 z-0 h-[320px] pointer-events-none border border-white/50 overflow-hidden">
                 <div className="w-[35%] bg-[#FFB5A7]/20 h-full"></div>
                 <div className="flex-1 p-8">
                    <div className="h-8 w-64 bg-[#D4AF37]/20 rounded-lg mb-6"></div>
                    <div className="h-6 w-40 bg-gray-200/30 rounded-md mb-4"></div>
                    <div className="h-4 w-56 bg-gray-200/20 rounded-md"></div>
                 </div>
            </div>
          </div>
        </div>

        {/* Bottom Slogan */}
        <div className="mt-16 sm:mt-24 lg:mt-32 text-center">
          <p className="text-[#D4AF37] font-bold text-lg sm:text-2xl opacity-90">
            Trusted by teams who rely on expert legal support
          </p>
        </div>
      </div>
    </section>
  );
}
