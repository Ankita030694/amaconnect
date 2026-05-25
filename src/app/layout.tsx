import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AuthProvider from "@/components/AuthProvider";
import Navbar from "@/components/Navbar";
import NewNavbar from "@/components/NewNavbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "AMA Connect | Digital Legal Solutions & Custom Templates",
    template: "%s | AMA Connect",
  },
  description: "Access premium digital legal services, custom contract drafting, professional lawyer interviews, and community Q&A forums with AMA Legal Solutions.",
  metadataBase: new URL("https://amaconnect.in"),
  alternates: {
    canonical: "./",
  },
  openGraph: {
    title: "AMA Connect | Digital Legal Solutions & Custom Templates",
    description: "Access premium digital legal services, custom contract drafting, professional lawyer interviews, and community Q&A forums with AMA Legal Solutions.",
    url: "https://amaconnect.in",
    siteName: "AMA Legal Solutions",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AMA Connect | Digital Legal Solutions & Custom Templates",
    description: "Access premium digital legal services, custom contract drafting, professional lawyer interviews, and community Q&A forums with AMA Legal Solutions.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <AuthProvider>
          {/* <Navbar /> */}
          <NewNavbar />
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}

