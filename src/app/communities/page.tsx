import Navbar from "@/components/Navbar";
import CommunitiesHero from "@/components/CommunitiesHero";
import LegalCommunities from "@/components/LegalCommunities";
import CommunitiesDarkHero from "@/components/CommunitiesDarkHero";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Legal Communities & Practice Forums",
  description: "Join active legal discussion groups, connect with professional legal networks, share courtroom experiences, and participate in peer Q&A.",
  alternates: {
    canonical: "https://amaconnect.in/communities",
  },
};

export default function CommunitiesPage() {
  return (
    <div className="flex flex-col min-h-dvh bg-transparent font-sans">
      {/* <Navbar /> */}
      <main className="flex-grow">
        <CommunitiesHero />
        <LegalCommunities />
        
        {/* Dark Themed Community Hero / Showcase */}
        <CommunitiesDarkHero />
        
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
