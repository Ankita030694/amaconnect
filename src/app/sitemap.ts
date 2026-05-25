import { MetadataRoute } from "next";
import dbConnect from "@/lib/dbConnect";
import { Blog, LawyerInterview } from "@/lib/models";
import { DRAFTS_DATA } from "@/data/drafts_data";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://amaconnect.in";
  const currentDate = new Date();

  // 1. Static Pages
  const staticPages = [
    "",
    "/contact",
    "/about",
    "/communities",
    "/success-stories",
    "/drafts",
    "/blog",
    "/interviews",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: currentDate,
    changeFrequency: (route === "" || route === "/drafts" ? "daily" : "weekly") as "daily" | "weekly",
    priority: route === "" ? 1.0 : route === "/drafts" ? 0.9 : 0.8,
  }));

  // 2. Drafts (from static precompiled array)
  // Maps 2,165+ legal draft templates in O(N)
  const draftPages = DRAFTS_DATA.map((draft) => {
    const lastDot = draft.fileName.lastIndexOf('.');
    const nameWithoutExt = lastDot !== -1 ? draft.fileName.substring(0, lastDot) : draft.fileName;
    const slug = nameWithoutExt.toLowerCase().trim();
    return {
      url: `${baseUrl}/drafts/${slug}`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    };
  });

  // 3. Dynamic Blogs from MongoDB
  let blogPages: any[] = [];
  try {
    await dbConnect();
    const blogs = await Blog.find({}, { slug: 1, created: 1 }).lean();
    blogPages = blogs.map((blog: any) => ({
      url: `${baseUrl}/blog/${blog.slug}`,
      lastModified: blog.created ? new Date(blog.created) : currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.6,
    }));
  } catch (err) {
    console.error("[Sitemap Generator] Failed to fetch dynamic blogs:", err);
  }

  // 4. Dynamic Lawyer Interviews from MongoDB
  let interviewPages: any[] = [];
  try {
    await dbConnect();
    const interviews = await LawyerInterview.find({}, { slug: 1, created: 1 }).lean();
    interviewPages = interviews.map((interview: any) => ({
      url: `${baseUrl}/interviews/${interview.slug}`,
      lastModified: interview.created ? new Date(interview.created) : currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.6,
    }));
  } catch (err) {
    console.error("[Sitemap Generator] Failed to fetch dynamic lawyer interviews:", err);
  }

  return [...staticPages, ...draftPages, ...blogPages, ...interviewPages];
}
