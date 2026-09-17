/**
 * Central site configuration.
 * Edit the values below to update the whole website (metadata, footer, contact…).
 */

// TODO: Replace with the production domain once live.
export const SITE_URL = "https://www.kaalamithra.ai";

export const COMPANY_NAME = "KAALAMITHRA AI TECH SOLUTIONS";
export const COMPANY_SHORT = "KAALAMITHRA";
export const TAGLINE = "IDEA TODAY. IMPACT TOMORROW.";

export const HERO_HEADLINE = "AI-Powered Solutions for Smarter Business Growth";
export const HERO_SUPPORT =
  "We help businesses innovate, automate, grow and scale through AI, technology, digital solutions and intelligent business systems.";

// Official contact details.
export const CONTACT_EMAIL = "tech@kaalamithra-ai.com";
export const CONTACT_PHONES = [
  { display: "+91 8884014055", tel: "+918884014055" },
  { display: "+91 9972770266", tel: "+919972770266" },
  { display: "+91 6361842299", tel: "+916361842299" },
] as const;
export const CONTACT_PHONE = CONTACT_PHONES[0].display;
export const CONTACT_LOCATION =
  "84MM+CJ8, Road, Devaraya Pattana, Tumakur, Karnataka 572104";
export const CONTACT_MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=84MM%2BCJ8+Devaraya+Pattana+Tumakur+Karnataka+572104";

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Contact", href: "/contact" },
] as const;

export const DEFAULT_OG_IMAGE = "/logo.png";
