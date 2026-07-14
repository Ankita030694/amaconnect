import React from "react";

export default function ProBonoEligibility({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
      <div className="w-full">
        
        <div className="text-left mb-10">
          <h2 className="text-xl sm:text-2xl font-extrabold text-[#2D2219] tracking-tight mb-4">
            Who Qualifies for Free Legal Aid?
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed text-justify">
            To ensure that our network's pledged hours are utilized effectively, we employ a strict triage system. Our platform prioritizes cases where a lack of legal intervention would result in immediate, severe harm to the individual's life, liberty, or fundamental means of survival.
          </p>
        </div>

        {/* Eligibility Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full mb-12">
          
          <div className="bg-[#FAF8F5] border border-[#5A4C33]/10 rounded-2xl p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-[#D4AF37]/20 flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <h3 className="font-bold text-base text-[#2D2219]">Marginalized Communities</h3>
            </div>
            <p className="text-sm text-gray-600 text-justify leading-relaxed">
              We provide automatic priority routing for individuals belonging to Scheduled Castes (SC), Scheduled Tribes (ST), and other severely marginalized socioeconomic groups who face systemic discrimination. Cases involving land grabbing, denial of fundamental civic rights, or police harassment are immediately escalated to senior pro bono advocates.
            </p>
          </div>

          <div className="bg-[#FAF8F5] border border-[#5A4C33]/10 rounded-2xl p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-[#D4AF37]/20 flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"></path>
                  <line x1="16" y1="8" x2="2" y2="22"></line>
                  <line x1="17.5" y1="15" x2="9" y2="15"></line>
                </svg>
              </div>
              <h3 className="font-bold text-base text-[#2D2219]">Victims of Domestic Violence</h3>
            </div>
            <p className="text-sm text-gray-600 text-justify leading-relaxed">
              Women and children facing physical, emotional, or financial abuse receive immediate legal intervention. Our platform provides a discrete, encrypted channel for victims to seek protective orders (injunctions), file FIRs, and initiate maintenance or divorce proceedings without exposing themselves to further physical risk by visiting a law office.
            </p>
          </div>

          <div className="bg-[#FAF8F5] border border-[#5A4C33]/10 rounded-2xl p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-[#D4AF37]/20 flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="12" y1="1" x2="12" y2="23"></line>
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                </svg>
              </div>
              <h3 className="font-bold text-base text-[#2D2219]">Economic Hardship (Income Cap)</h3>
            </div>
            <p className="text-sm text-gray-600 text-justify leading-relaxed">
              To prevent abuse of the system, we implement a strict income threshold based on the official guidelines established by the National Legal Services Authority (NALSA). Individuals earning below ₹3,00,000 annually (subject to state-specific variations) are eligible for completely free legal counsel, drafting, and, in certain cases, courtroom representation.
            </p>
          </div>

          <div className="bg-[#FAF8F5] border border-[#5A4C33]/10 rounded-2xl p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-[#D4AF37]/20 flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10.09 10.09 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
              </div>
              <h3 className="font-bold text-base text-[#2D2219]">Wrongful Employment Termination</h3>
            </div>
            <p className="text-sm text-gray-600 text-justify leading-relaxed">
              Blue-collar workers, daily wage laborers, and employees who have been illegally terminated, denied their rightful gratuity, or subjected to severe workplace exploitation qualify for pro bono assistance. Our advocates assist in drafting legal notices and representing workers in labor tribunals to recover their withheld earnings.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
