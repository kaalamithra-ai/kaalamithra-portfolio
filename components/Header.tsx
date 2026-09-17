"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Logo from "./Logo";

/**
 * Logo-only header. Primary navigation moved to the app-style bottom menu
 * bar (BottomNav), per the approved reference design.
 */
export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b bg-white/90 backdrop-blur transition-shadow ${
        scrolled ? "border-slate-200 shadow-card" : "border-transparent"
      }`}
    >
      <div className="mx-auto flex h-24 max-w-7xl items-center px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center" aria-label="KAALAMITHRA home">
          <Logo className="h-14 w-auto sm:h-16" />
        </Link>
      </div>
    </header>
  );
}
