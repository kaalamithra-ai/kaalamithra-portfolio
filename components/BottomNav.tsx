"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FolderKanban, Home, LayoutGrid, Send } from "lucide-react";

const ITEMS = [
  { href: "/", label: "Home", Icon: Home },
  { href: "/services", label: "Services", Icon: LayoutGrid },
  { href: "/portfolio", label: "Portfolio", Icon: FolderKanban },
  { href: "/contact", label: "Start a Project", Icon: Send },
];

/**
 * App-style bottom menu bar (per the approved reference): replaces the old
 * top navigation links. Active item is purple with a filled icon and a
 * small underline indicator.
 */
export default function BottomNav() {
  const pathname = usePathname();
  return (
    <nav
      aria-label="Primary navigation"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-slate-200/80 bg-white/95 pb-[env(safe-area-inset-bottom)] backdrop-blur-xl dark:border-white/10 dark:bg-brand-ink/95"
    >
      <div className="mx-auto grid w-full max-w-md grid-cols-4">
        {ITEMS.map(({ href, label, Icon }) => {
          const active =
            href === "/" ? pathname === "/" : pathname.startsWith(href);
          return (
            <Link
              key={href}
              href={href}
              aria-current={active ? "page" : undefined}
              className={`relative flex flex-col items-center gap-1 py-2.5 text-[11px] font-semibold transition-colors ${
                active
                  ? "text-[#7C3AED]"
                  : "text-slate-500 hover:text-brand-ink dark:text-slate-400 dark:hover:text-white"
              }`}
            >
              <Icon
                className={`h-6 w-6 ${active ? "fill-current" : ""}`}
                aria-hidden="true"
              />
              {label}
              <span
                className={`absolute bottom-1 h-1 w-8 rounded-full bg-[#7C3AED] transition-opacity duration-200 ${
                  active ? "opacity-100" : "opacity-0"
                }`}
                aria-hidden="true"
              />
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
