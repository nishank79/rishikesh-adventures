"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Star, Check } from "lucide-react";
import { packages } from "@/data/packages";
import { Button } from "@/components/ui/button";

export function Packages() {
  return (
    <section id="packages" className="relative bg-white py-24 md:py-32">
      <div className="container-px mx-auto">
        <div className="mb-16 max-w-2xl">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-current-dark">
            Popular packages
          </span>
          <h2 className="mt-4 text-balance font-display text-4xl font-semibold text-ink sm:text-5xl">
            Curated trips, not just add-to-carts
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {packages.map((pkg, i) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group flex flex-col overflow-hidden rounded-2xl border border-ink/5 shadow-card transition-all duration-500 hover:-translate-y-1 hover:shadow-premium"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={pkg.image}
                  alt={pkg.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {pkg.discount && (
                  <span className="absolute right-4 top-4 rounded-full bg-forest px-3 py-1 text-xs font-semibold text-white">
                    {pkg.discount}
                  </span>
                )}
              </div>

              <div className="flex flex-1 flex-col p-6">
                <div className="mb-2 flex items-center gap-1 text-current">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <Star
                      key={idx}
                      className="h-3.5 w-3.5"
                      fill={idx < Math.round(pkg.rating) ? "currentColor" : "none"}
                    />
                  ))}
                  <span className="ml-2 font-mono text-xs text-ink/50">
                    {pkg.rating} ({pkg.reviews})
                  </span>
                </div>

                <h3 className="font-display text-xl font-semibold text-ink">
                  {pkg.name}
                </h3>
                <p className="mt-1 text-sm text-ink/60">{pkg.description}</p>

                <ul className="mt-4 space-y-2">
                  {pkg.includes.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-ink/70">
                      <Check className="h-4 w-4 shrink-0 text-forest" />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex items-center justify-between border-t border-ink/5 pt-6">
                  <div>
                    <p className="font-mono text-lg font-semibold text-ink">
                      {pkg.price}
                      {pkg.originalPrice && (
                        <span className="ml-2 text-sm font-normal text-ink/40 line-through">
                          {pkg.originalPrice}
                        </span>
                      )}
                    </p>
                  </div>
                  <Button size="sm" asChild>
                    <a href="#booking">Book Now</a>
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
