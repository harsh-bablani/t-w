import { Instagram, Facebook, Linkedin, Youtube } from "lucide-react";
import { socials } from "@/data/site";
import { cn } from "@/lib/utils";

const icons = { instagram: Instagram, facebook: Facebook, linkedin: Linkedin, youtube: Youtube };

/** Social profiles. Entries without a URL render as non-interactive placeholders. */
export default function SocialLinks({ className, light }: { className?: string; light?: boolean }) {
  return (
    <ul className={cn("flex gap-3", className)} aria-label="Social media">
      {socials.map(({ key, label, href }) => {
        const Icon = icons[key];
        const cls = cn(
          "grid h-11 w-11 place-items-center border transition-colors duration-300",
          light ? "border-white/20 text-white" : "border-abyss/15 text-abyss"
        );
        return (
          <li key={key}>
            {href ? (
              <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className={cn(cls, "hover:border-lagoon hover:bg-lagoon hover:text-white")}>
                <Icon aria-hidden strokeWidth={1.5} className="h-4 w-4" />
              </a>
            ) : (
              <span className={cn(cls, "opacity-50")} title={`${label} — link to be added`} aria-label={`${label} (link to be added)`} role="img">
                <Icon aria-hidden strokeWidth={1.5} className="h-4 w-4" />
              </span>
            )}
          </li>
        );
      })}
    </ul>
  );
}
