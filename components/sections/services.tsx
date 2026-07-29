"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/data/services";
import { Button } from "@/components/ui/button";

export function Services() {
  return (
    <section id="services" className="relative bg-sand py-24 md:py-32">
      <div className="container-px mx-auto">
        <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-current-dark">
              Our services
            </span>
            <h2 className="mt-4 text-balance font-display text-4xl font-semibold text-ink sm:text-5xl">
              Five ways to meet the river
            </h2>
          </div>
          <p className="max-w-sm text-sm text-ink/60">
            Every service is bookable in one form below — pick one, or stack a
            few into a custom day.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-card transition-all duration-500 hover:shadow-premium"
            >
              <div className="relative h-56 w-full overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {service.badge && (
                  <span className="absolute left-4 top-4 rounded-full bg-current px-3 py-1 text-xs font-semibold text-white">
                    {service.badge}
                  </span>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </div>

              <div className="p-6">
                <h3 className="font-display text-xl font-semibold text-ink">
                  {service.title}
                </h3>
                <p className="mt-1 text-sm font-medium text-current-dark">
                  {service.tagline}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-ink/60">
                  {service.description}
                </p>

                <div className="mt-6 flex items-center justify-between">
                  <p className="font-mono text-lg font-semibold text-ink">
                    {service.price}
                    <span className="text-sm font-normal text-ink/50">
                      {service.unit}
                    </span>
                  </p>
                  <Button size="sm" variant="secondary" asChild>
                    <a href="#booking" className="flex items-center gap-1">
                      Book <ArrowUpRight className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
