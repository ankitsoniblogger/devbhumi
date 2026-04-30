import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowRight,
  BarChart3,
  BookOpen,
  Brain,
  Check,
  DollarSign,
  Flame,
  Globe,
  MonitorCog,
  Shield,
  Smartphone,
  Sparkles,
  Users,
} from 'lucide-react'

const marketStats = [
  { label: 'Faith economy in India', value: '$64B', note: 'Large, emotional, and underserved by great software.', icon: DollarSign },
  { label: 'Hindus worldwide', value: '1.1B', note: 'A massive primary audience with strong cultural continuity.', icon: Users },
  { label: 'India smartphone users', value: '750M+', note: 'A mobile-first market with broad devotional content demand.', icon: Smartphone },
  { label: 'Strategic category thesis', value: '4 in 1', note: 'Prayer, astrology, devotion, and scripture converge here.', icon: Sparkles },
]

const problemPoints = [
  'Spiritual guidance is still fragmented across prayer apps, astrology platforms, temple utilities, and scripture tools.',
  'Most Hindu spiritual products are transactional or content-led, not relationship-led.',
  'Urban users and the global diaspora want context, habit, and identity, not just one-time answers.',
]

const solutionPillars = [
  {
    title: 'Deity-led AI guidance',
    body: 'Conversation starts with a chosen divine guide, making the product feel more personal and emotionally resonant than a generic chatbot.',
    icon: Brain,
  },
  {
    title: 'Full ritual and insight stack',
    body: 'Kundli, horoscope, bhajans, meditation, daily quotes, reminders, and sacred media help the app stay useful beyond a single question.',
    icon: Flame,
  },
  {
    title: 'Admin-controlled content engine',
    body: 'Deities, shorts, bhajans, content, Vedic knowledge, push, app settings, and user oversight are already visible in the admin platform.',
    icon: MonitorCog,
  },
]

const moatPoints = [
  'The product bridges multiple categories instead of competing inside only one of them.',
  'The mobile app already shows repeat-use behavior, not just static content consumption.',
  'The backend gives the team operational control over what ships, changes, and gets promoted.',
  'The visual identity feels culturally specific rather than a white-labeled wellness app.',
]

const comparisonRows = [
  {
    category: 'Prayer habit apps',
    current: 'Strong at calm, prayer routines, journaling, and streaks.',
    missing: 'Usually narrow in faith format and weaker on Hindu-specific guidance and predictive insight.',
    devbhumi: 'Combines ritual habit with deity conversation, media, and spiritual problem-solving.',
  },
  {
    category: 'Astrology platforms',
    current: 'Strong at prediction, chat, call, kundli, and consultation flow.',
    missing: 'Often transactional and less sticky as a daily spiritual companion.',
    devbhumi: 'Turns prediction into part of a broader companion product with devotion and habit layers.',
  },
  {
    category: 'Devotional ritual apps',
    current: 'Strong at pooja, temples, bhajans, panchang, and religious access.',
    missing: 'Usually less personalized around AI-led conversation and everyday spiritual coaching.',
    devbhumi: 'Adds an interactive assistant layer without losing ritual or devotional context.',
  },
  {
    category: 'Scripture products',
    current: 'Strong at reading, verse reflection, and focused study.',
    missing: 'Usually narrow in scope and weaker on media, prediction, and habit loops.',
    devbhumi: 'Can expand from insight into behavior, media, conversation, and subscription depth.',
  },
]

const revenueStreams = [
  'Subscription tiers for premium guidance, deeper insight, and richer devotional experiences',
  'Premium predictive modules and advanced interpretation surfaces',
  'Temple, spiritual brand, and content partnerships',
  'Devotional commerce and ritual-service expansion over time',
]

const roadmap = [
  { stage: 'Now', detail: 'Polish the consumer product story and strengthen repeat-use product loops.' },
  { stage: 'Next', detail: 'Improve retention, premium packaging, and investor-ready positioning.' },
  { stage: 'Scale', detail: 'Grow the content engine, launch monetization layers, and deepen distribution partnerships.' },
  { stage: 'Platform', detail: 'Turn the admin-controlled stack into a long-term spiritual operating system.' },
]

const fundUse = [
  { area: 'Product and engineering', pct: '40%' },
  { area: 'AI and content systems', pct: '25%' },
  { area: 'Growth and partnerships', pct: '20%' },
  { area: 'Operations and brand', pct: '15%' },
]

function InvestorHeading({
  label,
  title,
  body,
  center = false,
}: {
  label: string
  title: string
  body: string
  center?: boolean
}) {
  return (
    <div className={center ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      <div className="text-xs font-semibold uppercase tracking-[0.24em] text-[#C0713A]">{label}</div>
      <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.045em] text-[#3E2723] sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      <p className="mt-5 text-base leading-8 text-[#72584D] sm:text-lg">{body}</p>
    </div>
  )
}

export default function InvestorPage() {
  return (
    <div className="overflow-x-hidden pt-20 text-[#3E2723]">
      <section className="relative isolate">
        <div className="absolute inset-x-0 top-0 -z-10 h-[38rem] bg-[radial-gradient(circle_at_top,rgba(232,117,42,0.18),transparent_62%)]" />
        <div className="mx-auto max-w-7xl px-6 py-12 sm:py-16 lg:py-20">
          <div className="grid gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#F2D5BE] bg-white/85 px-4 py-2 text-sm font-medium text-[#A4511A] shadow-[0_10px_30px_rgba(232,117,42,0.08)]">
                <span className="h-2 w-2 rounded-full bg-[#E8752A]" />
                Investor Page
              </div>

              <h1 className="mt-7 text-5xl font-semibold leading-[1.02] tracking-[-0.055em] text-[#3E2723] sm:text-6xl lg:text-7xl">
                DevBhumi is building a
                <span className="bg-gradient-to-r from-[#E8752A] to-[#FF8C00] bg-clip-text text-transparent"> Hindu spiritual platform</span>,
                not a single-feature app.
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-[#6E554B] sm:text-xl">
                The strongest investor story here is not “AI for religion.” It is a category-bridging
                mobile product that connects guidance, ritual, insight, media, and backend-operated
                spiritual content into one system.
              </p>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {[
                  ['Thesis', 'Category bridge', 'Prayer, astrology, devotion, and scripture in one product arc.'],
                  ['Product', 'Mobile-first', 'Real Flutter flows already cover conversation, content, and retention surfaces.'],
                  ['Platform', 'Admin-backed', 'Operational control already exists across content, users, push, and monitoring.'],
                ].map(([eyebrow, title, text]) => (
                  <div key={title} className="rounded-[1.75rem] border border-white/75 bg-white/82 p-5 shadow-[0_18px_45px_rgba(62,39,35,0.06)]">
                    <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#B56E3B]">{eyebrow}</div>
                    <div className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-[#3E2723]">{title}</div>
                    <p className="mt-3 text-sm leading-6 text-[#7A6055]">{text}</p>
                  </div>
                ))}
              </div>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#E8752A] to-[#FF8C00] px-6 py-4 text-base font-semibold text-white shadow-[0_18px_40px_rgba(232,117,42,0.24)]"
                >
                  Schedule a Conversation
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href="mailto:hello@ankitsoni.in?subject=DevBhumi%20Investor%20Inquiry"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-[#E8D6C8] bg-white/88 px-6 py-4 text-base font-semibold text-[#3E2723]"
                >
                  Email the Team
                  <BarChart3 className="h-4 w-4" />
                </a>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-[40rem]">
              <div className="grid gap-5 sm:grid-cols-[0.82fr_1fr]">
                <div className="space-y-5 sm:pt-14">
                  <div className="rounded-[2rem] border border-white/80 bg-white/88 p-3 shadow-[0_24px_80px_rgba(62,39,35,0.12)]">
                    <Image
                      src="/showcase/home-light.jpeg"
                      alt="DevBhumi home screen"
                      width={460}
                      height={920}
                      className="h-auto w-full rounded-[1.4rem] border border-[#F3E1D4]"
                    />
                  </div>
                  <div className="rounded-[2rem] border border-[#F6D5BE] bg-[#FFF3E6] p-5 shadow-[0_18px_50px_rgba(232,117,42,0.12)]">
                    <div className="flex gap-4">
                      <div className="rounded-2xl bg-white/85 p-3 text-[#E8752A]">
                        <MonitorCog className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="text-lg font-semibold tracking-[-0.03em]">Visible operational maturity</div>
                        <p className="mt-1 text-sm leading-6 text-[#745A4D]">
                          This is not just a landing page story. The app and the admin platform already show
                          consumer breadth and backend control.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid gap-5">
                  <div className="rounded-[2rem] border border-white/80 bg-white/88 p-3 shadow-[0_24px_80px_rgba(62,39,35,0.12)]">
                    <Image
                      src="/showcase/deity-selection.jpeg"
                      alt="DevBhumi deity selection screen"
                      width={460}
                      height={920}
                      className="h-auto w-full rounded-[1.4rem] border border-[#F3E1D4]"
                    />
                  </div>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="rounded-[2rem] border border-white/80 bg-white/90 p-3 shadow-[0_18px_60px_rgba(62,39,35,0.1)]">
                      <Image
                        src="/showcase/bhajan.jpeg"
                        alt="Bhajan screen"
                        width={320}
                        height={700}
                        className="h-auto w-full rounded-[1.3rem] border border-[#F3E1D4]"
                      />
                    </div>
                    <div className="rounded-[2rem] border border-white/80 bg-white/90 p-3 shadow-[0_18px_60px_rgba(62,39,35,0.1)] sm:translate-y-10">
                      <Image
                        src="/showcase/profile.jpeg"
                        alt="Profile screen"
                        width={320}
                        height={700}
                        className="h-auto w-full rounded-[1.3rem] border border-[#F3E1D4]"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 sm:py-24">
        <InvestorHeading
          label="Market Opportunity"
          title="A large audience exists. The software category is still early."
          body="This is attractive because the emotional demand is deep, the mobile usage is already there, and the product landscape is still fragmented enough for a strong category-defining player to emerge."
          center
        />

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {marketStats.map((stat) => {
            const Icon = stat.icon

            return (
              <div key={stat.label} className="rounded-[1.8rem] border border-[#F0D7C6] bg-white/84 p-6 shadow-[0_20px_65px_rgba(62,39,35,0.06)]">
                <div className="inline-flex rounded-2xl bg-[#FFF4E7] p-3 text-[#E8752A]">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="mt-5 text-4xl font-semibold tracking-[-0.05em] text-[#3E2723]">{stat.value}</div>
                <div className="mt-2 text-base font-semibold text-[#3E2723]">{stat.label}</div>
                <p className="mt-3 text-sm leading-7 text-[#72584D]">{stat.note}</p>
              </div>
            )
          })}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 sm:py-24">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <InvestorHeading
              label="Problem"
              title="Spiritual demand is strong. Product coherence is still weak."
              body="Users do not experience their spiritual life in separate silos, yet software products often force exactly that separation."
            />
          </div>
          <div className="grid gap-4">
            {problemPoints.map((point, index) => (
              <div key={point} className="flex gap-4 rounded-[1.6rem] border border-[#F0D7C6] bg-white/84 p-5 shadow-[0_18px_50px_rgba(62,39,35,0.05)]">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#FFF1E4] text-sm font-semibold text-[#E8752A]">
                  0{index + 1}
                </div>
                <p className="text-sm leading-7 text-[#6B5145]">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 sm:py-24">
        <InvestorHeading
          label="Solution"
          title="DevBhumi works because it behaves like a spiritual companion, not just a utility."
          body="The strongest version of the business is not a single feature. It is a connected product system where guidance, ritual, insight, and media reinforce each other."
          center
        />

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {solutionPillars.map((pillar) => {
            const Icon = pillar.icon

            return (
              <div key={pillar.title} className="rounded-[1.85rem] border border-[#F0D7C6] bg-white/84 p-6 shadow-[0_20px_65px_rgba(62,39,35,0.06)]">
                <div className="inline-flex rounded-2xl bg-[#FFF4E7] p-3 text-[#E8752A]">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-2xl font-semibold tracking-[-0.04em] text-[#3E2723]">{pillar.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#72584D]">{pillar.body}</p>
              </div>
            )
          })}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 sm:py-24">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <InvestorHeading
              label="Moat"
              title="The moat comes from category design plus operational control."
              body="The product already hints at a stronger long-term position than a single-purpose spiritual app because it can own more of the user's daily spiritual loop."
            />
          </div>
          <div className="rounded-[2rem] border border-[#F0D7C6] bg-white/86 p-8 shadow-[0_24px_80px_rgba(62,39,35,0.06)]">
            <div className="grid gap-4">
              {moatPoints.map((point) => (
                <div key={point} className="flex gap-3 rounded-2xl border border-[#F5E4D8] bg-[#FFF9F4] px-4 py-4">
                  <Check className="mt-1 h-4 w-4 shrink-0 text-[#E8752A]" />
                  <p className="text-sm leading-7 text-[#654C40]">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 sm:py-24">
        <div className="rounded-[2.2rem] border border-[#F0D7C6] bg-white/86 p-8 shadow-[0_24px_80px_rgba(62,39,35,0.06)] sm:p-10 lg:p-12">
          <InvestorHeading
            label="Competitive Position"
            title="The best opportunity is to bridge what existing products keep separate."
            body="This is where the investor story gets strongest. DevBhumi does not need to beat every category leader at their narrowest strength. It needs to become the product that combines the layers users actually want together."
          />

          <div className="mt-10 overflow-hidden rounded-[1.8rem] border border-[#F3E1D4]">
            <div className="hidden grid-cols-[1fr_1fr_1fr_1.1fr] gap-px bg-[#F3E1D4] text-sm font-semibold text-[#5E4337] lg:grid">
              <div className="bg-[#FFF6EE] px-5 py-4">Category</div>
              <div className="bg-[#FFF6EE] px-5 py-4">What current products do well</div>
              <div className="bg-[#FFF6EE] px-5 py-4">What remains missing</div>
              <div className="bg-[#FFF6EE] px-5 py-4">Why DevBhumi can win</div>
            </div>

            {comparisonRows.map((row) => (
              <div key={row.category} className="border-t border-[#F3E1D4] first:border-t-0">
                <div className="grid gap-px bg-[#F3E1D4] lg:grid-cols-[1fr_1fr_1fr_1.1fr]">
                  <div className="bg-white px-5 py-5 text-lg font-semibold tracking-[-0.03em] text-[#3E2723]">{row.category}</div>
                  <div className="bg-white px-5 py-5 text-sm leading-7 text-[#72584D]">{row.current}</div>
                  <div className="bg-white px-5 py-5 text-sm leading-7 text-[#72584D]">{row.missing}</div>
                  <div className="bg-white px-5 py-5 text-sm leading-7 text-[#5B3F34]">{row.devbhumi}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 sm:py-24">
        <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
          <div className="rounded-[2rem] border border-[#F0D7C6] bg-white/84 p-8 shadow-[0_24px_80px_rgba(62,39,35,0.06)]">
            <InvestorHeading
              label="Business Model"
              title="Monetization can layer on top of retention, not replace it."
              body="The strongest revenue model follows from a product that earns repeat attention first."
            />
            <div className="mt-8 grid gap-3">
              {revenueStreams.map((stream) => (
                <div key={stream} className="rounded-2xl border border-[#F5E4D8] bg-[#FFF9F4] px-4 py-4 text-sm leading-7 text-[#654C40]">
                  {stream}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-[#F0D7C6] bg-white/84 p-8 shadow-[0_24px_80px_rgba(62,39,35,0.06)]">
            <InvestorHeading
              label="Roadmap"
              title="The roadmap is clearest when it compounds the system you already have."
              body="The current app and admin panel already establish the right shape. The next phase is refinement, monetization, retention, and distribution leverage."
            />
            <div className="mt-8 grid gap-4">
              {roadmap.map((item) => (
                <div key={item.stage} className="flex gap-4 rounded-[1.5rem] border border-[#F5E4D8] bg-[#FFF9F4] px-4 py-4">
                  <div className="min-w-20 text-sm font-semibold text-[#E8752A]">{item.stage}</div>
                  <p className="text-sm leading-7 text-[#654C40]">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 sm:py-24">
        <div className="overflow-hidden rounded-[2.2rem] border border-[#F0D7C6] bg-[linear-gradient(135deg,#FFF7EE_0%,#FFE7CF_46%,#FFF8F0_100%)] p-8 shadow-[0_30px_90px_rgba(232,117,42,0.14)] sm:p-10 lg:p-12">
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <InvestorHeading
                label="The Ask"
                title="The cleanest investor pitch is simple: back the product that can own more of the daily spiritual loop."
                body="The use of capital is ultimately about improving product quality, strengthening the content and AI layer, and scaling distribution around a category that still has room for a leader."
              />
            </div>

            <div className="rounded-[1.9rem] border border-white/75 bg-white/88 p-6 shadow-[0_20px_60px_rgba(62,39,35,0.08)]">
              <div className="grid gap-3">
                {fundUse.map((item) => (
                  <div key={item.area} className="flex items-center justify-between rounded-2xl border border-[#F5E4D8] bg-[#FFF9F4] px-4 py-4">
                    <span className="text-sm font-medium text-[#5F463A]">{item.area}</span>
                    <span className="text-lg font-semibold text-[#E8752A]">{item.pct}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-2xl bg-[#FFF4E7] px-4 py-4 text-sm leading-7 text-[#71574B]">
                The strongest next step is a disciplined seed story around product refinement, retention, premium packaging, and strategic growth rather than overcomplicated forecasting theater.
              </div>

              <div className="mt-6 flex flex-col gap-3">
                <a
                  href="mailto:hello@ankitsoni.in?subject=DevBhumi%20Investor%20Inquiry"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#E8752A] to-[#FF8C00] px-5 py-4 text-base font-semibold text-white"
                >
                  Contact the Founder
                  <ArrowRight className="h-4 w-4" />
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-[#E8D6C8] bg-[#FFF8F0] px-5 py-4 text-base font-semibold text-[#3E2723]"
                >
                  Book a Discussion
                  <Globe className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20 pt-4 sm:pb-24">
        <div className="rounded-[1.8rem] border border-[#F0D7C6] bg-white/84 p-6 shadow-[0_20px_60px_rgba(62,39,35,0.05)]">
          <div className="grid gap-4 md:grid-cols-3">
            <div className="flex gap-3">
              <BookOpen className="mt-1 h-5 w-5 text-[#E8752A]" />
              <p className="text-sm leading-7 text-[#6A5145]">
                Competitive framing on the main landing page references current public product positioning from Hallow, Headspace, Astrotalk, Sri Mandir, and Shloka.
              </p>
            </div>
            <div className="flex gap-3">
              <Shield className="mt-1 h-5 w-5 text-[#E8752A]" />
              <p className="text-sm leading-7 text-[#6A5145]">
                This page is intentionally cleaner and more thesis-led so it reads well to investors, managers, and executive stakeholders.
              </p>
            </div>
            <div className="flex gap-3">
              <Sparkles className="mt-1 h-5 w-5 text-[#E8752A]" />
              <p className="text-sm leading-7 text-[#6A5145]">
                The narrative now emphasizes what is real in the codebase today while leaving room for future financial-detail expansion later.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
