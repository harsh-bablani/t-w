"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, X, ArrowUpRight } from "lucide-react";
import Logo from "./Logo";
import SmartImage from "@/components/ui/SmartImage";
import ServiceIcon from "@/components/ui/ServiceIcon";
import { mainNav } from "@/data/site";
import { international, domestic, destinations } from "@/data/destinations";
import { services } from "@/data/services";
import { setScrollLock } from "@/lib/scroll-lock";
import { cn } from "@/lib/utils";

type MenuKey = "destinations" | "services" | null;

export default function Header() {
  const pathname = usePathname();
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [menu, setMenu] = useState<MenuKey>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const lastY = useRef(0);
  const closeTimer = useRef<number>();

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 24);
      setHidden(y > 240 && y > lastY.current && !menu);
      lastY.current = y;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [menu]);

  useEffect(() => {
    setMenu(null);
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    setScrollLock(mobileOpen);
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMenu(null);
        setMobileOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [mobileOpen]);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href.replace(/\/$/, "")));
  const openMenu = (k: MenuKey) => {
    window.clearTimeout(closeTimer.current);
    setMenu(k);
  };
  const scheduleClose = () => {
    closeTimer.current = window.setTimeout(() => setMenu(null), 160);
  };

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-transform duration-500 ease-expo",
          hidden && !mobileOpen ? "-translate-y-full" : "translate-y-0"
        )}
        onMouseLeave={scheduleClose}
      >
        <div
          className={cn(
            "border-b transition-[background-color,border-color,box-shadow] duration-500",
            scrolled || menu ? "border-abyss/10 bg-white/95 backdrop-blur-md" : "border-transparent bg-white/85 backdrop-blur-sm"
          )}
        >
          <div className="container-x flex h-[var(--header-h)] items-center justify-between gap-6">
            <Logo className="w-[150px] sm:w-[176px]" />

            <nav aria-label="Main" className="hidden lg:block">
              <ul className="flex items-center gap-1">
                {mainNav.map((item) => (
                  <li key={item.href} className="relative" onMouseEnter={() => openMenu(item.menu ?? null)}>
                    <div className="flex items-center">
                      <Link
                        href={item.href}
                        className={cn(
                          "relative px-3 py-2 text-[15px] font-medium transition-colors",
                          isActive(item.href) ? "text-abyss" : "text-slate hover:text-abyss"
                        )}
                      >
                        {item.label}
                        {isActive(item.href) && (
                          <motion.span layoutId="nav-active" className="absolute inset-x-3 -bottom-0.5 h-[2px] bg-lagoon" />
                        )}
                      </Link>
                      {item.menu && (
                        <button
                          type="button"
                          aria-expanded={menu === item.menu}
                          aria-controls={`menu-${item.menu}`}
                          aria-label={`Show ${item.label.toLowerCase()} menu`}
                          onClick={() => setMenu(menu === item.menu ? null : item.menu!)}
                          className="-ml-2 p-1 text-slate hover:text-abyss"
                        >
                          <ChevronDown aria-hidden className={cn("h-4 w-4 transition-transform duration-300", menu === item.menu && "rotate-180")} />
                        </button>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="flex items-center gap-3">
              <Link
                href="/contact/"
                className="group relative hidden overflow-hidden bg-abyss px-5 py-2.5 text-sm font-semibold text-white sm:inline-flex"
              >
                <span aria-hidden className="absolute inset-0 origin-bottom scale-y-0 bg-lagoon-deep transition-transform duration-500 ease-expo group-hover:scale-y-100" />
                <span className="relative">Plan a trip</span>
              </Link>
              <button
                type="button"
                className="grid h-11 w-11 place-items-center border border-abyss/15 lg:hidden"
                aria-label={mobileOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileOpen}
                aria-controls="mobile-menu"
                onClick={() => setMobileOpen((v) => !v)}
              >
                {mobileOpen ? <X aria-hidden className="h-5 w-5" /> : <Menu aria-hidden className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>

        <AnimatePresence>
          {menu && (
            <motion.div
              id={`menu-${menu}`}
              key={menu}
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-x-0 hidden border-b border-abyss/10 bg-white shadow-[0_30px_60px_-30px_rgba(10,35,56,0.35)] lg:block"
              onMouseEnter={() => openMenu(menu)}
            >
              <div className="container-x py-10">{menu === "destinations" ? <DestinationsMenu /> : <ServicesMenu />}</div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <AnimatePresence>{mobileOpen && <MobileMenu isActive={isActive} onClose={() => setMobileOpen(false)} />}</AnimatePresence>
    </>
  );
}

function DestinationsMenu() {
  const feature = destinations.find((d) => d.slug === "maldives")!;
  return (
    <div className="grid grid-cols-12 gap-10">
      {[
        { title: "International", list: international },
        { title: "Across India", list: domestic },
      ].map((col, ci) => (
        <div key={col.title} className={ci === 0 ? "col-span-5" : "col-span-3"}>
          <p className="kicker mb-4">{col.title}</p>
          <ul className={cn("grid gap-x-8 gap-y-1", ci === 0 && "grid-cols-2")}>
            {col.list.map((d) => (
              <li key={d.slug}>
                <Link href={`/destinations/${d.slug}/`} className="group flex items-baseline justify-between py-1.5 font-display text-2xl text-abyss">
                  <span className="link-underline">{d.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
      <Link href={`/destinations/${feature.slug}/`} className="group relative col-span-4 block aspect-[4/3] overflow-hidden">
        <SmartImage src={feature.image} alt={feature.imageAlt} sizes="30vw" className="transition-transform duration-[1.2s] ease-expo group-hover:scale-105" label={feature.name} />
        <div className="absolute inset-0 bg-gradient-to-t from-abyss/80 via-abyss/10 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 p-6 text-white">
          <p className="text-sm text-white/75">In season November to April</p>
          <p className="flex items-center gap-2 font-display text-3xl">
            {feature.name} <ArrowUpRight aria-hidden className="h-5 w-5" />
          </p>
        </div>
      </Link>
    </div>
  );
}

function ServicesMenu() {
  return (
    <div className="grid grid-cols-12 gap-10">
      <div className="col-span-4">
        <p className="font-display text-display-sm text-abyss">Everything a journey needs, arranged in one place.</p>
        <Link href="/services/" className="link-underline mt-6 inline-block text-sm font-semibold text-lagoon-deep">
          View all services
        </Link>
      </div>
      <ul className="col-span-8 grid grid-cols-3 gap-x-6 gap-y-2">
        {services.map((s) => (
          <li key={s.slug}>
            <Link href={`/services/${s.slug}/`} className="group flex items-center gap-3 p-3 transition-colors hover:bg-mist">
              <span className="grid h-10 w-10 shrink-0 place-items-center bg-mist text-atlas transition-colors group-hover:bg-lagoon group-hover:text-white">
                <ServiceIcon name={s.icon} className="h-[18px] w-[18px]" />
              </span>
              <span className="text-[15px] font-semibold text-abyss">{s.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function MobileMenu({ onClose, isActive }: { onClose: () => void; isActive: (h: string) => boolean }) {
  const [sub, setSub] = useState<MenuKey>(null);
  return (
    <motion.div
      id="mobile-menu"
      className="fixed inset-0 z-40 overflow-y-auto bg-abyss pt-[var(--header-h)] text-white lg:hidden"
      initial={{ clipPath: "inset(0 0 100% 0)" }}
      animate={{ clipPath: "inset(0 0 0% 0)" }}
      exit={{ clipPath: "inset(0 0 100% 0)" }}
      transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
    >
      <nav aria-label="Mobile" className="container-x py-10">
        <motion.ul
          initial="hidden"
          animate="show"
          variants={{ show: { transition: { staggerChildren: 0.06, delayChildren: 0.25 } } }}
        >
          {[...mainNav, { label: "FAQ", href: "/faq/" }].map((item) => {
            const m = "menu" in item ? item.menu : undefined;
            return (
              <motion.li
                key={item.href}
                variants={{ hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } } }}
                className="border-b border-white/10"
              >
                <div className="flex items-center justify-between">
                  <Link href={item.href} onClick={onClose} className={cn("block py-4 font-display text-4xl", isActive(item.href) ? "text-lagoon-soft" : "text-white")}>
                    {item.label}
                  </Link>
                  {m && (
                    <button
                      type="button"
                      onClick={() => setSub(sub === m ? null : m)}
                      aria-expanded={sub === m}
                      aria-label={`Show ${item.label.toLowerCase()}`}
                      className="grid h-11 w-11 place-items-center border border-white/20"
                    >
                      <ChevronDown aria-hidden className={cn("h-4 w-4 transition-transform", sub === m && "rotate-180")} />
                    </button>
                  )}
                </div>
                <AnimatePresence initial={false}>
                  {m && sub === m && (
                    <motion.ul
                      initial={{ height: 0 }}
                      animate={{ height: "auto" }}
                      exit={{ height: 0 }}
                      className="grid grid-cols-2 gap-x-4 overflow-hidden"
                    >
                      {(m === "destinations" ? destinations.map((d) => ({ label: d.name, href: `/destinations/${d.slug}/` })) : services.map((s) => ({ label: s.title, href: `/services/${s.slug}/` }))).map((l) => (
                        <li key={l.href}>
                          <Link href={l.href} onClick={onClose} className="block py-2 text-[15px] text-white/75 hover:text-white">
                            {l.label}
                          </Link>
                        </li>
                      ))}
                      <li className="col-span-2 h-4" />
                    </motion.ul>
                  )}
                </AnimatePresence>
              </motion.li>
            );
          })}
        </motion.ul>
        <Link href="/contact/" onClick={onClose} className="mt-10 inline-flex items-center gap-2 bg-lagoon px-6 py-4 font-semibold text-white">
          Plan a trip <ArrowUpRight aria-hidden className="h-4 w-4" />
        </Link>
      </nav>
    </motion.div>
  );
}
