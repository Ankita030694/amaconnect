"use client";

import { useEffect, useRef, useState } from "react";
import { DraftItem } from "@/data/drafts_data";

// Module-level cache: filePath → extracted plain text
// Persists across re-renders and card mounts so we never re-fetch
const docTextCache = new Map<string, string>();

function encodeFilePath(filePath: string): string {
  return filePath
    .split("/")
    .map((segment) => encodeURIComponent(segment))
    .join("/");
}

type LoadState = "idle" | "loading" | "loaded" | "error";

interface Props {
  draft: DraftItem;
}

export default function DocThumbnail({ draft }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [state, setState] = useState<LoadState>("idle");
  const [text, setText] = useState<string>("");

  useEffect(() => {
    // If already cached, use it immediately
    if (docTextCache.has(draft.filePath)) {
      setText(docTextCache.get(draft.filePath)!);
      setState("loaded");
      return;
    }

    // Only process .docx files
    const ext = draft.fileName.split(".").pop()?.toLowerCase();
    if (ext !== "docx" && ext !== "doc") {
      setState("error");
      return;
    }

    const el = containerRef.current;
    if (!el) return;

    let cancelled = false;

    const observer = new IntersectionObserver(
      async (entries) => {
        if (!entries[0].isIntersecting) return;
        observer.disconnect();

        // Already cached or loading
        if (docTextCache.has(draft.filePath)) {
          setText(docTextCache.get(draft.filePath)!);
          setState("loaded");
          return;
        }

        setState("loading");

        try {
          const encoded = encodeFilePath(draft.filePath);
          const response = await fetch(encoded);
          if (!response.ok) throw new Error(`HTTP ${response.status}`);
          const arrayBuffer = await response.arrayBuffer();

          const mammoth = await import("mammoth");
          const result = await mammoth.extractRawText({ arrayBuffer });

          if (cancelled) return;

          const raw = result.value?.trim() ?? "";
          docTextCache.set(draft.filePath, raw);
          setText(raw);
          setState(raw ? "loaded" : "error");
        } catch {
          if (!cancelled) setState("error");
        }
      },
      { rootMargin: "120px" } // pre-fetch slightly before visible
    );

    observer.observe(el);
    return () => {
      cancelled = true;
      observer.disconnect();
    };
  }, [draft.filePath, draft.fileName]);

  return (
    <div
      ref={containerRef}
      className="w-full aspect-[4/3] rounded-[12px] overflow-hidden border border-[#E8E0CE] bg-white relative select-none"
      style={{ cursor: "default" }}
    >
      {/* ── Skeleton / Loading ── */}
      {(state === "idle" || state === "loading") && (
        <div className="absolute inset-0 bg-[#FAF7F2] flex flex-col justify-start p-4 gap-2">
          {/* Animated shimmer lines */}
          {[...Array(7)].map((_, i) => (
            <div
              key={i}
              className="h-2 rounded-full bg-[#E8E0CE] animate-pulse"
              style={{
                width: i === 0 ? "55%" : i === 6 ? "40%" : `${85 + (i % 3) * 5}%`,
                animationDelay: `${i * 80}ms`,
              }}
            />
          ))}
        </div>
      )}

      {/* ── Actual Document Text ── */}
      {state === "loaded" && text && (
        <>
          {/* Document page background */}
          <div className="absolute inset-0 bg-white p-4 overflow-hidden select-none pointer-events-none filter blur-[1.75px] opacity-75">
            {/* Watermark header line */}
            <div className="flex items-center gap-1.5 mb-2.5">
              <div className="w-4 h-0.5 bg-[#C69214]/40 rounded" />
              <span className="text-[7px] font-bold uppercase tracking-[0.2em] text-[#C69214]/60">
                {draft.subCategory}
              </span>
              <div className="flex-1 h-0.5 bg-[#C69214]/20 rounded" />
            </div>

            {/* Document text — small, serif, real content */}
            <p
              className="text-[8.5px] leading-[1.65] text-[#2C2620] font-serif select-none pointer-events-none break-words"
              style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
            >
              {text.slice(0, 520)}
            </p>
          </div>

          {/* Fade-out gradient at bottom so it doesn't look cut off */}
          <div
            className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none"
            style={{
              background:
                "linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,0.95) 70%, rgba(255,255,255,1) 100%)",
            }}
          />

          {/* "Document preview" badge */}
          <div className="absolute bottom-2 left-3 right-3 flex items-center justify-between pointer-events-none">
            <span className="text-[8px] font-bold text-[#C69214]/70 uppercase tracking-wider">
              Preview
            </span>
            <span className="text-[7px] text-gray-400 font-medium">
              Premium Locked
            </span>
          </div>
        </>
      )}

      {/* ── Fallback for non-DOCX or errors ── */}
      {state === "error" && <FallbackIcon draft={draft} />}
    </div>
  );
}

function FallbackIcon({ draft }: { draft: DraftItem }) {
  const ext = draft.fileName.split(".").pop()?.toUpperCase().substring(0, 4) ?? "DOC";
  const color = ext === "PDF" ? "#E74C3C" : "#2980B9";
  return (
    <div className="absolute inset-0 bg-[#F6F1E7] flex items-center justify-center">
      <div className="flex flex-col items-center gap-1.5">
        <div
          className="w-10 h-12 bg-white rounded-[6px] shadow-md flex items-end justify-center pb-1.5 border border-gray-100"
          style={{ borderTopRightRadius: "0" }}
        >
          <span className="text-[9px] font-black" style={{ color }}>
            {ext}
          </span>
        </div>
      </div>
    </div>
  );
}
