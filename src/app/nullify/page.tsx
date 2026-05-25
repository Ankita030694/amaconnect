import { Metadata } from "next";
import { Suspense } from "react";
import NullifyClient from "./nullify-client";

export const metadata: Metadata = {
  title: "Dashboard Authority Portal",
  description: "Secure administration login panel for verified AMA Legal Solutions team authorities.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function Page() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-[#1E1B18]">
        <div className="w-10 h-10 border-4 border-[#D4AF37] border-t-transparent rounded-full animate-spin"></div>
      </div>
    }>
      <NullifyClient />
    </Suspense>
  );
}
