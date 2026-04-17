'use client'

import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { staggerItem } from '@/lib/animations'
import type { PricingTier } from '@/data/pricing'

interface PricingCardProps {
  tier: PricingTier
  yearly: boolean
}

export function PricingCard({ tier, yearly }: PricingCardProps) {
  const price = yearly ? tier.priceYearly : tier.priceMonthly
  const period = yearly ? '/year' : '/month'

  return (
    <motion.div
      variants={staggerItem}
      className={`relative rounded-2xl p-8 flex flex-col ${
        tier.highlighted
          ? 'border-2 border-saffron-500 bg-bg-elevated shadow-[var(--glow-saffron)]'
          : 'border border-border-subtle bg-bg-elevated'
      }`}
    >
      {tier.badge && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-medium bg-saffron-500 text-bg-base px-4 py-1 rounded-full">
          {tier.badge}
        </span>
      )}
      <h3 className="text-ink-200 font-medium text-xl mb-2">{tier.name}</h3>
      <div className="mb-6">
        <span className="font-[family-name:var(--font-cormorant)] text-5xl text-saffron-400 font-light">
          {price}
        </span>
        {tier.priceMonthlyValue > 0 && (
          <span className="text-ink-500 text-sm ml-1">{period}</span>
        )}
      </div>
      <ul className="space-y-3 mb-8 flex-1">
        {tier.features.map((f) => (
          <li key={f} className="flex items-start gap-2.5 text-sm text-ink-300">
            <Check className="w-4 h-4 text-saffron-500 mt-0.5 shrink-0" />
            {f}
          </li>
        ))}
      </ul>
      <button
        className={`w-full py-3 rounded-full font-medium text-sm transition-all duration-300 ${
          tier.highlighted
            ? 'bg-gradient-to-r from-saffron-500 to-vermillion-500 text-white hover:shadow-lg hover:shadow-saffron-500/20'
            : 'border border-border-default text-saffron-400 hover:bg-saffron-500/10'
        }`}
      >
        {tier.cta}
      </button>
    </motion.div>
  )
}
