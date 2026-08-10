import { Metadata } from "next";
import { Suspense } from "react";
import CancelClient from "./cancel-client";

export const metadata: Metadata = {
  title: "Payment Cancelled",
  description: "Your payment attempt was cancelled. No charges have been made.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function Page() {
  return (
    <Suspense fallback={
      <div className="min-h-dvh flex items-center justify-center bg-white">
        <div className="w-10 h-10 border-4 border-[#D4AF37] border-t-transparent rounded-full animate-spin"></div>
      </div>
    }>
      <CancelClient />
    </Suspense>
  );
}
