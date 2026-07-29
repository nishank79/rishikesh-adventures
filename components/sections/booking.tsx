"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { services } from "@/data/services";

export function Booking() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Wire this up to your booking API / CRM of choice.
    setSubmitted(true);
  }

  return (
    <section id="booking" className="relative bg-white py-24 md:py-32">
      <div className="container-px mx-auto">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-current-dark">
              Book your adventure
            </span>
            <h2 className="mt-4 text-balance font-display text-4xl font-semibold text-ink sm:text-5xl">
              Confirmed in under 60 seconds
            </h2>
            <p className="mt-4 max-w-md text-ink/60">
              Fill in the form and our team will confirm availability over
              WhatsApp or call within 15 minutes.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="rounded-3xl border border-ink/5 bg-sand p-8 shadow-premium lg:col-span-3 md:p-10"
          >
            {submitted ? (
              <div className="flex flex-col items-center py-16 text-center">
                <CheckCircle2 className="mb-4 h-14 w-14 text-forest" />
                <h3 className="font-display text-2xl font-semibold text-ink">
                  Request received
                </h3>
                <p className="mt-2 max-w-sm text-ink/60">
                  We&apos;ll reach out on WhatsApp shortly to confirm your
                  booking details.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <Field label="Full Name" htmlFor="name">
                  <input id="name" name="name" required className="input" placeholder="Ananya Rao" />
                </Field>
                <Field label="Phone Number" htmlFor="phone">
                  <input id="phone" name="phone" type="tel" required className="input" placeholder="+91 90000 00000" />
                </Field>
                <Field label="Email" htmlFor="email">
                  <input id="email" name="email" type="email" required className="input" placeholder="you@example.com" />
                </Field>
                <Field label="Preferred Date" htmlFor="date">
                  <input id="date" name="date" type="date" required className="input" />
                </Field>
                <Field label="Service" htmlFor="service">
                  <select id="service" name="service" required className="input" defaultValue="">
                    <option value="" disabled>Select a service</option>
                    {services.map((s) => (
                      <option key={s.id} value={s.id}>{s.title}</option>
                    ))}
                  </select>
                </Field>
                <Field label="Number of People" htmlFor="people">
                  <input id="people" name="people" type="number" min={1} defaultValue={2} required className="input" />
                </Field>
                <Field label="Special Request" htmlFor="request" full>
                  <textarea id="request" name="request" rows={3} className="input resize-none" placeholder="Anything we should know?" />
                </Field>

                <div className="sm:col-span-2">
                  <Button type="submit" size="lg" className="w-full sm:w-auto">
                    Book Now
                  </Button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>

      <style>{`
        .input {
          width: 100%;
          border-radius: 0.9rem;
          border: 1px solid rgba(16,35,30,0.1);
          background: white;
          padding: 0.75rem 1rem;
          font-size: 0.9rem;
          color: #10231E;
          transition: border-color 0.2s;
        }
        .input:focus {
          border-color: #E8873B;
          outline: none;
        }
      `}</style>
    </section>
  );
}

function Field({
  label,
  htmlFor,
  children,
  full,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
  full?: boolean;
}) {
  return (
    <div className={full ? "sm:col-span-2" : undefined}>
      <label htmlFor={htmlFor} className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-ink/50">
        {label}
      </label>
      {children}
    </div>
  );
}
