"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

import { NAVIGATION } from "@/constants/navigation";
import { SITE } from "@/constants/site";
SITE.tagline
SITE.marathiTagline
SITE.name
SITE.established

export default function Navbar() {
  return (
    <header className="fixed top-5 left-0 right-0 z-50 flex justify-center px-4">
      <nav className="flex w-full max-w-7xl items-center justify-between rounded-full border border-white/30 bg-white/70 px-8 py-4 shadow-xl backdrop-blur-xl">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--primary)] text-lg font-bold text-white">
            S
          </div>

          <div>
            <p className="text-lg font-bold leading-none">
              SSMSPM
            </p>
            <p className="text-xs text-[var(--muted-foreground)]">
              Since 1998
            </p>
          </div>
        </Link>

        {/* Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {NAVIGATION.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="text-sm font-medium transition-all hover:text-[var(--primary)]"
            >
              {item.title}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <Button className="hidden rounded-full bg-[var(--primary)] px-6 md:flex">
          Support Us
        </Button>
      </nav>
    </header>
  );
}