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
  <div className="min-h-screen bg-[#F5F2EB] flex items-center justify-center">
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
    <main className='bg-[#F5F2EB]' style={{ fontFamily: "var(--font-polysans)" }}>
      {/* <Navbar /> */}
      
      <div className="container mx-auto px-4 py-8">
        <h1 
          className="text-[32px] md:text-[45px] font-semibold text-center mb-[30px] mt-[20px] leading-[40px] md:leading-[65px] opacity-100 h1-seo-fix"
          style={{ color: '#5A4C33', fontFamily: "var(--font-polysans)" }}
        >
          Legal Blogs & Expert Insights
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

<div className="max-w-3xl mx-auto text-center mb-[60px] text-[#5A4C33]/85 text-sm sm:text-base leading-relaxed space-y-4">
          <p>
            Welcome to the AMA Connect Expert Legal Blog, a premier educational resource designed by 
            enrolled advocates at AMA Legal Solutions. Our mission is to demystify complex legal frameworks, 
            statutory amendments, and regulatory updates to empower individual citizens, business owners, 
            and legal professionals across India.
          </p>
          <p>
            Our legal editorial board regularly publishes authoritative articles spanning diverse domains 
            including corporate law, debt recovery protocols, one-time settlements (OTS), intellectual property rights, 
            family dispute resolutions, and litigation defense strategies. We analyze recent High Court and Supreme Court 
            ruling trends to provide you with practical legal answers and actionable guidance for everyday legal compliance.
          </p>
        </div>


      <Footer />
    </main>
  );
}
