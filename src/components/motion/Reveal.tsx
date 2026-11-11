"use client";
import { useRef } from "react";
import { gsap, prefersReducedMotion, useIsoLayoutEffect } from "@/lib/gsap";

type Props = {
  children: React.ReactNode;
  className?: string;
  /** Animate matching children in sequence instead of the wrapper itself. */
  stagger?: string;
  y?: number;
  delay?: number;
  as?: "div" | "section" | "ul" | "ol" | "article";
};

/** Scroll-triggered entrance. Used sparingly, for content that benefits from sequencing. */
export default function Reveal({ children, className, stagger, y = 36, delay = 0, as = "div" }: Props) {
  const ref = useRef<HTMLElement>(null);

  useIsoLayoutEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion()) return;
    const ctx = gsap.context(() => {
      const targets = stagger ? el.querySelectorAll(stagger) : el;
      gsap.from(targets, {
        y,
        autoAlpha: 0,
        duration: 1.1,
        delay,
        ease: "expo.out",
        stagger: 0.09,
        scrollTrigger: { trigger: el, start: "top 86%", once: true },
      });
    }, el);
    return () => ctx.revert();
  }, [stagger, y, delay]);

  const Tag = as as "div";
  return (
    <Tag ref={ref as React.RefObject<HTMLDivElement>} className={className}>
      {children}
    </Tag>
  );
}
