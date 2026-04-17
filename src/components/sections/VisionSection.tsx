'use client'

import { motion } from 'framer-motion'
import { sectionReveal, staggerContainer, staggerItem, viewportConfig } from '@/lib/animations'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { GlowCard } from '@/components/ui/GlowCard'
import { BookOpen, Globe, Users, Shield } from 'lucide-react'

const values = [
  {
    icon: BookOpen,
    title: 'Theologically Grounded',
    description: 'Every response backed by 1,000+ sacred texts with verifiable citations.',
  },
  {
    icon: Globe,
    title: 'Every Indian Language',
    description: '8 languages at launch, covering 95% of India\'s linguistic diversity.',
  },
  {
    icon: Users,
    title: 'Community Endorsed',
    description: 'Built with guidance from Sanskrit scholars, temple priests, and theologians.',
  },
  {
    icon: Shield,
    title: 'Privacy First',
    description: 'End-to-end encrypted conversations. Your spiritual journey stays private.',
  },
]

export function VisionSection() {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <motion.div
            variants={sectionReveal}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="relative"
          >
            <SectionLabel number="01" label="Our Vision" />
            <h2
              className="font-[family-name:var(--font-cormorant)] text-ink-50 font-light leading-tight mb-6"
              style={{ fontSize: 'clamp(36px, 5vw, 60px)' }}
            >
              5,000 years of wisdom, finally in your pocket
            </h2>
            <p className="text-ink-400 leading-[1.75] mb-8">
              We believe every devotee deserves a personal connection to the vast ocean of Hindu wisdom. DevBhumi bridges the gap between ancient scriptures and modern seekers, making the Vedas, Upanishads, and Puranas accessible through natural conversation — not academic jargon.
            </p>
            <span
              className="absolute -top-8 -left-4 font-[family-name:var(--font-cormorant)] text-[120px] leading-none select-none pointer-events-none"
              style={{ color: 'rgba(119,41,17,0.15)' }}
            >
              &#x0950;
            </span>
          </motion.div>

          {/* Right — values grid */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {values.map((v) => (
              <motion.div key={v.title} variants={staggerItem}>
                <GlowCard className="p-6 h-full">
                  <v.icon className="w-6 h-6 text-saffron-400 mb-3" />
                  <h3 className="text-ink-50 font-medium mb-2">{v.title}</h3>
                  <p className="text-sm text-ink-400 leading-relaxed">{v.description}</p>
                </GlowCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
