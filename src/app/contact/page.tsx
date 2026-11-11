import type { Metadata } from "next";
import { MapPin } from "lucide-react";
import PageHero from "@/components/sections/PageHero";
import EnquiryForm from "@/components/sections/EnquiryForm";
import ContactDetails from "@/components/layout/ContactDetails";
import SocialLinks from "@/components/layout/SocialLinks";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Start planning your next journey with Tripex World.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        crumb="Contact Us"
        title="Let's start with a conversation"
        intro="Tell us where you'd like to go — or simply what you'd like to feel — and we'll help shape the journey."
      />

      <section className="container-x pb-24 md:pb-32">
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h2 className="mb-10 text-display-sm text-abyss">Send an enquiry</h2>
            <EnquiryForm />
          </div>

          <aside className="space-y-12 lg:col-span-4 lg:col-start-9">
            <div>
              <h2 className="font-sans text-lg font-semibold text-abyss">Contact information</h2>
              <ContactDetails className="mt-6" only={["phone", "email", "address"]} />
            </div>
            <div className="border-t border-abyss/10 pt-10">
              <h2 className="font-sans text-lg font-semibold text-abyss">Business hours</h2>
              <ContactDetails className="mt-6" only={["businessHours"]} />
            </div>
            <div className="border-t border-abyss/10 pt-10">
              <h2 className="font-sans text-lg font-semibold text-abyss">Social media</h2>
              <SocialLinks className="mt-6" />
            </div>
          </aside>
        </div>
      </section>

      {/* Location placeholder — replace with an embedded map once the address is confirmed. */}
      <section aria-label="Location" className="mosaic relative">
        <div className="flex min-h-[420px] items-center justify-center bg-abyss/70 px-5 text-center text-white">
          <div>
            <span className="mx-auto grid h-14 w-14 place-items-center border border-white/30">
              <MapPin aria-hidden className="h-6 w-6" strokeWidth={1.5} />
            </span>
            <p className="mt-6 font-display text-3xl">Location map</p>
            <p className="mt-2 text-white/70">The map will appear here once the office address is added.</p>
          </div>
        </div>
      </section>
    </>
  );
}
