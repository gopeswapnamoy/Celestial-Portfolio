"use client";

import { CustomCursor } from "@/components/animations/CustomCursor";
import { PageLoader } from "@/components/animations/PageLoader";
import { ScrollProgress } from "@/components/animations/ScrollProgress";
import { SecretChamberUnlock } from "@/components/animations/SecretChamberUnlock";
import { SmoothScrollProvider } from "@/components/animations/SmoothScrollProvider";
import { AiLab } from "@/components/sections/AiLab";
import { ContactSanctuary } from "@/components/sections/ContactSanctuary";
import { HeroSection } from "@/components/sections/HeroSection";
import { IdentityHall } from "@/components/sections/IdentityHall";
import { JourneyCorridor } from "@/components/sections/JourneyCorridor";
import { ProjectGallery } from "@/components/sections/ProjectGallery";
import { SkillTemple } from "@/components/sections/SkillTemple";
import { NavCompass } from "./NavCompass";

export function CelestialExperience() {
  return (
    <SmoothScrollProvider>
      <PageLoader />
      <ScrollProgress />
      <CustomCursor />
      <NavCompass />
      <main>
        <HeroSection />
        <IdentityHall />
        <ProjectGallery />
        <SkillTemple />
        <JourneyCorridor />
        <AiLab />
        <ContactSanctuary />
      </main>
      <SecretChamberUnlock />
    </SmoothScrollProvider>
  );
}
