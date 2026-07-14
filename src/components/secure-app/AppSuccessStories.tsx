import React from "react";

export default function AppSuccessStories({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
      <div className="w-full">
        <div className="text-left mb-10">
          <h2 className="text-xl sm:text-2xl font-extrabold text-[#2D2219] tracking-tight mb-4">
            Real Users, Real Resolutions
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed text-justify">
            Over 50,000 Indians have used the AMAConnect app to navigate complex legal challenges without ever stepping foot in a physical law office. Here are a few examples of how our digital-first approach accelerates justice.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
            <div className="flex items-center gap-2 mb-4 text-[#D4AF37]">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg key={star} width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              ))}
            </div>
            <p className="text-sm text-gray-600 leading-relaxed mb-6 italic">
              "I was dealing with a severe property dispute back in my hometown while working in Dubai. Traveling back for every consultation was impossible. Through the AMAConnect app, I found a top property lawyer in my hometown. We reviewed all the ancestral deeds via the secure document vault, and he filed the injunction on my behalf. Total lifesaver."
            </p>
            <div>
              <p className="font-bold text-[#2D2219] text-sm">Vikram R.</p>
              <p className="text-xs text-gray-400">NRI Property Dispute</p>
            </div>
          </div>

          <div className="bg-[#FAF8F5] rounded-3xl p-8 border border-[#D4AF37]/20">
            <div className="flex items-center gap-2 mb-4 text-[#D4AF37]">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg key={star} width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              ))}
            </div>
            <p className="text-sm text-gray-600 leading-relaxed mb-6 italic">
              "As a female entrepreneur, discovering my co-founder was embezzling funds was terrifying. I needed discreet legal advice before making any moves. I booked a late-night consultation through the app. The encrypted chat feature gave me the confidence to share sensitive financial screenshots knowing there would be no digital trace left on my normal phone apps."
            </p>
            <div>
              <p className="font-bold text-[#2D2219] text-sm">Priyanka S.</p>
              <p className="text-xs text-gray-400">Corporate Litigation</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
