"use client";

import React from "react";

export default function SuccessStoriesGrid() {
  const testimonialText = "After months of not receiving my salary, I finally took legal action. With the right guidance, I sent a legal notice and recovered my full payment within weeks.";
  const testimonialAuthor = "Rohit Sharma, Software Engineer";

  const TextCard = () => (
    <div className="bg-[#EFECE5] rounded-2xl p-6 sm:p-8 flex flex-col justify-between h-full min-h-[300px]">
      <p className="text-[#2b2b2b] text-lg sm:text-xl font-medium leading-relaxed">
        "{testimonialText}"
      </p>
      <p className="text-sm text-gray-500 font-medium mt-12">
        {testimonialAuthor}
      </p>
    </div>
  );

  const ImagePlaceholderCard = ({ className = "" }: { className?: string }) => (
    <div className={`bg-[#FCA5A5] rounded-2xl w-full h-full min-h-[300px] ${className}`}></div>
  );

  return (
    <section className="w-full bg-white py-6 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
        {/* Row 1 */}
        <div className="col-span-1">
          <TextCard />
        </div>
        <div className="col-span-1 md:col-span-2">
          <ImagePlaceholderCard />
        </div>

        {/* Row 2 */}
        <div className="col-span-1">
          <TextCard />
        </div>
        <div className="col-span-1">
          <TextCard />
        </div>
        <div className="col-span-1">
          <TextCard />
        </div>

        {/* Row 3 */}
        <div className="col-span-1 md:col-span-2">
          <ImagePlaceholderCard />
        </div>
        <div className="col-span-1">
          <TextCard />
        </div>

        {/* Row 4 */}
        <div className="col-span-1">
          <TextCard />
        </div>
        <div className="col-span-1">
          <TextCard />
        </div>
        <div className="col-span-1">
          <TextCard />
        </div>
      </div>

      <div className="mt-16 text-center">
        <a href="#share-story" className="inline-block text-[#D4AF37] font-semibold tracking-widest text-sm uppercase hover:text-yellow-600 transition-colors">
          SHARE YOUR STORY
        </a>
      </div>
    </section>
  );
}
