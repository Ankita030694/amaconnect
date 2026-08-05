import { APP_STATS } from "@/lib/appStats";

export default function TrustStatBadge() {
  return (
    <div className="inline-flex items-center gap-2 sm:gap-3 bg-white border border-[#EAE5D8] rounded-full px-4 sm:px-5 py-1.5 sm:py-2 shadow-sm">
      <div className="flex gap-0.5 text-[#F59E0B]">
        {[...Array(5)].map((_, i) => (
          <svg key={i} className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
      <div className="flex items-center gap-2 sm:gap-3 text-[11px] sm:text-[13px] font-bold text-[#2D2219]">
        <span>{APP_STATS.RATING}/5</span>
        <div className="w-px h-3.5 bg-gray-300"></div>
        <span>{APP_STATS.DOWNLOADS} Downloads</span>
      </div>
    </div>
  );
}
