import { Metadata } from "next";

export const defaultMetadata: Metadata = {
  title: {
    default: "SSMSPM Digital",
    template: "%s | SSMSPM Digital",
  },

  description:
    "Official website of Shri Sant Shiromani Manmath Swami Shikshan Prasarak Mandal.",

  metadataBase: new URL("https://ssmspm.org"),

  openGraph: {
    title: "SSMSPM Digital",
    description:
      "Education. Equality. Excellence.",
    type: "website",
  },
};