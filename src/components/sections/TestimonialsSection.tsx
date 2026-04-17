'use client'

import { motion } from 'framer-motion'
import { sectionReveal, viewportConfig } from '@/lib/animations'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Priya S.',
    location: 'Bengaluru',
    initials: 'PS',
    color: '#F38C31',
    quote: 'Asking Krishna about my career felt like talking to a wise friend. The Gita citations made it feel authentic, not like a chatbot.',
  },
  {
    name: 'Rahul M.',
    location: 'London',
    initials: 'RM',
    color: '#1D9E75',
    quote: 'As an NRI in London, DevBhumi helps me stay connected to my roots. My kids are learning Sanskrit through the bhajan module.',
  },
  {
    name: 'Sneha K.',
    location: 'Mumbai',
    initials: 'SK',
    color: '#7F77DD',
    quote: 'The panchang is more accurate than any app I\'ve used. The Muhurat feature saved my wedding planning.',
  },
  {
    name: 'Anjali T.',
    location: 'Delhi',
    initials: 'AT',
    color: '#E8593C',
    quote: 'Durga Maa\'s guidance during my divorce was like having a wise elder. I cried but felt held.',
  },
  {
    name: 'Vikram P.',
    location: 'Hyderabad',
    initials: 'VP',
    color: '#F5C12E',
    quote: 'The Hanuman Chalisa 40-day programme changed my mornings. Never missed a day in 6 months.',
  },
  {
    name: 'Dr. Ravi N.',
    location: 'Chennai',
    initials: 'RN',
    color: '#378ADD',
    quote: 'Finally an app that respects our tradition and doesn\'t dumb it down for a Western audience.',
  },
]

function TestimonialCard({ t }: { t: typeof testimonials[0] }) {
  return (
    <div className="bg-bg-elevated border border-border-subtle rounded-2xl p-6 min-w-[320px] max-w-[360px] shrink-0 mx-2">
      <div className="flex items-center gap-3 mb-4">
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium text-white"
          style={{ background: t.color }}
        >
          {t.initials}
        </div>
        <div>
          <p className="text-ink-200 text-sm font-medium">{t.name}</p>
          <p className="text-ink-500 text-xs">{t.location}</p>
        </div>
        <div className="ml-auto flex gap-0.5">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-3.5 h-3.5 fill-saffron-400 text-saffron-400" />
          ))}
        </div>
      </div>
      <p className="text-sm text-ink-300 leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
    </div>
  )
}

export function TestimonialsSection() {
  const doubled = [...testimonials, ...testimonials]

  return (
    <section className="py-20 md:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <motion.div
          variants={sectionReveal}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="text-center"
        >
          <SectionLabel number="08" label="Testimonials" />
          <h2
            className="font-[family-name:var(--font-cormorant)] text-ink-50 font-light leading-tight"
            style={{ fontSize: 'clamp(36px, 5vw, 60px)' }}
          >
            Loved by devotees
          </h2>
        </motion.div>
      </div>

      {/* Marquee row 1 */}
      <div className="pause-on-hover mb-4">
        <div className="flex animate-marquee">
          {doubled.map((t, i) => (
            <TestimonialCard key={`r1-${i}`} t={t} />
          ))}
        </div>
      </div>

      {/* Marquee row 2 (reversed) */}
      <div className="pause-on-hover">
        <div className="flex animate-marquee-reverse">
          {[...doubled].reverse().map((t, i) => (
            <TestimonialCard key={`r2-${i}`} t={t} />
          ))}
        </div>
      </div>
    </section>
  )
}
