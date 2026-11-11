import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { contact } from "@/data/site";
import { cn } from "@/lib/utils";

const rows = [
  { key: "phone", label: "Phone", icon: Phone },
  { key: "email", label: "Email", icon: Mail },
  { key: "address", label: "Address", icon: MapPin },
  { key: "businessHours", label: "Business Hours", icon: Clock },
] as const;

/** Renders contact info from data/site.ts. Empty values show a blank line, never invented details. */
export default function ContactDetails({ className, light, only }: { className?: string; light?: boolean; only?: Array<(typeof rows)[number]["key"]> }) {
  return (
    <dl className={cn("space-y-4", className)}>
      {rows
        .filter((r) => !only || only.includes(r.key))
        .map(({ key, label, icon: Icon }) => {
          const value = contact[key];
          return (
            <div key={key} className="flex gap-4">
              <Icon aria-hidden strokeWidth={1.5} className={cn("mt-1 h-4 w-4 shrink-0", light ? "text-lagoon-soft" : "text-lagoon-deep")} />
              <div>
                <dt className={cn("text-sm font-semibold", light ? "text-white" : "text-abyss")}>{label}:</dt>
                <dd className={cn("text-sm", light ? "text-white/70" : "text-slate")}>
                  {value ? value : <span className="blank-field" aria-label={`${label} not yet provided`} />}
                </dd>
              </div>
            </div>
          );
        })}
    </dl>
  );
}
