import Link from "next/link";
import SmartImage from "@/components/ui/SmartImage";
import { getDestination } from "@/data/destinations";

const notes = [
  {
    slug: "maldives",
    title: "Why November to April is island season",
    text: "The north-east monsoon brings calm seas and clear water to the Maldives — the ideal window for snorkelling and seaplane views.",
  },
  {
    slug: "switzerland",
    title: "Switzerland by rail, one lake at a time",
    text: "Lucerne, Interlaken and Zermatt connect beautifully by train, turning travel days into the highlight of the trip.",
  },
  {
    slug: "rajasthan",
    title: "Rajasthan in the cool season",
    text: "From October to March, forts, palaces and desert camps are at their most comfortable to explore.",
  },
];

export default function Inspiration() {
  return (
    <section className="section container-x" aria-labelledby="insp-title">
      <h2 id="insp-title" className="mb-14 max-w-2xl text-display-md text-abyss">
        Travel inspiration
      </h2>
      <div className="grid gap-10 md:grid-cols-3 md:gap-8">
        {notes.map((n, i) => {
          const d = getDestination(n.slug)!;
          return (
            <Link key={n.slug} href={`/destinations/${d.slug}/`} className={`group block ${i === 1 ? "md:mt-16" : ""}`}>
              <div className="relative aspect-[4/5] overflow-hidden bg-mist">
                <SmartImage src={d.gallery[0].src} alt={d.gallery[0].alt} sizes="(min-width:768px) 30vw, 100vw" label={d.name} className="transition-transform duration-[1.6s] ease-expo group-hover:scale-105" />
              </div>
              <p className="mt-6 text-sm text-lagoon-deep">{d.name}</p>
              <h3 className="mt-2 font-display text-3xl leading-tight text-abyss">
                <span className="link-underline">{n.title}</span>
              </h3>
              <p className="mt-3 leading-relaxed text-slate">{n.text}</p>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
