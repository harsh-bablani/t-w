"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Pause, Play } from "lucide-react";
import SmartImage from "@/components/ui/SmartImage";
import SplitReveal from "@/components/motion/SplitReveal";
import { ButtonLink } from "@/components/ui/Button";
import { images } from "@/data/images";
import { destinations } from "@/data/destinations";
import { onIntroDone } from "@/lib/intro";
import { prefersReducedMotion } from "@/lib/gsap";

const SLIDE_MS = 6500;

export default function Hero() {
  const slides = images.hero;
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [ready, setReady] = useState(false);
  const [pick, setPick] = useState("");
  const router = useRouter();

  useEffect(() => {
    if (prefersReducedMotion()) setPlaying(false);
    return onIntroDone(() => setReady(true));
  }, []);

  useEffect(() => {
    if (!playing) return;
    const t = window.setTimeout(() => setIndex((i) => (i + 1) % slides.length), SLIDE_MS);
    return () => window.clearTimeout(t);
  }, [index, playing, slides.length]);

  const slide = slides[index];

  return (
    <section className="relative flex min-h-[100svh] flex-col overflow-hidden bg-abyss text-white" aria-label="Introduction">
      {/* Cinematic slideshow: cross-fade with a slow push-in. */}
      <AnimatePresence initial={false}>
        <motion.div
          key={slide.src}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.6, ease: "easeInOut" }}
        >
          <motion.div
            className="absolute inset-0"
            initial={{ scale: 1.14 }}
            animate={{ scale: 1.02 }}
            transition={{ duration: SLIDE_MS / 1000 + 1.6, ease: "linear" }}
          >
            <SmartImage src={slide.src} alt={slide.alt} sizes="100vw" priority={index === 0} label={slide.place} />
          </motion.div>
        </motion.div>
      </AnimatePresence>
      <div className="absolute inset-0 bg-gradient-to-b from-abyss/55 via-abyss/15 to-abyss/85" />

      <div className="container-x relative flex flex-1 flex-col justify-end pb-10 pt-[calc(var(--header-h)+4rem)] md:pb-14">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={ready ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-6 text-lg text-white/85"
        >
          Your passport to the world
        </motion.p>
        <SplitReveal as="h1" trigger="load" delay={0.1} text="Journeys arranged around you." className="max-w-[12ch] text-display-xl" />

        <div className="mt-12 grid gap-10 border-t border-white/20 pt-8 lg:grid-cols-12 lg:items-end">
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, y: 16 }}
            animate={ready ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="max-w-md text-lg leading-relaxed text-white/80">
              International escapes, journeys across India, flights, stays and visas — planned with personal attention from first idea to final evening.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <ButtonLink href="/destinations/" variant="light">
                Explore destinations
              </ButtonLink>
              <ButtonLink href="/contact/" variant="ghost-light" icon={false}>
                Plan my trip
              </ButtonLink>
            </div>
          </motion.div>

          {/* Quick destination finder — navigates to the chosen destination page. */}
          <motion.form
            className="lg:col-span-4 lg:col-start-7"
            initial={{ opacity: 0, y: 16 }}
            animate={ready ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
            onSubmit={(e) => {
              e.preventDefault();
              if (pick) router.push(`/destinations/${pick}/`);
            }}
          >
            <label htmlFor="hero-dest" className="mb-2 block text-sm text-white/70">
              Where to?
            </label>
            <div className="flex border border-white/30 bg-white/10 backdrop-blur-md">
              <select
                id="hero-dest"
                value={pick}
                onChange={(e) => setPick(e.target.value)}
                className="min-w-0 flex-1 appearance-none bg-transparent px-4 py-3.5 text-[15px] text-white outline-none [&>option]:text-abyss"
              >
                <option value="">Choose a destination</option>
                <optgroup label="International">
                  {destinations.filter((d) => d.type === "international").map((d) => (
                    <option key={d.slug} value={d.slug}>{d.name}</option>
                  ))}
                </optgroup>
                <optgroup label="India">
                  {destinations.filter((d) => d.type === "domestic").map((d) => (
                    <option key={d.slug} value={d.slug}>{d.name}</option>
                  ))}
                </optgroup>
              </select>
              <button type="submit" disabled={!pick} className="bg-white px-5 text-sm font-semibold text-abyss transition-colors hover:bg-lagoon-soft disabled:opacity-60">
                Go
              </button>
            </div>
          </motion.form>

          <div className="flex items-center justify-between gap-4 lg:col-span-2 lg:flex-col lg:items-end">
            <div className="text-right" aria-live="polite">
              <p className="text-sm text-white/60">Now showing</p>
              <AnimatePresence mode="wait">
                <motion.p key={slide.place} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} className="font-display text-2xl">
                  {slide.place}
                </motion.p>
              </AnimatePresence>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex gap-1.5" role="tablist" aria-label="Hero images">
                {slides.map((s, i) => (
                  <button
                    key={s.src}
                    type="button"
                    role="tab"
                    aria-selected={i === index}
                    aria-label={`Show ${s.place}`}
                    onClick={() => setIndex(i)}
                    className="relative h-[3px] w-7 overflow-hidden bg-white/25 py-0"
                  >
                    {i === index && (
                      <motion.span
                        key={`${index}-${playing}`}
                        className="absolute inset-0 origin-left bg-white"
                        initial={{ scaleX: playing ? 0 : 1 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: playing ? SLIDE_MS / 1000 : 0, ease: "linear" }}
                      />
                    )}
                  </button>
                ))}
              </div>
              <button
                type="button"
                onClick={() => setPlaying((p) => !p)}
                aria-label={playing ? "Pause slideshow" : "Play slideshow"}
                className="grid h-9 w-9 place-items-center border border-white/30 hover:bg-white/10"
              >
                {playing ? <Pause aria-hidden className="h-3.5 w-3.5" /> : <Play aria-hidden className="h-3.5 w-3.5" />}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
