"use client";
import { useId, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";

export type AccordionItem = { q: string; a: string };

export default function Accordion({ items, tone = "light" }: { items: AccordionItem[]; tone?: "light" | "dark" }) {
  const [open, setOpen] = useState<number | null>(0);
  const id = useId();
  const dark = tone === "dark";

  return (
    <div className={cn("border-t", dark ? "border-white/15" : "border-abyss/10")}>
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q} className={cn("border-b", dark ? "border-white/15" : "border-abyss/10")}>
            <h3 className="font-sans">
              <button
                type="button"
                id={`${id}-h-${i}`}
                aria-expanded={isOpen}
                aria-controls={`${id}-p-${i}`}
                onClick={() => setOpen(isOpen ? null : i)}
                className="group flex w-full items-center justify-between gap-6 py-6 text-left"
              >
                <span className={cn("text-lg font-semibold leading-snug md:text-xl", dark ? "text-white" : "text-abyss")}>{item.q}</span>
                <span
                  className={cn(
                    "grid h-10 w-10 shrink-0 place-items-center border transition-colors duration-300",
                    dark ? "border-white/25 text-white" : "border-abyss/15 text-abyss",
                    isOpen && "border-lagoon bg-lagoon text-white"
                  )}
                >
                  <Plus aria-hidden className={cn("h-4 w-4 transition-transform duration-500 ease-expo", isOpen && "rotate-45")} />
                </span>
              </button>
            </h3>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={`${id}-p-${i}`}
                  role="region"
                  aria-labelledby={`${id}-h-${i}`}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <p className={cn("max-w-3xl pb-7 pr-14 leading-relaxed", dark ? "text-white/70" : "text-slate")}>{item.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
