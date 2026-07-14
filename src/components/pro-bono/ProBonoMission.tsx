import React from "react";

export default function ProBonoMission({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32">
      <div className="w-full flex flex-col items-start">
        
        <div className="text-left mb-8">
          <h2 className="text-xl sm:text-2xl font-extrabold text-[#2D2219] tracking-tight mb-4">
            The Access to Justice Gap in India
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed text-justify mb-4">
            The Indian legal system is one of the most robust frameworks in the world, yet the fundamental promise of justice remains economically out of reach for millions. According to recent demographic studies, nearly 70% of the Indian population cannot afford standard legal representation when facing critical issues like wrongful termination, domestic abuse, or property usurpation. The barrier is not a lack of legal talent—India has over 1.3 million enrolled advocates—but rather a catastrophic failure in connectivity. 
          </p>
          <p className="text-sm text-gray-600 leading-relaxed text-justify mb-4">
            The AMAConnect Free Legal Aid Initiative was conceived to systematically dismantle this barrier. By leveraging the same proprietary matchmaking algorithm that powers our premium professional network, we are creating the largest digital bridge between high-quality legal talent and the communities that need it the most. We believe that a society's legal system is only as just as it is accessible. When the poorest citizens are priced out of their fundamental rights, the integrity of the entire judicial framework is compromised. 
          </p>
          <p className="text-sm text-gray-600 leading-relaxed text-justify mb-4">
            Our platform acts as a digital equalizer. We are not a traditional NGO or a physical legal clinic with geographical constraints. We are a borderless digital infrastructure that enables a lawyer sitting in a corporate high-rise in Mumbai to instantly review documents and provide critical, life-altering legal counsel to a marginalized farmer in Vidarbha, completely free of charge. This is not charity; this is the democratization of fundamental rights through technology.
          </p>
        </div>

        <div className="space-y-12 w-full mt-8">
          {/* Section 1 */}
          <div>
            <h3 className="text-lg font-bold text-[#2D2219] mb-3 border-l-4 border-[#D4AF37] pl-4">
              Technology as the Great Equalizer
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed text-justify mb-4">
              Traditional pro bono initiatives often fail due to severe logistical bottlenecks. Lawyers who wish to volunteer their time struggle to find verified, genuine cases that match their specific domain expertise. Conversely, individuals desperately seeking aid have no way to reach these willing advocates. The physical distance between the courtroom and the community creates an insurmountable friction.
            </p>
            <p className="text-sm text-gray-600 leading-relaxed text-justify">
              The AMAConnect infrastructure eliminates this friction entirely. Our secure digital vault allows pro bono clients to upload their FIRs, court notices, or land deeds using just a smartphone. Our WebRTC-powered video consultation rooms allow advocates to meet with these clients face-to-face, providing empathetic, high-quality legal counsel without anyone ever needing to travel. By digitizing the discovery, qualification, and consultation phases, we reduce the cost of delivering pro bono legal aid to absolute zero.
            </p>
          </div>

          {/* Section 2 */}
          <div>
            <h3 className="text-lg font-bold text-[#2D2219] mb-3 border-l-4 border-[#D4AF37] pl-4">
              The "Pledge 5" Philosophy for Advocates
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed text-justify mb-4">
              We do not ask our legal professionals to sacrifice their practice or their livelihood. The AMAConnect Pro Bono initiative operates on a highly sustainable micro-volunteering model known as the "Pledge 5" philosophy. We ask every verified advocate on our platform to pledge just 5 hours of their time per month to pro bono cases. 
            </p>
            <p className="text-sm text-gray-600 leading-relaxed text-justify">
              Five hours represents less than 3% of a standard working month. However, when aggregated across our vast network of thousands of verified advocates, it generates tens of thousands of hours of world-class legal representation for the underserved every single month. By breaking down pro bono work into manageable, hyper-targeted digital consultations, we have created an ecosystem where giving back to the community is integrated seamlessly into a lawyer's regular workflow, rather than existing as a disruptive logistical burden.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
