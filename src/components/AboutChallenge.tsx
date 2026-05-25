"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

export default function AboutChallenge() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Bind the scroll progress calculation to the scroll-track container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const fullText =
    "Finding trusted legal help, tracking case updates, and getting clear answers across different platforms makes the legal process confusing and stressful. AMA Connect brings everything into one simple legal support platform.";

  const words = fullText.split(" ");

  return (
    <section ref={containerRef} className="relative w-full h-[220vh] bg-white">
      {/* Sticky Content Viewport: Pins the text in the screen center while scrolling */}
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8">
        


        {/* Text Scrubbing Block */}
        <div className="max-w-5xl mx-auto flex flex-wrap justify-center text-center">
          <p className="text-[22px] sm:text-[34px] lg:text-[40px] leading-[1.35] tracking-tight font-extrabold text-center select-none flex flex-wrap justify-center gap-x-[0.25em] gap-y-[0.1em] max-w-4xl">
            {words.map((word, i) => {
              // progressive timeline mapping for word-by-word reveal
              const start = i / words.length;
              const end = (i + 1.25) / words.length; // slight overlap for a smoother visual wave
              
              return (
                <Word
                  key={i}
                  word={word}
                  progress={scrollYProgress}
                  start={start}
                  end={end}
                />
              );
            })}
          </p>
        </div>
      </div>
    </section>
  );
}

interface WordProps {
  word: string;
  progress: MotionValue<number>;
  start: number;
  end: number;
}

function Word({ word, progress, start, end }: WordProps) {
  // Transforms the vertical scroll percentage into a horizontal width percentage
  const width = useTransform(progress, [start, end], ["0%", "100%"]);

  return (
    <span className="relative inline-block font-sans">
      {/* Background (Initial) color: Quiet warm-grey */}
      <span className="text-[#E2E0DD] font-extrabold">
        {word}
      </span>
      
      {/* Foreground (Revealed) color: Elegant deep espresso brown */}
      <motion.span
        style={{ width }}
        className="absolute top-0 left-0 text-[#2D2219] font-extrabold overflow-hidden whitespace-nowrap select-none"
      >
        {word}
      </motion.span>
    </span>
  );
}
