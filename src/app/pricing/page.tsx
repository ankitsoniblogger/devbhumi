'use client'

import { motion } from 'framer-motion'
import { pageVariants } from '@/lib/animations'
import { PricingSection } from '@/components/sections/PricingSection'
import { FaqSection } from '@/components/sections/FaqSection'
import { CtaSection } from '@/components/sections/CtaSection'

export default function PricingPage() {
  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit" className="pt-16">
      <PricingSection />
      <div className="section-divider" />
      <FaqSection />
      <div className="section-divider" />
      <CtaSection />
    </motion.div>
  )
}
