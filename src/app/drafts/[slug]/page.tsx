import { DRAFTS_DATA } from "@/data/drafts_data";
import type { Metadata, ResolvingMetadata } from "next";
import DraftDetail from "./draftdetail";
import Script from "next/script";
import Link from "next/link";
// import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  generateDraftContent,
  generateDraftFAQs,
  generateDraftReviews,
  generateDraftPreview,
  cleanTitle
} from "@/lib/draftsContentGenerator";
import { getOptimalDraftTitle } from "@/lib/seoTitleHelper";

export const revalidate = 3600; // Cache the page at the Edge for 1 hour

export async function generateStaticParams() {
  // On-demand static generation. Returns empty array so it builds on demand.
  // Perfectly handles 2,165+ items without bloat.
  return [];
}

// Precompute absolute O(1) map for instantaneous slug lookup
const DRAFT_MAP = new Map<string, typeof DRAFTS_DATA[0]>();
DRAFTS_DATA.forEach((draft) => {
  const lastDot = draft.fileName.lastIndexOf('.');
  const nameWithoutExt = lastDot !== -1 ? draft.fileName.substring(0, lastDot) : draft.fileName;
  const key = nameWithoutExt.toLowerCase().trim();
  DRAFT_MAP.set(key, draft);
});

// Normalized helper to find a draft by slug in O(1) time
const getDraftBySlug = (slug: string) => {
  const normalizedSlug = decodeURIComponent(slug).toLowerCase().trim();
  return DRAFT_MAP.get(normalizedSlug);
};

// Dynamic metadata generation
export async function generateMetadata(
  props: { params: Promise<{ slug: string }> },
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { slug } = await props.params;
  const draft = getDraftBySlug(slug);

  if (!draft) {
    return {
      title: "Legal Draft Template",
      description: "Download premium, professionally formatted legal drafts at AMA Legal Solutions.",
    };
  }

  const title = getOptimalDraftTitle(draft.title, cleanTitle);
  const cleanName = cleanTitle(draft.title);
  const description = `Get a fully formatted, legally compliant ${cleanName}. Professional legal draft with execution checklist, stamp duty rules, and immediate download.`;
  const baseUrl = "https://amaconnect.in";
  const draftUrl = `${baseUrl}/drafts/${slug}`;

  return {
    title,
    description,
    alternates: {
      canonical: draftUrl,
    },
    openGraph: {
      title,
      description,
      url: draftUrl,
      siteName: "AMA Legal Solutions",
      type: "article",
      images: [
        {
          url: "/logo_qa.png",
          width: 800,
          height: 600,
          alt: title,
        }
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/logo_qa.png"],
      creator: "@amaconnect",
    },
  };
}

// Main page component
export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  const draft = getDraftBySlug(slug);

  if (!draft) {
    return (
      <div className="min-h-screen flex flex-col bg-[#F5F2EB]">
        {/* <Navbar /> */}
        <div className="flex-grow flex items-center justify-center py-24 px-4 text-center">
          <div className="bg-white p-8 md:p-12 rounded-3xl border border-slate-100 shadow-3xs max-w-md">
            <div className="w-16 h-16 bg-amber-50 rounded-full flex items-center justify-center mx-auto mb-4 border border-amber-250">
              <svg className="w-8 h-8 text-[#C69214]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <h1 className="text-2xl font-bold text-gray-900">Legal Draft Not Found</h1>
            <p className="text-gray-500 mt-2 text-sm leading-relaxed">
              The legal template you are looking for does not exist or has been removed from our index.
            </p>
            <Link
              href="/drafts"
              className="mt-6 inline-block bg-[#1C1A17] hover:bg-black text-white px-6 py-2.5 rounded-[12px] font-bold text-sm transition-all"
            >
              Back to Drafts Library
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  // Generate dynamic, high-authority content, FAQs, and reviews
  const content = generateDraftContent(draft);
  const preview = generateDraftPreview(draft);
  const faqs = generateDraftFAQs(draft);
  const reviews = generateDraftReviews(draft);

  // Generate schema graph
  const combinedSchema = generateDraftSchema(draft, faqs, reviews, slug);

  return (
    <div className="flex flex-col min-h-screen bg-[#F8FAFC]">
      {/* <Navbar /> */}

      {/* Schema Script for Search Engine Indexation */}
      {combinedSchema && (
        <Script
          id="draft-combined-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(combinedSchema) }}
        />
      )}

      {/* Crawlability Node - Content always available in SSR response */}
      <article className="sr-only" aria-hidden="true">
        <h2>{draft.title}</h2>
        <span>Category: {draft.category}</span>
        <span>Subcategory: {draft.subCategory}</span>
        <p>{cleanTitle(draft.title)} is a professional legal document provided by AMA Legal Solutions.</p>
        <p>{content.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim().substring(0, 1000)}...</p>
      </article>

      <main className="flex-grow">
        <DraftDetail
          draft={draft}
          content={content}
          preview={preview}
          faqs={faqs}
          reviews={reviews}
        />
      </main>
      <Footer />
    </div>
  );
}

// Generate complete structured schema graphs for Google E-E-A-T
function generateDraftSchema(draft: any, faqs: any[], reviews: any[], slug: string) {
  const baseUrl = "https://amaconnect.in";
  const draftUrl = `${baseUrl}/drafts/${slug}`;
  const cleanName = cleanTitle(draft.title);

  const graph = [];

  // 1. Article/Guide Schema
  graph.push({
    "@type": "Article",
    "@id": `${draftUrl}#article`,
    "isPartOf": { "@id": draftUrl },
    "author": {
      "@type": "Organization",
      "name": "AMA Legal Solutions",
      "url": `${baseUrl}/drafts`
    },
    "headline": `How to Draft and Execute a ${cleanName}`,
    "publisher": { "@id": `${baseUrl}/#organization` },
    "image": {
      "@type": "ImageObject",
      "url": `${baseUrl}/logo_qa.png`,
      "caption": cleanName
    },
    "keywords": `${cleanName}, Legal Template, Draft Library, AMA Connect`,
    "articleSection": "Legal Templates Directory",
    "inLanguage": "en-IN",
    "description": `Step-by-step guidelines, stamp duty codes, and complete printable ${cleanName} template.`
  });

  // 2. LegalService Schema with AggregateRating
  const organizationSchema: any = {
    "@type": "LegalService",
    "@id": `${baseUrl}/#organization`,
    "name": "AMA Legal Solutions",
    "url": baseUrl,
    "logo": {
      "@type": "ImageObject",
      "url": `${baseUrl}/logo_qa.png`
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

  if (reviews && reviews.length > 0) {
    const totalRating = reviews.reduce((sum: number, review: any) => sum + review.rating, 0);
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
        "name": review.name
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": review.rating.toString(),
        "bestRating": "5",
        "worstRating": "1"
      },
      "reviewBody": review.review
    }));
  }

  graph.push(organizationSchema);

  // 3. Breadcrumb Schema
  graph.push({
    "@type": "BreadcrumbList",
    "@id": `${draftUrl}#breadcrumb`,
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
        "name": "Drafts",
        "item": `${baseUrl}/drafts`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": cleanName,
        "item": draftUrl
      }
    ]
  });

  // 4. FAQ Schema
  if (faqs && faqs.length > 0) {
    graph.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "@id": `${draftUrl}#faq`,
      "mainEntity": faqs.map((faq: any) => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    });
  }

  return {
    "@context": "https://schema.org",
    "@graph": graph
  };
}
