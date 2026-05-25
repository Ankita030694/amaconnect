import { Metadata } from "next";
import { Suspense } from "react";
import ContactClient from "./contact-client";

export const metadata: Metadata = {
  title: "Contact Our Legal Experts | AMA Connect",
  description: "Have questions about legal templates, custom drafting services, or lawyer interviews? Write to us, and our legal aid team will connect with you within 24 hours.",
  alternates: {
    canonical: "https://amaconnect.in/contact",
  },
  openGraph: {
    title: "Contact Our Legal Experts | AMA Connect",
    description: "Have questions about legal templates, custom drafting services, or lawyer interviews? Write to us, and our legal aid team will connect with you within 24 hours.",
    url: "https://amaconnect.in/contact",
    siteName: "AMA Legal Solutions",
    type: "website",
  },
};

export default function Page() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="w-10 h-10 border-4 border-[#D4AF37] border-t-transparent rounded-full animate-spin"></div>
      </div>
    }>
      <ContactClient />
    </Suspense>
  );
}
