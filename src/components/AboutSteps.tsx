"use client";

import React from "react";
import Image from "next/image";

const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.ama.ama_legal_solutions&pcampaignid=web_share";
const APP_STORE_URL =
  "https://apps.apple.com/in/app/ama-legal-solutions/id6755156186";

interface StepNode {
  number: string;
  title: string;
  description: string;
  src: string;
}

export default function AboutSteps() {
  const steps: StepNode[] = [
    {
      number: "01",
      title: "Download AMA Connect",
      description: "Get the app from the App Store or Google Play and create your free account.",
      src: "/111.png",
    },
    {
      number: "02",
      title: "Ask Your Question",
      description: "Post your legal query anonymously and receive trusted expert answers within 45 minutes.",
      src: "/112.png",
    },
    {
      number: "03",
      title: "Track Your Case",
      description: "Clients can track case updates, progress, and documents securely in one place.",
      src: "/113.png",
    },
    {
      number: "04",
      title: "Connect With Your Lawyer",
      description: "Communicate directly with your lawyer for updates, questions, and legal guidance anytime.",
      src: "/114.png",
    },
  ];

  return (
    <section className="w-full bg-white py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">


        {/* Section Headline */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#2D2219] mb-4 tracking-tight max-w-2xl leading-tight">
          Get legal help in 4 simple steps.
        </h2>

        {/* Section Subtitle */}
        <p className="text-gray-500 text-sm sm:text-base md:text-lg max-w-3xl mx-auto leading-relaxed mb-12 sm:mb-16">
          Download AMA Connect, ask legal questions, track your case,
          <br className="hidden sm:block" /> and stay connected with your lawyer all in one place.
        </p>

        {/* 4-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 w-full">
          {steps.map((step) => (
            <div
              key={step.title}
              className="bg-[#F8F7F6] rounded-[28px] sm:rounded-[36px] p-6 sm:p-8 flex flex-col justify-start text-left h-full transition-all duration-300 hover:shadow-md hover:scale-[1.01] border border-gray-100/50"
            >
              {/* Icon Badge */}
              <div className="relative w-14 h-14 sm:w-16 sm:h-16 mb-8 flex items-center justify-start">
                <Image
                  src={step.src}
                  alt={`${step.title} icon`}
                  fill
                  className="object-contain"
                  sizes="(max-width: 640px) 56px, 64px"
                  priority
                />
              </div>

              {/* Step Headline */}
              <h3 className="text-xl sm:text-[22px] font-extrabold text-[#2D2219] mb-3 sm:mb-4 leading-tight">
                {step.title}
              </h3>

              {/* Step Description */}
              <p className="text-[#78716C] text-sm sm:text-[15px] leading-relaxed font-normal">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA Button */}
        <div className="mt-12 sm:mt-16 flex justify-center w-full">
          <div className="inline-flex items-center bg-[#2D2219] text-white rounded-full py-3 sm:py-3.5 px-6 sm:px-8 shadow-[0_8px_28px_rgba(45,34,25,0.18)] hover:shadow-[0_12px_36px_rgba(45,34,25,0.26)] hover:scale-[1.02] transition-all duration-300 gap-3 sm:gap-4 select-none">
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
        </div>
      </div>
    </section>
  );
}
