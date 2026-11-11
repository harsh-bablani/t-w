import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import FaqBrowser from "@/components/sections/FaqBrowser";
import CtaBand from "@/components/sections/CtaBand";
import { faqs } from "@/data/faqs";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description: "Answers about travel planning, flights, hotels, visas, international and domestic packages, group tours and customised holidays.",
};

export default function FaqPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PageHero crumb="FAQ" title="Answers before you go" intro="Everything travellers commonly ask about planning, bookings, visas and our sample itineraries." />
      <section className="container-x pb-24 md:pb-32">
        <FaqBrowser />
      </section>
      <CtaBand title="Still have a question?" text="Send us a note with the details of your trip and we'll help." cta="Ask a question" />
    </>
  );
}
