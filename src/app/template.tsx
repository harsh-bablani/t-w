"use client";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

/**
 * Route transition. A curtain of tiles — the logo's globe mosaic —
 * folds away whenever a new page mounts.
 */
const COLS = 8;
const tones = ["bg-atlas-deep", "bg-atlas", "bg-lagoon-deep", "bg-abyss"];

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  return (
    <>
      <div aria-hidden className="pointer-events-none fixed inset-0 z-[90] grid grid-cols-8" key={pathname}>
        {Array.from({ length: COLS }).map((_, i) => (
          <motion.span
            key={i}
            className={`${tones[i % tones.length]} block h-full origin-top`}
            initial={{ scaleY: 1 }}
            animate={{ scaleY: 0 }}
            transition={{ duration: 0.65, delay: 0.04 * i, ease: [0.76, 0, 0.24, 1] }}
          />
        ))}
      </div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.25 }}>
        {children}
      </motion.div>
    </>
  );
}
