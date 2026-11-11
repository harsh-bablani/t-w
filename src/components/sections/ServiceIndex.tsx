"use client";
import { useRef, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useMotionValue, useSpring } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import SmartImage from "@/components/ui/SmartImage";
import ServiceIcon from "@/components/ui/ServiceIcon";
import { services } from "@/data/services";
import { cn } from "@/lib/utils";

/** A typographic index of services. On desktop, a preview image follows the cursor. */
export default function ServiceIndex() {
  const [hover, setHover] = useState<number | null>(null);
  const area = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 220, damping: 26 });
  const sy = useSpring(y, { stiffness: 220, damping: 26 });

  return (
    <div
      ref={area}
      className="relative"
      onMouseMove={(e) => {
        const r = area.current!.getBoundingClientRect();
        x.set(e.clientX - r.left);
        y.set(e.clientY - r.top);
      }}
      onMouseLeave={() => setHover(null)}
    >
      <ul className="border-t border-abyss/10">
        {services.map((s, i) => (
          <li key={s.slug} className="border-b border-abyss/10">
            <Link
              href={`/services/${s.slug}/`}
              onMouseEnter={() => setHover(i)}
              className="group grid grid-cols-[3rem_1fr_auto] items-center gap-4 py-7 md:grid-cols-[4rem_minmax(0,1fr)_minmax(0,1fr)_auto] md:gap-8 md:py-9"
            >
              <span className="grid h-12 w-12 place-items-center bg-mist text-atlas transition-colors duration-300 group-hover:bg-lagoon group-hover:text-white">
                <ServiceIcon name={s.icon} className="h-5 w-5" />
              </span>
              <span
                className={cn(
                  "font-display text-3xl leading-none transition-[color,transform] duration-500 ease-expo md:text-5xl",
                  hover !== null && hover !== i ? "text-abyss/30" : "text-abyss",
                  "group-hover:translate-x-2"
                )}
              >
                {s.title}
              </span>
              <span className="hidden max-w-sm text-[15px] leading-relaxed text-slate md:block">{s.short}</span>
              <ArrowUpRight aria-hidden className="h-5 w-5 text-abyss transition-transform duration-500 ease-expo group-hover:-translate-y-1 group-hover:translate-x-1" />
            </Link>
          </li>
        ))}
      </ul>

      <motion.div
        aria-hidden
        className="pointer-events-none absolute left-0 top-0 z-10 hidden h-[260px] w-[200px] -translate-x-1/2 -translate-y-1/2 lg:block"
        style={{ x: sx, y: sy }}
      >
        <AnimatePresence>
          {hover !== null && (
            <motion.div
              key={hover}
              className="absolute inset-0 overflow-hidden"
              initial={{ opacity: 0, scale: 0.85, rotate: -4 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              <SmartImage src={services[hover].image} alt="" sizes="200px" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
