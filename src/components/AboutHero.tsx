import Image from "next/image";
const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.ama.ama_legal_solutions&pcampaignid=web_share";
const APP_STORE_URL =
  "https://apps.apple.com/in/app/ama-legal-solutions/id6755156186";

export default function AboutHero() {
  return (
    <section className="relative w-full bg-white overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-[52px] pb-12 sm:pb-16 flex flex-col items-center text-center">
        {/* Social proof / trust badge */}
        <Image
          src="/reviews.svg"
          alt="4.6 out of 5 stars — 5K+ downloads"
          width={275}
          height={56}
          className="h-[46px] sm:h-[56px] w-auto mb-6 sm:mb-8"
          priority
        />

        {/* Main headline */}
        <h1 className="text-[2rem] sm:text-5xl lg:text-[3.25rem] font-extrabold text-[#2D2219] leading-[1.12] tracking-tight mb-5 sm:mb-6 max-w-3xl">
          India&apos;s Smarter Way to Get
          <br />
          Legal Help
        </h1>

        {/* Subheadline */}
        <p className="text-gray-600 font-normal text-base sm:text-lg leading-relaxed max-w-2xl mb-8 sm:mb-10">
          From asking legal questions to connecting with lawyers, AMA Connect simplifies
          legal support through one powerful app.
        </p>

        {/* CTA — pill button with store icons */}
        <div className="inline-flex items-center bg-[#2D2219] text-white rounded-full py-3 sm:py-3.5 px-6 sm:px-8 shadow-[0_8px_28px_rgba(45,34,25,0.18)] hover:shadow-[0_12px_36px_rgba(45,34,25,0.26)] hover:scale-[1.02] transition-all duration-300 gap-3 sm:gap-4 select-none mb-12 sm:mb-14">
          <span className="font-bold text-sm sm:text-base tracking-wide whitespace-nowrap">
            Get the App
          </span>

          <div className="w-px h-5 sm:h-6 bg-white/25 shrink-0" aria-hidden />

          <a
            href={PLAY_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="p-0.5 hover:scale-110 active:scale-95 transition-transform"
            title="Download on Google Play"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" aria-hidden>
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

          <div className="w-px h-5 sm:h-6 bg-white/25 shrink-0" aria-hidden />

          <a
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="p-0.5 hover:scale-110 active:scale-95 transition-transform text-white"
            title="Download on the App Store"
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5 sm:w-6 sm:h-6 fill-white" aria-hidden>
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 4.17c.66-.81 1.11-1.93.99-3.06-.96.04-2.13.64-2.82 1.45-.6.69-1.12 1.83-.98 2.94 1.07.08 2.15-.52 2.81-1.33z" />
            </svg>
          </a>
        </div>

        {/* Product mockup with warm glow */}
        <div className="relative w-full max-w-[900px] sm:max-w-[1080px] lg:max-w-[1200px]">
          <div
            className="absolute left-1/2 top-[55%] -translate-x-1/2 -translate-y-1/2 w-[120%] h-[75%] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(255,200,60,0.55)_0%,rgba(255,220,120,0.25)_45%,transparent_72%)] blur-2xl pointer-events-none -z-10"
            aria-hidden
          />
          <Image
            src="/about-phone.png"
            alt="Hand holding a smartphone showing the AMA Connect app"
            width={2400}
            height={3000}
            className="w-full h-auto relative z-10"
            priority
          />
        </div>
      </div>
    </section>
  );
}
