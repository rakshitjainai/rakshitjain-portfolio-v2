import type { Metadata } from "next";
import { Inter, Fraunces, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { siteConfig } from "@/data/siteConfig";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Rakshit Jain | B.Tech ICT, PDEU",
    template: "%s | Rakshit Jain",
  },
  description:
    "Rakshit Jain: B.Tech ICT student at PDEU working across financial markets, quantitative research and software.",
  keywords: [
    "Rakshit Jain",
    "Rakshit Jain PDEU",
    "Financial Markets",
    "Quantitative Analysis",
    "Software Engineering",
    "IIBX Bullion Trading",
    "GIFT City IFSC",
    "Anand Rathi IFSC",
    "Python Backtesting",
    "SMA Crossover",
    "LawPrix",
    "Product Management",
    "Gandhinagar",
    "Gujarat",
  ],
  authors: [{ name: "Rakshit Jain", url: siteConfig.url }],
  creator: "Rakshit Jain",
  alternates: {
    canonical: siteConfig.url,
  },
  openGraph: {
    type: "profile",
    locale: "en_IN",
    url: siteConfig.url,
    title: "Rakshit Jain | B.Tech ICT, PDEU",
    description:
      "Rakshit Jain: B.Tech ICT student at PDEU working across financial markets, quantitative research and software.",
    siteName: "Rakshit Jain",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Rakshit Jain — Financial Markets, Quantitative Research & Software",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rakshit Jain | B.Tech ICT, PDEU",
    description:
      "Rakshit Jain: B.Tech ICT student at PDEU working across financial markets, quantitative research and software.",
    images: ["/opengraph-image"],
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
      lang="en-IN"
      className={`${inter.variable} ${fraunces.variable} ${jetbrainsMono.variable} h-full antialiased selection:bg-[#c8a15a]/25 selection:text-[#f2efe8]`}
    >
      <body className="min-h-full flex flex-col bg-[#0a0b0d] text-[#f2efe8]">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
