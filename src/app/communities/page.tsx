import Navbar from "@/components/Navbar";
import CommunitiesHero from "@/components/CommunitiesHero";
import LegalCommunities from "@/components/LegalCommunities";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import Image from "next/image";

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
    <div className="flex flex-col min-h-screen bg-white font-sans">
      {/* <Navbar /> */}
      <CommunitiesHero />

      {/* Community Graphic Banner Section */}
      <div className="w-full  mx-auto py-8 sm:py-8">
        <div className="relative w-full overflow-hidden rounded-3xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
          <Image
            src="/Community.svg"
            alt="AMA Legal Communities Network"
            width={1920}
            height={700}
            className="w-full h-auto object-cover"
            priority
          />
        </div>
      </div>

      <LegalCommunities />
      <CTASection />
      <Footer />
    </div>
  );
}
