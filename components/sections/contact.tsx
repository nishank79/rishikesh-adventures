import { Phone, Mail, MessageCircle, Instagram, Facebook } from "lucide-react";

const channels = [
  { icon: MessageCircle, label: "WhatsApp", value: "+91 90000 00000", href: "https://wa.me/919000000000" },
  { icon: Phone, label: "Call", value: "+91 90000 00000", href: "tel:+919000000000" },
  { icon: Mail, label: "Email", value: "hello@rishikeshadventures.com", href: "mailto:hello@rishikeshadventures.com" },
  { icon: Instagram, label: "Instagram", value: "@rishikeshadventures", href: "https://instagram.com" },
  { icon: Facebook, label: "Facebook", value: "/rishikeshadventures", href: "https://facebook.com" },
];

export function Contact() {
  return (
    <section id="contact" className="relative bg-white py-24 md:py-32">
      <div className="container-px mx-auto grid grid-cols-1 gap-12 lg:grid-cols-2">
        <div>
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-current-dark">
            Find us
          </span>
          <h2 className="mt-4 text-balance font-display text-4xl font-semibold text-ink sm:text-5xl">
            Tapovan Road, near Laxman Jhula
          </h2>
          <p className="mt-4 max-w-md text-ink/60">
            Rishikesh, Uttarakhand 249192, India. Reach out on any channel
            below — we typically reply within minutes.
          </p>

          <ul className="mt-8 space-y-4">
            {channels.map((c) => (
              <li key={c.label}>
                <a
                  href={c.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 rounded-xl border border-ink/5 bg-sand p-4 transition-colors hover:border-current/40"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-forest shadow-card">
                    <c.icon className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-xs uppercase tracking-wide text-ink/40">
                      {c.label}
                    </span>
                    <span className="block font-medium text-ink">{c.value}</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="h-80 overflow-hidden rounded-3xl shadow-premium lg:h-full">
          <iframe
            title="Rishikesh Adventures location map"
            src="https://www.google.com/maps?q=Laxman%20Jhula%20Rishikesh&output=embed"
            className="h-full w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
