'use client'

import { motion } from 'framer-motion'
import { pageVariants, sectionReveal, staggerContainer, staggerItem, viewportConfig } from '@/lib/animations'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { GlowCard } from '@/components/ui/GlowCard'

const advisors = [
  { name: 'Dr. Anand Sharma', role: 'Sanskrit Scholar, BHU', focus: 'Vedantic Philosophy' },
  { name: 'Pandit Ramesh Iyer', role: 'Head Priest, Meenakshi Temple', focus: 'Temple Rituals & Agamas' },
  { name: 'Dr. Priya Venkatesh', role: 'Indology Professor, JNU', focus: 'Comparative Theology' },
  { name: 'Swami Vivekananda Das', role: 'ISKCON Scholar', focus: 'Bhakti Tradition' },
]

const team = [
  { name: 'Ankit Soni', role: 'Founder & CEO', bio: 'Building at the intersection of AI and spirituality. Previously in fintech.' },
  { name: 'Priya Patel', role: 'CTO', bio: 'AI/ML engineer with 10 years of NLP experience. IIT Bombay.' },
  { name: 'Arjun Menon', role: 'Head of Content', bio: 'Sanskrit scholar turned product builder. 5 years in ed-tech.' },
  { name: 'Kavya Reddy', role: 'Lead Designer', bio: 'Design systems architect. Passionate about cultural UI/UX.' },
  { name: 'Rohan Gupta', role: 'Backend Lead', bio: 'Scaled distributed systems at Flipkart. IIT Delhi.' },
  { name: 'Meera Joshi', role: 'Community Lead', bio: 'Built 100K+ communities in spiritual and wellness spaces.' },
]

const openRoles = [
  { title: 'Senior ML Engineer', location: 'Bengaluru / Remote', type: 'Full-time' },
  { title: 'Sanskrit Content Researcher', location: 'Remote', type: 'Full-time' },
  { title: 'React Native Developer', location: 'Bengaluru', type: 'Full-time' },
]

export default function AboutPage() {
  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit" className="pt-16">
      {/* Founder story */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div variants={sectionReveal} initial="hidden" whileInView="visible" viewport={viewportConfig} className="max-w-3xl">
            <SectionLabel number="01" label="Our Story" />
            <h1
              className="font-[family-name:var(--font-cormorant)] text-ink-50 font-light leading-tight mb-8"
              style={{ fontSize: 'clamp(40px, 6vw, 72px)' }}
            >
              Why we built DevBhumi
            </h1>
            <div className="space-y-6 text-ink-400 leading-[1.75]">
              <p>
                Growing up in a devout Hindu family, I experienced the profound wisdom of our scriptures through my grandmother&apos;s stories. But as I grew older and moved to the city, that connection faded. The texts felt inaccessible — locked away in Sanskrit, scattered across thousands of pages, gatekept by academic jargon.
              </p>
              <p>
                When I discovered what modern AI could do with language, I realized we could bridge this gap. Not to replace gurus or temples, but to make the ocean of Hindu wisdom as accessible as a conversation with a wise friend — in your language, on your phone, at any hour.
              </p>
              <p>
                That&apos;s why DevBhumi exists. It&apos;s a labor of devotion, built by a team that deeply respects the tradition while embracing the technology that can bring it to a billion people.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="section-divider" />

      {/* Mission & Values */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div variants={sectionReveal} initial="hidden" whileInView="visible" viewport={viewportConfig} className="text-center mb-16">
            <SectionLabel number="02" label="Mission" />
            <h2
              className="font-[family-name:var(--font-cormorant)] text-ink-50 font-light leading-tight max-w-3xl mx-auto"
              style={{ fontSize: 'clamp(36px, 5vw, 60px)' }}
            >
              Making 5,000 years of Hindu wisdom accessible to every seeker
            </h2>
          </motion.div>
        </div>
      </section>

      <div className="section-divider" />

      {/* Advisory Board */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div variants={sectionReveal} initial="hidden" whileInView="visible" viewport={viewportConfig} className="text-center mb-12">
            <SectionLabel number="03" label="Advisory Board" />
            <h2
              className="font-[family-name:var(--font-cormorant)] text-ink-50 font-light leading-tight"
              style={{ fontSize: 'clamp(36px, 5vw, 60px)' }}
            >
              Religious Advisory Board
            </h2>
          </motion.div>
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportConfig} className="grid md:grid-cols-4 gap-4">
            {advisors.map((a) => (
              <motion.div key={a.name} variants={staggerItem}>
                <GlowCard className="p-6 text-center">
                  <div className="w-16 h-16 rounded-full bg-saffron-500/10 flex items-center justify-center mx-auto mb-4">
                    <span className="text-saffron-400 text-xl font-medium">{a.name.split(' ').map(n => n[0]).join('')}</span>
                  </div>
                  <h3 className="text-ink-50 font-medium mb-1">{a.name}</h3>
                  <p className="text-xs text-ink-500 mb-2">{a.role}</p>
                  <p className="text-xs text-saffron-400">{a.focus}</p>
                </GlowCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <div className="section-divider" />

      {/* Team */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div variants={sectionReveal} initial="hidden" whileInView="visible" viewport={viewportConfig} className="text-center mb-12">
            <SectionLabel number="04" label="Team" />
            <h2
              className="font-[family-name:var(--font-cormorant)] text-ink-50 font-light leading-tight"
              style={{ fontSize: 'clamp(36px, 5vw, 60px)' }}
            >
              The humans behind DevBhumi
            </h2>
          </motion.div>
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportConfig} className="grid md:grid-cols-3 gap-4">
            {team.map((t) => (
              <motion.div key={t.name} variants={staggerItem}>
                <GlowCard className="p-6">
                  <div className="w-12 h-12 rounded-full bg-saffron-500/10 flex items-center justify-center mb-4">
                    <span className="text-saffron-400 font-medium">{t.name.split(' ').map(n => n[0]).join('')}</span>
                  </div>
                  <h3 className="text-ink-50 font-medium mb-0.5">{t.name}</h3>
                  <p className="text-xs text-saffron-400 mb-3">{t.role}</p>
                  <p className="text-sm text-ink-400">{t.bio}</p>
                </GlowCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <div className="section-divider" />

      {/* Hiring */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div variants={sectionReveal} initial="hidden" whileInView="visible" viewport={viewportConfig} className="text-center mb-12">
            <SectionLabel number="05" label="Careers" />
            <h2
              className="font-[family-name:var(--font-cormorant)] text-ink-50 font-light leading-tight mb-4"
              style={{ fontSize: 'clamp(36px, 5vw, 60px)' }}
            >
              We&apos;re hiring
            </h2>
            <p className="text-ink-400 max-w-xl mx-auto">Join us in building the future of spiritual technology. We&apos;re a small, passionate team in Bengaluru with big ambitions.</p>
          </motion.div>
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportConfig} className="max-w-2xl mx-auto space-y-3">
            {openRoles.map((role) => (
              <motion.div key={role.title} variants={staggerItem}>
                <div className="bg-bg-elevated border border-border-subtle rounded-xl px-6 py-4 flex items-center justify-between hover:border-border-hover transition-colors cursor-pointer">
                  <div>
                    <h3 className="text-ink-200 font-medium">{role.title}</h3>
                    <p className="text-xs text-ink-500 mt-0.5">{role.location} &middot; {role.type}</p>
                  </div>
                  <span className="text-saffron-400 text-sm">&rarr;</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}
