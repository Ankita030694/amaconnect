"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { communities } from "@/data/communities";
import TopLawyerStories from "./TopLawyerStories";

function HeroCommunityOrbit() {
  // 5 community buttons mapped to positions along the right arc (semi-circle)
  const buttons = [
    {
      label: "Join Property Help",
      link: communities[3]?.link || "#",
      left: "28.3%",
      top: "6.9%"
    },
    {
      label: "Join Family Law Help",
      link: communities[0]?.link || "#",
      left: "57.8%",
      top: "19.5%"
    },
    {
      label: "Join IPR & Trademark",
      link: communities[1]?.link || "#",
      left: "70.0%",
      top: "50.0%"
    },
    {
      label: "Join Corporate Network",
      link: communities[2]?.link || "#",
      left: "57.8%",
      top: "80.5%"
    },
    {
      label: "Join Drafting Help",
      link: communities[4]?.link || "#",
      left: "28.3%",
      top: "93.1%"
    },
  ];

  return (
    <>
      {/* ── Desktop Layout: Golden thick segmented semi-circle (right facing) ── */}
      <div className="hidden lg:block relative w-full max-w-[540px] lg:max-w-[540px] xl:max-w-[594px] aspect-[600/580] lg:h-[522px] lg:w-[540px] xl:w-[594px] select-none overflow-visible lg:ml-[-60px] xl:ml-[-120px] transition-all duration-300">

        {/* Golden semi-circle SVG */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <svg viewBox="0 0 600 580" className="w-full h-full drop-shadow-[0_12px_32px_rgba(180,130,20,0.3)]">
            <defs>
              <linearGradient id="heroGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#E8A810" />
                <stop offset="30%" stopColor="#F5C024" />
                <stop offset="60%" stopColor="#D4A00E" />
                <stop offset="100%" stopColor="#9A7005" />
              </linearGradient>
            </defs>

            {/* Subtle gold glow path underneath */}
            <path
              d="M 170 40 A 250 250 0 0 1 170 540"
              stroke="url(#heroGoldGrad)"
              strokeWidth="64"
              fill="none"
              className="opacity-20 blur-md"
            />

            {/* Main segmented semi-circle path */}
            <path
              d="M 170 40 A 250 250 0 0 1 170 540"
              stroke="url(#heroGoldGrad)"
              strokeWidth="48"
              fill="none"
              strokeLinecap="round"
              strokeDasharray="100 60"
            />
          </svg>
        </div>

        {/* Phone mockup — placed flush to left edge, full height */}
        <div className="absolute left-0 top-0 h-full w-[47%] z-20 overflow-visible">
          <div className="relative w-full h-full">
            <Image
              src="/Chat.svg"
              alt="AMA Connect WhatsApp community chat mockup"
              fill
              className="object-contain object-left drop-shadow-[0_25px_60px_rgba(0,0,0,0.4)]"
              priority
            />
          </div>
        </div>

        {/* Five pill-shaped WhatsApp join buttons placed on the 5 sections */}
        <div className="absolute inset-0 z-30 pointer-events-none">
          {buttons.map((btn, i) => (
            <a
              key={i}
              href={btn.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{ left: btn.left, top: btn.top }}
              className="absolute -translate-x-1/2 -translate-y-1/2 flex items-center gap-2.5 bg-[#2D2219] hover:bg-[#3d3026] text-white py-2.5 lg:py-3 px-5 lg:px-6 rounded-full shadow-[0_6px_20px_rgba(0,0,0,0.35)] hover:shadow-[0_10px_28px_rgba(37,211,102,0.3)] hover:scale-[1.05] transition-all duration-300 active:scale-[0.97] cursor-pointer whitespace-nowrap pointer-events-auto border border-[#E8A810]/20 hover:border-[#E8A810]/40"
            >
              {/* WhatsApp icon */}
              <svg className="w-4 h-4 lg:w-5 lg:h-5 shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="12" fill="#25D366" />
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.705 1.459h.006c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" fill="white" transform="scale(0.55) translate(9.5, 9.5)" />
              </svg>
              <span className="text-[11px] xl:text-[13px] font-bold tracking-wide leading-none">
                {btn.label}
              </span>
            </a>
          ))}
        </div>
      </div>

      {/* ── Mobile/Tablet Layout: Clean, thumb-friendly side-by-side or stacked list ── */}
      <div className="flex lg:hidden items-center justify-center gap-3 min-[400px]:gap-4 sm:gap-8 md:gap-12 w-full max-w-[480px] sm:max-w-[580px] mx-auto select-none py-2 sm:py-4 overflow-visible">

        {/* Phone mockup */}
        <div className="w-[80px] min-[400px]:w-[110px] sm:w-[150px] md:w-[180px] aspect-[9/19] shrink-0 relative">
          <Image
            src="/Chat.svg"
            alt="AMA Connect WhatsApp community chat mockup mobile"
            fill
            className="object-contain drop-shadow-[0_12px_32px_rgba(0,0,0,0.25)]"
            priority
          />
        </div>

        {/* Stack of 5 premium WhatsApp join buttons */}
        <div className="flex flex-col gap-2 min-[400px]:gap-3 sm:gap-4 flex-1 justify-center max-w-[200px] min-[400px]:max-w-[240px] sm:max-w-[280px]">
          {buttons.map((btn, i) => (
            <a
              key={i}
              href={btn.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#2D2219] hover:bg-[#3d3026] text-white py-2 min-[400px]:py-2.5 px-3 min-[400px]:px-4 sm:px-5 rounded-full shadow-[0_4px_12px_rgba(0,0,0,0.25)] hover:shadow-[0_6px_16px_rgba(37,211,102,0.25)] hover:scale-[1.03] transition-all duration-300 active:scale-[0.97] cursor-pointer whitespace-nowrap border border-[#E8A810]/15 hover:border-[#E8A810]/30"
            >
              {/* WhatsApp icon */}
              <svg className="w-4 h-4 sm:w-4.5 sm:h-4.5 shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="12" fill="#25D366" />
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.705 1.459h.006c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" fill="white" transform="scale(0.55) translate(9.5, 9.5)" />
              </svg>
              <span className="text-[9px] min-[400px]:text-[10px] sm:text-[11.5px] font-bold tracking-wide leading-none">
                {btn.label}
              </span>
            </a>
          ))}
        </div>
      </div>
    </>
  );
}

/** Shared layout tokens */
const HERO_SLIDE_GRID =
  "grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center w-full h-full";
const HERO_LEFT_COLUMN =
  "lg:col-span-6 xl:col-span-7 order-2 lg:order-1 flex lg:justify-start items-center w-full overflow-visible";
const HERO_VISUAL_PANEL =
  "w-full max-w-[380px] sm:max-w-[480px] lg:max-w-[580px] xl:max-w-[660px] h-[280px] sm:h-[320px] md:h-[360px] lg:h-[400px] xl:h-[420px] relative mx-auto shrink-0";
const HERO_TEXT_COLUMN =
  "lg:col-span-6 xl:col-span-5 order-1 lg:order-2 flex flex-col justify-center text-left max-w-2xl mx-auto lg:mx-0 lg:pl-4 xl:pl-8";

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const totalSlides = 3;

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused, totalSlides]);

  // Updated slide colors to match their new positions
  const slides = [
    { id: 0, bg: "bg-white" },       // Interviews
    { id: 1, bg: "bg-[#FDFBF0]" },   // App
    { id: 2, bg: "bg-[#F8F8F6]" }    // Community
  ];

  return (
    <section
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className={`relative w-full overflow-hidden pt-12 sm:pt-24 lg:pt-28 pb-12 sm:pb-20 lg:pb-24 px-4 sm:px-6 lg:px-8 flex items-center justify-center transition-all duration-700 ease-in-out min-h-[660px] sm:min-h-[580px] lg:h-[580px] lg:max-h-[580px] ${slides[currentSlide].bg}`}
    >
      {/* Background Graphic for the App Slide (now Slide 2, which is index 1) */}
      <div
        className={`absolute inset-0 z-0 select-none pointer-events-none overflow-hidden transition-opacity duration-700 ease-in-out hidden lg:block ${currentSlide === 1 ? "opacity-100" : "opacity-0"
          }`}
      >
        <Image
          src="/3rdslidee.svg"
          alt="AMA Connect Slide 3 Graphic Background edge-to-edge"
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-20 h-full flex items-center">

        {/* NEW SLIDE 1 (Index 0): Interviews heading + Top Lawyer Stories */}
        <div
          className={`w-full h-full transition-all duration-700 ease-in-out ${currentSlide === 0
            ? "opacity-100 translate-x-0 relative pointer-events-auto scale-100 z-10"
            : "opacity-0 absolute inset-0 pointer-events-none scale-[0.98] -translate-x-4 z-0"
            }`}
        >
          <div className="w-full h-full min-h-0 flex flex-col gap-3 sm:gap-4 lg:gap-5 mt-0 lg:-mt-14">
            <div className="shrink-0 grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6 items-start lg:items-end">
              <div className="lg:col-span-8 text-left">
                <span className="text-[#C79116] font-bold uppercase tracking-[0.15em] text-xs sm:text-sm lg:text-[14px] mb-1.5 sm:mb-2 block opacity-90">
                  AMA Connect Interviews
                </span>
                <h2 className="text-xl sm:text-2xl lg:text-[28px] xl:text-[34px] font-extrabold text-[#2D2219] leading-tight mb-1 sm:mb-1.5 tracking-tight">
                  Beyond Legal Advice. Real Legal Conversations.
                </h2>
                <p className="text-gray-500 font-medium text-xs sm:text-sm lg:text-[13px] leading-relaxed max-w-xl">
                  Watch exclusive lawyer interviews—or nominate a legal professional you want featured next.
                </p>
              </div>

              <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-2 sm:gap-3 lg:items-end lg:justify-end">
                <Link
                  href="/contact?reason=Suggest%20a%20Professional%20Interview"
                  className="inline-flex items-center justify-center gap-2 bg-[#2D2219] hover:bg-[#423327] text-white font-bold px-5 sm:px-7 py-2.5 sm:py-3 rounded-full shadow-[0_4px_14px_0_rgba(45,34,25,0.2)] hover:shadow-[0_6px_20px_0_rgba(45,34,25,0.35)] hover:scale-[1.03] transition-all duration-300 active:scale-[0.98] text-xs sm:text-sm tracking-wide whitespace-nowrap"
                >
                  <span>Suggest an Interview</span>
                  <svg className="w-4 h-4 stroke-current shrink-0" fill="none" viewBox="0 0 24 24" aria-hidden>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 4v16m8-8H4" />
                  </svg>
                </Link>
                <Link
                  href="/interviews"
                  className="inline-flex items-center justify-center gap-2 text-[#2D2219] font-bold px-5 sm:px-7 py-2.5 sm:py-3 rounded-full border border-[#2D2219]/15 hover:border-[#2D2219]/30 hover:bg-[#FDFBF7] transition-all duration-300 text-xs sm:text-sm tracking-wide whitespace-nowrap"
                >
                  <span>View All Interviews</span>
                </Link>
              </div>
            </div>

            <div className="w-full mt-2 lg:mt-4">
              <TopLawyerStories variant="hero" className="w-full" />
            </div>
          </div>
        </div>

        {/* NEW SLIDE 2 (Index 1): AMA Connect Legal Aid App Showcase */}
        <div
          className={`w-full h-full transition-all duration-700 ease-in-out ${currentSlide === 1
            ? "opacity-100 translate-x-0 relative pointer-events-auto scale-100 z-10"
            : "opacity-0 absolute inset-0 pointer-events-none scale-[0.98] -translate-x-4 z-0"
            }`}
        >
          {/* Desktop/Mobile Layout: Centered container with right-aligned title & CTA button in the TOP-RIGHT */}
          <div className="relative w-full h-full z-10 grid grid-cols-1 lg:grid-cols-12 items-start gap-8 px-4 sm:px-6 lg:px-8 min-h-[inherit] pt-4 sm:pt-12 lg:pt-14">
            {/* Empty Left Column to let the background graphics show through */}
            <div className="hidden lg:block lg:col-span-7" />

            {/* Mobile-only Phone Mockup: Centered full mockup on mobile */}
            <div className="block lg:hidden w-[120px] min-[400px]:w-[140px] sm:w-[180px] aspect-[9/19] relative shrink-0 mx-auto select-none my-3">
              <Image
                src="/phone.png"
                alt="AMA Connect Phone Mockup Slide 3"
                fill
                className="object-contain"
                priority
              />
            </div>

            {/* Right Column: Hero Text & CTA Store Button - Right Aligned in top right */}
            <div className="col-span-1 lg:col-span-5 flex flex-col justify-start lg:items-end lg:text-right text-center items-center lg:pr-6 xl:pr-10 max-w-[92%] sm:max-w-md lg:max-w-none mx-auto lg:mx-0">

              <h1 className="text-3xl sm:text-4xl lg:text-[42px] xl:text-[48px] font-black text-[#2C2724] leading-[1.15] mb-4 sm:mb-5 tracking-tight">
                India’s First Pro Bono <br />
                Legal Aid App
              </h1>

              <p className="text-[#605C59] font-medium text-xs sm:text-sm lg:text-base xl:text-lg mb-6 sm:mb-8 leading-relaxed max-w-md">
                Get expert legal answers, track cases,<br />
                and connect with lawyers in one platform.
              </p>

              {/* Get the App Store Capsule Button */}
              <div className="mb-4 sm:mb-6">
                <Link
                  href="/#download"
                  className="inline-flex items-center gap-2.5 sm:gap-4 bg-[#25201D] hover:bg-[#322a26] text-white font-semibold py-2.5 sm:py-4 px-4 sm:px-8 rounded-full shadow-[0_8px_20px_rgba(0,0,0,0.12)] hover:scale-[1.02] transition-all duration-300 active:scale-[0.98] text-[11px] sm:text-sm tracking-wide cursor-pointer"
                >
                  <span className="font-bold tracking-wide">Get the App</span>

                  {/* Google Play Icon */}
                  <svg className="w-4.5 h-4.5 sm:w-5 sm:h-5 shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.25 2.875A1.5 1.5 0 0 0 3 3.875v16.25a1.5 1.5 0 0 0 .25 1L12.5 12 3.25 2.875z" fill="#4285F4" />
                    <path d="M12.5 12l3.75-3.75L4.25 3.25a1.5 1.5 0 0 0-1 .375L12.5 12z" fill="#EA4335" />
                    <path d="M16.25 8.25L12.5 12l3.75 3.75L20.25 13a1.5 1.5 0 0 0 0-2l-4-2.75z" fill="#FBBC05" />
                    <path d="M12.5 12L3.25 21.25a1.5 1.5 0 0 0 1 .375l12-5.375L12.5 12z" fill="#34A853" />
                  </svg>

                  {/* Vertical Divider between Play and App Store */}
                  <div className="h-5 w-[1px] bg-white/20 mx-0.5" />

                  {/* Apple Icon */}
                  <svg className="w-4.5 h-4.5 sm:w-5 sm:h-5 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 4.17c.66-.81 1.11-1.93.99-3.06-1 .04-2.22.67-2.94 1.52-.63.74-1.18 1.88-1.03 2.99 1.12.09 2.26-.59 2.98-1.45Z" />
                  </svg>
                </Link>
              </div>

            </div>
          </div>
        </div>

        {/* NEW SLIDE 3 (Index 2): Community */}
        <div
          className={`w-full h-full overflow-visible transition-all duration-700 ease-in-out ${currentSlide === 2
            ? "opacity-100 translate-x-0 relative pointer-events-auto scale-100 z-10"
            : "opacity-0 absolute inset-0 pointer-events-none scale-[0.98] -translate-x-4 z-0"
            }`}
        >
          <div className={HERO_SLIDE_GRID}>

            {/* Left Column: Community chat visual + circular WhatsApp join orbit */}
            <div className={`${HERO_LEFT_COLUMN} overflow-visible mt-0 lg:-mt-20`}>
              <HeroCommunityOrbit />
            </div>

            {/* Right Column: Premium Text & Typography */}
            <div className={HERO_TEXT_COLUMN}>
              <span className="text-[#2D2219] font-bold uppercase tracking-[0.15em] text-xs sm:text-sm lg:text-[14px] mb-3 lg:mb-4 opacity-90">
                AMA Connect Community
              </span>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-[54px] font-extrabold text-[#2D2219] leading-[1.08] mb-4 sm:mb-6 tracking-tight">
                Join the Legal <br className="hidden lg:inline" /> Community That <br className="hidden lg:inline" /> Helps You Grow
              </h1>

              <p className="text-gray-600 font-medium text-xs sm:text-sm lg:text-base xl:text-lg mb-5 leading-relaxed max-w-md lg:max-w-none">
                Real questions, expert answers, trusted legal discussions
              </p>

              {/* WhatsApp CTA Button */}
              <div className="mb-6 sm:mb-8">
                <a
                  href="https://chat.whatsapp.com/EjV3VwKghHi9sJp48CTmTH?mode=gi_t"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:from-[#20ba56] hover:to-[#0e7569] text-white font-bold px-6 sm:px-8 py-3 sm:py-3.5 rounded-full shadow-[0_4px_14px_0_rgba(37,211,102,0.35)] hover:shadow-[0_6px_20px_0_rgba(37,211,102,0.45)] hover:scale-[1.03] transition-all duration-300 active:scale-[0.98] ring-4 ring-[#25D366]/10 hover:ring-[#25D366]/20 text-xs sm:text-sm tracking-wide cursor-pointer"
                >
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 fill-current text-white shrink-0"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.705 1.459h.006c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  <span>Join Community on WhatsApp</span>
                </a>
              </div>

              <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-[#C79116] font-bold text-xs sm:text-sm lg:text-[14px] tracking-[0.2em] uppercase select-none">
                <span className="hover:text-[#A07010] cursor-pointer transition-colors duration-200">Connect</span>
                <span className="text-[#C79116]/50 select-none font-light sm:text-lg">•</span>
                <span className="hover:text-[#A07010] cursor-pointer transition-colors duration-200">Learn</span>
                <span className="text-[#C79116]/50 select-none font-light sm:text-lg">•</span>
                <span className="hover:text-[#A07010] cursor-pointer transition-colors duration-200">Discuss</span>
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* Dynamic Navigation Indicator Dots */}
      <div className="absolute bottom-6 sm:bottom-8 lg:bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-2 z-30">
        {[...Array(totalSlides)].map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2.5 rounded-full transition-all duration-300 ${currentSlide === index
              ? "w-8 bg-[#2D2219]"
              : "w-2.5 bg-[#2D2219]/20 hover:bg-[#2D2219]/40"
              }`}
            aria-label={`Switch to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}