'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { sectionReveal, viewportConfig } from '@/lib/animations'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { features } from '@/data/features'
import { Check } from 'lucide-react'

export function FeaturesSection() {
  const [activeTab, setActiveTab] = useState(0)
  const active = features[activeTab]

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
          <SectionLabel number="04" label="Features" />
          <h2
            className="font-[family-name:var(--font-cormorant)] text-ink-50 font-light leading-tight"
            style={{ fontSize: 'clamp(36px, 5vw, 60px)' }}
          >
            Everything a devotee needs
          </h2>
        </motion.div>

        {/* Tabs */}
        <div className="flex justify-center gap-1 mb-12 overflow-x-auto pb-2">
          {features.map((f, i) => (
            <button
              key={f.id}
              onClick={() => setActiveTab(i)}
              className={`relative px-5 py-2.5 text-sm font-medium rounded-full transition-all duration-300 whitespace-nowrap ${
                i === activeTab
                  ? 'text-saffron-400 bg-saffron-500/10'
                  : 'text-ink-500 hover:text-ink-300'
              }`}
            >
              {f.tab}
            </button>
          ))}
        </div>

        {/* Tab content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            {/* Left */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <active.icon className="w-6 h-6 text-saffron-400" />
                <span className="text-[11px] tracking-[0.12em] uppercase text-saffron-500 font-medium bg-saffron-500/10 px-3 py-1 rounded-full">
                  {active.phase}
                </span>
              </div>
              <h3 className="text-ink-50 font-medium text-2xl mb-4">{active.title}</h3>
              <p className="text-ink-400 leading-[1.75] mb-6">{active.description}</p>
              <ul className="space-y-3">
                {active.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2.5 text-sm text-ink-300">
                    <Check className="w-4 h-4 text-saffron-500 mt-0.5 shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>

            {/* Right — mockup */}
            <div className="bg-bg-elevated border border-border-subtle rounded-2xl p-8 flex items-center justify-center min-h-[320px]">
              <div className="text-center">
                <active.icon className="w-16 h-16 text-saffron-400/20 mx-auto mb-4" />
                <p className="text-ink-500 text-sm">{active.title} Preview</p>
                <p className="text-ink-600 text-xs mt-1">Coming soon in {active.phase}</p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
