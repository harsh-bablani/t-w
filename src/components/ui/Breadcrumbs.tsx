import Link from "next/link";
import { cn } from "@/lib/utils";

export default function Breadcrumbs({ items, light }: { items: { label: string; href?: string }[]; light?: boolean }) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className={cn("flex flex-wrap items-center gap-2 text-sm", light ? "text-white/70" : "text-slate")}>
        {items.map((it, i) => (
          <li key={it.label} className="flex items-center gap-2">
            {it.href ? (
              <Link href={it.href} className={cn("link-underline", light ? "hover:text-white" : "hover:text-abyss")}>
                {it.label}
              </Link>
            ) : (
              <span aria-current="page" className={light ? "text-white" : "text-abyss"}>
                {it.label}
              </span>
            )}
            {i < items.length - 1 && <span aria-hidden>/</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}
