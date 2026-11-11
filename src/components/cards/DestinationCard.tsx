import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import SmartImage from "@/components/ui/SmartImage";
import type { Destination } from "@/data/destinations";
import { cn } from "@/lib/utils";

export default function DestinationCard({
  d,
  className,
  aspect = "aspect-[3/4]",
  sizes = "(min-width:1024px) 30vw, (min-width:640px) 45vw, 90vw",
}: {
  d: Destination;
  className?: string;
  aspect?: string;
  sizes?: string;
}) {
  return (
    <Link href={`/destinations/${d.slug}/`} className={cn("group block", className)}>
      <div className={cn("relative overflow-hidden bg-mist", aspect)}>
        <SmartImage
          src={d.image}
          alt={d.imageAlt}
          sizes={sizes}
          label={d.name}
          className="transition-transform duration-[1.4s] ease-expo group-hover:scale-[1.07]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-abyss/75 via-abyss/0 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-100" />
        <span className="absolute right-4 top-4 grid h-11 w-11 translate-y-2 place-items-center bg-white text-abyss opacity-0 transition-all duration-500 ease-expo group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:opacity-100">
          <ArrowUpRight aria-hidden className="h-4 w-4" />
        </span>
        <div className="absolute inset-x-0 bottom-0 p-6 text-white">
          <p className="text-sm text-white/75">{d.type === "domestic" ? `${d.region}, India` : d.country === d.name ? d.region : d.country}</p>
          <h3 className="font-display text-4xl leading-none md:text-[2.75rem]">{d.name}</h3>
          <p className="mt-3 max-h-0 overflow-hidden text-[15px] leading-snug text-white/85 transition-all duration-700 ease-expo group-hover:max-h-24">
            {d.tagline}
          </p>
        </div>
      </div>
    </Link>
  );
}
