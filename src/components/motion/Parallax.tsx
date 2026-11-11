"use client";
import { useRef } from "react";
import { gsap, prefersReducedMotion, useIsoLayoutEffect } from "@/lib/gsap";
import { cn } from "@/lib/utils";

/** Wrap an absolutely-filled image; it drifts against the scroll inside its frame. */
export default function Parallax({ children, className, amount = 12 }: { children: React.ReactNode; className?: string; amount?: number }) {
  const frame = useRef<HTMLDivElement>(null);
  const inner = useRef<HTMLDivElement>(null);

  useIsoLayoutEffect(() => {
    if (!frame.current || !inner.current || prefersReducedMotion()) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        inner.current,
        { yPercent: -amount / 2 },
        { yPercent: amount / 2, ease: "none", scrollTrigger: { trigger: frame.current, start: "top bottom", end: "bottom top", scrub: true } }
      );
    }, frame);
    return () => ctx.revert();
  }, [amount]);

  return (
    <div ref={frame} className={cn("relative overflow-hidden", className)}>
      <div ref={inner} className="absolute -inset-y-[15%] inset-x-0">
        {children}
      </div>
    </div>
  );
}
