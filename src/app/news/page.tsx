import LatestLegalNewsCompact from "@/components/LatestLegalNewsCompact";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Latest Legal News | AMA Connect",
  description: "Stay updated with the latest legal news, supreme court judgments, and legal developments in India.",
};

export default function NewsPage() {
  return (
    <main className="flex-1 flex flex-col min-h-screen">
      <div className="pt-12 pb-12 bg-[#F8F5EC] flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#30261C] mb-4 text-center">
            Latest Legal News
          </h1>
          <p className="text-center text-[#30261C]/80 text-lg mb-12 max-w-3xl mx-auto">
            Stay informed with the latest updates from Indian courts, recent judgments, and important legal developments.
          </p>
          <LatestLegalNewsCompact />
        </div>
      </div>
      <CTASection />
      <Footer />
    </main>
  );
}
