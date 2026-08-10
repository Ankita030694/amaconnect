import { Metadata } from "next";
import { Suspense } from "react";
import SuccessClient from "./success-client";

export const metadata: Metadata = {
  title: "Payment Success",
  description: "Your payment was processed successfully. Thank you for using AMA Legal Solutions.",
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
      <SuccessClient />
    </Suspense>
  );
}
