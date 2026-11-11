import ScrollWords from "@/components/motion/ScrollWords";
import { ButtonLink } from "@/components/ui/Button";

export default function Intro() {
  return (
    <section className="section container-x">
      <div className="grid gap-12 lg:grid-cols-12">
        <p className="kicker lg:col-span-3">Tripex World</p>
        <div className="lg:col-span-9">
          <ScrollWords
            className="font-display text-display-md text-abyss"
            text="We plan travel the way it should feel — personal, unhurried and considered down to the last transfer. Tell us where you dream of going, and we'll take care of the rest."
          />
          <div className="mt-14 grid gap-8 border-t border-abyss/10 pt-10 md:grid-cols-2">
            <p className="text-lg leading-relaxed text-slate">
              From island honeymoons and alpine rail journeys to heritage circuits across India, every itinerary begins with a conversation about how you like to travel.
            </p>
            <div className="md:justify-self-end">
              <ButtonLink href="/about/" variant="outline">
                Our approach
              </ButtonLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
