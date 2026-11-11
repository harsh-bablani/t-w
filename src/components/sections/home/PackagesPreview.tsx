import Link from "next/link";
import PackageCard from "@/components/cards/PackageCard";
import Reveal from "@/components/motion/Reveal";
import { packages } from "@/data/packages";

export default function PackagesPreview() {
  const list = packages.filter((p) => p.type === "international").slice(0, 3);
  return (
    <section className="section bg-mist" aria-labelledby="intl-title">
      <div className="container-x">
        <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <h2 id="intl-title" className="text-display-md text-abyss">
              International journeys to begin with
            </h2>
            <p className="lead mt-5">
              Sample itineraries that show what a well-paced trip can look like. Every journey is tailored and quoted individually.
            </p>
          </div>
          <Link href="/packages/" className="link-underline text-[15px] font-semibold text-lagoon-deep">
            See all sample itineraries
          </Link>
        </div>
        <Reveal className="grid gap-6 md:grid-cols-2 lg:grid-cols-3" stagger="[data-card]">
          {list.map((p) => (
            <Link key={p.slug} href={`/packages/?open=${p.slug}`} data-card className="block">
              <PackageCard p={p} />
            </Link>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
