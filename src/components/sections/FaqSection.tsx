'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { sectionReveal, viewportConfig } from '@/lib/animations'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { faqs, type FAQ } from '@/data/faqs'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const categories = ['All', 'Product', 'Privacy', 'Pricing'] as const

export function FaqSection() {
  const [filter, setFilter] = useState<string>('All')

  const filtered: FAQ[] = filter === 'All' ? faqs : faqs.filter((f) => f.category === filter)

  return (
    <section className="py-20 md:py-28">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          variants={sectionReveal}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="text-center mb-12"
        >
          <SectionLabel number="10" label="FAQ" />
          <h2
            className="font-[family-name:var(--font-cormorant)] text-ink-50 font-light leading-tight mb-8"
            style={{ fontSize: 'clamp(36px, 5vw, 60px)' }}
          >
            Common questions
          </h2>

          <div className="flex justify-center gap-2 mb-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`text-sm px-4 py-2 rounded-full transition-all duration-300 ${
                  filter === cat
                    ? 'bg-saffron-500/15 text-saffron-400'
                    : 'text-ink-500 hover:text-ink-300'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        <Accordion className="space-y-2">
          {filtered.map((faq) => (
            <AccordionItem
              key={faq.id}
              value={faq.id}
              className="bg-bg-elevated border border-border-subtle rounded-xl px-5 data-[panel-open]:border-border-hover transition-colors"
            >
              <AccordionTrigger className="text-ink-200 font-medium text-sm hover:no-underline py-4 text-left">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-ink-400 leading-relaxed pb-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
