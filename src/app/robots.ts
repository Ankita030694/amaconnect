import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: ["/", "/api/images/"],
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
    sitemap: "https://www.amaconnect.in/sitemap.xml",
  };
}
