import { Metadata } from "next";
import AboutHero from "@/components/AboutHero";
import AboutChallenge from "@/components/AboutChallenge";
import AboutFeatures from "@/components/AboutFeatures";
import AboutClients from "@/components/AboutClients";
import AboutSteps from "@/components/AboutSteps";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";

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
    <div className="flex flex-col min-h-screen bg-white font-sans">
      <AboutHero />
      <AboutChallenge />
      <AboutFeatures />
      <AboutClients />
      <AboutSteps />
      <CTASection/>
      <Footer />
    </div>
  );
}
