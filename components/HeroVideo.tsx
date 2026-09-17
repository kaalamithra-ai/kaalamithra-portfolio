"use client";

import { useEffect, useRef } from "react";

/**
 * 3D animated hero banner video (abstract AI node / light-trail loop).
 * - Autoplays muted + looped, inline on mobile.
 * - Respects prefers-reduced-motion: pauses and shows the poster frame.
 * Video: "Mesmerizing Abstract Purple Light Swirls Loop" by Colin Jones,
 * licensed free via Pexels (https://www.pexels.com/license/).
 */
export default function HeroVideo() {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => {
      if (mq.matches) {
        video.pause();
      } else {
        video.play().catch(() => {
          /* autoplay blocked — poster remains visible */
        });
      }
    };
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return (
    <video
      ref={ref}
      className="absolute inset-0 h-full w-full object-cover"
      src="/hero-loop.mp4"
      poster="/hero-poster.jpg"
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      aria-hidden="true"
      tabIndex={-1}
    />
  );
}
