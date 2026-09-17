import {
  BarChart3,
  Bot,
  Cloud,
  Filter,
  LayoutDashboard,
  Megaphone,
  Rocket,
  ShieldCheck,
  ShoppingCart,
  Target,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";
import type { ServiceIconKey } from "@/types";

const ICONS: Record<ServiceIconKey, LucideIcon> = {
  lead: Filter,
  marketing: Target,
  ai: Bot,
  startup: Rocket,
  crm: LayoutDashboard,
  cloud: Cloud,
  ecommerce: ShoppingCart,
  branding: Megaphone,
  sales: TrendingUp,
  data: BarChart3,
  security: ShieldCheck,
};

export default function ServiceIcon({
  icon,
  className = "h-6 w-6",
}: {
  icon: ServiceIconKey;
  className?: string;
}) {
  const Icon = ICONS[icon];
  return <Icon className={className} aria-hidden="true" />;
}
