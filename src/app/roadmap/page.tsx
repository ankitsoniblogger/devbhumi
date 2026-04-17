'use client'

import { motion } from 'framer-motion'
import { pageVariants } from '@/lib/animations'
import { RoadmapSection } from '@/components/sections/RoadmapSection'
import { CtaSection } from '@/components/sections/CtaSection'

export default function RoadmapPage() {
  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit" className="pt-16">
      <RoadmapSection />
      <div className="section-divider" />
      <CtaSection />
    </motion.div>
  )
}
