import { Clock } from "lucide-react";
import SmartImage from "@/components/ui/SmartImage";
import type { TourPackage } from "@/data/packages";
import { getDestination } from "@/data/destinations";
import { cn } from "@/lib/utils";

/** Visual card for a sample itinerary. Wrap in a button or link where interactive. */
export default function PackageCard({ p, className, large }: { p: TourPackage; className?: string; large?: boolean }) {
  const dest = getDestination(p.destination);
  return (
    <article className={cn("group flex h-full flex-col bg-white", className)}>
      <div className={cn("relative overflow-hidden", large ? "aspect-[16/10]" : "aspect-[4/3]")}>
        <SmartImage
          src={p.image}
          alt={p.imageAlt}
          sizes={large ? "(min-width:1024px) 50vw, 90vw" : "(min-width:1024px) 30vw, 90vw"}
          label={dest?.name}
          className="transition-transform duration-[1.4s] ease-expo group-hover:scale-105"
        />
        <span className="absolute left-4 top-4 bg-white/90 px-2.5 py-1 text-xs font-semibold text-abyss backdrop-blur">
          Sample itinerary
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6 md:p-7">
        <div className="flex items-center justify-between gap-4 text-sm text-slate">
          <span>{dest?.name}</span>
          <span className="inline-flex items-center gap-1.5">
            <Clock aria-hidden className="h-3.5 w-3.5" /> {p.duration}
          </span>
        </div>
        <h3 className={cn("mt-3 font-display leading-tight text-abyss", large ? "text-4xl" : "text-3xl")}>{p.title}</h3>
        <p className="mt-3 flex-1 text-[15px] leading-relaxed text-slate">{p.summary}</p>
        <ul className="mt-5 flex flex-wrap gap-2">
          {p.highlights.slice(0, large ? 4 : 3).map((h) => (
            <li key={h} className="border border-abyss/10 px-2.5 py-1 text-xs font-medium text-slate">
              {h}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
