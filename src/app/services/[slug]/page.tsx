import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import SmartImage from "@/components/ui/SmartImage";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import ServiceIcon from "@/components/ui/ServiceIcon";
import { ButtonLink } from "@/components/ui/Button";
import SplitReveal from "@/components/motion/SplitReveal";
import Parallax from "@/components/motion/Parallax";
import Reveal from "@/components/motion/Reveal";
import DestinationCard from "@/components/cards/DestinationCard";
import CtaBand from "@/components/sections/CtaBand";
import { services, getService } from "@/data/services";
import { getDestination } from "@/data/destinations";
import { cn } from "@/lib/utils";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const s = getService(params.slug);
  if (!s) return {};
  return { title: s.title, description: s.short };
}

/** Each service has a tone that changes the hero treatment, keeping pages distinct. */
const tones = {
  abyss: { bg: "bg-abyss", text: "text-white", sub: "text-white/75", light: true },
  atlas: { bg: "bg-atlas-deep", text: "text-white", sub: "text-white/75", light: true },
  lagoon: { bg: "bg-lagoon-deep", text: "text-white", sub: "text-white/80", light: true },
  mist: { bg: "bg-mist", text: "text-abyss", sub: "text-slate", light: false },
};

export default function ServicePage({ params }: { params: { slug: string } }) {
  const s = getService(params.slug);
  if (!s) notFound();
  const t = tones[s.tone];
  const others = services.filter((x) => x.slug !== s.slug).slice(0, 4);
  const related = s.relatedDestinations.map((slug) => getDestination(slug)).filter(Boolean);

  return (
    <>
      <section className={cn("overflow-hidden pt-[var(--header-h)]", t.bg, t.text)}>
        <div className="container-x grid gap-12 py-16 md:py-24 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-6">
            <Breadcrumbs light={t.light} items={[{ label: "Home", href: "/" }, { label: "Services", href: "/services/" }, { label: s.title }]} />
            <span className={cn("mt-10 grid h-14 w-14 place-items-center", t.light ? "bg-white/10" : "bg-white text-atlas")}>
              <ServiceIcon name={s.icon} className="h-6 w-6" />
            </span>
            <SplitReveal as="h1" trigger="load" text={s.title} className="mt-8 text-display-lg" />
            <p className={cn("mt-6 max-w-lg text-lg leading-relaxed", t.sub)}>{s.intro}</p>
            <ButtonLink href={`/contact/?service=${s.slug}`} variant={t.light ? "light" : "solid"} className="mt-10">
              Enquire about {s.title.toLowerCase()}
            </ButtonLink>
          </div>
          <Parallax className="aspect-[4/5] lg:col-span-5 lg:col-start-8 lg:aspect-[4/5]" amount={14}>
            <SmartImage src={s.image} alt={s.imageAlt} sizes="(min-width:1024px) 40vw, 100vw" priority label={s.title} />
          </Parallax>
        </div>
      </section>

      <section className="section container-x">
        <div className="grid gap-14 lg:grid-cols-12">
          <h2 className="text-display-md text-abyss lg:col-span-4">What we help with</h2>
          <Reveal as="ul" stagger="li" className="grid gap-x-10 sm:grid-cols-2 lg:col-span-8">
            {s.includes.map((i) => (
              <li key={i} className="flex gap-4 border-t border-abyss/10 py-6 text-lg text-abyss">
                <span aria-hidden className="mt-2.5 h-2 w-2 shrink-0 rotate-45 bg-lagoon" />
                {i}
              </li>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="section bg-mist">
        <div className="container-x">
          <h2 className="mb-14 text-display-md text-abyss">How it works</h2>
          <ol className="grid gap-px bg-abyss/10 md:grid-cols-3">
            {s.process.map((p, i) => (
              <li key={p.title} className="bg-mist p-8 md:p-10">
                <span className="font-display text-6xl text-lagoon">{i + 1}</span>
                <h3 className="mt-8 font-sans text-xl font-semibold text-abyss">{p.title}</h3>
                <p className="mt-2 leading-relaxed text-slate">{p.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section container-x">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h2 className="text-display-md text-abyss">Good to know</h2>
            <ul className="mt-10 space-y-5">
              {s.goodToKnow.map((g) => (
                <li key={g} className="border-l-2 border-lagoon pl-5 leading-relaxed text-slate">
                  {g}
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <h2 className="font-sans text-lg font-semibold text-abyss">Other services</h2>
            <ul className="mt-6 border-t border-abyss/10">
              {others.map((o) => (
                <li key={o.slug} className="border-b border-abyss/10">
                  <Link href={`/services/${o.slug}/`} className="group flex items-center justify-between gap-4 py-5">
                    <span className="flex items-center gap-4">
                      <ServiceIcon name={o.icon} className="h-5 w-5 text-atlas" />
                      <span className="font-display text-2xl text-abyss">{o.title}</span>
                    </span>
                    <ArrowUpRight aria-hidden className="h-4 w-4 transition-transform duration-500 ease-expo group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="section bg-mist">
          <div className="container-x">
            <h2 className="mb-12 text-display-md text-abyss">Popular destinations for this service</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((d) => (
                <DestinationCard key={d!.slug} d={d!} />
              ))}
            </div>
          </div>
        </section>
      )}

      <CtaBand title={`Let's arrange your ${s.title.toLowerCase()}.`} href={`/contact/?service=${s.slug}`} cta="Send an enquiry" image={s.image} />
    </>
  );
}
