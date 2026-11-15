import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { siteConfig } from "@/data/siteConfig";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Rakshit Jain | Finance, Technology & Product",
    template: "%s | Rakshit Jain",
  },
  description: siteConfig.description,
  keywords: [
    "Rakshit Jain",
    "Rakshit Jain Finance",
    "Rakshit Jain PDEU",
    "Rakshit Jain Software Engineer",
    "Rakshit Jain Financial Markets",
    "Rakshit Jain Quantitative Analysis",
    "Rakshit Jain Product Management",
    "IIBX Bullion Market",
    "Quantitative Finance Projects",
    "SMA Crossover Backtesting",
    "LawPrix LegalTech",
    "FinTech Product Development",
    "GIFT City IFSC",
  ],
  authors: [{ name: "Rakshit Jain", url: siteConfig.url }],
  creator: "Rakshit Jain",
  openGraph: {
    type: "website",
    locale: "en_IE",
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-[#101a27] text-[#f4f1ea] selection:bg-[#c28b5e]/25 selection:text-[#f4f1ea]">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
