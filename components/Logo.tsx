import Image from "next/image";

export default function Logo({
  className = "",
  priority = false,
}: {
  className?: string;
  priority?: boolean;
}) {
  return (
    <Image
      src="/logo.png"
      alt="KAALAMITHRA AI Tech Solutions — Idea Today. Impact Tomorrow."
      width={666}
      height={375}
      priority={priority}
      className={className}
    />
  );
}
