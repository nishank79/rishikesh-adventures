"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  BadgeCheck,
  HeartHandshake,
  Headphones,
  Wallet,
  Zap,
} from "lucide-react";

const points = [
  { icon: BadgeCheck, title: "Licensed Vehicles", desc: "Every scooter and bike is RTO-registered and serviced every 500km." },
  { icon: ShieldCheck, title: "Professional Guides", desc: "Certified river guides with swift-water rescue training on every raft." },
  { icon: HeartHandshake, title: "Safety First", desc: "Life jackets, helmets and first-aid on every activity, no exceptions." },
  { icon: Headphones, title: "24×7 Support", desc: "A local team on WhatsApp and call, day or night, throughout your stay." },
  { icon: Wallet, title: "Affordable Pricing", desc: "Transparent, all-inclusive pricing — no hidden charges at pickup." },
  { icon: Zap, title: "Instant Booking", desc: "Confirmed in under 60 seconds, with instant WhatsApp confirmation." },
];

export function WhyChooseUs() {
  return (
    <section className="relative bg-white py-24 md:py-32">
      <div className="container-px relative z-10 mx-auto">
        <div className="mb-16 max-w-2xl">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-current-dark">
            Why travellers trust us
          </span>
          <h2 className="mt-4 text-balance font-display text-4xl font-semibold text-ink sm:text-5xl">
            Built for people who came here to feel something
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {points.map((point, i) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group rounded-2xl border border-ink/5 bg-white p-8 shadow-card transition-all duration-300 hover:-translate-y-2 hover:shadow-premium"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-forest/10 text-forest transition-colors group-hover:bg-current group-hover:text-white">
                <point.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-2 font-display text-xl font-semibold text-ink">
                {point.title}
              </h3>
              <p className="text-sm leading-relaxed text-ink/60">{point.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
