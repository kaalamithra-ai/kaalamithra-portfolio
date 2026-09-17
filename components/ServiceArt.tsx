import ServiceIcon from "./ServiceIcon";
import type { Service, ServiceIconKey } from "@/types";

/**
 * 3D brand-style artwork per service (white background renders that sit
 * naturally on light surfaces). Services without artwork yet fall back
 * to the gradient icon tile.
 */
const ART: Partial<Record<ServiceIconKey, string>> = {
  lead: "/images/services/3d-funnel.png",
  marketing: "/images/services/3d-target.png",
  ai: "/images/services/3d-robot.png",
  startup: "/images/services/3d-rocket.png",
  crm: "/images/services/3d-dashboard.png",
  cloud: "/images/services/3d-cloud.png",
  ecommerce: "/images/services/3d-cart.png",
  branding: "/images/services/3d-megaphone.png",
  sales: "/images/services/3d-growth.png",
  data: "/images/services/3d-charts.svg",
  security: "/images/services/3d-shield.svg",
};

export default function ServiceArt({
  service,
  size = "md",
}: {
  service: Service;
  size?: "md" | "lg";
}) {
  const src = ART[service.icon];
  const dims = size === "lg" ? "h-24 w-24 sm:h-28 sm:w-28" : "h-14 w-14";

  if (!src) {
    return (
      <div
        className={`flex ${
          size === "lg" ? "h-24 w-24 sm:h-28 sm:w-28" : "h-12 w-12"
        } items-center justify-center rounded-xl bg-gradient-to-br from-brand-blue to-brand-purple text-white shadow-card`}
      >
        <ServiceIcon
          icon={service.icon}
          className={size === "lg" ? "h-10 w-10" : "h-6 w-6"}
        />
      </div>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt=""
      aria-hidden="true"
      loading="lazy"
      className={`${dims} object-contain drop-shadow-md`}
    />
  );
}
