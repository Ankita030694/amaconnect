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
    const list = await LawyerInterviewModel.find({}).sort({ created: -1 }).limit(10).lean();
    
    // Sort so that the featured interview is always at index 0
    const sorted = JSON.parse(JSON.stringify(list));
    const featuredIndex = sorted.findIndex((item: any) => item.isFeatured);
    if (featuredIndex > 0) {
      const [featuredItem] = sorted.splice(featuredIndex, 1);
      sorted.unshift(featuredItem);
    }
    return sorted;
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

