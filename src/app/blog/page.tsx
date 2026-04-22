'use client'

import { motion } from 'framer-motion'
import { pageVariants, sectionReveal, staggerContainer, staggerItem, viewportConfig } from '@/lib/animations'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { GlowCard } from '@/components/ui/GlowCard'

const posts = [
  {
    date: 'April 15, 2026',
    tag: 'Product',
    title: 'Introducing Deity AI: Have a Conversation With Lord Ganesha',
    excerpt: 'Today we\'re launching the first version of our conversational deity AI, grounded in 1,000+ Vedic and Puranic texts.',
  },
  {
    date: 'April 8, 2026',
    tag: 'Culture',
    title: 'Why We Built DevBhumi in 8 Indian Languages',
    excerpt: 'Sanskrit is the root, but the branches of Hindu wisdom stretch into every regional tongue. Here\'s our language philosophy.',
  },
  {
    date: 'March 27, 2026',
    tag: 'Research',
    title: 'How We Ground AI in Scripture Without Hallucination',
    excerpt: 'The challenge of building a spiritually accurate AI — our RAG pipeline, advisory board, and editorial process explained.',
  },
  {
    date: 'March 14, 2026',
    tag: 'Community',
    title: 'Diwali Beta: What 10,000 Users Taught Us',
    excerpt: 'Our beta launched on Diwali and the feedback changed everything. Here\'s what real devotees needed that we hadn\'t anticipated.',
  },
  {
    date: 'February 22, 2026',
    tag: 'Product',
    title: 'The Hindu Calendar Is Incredibly Complex — So We Automated It',
    excerpt: 'Tithi, Nakshatra, Vara, Yoga, Karana — our Panchang engine handles all five and localizes them to your region.',
  },
  {
    date: 'February 5, 2026',
    tag: 'Culture',
    title: 'AI and the Sacred: An Ethical Framework for Spiritual Technology',
    excerpt: 'Where is the line between helpful accessibility and commercializing the sacred? Our answer, honestly.',
  },
]

export default function BlogPage() {
  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit" className="pt-16">
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div variants={sectionReveal} initial="hidden" whileInView="visible" viewport={viewportConfig} className="max-w-2xl mb-16">
            <SectionLabel number="01" label="Blog" />
            <h1
              className="font-[family-name:var(--font-cormorant)] text-ink-50 font-light leading-tight mb-4"
              style={{ fontSize: 'clamp(40px, 6vw, 72px)' }}
            >
              Thoughts on AI, spirituality & culture
            </h1>
            <p className="text-ink-400 leading-relaxed">
              Notes from the team building at the intersection of ancient Hindu wisdom and modern technology.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {posts.map((post) => (
              <motion.div key={post.title} variants={staggerItem}>
                <GlowCard className="p-6 flex flex-col h-full cursor-pointer group">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs text-saffron-400 bg-saffron-500/10 px-2.5 py-1 rounded-full">{post.tag}</span>
                    <span className="text-xs text-ink-600">{post.date}</span>
                  </div>
                  <h2 className="text-ink-100 font-medium leading-snug mb-3 group-hover:text-saffron-300 transition-colors duration-200">
                    {post.title}
                  </h2>
                  <p className="text-sm text-ink-500 leading-relaxed flex-1">{post.excerpt}</p>
                  <span className="mt-4 text-xs text-saffron-400 group-hover:translate-x-1 transition-transform duration-200 inline-block">
                    Read more &rarr;
                  </span>
                </GlowCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}
