import Link from "next/link";
import { cn } from "@/lib/utils";

/** The official logo, unmodified (background removed only). */
export default function Logo({ className, onClick }: { className?: string; onClick?: () => void }) {
  return (
    <Link href="/" aria-label="Tripex World — home" className={cn("block shrink-0", className)} onClick={onClick}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/brand/tripex-logo.png" alt="Tripex World — Your passport to the world" width={1036} height={245} className="h-auto w-full" />
    </Link>
  );
}
