"use client";
import { useRef } from "react";
import Link from "next/link";
import DestinationCard from "@/components/cards/DestinationCard";
import { featuredDestinations } from "@/data/destinations";
import { gsap, useIsoLayoutEffect } from "@/lib/gsap";

/** Desktop: the row of destinations travels sideways as you scroll. Mobile: swipeable. */
export default function FeaturedDestinations() {
  const section = useRef<HTMLElement>(null);
  const track = useRef<HTMLDivElement>(null);

  useIsoLayoutEffect(() => {
    if (!section.current || !track.current) return;
    const mm = gsap.matchMedia();
    mm.add("(min-width: 1024px) and (prefers-reduced-motion: no-preference)", () => {
      const el = track.current!;
      const distance = () => el.scrollWidth - window.innerWidth;
      gsap.to(el, {
        x: () => -distance(),
        ease: "none",
        scrollTrigger: {
          trigger: section.current,
          start: "top top",
          end: () => `+=${distance()}`,
          scrub: 0.6,
          pin: true,
          invalidateOnRefresh: true,
        },
      });
    });
    return () => mm.revert();
  }, []);

  return (
    <section ref={section} className="overflow-hidden bg-mist py-24 lg:flex lg:h-screen lg:flex-col lg:justify-center lg:py-0" aria-labelledby="featured-title">
      <div className="container-x mb-12 flex flex-wrap items-end justify-between gap-6 lg:mb-14">
        <h2 id="featured-title" className="max-w-2xl text-display-md text-abyss">
          Places we love to send travellers
        </h2>
        <Link href="/destinations/" className="link-underline text-[15px] font-semibold text-lagoon-deep">
          All destinations
        </Link>
      </div>
      <div
        ref={track}
        className="no-scrollbar flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 sm:px-8 lg:snap-none lg:gap-8 lg:overflow-visible lg:px-12 xl:px-[max(3rem,calc((100vw-1440px)/2+3rem))]"
      >
        {featuredDestinations.map((d) => (
          <DestinationCard
            key={d.slug}
            d={d}
            className="w-[78vw] shrink-0 snap-start sm:w-[44vw] lg:w-[min(30vw,420px)]"
            aspect="aspect-[3/4] lg:aspect-[4/5]"
            sizes="(min-width:1024px) 30vw, 78vw"
          />
        ))}
        <span aria-hidden className="w-px shrink-0 lg:w-12" />
      </div>
    </section>
  );
}
