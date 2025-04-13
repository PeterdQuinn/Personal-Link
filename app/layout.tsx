import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Full Stack Services LLC | Web Development, SEO & SaaS Tools",
  description:
    "We empower local businesses with custom websites, AI tools, and scalable marketing systems. Built by developers who care about results.",
  keywords: [
    "Full Stack Services LLC",
    "Arizona web development",
    "SEO services",
    "SaaS platforms",
    "Next.js websites",
    "small business websites",
    "digital marketing Arizona",
    "Tailwind CSS developer",
    "Supabase apps",
  ],
  authors: [{ name: "Full Stack Services LLC", url: "https://www.fullstackservicesllc.net" }],
  creator: "Peter Quinn",
  metadataBase: new URL("https://www.fullstackservicesllc.net"),
  openGraph: {
    title: "Full Stack Services LLC",
    description:
      "From startups to established brands, we build scalable, beautiful websites and platforms in Next.js + Tailwind CSS. Based in Arizona.",
    url: "https://www.fullstackservicesllc.net",
    siteName: "Full Stack Services LLC",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/Transparent.webp", // your main logo image
        width: 1200,
        height: 630,
        alt: "Full Stack Services LLC Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Full Stack Services LLC",
    description:
      "Local-first. Results-driven. Modern websites, SaaS tools, and SEO to grow your brand.",
    creator: "@fullstackservices",
    images: ["/Transparent.webp"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white`}
      >
        {children}
      </body>
    </html>
  );
}
