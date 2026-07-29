import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const siteUrl = "https://www.rishikeshadventures.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Rishikesh Adventures | Rafting, Camping & Bike Rentals in Rishikesh",
    template: "%s | Rishikesh Adventures",
  },
  description:
    "Book premium river rafting, riverside camping, scooter and bike rentals in Rishikesh. Licensed guides, instant booking, trusted by 10,000+ travellers on the Ganga.",
  keywords: [
    "Rishikesh rafting",
    "Rishikesh camping",
    "scooter rental Rishikesh",
    "bike rental Rishikesh",
    "adventure activities Rishikesh",
    "river rafting Ganga",
  ],
  authors: [{ name: "Rishikesh Adventures" }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: "Rishikesh Adventures",
    title: "Rishikesh Adventures | Rafting, Camping & Bike Rentals",
    description:
      "Discover Rishikesh like never before. Book rafting, camping, scooter and bike rentals with licensed guides and instant confirmation.",
    images: [
      {
        url: "/images/og-cover.jpg",
        width: 1200,
        height: 630,
        alt: "River rafting on the Ganga in Rishikesh",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rishikesh Adventures | Rafting, Camping & Bike Rentals",
    description:
      "Discover Rishikesh like never before. Book rafting, camping, scooter and bike rentals with licensed guides and instant confirmation.",
    images: ["/images/og-cover.jpg"],
  },
  alternates: { canonical: siteUrl },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  name: "Rishikesh Adventures",
  image: `${siteUrl}/images/og-cover.jpg`,
  "@id": siteUrl,
  url: siteUrl,
  telephone: "+91-90000-00000",
  priceRange: "₹₹",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Tapovan Road, near Laxman Jhula",
    addressLocality: "Rishikesh",
    addressRegion: "Uttarakhand",
    postalCode: "249192",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 30.1213,
    longitude: 78.3253,
  },
  sameAs: [
    "https://www.instagram.com/",
    "https://www.facebook.com/",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://api.fontshare.com/v2/css?f[]=clash-display@400,500,600,700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} ${mono.variable} font-body bg-white text-ink antialiased`}
        style={{ ["--font-clash" as string]: "'Clash Display', var(--font-inter), sans-serif" }}
      >
        {children}
      </body>
    </html>
  );
}
