'use client'

import { motion } from 'framer-motion'
import { pageVariants, sectionReveal, staggerContainer, staggerItem, viewportConfig } from '@/lib/animations'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { GlowCard } from '@/components/ui/GlowCard'

const values = [
  { icon: '🪔', title: 'Devotion to craft', body: 'We care about doing things right, from the accuracy of a single Sanskrit transliteration to the smoothness of an animation.' },
  { icon: '🧘', title: 'Deep ownership', body: 'Small team, large surface area. Everyone owns a domain end-to-end and is trusted to make the call.' },
  { icon: '🌿', title: 'Thoughtful speed', body: 'We move fast but not recklessly. Especially when handling sacred texts, accuracy is non-negotiable.' },
  { icon: '🌏', title: 'India-first, globally relevant', body: 'Built in Bengaluru for the world\'s 1.2 billion Hindus, wherever they live.' },
]

const perks = [
  'Competitive salary + equity',
  'Remote-friendly (Bengaluru hub)',
  'MacBook + ₹50k home office budget',
  'Unlimited leave policy',
  'Health insurance (family)',
  'Annual team retreat',
  'Learning budget ₹1L/year',
  'Access to rare Sanskrit digital archives',
]

const roles = [
  { title: 'Senior ML / NLP Engineer', location: 'Bengaluru / Remote', type: 'Full-time', team: 'AI' },
  { title: 'Sanskrit Content Researcher', location: 'Remote', type: 'Full-time', team: 'Content' },
  { title: 'React Native Developer', location: 'Bengaluru', type: 'Full-time', team: 'Mobile' },
  { title: 'Product Designer (Mobile)', location: 'Bengaluru / Remote', type: 'Full-time', team: 'Design' },
  { title: 'Backend Engineer (Node.js)', location: 'Bengaluru', type: 'Full-time', team: 'Engineering' },
  { title: 'Growth & Community Manager', location: 'Bengaluru / Remote', type: 'Full-time', team: 'Growth' },
]

export default function CareersPage() {
  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit" className="pt-16">
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div variants={sectionReveal} initial="hidden" whileInView="visible" viewport={viewportConfig} className="max-w-2xl mb-16">
            <SectionLabel number="01" label="Careers" />
            <h1
              className="font-[family-name:var(--font-cormorant)] text-ink-50 font-light leading-tight mb-4"
              style={{ fontSize: 'clamp(40px, 6vw, 72px)' }}
            >
              Help us bring 5,000 years of wisdom to a billion people
            </h1>
            <p className="text-ink-400 leading-relaxed">
              We&apos;re a small, deeply intentional team in Bengaluru. If the intersection of AI, ancient wisdom, and a massive cultural mission excites you — we want to meet you.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="section-divider" />

      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div variants={sectionReveal} initial="hidden" whileInView="visible" viewport={viewportConfig} className="text-center mb-12">
            <SectionLabel number="02" label="Values" />
            <h2
              className="font-[family-name:var(--font-cormorant)] text-ink-50 font-light leading-tight"
              style={{ fontSize: 'clamp(32px, 4vw, 52px)' }}
            >
              How we work
            </h2>
          </motion.div>
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportConfig} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {values.map((v) => (
              <motion.div key={v.title} variants={staggerItem}>
                <GlowCard className="p-6 h-full">
                  <div className="text-3xl mb-4">{v.icon}</div>
                  <h3 className="text-ink-100 font-medium mb-2">{v.title}</h3>
                  <p className="text-sm text-ink-400 leading-relaxed">{v.body}</p>
                </GlowCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <div className="section-divider" />

      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div variants={sectionReveal} initial="hidden" whileInView="visible" viewport={viewportConfig} className="text-center mb-12">
            <SectionLabel number="03" label="Benefits" />
            <h2
              className="font-[family-name:var(--font-cormorant)] text-ink-50 font-light leading-tight"
              style={{ fontSize: 'clamp(32px, 4vw, 52px)' }}
            >
              Perks & benefits
            </h2>
          </motion.div>
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportConfig} className="max-w-3xl mx-auto grid sm:grid-cols-2 gap-3">
            {perks.map((perk) => (
              <motion.div key={perk} variants={staggerItem} className="flex items-center gap-3 bg-bg-elevated border border-border-subtle rounded-xl px-5 py-3.5">
                <span className="text-saffron-400 text-lg">✦</span>
                <span className="text-sm text-ink-300">{perk}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <div className="section-divider" />

      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div variants={sectionReveal} initial="hidden" whileInView="visible" viewport={viewportConfig} className="text-center mb-12">
            <SectionLabel number="04" label="Open Roles" />
            <h2
              className="font-[family-name:var(--font-cormorant)] text-ink-50 font-light leading-tight"
              style={{ fontSize: 'clamp(32px, 4vw, 52px)' }}
            >
              We&apos;re hiring
            </h2>
          </motion.div>
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportConfig} className="max-w-3xl mx-auto space-y-3">
            {roles.map((role) => (
              <motion.div key={role.title} variants={staggerItem}>
                <div className="bg-bg-elevated border border-border-subtle rounded-xl px-6 py-4 flex flex-col sm:flex-row sm:items-center gap-3 hover:border-border-hover transition-colors cursor-pointer group">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <h3 className="text-ink-100 font-medium">{role.title}</h3>
                      <span className="text-xs bg-saffron-500/10 text-saffron-400 px-2 py-0.5 rounded-full">{role.team}</span>
                    </div>
                    <p className="text-xs text-ink-500">{role.location} &middot; {role.type}</p>
                  </div>
                  <span className="text-saffron-400 text-sm shrink-0 group-hover:translate-x-1 transition-transform duration-200">&rarr;</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
          <motion.p
            variants={sectionReveal}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="text-center text-sm text-ink-500 mt-10"
          >
            Don&apos;t see your role? Send us a note at{' '}
            <a href="mailto:careers@devbhumi.com" className="text-saffron-400 hover:underline">careers@devbhumi.com</a>
          </motion.p>
        </div>
      </section>
    </motion.div>
  )
}
