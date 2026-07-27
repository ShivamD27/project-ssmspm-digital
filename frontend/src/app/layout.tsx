import type { Metadata } from "next";
import "./globals.css";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollProgress from "@/components/layout/ScrollProgress";
import BackToTop from "@/components/layout/BackToTop";

export const metadata: Metadata = {
  title: "SSMSPM Digital",
  description: "Official website of Shri Sant Shiromani Manmath Swami Shikshan Prasarak Mandal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[var(--background)] text-[var(--foreground)]">
        <ScrollProgress />

        <Navbar />

        <main>{children}</main>

        <Footer />

        <BackToTop />
      </body>
    </html>
  );
}