'use client'

import { motion } from 'framer-motion'
import { sectionReveal, staggerContainer, staggerItem, viewportConfig } from '@/lib/animations'
import { Download } from 'lucide-react'

export function CtaSection() {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      {/* Background effects */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(243,140,49,0.08) 0%, transparent 70%)',
        }}
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-3xl"
        style={{ background: 'rgba(243,140,49,0.05)' }}
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        className="relative z-10 max-w-3xl mx-auto px-6 text-center"
      >
        <motion.h2
          variants={staggerItem}
          className="font-[family-name:var(--font-cormorant)] text-ink-50 font-light leading-tight mb-6"
          style={{ fontSize: 'clamp(40px, 6vw, 72px)' }}
        >
          Carry the Vedas in your pocket.
        </motion.h2>

        <motion.p variants={staggerItem} className="text-ink-300 text-lg mb-10">
          Join 500,000+ devotees already using Divine Connect.
        </motion.p>

        <motion.div variants={staggerItem} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <button className="flex items-center gap-2 bg-gradient-to-r from-saffron-500 to-vermillion-500 text-white font-medium px-8 py-3.5 rounded-full hover:shadow-lg hover:shadow-saffron-500/20 transition-all duration-300">
            <Download className="w-4 h-4" />
            Download for Android
          </button>
          <button className="flex items-center gap-2 bg-gradient-to-r from-saffron-500 to-vermillion-500 text-white font-medium px-8 py-3.5 rounded-full hover:shadow-lg hover:shadow-saffron-500/20 transition-all duration-300">
            <Download className="w-4 h-4" />
            Download for iOS
          </button>
        </motion.div>

        {/* Email waitlist */}
        <motion.div variants={staggerItem} className="max-w-md mx-auto">
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 bg-bg-elevated border border-border-subtle rounded-full px-5 py-3 text-sm text-ink-200 placeholder:text-ink-600 focus:outline-none focus:border-saffron-400/40 transition-colors"
            />
            <button className="bg-saffron-500 text-white text-sm font-medium px-6 py-3 rounded-full hover:bg-saffron-600 transition-colors">
              Get Early Access
            </button>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
