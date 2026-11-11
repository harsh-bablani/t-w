"use client";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import PackageCard from "@/components/cards/PackageCard";
import SmartImage from "@/components/ui/SmartImage";
import { ButtonLink } from "@/components/ui/Button";
import { packages, packageCategoryLabels, type PackageCategory, type TourPackage } from "@/data/packages";
import { getDestination } from "@/data/destinations";
import { setScrollLock } from "@/lib/scroll-lock";
import { cn } from "@/lib/utils";

type Filter = "all" | "international" | "domestic" | PackageCategory;

const filters: { key: Filter; label: string }[] = [
  { key: "all", label: "All" },
  { key: "international", label: "International" },
  { key: "domestic", label: "Across India" },
  ...(Object.entries(packageCategoryLabels) as [PackageCategory, string][]).map(([key, label]) => ({ key, label })),
];

export default function PackageExplorer() {
  const [filter, setFilter] = useState<Filter>("all");
  const [open, setOpen] = useState<TourPackage | null>(null);
  const close = useCallback(() => setOpen(null), []);

  // Deep link: /packages/?open=<slug>
  useEffect(() => {
    const slug = new URLSearchParams(window.location.search).get("open");
    const p = packages.find((x) => x.slug === slug);
    if (p) setOpen(p);
  }, []);

  const list = useMemo(
    () =>
      packages.filter((p) =>
        filter === "all" ? true : filter === "international" || filter === "domestic" ? p.type === filter : p.categories.includes(filter)
      ),
    [filter]
  );

  const featured = packages.filter((p) => p.featured).slice(0, 2);

  return (
    <>
    <section className="section container-x pb-0 md:pb-0 lg:pb-0" aria-labelledby="pk-featured">
      <h2 id="pk-featured" className="mb-12 text-display-md text-abyss">Featured journeys</h2>
      <div className="grid gap-6 lg:grid-cols-2">
        {featured.map((p) => (
          <button key={p.slug} type="button" onClick={() => setOpen(p)} aria-haspopup="dialog" aria-label={`View sample itinerary: ${p.title}`} className="block text-left">
            <PackageCard p={p} large />
          </button>
        ))}
      </div>
    </section>
    <section id="all-packages" className="section container-x" aria-labelledby="pk-title">
      <h2 id="pk-title" className="mb-10 text-display-md text-abyss">
        Browse sample itineraries
      </h2>
      <div role="group" aria-label="Filter itineraries" className="no-scrollbar -mx-5 mb-12 flex gap-2 overflow-x-auto px-5 sm:mx-0 sm:flex-wrap sm:px-0">
        {filters.map((f) => (
          <button
            key={f.key}
            type="button"
            aria-pressed={filter === f.key}
            onClick={() => setFilter(f.key)}
            className={cn(
              "shrink-0 border px-4 py-2 text-sm font-medium transition-colors duration-300",
              filter === f.key ? "border-abyss bg-abyss text-white" : "border-abyss/15 text-slate hover:border-abyss/40 hover:text-abyss"
            )}
          >
            {f.label}
          </button>
        ))}
      </div>
      <p className="sr-only" aria-live="polite">{list.length} itineraries shown</p>

      <motion.div layout className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {list.map((p) => (
            <motion.button
              key={p.slug}
              type="button"
              layout
              onClick={() => setOpen(p)}
              aria-haspopup="dialog"
              aria-label={`View sample itinerary: ${p.title}`}
              className="text-left"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            >
              <PackageCard p={p} />
            </motion.button>
          ))}
        </AnimatePresence>
      </motion.div>

    </section>
    <AnimatePresence>{open && <PackageDialog p={open} onClose={close} />}</AnimatePresence>
    </>
  );
}

function PackageDialog({ p, onClose }: { p: TourPackage; onClose: () => void }) {
  const ref = useRef<HTMLDivElement>(null);
  const dest = getDestination(p.destination);

  useEffect(() => {
    const prev = document.activeElement as HTMLElement | null;
    setScrollLock(true);
    ref.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "Tab" && ref.current) {
        const f = ref.current.querySelectorAll<HTMLElement>("a,button");
        const first = f[0], last = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      setScrollLock(false);
      prev?.focus();
    };
  }, [onClose]);

  return (
    <motion.div className="fixed inset-0 z-[60] flex items-end justify-center sm:items-center sm:p-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <button type="button" aria-label="Close" tabIndex={-1} onClick={onClose} className="absolute inset-0 bg-abyss/70 backdrop-blur-sm" />
      <motion.div
        ref={ref}
        role="dialog"
        aria-modal="true"
        aria-labelledby="pk-dialog-title"
        tabIndex={-1}
        data-lenis-prevent
        className="relative max-h-[92svh] w-full max-w-4xl overflow-y-auto bg-white outline-none"
        initial={{ y: 60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 40, opacity: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="relative aspect-[16/8]">
          <SmartImage src={p.image} alt={p.imageAlt} sizes="(min-width:900px) 900px, 100vw" label={dest?.name} />
          <button type="button" onClick={onClose} aria-label="Close itinerary" className="absolute right-4 top-4 grid h-11 w-11 place-items-center bg-white text-abyss hover:bg-lagoon-soft">
            <X aria-hidden className="h-5 w-5" />
          </button>
        </div>
        <div className="grid gap-10 p-7 md:grid-cols-5 md:p-10">
          <div className="md:col-span-3">
            <p className="text-sm text-slate">{dest?.name}, {p.duration}</p>
            <h2 id="pk-dialog-title" className="mt-2 text-display-sm text-abyss">{p.title}</h2>
            <p className="mt-4 leading-relaxed text-slate">{p.summary}</p>
            <ol className="mt-8 space-y-5">
              {p.outline.map((o) => (
                <li key={o.days} className="grid grid-cols-[6.5rem_1fr] gap-4 border-t border-abyss/10 pt-5">
                  <span className="text-sm font-semibold text-lagoon-deep">{o.days}</span>
                  <span className="text-abyss">{o.plan}</span>
                </li>
              ))}
            </ol>
          </div>
          <div className="md:col-span-2">
            <div className="bg-mist p-6">
              <h3 className="font-sans text-base font-semibold text-abyss">Highlights</h3>
              <ul className="mt-4 space-y-2.5">
                {p.highlights.map((h) => (
                  <li key={h} className="flex gap-3 text-[15px] text-slate">
                    <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rotate-45 bg-lagoon" /> {h}
                  </li>
                ))}
              </ul>
            </div>
            <p className="mt-6 text-sm leading-relaxed text-slate">
              This is an illustrative sample itinerary, not a live offer. Prices and availability are confirmed only when your journey is planned.
            </p>
            <ButtonLink href={`/contact/?package=${p.slug}`} className="mt-6 w-full">
              Plan a journey like this
            </ButtonLink>
            {dest && (
              <ButtonLink href={`/destinations/${dest.slug}/`} variant="outline" icon={false} className="mt-3 w-full">
                About {dest.name}
              </ButtonLink>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
