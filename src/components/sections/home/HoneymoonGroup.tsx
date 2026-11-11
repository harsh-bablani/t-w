import Link from "next/link";
import SmartImage from "@/components/ui/SmartImage";
import { images } from "@/data/images";

const items = [
  {
    href: "/services/honeymoon-packages/",
    title: "Honeymoons",
    text: "Overwater villas, alpine hideaways and private dinners — romantic journeys designed around the two of you.",
    img: images.services.honeymoon,
    alt: "Couple walking along a beach",
  },
  {
    href: "/services/group-tours/",
    title: "Group travel",
    text: "Families, friends and organisations travelling together, with rooms, transport and schedules properly coordinated.",
    img: images.services.group,
    alt: "Friends exploring together on holiday",
  },
];

export default function HoneymoonGroup() {
  return (
    <section className="section container-x" aria-label="Honeymoons and group travel">
      <div className="grid gap-6 md:grid-cols-2 md:gap-8">
        {items.map((it) => (
          <Link key={it.href} href={it.href} className="group relative block aspect-[4/5] overflow-hidden bg-abyss text-white md:aspect-[5/6]">
            <SmartImage src={it.img} alt={it.alt} sizes="(min-width:768px) 48vw, 100vw" label={it.title} className="transition-transform duration-[1.6s] ease-expo group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-abyss/90 via-abyss/20 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-7 md:p-10">
              <h2 className="text-display-md">{it.title}</h2>
              <p className="mt-4 max-w-md leading-relaxed text-white/80">{it.text}</p>
              <span className="mt-6 inline-block border-b border-white/50 pb-1 text-[15px] font-semibold transition-colors group-hover:border-lagoon-soft group-hover:text-lagoon-soft">
                Discover {it.title.toLowerCase()}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
