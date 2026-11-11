"use client";
import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import SmartImage from "@/components/ui/SmartImage";
import { domestic } from "@/data/destinations";
import { formatMonths } from "@/lib/utils";

/** Interactive index: hover or focus a region to bring its image forward. */
export default function DomesticList() {
  const [active, setActive] = useState(0);
  const d = domestic[active];
  return (
    <section className="section container-x" aria-labelledby="dom-title">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-6">
          <h2 id="dom-title" className="text-display-md text-abyss">
            Closer to home, just as extraordinary
          </h2>
          <p className="lead mt-6 max-w-lg">
            Backwaters and tea hills, desert forts, Himalayan valleys and sunlit beaches — India&apos;s variety rewards a well-planned route.
          </p>
          <ul className="mt-12 border-t border-abyss/10">
            {domestic.map((item, i) => (
              <li key={item.slug} className="border-b border-abyss/10">
                <Link
                  href={`/destinations/${item.slug}/`}
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  className="group flex items-center justify-between gap-6 py-6"
                >
                  <span>
                    <span className={`block font-display text-4xl transition-colors duration-300 md:text-5xl ${i === active ? "text-abyss" : "text-abyss/35"}`}>
                      {item.name}
                    </span>
                    <span className="mt-1 block text-[15px] text-slate">{item.tagline}</span>
                  </span>
                  <ArrowUpRight aria-hidden className={`h-5 w-5 shrink-0 transition-all duration-500 ease-expo ${i === active ? "text-lagoon-deep" : "-translate-x-2 opacity-0"}`} />
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="relative hidden lg:col-span-6 lg:block">
          <div className="sticky top-28 aspect-[4/5] overflow-hidden bg-mist">
            <AnimatePresence initial={false}>
              <motion.div
                key={d.slug}
                className="absolute inset-0"
                initial={{ clipPath: "inset(100% 0 0 0)" }}
                animate={{ clipPath: "inset(0% 0 0 0)" }}
                exit={{ opacity: 0.999 }}
                transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
              >
                <SmartImage src={d.image} alt={d.imageAlt} sizes="45vw" label={d.name} />
              </motion.div>
            </AnimatePresence>
            <div className="absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-abyss/80 to-transparent p-8 text-white">
              <p className="text-sm text-white/70">Best months</p>
              <p className="font-display text-2xl">{formatMonths(d.bestTime.months)}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
