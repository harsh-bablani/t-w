import { ButtonLink } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="container-x flex min-h-[80svh] flex-col justify-center pt-[var(--header-h)]">
      <p className="kicker">Page not found</p>
      <h1 className="mt-6 max-w-3xl text-display-lg text-abyss">This page seems to have wandered off the map.</h1>
      <p className="lead mt-6 max-w-lg">The link may be out of date. Try one of these instead.</p>
      <div className="mt-10 flex flex-wrap gap-3">
        <ButtonLink href="/">Back to home</ButtonLink>
        <ButtonLink href="/destinations/" variant="outline" icon={false}>Browse destinations</ButtonLink>
      </div>
    </section>
  );
}
