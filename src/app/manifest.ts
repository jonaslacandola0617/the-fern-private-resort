import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "The Fern Private Villas",
    short_name: "The Fern",
    description: "Private villa stays in Mabalacat City, Pampanga.",
    start_url: "/",
    display: "standalone",
    background_color: "#f7f3e9",
    theme_color: "#425915",
    icons: [
      {
        src: "/images/fern-icon.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}
