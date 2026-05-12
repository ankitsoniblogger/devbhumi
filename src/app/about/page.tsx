import { BookOpen, HeartHandshake, Layers3, Sparkles, Users } from 'lucide-react'

const principles = [
  {
    title: 'Respect the tradition',
    body: 'We are not trying to flatten Hindu wisdom into generic wellness copy. The product should feel culturally rooted, emotionally intelligent, and spiritually respectful.',
    icon: HeartHandshake,
  },
  {
    title: 'Use technology with intention',
    body: 'AI should improve accessibility, continuity, and everyday guidance. It should not pretend to replace lived practice, community, or spiritual authority.',
    icon: Sparkles,
  },
  {
    title: 'Build a system, not a gimmick',
    body: 'Divine Connect is strongest when consumer product, devotional content, and operational tooling all work together as one platform.',
    icon: Layers3,
  },
]

const team = [
  { name: 'Ankit Soni', role: 'Founder & CEO', bio: 'Driving the product vision at the intersection of spiritual experience, mobile behavior, and AI.' },
  { name: 'Product & Design', role: 'Experience Team', bio: 'Focused on making devotional technology feel intentional, premium, and culturally grounded.' },
  { name: 'Engineering & AI', role: 'Platform Team', bio: 'Building the systems that power guidance, content delivery, admin operations, and future scale.' },
]

function PageHeading({
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

export default function AboutPage() {
  return (
    <div className="overflow-x-hidden bg-[linear-gradient(180deg,#FFF8F0_0%,#FFF5EC_38%,#FFF8F0_100%)] pt-20 text-[#3E2723]">
      <section className="mx-auto max-w-7xl px-6 py-14 sm:py-20">
        <div className="rounded-[2.3rem] border border-[#F0D7C6] bg-white/86 p-8 shadow-[0_24px_80px_rgba(62,39,35,0.06)] sm:p-10 lg:p-12">
          <PageHeading
            label="About Divine Connect"
            title="We’re building spiritual technology that feels more like companionship than utility."
            body="Divine Connect began with a simple product question: what would a modern Hindu spiritual companion feel like if it respected both tradition and contemporary mobile behavior? The answer is not a single feature. It is a system that unifies guidance, ritual, insight, and devotional content into one experience."
          />

          <div className="mt-10 grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="rounded-[1.9rem] border border-[#F3E1D4] bg-[#FFF9F4] p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-[#E8752A] shadow-[0_8px_18px_rgba(232,117,42,0.08)]">
                <BookOpen className="h-5 w-5" />
              </div>
              <h2 className="mt-5 text-2xl font-semibold tracking-[-0.04em] text-[#3E2723]">Why we exist</h2>
              <div className="mt-4 space-y-4 text-sm leading-7 text-[#6F5549] sm:text-base">
                <p>
                  Hindu wisdom is vast, layered, and deeply alive, but digital access to it is still fragmented.
                  Many people want guidance, rhythm, and devotional depth in their everyday lives, yet today’s
                  products usually give them only one narrow slice at a time.
                </p>
                <p>
                  Divine Connect exists to close that gap. We want the product to feel approachable enough for daily use,
                  but thoughtful enough to hold spiritual meaning with care.
                </p>
              </div>
            </div>

            <div className="rounded-[1.9rem] border border-[#F3E1D4] bg-[linear-gradient(135deg,#FFF6EC,#FFF1E4)] p-6 shadow-[0_18px_45px_rgba(232,117,42,0.08)]">
              <div className="text-xs font-semibold uppercase tracking-[0.22em] text-[#C0713A]">What we’re building</div>
              <div className="mt-5 grid gap-3">
                {[
                  'Deity-led guidance and conversation',
                  'Kundli, horoscope, and predictive insight surfaces',
                  'Bhajans, meditation, reminders, and devotional media',
                  'An admin-controlled backend for content and product operations',
                ].map((item) => (
                  <div key={item} className="rounded-2xl border border-[#F2DED0] bg-white/84 px-4 py-4 text-sm leading-7 text-[#6B5145]">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14 sm:py-20">
        <PageHeading
          label="Principles"
          title="The product should feel premium, respectful, and useful every day."
          body="These principles shape how we think about the category, the interface, and the role of AI inside a spiritual product."
        />

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {principles.map((item) => {
            const Icon = item.icon
            return (
              <div key={item.title} className="rounded-[1.85rem] border border-[#F0D7C6] bg-white/86 p-6 shadow-[0_20px_60px_rgba(62,39,35,0.05)]">
                <div className="inline-flex rounded-2xl bg-[#FFF4E7] p-3 text-[#E8752A]">
                  <Icon className="h-5 w-5" />
                </div>
                <h2 className="mt-5 text-2xl font-semibold tracking-[-0.04em] text-[#3E2723]">{item.title}</h2>
                <p className="mt-3 text-sm leading-7 text-[#72584D]">{item.body}</p>
              </div>
            )
          })}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20 pt-14 sm:pb-24 sm:pt-20">
        <PageHeading
          label="Team"
          title="A small team shaping the category with product, design, and systems thinking."
          body="This page keeps the team framing simple and credible. As the company grows, this can expand into founder background, advisory voices, and domain expertise."
        />

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {team.map((member) => (
            <div key={member.name} className="rounded-[1.85rem] border border-[#F0D7C6] bg-white/86 p-6 shadow-[0_20px_60px_rgba(62,39,35,0.05)]">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#FFF4E7] text-[#E8752A]">
                <Users className="h-5 w-5" />
              </div>
              <h2 className="mt-5 text-2xl font-semibold tracking-[-0.04em] text-[#3E2723]">{member.name}</h2>
              <div className="mt-1 text-sm font-semibold text-[#C0713A]">{member.role}</div>
              <p className="mt-3 text-sm leading-7 text-[#72584D]">{member.bio}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
