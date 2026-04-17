'use client'

import { motion } from 'framer-motion'
import { pageVariants, sectionReveal, viewportConfig } from '@/lib/animations'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { Mail, MapPin, Clock } from 'lucide-react'

export default function ContactPage() {
  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit" className="pt-16">
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Left — form */}
            <motion.div variants={sectionReveal} initial="hidden" whileInView="visible" viewport={viewportConfig}>
              <SectionLabel number="01" label="Contact" />
              <h1
                className="font-[family-name:var(--font-cormorant)] text-ink-50 font-light leading-tight mb-8"
                style={{ fontSize: 'clamp(36px, 5vw, 60px)' }}
              >
                Get in touch
              </h1>

              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="text-xs text-ink-500 uppercase tracking-widest mb-2 block">Name</label>
                  <input
                    type="text"
                    className="w-full bg-bg-elevated border border-border-subtle rounded-xl px-4 py-3 text-sm text-ink-200 placeholder:text-ink-600 focus:outline-none focus:border-saffron-400/40 transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="text-xs text-ink-500 uppercase tracking-widest mb-2 block">Email</label>
                  <input
                    type="email"
                    className="w-full bg-bg-elevated border border-border-subtle rounded-xl px-4 py-3 text-sm text-ink-200 placeholder:text-ink-600 focus:outline-none focus:border-saffron-400/40 transition-colors"
                    placeholder="you@email.com"
                  />
                </div>
                <div>
                  <label className="text-xs text-ink-500 uppercase tracking-widest mb-2 block">Type</label>
                  <select className="w-full bg-bg-elevated border border-border-subtle rounded-xl px-4 py-3 text-sm text-ink-400 focus:outline-none focus:border-saffron-400/40 transition-colors">
                    <option>General Inquiry</option>
                    <option>Press</option>
                    <option>Investor</option>
                    <option>Partnership</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs text-ink-500 uppercase tracking-widest mb-2 block">Message</label>
                  <textarea
                    rows={5}
                    className="w-full bg-bg-elevated border border-border-subtle rounded-xl px-4 py-3 text-sm text-ink-200 placeholder:text-ink-600 focus:outline-none focus:border-saffron-400/40 transition-colors resize-none"
                    placeholder="Your message..."
                  />
                </div>
                <button
                  type="submit"
                  className="bg-gradient-to-r from-saffron-500 to-vermillion-500 text-white font-medium px-8 py-3 rounded-full hover:shadow-lg hover:shadow-saffron-500/20 transition-all duration-300"
                >
                  Send Message
                </button>
              </form>
            </motion.div>

            {/* Right — info */}
            <motion.div variants={sectionReveal} initial="hidden" whileInView="visible" viewport={viewportConfig} className="space-y-8 md:pt-32">
              <div className="flex gap-4">
                <Mail className="w-5 h-5 text-saffron-400 mt-0.5 shrink-0" />
                <div>
                  <h3 className="text-ink-200 font-medium mb-1">Email</h3>
                  <p className="text-sm text-ink-400">hello@ankitsoni.in</p>
                </div>
              </div>
              <div className="flex gap-4">
                <MapPin className="w-5 h-5 text-saffron-400 mt-0.5 shrink-0" />
                <div>
                  <h3 className="text-ink-200 font-medium mb-1">Location</h3>
                  <p className="text-sm text-ink-400">Bengaluru, Karnataka, India</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Clock className="w-5 h-5 text-saffron-400 mt-0.5 shrink-0" />
                <div>
                  <h3 className="text-ink-200 font-medium mb-1">Response Time</h3>
                  <p className="text-sm text-ink-400">We respond within 24 hours</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  )
}
