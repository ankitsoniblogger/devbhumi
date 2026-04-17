'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { sectionReveal, staggerContainer, viewportConfig } from '@/lib/animations'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { PricingCard } from '@/components/ui/PricingCard'
import { pricingTiers } from '@/data/pricing'

export function PricingSection() {
  const [yearly, setYearly] = useState(false)

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
          <SectionLabel number="06" label="Pricing" />
          <h2
            className="font-[family-name:var(--font-cormorant)] text-ink-50 font-light leading-tight mb-8"
            style={{ fontSize: 'clamp(36px, 5vw, 60px)' }}
          >
            Simple, honest pricing
          </h2>

          {/* Toggle */}
          <div className="inline-flex items-center gap-4 bg-bg-elevated border border-border-subtle rounded-full p-1.5">
            <button
              onClick={() => setYearly(false)}
              className={`text-sm px-5 py-2 rounded-full transition-all duration-300 ${
                !yearly ? 'bg-saffron-500/15 text-saffron-400' : 'text-ink-500'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setYearly(true)}
              className={`text-sm px-5 py-2 rounded-full transition-all duration-300 flex items-center gap-2 ${
                yearly ? 'bg-saffron-500/15 text-saffron-400' : 'text-ink-500'
              }`}
            >
              Yearly
              <span className="text-[10px] bg-saffron-500 text-white px-2 py-0.5 rounded-full">
                Save 37%
              </span>
            </button>
          </div>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto"
        >
          {pricingTiers.map((tier) => (
            <PricingCard key={tier.id} tier={tier} yearly={yearly} />
          ))}
        </motion.div>

        <p className="text-center text-ink-500 text-sm mt-10">
          Diaspora pricing: $4.99/month &middot; $39.99/year &middot; Available on App Store & Play Store
        </p>
      </div>
    </section>
  )
}
