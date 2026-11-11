import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import ServiceIndex from "@/components/sections/ServiceIndex";
import CtaBand from "@/components/sections/CtaBand";
import SmartImage from "@/components/ui/SmartImage";
import Parallax from "@/components/motion/Parallax";
import { images } from "@/data/images";

export const metadata: Metadata = {
  title: "Travel Services",
  description: "Flight tickets, hotel bookings, visa assistance, domestic and international tours, cruises, honeymoons, group tours and customised travel packages.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        crumb="Services"
        title="Every part of the journey, under one roof"
        intro="Book a single flight or plan an entire holiday. Each service works on its own — and works even better together."
      />
      <section className="container-x pb-24 md:pb-32">
        <ServiceIndex />
      </section>

      <section className="bg-abyss text-white">
        <div className="container-x grid items-center gap-14 py-24 md:py-32 lg:grid-cols-12">
          <Parallax className="aspect-[4/3] bg-atlas-deep lg:col-span-6" amount={16}>
            <SmartImage src={images.services.custom} alt="Traveller overlooking a dramatic landscape" sizes="(min-width:1024px) 50vw, 100vw" />
          </Parallax>
          <div className="lg:col-span-5 lg:col-start-8">
            <h2 className="text-display-md">Better together</h2>
            <p className="mt-6 text-lg leading-relaxed text-white/75">
              When flights, hotels, visas and experiences are planned as one, timings line up, transfers connect and you have a single, clear itinerary to follow.
            </p>
            <ul className="mt-10 space-y-4">
              {["Flights timed to hotel check-ins", "Visa guidance matched to your route", "Transfers and tours that fit the day", "One itinerary for the whole trip"].map((t) => (
                <li key={t} className="flex gap-4 text-white/90">
                  <span aria-hidden className="mt-2.5 h-2 w-2 shrink-0 rotate-45 bg-lagoon" />
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <CtaBand title="Tell us what you need — we'll handle the rest." cta="Make an enquiry" />
    </>
  );
}
