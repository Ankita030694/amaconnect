import Footer from "@/components/Footer";
import NewsContent from "./NewsContent";

export const metadata = {
  title: "Latest Legal News | AMA Connect",
  description: "Stay updated with the latest legal news, supreme court judgments, and legal developments in India.",
};

export default function NewsPage() {
  return (
    <main className="flex-1 flex flex-col min-h-screen bg-[#F5F3EE]">
      <NewsContent />
      <Footer />
      <style dangerouslySetInnerHTML={{__html: `
        html { scroll-behavior: smooth; }
      `}} />
    </main>
  );
}
