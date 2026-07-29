import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import { Services } from "@/components/sections/services";
import { Packages } from "@/components/sections/packages";
import { Gallery } from "@/components/sections/gallery";
import { Reviews } from "@/components/sections/reviews";
import { Booking } from "@/components/sections/booking";
import { FAQ } from "@/components/sections/faq";
import { Contact } from "@/components/sections/contact";
import { RiverLine } from "@/components/ui/river-line";
import { ContourDivider } from "@/components/ui/contour-divider";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="relative">
        <Hero />

        {/* River line threads through the first stretch of content sections */}
        <div className="relative">
          <RiverLine />
          <WhyChooseUs />
          <div className="text-ink/60">
            <ContourDivider />
          </div>
          <Services />
        </div>

        <Packages />
        <Gallery />
        <Reviews />
        <Booking />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
