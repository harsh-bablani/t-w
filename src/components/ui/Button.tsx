import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

type Variant = "solid" | "outline" | "light" | "ghost-light";

const styles: Record<Variant, string> = {
  solid: "bg-abyss text-white",
  outline: "border border-abyss/25 text-abyss",
  light: "bg-white text-abyss",
  "ghost-light": "border border-white/40 text-white",
};
const sweep: Record<Variant, string> = {
  solid: "bg-lagoon-deep",
  outline: "bg-abyss",
  light: "bg-lagoon-soft",
  "ghost-light": "bg-white",
};
const hoverText: Record<Variant, string> = {
  solid: "",
  outline: "group-hover:text-white",
  light: "",
  "ghost-light": "group-hover:text-abyss",
};

type Common = { children: React.ReactNode; variant?: Variant; className?: string; icon?: boolean };

function Inner({ children, variant = "solid", icon = true }: Common) {
  return (
    <>
      <span
        aria-hidden
        className={cn(
          "absolute inset-0 origin-bottom scale-y-0 transition-transform duration-500 ease-expo group-hover:scale-y-100 group-focus-visible:scale-y-100",
          sweep[variant]
        )}
      />
      <span className={cn("relative z-10 transition-colors duration-300", hoverText[variant])}>{children}</span>
      {icon && (
        <span className={cn("relative z-10 overflow-hidden transition-colors duration-300", hoverText[variant])}>
          <ArrowUpRight
            aria-hidden
            className="h-4 w-4 transition-transform duration-500 ease-expo group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
        </span>
      )}
    </>
  );
}

const base =
  "group relative inline-flex items-center justify-center gap-2.5 overflow-hidden px-6 py-3.5 text-[15px] font-semibold tracking-[0.01em] transition-transform duration-300 active:scale-[0.98]";

export function ButtonLink({ href, ...rest }: Common & { href: string }) {
  return (
    <Link href={href} className={cn(base, styles[rest.variant ?? "solid"], rest.className)}>
      <Inner {...rest} />
    </Link>
  );
}

export function Button({
  type = "button",
  onClick,
  disabled,
  ...rest
}: Common & { type?: "button" | "submit"; onClick?: () => void; disabled?: boolean }) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={cn(base, styles[rest.variant ?? "solid"], "disabled:opacity-60", rest.className)}
    >
      <Inner {...rest} />
    </button>
  );
}
