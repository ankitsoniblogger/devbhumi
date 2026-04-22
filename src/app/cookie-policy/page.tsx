'use client'

import { motion } from 'framer-motion'
import { pageVariants, sectionReveal, viewportConfig } from '@/lib/animations'
import { SectionLabel } from '@/components/ui/SectionLabel'

const cookieTypes = [
  {
    type: 'Strictly Necessary',
    canOptOut: false,
    description: 'Required for the service to function. These cannot be disabled.',
    examples: ['Authentication tokens', 'Session identifiers', 'Security tokens (CSRF)', 'User preference cache'],
  },
  {
    type: 'Functional',
    canOptOut: true,
    description: 'Enable enhanced features like remembering your language preference and deity selection.',
    examples: ['Language preference', 'Last viewed deity', 'Notification settings', 'Theme preference'],
  },
  {
    type: 'Analytics',
    canOptOut: true,
    description: 'Help us understand how users interact with DevBhumi so we can improve the experience. We use PostHog with IP anonymisation.',
    examples: ['Page views & session duration', 'Feature engagement', 'Crash reports', 'Funnel analysis'],
  },
  {
    type: 'Marketing',
    canOptOut: true,
    description: 'Used to show relevant advertisements and measure campaign effectiveness. We use these only in limited circumstances.',
    examples: ['Ad frequency capping', 'Conversion tracking', 'Retargeting pixels'],
  },
]

export default function CookiePolicyPage() {
  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit" className="pt-16">
      <section className="py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div variants={sectionReveal} initial="hidden" whileInView="visible" viewport={viewportConfig} className="mb-12">
            <SectionLabel number="Legal" label="Cookie Policy" />
            <h1
              className="font-[family-name:var(--font-cormorant)] text-ink-50 font-light leading-tight mb-4"
              style={{ fontSize: 'clamp(36px, 5vw, 60px)' }}
            >
              Cookie Policy
            </h1>
            <p className="text-sm text-ink-600">Last updated: April 22, 2026</p>
            <p className="text-ink-400 mt-4 leading-relaxed">
              This policy explains what cookies and similar tracking technologies DevBhumi uses, why we use them, and how you can control them.
            </p>
          </motion.div>

          <motion.div variants={sectionReveal} initial="hidden" whileInView="visible" viewport={viewportConfig} className="border-t border-border-subtle pt-8 mb-10">
            <h2 className="text-ink-100 font-medium text-lg mb-4">What are cookies?</h2>
            <p className="text-sm text-ink-400 leading-[1.8]">
              Cookies are small text files stored on your device when you visit a website or use an app. They help services remember you between visits, keep you logged in, and understand how you use the product. On mobile, we use similar technologies such as local storage and device identifiers.
            </p>
          </motion.div>

          <div className="space-y-6 mb-12">
            {cookieTypes.map((ct, i) => (
              <motion.div
                key={ct.type}
                variants={sectionReveal}
                initial="hidden"
                whileInView="visible"
                viewport={viewportConfig}
                className="bg-bg-elevated border border-border-subtle rounded-xl p-6"
              >
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <h3 className="text-ink-100 font-medium">{ct.type}</h3>
                  <span className={`text-xs px-2.5 py-1 rounded-full ${ct.canOptOut ? 'bg-saffron-500/10 text-saffron-400' : 'bg-green-500/10 text-green-400'}`}>
                    {ct.canOptOut ? 'Optional' : 'Always active'}
                  </span>
                </div>
                <p className="text-sm text-ink-400 leading-relaxed mb-3">{ct.description}</p>
                <ul className="grid sm:grid-cols-2 gap-1.5">
                  {ct.examples.map((ex) => (
                    <li key={ex} className="text-xs text-ink-600 flex items-center gap-2">
                      <span className="text-saffron-500 text-[10px]">●</span> {ex}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <motion.div variants={sectionReveal} initial="hidden" whileInView="visible" viewport={viewportConfig} className="border-t border-border-subtle pt-8 mb-10">
            <h2 className="text-ink-100 font-medium text-lg mb-4">How to manage cookies</h2>
            <div className="text-sm text-ink-400 leading-[1.8] space-y-3">
              <p>You can manage your cookie preferences at any time via the <span className="text-ink-200">Settings &rarr; Privacy</span> menu in the DevBhumi app.</p>
              <p>For browser cookies on our website, you can also use your browser&apos;s built-in controls. Note that disabling strictly necessary cookies will prevent you from using core features of DevBhumi.</p>
              <p>To opt out of analytics tracking across the web, visit <span className="text-saffron-400">posthog.com/privacy</span>.</p>
            </div>
          </motion.div>

          <motion.div variants={sectionReveal} initial="hidden" whileInView="visible" viewport={viewportConfig} className="border-t border-border-subtle pt-8 mb-10">
            <h2 className="text-ink-100 font-medium text-lg mb-4">Third-party cookies</h2>
            <p className="text-sm text-ink-400 leading-[1.8]">
              Some third-party services integrated into DevBhumi may set their own cookies. These include Razorpay (payment), PostHog (analytics), and YouTube (embedded content). We do not control these third-party cookies; please refer to their respective privacy policies.
            </p>
          </motion.div>

          <motion.div
            variants={sectionReveal}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="mt-4 border-t border-border-subtle pt-8 text-sm text-ink-500"
          >
            <p className="mb-2">Questions? Contact us at <a href="mailto:privacy@devbhumi.com" className="text-saffron-400 hover:underline">privacy@devbhumi.com</a></p>
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}
