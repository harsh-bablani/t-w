import type { Metadata } from "next";
import SmartImage from "@/components/ui/SmartImage";
import Parallax from "@/components/motion/Parallax";
import ScrollWords from "@/components/motion/ScrollWords";
import SplitReveal from "@/components/motion/SplitReveal";
import Reveal from "@/components/motion/Reveal";
import PageHero from "@/components/sections/PageHero";
import CtaBand from "@/components/sections/CtaBand";
import { images } from "@/data/images";

export const metadata: Metadata = {
  title: "About Us",
  description: "Tripex World plans personal, well-paced journeys across the world and throughout India. Discover our philosophy and approach to travel.",
};

const philosophy = [
  { title: "Travel should feel personal", text: "Two people can visit the same place and want completely different things from it. We plan for the traveller, not the destination." },
  { title: "Good planning is invisible", text: "The best-organised trips feel effortless. The careful work happens before you leave, so the journey itself can simply unfold." },
  { title: "Honesty builds trust", text: "We would rather recommend the right season, the right hotel or a different destination than sell something that doesn't suit you." },
];

const approach = [
  { title: "Listen", text: "We start by understanding who is travelling, what you enjoy and what you hope to feel." },
  { title: "Shape", text: "We suggest destinations, routes and stays, then refine them with you until the plan feels right." },
  { title: "Arrange", text: "Flights, hotels, visas, transfers and experiences are coordinated into one clear itinerary." },
  { title: "Prepare", text: "You receive the details you need before departure, so you set off knowing what to expect." },
];

const different = [
  "One conversation covers everything — flights, stays, visas, cruises and tours.",
  "Equal care for international journeys and travel within India.",
  "Itineraries paced for real people, with time to enjoy each place.",
  "Plain-language advice on seasons, fare rules and visa requirements.",
  "Sample itineraries that inspire, never rigid packages you must accept.",
];

const commitments = [
  { title: "Transparency", text: "Clear information about what is included, what is not and the conditions that apply." },
  { title: "Responsiveness", text: "Considered replies to your questions while you plan." },
  { title: "Care for detail", text: "Names, dates, documents and special requests checked carefully." },
  { title: "Respect for places", text: "Encouraging travel that respects local communities, cultures and environments." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        crumb="About Us"
        title="We believe every journey should feel like your own."
        intro="Tripex World is a travel company built around one idea: the best trips are planned around the people taking them."
      />

      {/* Image collage under the typographic hero */}
      <section className="container-x grid gap-5 md:grid-cols-12">
        <Parallax className="aspect-[4/3] bg-mist md:col-span-8" amount={14}>
          <SmartImage src={images.about.story} alt="Traveller standing before a wide mountain view" sizes="(min-width:768px) 65vw, 100vw" priority />
        </Parallax>
        <Parallax className="aspect-[3/4] bg-mist md:col-span-4 md:mt-32" amount={20}>
          <SmartImage src={images.about.approach} alt="Calm lake surrounded by mountains" sizes="(min-width:768px) 32vw, 100vw" />
        </Parallax>
      </section>

      {/* Brand introduction + story */}
      <section className="section container-x">
        <div className="grid gap-12 lg:grid-cols-12">
          <h2 className="text-display-md text-abyss lg:col-span-5">Our story</h2>
          <div className="space-y-6 text-lg leading-relaxed text-slate lg:col-span-6 lg:col-start-7">
            <p>
              Every Tripex World journey begins the same way: with a conversation. Not about packages or price lists, but about you — where you have been, what you love, and what you hope this next trip will give you.
            </p>
            <p>
              Our name carries our promise. &ldquo;Your passport to the world&rdquo; means opening doors — to the islands of the Indian Ocean, the cities of Southeast Asia, the mountains of Europe and the extraordinary variety of India itself.
            </p>
            <p>
              We bring flights, hotels, visas, cruises and tours together so that planning feels simple, and travelling feels free.
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="section bg-abyss text-white">
        <div className="container-x">
          <ScrollWords className="max-w-5xl font-display text-display-md" text="Our philosophy is simple: listen closely, plan carefully, and let the journey speak for itself." />
          <Reveal className="mt-20 grid gap-10 md:grid-cols-3" stagger="[data-p]">
            {philosophy.map((p) => (
              <div key={p.title} data-p className="border-t border-white/20 pt-8">
                <h3 className="font-sans text-xl font-semibold">{p.title}</h3>
                <p className="mt-3 leading-relaxed text-white/70">{p.text}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Mission & vision */}
      <section className="section container-x">
        <div className="grid gap-px bg-abyss/10 md:grid-cols-2">
          <div className="bg-frost p-8 md:p-14">
            <p className="kicker">Our mission</p>
            <p className="mt-6 font-display text-display-sm text-abyss">
              To make thoughtfully planned travel accessible to everyone — combining every part of a journey into one clear, personal plan.
            </p>
          </div>
          <div className="bg-frost p-8 md:p-14">
            <p className="kicker">Our vision</p>
            <p className="mt-6 font-display text-display-sm text-abyss">
              To be the travel company people trust for every journey of their lives, from the first family holiday to the honeymoon and beyond.
            </p>
          </div>
        </div>
      </section>

      {/* Approach — a real sequence, so numbered */}
      <section className="section bg-mist">
        <div className="container-x grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SplitReveal as="h2" text="Our approach to travel" className="text-display-md text-abyss" />
            <p className="lead mt-6">Four steps, the same care every time — whether it&apos;s a weekend in Goa or three weeks across Australia.</p>
          </div>
          <Reveal as="ol" stagger="li" className="grid gap-px bg-abyss/10 sm:grid-cols-2 lg:col-span-8">
            {approach.map((a, i) => (
              <li key={a.title} className="bg-mist p-8">
                <span className="font-display text-5xl text-lagoon">{i + 1}</span>
                <h3 className="mt-6 font-sans text-xl font-semibold text-abyss">{a.title}</h3>
                <p className="mt-2 leading-relaxed text-slate">{a.text}</p>
              </li>
            ))}
          </Reveal>
        </div>
      </section>

      {/* What makes us different */}
      <section className="section container-x">
        <div className="grid gap-14 lg:grid-cols-12">
          <h2 className="text-display-md text-abyss lg:col-span-5">What makes us different</h2>
          <ul className="lg:col-span-6 lg:col-start-7">
            {different.map((d) => (
              <li key={d} className="flex gap-5 border-t border-abyss/10 py-6 text-lg text-abyss last:border-b">
                <span aria-hidden className="mt-2.5 h-2 w-2 shrink-0 rotate-45 bg-lagoon" />
                {d}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Commitment */}
      <section className="section bg-white">
        <div className="container-x">
          <h2 className="max-w-3xl text-display-md text-abyss">Our commitment to travellers</h2>
          <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {commitments.map((c) => (
              <div key={c.title}>
                <span aria-hidden className="block h-px w-12 bg-lagoon" />
                <h3 className="mt-6 font-display text-3xl text-abyss">{c.title}</h3>
                <p className="mt-3 leading-relaxed text-slate">{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand title="Let's plan something worth remembering." />
    </>
  );
}
