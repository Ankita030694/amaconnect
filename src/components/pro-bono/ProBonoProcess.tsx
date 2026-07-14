import React from "react";

export default function ProBonoProcess({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
      <div className="w-full">
        <div className="text-left mb-10">
          <h2 className="text-xl sm:text-2xl font-extrabold text-[#2D2219] tracking-tight mb-4">
            The Digital Triage Process
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed text-justify">
            Our platform does not simply act as a directory. We utilize a highly structured triage workflow to ensure that the finite hours pledged by our pro bono advocates are allocated strictly to those facing severe and genuine legal emergencies.
          </p>
        </div>

        <div className="relative border-l-2 border-gray-100 ml-6 pl-8 space-y-12">
          
          <div className="relative">
            <div className="absolute -left-[43px] top-0 w-5 h-5 rounded-full bg-[#2D2219] ring-4 ring-white" />
            <h3 className="text-lg font-bold text-[#2D2219] mb-2">1. Intake & Verification</h3>
            <p className="text-sm text-gray-600 leading-relaxed text-justify">
              Applicants submit their details through our secure portal. Our automated systems cross-reference identity documents, and our human triage team verifies income certificates or BPL cards to confirm eligibility under NALSA guidelines.
            </p>
          </div>

          <div className="relative">
            <div className="absolute -left-[43px] top-0 w-5 h-5 rounded-full bg-[#D4AF37] ring-4 ring-white" />
            <h3 className="text-lg font-bold text-[#2D2219] mb-2">2. Algorithmic Matchmaking</h3>
            <p className="text-sm text-gray-600 leading-relaxed text-justify">
              Once verified, the case is anonymized and routed. Our algorithm considers the applicant's jurisdiction, the specific legal issue (e.g., domestic violence, labor dispute), and their spoken language, matching them with an advocate who has pledged hours in that exact intersection.
            </p>
          </div>

          <div className="relative">
            <div className="absolute -left-[43px] top-0 w-5 h-5 rounded-full bg-[#1A1410] ring-4 ring-white" />
            <h3 className="text-lg font-bold text-[#2D2219] mb-2">3. Virtual Counsel</h3>
            <p className="text-sm text-gray-600 leading-relaxed text-justify">
              The advocate reviews the securely uploaded documents. A virtual consultation is initiated via our encrypted video or chat infrastructure. The advocate formulates a legal strategy, drafts necessary legal notices or injunctions, and provides ongoing guidance until the crisis is mitigated.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
