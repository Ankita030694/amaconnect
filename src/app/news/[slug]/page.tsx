import React from 'react';
import { notFound } from 'next/navigation';
import dbConnect from "@/lib/dbConnect";
import { CustomNews } from "@/lib/models";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export const revalidate = 3600; 

const getNewsBySlug = async (slug: string) => {
  try {
    await dbConnect();
    const article = await CustomNews.findOne({ slug }).lean();
    if (article) return JSON.parse(JSON.stringify(article));
    return null;
  } catch (err) {
    console.error("Error fetching news by slug:", err);
    return null;
  }
};

type Props = {
  params: Promise<{ slug: string }> | { slug: string }
};

export async function generateMetadata(props: Props) {
  // Support Next.js 15+ promise params but also Next 14 standard params
  const resolvedParams = await Promise.resolve(props.params);
  const article = await getNewsBySlug(resolvedParams.slug);
  if (!article) return { title: 'News Not Found | AMA Connect' };

  return {
    title: `${article.title} | AMA Connect News`,
    description: article.description,
    openGraph: {
      title: article.title,
      description: article.description,
      images: [article.urlToImage]
    }
  };
}

export default async function NewsArticlePage(props: Props) {
  const resolvedParams = await Promise.resolve(props.params);
  const article = await getNewsBySlug(resolvedParams.slug);

  if (!article) {
    notFound();
  }

  return (
    <main className="min-h-dvh bg-[#FDFBF7] pt-28">
      <Navbar />
      <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <div className="flex gap-2 mb-4">
            {article.categories?.map((cat: string) => (
              <span key={cat} className="px-3 py-1 bg-[#C9A227]/10 text-[#C9A227] text-xs font-bold uppercase tracking-wider rounded-md">
                {cat}
              </span>
            ))}
          </div>
          
          <h1 className="text-3xl md:text-5xl font-black text-[#1E1E1E] leading-tight mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            {article.title}
          </h1>

          <div className="flex items-center gap-4 text-sm text-[#6B6560] mb-8 font-medium font-sans">
            <span className="flex items-center gap-1.5">
              <span>By {article.author || 'AMA Connect'}</span>
            </span>
            <span>•</span>
            <span>{new Date(article.publishedAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
          </div>
        </div>

        {article.urlToImage && (
          <div className="w-full h-[400px] md:h-[500px] relative rounded-2xl overflow-hidden mb-12 shadow-lg">
            <img 
              src={article.urlToImage} 
              alt={article.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        )}

        <div 
          className="prose prose-lg prose-slate max-w-none prose-headings:font-serif prose-headings:text-[#1E1E1E] prose-p:text-[#4A4540] prose-a:text-[#C9A227] prose-img:rounded-xl"
          style={{ fontFamily: "'Inter', sans-serif" }}
          dangerouslySetInnerHTML={{ __html: article.content || article.description }}
        />
      </div>
      <Footer />
    </main>
  );
}
