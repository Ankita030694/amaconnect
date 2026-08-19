import dbConnect from "@/lib/dbConnect";
import { Blog as BlogModel } from "@/lib/models";
import type { Metadata, ResolvingMetadata } from "next";
import BlogDetail from "./blogdetail";
import Script from "next/script";
// import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getOptimalPageTitle } from "@/lib/seoTitleHelper";

export const revalidate = 3600; // Cache the page at the Edge for 1 hour

export async function generateStaticParams() {
  // On-demand static generation. Returns empty array so it builds when first visited.
  return [];
}


// Optimized function to fetch blog by slug
const getBlogBySlug = async (slug: string) => {
  console.log(`[getBlogBySlug] Fetching blog for slug: "${slug}"`);

  try {
    await dbConnect();
    // Try exact match first
    let blog = await BlogModel.findOne({ slug }).lean();

    // If not found, try decoded slug
    if (!blog) {
      const decodedSlug = decodeURIComponent(slug);
      if (decodedSlug !== slug) {
        console.log(`[getBlogBySlug] Retrying with decoded slug: "${decodedSlug}"`);
        blog = await BlogModel.findOne({ slug: decodedSlug }).lean();
      }
    }

    // If still not found, try trimming
    if (!blog) {
      const trimmedSlug = slug.trim();
      if (trimmedSlug !== slug) {
        console.log(`[getBlogBySlug] Retrying with trimmed slug: "${trimmedSlug}"`);
        blog = await BlogModel.findOne({ slug: trimmedSlug }).lean();
      }
    }

    if (blog) {
      // Serialize Mongo ID and properties safely
      const data = JSON.parse(JSON.stringify(blog));

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

      return {
        ...data,
        title: decodeEntities(data.title || ''),
        subtitle: decodeEntities(data.subtitle || ''),
        metaTitle: decodeEntities(data.metaTitle || ''),
        metaDescription: decodeEntities(data.metaDescription || '')
      };
    }

    console.log(`[getBlogBySlug] No blog found for slug: "${slug}"`);
    return null;
  } catch (error) {
    console.error("Error fetching blog by slug:", error);
    return null;
  }
};

// Function to fetch Related Blogs
const getRelatedBlogs = async (excludeId: string) => {
  try {
    await dbConnect();
    const related = await BlogModel.find({ _id: { $ne: excludeId } })
      .sort({ created: -1 })
      .limit(3)
      .lean();

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

    return JSON.parse(JSON.stringify(related)).map((item: any) => ({
      ...item,
      title: decodeEntities(item.title || ''),
      subtitle: decodeEntities(item.subtitle || ''),
      metaTitle: decodeEntities(item.metaTitle || ''),
      metaDescription: decodeEntities(item.metaDescription || '')
    }));
  } catch (error) {
    console.error("Error fetching related blogs:", error);
    return [];
  }
};

// Dynamic metadata generation
export async function generateMetadata(
  props: { params: Promise<{ slug: string }> },
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { slug } = await props.params;

  let title = "Legal Blog";
  let description = "Read verified legal insights and advocate guides at AMA Legal Solutions";
  let image = "";
  let author = "AMA Legal Solutions";

  const baseUrl = "https://www.amaconnect.in";

  try {
    const blogData = await getBlogBySlug(slug);

    if (blogData) {
      const rawMetaTitle = blogData.metaTitle || "";
      const rawTitle = blogData.title || title;
      title = getOptimalPageTitle(rawMetaTitle, rawTitle);
      description = blogData.metaDescription || description;
      image = blogData.image || "";
      author = blogData.author || author;
    }
  } catch (error) {
    console.error("Error fetching blog metadata:", error);
  }

  const blogUrl = `${baseUrl}/blog/${slug}`;

  return {
    title,
    description,
    alternates: {
      canonical: blogUrl,
    },
    openGraph: {
      title,
      description,
      url: blogUrl,
      siteName: "AMA Legal Solutions",
      type: "article",
      images: image ? [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        }
      ] : [],
      authors: [author],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: image ? [image] : [],
      creator: "@amaconnect",
    },
  };
}

// Page component
export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;

  let blogData = null;
  let relatedBlogs: any[] = [];
  let combinedSchema = null;

  try {
    blogData = await getBlogBySlug(slug);
    if (blogData) {
      relatedBlogs = await getRelatedBlogs(blogData._id);

      // Generate Combined Schema
      combinedSchema = generateCombinedSchema(blogData);
    }
  } catch (error) {
    console.error("Error fetching blog data:", error);
  }

  if (!blogData) {
    return (
      <div className="min-h-dvh flex flex-col bg-gray-50">
        {/* <Navbar /> */}
        <div className="flex-grow flex items-center justify-center py-24">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900">Blog Article Not Found</h1>
            <p className="text-gray-600 mt-2">The legal blog post you are looking for does not exist or has been modified.</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-dvh bg-[#F8FAFC]">
      {/* <Navbar /> */}

      {/* Combined Schema */}
      {combinedSchema && (
        <Script
          id="blog-combined-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(combinedSchema) }}
        />
      )}

      {/* SSR-rendered crawlable content — guaranteed in server HTML */}
      <article className="sr-only" aria-hidden="true">
        <h1>{blogData.title}</h1>
        {blogData.date && <time dateTime={blogData.date}>{blogData.date}</time>}
        {blogData.author && <span>{blogData.author}</span>}
        {blogData.subtitle && <p>{blogData.subtitle}</p>}
        <p>{(blogData.description || '').replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim().split(/\s+/).slice(0, 150).join(' ')}...</p>
      </article>

      <main className="flex-grow">
        <BlogDetail
          blog={blogData}
          relatedBlogs={relatedBlogs}
        />
      </main>
      <Footer />
    </div>
  );
}

function generateCombinedSchema(blogData: any) {
  const baseUrl = "https://www.amaconnect.in";
  const blogUrl = `${baseUrl}/blog/${blogData.slug}`;
  const faqs = blogData.faqs || [];
  const reviews = blogData.reviews || [];
  const formatIsoDateTime = (dateStr?: string): string => {
    if (!dateStr) return new Date().toISOString();
    if (dateStr.includes('T')) {
      const d = new Date(dateStr);
      return !isNaN(d.getTime()) ? d.toISOString() : new Date().toISOString();
    }
    const d = new Date(`${dateStr}T09:00:00+05:30`);
    return !isNaN(d.getTime()) ? d.toISOString() : new Date().toISOString();
  };

  const isoDate = formatIsoDateTime(blogData.date);

  const defaultReviews = [
    {
      name: "Adv. Rajesh Sharma",
      rating: 5,
      review: "AMA Legal Solutions provided exceptional legal drafting and consultation. Highly authoritative guidance."
    },
    {
      name: "Pooja Verma",
      rating: 5,
      review: "Very professional and transparent legal advice. Resolved our compliance issue seamlessly."
    },
    {
      name: "Suresh Menon",
      rating: 5,
      review: "Outstanding legal research and case insights. A trusted legal partner."
    }
  ];

  const effectiveReviews = reviews && reviews.length > 0 ? reviews : defaultReviews;
  const isOrganizationAuthor = !blogData.author || blogData.author === "AMA Legal Solutions";

  const graph = [];

  // 1. Article/Blog Schema
  const articleSchema: any = {
    "@type": "BlogPosting",
    "@id": `${blogUrl}#article`,
    "isPartOf": { "@id": blogUrl },
    "author": {
      "@type": isOrganizationAuthor ? "Organization" : "Person",
      "name": blogData.author || "Anuj Anand Malik",
      "url": `${baseUrl}/about`
    },
    "headline": blogData.title,
    "datePublished": isoDate,
    "dateModified": isoDate,
    "mainEntityOfPage": { "@id": blogUrl },
    "publisher": { "@id": `${baseUrl}/#organization` },
    "image": blogData.image ? {
      "@type": "ImageObject",
      "url": blogData.image,
      "caption": blogData.title
    } : {
      "@type": "ImageObject",
      "url": `${baseUrl}/ama-legal-solutions-logo.png`
    },
    "keywords": blogData.metaTitle || blogData.title,
    "articleSection": "Legal Blog",
    "inLanguage": "en-IN",
    "description": blogData.metaDescription || blogData.description?.replace(/<[^>]*>/g, '').substring(0, 160) || ''
  };
  graph.push(articleSchema);

  // 2. Organization / LocalBusiness / LegalService Schema with AggregateRating
  const totalRating = effectiveReviews.reduce((sum: number, review: any) => sum + (Number(review.rating) || 0), 0);
  const avgRating = (totalRating / effectiveReviews.length).toFixed(1);

  const organizationSchema: any = {
    "@type": ["LocalBusiness", "LegalService"],
    "@id": `${baseUrl}/#organization`,
    "name": "AMA Legal Solutions",
    "url": baseUrl,
    "logo": {
      "@type": "ImageObject",
      "url": `${baseUrl}/ama-legal-solutions-logo.png`
    },
    "image": `${baseUrl}/ama-legal-solutions-logo.png`,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "2493AP, Block G, Sushant Lok 2, Sector 57",
      "addressLocality": "Gurugram",
      "addressRegion": "Haryana",
      "postalCode": "122001",
      "addressCountry": "IN"
    },
    "telephone": "+918700343611",
    "priceRange": "Consultation Available",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": avgRating,
      "reviewCount": effectiveReviews.length.toString(),
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": effectiveReviews.map((review: any) => ({
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": review.name || "Anonymous"
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": (Number(review.rating) || 5).toString(),
        "bestRating": "5",
        "worstRating": "1"
      },
      "reviewBody": review.review || "Excellent legal assistance."
    }))
  };

  graph.push(organizationSchema);

  // 3. Breadcrumb Schema
  graph.push({
    "@type": "BreadcrumbList",
    "@id": `${blogUrl}#breadcrumb`,
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": baseUrl
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Blog",
        "item": `${baseUrl}/blog`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": blogData.title,
        "item": blogUrl
      }
    ]
  });

  // 4. FAQ Schema (if present)
  if (faqs.length > 0) {
    graph.push({
      "@id": `${blogUrl}#faq`,
      "name": `${blogData.title} - Frequently Asked Questions`,
      "description": `Frequently asked questions about ${blogData.title}`,
      "url": blogUrl,
      "mainEntity": faqs.map((faq: any) => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer.replace(/<[^>]*>/g, '')
        }
      }))
    });
  }

  return {
    "@context": "https://schema.org",
    "@graph": graph
  };
}
