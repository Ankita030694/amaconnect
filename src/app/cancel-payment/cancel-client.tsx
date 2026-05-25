"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function CancelClient() {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const storedLeadId = localStorage.getItem("current_payment_lead_id");

    // Security: If no active checkout session exists, block access
    if (!storedLeadId) {
      setIsLoading(false);
      setIsAuthorized(false);
      return;
    }

    setIsAuthorized(true);

    // Update checkout log status in backend to 'cancelled'
    const registerCancellation = async () => {
      try {
        await fetch("/api/draft-payments", {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            leadId: storedLeadId,
            status: "cancelled"
          })
        });
      } catch (err) {
        console.error("Failed to register cancellation callback status", err);
      } finally {
        setIsLoading(false);
      }
    };

    registerCancellation();
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-[#F5F2EB] text-gray-800 pt-24 font-sans">
      {/* <Navbar /> */}

      <main className="flex-grow py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden flex items-center justify-center">
        {/* Soft Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.06),transparent_60%)] rounded-full blur-3xl -z-10 pointer-events-none" />

        <div className="max-w-md w-full relative z-10">
          <div className="bg-white border border-[#D4AF37]/35 shadow-2xl rounded-3xl p-8 text-center flex flex-col items-center transform transition-all hover:scale-[1.01]">

            {isLoading ? (
              <div className="py-12 flex flex-col items-center gap-4 animate-in fade-in duration-300">
                <svg className="animate-spin h-14 w-14 text-[#C69214]" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                <h3 className="text-xl font-black text-gray-900 mt-2">Processing...</h3>
              </div>
            ) : !isAuthorized ? (
              /* Unauthorized Access State */
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
                  This page is only accessible after a valid checkout session. If you believe this is an error, please contact our support team.
                </p>

                <div className="w-full space-y-3">
                  <Link
                    href="/drafts"
                    className="block w-full bg-[#1C1A17] hover:bg-[#C69214] text-white text-center py-3.5 rounded-xl font-bold text-sm shadow-md transition-all active:scale-[0.98]"
                  >
                    Browse Legal Library
                  </Link>

                  <Link
                    href="/contact"
                    className="block w-full border border-slate-200 hover:bg-slate-50 text-slate-700 text-center py-3.5 rounded-xl font-bold text-sm transition-all"
                  >
                    Contact Support
                  </Link>
                </div>
              </div>
            ) : (
              /* Cancellation State */
              <div className="animate-in fade-in zoom-in duration-300 flex flex-col items-center">
                <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mb-6 border border-slate-200 text-slate-500 shadow-sm">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>

                <span className="px-3 py-1 bg-slate-50 border border-slate-200 text-slate-600 rounded-full text-[10px] font-black uppercase tracking-widest mb-4">
                  Payment Cancelled
                </span>

                <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-2 leading-tight">
                  Transaction Cancelled
                </h2>

                <p className="text-gray-500 text-sm leading-relaxed mb-8 max-w-sm">
                  You have decided to cancel your payment checkout session. No charges have been made. Your checkout progress has been updated and archived.
                </p>

                <div className="w-full space-y-3">
                  <Link
                    href="/drafts"
                    className="block w-full bg-[#1C1A17] hover:bg-[#C69214] text-white text-center py-3.5 rounded-xl font-bold text-sm shadow-md transition-all active:scale-[0.98]"
                  >
                    Return to Draft Library
                  </Link>

                  <Link
                    href="/contact"
                    className="block w-full border border-slate-200 hover:bg-slate-50 text-slate-700 text-center py-3.5 rounded-xl font-bold text-sm transition-all"
                  >
                    Connect Support Desk
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
