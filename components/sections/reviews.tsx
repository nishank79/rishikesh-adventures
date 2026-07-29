"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { reviews } from "@/data/reviews";

export function Reviews() {
  const [index, setIndex] = useState(0);
  const review = reviews[index];

  const go = (dir: 1 | -1) => {
    setIndex((prev) => (prev + dir + reviews.length) % reviews.length);
  };

  return (
    <section id="reviews" className="relative bg-forest-dark py-24 md:py-32">
      <div className="container-px mx-auto">
        <div className="mb-16 max-w-2xl">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-current-light">
            Traveller stories
          </span>
          <h2 className="mt-4 text-balance font-display text-4xl font-semibold text-white sm:text-5xl">
            Ten thousand rides, ten thousand stories
          </h2>
        </div>

        <div className="relative mx-auto max-w-2xl">
          <Quote className="mb-6 h-10 w-10 text-current/60" />

          <AnimatePresence mode="wait">
            <motion.div
              key={review.id}
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -24 }}
              transition={{ duration: 0.4 }}
              className="rounded-2xl bg-white/5 p-8 backdrop-blur-md md:p-10"
            >
              <div className="mb-4 flex gap-1 text-current">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <Star
                    key={idx}
                    className="h-4 w-4"
                    fill={idx < review.rating ? "currentColor" : "none"}
                  />
                ))}
              </div>
              <p className="text-balance text-lg leading-relaxed text-white/90 md:text-xl">
                {review.text}
              </p>
              <div className="mt-6 flex items-center gap-3">
                <div className="relative h-12 w-12 overflow-hidden rounded-full">
                  <Image src={review.avatar} alt={review.name} fill className="object-cover" />
                </div>
                <div>
                  <p className="font-semibold text-white">{review.name}</p>
                  <p className="text-sm text-white/50">{review.location}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              aria-label="Previous review"
              onClick={() => go(-1)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:bg-white/10"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex gap-2">
              {reviews.map((_, idx) => (
                <span
                  key={idx}
                  className={`h-1.5 rounded-full transition-all ${
                    idx === index ? "w-6 bg-current" : "w-1.5 bg-white/25"
                  }`}
                />
              ))}
            </div>
            <button
              aria-label="Next review"
              onClick={() => go(1)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:bg-white/10"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
