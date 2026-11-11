import Link from "next/link";
import SmartImage from "@/components/ui/SmartImage";
import { images } from "@/data/images";
import { categoryLabels, destinations, type Category } from "@/data/destinations";
import { cn } from "@/lib/utils";

const tiles: { cat: Category; img: string; line: string; span: string }[] = [
  { cat: "islands", img: images.experiences.islands, line: "Lagoons, reefs and barefoot evenings.", span: "md:col-span-7 md:row-span-2" },
  { cat: "mountains", img: images.experiences.mountains, line: "Glaciers, meadows and mountain railways.", span: "md:col-span-5" },
  { cat: "cities", img: images.experiences.cities, line: "Skylines, food streets and design.", span: "md:col-span-5" },
  { cat: "heritage", img: images.experiences.heritage, line: "Palaces, temples and living traditions.", span: "md:col-span-6" },
  { cat: "desert", img: images.experiences.desert, line: "Dunes, desert camps and starlit dinners.", span: "md:col-span-6" },
];

export default function Experiences() {
  return (
    <section className="section container-x" aria-labelledby="exp-title">
      <div className="mb-14 grid gap-6 md:grid-cols-12">
        <h2 id="exp-title" className="text-display-md text-abyss md:col-span-7">
          Choose a journey by the way it feels
        </h2>
        <p className="lead md:col-span-4 md:col-start-9 md:self-end">
          Start with a mood rather than a map. Each collection gathers destinations that share a character.
        </p>
      </div>
      <div className="grid auto-rows-[260px] gap-4 md:grid-cols-12 md:auto-rows-[280px] md:gap-5">
        {tiles.map((t) => {
          const count = destinations.filter((d) => d.categories.includes(t.cat)).length;
          return (
            <Link
              key={t.cat}
              href={`/destinations/?category=${t.cat}`}
              className={cn("group relative overflow-hidden bg-abyss text-white", t.span)}
            >
              <SmartImage
                src={t.img}
                alt=""
                sizes="(min-width:768px) 55vw, 100vw"
                label={categoryLabels[t.cat]}
                className="opacity-90 transition-transform duration-[1.6s] ease-expo group-hover:scale-[1.06]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-abyss/85 via-abyss/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6 md:p-8">
                <div>
                  <h3 className="font-display text-3xl md:text-4xl">{categoryLabels[t.cat]}</h3>
                  <p className="mt-1 text-white/75">{t.line}</p>
                </div>
                <span className="shrink-0 border border-white/30 px-3 py-1 text-sm transition-colors duration-300 group-hover:border-white group-hover:bg-white group-hover:text-abyss">
                  {count} {count === 1 ? "place" : "places"}
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
