import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import DestinationExplorer from "@/components/sections/DestinationExplorer";
import CtaBand from "@/components/sections/CtaBand";
import DestinationCard from "@/components/cards/DestinationCard";
import ScrollWords from "@/components/motion/ScrollWords";
import { getDestination } from "@/data/destinations";
import { images } from "@/data/images";

export const metadata: Metadata = {
  title: "Destinations",
  description: "Explore international and domestic destinations — Thailand, Singapore, Bali, Malaysia, Australia, Dubai, the Maldives, Switzerland, Kerala, Rajasthan, Kashmir and Goa.",
};

export default function DestinationsPage() {
  const spotlight = ["maldives", "switzerland", "rajasthan"].map((s) => getDestination(s)!);
  return (
    <>
      <PageHero
        crumb="Destinations"
        title="The world, one remarkable place at a time"
        intro="Island lagoons and alpine peaks, Asian capitals and desert forts. Browse by region or by the kind of journey you have in mind."
        image={{ src: images.destinations, alt: "Aerial view of a tropical coastline" }}
      />

      <section className="section container-x pb-0 md:pb-0 lg:pb-0">
        <h2 className="mb-12 text-display-md text-abyss">In the spotlight</h2>
        <div className="grid gap-6 md:grid-cols-12">
          <DestinationCard d={spotlight[0]} className="md:col-span-7" aspect="aspect-[4/5] md:aspect-[7/6]" sizes="(min-width:768px) 58vw, 100vw" />
          <div className="grid gap-6 md:col-span-5">
            <DestinationCard d={spotlight[1]} aspect="aspect-[4/5] md:aspect-[16/11]" sizes="(min-width:768px) 40vw, 100vw" />
            <DestinationCard d={spotlight[2]} aspect="aspect-[4/5] md:aspect-[16/11]" sizes="(min-width:768px) 40vw, 100vw" />
          </div>
        </div>
      </section>

      <DestinationExplorer />

      <section className="section bg-abyss text-white">
        <div className="container-x">
          <ScrollWords
            className="max-w-5xl font-display text-display-md"
            text="The right destination depends on the season, the company and the feeling you're after. Tell us yours, and we'll suggest where to go."
          />
        </div>
      </section>

      <CtaBand title="Not sure where to go yet?" text="Share your dates and what you love. We'll suggest destinations that suit the season and you." cta="Ask for ideas" />
    </>
  );
}
