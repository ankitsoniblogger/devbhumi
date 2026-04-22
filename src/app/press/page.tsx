'use client'

import { motion } from 'framer-motion'
import { pageVariants, sectionReveal, staggerContainer, staggerItem, viewportConfig } from '@/lib/animations'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { GlowCard } from '@/components/ui/GlowCard'

const coverage = [
  { outlet: 'The Hindu', date: 'April 2026', headline: '"DevBhumi is making the Vedas accessible to a generation that grew up on smartphones"', tag: 'Feature' },
  { outlet: 'YourStory', date: 'March 2026', headline: 'Bengaluru startup raises seed round to build AI companion for 1.1 billion Hindus', tag: 'Funding' },
  { outlet: 'Economic Times', date: 'March 2026', headline: 'Spiritual tech is the next frontier for India\'s AI boom, and DevBhumi is leading the charge', tag: 'Analysis' },
  { outlet: 'Inc42', date: 'February 2026', headline: 'How DevBhumi\'s RAG pipeline ensures scripture accuracy in AI responses', tag: 'Deep Dive' },
  { outlet: 'Mint', date: 'January 2026', headline: 'Devotional apps get an AI upgrade — can they replace a trip to the pandit?', tag: 'Feature' },
  { outlet: 'NDTV Tech', date: 'December 2025', headline: 'DevBhumi\'s Diwali beta draws 10,000 users in 72 hours', tag: 'Launch' },
]

const assets = [
  { label: 'Brand Kit (Logos + Colors)', size: '4.2 MB', format: 'ZIP' },
  { label: 'Product Screenshots', size: '18 MB', format: 'ZIP' },
  { label: 'Founder Headshots', size: '6.1 MB', format: 'ZIP' },
  { label: 'Company Fact Sheet', size: '240 KB', format: 'PDF' },
]

export default function PressPage() {
  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit" className="pt-16">
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div variants={sectionReveal} initial="hidden" whileInView="visible" viewport={viewportConfig} className="max-w-2xl mb-16">
            <SectionLabel number="01" label="Press" />
            <h1
              className="font-[family-name:var(--font-cormorant)] text-ink-50 font-light leading-tight mb-4"
              style={{ fontSize: 'clamp(40px, 6vw, 72px)' }}
            >
              News & media coverage
            </h1>
            <p className="text-ink-400 leading-relaxed">
              For press inquiries, interviews, or media assets contact{' '}
              <a href="mailto:press@devbhumi.com" className="text-saffron-400 hover:underline">press@devbhumi.com</a>
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="space-y-4 mb-20"
          >
            {coverage.map((item) => (
              <motion.div key={item.headline} variants={staggerItem}>
                <div className="bg-bg-elevated border border-border-subtle rounded-xl px-6 py-5 flex flex-col sm:flex-row sm:items-center gap-4 hover:border-border-hover transition-colors cursor-pointer group">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs font-medium text-saffron-400">{item.outlet}</span>
                      <span className="text-xs text-ink-600">{item.date}</span>
                      <span className="text-xs text-ink-600 bg-bg-base px-2 py-0.5 rounded-full border border-border-subtle">{item.tag}</span>
                    </div>
                    <p className="text-ink-200 leading-snug group-hover:text-ink-50 transition-colors duration-200">{item.headline}</p>
                  </div>
                  <span className="text-saffron-400 text-sm shrink-0 group-hover:translate-x-1 transition-transform duration-200">&rarr;</span>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="section-divider mb-20" />

          <motion.div variants={sectionReveal} initial="hidden" whileInView="visible" viewport={viewportConfig}>
            <SectionLabel number="02" label="Media Assets" />
            <h2
              className="font-[family-name:var(--font-cormorant)] text-ink-50 font-light leading-tight mb-10"
              style={{ fontSize: 'clamp(32px, 4vw, 52px)' }}
            >
              Download press kit
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {assets.map((a) => (
                <GlowCard key={a.label} className="p-5 cursor-pointer group">
                  <div className="text-2xl mb-3">📦</div>
                  <h3 className="text-ink-100 font-medium text-sm mb-1">{a.label}</h3>
                  <p className="text-xs text-ink-600">{a.size} &middot; {a.format}</p>
                  <span className="mt-3 text-xs text-saffron-400 group-hover:translate-x-1 transition-transform duration-200 inline-block">Download &rarr;</span>
                </GlowCard>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}
