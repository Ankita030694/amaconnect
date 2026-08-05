"use client";

import Image from "next/image";

export default function AskAMAFeature() {
  return (
    <section className="w-full bg-white py-6 px-4 sm:px-6 lg:px-8 border-t border-gray-100/50">
      <div className="max-w-7xl mx-auto flex flex-col items-center">

        {/* Ask AMA Header Section */}
        <div className="w-full flex flex-col items-start mb-12 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#2D2219] leading-tight tracking-tight mb-6">
            Ask legal questions. <br />
            Get answers in 45 minutes.
          </h2>
          <p className="text-gray-600 font-medium text-sm sm:text-base lg:text-lg max-w-2xl leading-relaxed">
            Post your legal questions anonymously and receive trusted guidance from experienced experts, quick, simple, and stress-free.
          </p>
        </div>

        {/* Feature Grid Container */}
        <div className="w-full bg-[#F8F8F6] rounded-[2rem] p-6 sm:p-12 lg:px-16 shadow-sm border border-gray-100/70 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center overflow-hidden relative">

          <div className="absolute top-0 right-0 w-64 h-64 pointer-events-none opacity-20 bg-[radial-gradient(circle_at_70%_20%,rgba(199,145,22,0.1),transparent_70%)]" />

          {/* Left Column: Mobile phone Mockup */}
          <div className="lg:col-span-5 flex justify-center items-start h-[340px] sm:h-[440px] lg:h-[480px] relative overflow-hidden lg:overflow-visible self-start w-full pt-4 lg:pt-0">
            <div className="relative w-full h-[650px] sm:h-[800px] lg:h-[950px] max-w-[340px] sm:max-w-[440px] lg:max-w-[500px] lg:absolute lg:top-4 lg:left-0 transform hover:scale-[1.03] transition-all duration-500 ease-out origin-top select-none">
              <Image
                src="/phone.png"
                alt="AMA Legal App UI"
                fill
                priority
                sizes="(max-width: 640px) 340px, (max-width: 1024px) 440px, 500px"
                className="object-contain object-top select-none"
              />
            </div>
          </div>

          {/* Right Column: Features and Copy */}
          <div className="lg:col-span-7 flex flex-col justify-center py-4 lg:pl-4">
            <h3 className="text-2xl sm:text-4xl font-extrabold text-[#2D2219] leading-[1.2] tracking-tight mb-4">
              Ask legal questions <br className="hidden sm:block" />
              with confidence.
            </h3>

            <p className="text-gray-600 font-medium text-sm sm:text-base leading-relaxed mb-10 max-w-xl">
              Get trusted legal answers from experienced experts within 45 minutes, making legal guidance quick, simple, and stress-free.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full border-t border-gray-200/50 pt-8">
              <div className="flex flex-col items-start group">
                <div className="mb-4 p-2 bg-[#C79116]/10 rounded-xl group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-[#C79116]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 11.25V13.5m0 0L10.5 12m1.5 1.5 1.5-1.5" />
                  </svg>
                </div>
                <h4 className="text-[#2D2219] text-base sm:text-lg font-bold mb-2">Expert Answers</h4>
                <p className="text-gray-600 text-xs sm:text-sm font-medium leading-relaxed">
                  Receive quick guidance and verified answers from experienced professionals.
                </p>
              </div>

              <div className="flex flex-col items-start group">
                <div className="mb-4 p-2 bg-[#EA4335]/10 rounded-xl group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-[#EA4335]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18.75 12h3.75m-22.5 0h3.75M12 1.5v3.75" />
                  </svg>
                </div>
                <h4 className="text-[#2D2219] text-base sm:text-lg font-bold mb-2">Fast Responses</h4>
                <p className="text-gray-600 text-xs sm:text-sm font-medium leading-relaxed">
                  Get legal clarity within 45 minutes, directly through the AMA Connect app.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/*
          Removed from this component:
          1. The duplicate "Real people. Real answers." + Get the App pill —
             CTASection already owns the single app-download CTA for the page.
          2. The "As Featured In" ribbon — moved to its own <FeaturedIn />
             component, now rendered directly after <Hero /> in page.tsx so
             it works as an early trust signal instead of being sandwiched
             between two download pitches.
        */}

      </div>
    </section>
  );
}