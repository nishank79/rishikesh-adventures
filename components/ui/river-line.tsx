"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

/**
 * The site's signature element: a hand-drawn river current that threads down
 * the page and draws itself in as you scroll — a nod to the Ganga cutting
 * through Rishikesh, the thing every service on this site orbits around.
 * Hidden below md to keep mobile layouts uncluttered.
 */
export function RiverLine() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const pathLength = useTransform(scrollYProgress, [0, 0.95], [0, 1]);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none absolute left-6 top-0 z-0 hidden h-full w-24 md:block lg:left-12"
    >
      <svg
        viewBox="0 0 100 4000"
        fill="none"
        preserveAspectRatio="none"
        className="h-full w-full"
      >
        <motion.path
          d="M50 0
             C 20 300, 80 500, 50 800
             C 20 1100, 80 1300, 50 1600
             C 20 1900, 80 2100, 50 2400
             C 20 2700, 80 2900, 50 3200
             C 20 3500, 80 3700, 50 4000"
          stroke="url(#riverGradient)"
          strokeWidth="2.5"
          strokeLinecap="round"
          style={{ pathLength }}
        />
        <defs>
          <linearGradient id="riverGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#0B4F6C" />
            <stop offset="50%" stopColor="#146C8E" />
            <stop offset="100%" stopColor="#1B4332" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
