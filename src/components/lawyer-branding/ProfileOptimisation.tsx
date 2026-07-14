import React from "react";

export default function ProfileOptimisation({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Section 6
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D2219] mt-3 mb-4 tracking-tight">
            Advocate Profile Optimization Checklist
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed mb-6 text-justify">
            A well-structured digital profile acts as your primary introduction to potential clients. Optimization ensures your profile is highly visible, clearly communicates your specific domains, and helps clients understand how you can assist them. Follow this checklist to maximize your online impact.
          </p>
        </div>

        <div className="bg-[#FAF9F5] border border-gray-150 rounded-3xl p-6 sm:p-8">
          <h3 className="text-lg font-bold text-[#2D2219] mb-4">
            Key Profile Optimization Steps
          </h3>
          <ul className="space-y-4">
            {[
              {
                title: "1. Detailed Practice Areas",
                desc: "Clearly list your primary domains (e.g. Criminal Law, RERA Compliance, Family Law) with specific details rather than generic categories. This ensures matching algorithms connect you with the right leads."
              },
              {
                title: "2. Highlight Credentials and Experience",
                desc: "Include accurate details about your academic background, years of experience in the courts, landmark cases handled (without violating confidentiality), and bar association memberships."
              },
              {
                title: "3. Professional Headshot",
                desc: "Use a clean, professional headshot in formal attire to establish trust. Avoid casual crop-outs or low-resolution images, as they reduce profile credibility."
              },
              {
                title: "4. Engage in Legal Q&A",
                desc: "Actively answer user queries on the platform. Providing helpful, objective, and clear general advice demonstrates your expertise and encourages users to seek formal consultations."
              }
            ].map((step, idx) => (
              <li key={idx} className="flex gap-4">
                <span className="text-[#D4AF37] text-lg font-bold leading-none">&#10003;</span>
                <div>
                  <h4 className="text-sm font-bold text-[#2D2219] mb-1">{step.title}</h4>
                  <p className="text-xs text-gray-600 leading-relaxed">{step.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
