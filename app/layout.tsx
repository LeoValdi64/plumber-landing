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
  title: "ProFlow Plumbing | 24/7 Emergency Plumbing Seattle",
  description: "Licensed Seattle plumber available 24/7. Drain cleaning, water heater repair, leak detection & more. Serving Bellevue, Tacoma & nearby. Free quotes!",
  keywords: "plumber Seattle, emergency plumbing, 24/7 plumber, drain cleaning, water heater repair, leak detection, Seattle plumbing, Bellevue plumber, Tacoma plumbing",
  authors: [{ name: "ProFlow Plumbing" }],
  alternates: {
    canonical: "https://plumber-landing-three.vercel.app",
  },
  openGraph: {
    title: "ProFlow Plumbing | 24/7 Emergency Plumbing Seattle",
    description: "Licensed Seattle plumber available 24/7. Drain cleaning, water heater repair, leak detection & more. Serving Bellevue, Tacoma & nearby. Free quotes!",
    type: "website",
    locale: "en_US",
    siteName: "ProFlow Plumbing",
    images: ["/og-image.png"],
    url: "https://plumber-landing-three.vercel.app",
  },
  twitter: {
    card: "summary_large_image",
    title: "ProFlow Plumbing | 24/7 Emergency Plumbing Seattle",
    description: "Licensed Seattle plumber available 24/7. Drain cleaning, water heater repair, leak detection & more. Serving Bellevue, Tacoma & nearby. Free quotes!",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Plumber",
              name: "ProFlow Plumbing",
              description:
                "Licensed Seattle plumber available 24/7. Drain cleaning, water heater repair, leak detection and more.",
              url: "https://plumber-landing-three.vercel.app",
              telephone: "+15551233569",
              address: {
                "@type": "PostalAddress",
                streetAddress: "123 Plumber Way",
                addressLocality: "Seattle",
                addressRegion: "WA",
                postalCode: "98101",
                addressCountry: "US",
              },
              priceRange: "$$",
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                  ],
                  opens: "07:00",
                  closes: "20:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: "Saturday",
                  opens: "08:00",
                  closes: "17:00",
                },
              ],
              areaServed: [
                "Seattle",
                "Bellevue",
                "Tacoma",
                "Kirkland",
                "Redmond",
                "Everett",
                "Renton",
                "Kent",
                "Federal Way",
                "Bothell",
              ],
              image: "https://plumber-landing-three.vercel.app/og-image.png",
              sameAs: [],
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "5",
                reviewCount: "3",
              },
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
