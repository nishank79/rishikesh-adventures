"use client";

import { motion } from "framer-motion";
import { Play, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section id="top" className="relative flex h-[100svh] min-h-[640px] w-full items-center overflow-hidden bg-river-gradient">
      {/* Background video */}
      <video
        className="absolute inset-0 h-full w-full object-cover opacity-70"
        autoPlay
        muted
        loop
        playsInline
        poster="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1920&auto=format&fit=crop"
      >
        <source src="/videos/hero-river.mp4" type="video/mp4" />
      </video>

      {/* Gradient overlay for legibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/30 to-river-dark/50" />

      {/* Floating mountain silhouette layers (parallax via CSS, subtle) */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-[radial-gradient(ellipse_at_bottom,_rgba(27,67,50,0.6),_transparent_70%)]" />

      <motion.div
        animate={{ y: [0, -14, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-[8%] top-[22%] hidden h-24 w-24 rounded-full bg-current/20 blur-2xl md:block"
      />
      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute left-[10%] top-[35%] hidden h-16 w-16 rounded-full bg-forest-light/30 blur-xl md:block"
      />

      <div className="container-px relative z-10 mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-current-light"
        >
          Rishikesh, Uttarakhand · On the banks of the Ganga
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="max-w-3xl text-balance font-display text-5xl font-semibold leading-[1.05] text-white sm:text-6xl lg:text-7xl"
        >
          Discover Rishikesh
          <br /> Like Never Before
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-6 max-w-xl text-balance text-lg text-white/85"
        >
          Ride the ghats, raft the rapids and sleep beside the river — every
          adventure booked in minutes, backed by licensed guides and
          10,000+ happy travellers.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <Button size="lg" asChild>
            <a href="#booking">Book Rafting</a>
          </Button>
          <Button size="lg" variant="secondary" asChild>
            <a href="#booking">Book Scooter</a>
          </Button>
          <Button size="lg" variant="ghost" asChild>
            <a href="#booking">Book Camping</a>
          </Button>
          <button className="group flex items-center gap-3 text-sm font-medium text-white/90">
            <span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/40 backdrop-blur-md transition-transform group-hover:scale-110">
              <Play className="h-4 w-4 fill-white" />
            </span>
            Watch Video
          </button>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-white/70"
      >
        <ChevronDown className="h-6 w-6" />
      </motion.div>
    </section>
  );
}
