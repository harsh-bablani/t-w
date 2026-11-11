import Reveal from "@/components/motion/Reveal";

const reasons = [
  { title: "Planned around you", text: "Itineraries start from your interests, pace and budget — not from a brochure." },
  { title: "Everything in one place", text: "Flights, hotels, visas, transfers and experiences coordinated together, so nothing falls between the gaps." },
  { title: "Honest recommendations", text: "Clear advice on seasons, routes and stays, including when something is not the right fit." },
  { title: "International and domestic", text: "From Southeast Asia, the Gulf and Europe to the backwaters, deserts and mountains of India." },
  { title: "Every kind of traveller", text: "Solo explorers, couples, families, friends and organisations — each planned for differently." },
  { title: "Clarity before you go", text: "A clear plan for your journey, with the details you need before departure." },
];

export default function WhyChoose() {
  return (
    <section className="section bg-mist" aria-labelledby="why-title">
      <div className="container-x grid gap-14 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <h2 id="why-title" className="text-display-md text-abyss lg:sticky lg:top-32">
            Why travellers choose Tripex World
          </h2>
        </div>
        <Reveal className="grid gap-x-10 sm:grid-cols-2 lg:col-span-7 lg:col-start-6" stagger="[data-reason]">
          {reasons.map((r) => (
            <div key={r.title} data-reason className="border-t border-abyss/15 py-8">
              <span aria-hidden className="mb-5 block h-2.5 w-2.5 rotate-45 bg-lagoon" />
              <h3 className="font-sans text-xl font-semibold text-abyss">{r.title}</h3>
              <p className="mt-3 leading-relaxed text-slate">{r.text}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
