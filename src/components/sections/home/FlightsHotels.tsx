import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import SmartImage from "@/components/ui/SmartImage";
import Parallax from "@/components/motion/Parallax";
import SplitReveal from "@/components/motion/SplitReveal";
import { images } from "@/data/images";

const panels = [
  {
    href: "/services/flight-tickets/",
    title: "Flights",
    text: "Domestic and international routes compared for timing, comfort and fare conditions — explained clearly before you decide.",
    img: images.services.flights,
    alt: "Aircraft wing above the clouds",
  },
  {
    href: "/services/hotel-bookings/",
    title: "Hotels & resorts",
    text: "City hotels, beach villas and heritage palaces chosen for location and character, not simply star ratings.",
    img: images.services.hotels,
    alt: "Resort pool framed by palms",
  },
];

export default function FlightsHotels() {
  return (
    <section className="section bg-abyss text-white" aria-labelledby="fh-title">
      <div className="container-x">
        <div className="mb-16 grid gap-6 md:grid-cols-12">
          <SplitReveal as="h2" text="The essentials, handled with care" className="text-display-md md:col-span-7" />
          <p className="text-lg leading-relaxed text-white/70 md:col-span-4 md:col-start-9 md:self-end">
            Need only a flight or a hotel? Book them on their own, or let us connect them into a complete journey.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 md:gap-8">
          {panels.map((p, i) => (
            <Link key={p.href} href={p.href} className={`group block ${i === 1 ? "md:mt-24" : ""}`}>
              <Parallax className="aspect-[4/5] bg-atlas-deep" amount={14}>
                <SmartImage src={p.img} alt={p.alt} sizes="(min-width:768px) 45vw, 100vw" label={p.title} className="transition-transform duration-[1.6s] ease-expo group-hover:scale-105" />
              </Parallax>
              <div className="mt-6 flex items-start justify-between gap-6">
                <div>
                  <h3 className="font-display text-4xl">{p.title}</h3>
                  <p className="mt-3 max-w-md leading-relaxed text-white/70">{p.text}</p>
                </div>
                <span className="grid h-12 w-12 shrink-0 place-items-center border border-white/25 transition-colors duration-300 group-hover:border-lagoon group-hover:bg-lagoon">
                  <ArrowUpRight aria-hidden className="h-5 w-5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
