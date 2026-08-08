export interface CustomNewsArticle {
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  source: string;
  author: string;
  categories?: string[]; // Optional: Which categories to show this in (e.g. ['All', 'Supreme Court']). If omitted, shows in All.
}

// Add your custom news articles here. 
// They will automatically appear at the top of the news feed.
export const customNews: CustomNewsArticle[] = [
  {
    title: "AMA Connect Officially Launches New Platform for Legal Professionals",
    description: "In an exciting development, AMA Connect has released its brand new platform featuring advanced networking, case tracking, and real-time news updates tailored for the Indian legal community.",
    url: "#",
    urlToImage: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=1200&auto=format&fit=crop",
    publishedAt: new Date().toISOString(),
    source: "AMA Connect Press",
    author: "Admin",
    categories: ["All", "Corporate"]
  }
];
