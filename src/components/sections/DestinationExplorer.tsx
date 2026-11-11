"use client";
import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import DestinationCard from "@/components/cards/DestinationCard";
import { categoryLabels, destinations, type Category, type DestinationType } from "@/data/destinations";
import { cn } from "@/lib/utils";

type TypeFilter = "all" | DestinationType;

export default function DestinationExplorer() {
  const [type, setType] = useState<TypeFilter>("all");
  const [cat, setCat] = useState<Category | "all">("all");

  // Deep links from the homepage: /destinations/?category=islands
  useEffect(() => {
    const c = new URLSearchParams(window.location.search).get("category");
    if (c && c in categoryLabels) {
      setCat(c as Category);
      const t = window.setTimeout(() => {
        const el = document.getElementById("explore");
        if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 40, behavior: "smooth" });
      }, 750);
      return () => window.clearTimeout(t);
    }
  }, []);

  const list = useMemo(
    () => destinations.filter((d) => (type === "all" || d.type === type) && (cat === "all" || d.categories.includes(cat))),
    [type, cat]
  );

  return (
    <section id="explore" className="section scroll-mt-20 container-x" aria-labelledby="explore-title">
      <div className="mb-12 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <h2 id="explore-title" className="text-display-md text-abyss">
          Find your next destination
        </h2>
        <div role="group" aria-label="International or domestic" className="inline-flex self-start border border-abyss/15 p-1">
          {(["all", "international", "domestic"] as TypeFilter[]).map((t) => (
            <button
              key={t}
              type="button"
              aria-pressed={type === t}
              onClick={() => setType(t)}
              className="relative px-4 py-2 text-sm font-semibold capitalize"
            >
              {type === t && <motion.span layoutId="type-pill" className="absolute inset-0 bg-abyss" transition={{ type: "spring", stiffness: 380, damping: 34 }} />}
              <span className={cn("relative", type === t ? "text-white" : "text-slate")}>{t === "domestic" ? "India" : t}</span>
            </button>
          ))}
        </div>
      </div>

      <div role="group" aria-label="Filter by category" className="no-scrollbar -mx-5 mb-12 flex gap-2 overflow-x-auto px-5 sm:mx-0 sm:flex-wrap sm:px-0">
        {(["all", ...Object.keys(categoryLabels)] as (Category | "all")[]).map((c) => (
          <button
            key={c}
            type="button"
            aria-pressed={cat === c}
            onClick={() => setCat(c)}
            className={cn(
              "shrink-0 border px-4 py-2 text-sm font-medium transition-colors duration-300",
              cat === c ? "border-lagoon bg-lagoon text-white" : "border-abyss/15 text-slate hover:border-abyss/40 hover:text-abyss"
            )}
          >
            {c === "all" ? "All experiences" : categoryLabels[c]}
          </button>
        ))}
      </div>

      <p className="sr-only" aria-live="polite">
        {list.length} destinations shown
      </p>

      <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {list.map((d) => (
            <motion.div
              key={d.slug}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            >
              <DestinationCard d={d} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {list.length === 0 && (
        <div className="border border-dashed border-abyss/20 p-12 text-center">
          <p className="text-lg text-abyss">No destinations match both filters yet.</p>
          <button type="button" onClick={() => { setType("all"); setCat("all"); }} className="link-underline mt-3 font-semibold text-lagoon-deep">
            Show all destinations
          </button>
        </div>
      )}
    </section>
  );
}
