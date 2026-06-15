"use client";

import React from "react";

export default function ShareStoryForm() {
  return (
    <section id="share-story" className="w-full bg-white py-20 sm:py-24 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
         
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#2D2219] leading-tight tracking-tight mb-4">
            Have a legal success story to share?
          </h2>
          <p className="text-gray-500 text-base sm:text-lg max-w-xl mx-auto">
            Help others by sharing how you resolved your legal issue.<br className="hidden sm:block" />
            Your story could guide someone facing a similar situation.
          </p>
        </div>

        <form className="max-w-2xl mx-auto space-y-6">
          <div>
            <label htmlFor="name" className="block text-[#1a1a1a] font-medium text-sm mb-2">
              Enter your name
            </label>
            <input
              type="text"
              id="name"
              className="w-full bg-[#F3EFE9] border border-gray-200 rounded-lg px-4 py-3 shadow-[0_2px_4px_rgba(0,0,0,0.05)] focus:outline-none focus:ring-2 focus:ring-[#D4AF37] transition-shadow"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-[#1a1a1a] font-medium text-sm mb-2">
              Enter your email
            </label>
            <input
              type="email"
              id="email"
              className="w-full bg-[#F3EFE9] border border-gray-200 rounded-lg px-4 py-3 shadow-[0_2px_4px_rgba(0,0,0,0.05)] focus:outline-none focus:ring-2 focus:ring-[#D4AF37] transition-shadow"
            />
          </div>

          <div>
            <label htmlFor="issue" className="block text-[#1a1a1a] font-medium text-sm mb-2">
              Describe your legal issue, what action you took, and the outcome
            </label>
            <input
              type="text"
              id="issue"
              className="w-full bg-[#F3EFE9] border border-gray-200 rounded-lg px-4 py-3 shadow-[0_2px_4px_rgba(0,0,0,0.05)] focus:outline-none focus:ring-2 focus:ring-[#D4AF37] transition-shadow"
            />
          </div>

          <div className="pt-4 text-center">
            <button
              type="submit"
              className="bg-[#2E2822] text-white px-10 py-3.5 rounded-lg font-medium hover:bg-black transition-colors shadow-md"
            >
              Submit Your Story
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
