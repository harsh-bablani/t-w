import Link from "next/link";
import Logo from "./Logo";
import ContactDetails from "./ContactDetails";
import SocialLinks from "./SocialLinks";
import { services } from "@/data/services";
import { destinations } from "@/data/destinations";
import { site } from "@/data/site";

const explore = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about/" },
  { label: "Destinations", href: "/destinations/" },
  { label: "Services", href: "/services/" },
  { label: "Tour Packages", href: "/packages/" },
  { label: "FAQ", href: "/faq/" },
  { label: "Contact Us", href: "/contact/" },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-white">
      <div className="container-x pt-20 md:pt-28">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Logo className="w-[210px]" />
            <p className="mt-8 max-w-sm leading-relaxed text-slate">
              International and domestic journeys planned around you — flights, stays, visas, cruises and tours, brought together with care.
            </p>
            <SocialLinks className="mt-8" />
          </div>

          <FooterCol title="Explore" links={explore} className="lg:col-span-2" />
          <FooterCol title="Services" links={services.map((s) => ({ label: s.title, href: `/services/${s.slug}/` }))} className="lg:col-span-2" />
          <FooterCol
            title="Destinations"
            links={destinations.slice(0, 9).map((d) => ({ label: d.name, href: `/destinations/${d.slug}/` }))}
            className="lg:col-span-2"
          />
          <div className="lg:col-span-2">
            <h2 className="mb-5 font-sans text-sm font-semibold text-abyss">Contact</h2>
            <ContactDetails />
          </div>
        </div>

        <p
          aria-hidden
          className="mt-24 select-none overflow-hidden whitespace-nowrap font-display text-[clamp(2.5rem,8vw,8.5rem)] leading-[0.85] text-mist"
        >
          {site.tagline}
        </p>

        <div className="flex flex-col gap-3 border-t border-abyss/10 py-8 text-sm text-slate sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} Tripex World. All rights reserved.</p>
          <p>Imagery is illustrative. Sample itineraries are for inspiration only.</p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links, className }: { title: string; links: { label: string; href: string }[]; className?: string }) {
  return (
    <div className={className}>
      <h2 className="mb-5 font-sans text-sm font-semibold text-abyss">{title}</h2>
      <ul className="space-y-2.5">
        {links.map((l) => (
          <li key={l.href}>
            <Link href={l.href} className="link-underline text-[15px] text-slate hover:text-abyss">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
