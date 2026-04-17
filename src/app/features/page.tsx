'use client'

import { motion } from 'framer-motion'
import { pageVariants } from '@/lib/animations'
import { FeaturesSection } from '@/components/sections/FeaturesSection'
import { KnowledgeBaseSection } from '@/components/sections/KnowledgeBaseSection'
import { CtaSection } from '@/components/sections/CtaSection'

export default function FeaturesPage() {
  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit" className="pt-16">
      <FeaturesSection />
      <div className="section-divider" />
      <KnowledgeBaseSection />
      <div className="section-divider" />
      <CtaSection />
    </motion.div>
  )
}
