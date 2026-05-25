import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [
        "/cancel-payment",
        "/failure-payment",
        "/success-payment",
        "/nullify",
        "/authority",
        "/authority/",
        "/api/",
      ],
    },
    sitemap: "https://amaconnect.in/sitemap.xml",
  };
}
