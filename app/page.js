import Image from "next/image";
import CrmHeroSection from "./_component/Home/CRMHero";
import FeaturesSection from "./_component/FeaturesSection/FeaturesSection";
import AICRMSection from "./_component/Home/AICRM";
import PricingSection from "./_component/Home/PricingSection";

export default function Home() {
  return (
    <div>
      <CrmHeroSection></CrmHeroSection>
      <FeaturesSection></FeaturesSection>
      <AICRMSection></AICRMSection>
      <PricingSection></PricingSection>
    </div>
  );
}
