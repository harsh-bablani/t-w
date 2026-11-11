"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { markIntroDone } from "@/lib/intro";
import { prefersReducedMotion } from "@/lib/gsap";

/** First-visit intro: the logo is uncovered tile by tile, then the panel lifts away. */
export default function IntroLoader() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    let seen = false;
    try {
      seen = sessionStorage.getItem("tx-intro") === "1";
      sessionStorage.setItem("tx-intro", "1");
    } catch {}
    if (seen || prefersReducedMotion()) {
      setShow(false);
      markIntroDone();
      return;
    }
    const t = window.setTimeout(() => setShow(false), 2100);
    return () => window.clearTimeout(t);
  }, []);

  return (
    <AnimatePresence onExitComplete={markIntroDone}>
      {show && (
        <motion.div
          key="intro"
          data-intro
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white"
          initial={{ clipPath: "inset(0% 0% 0% 0%)" }}
          exit={{ clipPath: "inset(0% 0% 100% 0%)" }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
          role="status"
          aria-label="Loading Tripex World"
        >
          <div className="relative w-[min(78vw,460px)]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/brand/tripex-logo.png" alt="" width={1036} height={245} className="h-auto w-full" />
            <div className="absolute inset-0 grid grid-cols-10 grid-rows-2" aria-hidden>
              {Array.from({ length: 20 }).map((_, i) => (
                <motion.span
                  key={i}
                  className="bg-white"
                  initial={{ opacity: 1 }}
                  animate={{ opacity: 0 }}
                  transition={{ duration: 0.35, delay: 0.15 + ((i % 10) + Math.floor(i / 10)) * 0.07 }}
                />
              ))}
            </div>
          </div>
          <div className="mt-10 h-px w-[min(60vw,280px)] overflow-hidden bg-abyss/10">
            <motion.div
              className="h-full origin-left bg-lagoon"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.7, ease: [0.65, 0, 0.35, 1] }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
