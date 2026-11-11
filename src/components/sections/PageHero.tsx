import SmartImage from "@/components/ui/SmartImage";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import SplitReveal from "@/components/motion/SplitReveal";
import Parallax from "@/components/motion/Parallax";

type Props = {
  title: string;
  intro: string;
  crumb: string;
  image?: { src: string; alt: string };
};

/**
 * Inner-page hero. With an image: a full-bleed cinematic frame.
 * Without: a typographic opener on the light background.
 */
export default function PageHero({ title, intro, crumb, image }: Props) {
  if (!image) {
    return (
      <section className="container-x pb-16 pt-[calc(var(--header-h)+5rem)] md:pb-24 md:pt-[calc(var(--header-h)+8rem)]">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: crumb }]} />
        <SplitReveal as="h1" trigger="load" text={title} className="mt-8 max-w-5xl text-display-lg text-abyss" />
        <p className="lead mt-8 max-w-2xl">{intro}</p>
      </section>
    );
  }
  return (
    <section className="relative flex min-h-[78svh] items-end overflow-hidden bg-abyss text-white">
      <Parallax className="absolute inset-0" amount={16}>
        <SmartImage src={image.src} alt={image.alt} sizes="100vw" priority className="opacity-90" />
      </Parallax>
      <div className="absolute inset-0 bg-gradient-to-t from-abyss via-abyss/40 to-abyss/10" />
      <div className="container-x relative pb-14 pt-40 md:pb-20">
        <Breadcrumbs light items={[{ label: "Home", href: "/" }, { label: crumb }]} />
        <SplitReveal as="h1" trigger="load" text={title} className="mt-6 max-w-5xl text-display-lg" />
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/80">{intro}</p>
      </div>
    </section>
  );
}
