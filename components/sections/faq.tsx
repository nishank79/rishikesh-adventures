"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { faqs } from "@/data/faq";
import { cn } from "@/lib/utils";

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative bg-sand py-24 md:py-32">
      <div className="container-px mx-auto max-w-3xl">
        <div className="mb-12 text-center">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-current-dark">
            FAQ
          </span>
          <h2 className="mt-4 text-balance font-display text-4xl font-semibold text-ink sm:text-5xl">
            Questions, answered
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <div
                key={item.question}
                className="overflow-hidden rounded-2xl border border-ink/5 bg-white"
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-base font-medium text-ink sm:text-lg">
                    {item.question}
                  </span>
                  <Plus
                    className={cn(
                      "h-5 w-5 shrink-0 text-current transition-transform duration-300",
                      isOpen && "rotate-45"
                    )}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6"
                    >
                      <p className="pb-5 text-sm leading-relaxed text-ink/60">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
