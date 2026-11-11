import Accordion from "@/components/ui/Accordion";
import { ButtonLink } from "@/components/ui/Button";
import { faqs } from "@/data/faqs";

export default function FaqPreview() {
  const items = faqs.filter((f) => f.featured).slice(0, 5);
  return (
    <section className="section bg-mist" aria-labelledby="faq-title">
      <div className="container-x grid gap-14 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <h2 id="faq-title" className="text-display-md text-abyss">
            Questions, answered
          </h2>
          <p className="lead mt-6">Planning, bookings, visas and sample itineraries — the things travellers ask most.</p>
          <ButtonLink href="/faq/" variant="outline" className="mt-10">
            All questions
          </ButtonLink>
        </div>
        <div className="lg:col-span-7 lg:col-start-6">
          <Accordion items={items} />
        </div>
      </div>
    </section>
  );
}
