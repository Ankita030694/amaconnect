"use client";

import Image from "next/image";

export default function CommunitiesHero() {
  const onlineDiscussions = [
    { 
      category: "Consumer Complaints", 
      mobileCount: "90 online", 
      desktopCount: "90 online" 
    },
    { 
      category: "Property & Real Estate", 
      mobileCount: "90 online", 
      desktopCount: "71 online" 
    },
    { 
      category: "Family Law", 
      mobileCount: "90 online", 
      desktopCount: "56 online" 
    },
  ];

  return (
    <section className="relative w-full bg-white pt-[52px] pb-10 sm:pb-20 lg:pb-28 px-4 sm:px-6 lg:px-8 overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Premium Headline Block */}
          <div className="lg:col-span-6 flex flex-col items-start text-left z-10">
            <p className="text-[#C58B12] text-xs sm:text-sm font-extrabold tracking-[0.12em] uppercase mb-4">
              LEGAL COMMUNITY
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-extrabold text-[#222222] leading-[1.12] tracking-tight mb-4">
              Join people solving <br />
              real legal problems.
            </h1>
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-semibold text-[#6B6B6B] leading-[1.18] tracking-tight mb-8 sm:mb-10">
              Across live discussions <br />
              and expert guidance.
            </h2>
            <a 
              href="#communities"
              className="inline-block bg-[#2C2520] text-white text-center px-8 py-4 rounded-[8px] font-semibold text-base shadow-[0_6px_20px_rgba(44,37,32,0.15)] hover:bg-[#1C1714] hover:shadow-[0_8px_24px_rgba(44,37,32,0.22)] hover:translate-y-[-2px] active:translate-y-[0px] active:shadow-[0_4px_12px_rgba(44,37,32,0.15)] transition-all duration-300"
            >
              Join the Community
            </a>
          </div>

          {/* Right Column: Dynamic Visual Mockup with Layered Stack */}
          <div className="lg:col-span-6 relative w-full h-[360px] sm:h-[450px] lg:h-auto flex justify-end lg:justify-end mt-12 lg:mt-0 z-0">
            
            {/* Ambient Background Glow (Desktop only) */}
            <div className="hidden lg:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.08)_0%,transparent_65%)] rounded-full blur-3xl pointer-events-none -z-10" />

            {/* Main Photographic Frame - Right Aligned on mobile, centered/right on desktop */}
            <div className="absolute right-0 top-10 lg:relative lg:top-0 w-[58%] lg:w-full max-w-[280px] lg:max-w-[420px] aspect-[3.8/5] lg:aspect-[4/5] bg-white rounded-[20px] lg:rounded-[24px] overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.05)] lg:shadow-[0_12px_40px_rgba(0,0,0,0.06)] border border-gray-100/50 z-0">
              <Image
                src="/hero_community.jpg"
                alt="Legal Community Consultation"
                fill
                priority
                sizes="(max-w-1024px) 280px, 420px"
                className="object-cover object-right sm:object-center transform hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>

            {/* Overlapping Live Discussions Stack Wrapper */}
            <div className="absolute left-0 top-0 lg:left-[35px] lg:top-[2%] xl:left-[60px] xl:top-[0%] w-[70%] sm:w-[60%] lg:w-[310px] z-20">
              
              {/* ========================================================================= */}
              {/* MOBILE LAYOUT (lg:hidden): 4 Separate floating containers with Green Text */}
              {/* ========================================================================= */}
              <div className="flex lg:hidden flex-col gap-2.5 w-full">
                {/* Card 1: Header */}
                <div className="bg-[#342A22] text-white p-3.5 flex justify-between items-center rounded-[12px] shadow-[0_8px_25px_rgba(44,37,32,0.18)] hover:translate-y-[-2px] transition-transform duration-300">
                  <div className="flex flex-col text-left">
                    <h4 className="font-bold text-xs sm:text-sm tracking-tight leading-none text-white">
                      Live Legal Discussions
                    </h4>
                    <p className="text-[9px] sm:text-xs text-[#C4BDB6] font-normal mt-1 leading-snug max-w-[120px] sm:max-w-[180px]">
                      Real-time questions and answers from the community
                    </p>
                  </div>
                  <div className="flex flex-col items-end text-right ml-2 shrink-0">
                    <span className="text-xl sm:text-2xl font-extrabold text-[#DCA03E] leading-none">
                      312
                    </span>
                    <span className="text-[7px] sm:text-[9px] text-[#DCA03E] font-bold uppercase tracking-wider mt-1 block whitespace-nowrap">
                      Members Online
                    </span>
                  </div>
                </div>

                {/* Cards 2, 3, & 4: Separate Row Cards */}
                {onlineDiscussions.map((discussion) => (
                  <div
                    key={discussion.category}
                    className="flex justify-between items-center py-3 px-4 bg-[#EBE6DC] text-[#4A3F35] rounded-[12px] shadow-[0_6px_20px_rgba(44,37,32,0.06)] border border-[#DCD6C8]/20 hover:bg-[#E4DEC9] hover:translate-y-[-2px] hover:translate-x-[2px] transition-all duration-300 cursor-pointer"
                  >
                    <span className="font-semibold text-xs sm:text-sm text-[#4A3F35] text-left">
                      {discussion.category}
                    </span>
                    <span className="font-bold text-xs sm:text-sm text-[#DCA03E] shrink-0 ml-4">
                      {discussion.mobileCount}
                    </span>
                  </div>
                ))}
              </div>

              {/* ========================================================================= */}
              {/* DESKTOP LAYOUT (hidden lg:flex): 4 Separate floating containers with Gold Text */}
              {/* ========================================================================= */}
              <div className="hidden lg:flex flex-col gap-3.5 w-full">
                {/* Card 1: Header */}
                <div className="bg-[#342A22] text-white p-5 flex justify-between items-center rounded-[14px] shadow-[0_12px_30px_rgba(44,37,32,0.18)] hover:translate-y-[-2px] transition-transform duration-300">
                  <div className="flex flex-col text-left">
                    <h4 className="font-bold text-base tracking-tight leading-none text-white">
                      Live Legal Discussions
                    </h4>
                    <p className="text-xs text-[#C4BDB6] font-normal mt-1 leading-snug max-w-[180px]">
                      Real-time questions and answers from the community
                    </p>
                  </div>
                  <div className="flex flex-col items-end text-right ml-2 shrink-0">
                    <span className="text-[30px] font-extrabold text-[#DCA03E] leading-none">
                      312
                    </span>
                    <span className="text-[9px] text-[#DCA03E] font-medium uppercase tracking-wider mt-1 block whitespace-nowrap">
                      Members Online
                    </span>
                  </div>
                </div>

                {/* Cards 2, 3, & 4: Category Rows as separate containers */}
                {onlineDiscussions.map((discussion) => (
                  <div
                    key={discussion.category}
                    className="group flex justify-between items-center py-4.5 px-5 bg-[#EBE6DC] text-[#4A3F35] rounded-[14px] shadow-[0_8px_24px_rgba(44,37,32,0.08)] border border-[#DCD6C8]/20 hover:bg-[#E4DEC9] hover:translate-y-[-2px] hover:translate-x-[2px] transition-all duration-300 cursor-pointer"
                  >
                    <span className="font-semibold text-sm text-[#4A3F35] text-left group-hover:translate-x-1.5 transition-transform duration-300">
                      {discussion.category}
                    </span>
                    <span className="font-bold text-sm text-[#C58B12] shrink-0 ml-4">
                      {discussion.desktopCount}
                    </span>
                  </div>
                ))}
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
