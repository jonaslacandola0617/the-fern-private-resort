import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Fern Private Villas | Mabalacat City, Pampanga",
  description:
    "A private villa escape in Mabalacat City, Pampanga for family trips, celebrations, barkada getaways, and team gatherings.",
  openGraph: {
    title: "The Fern Private Villas",
    description:
      "Private villa stays in Mabalacat City, Pampanga with a private swimming pool and spaces made for gathering.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
