import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://the-fern-private-resort.vercel.app";
const title = "Private Villa Resort in Mabalacat, Pampanga | The Fern Private Villas";
const description =
  "The Fern Private Villas is a private villa resort in Barangay Dolores, Mabalacat City, Pampanga with a private pool, spacious rooms, lounge, and kitchen for family trips, barkada getaways, celebrations, and team gatherings.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: "The Fern Private Villas",
  title,
  description,
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [{ url: "/images/fern-icon.png", sizes: "192x192", type: "image/png" }],
    apple: [{ url: "/images/fern-icon.png", sizes: "192x192", type: "image/png" }],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title,
    description,
    url: "/",
    siteName: "The Fern Private Villas",
    locale: "en_PH",
    type: "website",
    images: [
      {
        url: "/images/fern-og.jpg",
        width: 600,
        height: 315,
        alt: "The Fern Private Villas official logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/images/fern-og.jpg"],
  },
  category: "travel",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en-PH">
      <body>{children}</body>
    </html>
  );
}
