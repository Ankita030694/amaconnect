import TopStatsBar from "@/components/TopStatsBar";
import HeroFeatured from "@/components/HeroFeatured";
import CommunitiesRow from "@/components/CommunitiesRow";
import LiveActivityTicker from "@/components/LiveActivityTicker";
import LiveActivityFeed from "@/components/LiveActivityFeed";
import LatestArticles from "@/components/LatestArticles";
import LatestLegalNewsCompact from "@/components/LatestLegalNewsCompact";
import AppDownloadBridge from "@/components/AppDownloadBridge";
import Footer from "@/components/Footer";
import dbConnect from "@/lib/dbConnect";
import { LawyerInterview as LawyerInterviewModel, Blog as BlogModel } from "@/lib/models";

export const revalidate = 300; // Revalidate every 5 minutes

const getInterviews = async () => {
  try {
    await dbConnect();

    const featured = await LawyerInterviewModel.findOne({ isFeatured: true }).lean();

    const limit = featured ? 9 : 10;
    const query = featured ? { _id: { $ne: featured._id } } : {};

    const latest = await LawyerInterviewModel.find(query)
      .sort({ created: -1 })
      .limit(limit)
      .lean();

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
    const blogs = await BlogModel.find({}).sort({ created: -1 }).limit(4).lean();
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
      <main className="flex-grow flex flex-col gap-8 pb-16">
        
        {/* ROW 1: Top Stats Bar */}
        <TopStatsBar />

        {/* ROW 2: Flagship Hero Interview */}
        <HeroFeatured initialInterviews={interviews} />

        {/* Full-width App Promotion Banner (Moved above the Communities block) */}
        <div className="w-full py-4">
          <AppDownloadBridge />
        </div>

        {/* 
          ROWS 3 & 4: Multi-column content 
          Mobile: Single column stack
          Desktop: 12-column CSS Grid 
        */}
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col xl:grid xl:grid-cols-12 gap-6 lg:gap-8">
          
          {/* Third Row: Communities, Live Activity */}
          <div className="xl:col-span-7 flex flex-col">
            <CommunitiesRow />
            <LiveActivityTicker />
          </div>
          <div className="xl:col-span-5 flex flex-col">
            <LiveActivityFeed />
          </div>

        </div>

        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col xl:grid xl:grid-cols-12 gap-6 lg:gap-8">

          {/* Spacer between row 3 and row 4 for mobile stack */}
          <div className="w-full h-px bg-gray-100 xl:hidden my-2" />

          {/* Fourth Row: Latest Articles, News */}
          <div className="xl:col-span-8 flex flex-col">
            <LatestArticles blogs={blogs} />
          </div>
          <div className="xl:col-span-4 flex flex-col">
            <LatestLegalNewsCompact />
          </div>

        </div>

      </main>
      <Footer />
    </div>
  );
}