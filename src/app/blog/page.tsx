import dbConnect from '../../lib/dbConnect';
import { Blog as BlogModel } from '../../lib/models';
import BlogPage from './blogcomp';
import { Suspense } from 'react';
// import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from 'next/link';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Legal Blogs & Expert Insights',
  description: 'Explore expert legal blogs from AMA Legal Solutions, featuring insights on corporate law, compliance, contracts, and more to keep you informed.',
  alternates: {
    canonical: 'https://amaconnect.in/blog',
  },
};

// Enhanced loading component
const BlogLoading = () => (
  <div className="min-h-screen bg-white flex items-center justify-center font-sans">
    <div className="text-center">
      <div className="w-12 h-12 border-4 border-[#D2A02A] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
      <p className="text-lg text-gray-600">Loading blogs...</p>
    </div>
  </div>
);

export const dynamic = 'force-dynamic';

// Helper function to decode standard HTML entities
const decodeEntities = (str: string): string => {
  if (!str) return '';
  return str
    .replace(/&amp;?/gi, '&')
    .replace(/&lt;/gi, '<')
    .replace(/&gt;/gi, '>')
    .replace(/&quot;/gi, '"')
    .replace(/&#39;/gi, "'")
    .replace(/&ndash;/gi, '–')
    .replace(/&mdash;/gi, '—')
    .replace(/&nbsp;/gi, ' ');
};

// Helper function to clean raw blog descriptions and truncate to a professional short version
const truncateWords = (text: string, wordCount: number) => {
  if (!text) return '';
  
  // 1. Remove heading tags and their internal text contents (e.g. <h2>...</h2>) to avoid heading-body mashing
  let cleaned = text.replace(/<h[1-6][^>]*>[\s\S]*?<\/h[1-6]>/gi, ' ');
  
  // 2. Strip all remaining HTML tags
  cleaned = cleaned.replace(/<[^>]*>/g, ' ');
  
  // 3. Decode HTML entities
  cleaned = decodeEntities(cleaned);
  
  // 4. Normalize whitespaces
  cleaned = cleaned.replace(/\s+/g, ' ').trim();
  
  // 5. Truncate to word count limit
  const words = cleaned.split(/\s+/);
  if (words.length <= wordCount) return cleaned;
  return words.slice(0, wordCount).join(' ') + '...';
};

const getBlogs = async () => {
    try {
        await dbConnect();
        // Fetch from MongoDB, sorted by created date descending
        const blogsList = await BlogModel.find({}).sort({ created: -1 }).lean();

        return JSON.parse(JSON.stringify(blogsList)).map((data: any) => {
            return {
                id: data._id || '',
                title: decodeEntities(data.title || ''),
                subtitle: decodeEntities(data.subtitle || ''),
                description: truncateWords(data.description || '', 20),
                fullDescription: truncateWords(data.description || '', 150),
                date: data.date || '',
                image: data.image || '',
                // Handle different timestamp formats or missing created date
                created: typeof data.created === 'number' 
                  ? data.created 
                  : (data.created ? new Date(data.created).getTime() : Date.now()),
                metaTitle: decodeEntities(data.metaTitle || ''),
                metaDescription: decodeEntities(data.metaDescription || ''),
                slug: data.slug || ''
            };
        });
    } catch (error) {
        console.error("Error fetching blogs from MongoDB:", error);
        return [];
    }
};

export default async function Page() {
  const blogs = await getBlogs();

  return (
    <main className="bg-white font-sans">
      {/* <Navbar /> */}
      
      <div className="container mx-auto px-4 py-8">
        <h1 
          className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-center mb-10 mt-6 leading-tight tracking-tight text-[#2D2219]"
        >
          Legal Blogs & <span className="text-[#D4AF37]">Expert Insights</span>
        </h1>

        <Suspense fallback={<BlogLoading />}>
          <BlogPage initialBlogs={blogs} />
        </Suspense>
      </div>

      {/* SSR-rendered crawlable content — visible to search engines, hidden from users */}
      {blogs.length > 0 && (
        <section
          aria-hidden="true"
          className="sr-only"
          data-nosnippet
        >
          <h2 className="sr-only">All Legal Blogs by AMA Legal Solutions</h2>
          <ul>
            {blogs.map((blog: any) => (
              <li key={blog.id}>
                <Link href={`/blog/${blog.slug}`}>
                  <h3>{blog.title}</h3>
                </Link>
                {blog.date && <time>{blog.date}</time>}
                {blog.subtitle && <p>{blog.subtitle}</p>}
                <p>{blog.fullDescription}</p>
              </li>
            ))}
          </ul>
        </section>
      )}

        <div className="max-w-5xl mx-auto mb-[80px] mt-[40px] font-sans">
          <div className="bg-[#FAF8F5] rounded-2xl border border-[#5A4C33]/10 p-8 md:p-10 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#D2A02A]/5 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#5A4C33]/5 rounded-full blur-3xl pointer-events-none" />
            
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative z-10">
              <div className="md:col-span-7 space-y-4 text-left">
                <span className="text-[#D2A02A] text-xs uppercase font-extrabold tracking-widest block">
                  Authoritative Guidance
                </span>
                <h2 className="text-2xl md:text-3xl font-bold text-[#1A1A1A] leading-tight">
                  Welcome to the AMA Connect Legal Blog
                </h2>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  A premier educational resource curated by enrolled advocates at{' '}
                  <strong className="text-[#5A4C33] font-semibold">AMA Legal Solutions</strong>. 
                  Our mission is to demystify complex legal frameworks, statutory amendments, 
                  and regulatory updates to empower individual citizens, business owners, and legal 
                  professionals across India.
                </p>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  We analyze recent High Court and Supreme Court ruling trends to provide you with 
                  practical legal answers and actionable guidance for everyday legal compliance.
                </p>
              </div>

              <div className="md:col-span-5 bg-white rounded-xl border border-gray-100 p-6 shadow-2xs space-y-4 text-left">
                <h3 className="text-sm font-bold text-[#5A4C33] uppercase tracking-wider border-b border-gray-100 pb-2">
                  Areas of Coverage & Research
                </h3>
                <ul className="space-y-2.5">
                  {[
                    'Corporate Law & Compliance',
                    'Debt Recovery Protocols & OTS',
                    'Intellectual Property Rights (IPR)',
                    'Family Dispute Resolutions',
                    'Litigation Defense Strategies',
                  ].map((area, idx) => (
                    <li key={idx} className="flex items-center gap-2.5 text-xs md:text-sm text-gray-700 font-medium">
                      <svg className="w-4.5 h-4.5 text-[#D2A02A] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {area}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>


      <Footer />
    </main>
  );
}
