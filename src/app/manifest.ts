import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "The Fern Private Villas",
    short_name: "The Fern",
    description: "Private villa stays in Mabalacat City, Pampanga.",
    start_url: "/",
    display: "standalone",
    background_color: "#f7f3e9",
    theme_color: "#243818",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
