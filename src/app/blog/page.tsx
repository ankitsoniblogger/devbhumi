import { ArrowRight, Sparkles } from 'lucide-react'

const featured = {
  tag: 'Editorial Direction',
  title: 'What a serious spiritual technology company should sound like.',
  excerpt:
    'The blog should not feel like generic startup content. It should sit at the intersection of product thinking, culture, ritual behavior, and responsible AI.',
}

const posts = [
  {
    date: 'April 2026',
    tag: 'Product',
    title: 'Designing devotional guidance for repeat use, not curiosity clicks',
    excerpt: 'How a spiritual product becomes habit-forming without becoming noisy or manipulative.',
  },
  {
    date: 'April 2026',
    tag: 'Culture',
    title: 'Why language, identity, and interface tone matter in spiritual software',
    excerpt: 'A product can be technically correct and still culturally hollow. This is where design matters.',
  },
  {
    date: 'March 2026',
    tag: 'AI',
    title: 'Spiritual AI needs systems, not just prompts',
    excerpt: 'The difference between a novelty chatbot and a credible guidance product is the operating layer behind it.',
  },
  {
    date: 'March 2026',
    tag: 'Product',
    title: 'The case for combining bhajans, reminders, and insight in one app',
    excerpt: 'Why devotional media and predictive utility belong in the same retention loop.',
  },
  {
    date: 'February 2026',
    tag: 'Research',
    title: 'What trust looks like in a spiritual companion product',
    excerpt: 'Trust is built through tone, consistency, humility, and operational care, not only output quality.',
  },
  {
    date: 'February 2026',
    tag: 'Company',
    title: 'Building a category around spiritual technology in India',
    excerpt: 'The market is real, but the strongest companies will be the ones that connect fragmented behavior into one platform.',
  },
]

function Heading({
  label,
  title,
  body,
}: {
  label: string
  title: string
  body: string
}) {
  return (
    <div className="max-w-3xl">
      <div className="text-xs font-semibold uppercase tracking-[0.24em] text-[#C0713A]">{label}</div>
      <h1 className="mt-4 text-4xl font-semibold leading-tight tracking-[-0.045em] text-[#3E2723] sm:text-5xl lg:text-6xl">
        {title}
      </h1>
      <p className="mt-5 text-base leading-8 text-[#72584D] sm:text-lg">{body}</p>
    </div>
  )
}

export default function BlogPage() {
  return (
    <div className="overflow-x-hidden bg-[linear-gradient(180deg,#FFF8F0_0%,#FFF5EC_38%,#FFF8F0_100%)] pt-20 text-[#3E2723]">
      <section className="mx-auto max-w-7xl px-6 py-14 sm:py-20">
        <div className="rounded-[2.3rem] border border-[#F0D7C6] bg-white/86 p-8 shadow-[0_24px_80px_rgba(62,39,35,0.06)] sm:p-10 lg:p-12">
          <div className="grid gap-8 lg:grid-cols-[1.08fr_0.92fr]">
            <Heading
              label="Blog"
              title="Thoughts on spiritual product design, devotional behavior, and AI with cultural depth."
              body="This page now matches the premium site language and gives the editorial layer a more serious role inside the brand."
            />

            <div className="rounded-[1.9rem] border border-[#F3D8C6] bg-[linear-gradient(135deg,#FFF6EC,#FFF1E4)] p-6 shadow-[0_18px_45px_rgba(232,117,42,0.08)]">
              <div className="inline-flex rounded-2xl bg-white p-3 text-[#E8752A] shadow-[0_8px_18px_rgba(232,117,42,0.08)]">
                <Sparkles className="h-5 w-5" />
              </div>
              <div className="mt-5 text-xs font-semibold uppercase tracking-[0.22em] text-[#C0713A]">{featured.tag}</div>
              <h2 className="mt-3 text-2xl font-semibold leading-snug tracking-[-0.04em] text-[#3E2723]">{featured.title}</h2>
              <p className="mt-3 text-sm leading-7 text-[#72584D]">{featured.excerpt}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20 pt-14 sm:pb-24 sm:pt-20">
        <Heading
          label="Posts"
          title="A stronger editorial surface for the category narrative."
          body="These entries help the site feel like a real company with thinking, not just a launch page with features."
        />

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {posts.map((post) => (
            <article key={post.title} className="rounded-[1.85rem] border border-[#F0D7C6] bg-white/86 p-6 shadow-[0_20px_60px_rgba(62,39,35,0.05)]">
              <div className="flex items-center gap-3">
                <span className="rounded-full bg-[#FFF4E7] px-3 py-1 text-xs font-semibold text-[#C0713A]">{post.tag}</span>
                <span className="text-xs text-[#8B6D60]">{post.date}</span>
              </div>
              <h2 className="mt-5 text-2xl font-semibold leading-snug tracking-[-0.04em] text-[#3E2723]">{post.title}</h2>
              <p className="mt-3 text-sm leading-7 text-[#72584D]">{post.excerpt}</p>
              <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#C0713A]">
                Read article
                <ArrowRight className="h-4 w-4" />
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
