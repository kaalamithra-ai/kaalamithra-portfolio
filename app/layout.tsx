import type { Metadata } from "next";
import "@fontsource-variable/inter";
import "@fontsource-variable/plus-jakarta-sans";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BottomNav from "@/components/BottomNav";
import FloatingContact from "@/components/FloatingContact";
import { COMPANY_NAME, HERO_SUPPORT, SITE_URL, TAGLINE } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${COMPANY_NAME} | ${TAGLINE}`,
    template: "%s",
  },
  description: HERO_SUPPORT,
  openGraph: {
    type: "website",
    siteName: COMPANY_NAME,
    title: `${COMPANY_NAME} | ${TAGLINE}`,
    description: HERO_SUPPORT,
    images: [{ url: "/logo.png", width: 666, height: 375, alt: COMPANY_NAME }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${COMPANY_NAME} | ${TAGLINE}`,
    description: HERO_SUPPORT,
    images: ["/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-brand-blue focus:shadow-card"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
        {/* clearance so the footer can scroll fully above the fixed bottom bar */}
        <div className="h-16" aria-hidden="true" />
        <BottomNav />
        <FloatingContact />
      </body>
    </html>
  );
}
