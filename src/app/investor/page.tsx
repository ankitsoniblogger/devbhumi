'use client'

import { motion } from 'framer-motion'
import {
  pageVariants,
  sectionReveal,
  staggerContainer,
  staggerItem,
  viewportConfig,
} from '@/lib/animations'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { GlowCard } from '@/components/ui/GlowCard'
import { AnimatedCounter } from '@/components/ui/AnimatedCounter'
import {
  TrendingUp,
  Users,
  Globe,
  BookOpen,
  Target,
  DollarSign,
  Smartphone,
  Brain,
  BarChart3,
  Shield,
  Zap,
  ArrowRight,
  Check,
  Download,
} from 'lucide-react'

/* ─── DATA ─── */

const marketStats = [
  { icon: DollarSign, value: '$64B', label: 'Faith Economy in India', detail: 'Growing 15.4% YoY' },
  { icon: Users, value: '1.1B', label: 'Hindus Worldwide', detail: '80% of India + global diaspora' },
  { icon: Smartphone, value: '750M', label: 'Smartphone Users in India', detail: '85% Android, mobile-first' },
  { icon: TrendingUp, value: '15.4%', label: 'YoY Market Growth', detail: 'Outpacing most verticals' },
]

const problemPoints = [
  'Sacred texts span 1,000+ volumes across Sanskrit, Pali, and regional languages — inaccessible to 99% of devotees',
  'Existing apps are transactional (puja booking, e-commerce) — no authentic spiritual guidance layer',
  'The guru-shishya tradition is fading in urban India; 400M millennials have no regular spiritual mentor',
  'Hindu diaspora (30M+ globally) lack contextual spiritual support in their language and timezone',
]

const solutionPillars = [
  { icon: Brain, title: 'Deity AI', desc: '8 deity companions powered by RAG over 1,000+ sacred texts. Authentic, cited, in-character responses.' },
  { icon: BookOpen, title: 'Living Calendar', desc: 'Real-time panchang, 200+ festivals, muhurat finder, 16 samskaras, personalized daily rituals.' },
  { icon: Zap, title: 'Sadhana Suite', desc: '500+ yoga asanas, 12 pranayama techniques, 10,000+ bhajans, mantra japa counter, meditation guides.' },
  { icon: Globe, title: '8 Languages', desc: 'Hindi, English, Tamil, Telugu, Bengali, Gujarati, Kannada, Marathi — covering 95% of Hindu speakers.' },
]

const competitorGrid = [
  { name: 'SriMandir', focus: 'Puja booking / e-commerce', ai: false, texts: false, languages: '2', score: 'Transactional' },
  { name: 'GitaGPT', focus: 'Single text (Gita only)', ai: true, texts: false, languages: '1', score: 'Narrow' },
  { name: 'Drik Panchang', focus: 'Calendar only', ai: false, texts: false, languages: '3', score: 'Utility' },
  { name: 'DevBhumi', focus: 'Full spiritual platform', ai: true, texts: true, languages: '8', score: 'Comprehensive' },
]

const revenueStreams = [
  { source: 'Subscriptions (Bhakti+ & Guru)', pct: '60%', detail: '₹199–₹1,499/yr, 5-8% conversion target' },
  { source: 'Temple SaaS Platform', pct: '15%', detail: 'Digital darshan, donation management, booking' },
  { source: 'E-commerce (Puja Samagri)', pct: '10%', detail: 'Curated ritual kits, marketplace commissions' },
  { source: 'Pandit Booking Marketplace', pct: '10%', detail: 'Commission on bookings, priority listings' },
  { source: 'Content Licensing & API', pct: '5%', detail: 'B2B API for developers, media syndication' },
]

const milestones = [
  { quarter: 'Q1 2025', items: ['MVP launch (Android)', '8 deity AI companions', 'Hindi + English', '50K downloads'] },
  { quarter: 'Q2 2025', items: ['iOS launch', 'Panchang + festival engine', 'Tamil + Telugu', '200K downloads'] },
  { quarter: 'Q3 2025', items: ['Bhajan library (5K tracks)', 'Yoga module v1', '₹15L MRR', 'Temple partnerships (10)'] },
  { quarter: 'Q4 2025', items: ['8 languages fully live', 'Astrology module', '500K downloads', '₹50L MRR'] },
  { quarter: 'H1 2026', items: ['Temple SaaS platform', 'E-commerce launch', '1M downloads', '₹1Cr MRR'] },
  { quarter: 'H2 2026', items: ['Series A raise', 'Multi-faith expansion', '2M MAU', '₹3Cr MRR'] },
]

const teamMembers = [
  { name: 'Ankit Soni', role: 'CEO & Founder', bg: 'Product & growth leadership. Previously fintech. IIM Ahmedabad.' },
  { name: 'Priya Patel', role: 'CTO', bg: '10 years NLP/AI. Ex-Google. IIT Bombay. Published researcher in multilingual LLMs.' },
  { name: 'Arjun Menon', role: 'Head of Content', bg: 'Sanskrit scholar (MA, BHU). 5 years ed-tech. Digitized 200+ texts.' },
  { name: 'Kavya Reddy', role: 'Head of Design', bg: 'Design systems architect. Ex-Swiggy. NID Ahmedabad.' },
]

const fundingUse = [
  { area: 'Engineering & AI', pct: 40, detail: 'LLM fine-tuning, RAG infrastructure, mobile development' },
  { area: 'Content & Theology', pct: 20, detail: 'Sacred text digitization, advisory board, translations' },
  { area: 'Growth & Marketing', pct: 25, detail: 'User acquisition, temple partnerships, community building' },
  { area: 'Operations', pct: 15, detail: 'Team expansion, legal, compliance, infrastructure' },
]

const investorLogos = ['Blume Ventures', 'Matrix Partners India', 'Elevation Capital', 'Kalaari Capital', 'India Quotient', 'Lightspeed India']

/* ─── PAGE ─── */

export default function InvestorPage() {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="pt-16"
    >
      {/* ── HERO ── */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{ background: 'radial-gradient(ellipse at 30% 20%, rgba(243,140,49,0.06) 0%, transparent 60%)' }}
        />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="max-w-4xl">
            <motion.div variants={staggerItem} className="inline-flex items-center gap-2.5 border border-border-subtle bg-bg-overlay rounded-full px-4 py-2 mb-6">
              <span className="w-2 h-2 rounded-full bg-saffron-400 animate-pulse" />
              <span className="text-xs text-saffron-400 tracking-[0.12em] uppercase font-medium">
                Seed Round &middot; Raising ₹5 Crore
              </span>
            </motion.div>

            <motion.h1
              variants={staggerItem}
              className="font-[family-name:var(--font-cormorant)] text-ink-50 font-light leading-[1.05] mb-6"
              style={{ fontSize: 'clamp(40px, 7vw, 80px)' }}
            >
              The AI layer for{' '}
              <em className="text-saffron-400 font-medium not-italic" style={{ textShadow: 'var(--glow-text)' }}>
                Hindu spirituality
              </em>
            </motion.h1>

            <motion.p variants={staggerItem} className="text-ink-300 text-lg md:text-xl leading-[1.75] max-w-2xl mb-8">
              DevBhumi is building the world&apos;s first comprehensive AI-powered spiritual companion for 1.1 billion Hindus — grounded in 1,000+ sacred texts, available in 8 Indian languages.
            </motion.p>

            <motion.div variants={staggerItem} className="flex flex-wrap gap-4">
              <a
                href="#ask"
                className="flex items-center gap-2 bg-gradient-to-r from-saffron-500 to-vermillion-500 text-white font-medium px-8 py-3.5 rounded-full hover:shadow-lg hover:shadow-saffron-500/20 transition-all duration-300"
              >
                <Download className="w-4 h-4" />
                Download Deck (PDF)
              </a>
              <a
                href="#ask"
                className="flex items-center gap-2 border border-border-default text-saffron-400 font-medium px-8 py-3.5 rounded-full hover:bg-saffron-500/10 transition-all duration-300"
              >
                Schedule a Call
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ── MARKET OPPORTUNITY ── */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div variants={sectionReveal} initial="hidden" whileInView="visible" viewport={viewportConfig} className="text-center mb-16">
            <SectionLabel number="01" label="Market Opportunity" />
            <h2 className="font-[family-name:var(--font-cormorant)] text-ink-50 font-light leading-tight mb-4" style={{ fontSize: 'clamp(36px, 5vw, 60px)' }}>
              A $64 billion market, untouched by technology
            </h2>
            <p className="text-ink-400 max-w-2xl mx-auto leading-[1.75]">
              India&apos;s faith economy is one of the largest consumer markets in the world — yet it has near-zero digital penetration for authentic spiritual services.
            </p>
          </motion.div>

          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportConfig} className="grid md:grid-cols-4 gap-4 mb-16">
            {marketStats.map((s) => (
              <motion.div key={s.label} variants={staggerItem}>
                <GlowCard className="p-6 text-center h-full">
                  <s.icon className="w-6 h-6 text-saffron-400 mx-auto mb-3" />
                  <p className="font-[family-name:var(--font-cormorant)] text-4xl text-saffron-400 font-light mb-1">{s.value}</p>
                  <p className="text-sm text-ink-200 font-medium mb-1">{s.label}</p>
                  <p className="text-xs text-ink-500">{s.detail}</p>
                </GlowCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ── THE PROBLEM ── */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div variants={sectionReveal} initial="hidden" whileInView="visible" viewport={viewportConfig}>
              <SectionLabel number="02" label="The Problem" />
              <h2 className="font-[family-name:var(--font-cormorant)] text-ink-50 font-light leading-tight mb-6" style={{ fontSize: 'clamp(36px, 5vw, 60px)' }}>
                5,000 years of wisdom, locked behind barriers
              </h2>
              <p className="text-ink-400 leading-[1.75]">
                Hindu spiritual knowledge is vast, profound, and deeply personal — but the barriers to accessing it have never been higher for modern devotees.
              </p>
            </motion.div>
            <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportConfig} className="space-y-4">
              {problemPoints.map((point, i) => (
                <motion.div key={i} variants={staggerItem} className="flex gap-4 items-start">
                  <span className="w-8 h-8 rounded-full bg-vermillion-500/15 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-vermillion-400 text-sm font-medium">{i + 1}</span>
                  </span>
                  <p className="text-sm text-ink-300 leading-relaxed">{point}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ── THE SOLUTION ── */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div variants={sectionReveal} initial="hidden" whileInView="visible" viewport={viewportConfig} className="text-center mb-16">
            <SectionLabel number="03" label="The Solution" />
            <h2 className="font-[family-name:var(--font-cormorant)] text-ink-50 font-light leading-tight mb-4" style={{ fontSize: 'clamp(36px, 5vw, 60px)' }}>
              DevBhumi: Your AI spiritual companion
            </h2>
            <p className="text-ink-400 max-w-2xl mx-auto">
              A mobile-first platform that makes Hindu wisdom as accessible as a conversation — authentic, personal, and available 24/7.
            </p>
          </motion.div>

          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportConfig} className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {solutionPillars.map((p) => (
              <motion.div key={p.title} variants={staggerItem}>
                <GlowCard className="p-6 h-full">
                  <p.icon className="w-8 h-8 text-saffron-400 mb-4" />
                  <h3 className="text-ink-50 font-medium text-lg mb-2">{p.title}</h3>
                  <p className="text-sm text-ink-400 leading-relaxed">{p.desc}</p>
                </GlowCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ── TECHNOLOGY & MOAT ── */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div variants={sectionReveal} initial="hidden" whileInView="visible" viewport={viewportConfig}>
              <SectionLabel number="04" label="Technology Moat" />
              <h2 className="font-[family-name:var(--font-cormorant)] text-ink-50 font-light leading-tight mb-6" style={{ fontSize: 'clamp(36px, 5vw, 60px)' }}>
                Defensible AI infrastructure
              </h2>
              <p className="text-ink-400 leading-[1.75] mb-6">
                Our competitive advantage isn&apos;t just the app — it&apos;s the proprietary dataset and fine-tuned models that power it.
              </p>
            </motion.div>
            <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportConfig} className="space-y-4">
              {[
                { icon: BookOpen, title: 'Proprietary Vedic Corpus', desc: '1,000+ sacred texts digitized, structured, and indexed for RAG — the largest such dataset in existence.' },
                { icon: Brain, title: 'Fine-Tuned LLMs', desc: 'Custom models trained on Hindu theological discourse with persona-specific fine-tuning for 8 deity characters.' },
                { icon: Shield, title: 'Theological Guardrails', desc: 'AI safety layer reviewed by Religious Advisory Board ensuring doctrinal accuracy and cultural sensitivity.' },
                { icon: Globe, title: 'Multilingual NLP Pipeline', desc: 'Custom translation and transliteration models for 8 Indian languages with code-switching support.' },
              ].map((item) => (
                <motion.div key={item.title} variants={staggerItem} className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-saffron-500/10 flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-saffron-400" />
                  </div>
                  <div>
                    <h3 className="text-ink-200 font-medium mb-1">{item.title}</h3>
                    <p className="text-sm text-ink-400 leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ── COMPETITIVE LANDSCAPE ── */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div variants={sectionReveal} initial="hidden" whileInView="visible" viewport={viewportConfig} className="text-center mb-12">
            <SectionLabel number="05" label="Competition" />
            <h2 className="font-[family-name:var(--font-cormorant)] text-ink-50 font-light leading-tight" style={{ fontSize: 'clamp(36px, 5vw, 60px)' }}>
              No one owns this category — yet
            </h2>
          </motion.div>

          <motion.div variants={sectionReveal} initial="hidden" whileInView="visible" viewport={viewportConfig} className="overflow-x-auto">
            <table className="w-full min-w-[600px]">
              <thead>
                <tr className="border-b border-border-subtle">
                  <th className="text-left py-3 px-4 text-xs text-ink-500 uppercase tracking-widest font-medium">Platform</th>
                  <th className="text-left py-3 px-4 text-xs text-ink-500 uppercase tracking-widest font-medium">Focus</th>
                  <th className="text-center py-3 px-4 text-xs text-ink-500 uppercase tracking-widest font-medium">AI</th>
                  <th className="text-center py-3 px-4 text-xs text-ink-500 uppercase tracking-widest font-medium">1,000+ Texts</th>
                  <th className="text-center py-3 px-4 text-xs text-ink-500 uppercase tracking-widest font-medium">Languages</th>
                  <th className="text-left py-3 px-4 text-xs text-ink-500 uppercase tracking-widest font-medium">Category</th>
                </tr>
              </thead>
              <tbody>
                {competitorGrid.map((c) => (
                  <tr
                    key={c.name}
                    className={`border-b border-border-subtle ${c.name === 'DevBhumi' ? 'bg-saffron-500/5' : ''}`}
                  >
                    <td className={`py-4 px-4 text-sm font-medium ${c.name === 'DevBhumi' ? 'text-saffron-400' : 'text-ink-200'}`}>
                      {c.name}
                      {c.name === 'DevBhumi' && <span className="ml-2 text-[10px] bg-saffron-500 text-white px-2 py-0.5 rounded-full">Us</span>}
                    </td>
                    <td className="py-4 px-4 text-sm text-ink-400">{c.focus}</td>
                    <td className="py-4 px-4 text-center">
                      {c.ai ? <Check className="w-4 h-4 text-saffron-400 mx-auto" /> : <span className="text-ink-600">—</span>}
                    </td>
                    <td className="py-4 px-4 text-center">
                      {c.texts ? <Check className="w-4 h-4 text-saffron-400 mx-auto" /> : <span className="text-ink-600">—</span>}
                    </td>
                    <td className="py-4 px-4 text-center text-sm text-ink-300">{c.languages}</td>
                    <td className="py-4 px-4 text-sm text-ink-400">{c.score}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ── BUSINESS MODEL ── */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div variants={sectionReveal} initial="hidden" whileInView="visible" viewport={viewportConfig} className="text-center mb-16">
            <SectionLabel number="06" label="Business Model" />
            <h2 className="font-[family-name:var(--font-cormorant)] text-ink-50 font-light leading-tight mb-4" style={{ fontSize: 'clamp(36px, 5vw, 60px)' }}>
              Multiple revenue streams, one platform
            </h2>
          </motion.div>

          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportConfig} className="max-w-3xl mx-auto space-y-3">
            {revenueStreams.map((r) => (
              <motion.div key={r.source} variants={staggerItem}>
                <GlowCard className="p-5">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-ink-200 font-medium">{r.source}</h3>
                    <span className="text-saffron-400 font-[family-name:var(--font-cormorant)] text-2xl font-light">{r.pct}</span>
                  </div>
                  <p className="text-sm text-ink-500">{r.detail}</p>
                  <div className="mt-3 h-1.5 bg-bg-base rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-saffron-500 to-saffron-400 rounded-full"
                      style={{ width: r.pct }}
                    />
                  </div>
                </GlowCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ── TRACTION & MILESTONES ── */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div variants={sectionReveal} initial="hidden" whileInView="visible" viewport={viewportConfig} className="text-center mb-16">
            <SectionLabel number="07" label="Traction & Roadmap" />
            <h2 className="font-[family-name:var(--font-cormorant)] text-ink-50 font-light leading-tight mb-4" style={{ fontSize: 'clamp(36px, 5vw, 60px)' }}>
              18-month path to ₹1Cr MRR
            </h2>
          </motion.div>

          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportConfig} className="grid md:grid-cols-3 gap-4">
            {milestones.map((m) => (
              <motion.div key={m.quarter} variants={staggerItem}>
                <GlowCard className="p-6 h-full">
                  <span className="text-[11px] text-saffron-400 tracking-[0.12em] uppercase font-medium bg-saffron-500/10 px-3 py-1 rounded-full">
                    {m.quarter}
                  </span>
                  <ul className="mt-4 space-y-2.5">
                    {m.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-ink-300">
                        <Check className="w-3.5 h-3.5 text-saffron-500 mt-0.5 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </GlowCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ── UNIT ECONOMICS ── */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div variants={sectionReveal} initial="hidden" whileInView="visible" viewport={viewportConfig} className="text-center mb-16">
            <SectionLabel number="08" label="Unit Economics" />
            <h2 className="font-[family-name:var(--font-cormorant)] text-ink-50 font-light leading-tight" style={{ fontSize: 'clamp(36px, 5vw, 60px)' }}>
              Built for capital efficiency
            </h2>
          </motion.div>

          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportConfig} className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {[
              { label: 'CAC', value: '₹45', sub: 'Organic + temple partnerships' },
              { label: 'ARPU (Bhakti+)', value: '₹1,499/yr', sub: '₹125/mo blended' },
              { label: 'LTV:CAC Ratio', value: '8.5x', sub: '24-month payback < 6 months' },
              { label: 'Gross Margin', value: '78%', sub: 'Post AI inference costs' },
            ].map((m) => (
              <motion.div key={m.label} variants={staggerItem}>
                <GlowCard className="p-6 text-center h-full">
                  <p className="text-[11px] text-ink-500 tracking-[0.12em] uppercase mb-2">{m.label}</p>
                  <p className="font-[family-name:var(--font-cormorant)] text-3xl md:text-4xl text-saffron-400 font-light mb-1">{m.value}</p>
                  <p className="text-xs text-ink-500">{m.sub}</p>
                </GlowCard>
              </motion.div>
            ))}
          </motion.div>

          {/* Financial projections table */}
          <motion.div variants={sectionReveal} initial="hidden" whileInView="visible" viewport={viewportConfig} className="overflow-x-auto">
            <table className="w-full min-w-[500px]">
              <thead>
                <tr className="border-b border-border-subtle">
                  <th className="text-left py-3 px-4 text-xs text-ink-500 uppercase tracking-widest font-medium">Metric</th>
                  <th className="text-right py-3 px-4 text-xs text-ink-500 uppercase tracking-widest font-medium">Month 6</th>
                  <th className="text-right py-3 px-4 text-xs text-ink-500 uppercase tracking-widest font-medium">Month 12</th>
                  <th className="text-right py-3 px-4 text-xs text-ink-500 uppercase tracking-widest font-medium">Month 18</th>
                  <th className="text-right py-3 px-4 text-xs text-ink-500 uppercase tracking-widest font-medium">Month 24</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {[
                  { metric: 'Downloads', m6: '200K', m12: '500K', m18: '1M', m24: '2.5M' },
                  { metric: 'MAU', m6: '80K', m12: '250K', m18: '600K', m24: '1.5M' },
                  { metric: 'Paid Subscribers', m6: '4K', m12: '15K', m18: '40K', m24: '100K' },
                  { metric: 'MRR', m6: '₹15L', m12: '₹50L', m18: '₹1Cr', m24: '₹3Cr' },
                  { metric: 'ARR', m6: '₹1.8Cr', m12: '₹6Cr', m18: '₹12Cr', m24: '₹36Cr' },
                ].map((row) => (
                  <tr key={row.metric} className="border-b border-border-subtle">
                    <td className="py-3 px-4 text-ink-200 font-medium">{row.metric}</td>
                    <td className="py-3 px-4 text-right text-ink-400">{row.m6}</td>
                    <td className="py-3 px-4 text-right text-ink-400">{row.m12}</td>
                    <td className="py-3 px-4 text-right text-ink-300">{row.m18}</td>
                    <td className="py-3 px-4 text-right text-saffron-400 font-medium">{row.m24}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ── TEAM ── */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div variants={sectionReveal} initial="hidden" whileInView="visible" viewport={viewportConfig} className="text-center mb-12">
            <SectionLabel number="09" label="Team" />
            <h2 className="font-[family-name:var(--font-cormorant)] text-ink-50 font-light leading-tight" style={{ fontSize: 'clamp(36px, 5vw, 60px)' }}>
              Built by believers and builders
            </h2>
          </motion.div>
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportConfig} className="grid md:grid-cols-4 gap-4">
            {teamMembers.map((t) => (
              <motion.div key={t.name} variants={staggerItem}>
                <GlowCard className="p-6 h-full">
                  <div className="w-14 h-14 rounded-full bg-saffron-500/10 flex items-center justify-center mb-4">
                    <span className="text-saffron-400 font-medium text-lg">
                      {t.name.split(' ').map((n) => n[0]).join('')}
                    </span>
                  </div>
                  <h3 className="text-ink-50 font-medium mb-0.5">{t.name}</h3>
                  <p className="text-xs text-saffron-400 mb-3">{t.role}</p>
                  <p className="text-sm text-ink-400 leading-relaxed">{t.bg}</p>
                </GlowCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ── THE ASK ── */}
      <section id="ask" className="py-20 md:py-28 relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{ background: 'radial-gradient(ellipse at center, rgba(243,140,49,0.08) 0%, transparent 70%)' }}
        />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div variants={sectionReveal} initial="hidden" whileInView="visible" viewport={viewportConfig} className="text-center mb-16">
            <SectionLabel number="10" label="The Ask" />
            <h2 className="font-[family-name:var(--font-cormorant)] text-ink-50 font-light leading-tight mb-4" style={{ fontSize: 'clamp(36px, 5vw, 60px)' }}>
              Raising ₹5 Crore Seed Round
            </h2>
            <p className="text-ink-300 text-lg max-w-2xl mx-auto mb-12">
              To build the foundational AI infrastructure and achieve 200K+ downloads with ₹15L MRR in 6 months.
            </p>
          </motion.div>

          {/* Fund allocation */}
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportConfig} className="grid md:grid-cols-4 gap-4 mb-16">
            {fundingUse.map((f) => (
              <motion.div key={f.area} variants={staggerItem}>
                <GlowCard className="p-6 text-center h-full">
                  <p className="font-[family-name:var(--font-cormorant)] text-5xl text-saffron-400 font-light mb-2">{f.pct}%</p>
                  <h3 className="text-ink-200 font-medium mb-2">{f.area}</h3>
                  <p className="text-xs text-ink-500">{f.detail}</p>
                </GlowCard>
              </motion.div>
            ))}
          </motion.div>

          {/* Key terms */}
          <motion.div variants={sectionReveal} initial="hidden" whileInView="visible" viewport={viewportConfig} className="max-w-2xl mx-auto">
            <GlowCard className="p-8">
              <h3 className="text-ink-50 font-medium text-xl mb-6 text-center">Key Terms</h3>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { label: 'Round', value: 'Seed' },
                  { label: 'Raising', value: '₹5 Crore (~$600K)' },
                  { label: 'Valuation', value: '₹25 Cr pre-money' },
                  { label: 'Instrument', value: 'SAFE / Priced Equity' },
                  { label: 'Use of Funds', value: 'Product + Growth' },
                  { label: 'Timeline', value: '18-month runway' },
                ].map((item) => (
                  <div key={item.label}>
                    <p className="text-[11px] text-ink-500 uppercase tracking-widest mb-1">{item.label}</p>
                    <p className="text-ink-200 font-medium">{item.value}</p>
                  </div>
                ))}
              </div>
            </GlowCard>
          </motion.div>

          {/* Target investors */}
          <div className="mt-16 text-center">
            <p className="text-[11px] text-ink-600 tracking-[0.12em] uppercase mb-6">Target Investor Profile</p>
            <div className="flex flex-wrap justify-center gap-6">
              {investorLogos.map((name) => (
                <span key={name} className="text-sm text-ink-600 font-medium opacity-40 hover:opacity-70 transition-opacity">
                  {name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ── CONTACT CTA ── */}
      <section className="py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportConfig}>
            <motion.h2
              variants={staggerItem}
              className="font-[family-name:var(--font-cormorant)] text-ink-50 font-light leading-tight mb-6"
              style={{ fontSize: 'clamp(36px, 5vw, 60px)' }}
            >
              Let&apos;s talk about the future of spiritual technology
            </motion.h2>
            <motion.p variants={staggerItem} className="text-ink-400 text-lg mb-10">
              We&apos;re looking for investors who understand India&apos;s faith economy and believe in the power of technology to deepen — not diminish — spiritual practice.
            </motion.p>
            <motion.div variants={staggerItem} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <a
                href="mailto:hello@ankitsoni.in?subject=DevBhumi%20Investment%20Inquiry"
                className="flex items-center gap-2 bg-gradient-to-r from-saffron-500 to-vermillion-500 text-white font-medium px-8 py-3.5 rounded-full hover:shadow-lg hover:shadow-saffron-500/20 transition-all duration-300"
              >
                <BarChart3 className="w-4 h-4" />
                Email: hello@ankitsoni.in
              </a>
              <a
                href="/contact"
                className="flex items-center gap-2 border border-border-default text-saffron-400 font-medium px-8 py-3.5 rounded-full hover:bg-saffron-500/10 transition-all duration-300"
              >
                Schedule a Call
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
            <motion.p variants={staggerItem} className="text-xs text-ink-600">
              Bengaluru, Karnataka, India &middot; CIN pending &middot; Incorporated 2025
            </motion.p>
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}
