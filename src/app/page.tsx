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

import dbConnect from "@/lib/dbConnect";
import { LawyerInterview as LawyerInterviewModel } from "@/lib/models";

export const dynamic = 'force-dynamic';

const getInterviews = async () => {
  try {
    await dbConnect();
    const list = await LawyerInterviewModel.find({}).sort({ created: -1 }).lean();
    return JSON.parse(JSON.stringify(list));
  } catch (error) {
    console.error("Error fetching lawyer interviews on server home page:", error);
    return [];
  }
};

export default async function Home() {
  const interviews = await getInterviews();

  return (
    <div className="flex flex-col min-h-screen bg-white font-sans">
      {/* <Navbar /> */}
      <Hero initialInterviews={interviews} />
      <AskAMAFeature />
      <TopLawyerStories initialInterviews={interviews} />
      <CommunityShowcase />
      {/* <LegalQA /> */}
      {/* <LawyerInterviews /> */}
      {/* <LegalCommunities /> */}
      <CTASection />
      <Footer />
    </div>
  );
}

