import React from "react";

export default function ConsultationProcess({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full font-sans scroll-mt-32 mt-16 pt-12 border-t border-gray-100">
      <div className="w-full">
        <div className="text-left mb-10">
          <h2 className="text-xl sm:text-2xl font-extrabold text-[#2D2219] tracking-tight mb-4">
            How It Works: The 3-Step Process
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed text-justify">
            We have engineered the consultation process to be completely frictionless while maintaining enterprise-grade security. From discovery to resolution, every step is protected by our proprietary encryption protocols and escrow payment systems.
          </p>
        </div>

        <div className="flex flex-col gap-6">
          
          <div className="flex gap-6 items-start bg-white rounded-3xl p-6 border border-gray-100 shadow-sm transition-shadow hover:shadow-md">
            <div className="flex-shrink-0 w-12 h-12 bg-[#FDFBF7] border border-[#D4AF37]/30 rounded-2xl flex items-center justify-center font-black text-[#D4AF37] text-xl">
              1
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#2D2219] mb-2">Discovery & Verification</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Browse through our network of Bar Council verified advocates. Filter by practice area, jurisdiction, and user ratings. You can securely upload your case summary for pre-evaluation before committing to a paid consultation.
              </p>
            </div>
          </div>

          <div className="flex gap-6 items-start bg-white rounded-3xl p-6 border border-gray-100 shadow-sm transition-shadow hover:shadow-md">
            <div className="flex-shrink-0 w-12 h-12 bg-[#FDFBF7] border border-[#D4AF37]/30 rounded-2xl flex items-center justify-center font-black text-[#D4AF37] text-xl">
              2
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#2D2219] mb-2">Escrow-Backed Booking</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Once you select an advocate, your consultation fee is securely held in escrow. The advocate is only paid after the consultation successfully concludes. If the advocate misses the appointment, your money is instantly refunded.
              </p>
            </div>
          </div>

          <div className="flex gap-6 items-start bg-white rounded-3xl p-6 border border-gray-100 shadow-sm transition-shadow hover:shadow-md">
            <div className="flex-shrink-0 w-12 h-12 bg-[#FDFBF7] border border-[#D4AF37]/30 rounded-2xl flex items-center justify-center font-black text-[#D4AF37] text-xl">
              3
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#2D2219] mb-2">Encrypted Consultation</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Connect via HD video, VoIP audio, or secure text chat directly within the app. All communications are strictly end-to-end encrypted, ensuring absolute attorney-client privilege.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
