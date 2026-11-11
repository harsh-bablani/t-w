"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { destinations } from "@/data/destinations";
import { services } from "@/data/services";
import { packages } from "@/data/packages";
import { cn } from "@/lib/utils";

type Values = {
  name: string;
  email: string;
  phone: string;
  destination: string;
  service: string;
  month: string;
  travellers: string;
  message: string;
};
type Errors = Partial<Record<keyof Values, string>>;

const empty: Values = { name: "", email: "", phone: "", destination: "", service: "", month: "", travellers: "2", message: "" };

/**
 * FRONTEND-ONLY DEMONSTRATION FORM.
 * It validates input in the browser and shows a confirmation, but does not
 * send or store anything. Connect a form service here when ready.
 */
export default function EnquiryForm() {
  const [v, setV] = useState<Values>(empty);
  const [errors, setErrors] = useState<Errors>({});
  const [done, setDone] = useState(false);

  // Prefill from links such as /contact/?destination=bali or ?service=visa-assistance or ?package=...
  useEffect(() => {
    const q = new URLSearchParams(window.location.search);
    const pkg = packages.find((p) => p.slug === q.get("package"));
    const dest = q.get("destination") ?? pkg?.destination ?? "";
    const svc = q.get("service") ?? "";
    setV((prev) => ({
      ...prev,
      destination: destinations.some((d) => d.slug === dest) ? dest : "",
      service: services.some((s) => s.slug === svc) ? svc : "",
      message: pkg ? `I'm interested in a journey like the "${pkg.title}" sample itinerary.` : prev.message,
    }));
  }, []);

  const set = (k: keyof Values) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setV((p) => ({ ...p, [k]: e.target.value }));
    if (errors[k]) setErrors((p) => ({ ...p, [k]: undefined }));
  };

  const validate = () => {
    const e: Errors = {};
    if (!v.name.trim()) e.name = "Enter your name.";
    if (!v.email.trim()) e.email = "Enter your email address.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email)) e.email = "Enter an email address in the format name@example.com.";
    if (v.phone && !/^[+\d][\d\s()-]{6,}$/.test(v.phone)) e.phone = "Enter a phone number using digits, spaces or +.";
    if (!v.message.trim()) e.message = "Tell us a little about your trip.";
    return e;
  };

  const onSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    const first = Object.keys(e)[0];
    if (first) {
      document.getElementById(`f-${first}`)?.focus();
      return;
    }
    setDone(true);
  };

  return (
    <div className="relative">
      <AnimatePresence mode="wait" initial={false}>
        {done ? (
          <motion.div
            key="done"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="bg-mist p-8 md:p-12"
            role="status"
          >
            <span className="grid h-14 w-14 place-items-center bg-lagoon text-white">
              <Check aria-hidden className="h-6 w-6" />
            </span>
            <h3 className="mt-8 text-display-sm text-abyss">Your enquiry is ready, {v.name.split(" ")[0]}.</h3>
            <p className="mt-4 max-w-lg leading-relaxed text-slate">
              This website form is a demonstration and has not sent your details anywhere. Once official contact details are published on this page, please use them to reach the Tripex World team.
            </p>
            <button type="button" onClick={() => { setV(empty); setDone(false); }} className="link-underline mt-8 font-semibold text-lagoon-deep">
              Start a new enquiry
            </button>
          </motion.div>
        ) : (
          <motion.form key="form" onSubmit={onSubmit} noValidate exit={{ opacity: 0 }} className="grid gap-x-6 gap-y-7 sm:grid-cols-2">
            <Field id="name" label="Full name" required error={errors.name}>
              <input id="f-name" autoComplete="name" value={v.name} onChange={set("name")} className={input(errors.name)} aria-invalid={!!errors.name} aria-describedby={errors.name ? "e-name" : undefined} />
            </Field>
            <Field id="email" label="Email" required error={errors.email}>
              <input id="f-email" type="email" autoComplete="email" value={v.email} onChange={set("email")} className={input(errors.email)} aria-invalid={!!errors.email} aria-describedby={errors.email ? "e-email" : undefined} />
            </Field>
            <Field id="phone" label="Phone (optional)" error={errors.phone}>
              <input id="f-phone" type="tel" autoComplete="tel" value={v.phone} onChange={set("phone")} className={input(errors.phone)} aria-invalid={!!errors.phone} aria-describedby={errors.phone ? "e-phone" : undefined} />
            </Field>
            <Field id="travellers" label="Number of travellers">
              <input id="f-travellers" type="number" min={1} max={200} value={v.travellers} onChange={set("travellers")} className={input()} />
            </Field>
            <Field id="destination" label="Destination">
              <select id="f-destination" value={v.destination} onChange={set("destination")} className={input()}>
                <option value="">Not sure yet</option>
                {destinations.map((d) => (
                  <option key={d.slug} value={d.slug}>{d.name}</option>
                ))}
              </select>
            </Field>
            <Field id="service" label="Service">
              <select id="f-service" value={v.service} onChange={set("service")} className={input()}>
                <option value="">A complete holiday</option>
                {services.map((s) => (
                  <option key={s.slug} value={s.slug}>{s.title}</option>
                ))}
              </select>
            </Field>
            <Field id="month" label="When would you like to travel?" className="sm:col-span-2">
              <input id="f-month" type="month" value={v.month} onChange={set("month")} className={input()} />
            </Field>
            <Field id="message" label="Tell us about your trip" required error={errors.message} className="sm:col-span-2">
              <textarea id="f-message" rows={5} value={v.message} onChange={set("message")} className={cn(input(errors.message), "resize-y")} aria-invalid={!!errors.message} aria-describedby={errors.message ? "e-message" : undefined} placeholder="Who's travelling, what you enjoy, any must-dos…" />
            </Field>
            <div className="flex flex-col gap-4 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
              <p className="max-w-sm text-sm text-slate">Demonstration form: details stay in your browser and are not sent.</p>
              <Button type="submit">Prepare enquiry</Button>
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}

function input(error?: string) {
  return cn(
    "w-full border-b bg-transparent py-3 text-[17px] text-abyss outline-none transition-colors placeholder:text-slate/50 focus:border-lagoon",
    error ? "border-red-600" : "border-abyss/25"
  );
}

function Field({ id, label, required, error, className, children }: { id: string; label: string; required?: boolean; error?: string; className?: string; children: React.ReactNode }) {
  return (
    <div className={className}>
      <label htmlFor={`f-${id}`} className="block text-sm font-semibold text-abyss">
        {label}
        {required && <span className="text-lagoon-deep"> *</span>}
      </label>
      {children}
      {error && (
        <p id={`e-${id}`} className="mt-2 text-sm text-red-700">
          {error}
        </p>
      )}
    </div>
  );
}
