'use client'

import { motion } from 'framer-motion'
import { sectionReveal, viewportConfig } from '@/lib/animations'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { PhaseCard } from '@/components/ui/PhaseCard'
import { phases } from '@/data/roadmap'

export function RoadmapSection() {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          variants={sectionReveal}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="text-center mb-12"
        >
          <SectionLabel number="07" label="Roadmap" />
          <h2
            className="font-[family-name:var(--font-cormorant)] text-ink-50 font-light leading-tight mb-6"
            style={{ fontSize: 'clamp(36px, 5vw, 60px)' }}
          >
            Building the future of spiritual tech
          </h2>

          {/* Progress bar */}
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="text-xs text-ink-500">Phase 1 of 3</span>
            <div className="w-40 h-1.5 bg-bg-elevated rounded-full overflow-hidden">
              <div className="h-full w-1/3 bg-gradient-to-r from-saffron-500 to-saffron-400 rounded-full" />
            </div>
          </div>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          {phases.map((phase, i) => (
            <PhaseCard key={phase.id} phase={phase} isLast={i === phases.length - 1} />
          ))}
        </div>
      </div>
    </section>
  )
}
