import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ShowcaseSection from "@/components/ShowcaseSection";
import GuaranteeSection from "@/components/GuaranteeSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import OfferBannerSection from "@/components/OfferBannerSection";
import FAQSection from "@/components/FAQSection";
import LocationSection from "@/components/LocationSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <ShowcaseSection />
      <GuaranteeSection />
      <TestimonialsSection />
      <OfferBannerSection />
      <FAQSection />
      <LocationSection />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
