'use client'

import { motion } from 'framer-motion'
import { staggerContainer, staggerItem, viewportConfig } from '@/lib/animations'
import type { Phase } from '@/data/roadmap'

interface PhaseCardProps {
  phase: Phase
  isLast?: boolean
}

export function PhaseCard({ phase, isLast }: PhaseCardProps) {
  return (
    <div className="relative flex gap-6 md:gap-10">
      {/* Timeline line */}
      <div className="flex flex-col items-center">
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium border-2 shrink-0 z-10"
          style={{
            borderColor: phase.color,
            color: phase.color,
            background: `${phase.color}15`,
          }}
        >
          {String(phase.number).padStart(2, '0')}
        </div>
        {!isLast && (
          <div
            className="w-px flex-1 min-h-[40px]"
            style={{
              background: `linear-gradient(to bottom, ${phase.color}, ${phase.color}20)`,
            }}
          />
        )}
      </div>

      {/* Content */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        className="pb-12"
      >
        <div className="flex items-center gap-3 mb-2">
          <h3 className="text-ink-50 font-medium text-xl">{phase.name}</h3>
          <span
            className="text-[11px] px-2.5 py-1 rounded-full font-medium flex items-center gap-1.5"
            style={{
              background: `${phase.color}15`,
              color: phase.color,
            }}
          >
            {phase.status === 'In Progress' && (
              <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: phase.color }} />
            )}
            {phase.status}
          </span>
        </div>
        <p className="text-ink-500 text-sm mb-4">{phase.timeline}</p>
        <motion.ul className="space-y-2">
          {phase.milestones.map((m) => (
            <motion.li
              key={m}
              variants={staggerItem}
              className="flex items-start gap-2 text-sm text-ink-400"
            >
              <span className="w-1 h-1 rounded-full mt-2 shrink-0" style={{ background: phase.color }} />
              {m}
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </div>
  )
}
