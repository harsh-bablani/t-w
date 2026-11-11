"use client";
/** Lock/unlock page scrolling (works with or without Lenis). */
export function setScrollLock(locked: boolean) {
  document.documentElement.style.overflow = locked ? "hidden" : "";
  window.dispatchEvent(new CustomEvent("tripex:scroll-lock", { detail: locked }));
}
