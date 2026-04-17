'use client'

import { motion } from 'framer-motion'
import { sectionReveal, viewportConfig } from '@/lib/animations'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { AnimatedCounter } from '@/components/ui/AnimatedCounter'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const categories = [
  {
    id: 'vedas',
    title: 'The Four Vedas',
    count: 4,
    texts: ['Rigveda', 'Samaveda', 'Yajurveda', 'Atharvaveda'],
  },
  {
    id: 'upanishads',
    title: '108 Upanishads',
    count: 108,
    texts: ['10 Principal Upanishads', 'Yoga Upanishads', 'Shakta Upanishads', 'Shaiva Upanishads', 'Vaishnava Upanishads', '+ 98 by tradition'],
  },
  {
    id: 'puranas',
    title: '18 Maha Puranas',
    count: 18,
    texts: ['Vishnu Purana', 'Bhagavata Purana', 'Shiva Purana', 'Devi Bhagavata', 'Skanda Purana', 'Garuda Purana', '+ 12 more'],
  },
  {
    id: 'itihasas',
    title: 'Itihasas',
    count: 3,
    texts: ['Mahabharata (100K shlokas)', 'Bhagavad Gita (700 verses)', 'Ramayana (24K verses)'],
  },
  {
    id: 'darshanas',
    title: '6 Darshanas',
    count: 6,
    texts: ['Nyaya', 'Vaisheshika', 'Samkhya', 'Yoga Sutras', 'Mimamsa', 'Vedanta'],
  },
  {
    id: 'devotional',
    title: 'Devotional Literature',
    count: 50,
    texts: ['Hanuman Chalisa', 'Divya Prabandham', 'Thirukkural', 'Bhakti poetry', 'Stotra literature'],
  },
]

export function KnowledgeBaseSection() {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <motion.div
            variants={sectionReveal}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            <SectionLabel number="05" label="Knowledge Base" />
            <h2
              className="font-[family-name:var(--font-cormorant)] text-ink-50 font-light leading-tight mb-6"
              style={{ fontSize: 'clamp(36px, 5vw, 60px)' }}
            >
              The Vedic corpus, digitized
            </h2>
            <p className="text-ink-400 leading-[1.75] mb-8">
              Our knowledge base spans the full breadth of Hindu sacred literature — from the earliest Vedic hymns to medieval devotional poetry. Every AI response is grounded in this corpus.
            </p>
            <div className="bg-bg-elevated border border-border-subtle rounded-2xl p-8 text-center">
              <p className="font-[family-name:var(--font-cormorant)] text-6xl md:text-7xl text-saffron-400 font-light">
                <AnimatedCounter value={1000} suffix="+" />
              </p>
              <p className="text-ink-500 text-sm mt-2">Sacred Texts in Our Corpus</p>
            </div>
          </motion.div>

          {/* Right — accordion */}
          <motion.div
            variants={sectionReveal}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            <Accordion className="space-y-2">
              {categories.map((cat) => (
                <AccordionItem
                  key={cat.id}
                  value={cat.id}
                  className="bg-bg-elevated border border-border-subtle rounded-xl px-5 data-[panel-open]:border-border-hover transition-colors"
                >
                  <AccordionTrigger className="text-ink-50 font-medium text-sm hover:no-underline py-4">
                    <div className="flex items-center gap-3">
                      {cat.title}
                      <span className="text-[11px] text-saffron-400 bg-saffron-500/10 px-2 py-0.5 rounded-full">
                        {cat.count}
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-4">
                    <div className="flex flex-wrap gap-2">
                      {cat.texts.map((t) => (
                        <span key={t} className="text-xs text-ink-400 bg-bg-overlay border border-border-subtle px-3 py-1.5 rounded-lg">
                          {t}
                        </span>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
