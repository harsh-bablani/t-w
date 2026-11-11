"use client";
import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";

type Props = {
  src: string;
  alt: string;
  sizes: string;
  className?: string;
  priority?: boolean;
  /** Shown on the branded panel if the photo cannot load. */
  label?: string;
};

/**
 * Fill-mode image with a graceful fallback. Parent must be `relative` with a size.
 * If the remote photo fails, a mosaic panel in brand colours takes its place.
 */
export default function SmartImage({ src, alt, sizes, className, priority, label }: Props) {
  const [failed, setFailed] = useState(false);
  if (failed) {
    return (
      <div role="img" aria-label={alt} className={cn("mosaic absolute inset-0 flex items-end p-5", className)}>
        {label && <span className="font-display text-2xl text-white/90">{label}</span>}
      </div>
    );
  }
  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes={sizes}
      priority={priority}
      className={cn("object-cover", className)}
      onError={() => setFailed(true)}
    />
  );
}
