import type { Metadata, Viewport } from "next";
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

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "ProFlow Plumbing | 24/7 Emergency Plumbing Services Seattle",
  description: "Professional plumbing services in Seattle, Bellevue, Tacoma & surrounding areas. 24/7 emergency service, licensed & insured. Drain cleaning, water heater repair, leak detection & more. Call (555) 123-FLOW for a free quote!",
  keywords: "plumber Seattle, emergency plumbing, 24/7 plumber, drain cleaning, water heater repair, leak detection, Seattle plumbing, Bellevue plumber, Tacoma plumbing",
  authors: [{ name: "ProFlow Plumbing" }],
  openGraph: {
    title: "ProFlow Plumbing | 24/7 Emergency Plumbing Services",
    description: "Fast, reliable plumbing services in the Seattle area. Licensed & insured professionals available 24/7. Get a free quote today!",
    type: "website",
    locale: "en_US",
    siteName: "ProFlow Plumbing",
  },
  twitter: {
    card: "summary_large_image",
    title: "ProFlow Plumbing | 24/7 Emergency Plumbing Services",
    description: "Fast, reliable plumbing services in the Seattle area. Licensed & insured professionals available 24/7.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
