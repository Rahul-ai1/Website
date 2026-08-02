import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.komfram.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Komfram Technologies | Business Transformation, ERP & AI Solutions",
    template: "%s | Komfram Technologies",
  },
  description:
    "Komfram Technologies helps businesses simplify operations through ERP implementation, AI automation, cloud solutions, system integration, and business consulting.",
  keywords: [
    "Business Transformation",
    "ERP Consulting",
    "ERP Implementation",
    "AI Automation",
    "Cloud Solutions",
    "Digital Transformation",
    "Business Intelligence",
    "Enterprise Technology",
  ],
  openGraph: {
    title: "Komfram Technologies | From Complexity to Clarity.",
    description:
      "Business transformation and enterprise technology partner — ERP, AI automation, cloud, and integration solutions.",
    url: siteUrl,
    siteName: "Komfram Technologies",
    locale: "en_US",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Komfram Technologies" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Komfram Technologies | From Complexity to Clarity.",
    description:
      "Business transformation and enterprise technology partner — ERP, AI automation, cloud, and integration solutions.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/logos/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
