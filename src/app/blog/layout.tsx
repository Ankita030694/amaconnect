import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Legal Insights, Articles & Practice Guides",
  description:
    "Explore in-depth legal articles, expert law practice insights, statutory guides, court procedures, and professional legal updates on AMA Connect Blog.",
  alternates: {
    canonical: "https://www.amaconnect.in/blog",
  },
  openGraph: {
    title: "Legal Insights, Articles & Practice Guides | AMA Connect Blog",
    description:
      "Explore in-depth legal articles, expert law practice insights, statutory guides, court procedures, and professional legal updates on AMA Connect Blog.",
    url: "https://www.amaconnect.in/blog",
    siteName: "AMA Legal Solutions",
    type: "website",
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
