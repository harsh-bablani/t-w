import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CalendarDays, Clock, Users, MapPin } from "lucide-react";
import SmartImage from "@/components/ui/SmartImage";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { ButtonLink } from "@/components/ui/Button";
import Parallax from "@/components/motion/Parallax";
import SplitReveal from "@/components/motion/SplitReveal";
import Reveal from "@/components/motion/Reveal";
import DestinationCard from "@/components/cards/DestinationCard";
import { destinations, getDestination } from "@/data/destinations";
import { cn, formatMonths, monthNames } from "@/lib/utils";

export function generateStaticParams() {
  return destinations.map((d) => ({ slug: d.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const d = getDestination(params.slug);
  if (!d) return {};
  return {
    title: `${d.name} travel guide`,
    description: d.summary,
    openGraph: { title: `${d.name} — Tripex World`, description: d.summary, images: [{ url: `${d.image}?auto=format&fit=crop&w=1200&q=70` }] },
  };
}

export default function DestinationPage({ params }: { params: { slug: string } }) {
  const d = getDestination(params.slug);
  if (!d) notFound();

  const related = destinations
    .filter((x) => x.slug !== d.slug && (x.type === d.type || x.categories.some((c) => d.categories.includes(c))))
    .slice(0, 3);

  const facts = [
    { icon: MapPin, label: "Region", value: d.type === "domestic" ? `${d.region}, India` : `${d.region}${d.country !== d.name ? `, ${d.country}` : ""}` },
    { icon: CalendarDays, label: "Best time", value: formatMonths(d.bestTime.months) },
    { icon: Clock, label: "Suggested length", value: d.duration },
    { icon: Users, label: "Ideal for", value: d.idealFor.join(", ") },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[100svh] items-end overflow-hidden bg-abyss text-white">
        <Parallax className="absolute inset-0" amount={18}>
          <SmartImage src={d.image} alt={d.imageAlt} sizes="100vw" priority label={d.name} />
        </Parallax>
        <div className="absolute inset-0 bg-gradient-to-t from-abyss via-abyss/30 to-abyss/20" />
        <div className="container-x relative pb-12 pt-40 md:pb-16">
          <Breadcrumbs light items={[{ label: "Home", href: "/" }, { label: "Destinations", href: "/destinations/" }, { label: d.name }]} />
          <SplitReveal as="h1" trigger="load" text={d.name} className="mt-6 text-display-xl" />
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/85 md:text-xl">{d.tagline}</p>
          <dl className="mt-12 grid grid-cols-2 gap-6 border-t border-white/20 pt-8 md:grid-cols-4">
            {facts.map((f) => (
              <div key={f.label}>
                <dt className="flex items-center gap-2 text-sm text-white/60">
                  <f.icon aria-hidden className="h-4 w-4" strokeWidth={1.5} /> {f.label}
                </dt>
                <dd className="mt-1 text-[15px] font-semibold">{f.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Overview + highlights */}
      <section className="section container-x">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h2 className="text-display-md text-abyss">{d.summary}</h2>
            <div className="mt-10 space-y-6 text-lg leading-relaxed text-slate">
              {d.overview.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>
          </div>
          <aside className="lg:col-span-4 lg:col-start-9">
            <div className="bg-mist p-8 lg:sticky lg:top-28">
              <h3 className="font-sans text-lg font-semibold text-abyss">Travel highlights</h3>
              <ul className="mt-6 space-y-4">
                {d.highlights.map((h) => (
                  <li key={h} className="flex gap-4 text-[15px] leading-relaxed text-abyss">
                    <span aria-hidden className="mt-2 h-2 w-2 shrink-0 rotate-45 bg-lagoon" />
                    {h}
                  </li>
                ))}
              </ul>
              <ButtonLink href={`/contact/?destination=${d.slug}`} className="mt-8 w-full">
                Enquire about {d.name}
              </ButtonLink>
            </div>
          </aside>
        </div>
      </section>

      {/* Top attractions */}
      <section className="section bg-abyss text-white">
        <div className="container-x">
          <SplitReveal as="h2" text="Top attractions" className="mb-14 text-display-md" />
          <Reveal className="grid gap-px bg-white/10 md:grid-cols-2" stagger="[data-a]">
            {d.attractions.map((a) => (
              <div key={a.name} data-a className="bg-abyss p-8 md:p-10">
                <h3 className="font-display text-3xl">{a.name}</h3>
                <p className="mt-3 max-w-md leading-relaxed text-white/70">{a.description}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Experiences */}
      <section className="section container-x">
        <div className="grid gap-14 lg:grid-cols-12">
          <h2 className="text-display-md text-abyss lg:col-span-4">Things to experience</h2>
          <div className="grid gap-x-10 sm:grid-cols-2 lg:col-span-8">
            {d.experiences.map((e) => (
              <div key={e.title} className="border-t border-abyss/10 py-8">
                <h3 className="font-sans text-xl font-semibold text-abyss">{e.title}</h3>
                <p className="mt-2 leading-relaxed text-slate">{e.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Best time */}
      <section className="section bg-mist">
        <div className="container-x">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <h2 className="text-display-md text-abyss">Best time to visit</h2>
              <p className="lead mt-6">{d.bestTime.note}</p>
            </div>
            <div className="lg:col-span-6 lg:col-start-7 lg:self-end">
              <ol className="grid grid-cols-6 gap-1.5 sm:grid-cols-12" aria-label={`Recommended months: ${formatMonths(d.bestTime.months)}`}>
                {monthNames.map((m, i) => {
                  const good = d.bestTime.months.includes(i + 1);
                  return (
                    <li key={m} className="text-center">
                      <span aria-hidden className={cn("block h-20 transition-colors", good ? "bg-lagoon" : "bg-abyss/10")} />
                      <span className={cn("mt-2 block text-xs font-semibold", good ? "text-abyss" : "text-slate/60")}>{m}</span>
                    </li>
                  );
                })}
              </ol>
              <p className="mt-4 flex items-center gap-2 text-sm text-slate">
                <span aria-hidden className="h-3 w-3 bg-lagoon" /> Recommended months
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Itinerary */}
      <section className="section container-x">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <h2 className="text-display-md text-abyss">A suggested itinerary</h2>
            <p className="lead mt-6">An outline to show how {d.name} can flow. Every journey is tailored to your dates and interests.</p>
          </div>
          <Reveal as="ol" stagger="li" className="relative lg:col-span-7 lg:col-start-6">
            <span aria-hidden className="absolute bottom-4 left-[7px] top-4 w-px bg-abyss/15" />
            {d.itinerary.map((step) => (
              <li key={step.days} className="relative grid gap-1 pb-12 pl-10 last:pb-0">
                <span aria-hidden className="absolute left-0 top-2 h-[15px] w-[15px] rotate-45 border-2 border-lagoon bg-frost" />
                <span className="text-sm font-semibold text-lagoon-deep">{step.days}</span>
                <h3 className="font-display text-3xl text-abyss">{step.title}</h3>
                <p className="leading-relaxed text-slate">{step.description}</p>
              </li>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Gallery */}
      <section className="container-x pb-24 md:pb-32" aria-label={`${d.name} gallery`}>
        <div className="grid gap-4 md:grid-cols-12 md:gap-5">
          {d.gallery.map((g, i) => (
            <Parallax
              key={g.src}
              amount={i === 1 ? 20 : 12}
              className={cn("bg-mist", i === 0 ? "aspect-[4/3] md:col-span-7" : i === 1 ? "aspect-[3/4] md:col-span-5 md:mt-24" : "aspect-[16/9] md:col-span-8 md:col-start-3")}
            >
              <SmartImage src={g.src} alt={g.alt} sizes="(min-width:768px) 60vw, 100vw" label={d.name} />
            </Parallax>
          ))}
        </div>
      </section>

      {/* Related */}
      <section className="section bg-mist">
        <div className="container-x">
          <h2 className="mb-12 text-display-md text-abyss">You might also love</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((r) => (
              <DestinationCard key={r.slug} d={r} />
            ))}
          </div>
        </div>
      </section>

      {/* Enquiry CTA */}
      <section className="mosaic text-white">
        <div className="bg-gradient-to-r from-abyss via-abyss/95 to-abyss/60">
          <div className="container-x flex flex-col gap-8 py-24 md:flex-row md:items-end md:justify-between md:py-32">
            <div>
              <h2 className="max-w-2xl text-display-md">Ready to plan your time in {d.name}?</h2>
              <p className="mt-5 max-w-lg text-lg text-white/75">Tell us your dates and travellers, and we&apos;ll shape an itinerary around you.</p>
            </div>
            <ButtonLink href={`/contact/?destination=${d.slug}`} variant="light" className="shrink-0">
              Send an enquiry
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
