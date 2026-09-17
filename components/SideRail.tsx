"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import {
  ChevronsLeft,
  ChevronsRight,
  MessageCircle,
} from "lucide-react";
import ServiceIcon from "@/components/ServiceIcon";
import type { ServiceIconKey } from "@/types";

export interface SideRailItem {
  /** id of the section this tab scrolls to on the current page */
  id: string;
  /** human-readable title (tooltip / label) */
  label: string;
  icon: ServiceIconKey;
  /** fallback route when the section is not on the current page (detail pages) */
  href?: string;
}

const STORAGE_KEY = "km-siderail-collapsed";

/** Per-service icon colors, matching the app-style mockup palette. */
const ICON_COLORS: Record<ServiceIconKey, string> = {
  lead: "text-[#DB2777]",
  marketing: "text-[#DB2777]",
  ai: "text-[#2563EB]",
  startup: "text-[#F97316]",
  crm: "text-[#7C3AED]",
  cloud: "text-[#2563EB]",
  ecommerce: "text-[#F97316]",
  branding: "text-[#2563EB]",
  sales: "text-[#7C3AED]",
  data: "text-[#2563EB]",
  security: "text-[#F97316]",
};

/**
 * App-style sticky vertical navigation column (per the approved mockup):
 * full-height white rail under the header, colorful icon tiles with tiny
 * labels, the active service as an animated gradient tile, a support link
 * at the bottom and a collapse/expand toggle. Tabs smooth-scroll to page
 * sections (or navigate from detail pages); hover/tap tooltips show the
 * full name when collapsed; reduced-motion respected.
 */
export default function SideRail({
  items,
  activeId,
}: {
  items: SideRailItem[];
  /** force the highlighted tab (used on detail pages with no local sections) */
  activeId?: string;
}) {
  const router = useRouter();
  const navRef = useRef<HTMLElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const tipTimer = useRef<number | null>(null);
  const [collapsed, setCollapsed] = useState(false);
  const [active, setActive] = useState<string>(activeId ?? items[0]?.id ?? "");
  const [tip, setTip] = useState<{ label: string; top: number } | null>(null);

  // Publish the rail width so page content always clears it.
  useEffect(() => {
    document.documentElement.style.setProperty(
      "--km-rail-w",
      collapsed ? "60px" : "104px"
    );
  }, [collapsed]);

  // Keep the highlighted tab fully visible inside the rail's own scroll area.
  useEffect(() => {
    const list = listRef.current;
    const el = list?.querySelector<HTMLElement>(`button[data-rail-id="${active}"]`);
    if (!list || !el) return;
    const top = el.offsetTop;
    const bottom = top + el.offsetHeight;
    if (top < list.scrollTop) {
      list.scrollTop = top - 4;
    } else if (bottom > list.scrollTop + list.clientHeight) {
      list.scrollTop = bottom - list.clientHeight + 4;
    }
  }, [active]);

  // Restore the user's collapse preference after mount (no SSR mismatch)
  // and always start the tab list at the very top (first service visible).
  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored !== null) setCollapsed(stored === "1");
    } catch {
      /* storage unavailable (private mode) — keep default */
    }
    if (listRef.current) listRef.current.scrollTop = 0;
  }, []);

  const scrollToId = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return false;
    const reduceMotion =
      typeof window.matchMedia === "function" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
    return true;
  };

  // Arriving with a #hash (e.g. from a detail page) → scroll to that section.
  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (!hash || !items.some((item) => item.id === hash)) return;
    const timer = window.setTimeout(() => scrollToId(hash), 80);
    return () => window.clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items]);

  // Highlight the section currently in the middle band of the viewport.
  useEffect(() => {
    const sections = items
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null);
    if (sections.length === 0 || typeof IntersectionObserver === "undefined") {
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-30% 0px -60% 0px", threshold: 0 }
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [items]);

  const handleClick = (item: SideRailItem) => {
    if (scrollToId(item.id)) return; // section exists on this page → smooth scroll
    if (item.href) router.push(item.href); // otherwise jump to the page that has it
  };

  const showTip = (item: SideRailItem, target: HTMLElement) => {
    if (!collapsed) return; // expanded mode already shows labels
    const nav = navRef.current;
    if (!nav) return;
    const navRect = nav.getBoundingClientRect();
    const rect = target.getBoundingClientRect();
    setTip({ label: item.label, top: rect.top - navRect.top + rect.height / 2 });
    // Touch devices have no hover-out: auto-hide the name tag after a beat.
    if (window.matchMedia("(hover: none)").matches) {
      if (tipTimer.current) window.clearTimeout(tipTimer.current);
      tipTimer.current = window.setTimeout(() => setTip(null), 1800);
    }
  };

  const toggle = () => {
    setCollapsed((current) => {
      try {
        window.localStorage.setItem(STORAGE_KEY, current ? "0" : "1");
      } catch {
        /* ignore */
      }
      return !current;
    });
  };

  return (
    <nav
      ref={navRef}
      aria-label="On-page section navigation"
      className={`fixed bottom-16 left-0 top-24 z-40 flex flex-col border-r border-slate-200/80 bg-white/95 backdrop-blur-xl transition-[width] duration-300 dark:border-white/10 dark:bg-brand-ink/95 ${
        collapsed ? "w-[52px]" : "w-[96px]"
      }`}
    >
      {/* Scrollable service tiles */}
      <div
        ref={listRef}
        className="km-rail-scroll flex min-h-0 flex-1 flex-col gap-1.5 overflow-y-auto px-1.5 py-3 sm:px-2"
      >

        {items.map((item) => {
          const isActive = active === item.id;
          return (
            <button
              key={item.id}
              type="button"
              data-rail-id={item.id}
              onClick={() => handleClick(item)}
              onMouseEnter={(e) => showTip(item, e.currentTarget)}
              onMouseLeave={() => setTip(null)}
              onFocus={(e) => showTip(item, e.currentTarget)}
              onBlur={() => setTip(null)}
              aria-current={isActive ? "true" : undefined}
              aria-label={item.label}
              className={`km-tab relative flex w-full flex-col items-center justify-center gap-1.5 rounded-2xl px-1 py-2.5 ${
                isActive
                  ? "km-active-tab bg-gradient-to-br from-[#7C3AED] to-[#DB2777] text-white shadow-[0_8px_20px_-6px_rgba(219,39,119,0.55)]"
                  : "text-slate-600 hover:bg-slate-100/80 dark:text-slate-300 dark:hover:bg-white/10"
              }`}
            >
              <span className="km-tab-icon">
                <ServiceIcon
                  icon={item.icon}
                  className={`h-6 w-6 ${
                    isActive ? "text-white" : ICON_COLORS[item.icon]
                  }`}
                />
              </span>
              {!collapsed && (
                <span
                  className={`line-clamp-2 text-center text-[10px] font-semibold leading-tight ${
                    isActive ? "text-white" : "text-slate-600 dark:text-slate-300"
                  }`}
                >
                  {item.label}
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* Bottom: support link + collapse toggle */}
      <div className="border-t border-slate-200/80 px-1.5 py-2 dark:border-white/10 sm:px-2">
        <a
          href="/contact"
          className="km-tab flex w-full flex-col items-center justify-center gap-1.5 rounded-2xl px-1 py-2 text-slate-600 hover:bg-slate-100/80 dark:text-slate-300 dark:hover:bg-white/10"
        >
          <MessageCircle className="h-6 w-6 text-[#7C3AED]" aria-hidden="true" />
          {!collapsed && (
            <span className="line-clamp-2 text-center text-[10px] font-semibold leading-tight">
              Get Custom Support
            </span>
          )}
        </a>
        <button
          type="button"
          onClick={toggle}
          aria-label={collapsed ? "Expand navigation rail" : "Collapse navigation rail"}
          className="mt-1 flex w-full items-center justify-center rounded-xl py-1.5 text-slate-400 transition hover:bg-slate-100/80 hover:text-[#DB2777] dark:hover:bg-white/10"
        >
          {collapsed ? (
            <ChevronsRight className="h-4 w-4" aria-hidden="true" />
          ) : (
            <ChevronsLeft className="h-4 w-4" aria-hidden="true" />
          )}
        </button>
      </div>

      {/* Full service name tooltip (collapsed mode only) — rendered outside
          the scroll list so it is never clipped. */}
      {tip && (
        <span
          role="tooltip"
          className="km-tip pointer-events-none absolute left-full z-50 ml-2 whitespace-nowrap rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-brand-ink shadow-lift dark:border-white/10 dark:bg-brand-ink dark:text-white"
          style={{ top: tip.top }}
        >
          {tip.label}
        </span>
      )}
    </nav>
  );
}
