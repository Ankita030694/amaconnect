import dbConnect from "@/lib/dbConnect";
import { LawyerInterview as LawyerInterviewModel } from "@/lib/models";
import type { Metadata, ResolvingMetadata } from "next";
import InterviewDetail from "./interviewdetail";
import Script from "next/script";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getOptimalPageTitle } from "@/lib/seoTitleHelper";

export const revalidate = 3600; // Cache the page at the Edge for 1 hour

export async function generateStaticParams() {
  // On-demand static generation. Returns empty array so it builds when first visited.
  return [];
}

// Optimized function to fetch interview by slug
const getInterviewBySlug = async (slug: string) => {
  console.log(`[getInterviewBySlug] Fetching interview for slug: "${slug}"`);

  try {
    await dbConnect();
    // Try exact match first
    let interview = await LawyerInterviewModel.findOne({ slug }).lean();

    // If not found, try decoded slug
    if (!interview) {
        const decodedSlug = decodeURIComponent(slug);
        if (decodedSlug !== slug) {
            console.log(`[getInterviewBySlug] Retrying with decoded slug: "${decodedSlug}"`);
            interview = await LawyerInterviewModel.findOne({ slug: decodedSlug }).lean();
        }
    }
    
    // If still not found, try trimming
    if (!interview) {
        const trimmedSlug = slug.trim();
        if (trimmedSlug !== slug) {
            console.log(`[getInterviewBySlug] Retrying with trimmed slug: "${trimmedSlug}"`);
            interview = await LawyerInterviewModel.findOne({ slug: trimmedSlug }).lean();
        }
    }

    if (interview) {
      // Serialize Mongo ID and properties safely
      return JSON.parse(JSON.stringify(interview));
    }
    
    console.log(`[getInterviewBySlug] No interview found for slug: "${slug}"`);
    return null;
  } catch (error) {
    console.error("Error fetching interview by slug:", error);
    return null;
  }
};

// Function to fetch Related Interviews
const getRelatedInterviews = async (excludeId: string) => {
  try {
    await dbConnect();
    const related = await LawyerInterviewModel.find({ _id: { $ne: excludeId } })
      .sort({ created: -1 })
      .limit(3)
      .lean();
    
    return JSON.parse(JSON.stringify(related));
  } catch (error) {
    console.error("Error fetching related interviews:", error);
    return [];
  }
};

// Dynamic metadata generation
export async function generateMetadata(
  props: { params: Promise<{ slug: string }> },
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { slug } = await props.params;

  let title = "Lawyer Interview";
  let description = "Read verified legal insights and advocate guides at AMA Legal Solutions";
  let image = "";
  let author = "AMA Legal Solutions";

  const baseUrl = "https://amaconnect.in";

  try {
    const interviewData = await getInterviewBySlug(slug);
    
    if (interviewData) {
      const rawTitle = interviewData.metaTitle || interviewData.title || title;
      title = getOptimalPageTitle(rawTitle);
      description = interviewData.metaDescription || description;
      image = interviewData.image || "";
      author = interviewData.lawyer || author;
    }
  } catch (error) {
    console.error("Error fetching interview metadata:", error);
  }

  const interviewUrl = `${baseUrl}/interviews/${slug}`;

  return {
    title,
    description,
    alternates: {
      canonical: interviewUrl,
    },
    openGraph: {
      title,
      description,
      url: interviewUrl,
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

// Updated Page component
export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;

  let interviewData = null;
  let relatedInterviews: any[] = [];
  let combinedSchema = null;

  try {
    interviewData = await getInterviewBySlug(slug);
    if (interviewData) {
      relatedInterviews = await getRelatedInterviews(interviewData._id);

      // Generate Combined Schema
      combinedSchema = generateCombinedSchema(interviewData);
    }
  } catch (error) {
    console.error("Error fetching interview data:", error);
  }

  if (!interviewData) {
    return (
      <div className="min-h-dvh flex flex-col bg-gray-50">
        {/* <Navbar /> */}
        <div className="flex-grow flex items-center justify-center py-24">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900">Interview Guide Not Found</h1>
            <p className="text-gray-600 mt-2">The lawyer case guide you are looking for does not exist or has been modified.</p>
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
          id="interview-combined-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(combinedSchema) }}
        />
      )}

      {/* SSR-rendered crawlable content — guaranteed in server HTML */}
      <article className="sr-only" aria-hidden="true">
        <h1>{interviewData.title}</h1>
        {interviewData.date && <time dateTime={interviewData.date}>{interviewData.date}</time>}
        {interviewData.lawyer && <span>{interviewData.lawyer}</span>}
        {interviewData.specialization && <p>{interviewData.specialization}</p>}
        <p>{(interviewData.description || '').replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim().split(/\s+/).slice(0, 150).join(' ')}...</p>
      </article>

      <main className="flex-grow pt-0">
        <InterviewDetail 
          interview={interviewData} 
          relatedInterviews={relatedInterviews}
        />
      </main>
      <Footer />
    </div>
  );
}

function generateCombinedSchema(interviewData: any) {
  const baseUrl = "https://amaconnect.in";
  const interviewUrl = `${baseUrl}/interviews/${interviewData.slug}`;
  const faqs = interviewData.faqs || [];
  const reviews = interviewData.reviews || [];
  const isOrganizationAuthor = !interviewData.lawyer || interviewData.lawyer === "AMA Legal Solutions";

  const graph = [];

  // 1. Article/Blog Schema
  const articleSchema: any = {
    "@type": "BlogPosting",
    "@id": `${interviewUrl}#article`,
    "isPartOf": { "@id": interviewUrl },
    "author": {
      "@type": isOrganizationAuthor ? "Organization" : "Person",
      "name": interviewData.lawyer || "AMA Legal Solutions",
      "url": `${baseUrl}/interviews`
    },
    "headline": interviewData.title,
    "datePublished": interviewData.date,
    "dateModified": interviewData.date,
    "mainEntityOfPage": { "@id": interviewUrl },
    "publisher": { "@id": `${baseUrl}/#organization` },
    "image": interviewData.image ? {
      "@type": "ImageObject",
      "url": interviewData.image,
      "caption": interviewData.title
    } : undefined,
    "keywords": interviewData.metaTitle || interviewData.title,
    "articleSection": "Lawyer Case Study",
    "inLanguage": "en-IN",
    "description": interviewData.metaDescription || interviewData.description?.replace(/<[^>]*>/g, '').substring(0, 160) || ''
  };
  graph.push(articleSchema);

  // 2. Organization / LocalBusiness / LegalService Schema with AggregateRating
  const organizationSchema: any = {
    "@type": ["LocalBusiness", "LegalService"],
    "@id": `${baseUrl}/#organization`,
    "name": "AMA Legal Solutions",
    "url": baseUrl,
    "logo": {
      "@type": "ImageObject",
      "url": `${baseUrl}/ama-legal-solutions-logo.png`
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "2493AP, Block G, Sushant Lok 2,Sector 57",
      "addressLocality": "Gurugram",
      "addressRegion": "Haryana",
      "postalCode": "122001",
      "addressCountry": "IN"
    },
    "telephone": "+918700343611",
    "priceRange": "$$"
  };

  // Add AggregateRating if reviews exist
  if (reviews && reviews.length > 0) {
    const totalRating = reviews.reduce((sum: number, review: any) => sum + (Number(review.rating) || 0), 0);
    const avgRating = (totalRating / reviews.length).toFixed(1);

    organizationSchema.aggregateRating = {
      "@type": "AggregateRating",
      "ratingValue": avgRating,
      "reviewCount": reviews.length.toString(),
      "bestRating": "5",
      "worstRating": "1"
    };

    organizationSchema.review = reviews.map((review: any) => ({
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
      "reviewBody": review.review || ""
    }));
  }

  graph.push(organizationSchema);

  // 3. Breadcrumb Schema
  graph.push({
    "@type": "BreadcrumbList",
    "@id": `${interviewUrl}#breadcrumb`,
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
        "name": "Interviews",
        "item": `${baseUrl}/interviews`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": interviewData.title,
        "item": interviewUrl
      }
    ]
  });

  // 4. FAQ Schema (if present)
  if (faqs.length > 0) {
    graph.push({
      "@id": `${interviewUrl}#faq`,
      "name": `${interviewData.title} - Frequently Asked Questions`,
      "description": `Frequently asked questions about ${interviewData.title}`,
      "url": interviewUrl,
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
