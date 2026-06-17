import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import SuccessStoriesHero from "@/components/SuccessStoriesHero";
import SuccessStoriesGrid from "@/components/SuccessStoriesGrid";
import SuccessStats from "@/components/SuccessStats";
import ShareStoryForm from "@/components/ShareStoryForm";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Client Success Stories & Testimonials | AMA Legal Solutions",
  description: "Read real stories from our clients who found the right legal help, custom contract templates, and expert lawyer advice, achieving successful legal outcomes.",
  alternates: {
    canonical: "https://amaconnect.in/success-stories",
  },
};

export default function SuccessStoriesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white font-sans">
      {/* <Navbar /> */}
      <main className="flex-grow">
        <SuccessStoriesHero />
        <SuccessStats />
        <SuccessStoriesGrid />
        <ShareStoryForm />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
