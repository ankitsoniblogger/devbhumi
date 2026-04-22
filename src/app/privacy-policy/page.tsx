'use client'

import { motion } from 'framer-motion'
import { pageVariants, sectionReveal, viewportConfig } from '@/lib/animations'
import { SectionLabel } from '@/components/ui/SectionLabel'

const sections = [
  {
    title: 'Information We Collect',
    body: `We collect information you provide directly to us, such as when you create an account, use our services, or contact us for support. This includes:

• **Account data**: name, email address, phone number, and language preference
• **Usage data**: queries you submit, deities you interact with, features you use, and session duration
• **Device data**: device type, operating system, app version, and crash logs
• **Payment data**: subscription status (payment processing is handled by Razorpay/Stripe; we do not store card details)

We do not collect sensitive personal data such as biometric identifiers or financial account details beyond what is necessary for payment verification.`,
  },
  {
    title: 'How We Use Your Information',
    body: `We use the information we collect to:

• Provide, maintain, and improve our services
• Personalise your spiritual guidance experience based on your preferences and usage patterns
• Process transactions and send related notices
• Send you product updates, newsletters, and promotional communications (you may opt out at any time)
• Monitor and analyse usage trends to improve features
• Detect, investigate, and prevent fraudulent or illegal activity
• Comply with legal obligations under Indian law including the DPDP Act, 2023`,
  },
  {
    title: 'Data Sharing',
    body: `We do not sell your personal data. We may share it with:

• **Service providers**: cloud infrastructure (AWS), analytics (PostHog), customer support tools — bound by data processing agreements
• **AI model providers**: queries are processed by our AI infrastructure; we do not share personally identifiable metadata with third-party model providers beyond what is technically necessary
• **Legal authorities**: when required by law, court order, or governmental regulation
• **Business transfers**: in connection with any merger, sale, or acquisition of DevBhumi — users will be notified before data is transferred to a new controller`,
  },
  {
    title: 'Data Retention',
    body: `We retain your personal data for as long as your account is active or as needed to provide services. If you delete your account:

• Account and profile data is deleted within 30 days
• Anonymised, aggregated usage statistics may be retained indefinitely
• Backup copies may persist for up to 90 days before permanent deletion

You may request deletion at any time by writing to privacy@devbhumi.com.`,
  },
  {
    title: 'Your Rights',
    body: `Under the Digital Personal Data Protection Act, 2023 (DPDP Act) and applicable law, you have the right to:

• **Access**: request a copy of the personal data we hold about you
• **Correction**: update inaccurate or incomplete data
• **Erasure**: request deletion of your data, subject to legal retention requirements
• **Withdraw consent**: opt out of non-essential data processing at any time
• **Nominate**: designate a nominee to exercise rights on your behalf in the event of death or incapacity
• **Grievance redressal**: contact our Data Protection Officer at dpo@devbhumi.com

We will respond to verifiable requests within 72 hours and resolve them within 30 days.`,
  },
  {
    title: 'Security',
    body: `We implement industry-standard security measures including AES-256 encryption at rest, TLS 1.3 in transit, role-based access controls, and regular third-party security audits. No method of transmission over the internet is 100% secure; we will notify you promptly in the event of a breach that affects your data.`,
  },
  {
    title: 'Children\'s Privacy',
    body: `DevBhumi is not directed to children under the age of 13. We do not knowingly collect personal data from children under 13. If you believe we have collected data from a child, please contact us at privacy@devbhumi.com and we will delete it promptly.`,
  },
  {
    title: 'Changes to This Policy',
    body: `We may update this Privacy Policy from time to time. We will notify you of material changes via in-app notification or email at least 14 days before they take effect. Continued use of DevBhumi after the effective date constitutes acceptance of the revised policy.`,
  },
]

export default function PrivacyPolicyPage() {
  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit" className="pt-16">
      <section className="py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div variants={sectionReveal} initial="hidden" whileInView="visible" viewport={viewportConfig} className="mb-12">
            <SectionLabel number="Legal" label="Privacy Policy" />
            <h1
              className="font-[family-name:var(--font-cormorant)] text-ink-50 font-light leading-tight mb-4"
              style={{ fontSize: 'clamp(36px, 5vw, 60px)' }}
            >
              Privacy Policy
            </h1>
            <p className="text-sm text-ink-600">Last updated: April 22, 2026 &middot; Effective: April 22, 2026</p>
            <p className="text-ink-400 mt-4 leading-relaxed">
              DevBhumi Technologies Pvt. Ltd. (&ldquo;DevBhumi&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo;, &ldquo;us&rdquo;) is committed to protecting your personal data. This policy explains how we collect, use, share, and protect information about you when you use the DevBhumi app and website.
            </p>
          </motion.div>

          <div className="space-y-10">
            {sections.map((s, i) => (
              <motion.div
                key={s.title}
                variants={sectionReveal}
                initial="hidden"
                whileInView="visible"
                viewport={viewportConfig}
                className="border-t border-border-subtle pt-8"
              >
                <h2 className="text-ink-100 font-medium text-lg mb-4">
                  {i + 1}. {s.title}
                </h2>
                <div className="text-ink-400 text-sm leading-[1.8] whitespace-pre-line">
                  {s.body.split('\n').map((line, j) => {
                    if (line.startsWith('• **')) {
                      const match = line.match(/^• \*\*(.+?)\*\*: (.+)$/)
                      if (match) {
                        return (
                          <p key={j} className="mb-2 pl-4">
                            <span className="text-ink-200 font-medium">{match[1]}</span>
                            <span>: {match[2]}</span>
                          </p>
                        )
                      }
                    }
                    if (line.startsWith('• ')) {
                      return <p key={j} className="mb-2 pl-4">{line}</p>
                    }
                    if (line.trim() === '') return <br key={j} />
                    return <p key={j} className="mb-3">{line}</p>
                  })}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            variants={sectionReveal}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="mt-16 border-t border-border-subtle pt-8 text-sm text-ink-500"
          >
            <p className="mb-2">DevBhumi Technologies Pvt. Ltd.</p>
            <p className="mb-2">Bengaluru, Karnataka, India</p>
            <p>Contact: <a href="mailto:privacy@devbhumi.com" className="text-saffron-400 hover:underline">privacy@devbhumi.com</a></p>
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}
