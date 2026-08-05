import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AuthProvider from "@/components/AuthProvider";
import Navbar from "@/components/Navbar";
import NewsFlashTicker from "@/components/NewsFlashTicker";
import NewNavbar from "@/components/NewNavbar";
import MobileBottomNav from "@/components/MobileBottomNav";
import WhatsAppButton from "@/components/ Whatsappbutton";
import { Analytics } from "@vercel/analytics/next";

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
    default: "AMA Connect | Lawyer Interviews, Legal Community & AMA Sessions",
    template: "%s | AMA Connect",
  },
  description: "Join AMA Connect for professional lawyer interviews and posts. Engage with our exclusive legal communities and get answers to your legal queries in our Ask Me Anything (AMA) section of our AMA Connect application.",
  metadataBase: new URL("https://amaconnect.in"),
  alternates: {
    canonical: "./",
  },
  openGraph: {
    title: "AMA Connect | Lawyer Interviews, Legal Community & AMA Sessions",
    description: "Join AMA Connect for professional lawyer interviews and guest posts. Engage with our exclusive WhatsApp legal communities and get answers to your legal queries in our Ask Me Anything (AMA) sessions.",
    url: "https://amaconnect.in",
    siteName: "AMA Legal Solutions",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "AMA Connect Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AMA Connect | Lawyer Interviews, Legal Community & AMA Sessions",
    description: "Join AMA Connect for professional lawyer interviews and guest posts. Engage with our exclusive WhatsApp legal communities and get answers to your legal queries in our Ask Me Anything (AMA) sessions.",
    images: ["/og-image.png"],
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
      <head>
        <link rel="preconnect" href="https://firestore.googleapis.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://firestore.googleapis.com" />
      </head>
      <body className="min-h-full flex flex-col pb-[72px] md:pb-0 bg-white text-gray-900">
        <AuthProvider>
          <Navbar />
          <NewsFlashTicker />
          {/* <NewNavbar /> */}

          {children}
          <WhatsAppButton />
          <MobileBottomNav />
          <Analytics />
        </AuthProvider>
      </body>
    </html>
  );
}

