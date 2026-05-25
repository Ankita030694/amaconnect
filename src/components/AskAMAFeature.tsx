"use client";

import Image from "next/image";

export default function AskAMAFeature() {
  return (
    <section className="w-full bg-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-t border-gray-100/50">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        {/* Ask AMA Header Section */}
        <div className="w-full flex flex-col items-start mb-12 animate-fade-in-up">


          {/* Heading */}
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#2D2219] leading-[1.1] tracking-tight mb-6">
            Ask legal questions. <br />
            Get answers in 45 minutes.
          </h2>

          {/* Description */}
          <p className="text-gray-600 font-medium text-sm sm:text-base lg:text-lg max-w-2xl leading-relaxed">
            Post your legal questions anonymously and receive trusted guidance from experienced experts, quick, simple, and stress-free.
          </p>
        </div>

        {/* Feature Grid Container */}
        <div className="w-full bg-[#F8F8F6] rounded-[2rem] p-6 sm:p-12 lg:px-16 shadow-sm border border-gray-100/70 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16 overflow-hidden relative">
          
          {/* Subtle glow effect */}
          <div className="absolute top-0 right-0 w-64 h-64 pointer-events-none opacity-20 bg-[radial-gradient(circle_at_70%_20%,rgba(199,145,22,0.1),transparent_70%)]" />

          {/* Left Column: Mobile phone Mockup (Top-aligned half mockup, cut off at the bottom) */}
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

            {/* Feature Value Props */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full border-t border-gray-200/50 pt-8">
              
              {/* Feature 1: Expert Answers */}
              <div className="flex flex-col items-start group">
                <div className="mb-4 p-2 bg-[#C79116]/10 rounded-xl group-hover:scale-110 transition-transform duration-300">
                  {/* Lawyer/Expert silhouette SVG */}
                  <svg className="w-8 h-8 text-[#C79116]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 11.25V13.5m0 0L10.5 12m1.5 1.5 1.5-1.5" />
                  </svg>
                </div>
                <h4 className="text-[#2D2219] text-base sm:text-lg font-bold mb-2">Expert Answers</h4>
                <p className="text-gray-500 text-xs sm:text-sm font-medium leading-relaxed">
                  Receive quick guidance and verified answers from experienced professionals.
                </p>
              </div>

              {/* Feature 2: Fast Responses */}
              <div className="flex flex-col items-start group">
                <div className="mb-4 p-2 bg-[#EA4335]/10 rounded-xl group-hover:scale-110 transition-transform duration-300">
                  {/* Winged Stopwatch/Clock SVG */}
                  <svg className="w-8 h-8 text-[#EA4335]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18.75 12h3.75m-22.5 0h3.75M12 1.5v3.75" />
                  </svg>
                </div>
                <h4 className="text-[#2D2219] text-base sm:text-lg font-bold mb-2">Fast Responses</h4>
                <p className="text-gray-500 text-xs sm:text-sm font-medium leading-relaxed">
                  Get legal clarity within 45 minutes, directly through the AMA Connect app.
                </p>
              </div>

            </div>
          </div>
        </div>

        {/* CTA & Download Sub-Section */}
        <div className="w-full flex flex-col items-center text-center max-w-2xl mb-16 animate-fade-in-up">
          <h3 className="text-2xl sm:text-4xl font-extrabold text-[#2D2219] leading-[1.2] tracking-tight mb-4">
            Real people. Real legal questions. Real answers.
          </h3>
          
          <p className="text-gray-600 font-medium text-xs sm:text-sm lg:text-base leading-relaxed mb-8 max-w-lg">
            Download AMA Connect and connect with experts who help you understand your legal rights with confidence.
          </p>

          {/* Unified App Store/Play Store download pill button */}
          <div className="inline-flex items-center bg-[#2B2421] text-white rounded-full py-2 sm:py-2.5 px-6 sm:px-8 shadow-[0_8px_30px_rgb(43,36,33,0.15)] hover:shadow-[0_12px_40px_rgb(43,36,33,0.25)] hover:scale-[1.02] transition-all duration-300 gap-3 sm:gap-4 select-none">
            <span className="font-bold text-xs sm:text-sm tracking-wider uppercase mr-1">Get the App</span>
            
            <div className="w-[1px] h-5 bg-white/20" />
            
            {/* Google Play Store logo link */}
            <a 
              href="https://play.google.com/store/apps/details?id=com.ama.ama_legal_solutions&pcampaignid=web_share"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1 hover:scale-115 active:scale-95 transition-all duration-200"
              title="Download on Google Play Store"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24">
                <path
                  d="M3.25 1.55a1.73 1.73 0 0 0-.47 1.22v18.46a1.73 1.73 0 0 0 .47 1.22l.06.06L13.88 12v-.15L3.31 1.5z"
                  fill="#00F0FF"
                />
                <path
                  d="M17.41 15.58L13.88 12v-.15L17.41 8.3l.08.05 4.17 2.37c1.19.67 1.19 1.78 0 2.46l-4.17 2.37-.08.03z"
                  fill="#FFC700"
                />
                <path
                  d="M17.49 15.53L13.88 11.92L3.25 22.45a1.44 1.44 0 0 0 1.83.06l12.41-7.07"
                  fill="#FF003F"
                />
                <path
                  d="M17.49 8.35L5.08 1.28A1.44 1.44 0 0 0 3.25 1.34L13.88 11.93l3.61-3.58"
                  fill="#00E676"
                />
              </svg>
            </a>
            
            <div className="w-[1px] h-5 bg-white/20" />
            
            {/* Apple App Store logo link */}
            <a 
              href="https://apps.apple.com/in/app/ama-legal-solutions/id6755156186"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1 hover:scale-115 active:scale-95 transition-all duration-200 text-white fill-current"
              title="Download on Apple App Store"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 sm:w-6 sm:h-6 fill-white">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 4.17c.66-.81 1.11-1.93.99-3.06-.96.04-2.13.64-2.82 1.45-.6.69-1.12 1.83-.98 2.94 1.07.08 2.15-.52 2.81-1.33z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Featured In Ribbon (Replicating footer styling & assets perfectly) */}
        <div className="w-full max-w-4xl">
          <div className="bg-[#F8F8F6] rounded-2xl sm:rounded-[1.5rem] p-6 sm:p-8 border border-gray-100 flex flex-col items-center">
            <h4 className="text-sm sm:text-base font-bold text-gray-500 uppercase tracking-widest mb-6">
              As Featured In
            </h4>
            <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-12 w-full opacity-80 select-none">
              <div className="relative h-12 w-28 sm:w-36 grayscale hover:grayscale-0 transition-all duration-300">
                <Image 
                  src="/media/barandbench.png" 
                  alt="Bar & Bench" 
                  fill
                  className="object-contain"
                />
              </div>
              <div className="relative h-12 w-20 sm:w-28 grayscale hover:grayscale-0 transition-all duration-300">
                <Image 
                  src="/media/livemint.png" 
                  alt="Mint" 
                  fill
                  className="object-contain"
                />
              </div>
              <div className="relative h-12 w-24 sm:w-32 grayscale hover:grayscale-0 transition-all duration-300">
                <Image 
                  src="/media/medium.png" 
                  alt="Medium" 
                  fill
                  className="object-contain"
                />
              </div>
              <div className="relative h-12 w-24 sm:w-32 grayscale hover:grayscale-0 transition-all duration-300">
                <Image 
                  src="/media/yourstory.png" 
                  alt="YourStory" 
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
