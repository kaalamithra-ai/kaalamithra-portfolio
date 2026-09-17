import { PhoneCall } from "lucide-react";

/** Company contact number (India). */
const PHONE_E164 = "+916361842299";
const PHONE_DISPLAY = "+91 63618 42299";

/**
 * Floating quick-contact buttons on the right edge:
 * WhatsApp chat + call log (phone) — visible on every page,
 * sitting just above the bottom menu bar.
 */
export default function FloatingContact() {
  return (
    <div className="fixed bottom-24 right-3 z-40 flex flex-col gap-3 sm:right-4">
      <a
        href={`https://wa.me/${PHONE_E164.replace("+", "")}?text=${encodeURIComponent(
          "Hello KAALAMITHRA! I'd like to discuss a project."
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Chat on WhatsApp: ${PHONE_DISPLAY}`}
        title={`WhatsApp: ${PHONE_DISPLAY}`}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lift transition-transform duration-200 hover:scale-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366]"
      >
        <svg viewBox="0 0 32 32" fill="currentColor" aria-hidden="true" className="h-7 w-7">
          <path d="M16.004 3.2c-7.06 0-12.8 5.74-12.8 12.8 0 2.26.59 4.47 1.72 6.41L3.2 28.8l6.56-1.69a12.74 12.74 0 0 0 6.24 1.62h.01c7.06 0 12.8-5.74 12.8-12.8s-5.75-12.73-12.81-12.73Zm0 23.32h-.01a10.5 10.5 0 0 1-5.35-1.47l-.38-.23-3.9 1 1.04-3.8-.25-.4a10.53 10.53 0 0 1-1.62-5.62c0-5.81 4.73-10.54 10.55-10.54 2.81 0 5.46 1.1 7.45 3.09a10.48 10.48 0 0 1 3.09 7.46c0 5.81-4.74 10.51-10.62 10.51Zm5.78-7.87c-.32-.16-1.88-.93-2.17-1.03-.29-.11-.5-.16-.71.16-.21.32-.82 1.03-1 1.24-.18.21-.37.24-.69.08-.32-.16-1.34-.49-2.55-1.57-.94-.84-1.58-1.88-1.76-2.2-.18-.32-.02-.49.14-.65.14-.14.32-.37.48-.55.16-.19.21-.32.32-.53.11-.21.05-.4-.03-.56-.08-.16-.71-1.72-.98-2.35-.26-.62-.52-.54-.71-.55h-.61c-.21 0-.55.08-.84.4-.29.32-1.1 1.08-1.1 2.63s1.13 3.05 1.29 3.26c.16.21 2.23 3.41 5.41 4.78.76.33 1.35.52 1.81.67.76.24 1.45.21 2 .13.61-.09 1.88-.77 2.15-1.51.26-.74.26-1.38.18-1.51-.08-.13-.29-.21-.61-.37Z" />
        </svg>
      </a>
      <a
        href={`tel:${PHONE_E164}`}
        aria-label={`Call us: ${PHONE_DISPLAY}`}
        title={`Call: ${PHONE_DISPLAY}`}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[#2563EB] to-[#7C3AED] text-white shadow-lift transition-transform duration-200 hover:scale-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue"
      >
        <PhoneCall className="h-7 w-7" aria-hidden="true" />
      </a>
    </div>
  );
}
