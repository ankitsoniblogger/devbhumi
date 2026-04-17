'use client'

import { motion } from 'framer-motion'
import { staggerContainer, staggerItem, glowPulse } from '@/lib/animations'
import { GlowCard } from '@/components/ui/GlowCard'
import { Download, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const stats = [
  { value: '$64B', label: 'Faith Economy' },
  { value: '1.1B', label: 'Hindus Worldwide' },
  { value: '15.4%', label: 'YoY Growth' },
  { value: '₹5Cr', label: 'Target ARR' },
]

const pills = [
  'Conversational deity AI',
  'Daily ritual guidance',
  'Yoga & meditation',
  '8 Indian languages',
]

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-bg-base" />

      {/* Concentric rings */}
      {[400, 600, 800].map((size, i) => (
        <motion.div
          key={size}
          animate={{ rotate: 360 }}
          transition={{ duration: 60 + i * 20, repeat: Infinity, ease: 'linear' }}
          className="absolute rounded-full border border-border-subtle"
          style={{
            width: size,
            height: size,
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        />
      ))}

      {/* Radial blurs */}
      <motion.div
        variants={glowPulse}
        animate="animate"
        className="absolute top-[10%] right-[10%] w-[500px] h-[500px] rounded-full blur-3xl"
        style={{ background: 'rgba(243,140,49,0.06)' }}
      />
      <motion.div
        variants={glowPulse}
        animate="animate"
        className="absolute bottom-[10%] left-[10%] w-[400px] h-[400px] rounded-full blur-3xl"
        style={{ background: 'rgba(232,89,60,0.04)' }}
      />

      {/* Content */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-4xl mx-auto px-6 text-center py-32"
      >
        {/* Badge */}
        <motion.div variants={staggerItem} className="inline-flex items-center gap-2.5 border border-border-subtle bg-bg-overlay rounded-full px-4 py-2 mb-8">
          <span className="w-2 h-2 rounded-full bg-saffron-400 animate-pulse" />
          <span className="text-xs text-saffron-400 tracking-[0.12em] uppercase font-medium">
            Seed Round &middot; 2025 &middot; Bengaluru, India
          </span>
        </motion.div>

        {/* H1 */}
        <motion.h1
          variants={staggerItem}
          className="font-[family-name:var(--font-cormorant)] text-ink-50 font-light leading-[1.03] mb-8"
          style={{ fontSize: 'clamp(52px, 8vw, 96px)' }}
        >
          Talk to Your{' '}
          <em className="text-saffron-400 font-medium not-italic" style={{ textShadow: 'var(--glow-text)' }}>
            God
          </em>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          variants={staggerItem}
          className="text-ink-300 text-lg md:text-xl leading-[1.75] max-w-[640px] mx-auto mb-8"
        >
          DevBhumi is an AI-powered spiritual companion bringing the wisdom of the Vedas, Upanishads, and 5,000 years of Hindu philosophy to 1.1 billion devotees — in their language, at any hour.
        </motion.p>

        {/* Feature pills */}
        <motion.div variants={staggerItem} className="flex flex-wrap justify-center gap-2 mb-10">
          {pills.map((pill) => (
            <span key={pill} className="text-sm text-ink-500 border border-border-subtle rounded-full px-4 py-1.5">
              {pill}
            </span>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div variants={staggerItem} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <button className="flex items-center gap-2 bg-gradient-to-r from-saffron-500 to-vermillion-500 text-white font-medium px-8 py-3.5 rounded-full hover:shadow-lg hover:shadow-saffron-500/20 transition-all duration-300">
            <Download className="w-4 h-4" />
            Download App
          </button>
          <Link
            href="/features"
            className="flex items-center gap-2 border border-border-default text-saffron-400 font-medium px-8 py-3.5 rounded-full hover:bg-saffron-500/10 transition-all duration-300"
          >
            Explore Features
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>

        {/* Stats */}
        <motion.div variants={staggerItem} className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat) => (
            <GlowCard key={stat.label} className="p-5">
              <p className="font-[family-name:var(--font-cormorant)] text-3xl md:text-4xl text-saffron-400 font-light mb-1">
                {stat.value}
              </p>
              <p className="text-[12px] text-ink-400 tracking-wide">{stat.label}</p>
            </GlowCard>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-[10px] text-ink-600 tracking-[0.2em] uppercase">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-saffron-400/40 to-transparent animate-scroll-line" />
      </div>
    </section>
  )
}
