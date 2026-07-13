import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AskAMAFeature from "@/components/AskAMAFeature";
import LatestBlogs from "@/components/LatestBlogs";
import LegalQA from "@/components/LegalQA";
import LawyerInterviews from "@/components/LawyerInterviews";
import LegalCommunities from "@/components/LegalCommunities";
import CTASection from "@/components/CTASection";
import CourtroomExperiences from "@/components/CourtroomExperiences";
import Footer from "@/components/Footer";
import TopLawyerStories from "@/components/TopLawyerStories";
import CommunityShowcase from "@/components/CommunityShowcase";

import dbConnect from "@/lib/dbConnect";
import { LawyerInterview as LawyerInterviewModel, Blog as BlogModel } from "@/lib/models";

export const revalidate = 300; // Revalidate every 5 minutes

const getInterviews = async () => {
  try {
    await dbConnect();
    
    // 1. Get the featured interview (if any)
    const featured = await LawyerInterviewModel.findOne({ isFeatured: true }).lean();
    
    // 2. Get the latest interviews, excluding the featured one to avoid duplicates
    const limit = featured ? 9 : 10;
    const query = featured ? { _id: { $ne: featured._id } } : {};
    
    const latest = await LawyerInterviewModel.find(query)
      .sort({ created: -1 })
      .limit(limit)
      .lean();
      
    // 3. Combine them, putting featured at the top
    const combined = featured ? [featured, ...latest] : latest;
    
    return JSON.parse(JSON.stringify(combined));
  } catch (error) {
    console.error("Error fetching lawyer interviews on server home page:", error);
    return [];
  }
};

const getLatestBlogs = async () => {
  try {
    await dbConnect();
    const blogs = await BlogModel.find({}).sort({ created: -1 }).limit(3).lean();
    return JSON.parse(JSON.stringify(blogs));
  } catch (error) {
    console.error("Error fetching latest blogs on server home page:", error);
    return [];
  }
};

export default async function Home() {
  const interviews = await getInterviews();
  const blogs = await getLatestBlogs();

  return (
    <div className="flex flex-col min-h-screen bg-white font-sans">
      {/* <Navbar /> */}
      <main className="flex-grow">
        <Hero initialInterviews={interviews} />
        <AskAMAFeature />
        <LatestBlogs blogs={blogs} />
        {/* <TopLawyerStories initialInterviews={interviews} /> */}
        <CommunityShowcase />
        {/* <LegalQA /> */}
        {/* <LawyerInterviews /> */}
        {/* <LegalCommunities /> */}
        <CTASection />
        <CourtroomExperiences />
      </main>
      <Footer />
    </div>
  );
}

