import UrgencyBar from "@/components/UrgencyBar";
import HeroSection from "@/components/HeroSection";
import StatsBar from "@/components/StatsBar";
import TestimonialsSection from "@/components/TestimonialsSection";
import FeaturesSection from "@/components/FeaturesSection";
import PricingSection from "@/components/PricingSection";
import GuaranteeSection from "@/components/GuaranteeSection";
import SocialProofPopup from "@/components/SocialProofPopup";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen">
    <UrgencyBar />
    <HeroSection />
    <StatsBar />
    <TestimonialsSection />
    <FeaturesSection />
    <PricingSection />
    <GuaranteeSection />
    <Footer />
    <SocialProofPopup />
  </div>
);

export default Index;
