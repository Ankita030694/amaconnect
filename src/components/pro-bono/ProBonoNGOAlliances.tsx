import React from "react";

export default function ProBonoNGOAlliances({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
      <div className="w-full">
        <div className="text-left mb-10">
          <h2 className="text-xl sm:text-2xl font-extrabold text-[#2D2219] tracking-tight mb-4">
            The Advocate Ally Program
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed text-justify">
            A purely digital solution risks excluding those who lack smartphones, internet access, or digital literacy—often the very populations most in need of pro bono assistance. To bridge this divide, AMAConnect partners directly with grassroots NGOs and social workers.
          </p>
        </div>

        <div className="bg-white rounded-3xl border border-[#D4AF37]/20 p-8 shadow-sm">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-full md:w-1/3 flex justify-center">
              <div className="w-32 h-32 bg-[#FAF8F5] rounded-full border-4 border-[#D4AF37]/20 flex items-center justify-center">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
            </div>
            
            <div className="w-full md:w-2/3">
              <h3 className="text-lg font-bold text-[#2D2219] mb-3">Empowering Grassroots Organizations</h3>
              <p className="text-sm text-gray-600 leading-relaxed text-justify mb-4">
                NGO coordinators and registered social workers can apply for an "Advocate Ally" account on our platform. This specialized account allows them to act as a proxy for marginalized individuals.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-[#D4AF37] mt-0.5">✓</span>
                  <span className="text-sm text-gray-600">Submit pro bono applications on behalf of multiple individuals.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#D4AF37] mt-0.5">✓</span>
                  <span className="text-sm text-gray-600">Securely digitize and upload physical documents (FIRs, eviction notices).</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#D4AF37] mt-0.5">✓</span>
                  <span className="text-sm text-gray-600">Facilitate the video consultation using the NGO's devices and internet connection.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
