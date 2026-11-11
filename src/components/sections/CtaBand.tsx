import SmartImage from "@/components/ui/SmartImage";
import Parallax from "@/components/motion/Parallax";
import SplitReveal from "@/components/motion/SplitReveal";
import { ButtonLink } from "@/components/ui/Button";
import { images } from "@/data/images";

export default function CtaBand({
  title = "Where would you like to wake up next?",
  text = "Share a destination, a date or simply an idea. We'll shape it into a journey that fits you.",
  href = "/contact/",
  cta = "Start planning",
  image = images.about.closing,
}: {
  title?: string;
  text?: string;
  href?: string;
  cta?: string;
  image?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-abyss text-white">
      <Parallax className="absolute inset-0" amount={18}>
        <SmartImage src={image} alt="" sizes="100vw" className="opacity-45" />
      </Parallax>
      <div className="absolute inset-0 bg-gradient-to-r from-abyss via-abyss/80 to-abyss/30" />
      <div className="container-x relative py-28 md:py-40">
        <SplitReveal text={title} className="max-w-3xl text-display-md" />
        <p className="mt-6 max-w-lg text-lg text-white/75">{text}</p>
        <div className="mt-10 flex flex-wrap gap-4">
          <ButtonLink href={href} variant="light">
            {cta}
          </ButtonLink>
          <ButtonLink href="/destinations/" variant="ghost-light" icon={false}>
            Browse destinations
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
