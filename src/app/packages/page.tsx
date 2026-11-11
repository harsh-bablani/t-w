import type { Metadata } from "next";
import Link from "next/link";
import { Info } from "lucide-react";
import PageHero from "@/components/sections/PageHero";
import PackageExplorer from "@/components/sections/PackageExplorer";
import CtaBand from "@/components/sections/CtaBand";
import { images } from "@/data/images";

export const metadata: Metadata = {
  title: "Tour Packages",
  description: "Sample itineraries for international and domestic holidays — family trips, honeymoons, adventure and group travel. Every journey is tailored individually.",
};

export default function PackagesPage() {
  return (
    <>
      <PageHero
        crumb="Tour Packages"
        title="Ideas to start from, journeys made for you"
        intro="Family holidays, honeymoons, adventures and group trips. Use these sample itineraries as inspiration — then we'll shape one around you."
        image={{ src: images.packages, alt: "Traveller on a mountain ridge at sunrise" }}
      />

      <div className="bg-lagoon-soft/50">
        <div className="container-x flex items-start gap-4 py-6 text-[15px] text-abyss">
          <Info aria-hidden className="mt-0.5 h-5 w-5 shrink-0 text-lagoon-deep" />
          <p>
            <strong className="font-semibold">Sample itineraries for inspiration.</strong> The journeys below are illustrative and are not currently bookable offers. Every trip is planned and quoted individually.
          </p>
        </div>
      </div>

      <PackageExplorer />

      <section className="section bg-abyss text-white">
        <div className="container-x grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <h2 className="text-display-lg">Prefer a trip that&apos;s entirely your own?</h2>
          </div>
          <div className="lg:col-span-4 lg:col-start-9">
            <p className="text-lg leading-relaxed text-white/75">
              Customised travel starts from a blank page — your destinations, your pace, your interests and your budget.
            </p>
            <Link href="/services/customised-travel/" className="link-underline mt-6 inline-block font-semibold text-lagoon-soft">
              About customised travel
            </Link>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
