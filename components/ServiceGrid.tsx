import type { Service } from "@/types";
import ServiceCard from "./ServiceCard";
import Reveal from "./Reveal";

export default function ServiceGrid({ services }: { services: Service[] }) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {services.map((service, i) => (
        <Reveal key={service.slug} delay={(i % 3) * 90} className="h-full">
          <ServiceCard service={service} />
        </Reveal>
      ))}
    </div>
  );
}
