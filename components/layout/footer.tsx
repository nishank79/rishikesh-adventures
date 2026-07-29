import { Waves, Instagram, Facebook, Youtube } from "lucide-react";
import { ContourDivider } from "@/components/ui/contour-divider";

const quickLinks = ["Services", "Packages", "Gallery", "Reviews", "FAQ"];
const serviceLinks = ["Scooter Rental", "Bike Rental", "River Rafting", "Camping", "Adventure Activities"];

export function Footer() {
  return (
    <footer className="relative bg-forest-dark text-white/70">
      <div className="text-forest-dark/40">
        <ContourDivider className="text-white/10" />
      </div>

      <div className="container-px mx-auto grid grid-cols-1 gap-12 pb-12 pt-4 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="mb-4 flex items-center gap-2">
            <Waves className="h-6 w-6 text-current" />
            <span className="font-display text-lg font-semibold text-white">
              Rishikesh Adventures
            </span>
          </div>
          <p className="max-w-xs text-sm text-white/50">
            Rafting, camping and rentals on the banks of the Ganga — booked in
            minutes, remembered for years.
          </p>
          <div className="mt-6 flex gap-3">
            {[Instagram, Facebook, Youtube].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 transition-colors hover:bg-white/10"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="mb-4 font-display text-sm font-semibold uppercase tracking-wide text-white">
            Quick Links
          </h4>
          <ul className="space-y-3 text-sm">
            {quickLinks.map((link) => (
              <li key={link}>
                <a href={`#${link.toLowerCase()}`} className="hover:text-current">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-4 font-display text-sm font-semibold uppercase tracking-wide text-white">
            Services
          </h4>
          <ul className="space-y-3 text-sm">
            {serviceLinks.map((link) => (
              <li key={link}>
                <a href="#services" className="hover:text-current">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-4 font-display text-sm font-semibold uppercase tracking-wide text-white">
            Address
          </h4>
          <p className="text-sm text-white/50">
            Tapovan Road, near Laxman Jhula
            <br />
            Rishikesh, Uttarakhand 249192
            <br />
            India
          </p>
        </div>
      </div>

      <div className="border-t border-white/10 py-6">
        <p className="container-px mx-auto text-center text-xs text-white/40">
          © {new Date().getFullYear()} Rishikesh Adventures. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
