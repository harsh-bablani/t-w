"use client";
import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import Accordion from "@/components/ui/Accordion";
import { faqs, faqCategoryLabels, type FaqCategory } from "@/data/faqs";
import { cn } from "@/lib/utils";

export default function FaqBrowser() {
  const [cat, setCat] = useState<FaqCategory | "all">("all");
  const [q, setQ] = useState("");

  const groups = useMemo(() => {
    const term = q.trim().toLowerCase();
    const cats = (Object.keys(faqCategoryLabels) as FaqCategory[]).filter((c) => cat === "all" || c === cat);
    return cats
      .map((c) => ({
        c,
        items: faqs.filter((f) => f.category === c && (!term || f.q.toLowerCase().includes(term) || f.a.toLowerCase().includes(term))),
      }))
      .filter((g) => g.items.length);
  }, [cat, q]);

  return (
    <div className="grid gap-14 lg:grid-cols-12">
      <aside className="lg:col-span-3">
        <div className="lg:sticky lg:top-28">
          <label htmlFor="faq-search" className="sr-only">Search questions</label>
          <div className="flex items-center gap-3 border-b border-abyss/25 pb-3 focus-within:border-lagoon">
            <Search aria-hidden className="h-4 w-4 text-slate" />
            <input id="faq-search" type="search" value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search questions" className="w-full bg-transparent text-[15px] outline-none" />
          </div>
          <div role="group" aria-label="Topics" className="no-scrollbar -mx-5 mt-6 flex gap-2 overflow-x-auto px-5 lg:mx-0 lg:flex-col lg:gap-0 lg:px-0">
            {(["all", ...Object.keys(faqCategoryLabels)] as (FaqCategory | "all")[]).map((c) => (
              <button
                key={c}
                type="button"
                aria-pressed={cat === c}
                onClick={() => setCat(c)}
                className={cn(
                  "shrink-0 border px-4 py-2 text-left text-sm font-medium transition-colors lg:border-0 lg:border-l-2 lg:py-2.5",
                  cat === c ? "border-lagoon bg-lagoon text-white lg:bg-transparent lg:text-abyss" : "border-abyss/15 text-slate hover:text-abyss lg:border-transparent"
                )}
              >
                {c === "all" ? "All topics" : faqCategoryLabels[c]}
              </button>
            ))}
          </div>
        </div>
      </aside>
      <div className="space-y-16 lg:col-span-8 lg:col-start-5">
        {groups.length === 0 && (
          <div className="border border-dashed border-abyss/20 p-10">
            <p className="text-lg text-abyss">No questions match &ldquo;{q}&rdquo;.</p>
            <button type="button" onClick={() => { setQ(""); setCat("all"); }} className="link-underline mt-3 font-semibold text-lagoon-deep">
              Clear search
            </button>
          </div>
        )}
        {groups.map((g) => (
          <section key={g.c} aria-labelledby={`faq-${g.c}`}>
            <h2 id={`faq-${g.c}`} className="mb-4 text-display-sm text-abyss">{faqCategoryLabels[g.c]}</h2>
            <Accordion key={`${g.c}-${q}`} items={g.items} />
          </section>
        ))}
      </div>
    </div>
  );
}
