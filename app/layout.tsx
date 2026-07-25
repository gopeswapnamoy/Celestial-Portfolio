import type { Metadata } from "next";
import { Cinzel, Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://celestial-portfolio.vercel.app";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "The Celestial Portfolio",
    template: "%s | The Celestial Portfolio",
  },
  description:
    "A cinematic portfolio for an AI engineer and creative technologist building intelligent systems with architectural precision.",
  applicationName: "The Celestial Portfolio",
  authors: [{ name: "The Celestial Portfolio" }],
  keywords: [
    "AI engineer",
    "creative technologist",
    "full-stack developer",
    "portfolio",
    "automation",
    "machine learning",
  ],
  openGraph: {
    title: "The Celestial Portfolio",
    description:
      "A museum-grade digital palace for intelligent systems, creative engineering, and future-facing portfolio work.",
    type: "website",
    images: ["/images/celestial-palace-hero.png"],
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
      className={`${inter.variable} ${cormorant.variable} ${cinzel.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full bg-obsidian text-ivory selection:bg-gold/30 selection:text-ivory">
        {children}
      </body>
    </html>
  );
}
