"use client";
import { useRef } from "react";
import { gsap, prefersReducedMotion, useIsoLayoutEffect } from "@/lib/gsap";
import { onIntroDone } from "@/lib/intro";
import { cn } from "@/lib/utils";

type Props = {
  text: string;
  as?: "h1" | "h2" | "h3" | "p";
  className?: string;
  /** "load" plays after the intro; "scroll" plays when it enters the viewport. */
  trigger?: "load" | "scroll";
  delay?: number;
};

/** Headline that rises word by word out of a mask. Screen readers get the plain string. */
export default function SplitReveal({ text, as = "h2", className, trigger = "scroll", delay = 0 }: Props) {
  const ref = useRef<HTMLHeadingElement>(null);
  const words = text.split(" ");

  useIsoLayoutEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion()) return;
    const inner = el.querySelectorAll("[data-word]");
    gsap.set(inner, { yPercent: 115 });
    let ctx: gsap.Context | undefined;
    const play = () => {
      ctx = gsap.context(() => {
        gsap.to(inner, {
          yPercent: 0,
          duration: 1.2,
          delay,
          ease: "expo.out",
          stagger: 0.06,
          scrollTrigger: trigger === "scroll" ? { trigger: el, start: "top 88%", once: true } : undefined,
        });
      }, el);
    };
    const off = trigger === "load" ? onIntroDone(play) : (play(), () => {});
    return () => {
      off();
      ctx?.revert();
      gsap.set(inner, { clearProps: "all" });
    };
  }, [text, trigger, delay]);

  const Tag = as;
  return (
    <Tag ref={ref} className={cn(className)} aria-label={text}>
      {words.map((w, i) => (
        <span key={i} aria-hidden className="inline-block overflow-hidden pb-[0.08em] align-top">
          <span data-word className="inline-block will-change-transform">
            {w}
            {i < words.length - 1 ? "\u00a0" : ""}
          </span>
        </span>
      ))}
    </Tag>
  );
}
