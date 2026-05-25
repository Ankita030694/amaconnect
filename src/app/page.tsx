import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AskAMAFeature from "@/components/AskAMAFeature";
import LegalQA from "@/components/LegalQA";
import LawyerInterviews from "@/components/LawyerInterviews";
import LegalCommunities from "@/components/LegalCommunities";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import TopLawyerStories from "@/components/TopLawyerStories";
import CommunityShowcase from "@/components/CommunityShowcase";


export const metadata: Metadata = {
  title: "AMA Connect | Digital Legal Solutions & Custom Templates",
  description: "Access premium digital legal services, custom contract drafting, professional lawyer interviews, and community Q&A forums with AMA Legal Solutions.",
  alternates: {
    canonical: "https://amaconnect.in",
  },
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white font-sans">
      {/* <Navbar /> */}
      <Hero />
      <AskAMAFeature />
      <TopLawyerStories />
      <CommunityShowcase />
      {/* <LegalQA /> */}
      {/* <LawyerInterviews /> */}
      {/* <LegalCommunities /> */}
      <CTASection />
      <Footer />
    </div>
  );
}

