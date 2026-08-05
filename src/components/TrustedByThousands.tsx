import Link from "next/link";
import { ShieldCheck, Check, ArrowRight } from "lucide-react";

export default function TrustedByThousands() {
  return (
    <section className="bg-[#FAF9F7] border border-[#EAE5D8] rounded-3xl p-6 sm:p-8 h-full flex flex-col font-sans shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4AF37]/5 rounded-full blur-[40px] pointer-events-none" />

      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-xl bg-white border border-[#D4AF37]/30 flex items-center justify-center shadow-sm shrink-0">
          <ShieldCheck className="w-5 h-5 text-[#D4AF37]" strokeWidth={2} />
        </div>
        <h3 className="font-extrabold text-lg sm:text-xl text-[#2D2219] leading-tight">
          Trusted by <br className="hidden sm:block" /> Thousands
        </h3>
      </div>

      <p className="text-[#2D2219] text-xs sm:text-sm font-medium leading-relaxed mb-6">
        Real people. Real legal challenges. Real verified experts.
      </p>

      <div className="flex flex-col gap-3 mb-8 flex-grow">
        <div className="flex items-center gap-3">
          <div className="w-5 h-5 rounded-full bg-[#D4AF37]/20 flex items-center justify-center shrink-0">
            <Check className="w-3 h-3 text-[#B8860B]" strokeWidth={3} />
          </div>
          <span className="text-xs sm:text-sm font-semibold text-gray-700">Anonymous & Secure</span>
        </div>
        
        <div className="flex items-center gap-3">
          <div className="w-5 h-5 rounded-full bg-[#D4AF37]/20 flex items-center justify-center shrink-0">
            <Check className="w-3 h-3 text-[#B8860B]" strokeWidth={3} />
          </div>
          <span className="text-xs sm:text-sm font-semibold text-gray-700">Verified Lawyers</span>
        </div>
        
        <div className="flex items-center gap-3">
          <div className="w-5 h-5 rounded-full bg-[#D4AF37]/20 flex items-center justify-center shrink-0">
            <Check className="w-3 h-3 text-[#B8860B]" strokeWidth={3} />
          </div>
          <span className="text-xs sm:text-sm font-semibold text-gray-700">45-Minute Response</span>
        </div>
      </div>

      <Link
        href="/communities"
        className="inline-flex items-center gap-2 text-[#B8860B] font-bold text-sm hover:text-[#986F09] transition-colors mt-auto w-fit group"
      >
        Join a Community
        <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
      </Link>
    </section>
  );
}
