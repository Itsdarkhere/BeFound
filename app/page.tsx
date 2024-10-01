import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navigation from "@/components/Navigation";
import Services from "@/components/Services";
import Tagline from "@/components/Tagline";

export default function Home() {
  return (
    <div className="flex bg-primary flex-col justify-start items-center min-h-screen">
      <Navigation />
      <Hero />
      <Tagline />
      <Services />
      <CTA />
      <Footer />
    </div>
  );
}
