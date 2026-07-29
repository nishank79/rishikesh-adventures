"use client";

import { useEffect, useState } from "react";
import { Menu, X, Waves } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const links = [
  { label: "Services", href: "#services" },
  { label: "Packages", href: "#packages" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reviews", href: "#reviews" },
  { label: "FAQ", href: "#faq" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/80 shadow-card backdrop-blur-md"
          : "bg-transparent"
      )}
    >
      <nav className="container-px mx-auto flex h-20 items-center justify-between">
        <a href="#top" className="flex items-center gap-2 font-display text-lg font-semibold">
          <Waves className={cn("h-6 w-6", scrolled ? "text-river" : "text-white")} />
          <span className={scrolled ? "text-ink" : "text-white"}>
            Rishikesh Adventures
          </span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-current",
                  scrolled ? "text-ink/80" : "text-white/90"
                )}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <Button variant={scrolled ? "primary" : "ghost"} size="sm" asChild>
            <a href="#booking">Book Now</a>
          </Button>
        </div>

        <button
          className="md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? (
            <X className={cn("h-7 w-7", scrolled ? "text-ink" : "text-white")} />
          ) : (
            <Menu className={cn("h-7 w-7", scrolled ? "text-ink" : "text-white")} />
          )}
        </button>
      </nav>

      {open && (
        <div className="border-t border-ink/10 bg-white md:hidden">
          <ul className="container-px flex flex-col gap-1 py-4">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-base font-medium text-ink/80"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <Button className="w-full" asChild>
                <a href="#booking" onClick={() => setOpen(false)}>
                  Book Now
                </a>
              </Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
