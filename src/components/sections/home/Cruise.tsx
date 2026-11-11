import SmartImage from "@/components/ui/SmartImage";
import Parallax from "@/components/motion/Parallax";
import SplitReveal from "@/components/motion/SplitReveal";
import { ButtonLink } from "@/components/ui/Button";
import { images } from "@/data/images";

export default function Cruise() {
  return (
    <section className="relative flex min-h-[90svh] items-center overflow-hidden bg-atlas-deep text-white" aria-labelledby="cruise-title">
      <Parallax className="absolute inset-0" amount={22}>
        <SmartImage src={images.services.cruise} alt="Cruise ship sailing across open water" sizes="100vw" label="Cruises" />
      </Parallax>
      <div className="absolute inset-0 bg-gradient-to-r from-abyss/85 via-abyss/45 to-transparent" />
      <div className="container-x relative py-28">
        <p className="mb-5 text-lg text-white/80">Cruise experiences</p>
        <div id="cruise-title">
          <SplitReveal as="h2" text="Wake up somewhere new without unpacking." className="max-w-3xl text-display-lg" />
        </div>
        <p className="mt-6 max-w-md text-lg leading-relaxed text-white/80">
          Ocean voyages across Asia, the Middle East and Europe — with help choosing the right ship, route and cabin.
        </p>
        <ButtonLink href="/services/cruise-bookings/" variant="light" className="mt-10">
          Explore cruises
        </ButtonLink>
      </div>
    </section>
  );
}
