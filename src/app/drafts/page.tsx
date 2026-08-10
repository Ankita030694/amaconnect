import Navbar from "@/components/Navbar";
import DraftsHero from "@/components/DraftsHero";
import DraftsCatalog from "@/components/DraftsCatalog";
import RequestDraftForm from "@/components/RequestDraftForm";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import DraftsSEOIndex from "@/components/DraftsSEOIndex";
import Image from "next/image";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Legal Drafts & Document Templates",
  description: "Browse 2,100+ premium, professionally formatted legal drafts, agreements, contracts, and deeds. Pick, customize, and download instantly.",
  alternates: {
    canonical: "https://amaconnect.in/drafts",
  },
};

export default function DraftsPage() {
  return (
    <div className="flex flex-col min-h-dvh bg-white font-sans">
      {/* <Navbar /> */}
      <main className="flex-grow">
        <DraftsHero />
        
        {/* Draft Banner Section */}
        <div className="w-full mx-auto py-8 sm:py-8">
          <div className="relative w-full overflow-hidden rounded-3xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
            <Image
              src="/Draft.svg"
              alt="AMA Legal Drafts Templates"
              width={1920}
              height={700}
              className="w-full h-auto object-cover"
              priority
            />
          </div>
        </div>

        <DraftsCatalog />
        <RequestDraftForm defaultReason="Request a Specific Draft Template" />
        <CTASection />
        
        {/* ── SEO Legal Drafts Directory ── */}
        <DraftsSEOIndex />
      </main>

      <Footer />
    </div>
  );
}


