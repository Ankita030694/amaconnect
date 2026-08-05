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
    <section className="w-full bg-[#FDFBF7] py-12 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 font-sans">
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
              className="bg-white rounded-3xl p-6 sm:p-8 flex flex-col justify-start text-left h-full transition-all duration-300 hover:shadow-md hover:-translate-y-1 border border-[#EAE5D8]"
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
              <h3 className="text-xl sm:text-[22px] font-bold text-[#2D2219] mb-3 sm:mb-4 leading-tight">
                {step.title}
              </h3>

              {/* Step Description */}
              <p className="text-gray-500 text-sm sm:text-[15px] leading-relaxed font-normal">
                {step.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
