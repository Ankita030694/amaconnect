"use client";

import { DRAFTS_DATA } from "@/data/drafts_data";
import Link from "next/link";

export default function DraftsSEOIndex() {
  const getDraftSlug = (fileName: string) => {
    const lastDot = fileName.lastIndexOf('.');
    return lastDot !== -1 ? fileName.substring(0, lastDot).toLowerCase() : fileName.toLowerCase();
  };

  return (
    <section className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 py-12 border-t border-[#EDE5D4]/40 bg-linear-to-b from-white to-[#FAF9F6]">
      <style dangerouslySetInnerHTML={{__html: `
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: #E6DFD3;
          border-radius: 20px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background-color: #C69214;
        }
      `}} />
      <div className="mb-8">
        <p className="text-[#C69214] font-bold tracking-[0.2em] text-[10px] uppercase mb-2">
          Complete Index
        </p>
        <h3 className="text-xl sm:text-2xl font-bold text-[#1C1A17] mb-2 tracking-tight">
          All Available Legal Templates & Agreements
        </h3>
        <p className="text-gray-500 text-xs sm:text-sm max-w-3xl leading-relaxed">
          Browse our comprehensive index of professionally prepared legal templates. This extensive repository covers real estate deeds, business agreements, court pleadings, affidavits, family law forms, and criminal pleadings. Click on any title to view its comprehensive drafting manual, execution guides, and download options instantly.
        </p>
      </div>
      
      <div className="relative border border-[#EDE5D4]/60 bg-white/70 backdrop-blur-xs rounded-2xl p-6 shadow-[0_4px_24px_rgba(0,0,0,0.02)]">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-3 text-xs text-gray-500 font-medium max-h-[450px] overflow-y-auto pr-4 custom-scrollbar">
          {DRAFTS_DATA.map((draft) => {
            const slug = getDraftSlug(draft.fileName);
            return (
              <Link 
                key={draft.id} 
                href={`/drafts/${slug}`}
                className="flex items-start gap-1.5 hover:text-[#C69214] transition-colors cursor-pointer select-none group py-0.5" 
                title={`View ${draft.title} Guide`}
              >
                <span className="text-[#C69214] font-bold shrink-0 opacity-70 group-hover:opacity-100 transition-opacity">
                  •
                </span>
                <span className="break-words line-clamp-2 text-left">
                  {draft.title}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

