'use client'

import { motion } from 'framer-motion'
import { sectionReveal, staggerContainer, staggerItem, viewportConfig } from '@/lib/animations'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { DeityCard } from '@/components/ui/DeityCard'
import { deities } from '@/data/deities'

export function DeitySection() {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          variants={sectionReveal}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="text-center mb-16"
        >
          <SectionLabel number="03" label="Deity Companions" />
          <h2
            className="font-[family-name:var(--font-cormorant)] text-ink-50 font-light leading-tight max-w-2xl mx-auto"
            style={{ fontSize: 'clamp(36px, 5vw, 60px)' }}
          >
            8 divine companions, each with their own wisdom
          </h2>
        </motion.div>

        {/* Mobile: horizontal scroll / Desktop: grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="flex md:grid md:grid-cols-4 gap-4 overflow-x-auto md:overflow-visible pb-4 md:pb-0 snap-x snap-mandatory md:snap-none scrollbar-hide"
        >
          {deities.map((deity) => (
            <motion.div key={deity.id} variants={staggerItem} className="snap-start shrink-0 md:shrink">
              <DeityCard deity={deity} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
