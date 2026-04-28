import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import Hero from "./sections/Hero";
import Stats from "./sections/Stats";
import Partners from "./sections/Partners";
import Edge from "./sections/Edge";
import Features from "./sections/Features";
import Benefits from "./sections/Benefits";
import Testimonials from "./sections/Testimonials";
import Contact from "./sections/Contact";
import Domain from "./sections/Domain";
import CourseSegmentation from "./sections/CourseSegmentation";
import WhoShouldJoin from "./sections/WhoShouldJoin";
import CatSection from "./sections/CatSection";
import DeliveryResult from "./sections/DeliveryResult";
import FAQSection from "./sections/FAQSection";
import TestimonialsSection from "./sections/TestimonialsSection";
import CTABanner from "./sections/CTABanner";
export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />

      <Partners />
      <Edge />

      <Domain />
      <CourseSegmentation />
      <WhoShouldJoin />
      <CatSection />
      <DeliveryResult />
      <FAQSection />
      <TestimonialsSection />
      <CTABanner />

      <Features />
      <Benefits />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}
