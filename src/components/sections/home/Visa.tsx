import Reveal from "@/components/motion/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { services } from "@/data/services";

export default function Visa() {
  const visa = services.find((s) => s.slug === "visa-assistance")!;
  return (
    <section className="section container-x" aria-labelledby="visa-title">
      <div className="grid gap-14 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <h2 id="visa-title" className="text-display-md text-abyss">
            Visa paperwork, made clear
          </h2>
          <p className="lead mt-6">{visa.intro}</p>
          <p className="mt-6 border-l-2 border-lagoon pl-4 text-sm leading-relaxed text-slate">
            Visa decisions are made solely by the relevant embassy, consulate or immigration authority.
          </p>
          <ButtonLink href="/services/visa-assistance/" variant="outline" className="mt-10">
            About visa assistance
          </ButtonLink>
        </div>
        <Reveal as="ol" stagger="li" className="lg:col-span-6 lg:col-start-7">
          {visa.process.map((step, i) => (
            <li key={step.title} className="grid grid-cols-[4rem_1fr] gap-4 border-t border-abyss/10 py-8 last:border-b">
              <span className="font-display text-5xl leading-none text-lagoon">{i + 1}</span>
              <div>
                <h3 className="font-sans text-xl font-semibold text-abyss">{step.title}</h3>
                <p className="mt-2 leading-relaxed text-slate">{step.description}</p>
              </div>
            </li>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
