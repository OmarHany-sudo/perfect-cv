import HeroSection from "@/components/landing/HeroSection";
import BenefitsSection from "@/components/landing/BenefitsSection";
import TemplateTeaser from "@/components/landing/TemplateTeaser";
import CTASection from "@/components/landing/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <BenefitsSection />
      <TemplateTeaser />
      <CTASection />
    </div>
  );
};

export default Index;
