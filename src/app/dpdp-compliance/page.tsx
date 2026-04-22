'use client'

import { motion } from 'framer-motion'
import { pageVariants, sectionReveal, staggerContainer, staggerItem, viewportConfig } from '@/lib/animations'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { GlowCard } from '@/components/ui/GlowCard'

const principles = [
  {
    icon: '📋',
    title: 'Lawful Processing',
    body: 'We process personal data only on the basis of your consent or for the purposes of fulfilling our contractual obligations to you, as required under Section 4 of the DPDP Act.',
  },
  {
    icon: '🎯',
    title: 'Purpose Limitation',
    body: 'Personal data is collected for specified, explicit, and legitimate purposes and is not processed in ways incompatible with those purposes.',
  },
  {
    icon: '🔒',
    title: 'Data Minimisation',
    body: 'We collect only the data that is necessary for the purpose for which it is processed. We do not ask for data we don\'t need.',
  },
  {
    icon: '✅',
    title: 'Accuracy',
    body: 'We take reasonable steps to ensure the personal data we hold is accurate and up to date. You can correct your data at any time via app settings.',
  },
  {
    icon: '⏱️',
    title: 'Storage Limitation',
    body: 'Data is not retained for longer than necessary. We have defined retention schedules for each data category, reviewed annually.',
  },
  {
    icon: '🛡️',
    title: 'Security',
    body: 'We implement appropriate technical and organisational security measures including encryption, access controls, and regular audits.',
  },
]

const rights = [
  {
    right: 'Right to Information',
    section: 'Section 11',
    description: 'You have the right to obtain a summary of your personal data we process, the identity of all Data Fiduciaries and Data Processors with whom it has been shared, and any other prescribed information.',
    action: 'Request via privacy@devbhumi.com',
  },
  {
    right: 'Right to Correction & Erasure',
    section: 'Section 12',
    description: 'You have the right to correct inaccurate or misleading data, complete incomplete data, and erase data no longer necessary for the purpose it was collected, subject to legal retention requirements.',
    action: 'Settings → Account → Manage Data',
  },
  {
    right: 'Right to Grievance Redressal',
    section: 'Section 13',
    description: 'If you have a grievance regarding processing of your personal data or the exercise of your rights, you may contact our Data Protection Officer. We will respond within 72 hours.',
    action: 'Contact DPO: dpo@devbhumi.com',
  },
  {
    right: 'Right to Nominate',
    section: 'Section 14',
    description: 'You may nominate another individual to exercise your rights under the DPDP Act in the event of your death or incapacity.',
    action: 'Request nomination form at privacy@devbhumi.com',
  },
]

const obligations = [
  { title: 'Consent Management', status: 'Implemented', detail: 'Granular consent notices with plain-language summaries before data collection begins.' },
  { title: 'Consent Withdrawal', status: 'Implemented', detail: 'Users can withdraw consent at any time via Settings → Privacy. Withdrawal is as easy as giving consent.' },
  { title: 'Data Localisation', status: 'Implemented', detail: 'All Indian user data is stored on AWS infrastructure located in the ap-south-1 (Mumbai) region.' },
  { title: 'Data Protection Impact Assessment', status: 'In Progress', detail: 'Annual DPIAs for high-risk processing activities involving AI inference on personal data.' },
  { title: 'Data Breach Notification', status: 'Implemented', detail: 'We will notify the Data Protection Board and affected users within 72 hours of becoming aware of a personal data breach.' },
  { title: 'Children\'s Data', status: 'Implemented', detail: 'We do not knowingly process data of children under 13. Age verification is implemented at registration.' },
]

export default function DPDPCompliancePage() {
  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit" className="pt-16">
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div variants={sectionReveal} initial="hidden" whileInView="visible" viewport={viewportConfig} className="max-w-2xl mb-16">
            <SectionLabel number="Legal" label="DPDP Compliance" />
            <h1
              className="font-[family-name:var(--font-cormorant)] text-ink-50 font-light leading-tight mb-4"
              style={{ fontSize: 'clamp(36px, 5vw, 60px)' }}
            >
              Digital Personal Data Protection Act, 2023
            </h1>
            <p className="text-sm text-ink-600 mb-4">Last reviewed: April 22, 2026</p>
            <p className="text-ink-400 leading-relaxed">
              DevBhumi Technologies Pvt. Ltd. is committed to full compliance with India&apos;s Digital Personal Data Protection (DPDP) Act, 2023. This page describes how we meet our obligations as a Data Fiduciary under the Act.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="section-divider" />

      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div variants={sectionReveal} initial="hidden" whileInView="visible" viewport={viewportConfig} className="text-center mb-12">
            <SectionLabel number="01" label="Principles" />
            <h2
              className="font-[family-name:var(--font-cormorant)] text-ink-50 font-light leading-tight"
              style={{ fontSize: 'clamp(32px, 4vw, 52px)' }}
            >
              How we handle your data
            </h2>
          </motion.div>
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportConfig} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {principles.map((p) => (
              <motion.div key={p.title} variants={staggerItem}>
                <GlowCard className="p-6 h-full">
                  <div className="text-3xl mb-4">{p.icon}</div>
                  <h3 className="text-ink-100 font-medium mb-2">{p.title}</h3>
                  <p className="text-sm text-ink-400 leading-relaxed">{p.body}</p>
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
            <SectionLabel number="02" label="Your Rights" />
            <h2
              className="font-[family-name:var(--font-cormorant)] text-ink-50 font-light leading-tight"
              style={{ fontSize: 'clamp(32px, 4vw, 52px)' }}
            >
              Your rights under the DPDP Act
            </h2>
          </motion.div>
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportConfig} className="max-w-4xl mx-auto space-y-4">
            {rights.map((r) => (
              <motion.div key={r.right} variants={staggerItem}>
                <div className="bg-bg-elevated border border-border-subtle rounded-xl p-6">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <h3 className="text-ink-100 font-medium">{r.right}</h3>
                    <span className="text-xs text-ink-600 bg-bg-base border border-border-subtle px-2 py-0.5 rounded-full">{r.section}</span>
                  </div>
                  <p className="text-sm text-ink-400 leading-relaxed mb-3">{r.description}</p>
                  <p className="text-xs text-saffron-400">{r.action}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <div className="section-divider" />

      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div variants={sectionReveal} initial="hidden" whileInView="visible" viewport={viewportConfig} className="text-center mb-12">
            <SectionLabel number="03" label="Compliance Status" />
            <h2
              className="font-[family-name:var(--font-cormorant)] text-ink-50 font-light leading-tight"
              style={{ fontSize: 'clamp(32px, 4vw, 52px)' }}
            >
              Our compliance obligations
            </h2>
          </motion.div>
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportConfig} className="max-w-4xl mx-auto space-y-3">
            {obligations.map((o) => (
              <motion.div key={o.title} variants={staggerItem}>
                <div className="bg-bg-elevated border border-border-subtle rounded-xl px-6 py-4 flex flex-col sm:flex-row sm:items-start gap-4">
                  <div className="flex-1">
                    <h3 className="text-ink-100 font-medium mb-1">{o.title}</h3>
                    <p className="text-sm text-ink-400">{o.detail}</p>
                  </div>
                  <span className={`text-xs px-3 py-1 rounded-full shrink-0 self-start ${o.status === 'Implemented' ? 'bg-green-500/10 text-green-400' : 'bg-saffron-500/10 text-saffron-400'}`}>
                    {o.status}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <div className="section-divider" />

      <section className="py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <motion.div variants={sectionReveal} initial="hidden" whileInView="visible" viewport={viewportConfig}>
            <SectionLabel number="04" label="Contact" />
            <h2
              className="font-[family-name:var(--font-cormorant)] text-ink-50 font-light leading-tight mb-6"
              style={{ fontSize: 'clamp(28px, 3.5vw, 46px)' }}
            >
              Data Protection Officer
            </h2>
            <p className="text-ink-400 mb-8">
              For any queries related to the DPDP Act, your rights, or data processing practices, contact our designated Data Protection Officer.
            </p>
            <div className="bg-bg-elevated border border-border-subtle rounded-xl p-6 inline-block text-left">
              <p className="text-ink-300 font-medium mb-1">Ankit Soni, Data Protection Officer</p>
              <p className="text-sm text-ink-500 mb-1">DevBhumi Technologies Pvt. Ltd.</p>
              <p className="text-sm text-ink-500 mb-1">Bengaluru, Karnataka 560001, India</p>
              <p className="text-sm mt-3">
                <a href="mailto:dpo@devbhumi.com" className="text-saffron-400 hover:underline">dpo@devbhumi.com</a>
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}
