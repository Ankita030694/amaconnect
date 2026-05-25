"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { X, Download, FileText, Loader2, AlertCircle } from "lucide-react";
import { DraftItem } from "@/data/drafts_data";

interface Props {
  draft: DraftItem;
  onClose: () => void;
  onDownload: (draft: DraftItem) => void;
}

function encodeFilePath(filePath: string): string {
  return filePath
    .split("/")
    .map((segment) => encodeURIComponent(segment))
    .join("/");
}

function isDocx(fileName: string): boolean {
  return fileName.toLowerCase().endsWith(".docx") || fileName.toLowerCase().endsWith(".doc");
}

type PreviewState =
  | { status: "loading" }
  | { status: "success"; html: string }
  | { status: "error"; message: string }
  | { status: "unsupported" };

export default function DraftPreviewModal({ draft, onClose, onDownload }: Props) {
  const [preview, setPreview] = useState<PreviewState>({ status: "loading" });
  const overlayRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  // Close on Escape key
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  // Prevent body scroll while modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  // Load and convert the document
  useEffect(() => {
    let cancelled = false;

    async function loadPreview() {
      setPreview({ status: "loading" });

      if (!isDocx(draft.fileName)) {
        setPreview({ status: "unsupported" });
        return;
      }

      try {
        const encodedPath = encodeFilePath(draft.filePath);
        const response = await fetch(encodedPath);

        if (!response.ok) {
          throw new Error(`Failed to fetch document (HTTP ${response.status})`);
        }

        const arrayBuffer = await response.arrayBuffer();

        // Dynamically import mammoth to keep bundle lean (code-splits it)
        const mammoth = await import("mammoth");
        const result = await mammoth.convertToHtml({ arrayBuffer });

        if (cancelled) return;

        if (!result.value || result.value.trim() === "") {
          setPreview({ status: "error", message: "This document appears to be empty or has no extractable text." });
          return;
        }

        setPreview({ status: "success", html: result.value });
      } catch (err) {
        if (cancelled) return;
        const message = err instanceof Error ? err.message : "Unknown error occurred";
        setPreview({ status: "error", message });
      }
    }

    loadPreview();
    return () => { cancelled = true; };
  }, [draft]);

  // Close on backdrop click
  const handleOverlayClick = useCallback((e: React.MouseEvent) => {
    if (e.target === overlayRef.current) onClose();
  }, [onClose]);

  return (
    <div
      ref={overlayRef}
      onClick={handleOverlayClick}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8"
      style={{ background: "rgba(10, 9, 8, 0.75)", backdropFilter: "blur(6px)" }}
    >
      <div
        className="relative w-full max-w-4xl bg-white rounded-[20px] shadow-2xl flex flex-col overflow-hidden"
        style={{ maxHeight: "90vh" }}
      >
        {/* ── Header ── */}
        <div className="flex items-start justify-between gap-4 px-6 py-4 border-b border-[#EDE5D4] bg-[#FAF7F2] shrink-0">
          <div className="flex flex-col min-w-0">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#C69214] mb-1">
              {draft.subCategory}
            </span>
            <h2 className="text-base sm:text-lg font-bold text-[#1A1A1A] leading-snug line-clamp-2">
              {draft.title}
            </h2>
            <p className="text-xs text-gray-400 font-medium mt-0.5">{draft.fileName}</p>
          </div>
          <div className="flex items-center gap-2 shrink-0 mt-0.5">
            <button
              onClick={() => onDownload(draft)}
              className="flex items-center gap-1.5 bg-[#1C1A17] text-white px-3.5 py-2 rounded-[8px] font-bold text-xs hover:bg-black active:scale-[0.97] transition-all shadow-sm cursor-pointer"
            >
              <Download size={13} />
              Download
            </button>
            <button
              onClick={onClose}
              className="w-8 h-8 flex items-center justify-center rounded-full bg-[#EDE5D4] hover:bg-[#DDD5C4] text-[#5A5248] hover:text-[#1A1A1A] transition-all cursor-pointer"
              aria-label="Close preview"
            >
              <X size={16} />
            </button>
          </div>
        </div>

        {/* ── Preview Body ── */}
        <div ref={contentRef} className="flex-1 overflow-y-auto">
          {preview.status === "loading" && (
            <div className="flex flex-col items-center justify-center py-24 gap-4">
              <Loader2 size={36} className="text-[#C69214] animate-spin" />
              <p className="text-sm font-semibold text-gray-500">Converting document…</p>
              <p className="text-xs text-gray-400">Extracting content from {draft.fileName}</p>
            </div>
          )}

          {preview.status === "error" && (
            <div className="flex flex-col items-center justify-center py-24 gap-4 px-8 text-center">
              <div className="w-14 h-14 bg-red-50 rounded-full flex items-center justify-center">
                <AlertCircle size={26} className="text-red-400" />
              </div>
              <div>
                <p className="text-sm font-bold text-[#1A1A1A] mb-1">Could not load preview</p>
                <p className="text-xs text-gray-500 max-w-sm">{preview.message}</p>
              </div>
              <button
                onClick={() => onDownload(draft)}
                className="flex items-center gap-1.5 bg-[#1C1A17] text-white px-5 py-2.5 rounded-[10px] font-bold text-sm hover:bg-black transition-all cursor-pointer"
              >
                <Download size={14} />
                Download instead
              </button>
            </div>
          )}

          {preview.status === "unsupported" && (
            <div className="flex flex-col items-center justify-center py-24 gap-4 px-8 text-center">
              <div className="w-14 h-14 bg-[#F4EEE0] rounded-full flex items-center justify-center">
                <FileText size={26} className="text-[#C69214]" />
              </div>
              <div>
                <p className="text-sm font-bold text-[#1A1A1A] mb-1">Preview not available</p>
                <p className="text-xs text-gray-500 max-w-sm">
                  In-browser preview is only available for DOCX files. This file is in{" "}
                  <span className="font-bold">{draft.fileName.split(".").pop()?.toUpperCase()}</span> format.
                  Please download it to view.
                </p>
              </div>
              <button
                onClick={() => onDownload(draft)}
                className="flex items-center gap-1.5 bg-[#1C1A17] text-white px-5 py-2.5 rounded-[10px] font-bold text-sm hover:bg-black transition-all cursor-pointer"
              >
                <Download size={14} />
                Download File
              </button>
            </div>
          )}

          {preview.status === "success" && (
            <div className="px-6 sm:px-12 py-8">
              {/* Legal document styling for the rendered HTML */}
              <style>{`
                .draft-preview-content {
                  font-family: 'Georgia', 'Times New Roman', serif;
                  font-size: 14px;
                  line-height: 1.8;
                  color: #1A1A1A;
                  max-width: 700px;
                  margin: 0 auto;
                }
                .draft-preview-content h1,
                .draft-preview-content h2,
                .draft-preview-content h3,
                .draft-preview-content h4 {
                  font-family: 'Georgia', serif;
                  font-weight: 700;
                  color: #1A1A1A;
                  margin-top: 1.5em;
                  margin-bottom: 0.5em;
                  line-height: 1.4;
                }
                .draft-preview-content h1 { font-size: 18px; text-align: center; text-transform: uppercase; letter-spacing: 0.05em; }
                .draft-preview-content h2 { font-size: 15px; }
                .draft-preview-content h3 { font-size: 14px; }
                .draft-preview-content p {
                  margin-bottom: 0.75em;
                  text-align: justify;
                }
                .draft-preview-content ul,
                .draft-preview-content ol {
                  padding-left: 1.75em;
                  margin-bottom: 0.75em;
                }
                .draft-preview-content li { margin-bottom: 0.4em; }
                .draft-preview-content table {
                  width: 100%;
                  border-collapse: collapse;
                  margin: 1em 0;
                  font-size: 13px;
                }
                .draft-preview-content td,
                .draft-preview-content th {
                  border: 1px solid #D0C8B8;
                  padding: 6px 10px;
                  vertical-align: top;
                }
                .draft-preview-content th {
                  background: #F6F1E7;
                  font-weight: 700;
                }
                .draft-preview-content strong { font-weight: 700; }
                .draft-preview-content em { font-style: italic; }
                .draft-preview-content a { color: #C69214; text-decoration: underline; }
              `}</style>
              <div
                className="draft-preview-content"
                dangerouslySetInnerHTML={{ __html: preview.html }}
              />
            </div>
          )}
        </div>

        {/* ── Footer ── */}
        {preview.status === "success" && (
          <div className="shrink-0 px-6 py-3 border-t border-[#EDE5D4] bg-[#FAF7F2] flex items-center justify-between gap-4">
            <p className="text-xs text-gray-400 font-medium">
              Preview generated from document text content
            </p>
            <button
              onClick={() => onDownload(draft)}
              className="flex items-center gap-1.5 text-xs font-bold text-[#C69214] hover:text-[#A67C10] transition-colors cursor-pointer"
            >
              <Download size={12} />
              Download Original
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
