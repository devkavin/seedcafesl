import { ExperienceCards } from "@/components/experience-cards";
import { GallerySection } from "@/components/gallery-section";
import { HeroSection } from "@/components/hero-section";
import { MenuHighlights } from "@/components/menu-highlights";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { SocialProof } from "@/components/social-proof";
import { VibeSection } from "@/components/vibe-section";
import { VisitSection } from "@/components/visit-section";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <VibeSection />
        <ExperienceCards />
        <MenuHighlights />
        <GallerySection />
        <SocialProof />
        <VisitSection />
      </main>
      <SiteFooter />
    </>
  );
}
