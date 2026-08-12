"use client";

import { useState } from "react";

/**
 * Floating WhatsApp contact button.
 * Renders in the root layout (not page.tsx) so it persists across
 * every route — interviews, blogs, communities, etc. — not just the homepage.
 *
 * IMPORTANT: replace WHATSAPP_NUMBER below with your real business number
 * in international format, no + or spaces (e.g. "919876543210").
 */

const WHATSAPP_NUMBER = "918700343611"; // <-- replace with real number
const PREFILLED_MESSAGE = "Hi, I have a legal question for AMA Connect.";

export default function WhatsAppButton() {
    const [isExpanded, setIsExpanded] = useState(false);

    const chatUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
        PREFILLED_MESSAGE
    )}`;

    return (
        <div className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end gap-3">
            {/* Expanded preview card */}
            {isExpanded && (
                <div className="bg-white rounded-2xl shadow-2xl border border-gray-150 p-4 sm:p-5 w-[260px] sm:w-[280px] animate-in fade-in slide-in-from-bottom-4 duration-200">
                    <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center gap-2.5">
                            <div className="w-9 h-9 rounded-full bg-[#25D366] flex items-center justify-center shrink-0">
                                <svg className="w-5 h-5 text-white fill-current" viewBox="0 0 24 24">
                                    <path d="M17.6 6.32A7.85 7.85 0 0 0 12.05 4a7.94 7.94 0 0 0-6.9 11.9L4 20l4.2-1.1a7.9 7.9 0 0 0 3.8 1h.03A7.94 7.94 0 0 0 20 12.05a7.9 7.9 0 0 0-2.4-5.73zm-5.55 12.2h-.03a6.58 6.58 0 0 1-3.36-.92l-.24-.14-2.5.65.67-2.44-.16-.25a6.6 6.6 0 1 1 12.27-3.37 6.56 6.56 0 0 1-6.65 6.47zm3.6-4.93c-.2-.1-1.16-.57-1.34-.64s-.31-.1-.45.1-.5.63-.62.77-.23.15-.43.05a5.4 5.4 0 0 1-1.6-.98 6 6 0 0 1-1.1-1.37c-.12-.2 0-.3.09-.4s.2-.24.3-.36.13-.2.2-.33.03-.25 0-.35-.44-1.07-.6-1.46-.32-.33-.44-.34h-.38a.72.72 0 0 0-.52.24 2.2 2.2 0 0 0-.68 1.63 3.8 3.8 0 0 0 .8 2.03 8.7 8.7 0 0 0 3.33 2.95c.47.2.83.32 1.11.4a2.67 2.67 0 0 0 1.23.08c.37-.06 1.16-.48 1.33-.94s.17-.86.12-.94-.18-.14-.38-.24z" />
                                </svg>
                            </div>
                            <div>
                                <p className="font-bold text-gray-900 text-sm leading-tight">AMA Legal Solutions</p>
                                <p className="text-[11px] text-gray-500 font-medium">Typically replies within 45 min</p>
                            </div>
                        </div>
                        <button
                            onClick={() => setIsExpanded(false)}
                            className="text-gray-400 hover:text-gray-600 p-1 -mt-1 -mr-1"
                            aria-label="Close"
                        >
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    <p className="text-xs text-gray-600 mb-4 leading-relaxed">
                        Ask a quick legal question directly on WhatsApp — no app download needed.
                    </p>

                    <a
                        href={chatUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 w-full bg-[#25D366] hover:bg-[#20BD5A] text-white font-bold text-sm py-2.5 rounded-xl transition-colors"
                    >
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                            <path d="M17.6 6.32A7.85 7.85 0 0 0 12.05 4a7.94 7.94 0 0 0-6.9 11.9L4 20l4.2-1.1a7.9 7.9 0 0 0 3.8 1h.03A7.94 7.94 0 0 0 20 12.05a7.9 7.9 0 0 0-2.4-5.73z" />
                        </svg>
                        Start Chat
                    </a>
                </div>
            )}

            {/* Floating toggle button */}
            <button
                onClick={() => setIsExpanded((prev) => !prev)}
                className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#25D366] hover:bg-[#20BD5A] shadow-lg hover:shadow-xl flex items-center justify-center transition-all hover:scale-105 active:scale-95"
                aria-label="Chat with us on WhatsApp"
            >
                {isExpanded ? (
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                ) : (
                    <svg className="w-7 h-7 sm:w-8 sm:h-8 text-white fill-current" viewBox="0 0 24 24">
                        <path d="M17.6 6.32A7.85 7.85 0 0 0 12.05 4a7.94 7.94 0 0 0-6.9 11.9L4 20l4.2-1.1a7.9 7.9 0 0 0 3.8 1h.03A7.94 7.94 0 0 0 20 12.05a7.9 7.9 0 0 0-2.4-5.73zm-5.55 12.2h-.03a6.58 6.58 0 0 1-3.36-.92l-.24-.14-2.5.65.67-2.44-.16-.25a6.6 6.6 0 1 1 12.27-3.37 6.56 6.56 0 0 1-6.65 6.47zm3.6-4.93c-.2-.1-1.16-.57-1.34-.64s-.31-.1-.45.1-.5.63-.62.77-.23.15-.43.05a5.4 5.4 0 0 1-1.6-.98 6 6 0 0 1-1.1-1.37c-.12-.2 0-.3.09-.4s.2-.24.3-.36.13-.2.2-.33.03-.25 0-.35-.44-1.07-.6-1.46-.32-.33-.44-.34h-.38a.72.72 0 0 0-.52.24 2.2 2.2 0 0 0-.68 1.63 3.8 3.8 0 0 0 .8 2.03 8.7 8.7 0 0 0 3.33 2.95c.47.2.83.32 1.11.4a2.67 2.67 0 0 0 1.23.08c.37-.06 1.16-.48 1.33-.94s.17-.86.12-.94-.18-.14-.38-.24z" />
                    </svg>
                )}
            </button>
        </div>
    );
}