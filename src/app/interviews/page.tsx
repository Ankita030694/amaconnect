import { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import LawyersHero from "@/components/LawyersHero";
import TopLawyerStories from "@/components/TopLawyerStories";
import CourtroomExperiences from "@/components/CourtroomExperiences";
// import AllLawyerStories from "@/components/AllLawyerStories";
// import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
// import LawyerInterviews from "@/components/LawyerInterviews";
import RequestDraftForm from "@/components/RequestDraftForm";

export const metadata: Metadata = {
  title: "Lawyer Interviews & Legal Success Stories | AMA Connect",
  description: "Read exclusive interviews with prominent legal professionals, attorneys, and law experts sharing courtroom experiences and legal insights.",
  alternates: {
    canonical: "https://amaconnect.in/interviews",
  },
};

export default function InterviewsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white font-sans">
      {/* <Navbar /> */}
      <main className="flex-grow pt-20">


        {/* New Top Stories Section */}
        <TopLawyerStories className="!pt-0" />

        {/* Courtroom Experiences Carousel */}
        <CourtroomExperiences />

        {/* Interview Banner Section */}
        <div className="w-full mx-auto py-8 sm:py-8">
          <div className="relative w-full overflow-hidden rounded-3xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
            <Image
              src="/Interview.svg"
              alt="Interview Success Stories"
              width={1920}
              height={700}
              className="w-full h-auto object-cover"
              priority
            />
          </div>
        </div>

        {/* All Lawyer Stories Grid */}
        {/* <AllLawyerStories /> */}

        {/* <LawyerInterviews /> */}

        {/* Suggest an Interview Form */}
        <RequestDraftForm defaultReason="Suggest a Professional Interview" />

        {/* <CTASection /> */}
      </main>
      <Footer />
    </div>
  );
}

