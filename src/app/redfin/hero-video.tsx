"use client";

import { useEffect, useRef, useState } from "react";

export function HeroVideo() {
  const ref = useRef<HTMLVideoElement>(null);
  const [loaded, setLoaded] = useState(false);

  // The video can reach a playable state before React hydrates and attaches
  // the event handler, so check the ref on mount to avoid a stuck-invisible video.
  useEffect(() => {
    if (ref.current && ref.current.readyState >= 3) setLoaded(true);
  }, []);

  return (
    <div className="relative aspect-[1920/1276] w-full max-w-2xl overflow-hidden rounded-2xl bg-muted">
      {!loaded && <div className="absolute inset-0 animate-pulse bg-muted" />}
      <video
        ref={ref}
        src="/apps/redfin/demo.mov"
        autoPlay
        loop
        muted
        playsInline
        onCanPlay={() => setLoaded(true)}
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
}
