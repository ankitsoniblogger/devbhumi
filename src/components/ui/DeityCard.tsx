'use client'

import { motion } from 'framer-motion'
import { cardHover, staggerItem } from '@/lib/animations'
import type { Deity } from '@/data/deities'

interface DeityCardProps {
  deity: Deity
}

export function DeityCard({ deity }: DeityCardProps) {
  return (
    <motion.div
      variants={{ ...cardHover, ...staggerItem }}
      initial="rest"
      whileHover="hover"
      className="group bg-bg-elevated border border-border-subtle rounded-2xl p-6 min-w-[260px] hover:border-border-hover transition-colors duration-300 relative overflow-hidden"
    >
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `radial-gradient(circle at 50% 0%, ${deity.color}10 0%, transparent 70%)`,
        }}
      />
      <div className="relative z-10">
        <div
          className="w-14 h-14 rounded-full flex items-center justify-center text-3xl mb-4"
          style={{
            background: `${deity.color}15`,
            boxShadow: `0 0 30px ${deity.color}20`,
          }}
        >
          {deity.emoji}
        </div>
        <h3 className="text-ink-50 font-medium text-lg mb-1">{deity.name}</h3>
        <span
          className="inline-block text-xs px-2.5 py-1 rounded-full mb-3"
          style={{
            background: `${deity.color}15`,
            color: deity.color,
          }}
        >
          {deity.domain}
        </span>
        <div className="flex flex-wrap gap-1.5 mb-4">
          {deity.scriptures.map((s) => (
            <span key={s} className="text-[11px] text-ink-500 bg-bg-overlay px-2 py-0.5 rounded">
              {s}
            </span>
          ))}
        </div>
        <div className="h-0 group-hover:h-10 overflow-hidden transition-all duration-300">
          <button
            className="text-sm font-medium transition-colors duration-200"
            style={{ color: deity.color }}
          >
            Start Conversation &rarr;
          </button>
        </div>
      </div>
    </motion.div>
  )
}
