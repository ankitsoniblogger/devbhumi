'use client'

import { motion } from 'framer-motion'
import { sectionReveal, staggerContainer, staggerItem, viewportConfig } from '@/lib/animations'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { AnimatedCounter } from '@/components/ui/AnimatedCounter'
import { GlowCard } from '@/components/ui/GlowCard'

const communityStats = [
  { value: 500000, suffix: '+', label: 'Devotees' },
  { value: 50, suffix: '', label: 'Temple Partnerships' },
  { value: 8, suffix: '', label: 'Languages' },
  { value: 1000, suffix: '+', label: 'Sacred Texts' },
]

const pressLogos = ['TechCrunch India', 'YourStory', 'Inc42', 'The Hindu']

export function CommunitySection() {
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
          <SectionLabel number="09" label="Community" />
          <h2
            className="font-[family-name:var(--font-cormorant)] text-ink-50 font-light leading-tight mb-8"
            style={{ fontSize: 'clamp(36px, 5vw, 60px)' }}
          >
            Join the movement
          </h2>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
        >
          {communityStats.map((s) => (
            <motion.div key={s.label} variants={staggerItem}>
              <GlowCard className="p-6 text-center">
                <p className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl text-saffron-400 font-light mb-2">
                  <AnimatedCounter value={s.value} suffix={s.suffix} />
                </p>
                <p className="text-sm text-ink-500">{s.label}</p>
              </GlowCard>
            </motion.div>
          ))}
        </motion.div>

        {/* App store badges */}
        <motion.div
          variants={sectionReveal}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="flex flex-col md:flex-row items-center justify-center gap-6 mb-16"
        >
          <div className="flex gap-4">
            {/* App Store badge */}
            <div className="bg-bg-elevated border border-border-subtle rounded-xl px-6 py-3 flex items-center gap-3 hover:border-border-hover transition-colors cursor-pointer">
              <span className="text-2xl">🍎</span>
              <div>
                <p className="text-[10px] text-ink-500">Download on the</p>
                <p className="text-sm text-ink-200 font-medium">App Store</p>
              </div>
            </div>
            {/* Play Store badge */}
            <div className="bg-bg-elevated border border-border-subtle rounded-xl px-6 py-3 flex items-center gap-3 hover:border-border-hover transition-colors cursor-pointer">
              <span className="text-2xl">▶️</span>
              <div>
                <p className="text-[10px] text-ink-500">Get it on</p>
                <p className="text-sm text-ink-200 font-medium">Google Play</p>
              </div>
            </div>
          </div>

          {/* QR placeholder */}
          <div className="w-20 h-20 bg-bg-elevated border border-border-subtle rounded-xl flex items-center justify-center">
            <span className="text-ink-600 text-[10px] text-center">QR<br/>Code</span>
          </div>
        </motion.div>

        {/* Press logos */}
        <div className="text-center">
          <p className="text-[11px] text-ink-600 tracking-[0.12em] uppercase mb-6">As featured in</p>
          <div className="flex flex-wrap justify-center gap-8">
            {pressLogos.map((logo) => (
              <span key={logo} className="text-sm text-ink-600 font-medium opacity-50 hover:opacity-80 transition-opacity">
                {logo}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
