'use client'

import { motion } from 'framer-motion'
import { sectionReveal, staggerContainer, staggerItem, viewportConfig } from '@/lib/animations'
import { SectionLabel } from '@/components/ui/SectionLabel'

const steps = [
  { num: '01', title: 'Choose Your Deity', desc: '8 companions, select by tradition and spiritual need.' },
  { num: '02', title: 'Ask Anything', desc: 'Life, dharma, rituals — in any of 8 Indian languages.' },
  { num: '03', title: 'Receive Guidance', desc: 'Scripture-grounded, cited response with authentic wisdom.' },
]

export function HowItWorksSection() {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          variants={sectionReveal}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="text-center mb-16"
        >
          <SectionLabel number="02" label="How It Works" />
          <h2
            className="font-[family-name:var(--font-cormorant)] text-ink-50 font-light leading-tight"
            style={{ fontSize: 'clamp(36px, 5vw, 60px)' }}
          >
            Three simple steps
          </h2>
        </motion.div>

        {/* Steps */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid md:grid-cols-3 gap-8 mb-16"
        >
          {steps.map((step, i) => (
            <motion.div key={step.num} variants={staggerItem} className="relative text-center">
              <span className="font-[family-name:var(--font-cormorant)] text-5xl text-saffron-400/30 font-light mb-4 block">
                {step.num}
              </span>
              <h3 className="text-ink-50 font-medium text-lg mb-2">{step.title}</h3>
              <p className="text-sm text-ink-400">{step.desc}</p>
              {i < 2 && (
                <div className="hidden md:block absolute top-8 -right-4 w-8 h-px bg-gradient-to-r from-saffron-400/30 to-transparent" />
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Chat mockup */}
        <motion.div
          variants={sectionReveal}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="max-w-2xl mx-auto"
        >
          <div
            className="bg-bg-elevated border border-border-subtle rounded-2xl overflow-hidden"
            style={{ boxShadow: 'var(--glow-saffron)' }}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-[#1D9E75]/20 to-[#1D9E75]/5 border-b border-border-subtle px-6 py-4 flex items-center gap-3">
              <span className="text-2xl">🦚</span>
              <div>
                <p className="text-ink-50 font-medium text-sm">Lord Krishna</p>
                <p className="text-[11px] text-ink-500">Bhagavad Gita &middot; Bhagavata Purana</p>
              </div>
            </div>

            {/* Messages */}
            <div className="p-6 space-y-4">
              {/* User message */}
              <div className="flex justify-end">
                <div className="bg-saffron-500/10 border border-saffron-500/20 rounded-2xl rounded-tr-sm px-4 py-3 max-w-[85%]">
                  <p className="text-sm text-ink-200">
                    I&apos;m scared to quit my job and start my own business.
                  </p>
                </div>
              </div>

              {/* Krishna reply */}
              <div className="flex justify-start">
                <div className="bg-bg-overlay border border-border-subtle rounded-2xl rounded-tl-sm px-4 py-3 max-w-[85%]">
                  <p className="text-sm text-ink-300 leading-relaxed mb-3">
                    Dear one, the fear you feel is natural, but remember what I told Arjuna on the battlefield of Kurukshetra:
                  </p>
                  <blockquote className="border-l-2 border-saffron-400/40 pl-3 mb-3">
                    <p className="text-sm text-ink-200 italic font-[family-name:var(--font-cormorant)] text-base">
                      &ldquo;You have the right to perform your duty, but you are not entitled to the fruits of your actions.&rdquo;
                    </p>
                    <p className="text-[11px] text-saffron-400 mt-1">— Bhagavad Gita 2.47</p>
                  </blockquote>
                  <p className="text-sm text-ink-300 leading-relaxed">
                    Focus on your dharma — the work that aligns with your true nature. The outcome is not in your hands, but the courage to act is. Take the step with faith.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
