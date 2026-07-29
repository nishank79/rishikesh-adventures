"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { galleryItems, type GalleryItem } from "@/data/gallery";
import { cn } from "@/lib/utils";

const categories = ["All", "Rafting", "Camping", "Bikes", "Scenery"] as const;

const heightMap: Record<GalleryItem["height"], string> = {
  short: "h-56",
  medium: "h-72",
  tall: "h-96",
};

export function Gallery() {
  const [active, setActive] = useState<(typeof categories)[number]>("All");
  const [lightbox, setLightbox] = useState<GalleryItem | null>(null);

  const filtered =
    active === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === active);

  return (
    <section id="gallery" className="relative bg-sand py-24 md:py-32">
      <div className="container-px mx-auto">
        <div className="mb-10 max-w-2xl">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-current-dark">
            Gallery
          </span>
          <h2 className="mt-4 text-balance font-display text-4xl font-semibold text-ink sm:text-5xl">
            Moments from the river
          </h2>
        </div>

        <div className="mb-10 flex flex-wrap gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={cn(
                "rounded-full border px-5 py-2 text-sm font-medium transition-colors",
                active === cat
                  ? "border-forest bg-forest text-white"
                  : "border-ink/10 bg-white text-ink/60 hover:border-forest/40"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4">
          <AnimatePresence>
            {filtered.map((item) => (
              <motion.button
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.35 }}
                onClick={() => setLightbox(item)}
                className={cn(
                  "relative block w-full overflow-hidden rounded-2xl",
                  heightMap[item.height]
                )}
              >
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 hover:scale-110"
                />
              </motion.button>
            ))}
          </AnimatePresence>
        </div>
      </div>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/90 p-6"
            onClick={() => setLightbox(null)}
          >
            <button
              aria-label="Close image"
              className="absolute right-6 top-6 text-white/80 hover:text-white"
              onClick={() => setLightbox(null)}
            >
              <X className="h-8 w-8" />
            </button>
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              className="relative h-[70vh] w-full max-w-3xl"
            >
              <Image
                src={lightbox.image}
                alt={lightbox.alt}
                fill
                sizes="100vw"
                className="rounded-2xl object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
