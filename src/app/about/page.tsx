import { Metadata } from "next";
import AboutHero from "@/components/AboutHero";
import FounderStory from "@/components/FounderStory";
import HowItHelps from "@/components/HowItHelps";
import AboutMediaPlatform from "@/components/AboutMediaPlatform";
import TrustedByGrid from "@/components/TrustedByGrid";
import ReviewsSection from "@/components/ReviewsSection";
import ClosingCTA from "@/components/ClosingCTA";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "India's smarter way to get legal help. Download AMA Connect to ask legal questions, connect with lawyers, and access trusted legal support in one app.",
  alternates: {
    canonical: "https://amaconnect.in/about",
  },
  openGraph: {
    title: "About Us",
    description:
      "India's smarter way to get legal help. Download AMA Connect to ask legal questions, connect with lawyers, and access trusted legal support in one app.",
    url: "https://amaconnect.in/about",
    siteName: "AMA Legal Solutions",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#FDFBF7] font-sans">
      <main className="flex-grow pt-0">
        <AboutMediaPlatform />
        <TrustedByGrid />
        <AboutHero />
        <HowItHelps />
        <FounderStory />
        <ReviewsSection />
        <ClosingCTA />
      </main>
      <Footer />
    </div>
  );
}
