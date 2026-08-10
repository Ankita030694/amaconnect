"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
// import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Helper to encode download paths
function encodeFilePath(filePath: string): string {
  return filePath
    .split("/")
    .map((segment) => encodeURIComponent(segment))
    .join("/");
}

export default function SuccessClient() {
  const [leadId, setLeadId] = useState<string | null>(null);
  const [downloadName, setDownloadName] = useState<string | null>(null);
  const [downloadPath, setDownloadPath] = useState<string | null>(null);
  const [statusState, setStatusState] = useState<"loading" | "verified" | "error" | "unauthorized">("loading");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    const storedLeadId = localStorage.getItem("current_payment_lead_id");
    const storedPath = localStorage.getItem("pending_download_path");
    const storedName = localStorage.getItem("pending_download_name");

    // Security: If no active checkout session exists, block access
    if (!storedLeadId) {
      setStatusState("unauthorized");
      return;
    }

    setLeadId(storedLeadId);
    setDownloadPath(storedPath);
    setDownloadName(storedName);

    const verifyAndRegisterPayment = async () => {
      try {
        const response = await fetch("/api/draft-payments", {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            leadId: storedLeadId,
            status: "success"
          })
        });

        const data = await response.json();
        if (!response.ok) {
          throw new Error(data.error || "Failed to register transaction outcome.");
        }

        setStatusState("verified");

        // Automatically trigger document download if path exists
        if (storedPath && storedName) {
          const encodedPath = encodeFilePath(storedPath);
          const link = document.createElement("a");
          link.href = encodedPath;
          link.download = storedName;
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        }

        // Clear the checkout session from localStorage after successful download
        localStorage.removeItem("current_payment_lead_id");
        localStorage.removeItem("pending_download_path");
        localStorage.removeItem("pending_download_name");
      } catch (err: any) {
        console.error("Payment registration failure:", err);
        setStatusState("error");
        setErrorMessage(err.message || "An unexpected error occurred while finalizing payment. Your payment was logged, but download could not be initialized.");
      }
    };

    verifyAndRegisterPayment();
  }, []);

  const handleManualDownload = () => {
    if (downloadPath && downloadName) {
      const encodedPath = encodeFilePath(downloadPath);
      const link = document.createElement("a");
      link.href = encodedPath;
      link.download = downloadName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <div className="flex flex-col min-h-dvh bg-[#F5F2EB] text-gray-800 pt-[52px] font-sans">
      {/* <Navbar /> */}

      <main className="flex-grow py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden flex items-center justify-center">
        {/* Soft Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.1),transparent_60%)] rounded-full blur-3xl -z-10 pointer-events-none" />

        <div className="max-w-md w-full relative z-10">
          <div className="bg-white border border-[#D4AF37]/35 shadow-2xl rounded-3xl p-8 text-center flex flex-col items-center transform transition-all hover:scale-[1.01]">

            {/* Unauthorized Access State */}
            {statusState === "unauthorized" && (
              <div className="animate-in fade-in zoom-in duration-300 flex flex-col items-center">
                <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mb-6 border border-slate-200 text-slate-500 shadow-sm">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>

                <span className="px-3 py-1 bg-slate-50 border border-slate-200 text-slate-600 rounded-full text-[10px] font-black uppercase tracking-widest mb-4">
                  Access Restricted
                </span>

                <h2 className="text-2xl font-black text-gray-900 mb-3 leading-tight">
                  No Active Session
                </h2>

                <p className="text-gray-500 text-sm leading-relaxed mb-8 max-w-sm">
                  This page is only accessible after a valid checkout session. If you have already made a payment and didn&apos;t receive your document, please contact our support team.
                </p>

                <div className="w-full space-y-3 max-w-sm">
                  <Link
                    href="/"
                    className="block w-full bg-[#1C1A17] hover:bg-[#C69214] text-white text-center py-3.5 rounded-xl font-bold text-sm shadow-md transition-all active:scale-[0.98]"
                  >
                    Browse Homepage
                  </Link>

                  <Link
                    href="/contact"
                    className="block w-full border border-slate-200 hover:bg-slate-50 text-slate-700 text-center py-3.5 rounded-xl font-bold text-sm transition-all"
                  >
                    Contact Support
                  </Link>
                </div>
              </div>
            )}

            {statusState === "loading" && (
              <div className="py-12 flex flex-col items-center gap-4 animate-in fade-in duration-300">
                <svg className="animate-spin h-14 w-14 text-[#C69214]" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                <h3 className="text-xl font-black text-gray-900 mt-2">Verifying Payment...</h3>
                <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
                  We are securely confirming your transaction outcome with PayU. Please do not close or refresh this window.
                </p>
              </div>
            )}

            {statusState === "verified" && (
              <div className="animate-in fade-in zoom-in duration-300 flex flex-col items-center">
                <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mb-6 border border-green-200 text-green-600 shadow-sm">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>

                <span className="px-3 py-1 bg-green-50 border border-green-200 text-green-600 rounded-full text-[10px] font-black uppercase tracking-widest mb-4">
                  Payment Verified
                </span>

                <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-2 leading-tight">
                  Payment Successful!
                </h2>

                <p className="text-gray-500 text-sm leading-relaxed mb-6 max-w-sm">
                  Your checkout has cleared successfully! The download process has been triggered in your browser background automatically.
                </p>

                {downloadName && (
                  <div className="w-full bg-[#FDFBF7] border border-[#D4AF37]/20 rounded-2xl p-4 mb-8 text-left flex items-start gap-3 max-w-sm">
                    <div className="w-10 h-10 shrink-0 bg-[#C69214]/15 border border-[#C69214]/25 rounded-xl flex items-center justify-center text-[#C69214]">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m.75 12l3 3m0 0l3-3m-3 3v-6m-1.5-9H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                      </svg>
                    </div>
                    <div className="min-w-0">
                      <p className="text-[10px] font-extrabold uppercase text-[#B8860B] tracking-wider mb-0.5">Purchased Draft</p>
                      <p className="text-xs sm:text-sm font-bold text-gray-950 truncate leading-snug">{downloadName}</p>
                    </div>
                  </div>
                )}

                <div className="w-full space-y-3 max-w-sm">
                  <button
                    onClick={handleManualDownload}
                    className="w-full bg-[#1C1A17] hover:bg-[#C69214] text-white hover:text-white py-3.5 rounded-xl font-bold text-sm shadow-md transition-all active:scale-[0.98] cursor-pointer flex justify-center items-center gap-2"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                    </svg>
                    Re-trigger File Download
                  </button>

                  <Link
                    href="/"
                    className="block w-full border border-slate-200 hover:bg-slate-50 text-slate-700 text-center py-3.5 rounded-xl font-bold text-sm transition-all"
                  >
                    Browse More Services
                  </Link>
                </div>
              </div>
            )}

            {statusState === "error" && (
              <div className="animate-in fade-in zoom-in duration-300 flex flex-col items-center">
                <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mb-6 border border-red-200 text-red-600 shadow-sm animate-pulse">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                  </svg>
                </div>

                <span className="px-3 py-1 bg-red-50 border border-red-200 text-red-600 rounded-full text-[10px] font-black uppercase tracking-widest mb-4">
                  Verification Error
                </span>

                <h2 className="text-2xl font-black text-gray-900 mb-3 leading-tight">
                  Checkout Issue
                </h2>

                <p className="text-gray-500 text-sm leading-relaxed mb-8 max-w-sm">
                  {errorMessage || "We encountered an issue when updating your document permissions. Please try again or contact our team."}
                </p>

                <div className="w-full space-y-3 max-w-sm">
                  <Link
                    href="/"
                    className="block w-full bg-[#1C1A17] hover:bg-[#000] text-white text-center py-3.5 rounded-xl font-bold text-sm shadow-md transition-all active:scale-[0.98]"
                  >
                    Back to Homepage
                  </Link>

                  <Link
                    href="/contact"
                    className="block w-full border border-slate-200 hover:bg-slate-50 text-slate-700 text-center py-3.5 rounded-xl font-bold text-sm transition-all"
                  >
                    Connect Support Team
                  </Link>
                </div>
              </div>
            )}

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
