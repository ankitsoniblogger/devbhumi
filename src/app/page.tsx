'use client'

import { HeroSection } from '@/components/sections/HeroSection'
import { VisionSection } from '@/components/sections/VisionSection'
import { HowItWorksSection } from '@/components/sections/HowItWorksSection'
import { DeitySection } from '@/components/sections/DeitySection'
import { FeaturesSection } from '@/components/sections/FeaturesSection'
import { KnowledgeBaseSection } from '@/components/sections/KnowledgeBaseSection'
import { PricingSection } from '@/components/sections/PricingSection'
import { RoadmapSection } from '@/components/sections/RoadmapSection'
import { TestimonialsSection } from '@/components/sections/TestimonialsSection'
import { CommunitySection } from '@/components/sections/CommunitySection'
import { FaqSection } from '@/components/sections/FaqSection'
import { CtaSection } from '@/components/sections/CtaSection'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <div className="section-divider" />
      <VisionSection />
      <div className="section-divider" />
      <HowItWorksSection />
      <div className="section-divider" />
      <DeitySection />
      <div className="section-divider" />
      <FeaturesSection />
      <div className="section-divider" />
      <KnowledgeBaseSection />
      <div className="section-divider" />
      <PricingSection />
      <div className="section-divider" />
      <RoadmapSection />
      <div className="section-divider" />
      <TestimonialsSection />
      <div className="section-divider" />
      <CommunitySection />
      <div className="section-divider" />
      <FaqSection />
      <div className="section-divider" />
      <CtaSection />
    </>
  )
}
