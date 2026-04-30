import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowRight,
  Bell,
  BookOpen,
  Bot,
  BrainCircuit,
  Flame,
  HeartHandshake,
  MessageCircleHeart,
  MonitorCog,
  MoonStar,
  PlayCircle,
  ShieldCheck,
  Sparkles,
  Stars,
  Users,
  Waves,
} from 'lucide-react'

const showcaseCards = [
  {
    label: 'Divine Guidance',
    title: 'A deity-led conversation layer that feels personal from the first tap.',
    body:
      'The Flutter app already supports deity selection, topic-led prompts, saved answers, chat history, and personalized guidance flows built around Hindu context.',
    icon: MessageCircleHeart,
    stack: [
      { src: '/showcase/deity-selection.jpeg', alt: 'Deity selection screen', className: 'rotate-[-8deg] -left-3 top-8 w-40 sm:w-48' },
      { src: '/showcase/home-light.jpeg', alt: 'Light home screen', className: 'left-1/2 top-0 z-10 w-44 -translate-x-1/2 sm:w-56' },
      { src: '/showcase/menu.jpeg', alt: 'App navigation menu', className: 'rotate-[8deg] -right-3 top-10 w-40 sm:w-48' },
    ],
    points: [
      'Choose a divine guide before a session begins',
      'Move from life questions to follow-up spiritual dialogue',
      'Save meaningful responses and revisit them later',
    ],
    insight: 'Feels closer to spiritual companionship than a generic question-answer utility.',
  },
  {
    label: 'Prediction & Insight',
    title: 'Kundli, palm analysis, and Vedic guidance in one premium flow.',
    body:
      'Instead of sending users to separate apps, DevBhumi combines kundli generation, horoscope surfaces, and image-based palm reading inside the same mobile experience.',
    icon: BrainCircuit,
    stack: [
      { src: '/showcase/login.jpeg', alt: 'Login screen', className: 'rotate-[-7deg] -left-2 top-10 w-40 sm:w-48' },
      { src: '/showcase/profile.jpeg', alt: 'Profile screen', className: 'left-1/2 top-0 z-10 w-44 -translate-x-1/2 sm:w-56' },
      { src: '/showcase/quote.jpeg', alt: 'Daily quote screen', className: 'rotate-[8deg] -right-2 top-12 w-40 sm:w-48' },
    ],
    points: [
      'AI-assisted kundli interpretation from birth details',
      'Palm upload flow for image-led spiritual reflection',
      'Daily rashi guidance that complements, not replaces, devotion',
    ],
    insight: 'Broadens revenue and retention beyond meditation or devotional content alone.',
  },
  {
    label: 'Daily Ritual Loop',
    title: 'Bhajans, meditation, shorts, reminders, and calendar behavior that keep people coming back.',
    body:
      'The product already contains the right repeat-use surfaces: devotional music, daily quotes, meditation timing, notifications, shorts, and a Hindu calendar rhythm.',
    icon: Waves,
    stack: [
      { src: '/showcase/bhajan.jpeg', alt: 'Bhajan library screen', className: 'rotate-[-8deg] -left-3 top-10 w-40 sm:w-48' },
      { src: '/showcase/home-dark.jpeg', alt: 'Dark home screen', className: 'left-1/2 top-0 z-10 w-44 -translate-x-1/2 sm:w-56' },
      { src: '/showcase/splash.jpeg', alt: 'Splash screen', className: 'rotate-[8deg] -right-3 top-10 w-40 sm:w-48' },
    ],
    points: [
      'Bhajan listening by deity and devotional mood',
      'Meditation and reminder surfaces for repeat engagement',
      'A sacred media feed that matches modern mobile habits',
    ],
    insight: 'This is where product utility becomes habit, brand, and long-term retention.',
  },
]

const platformPillars = [
  {
    title: 'Consumer product breadth',
    text: 'Chat, kundli, horoscope, bhajans, shorts, profile, saved items, calendar, and meditation already sit inside one app surface.',
    icon: Sparkles,
  },
  {
    title: 'Operational backend depth',
    text: 'The admin panel already manages deities, shorts, content, bhajans, Vedic knowledge, push operations, users, chats, and monitoring.',
    icon: MonitorCog,
  },
  {
    title: 'Retention architecture',
    text: 'Daily inspiration, reminders, saved answers, streak-like behaviors, and swipeable media create reasons to return every day.',
    icon: Flame,
  },
  {
    title: 'Trust and scale readiness',
    text: 'OTP login, profile controls, admin logs, monitoring, and app settings make the product more serious than a concept-only spiritual app.',
    icon: ShieldCheck,
  },
]

const capabilityCards = [
  {
    title: 'Talk with God',
    text: 'Deity selection, guided prompts, persistent conversation sessions, saved answers, and revisit-friendly history.',
    icon: Bot,
  },
  {
    title: 'Daily Bhakti',
    text: 'Bhajans, reminders, daily quotes, and a Hindu calendar layer designed for recurring practice.',
    icon: Bell,
  },
  {
    title: 'Guided Insight',
    text: 'Kundli, daily horoscope, and palm-reading workflows in one connected spiritual assistant.',
    icon: Stars,
  },
  {
    title: 'Sacred Media',
    text: 'Short-form devotional content designed for modern attention patterns without losing cultural context.',
    icon: PlayCircle,
  },
  {
    title: 'Knowledge Engine',
    text: 'Scripture-backed content, quote delivery, and Vedic knowledge managed from the backend.',
    icon: BookOpen,
  },
  {
    title: 'Investor-Ready System',
    text: 'Users, chats, logs, push, settings, and monitor views show this is being built as a platform.',
    icon: Users,
  },
]

const marketRows = [
  {
    category: 'Prayer habit apps',
    focus: 'Great at prayer routines, streaks, journaling, and calm.',
    gap: 'Usually centered on one narrow religious practice format.',
    edge: 'DevBhumi combines ritual habit with AI guidance, prediction surfaces, devotional media, and Hindu identity.',
    sourceLabel: 'Hallow',
    sourceHref: 'https://hallow.com/features/',
  },
  {
    category: 'Meditation apps',
    focus: 'Strong on mindfulness, sleep, coaching, and emotional wellness.',
    gap: 'Spiritually neutral and disconnected from scripture, deity, and ritual behavior.',
    edge: 'DevBhumi roots calming experiences in culturally specific Hindu practice, not generic wellness.',
    sourceLabel: 'Headspace',
    sourceHref: 'https://www.headspace.com/app',
  },
  {
    category: 'Astrology platforms',
    focus: 'Strong on consultative astrology, chat, calls, kundli, and horoscope.',
    gap: 'Often transactional and prediction-heavy, with weaker daily spiritual companionship.',
    edge: 'DevBhumi extends insight into devotion, content, media, and long-term habit loops.',
    sourceLabel: 'Astrotalk',
    sourceHref: 'https://astrotalk.com/chat-with-astrologer?searchText=astrotalk+free+online',
  },
  {
    category: 'Devotional ritual apps',
    focus: 'Strong on pooja, temples, bhajans, panchang, and ritual access.',
    gap: 'Less personalized around problem-solving, AI guidance, and conversational companionship.',
    edge: 'DevBhumi makes devotion interactive while keeping ritual, music, and calendar context.',
    sourceLabel: 'Sri Mandir',
    sourceHref: 'https://www.srimandir.com/aboutus/en',
  },
]

const adminModules = [
  'Gods & deities management',
  'Bhajan library',
  'Shorts publishing',
  'Articles and quote content',
  'Vedic knowledge ingestion',
  'Push notifications',
  'Chats and user oversight',
  'Global search and monitoring',
]

const investorReasons = [
  'The product serves emotion, ritual, entertainment, and identity in one loop rather than one narrow use case.',
  'Its content surfaces are already editable through the admin panel, which improves experimentation speed.',
  'It can grow into subscription, premium insight, ritual services, content partnership, and devotional commerce models.',
  'The visual language already feels category-specific instead of another wellness or productivity product.',
]

function SectionHeading({
  label,
  title,
  body,
  align = 'left',
}: {
  label: string
  title: string
  body: string
  align?: 'left' | 'center'
}) {
  return (
    <div className={align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      <div className="text-xs font-semibold uppercase tracking-[0.24em] text-[#C0713A]">{label}</div>
      <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.04em] text-[#3E2723] sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      <p className="mt-5 text-base leading-8 text-[#72584D] sm:text-lg">{body}</p>
    </div>
  )
}

export default function HomePage() {
  return (
    <div className="overflow-x-hidden text-[#3E2723]">
      <section id="top" className="relative isolate pt-28">
        <div className="absolute inset-x-0 top-0 -z-10 h-[44rem] bg-[radial-gradient(circle_at_top,rgba(232,117,42,0.22),transparent_60%)]" />
        <div className="mx-auto grid max-w-7xl gap-16 px-6 pb-24 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#F5C9A8] bg-white/80 px-4 py-2 text-sm font-medium text-[#A4511A] shadow-[0_10px_30px_rgba(232,117,42,0.08)] backdrop-blur">
              <MoonStar className="h-4 w-4" />
              Rebuilt from the actual Flutter product
            </div>

            <h1 className="mt-7 text-5xl font-semibold leading-[1.02] tracking-[-0.055em] text-[#3E2723] sm:text-6xl lg:text-7xl">
              A modern Hindu spiritual companion that feels
              <span className="bg-gradient-to-r from-[#E8752A] to-[#FF8C00] bg-clip-text text-transparent"> calm, premium, and investable.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#6E554B] sm:text-xl">
              DevBhumi turns the Flutter app into a sharper product story: deity-led AI conversation,
              Vedic insight, devotional media, meditation, daily ritual guidance, and an admin-controlled
              spiritual content engine built for scale.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="#experience"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#E8752A] to-[#FF8C00] px-6 py-4 text-base font-semibold text-white shadow-[0_18px_40px_rgba(232,117,42,0.24)] transition-transform duration-300 hover:-translate-y-0.5"
              >
                Explore the Product
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/investor"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-[#E8D6C8] bg-white/88 px-6 py-4 text-base font-semibold text-[#3E2723] shadow-[0_16px_32px_rgba(62,39,35,0.05)] transition-transform duration-300 hover:-translate-y-0.5"
              >
                Investor Narrative
                <HeartHandshake className="h-4 w-4" />
              </Link>
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-3">
              {[
                ['Product Stack', 'AI + Bhakti', 'Conversation, insight, media, and ritual inside one system.'],
                ['Operational Depth', 'Admin CMS', 'Push, users, content, chats, settings, and monitoring already exist.'],
                ['Market Position', 'Category Bridge', 'Prayer, astrology, scripture, and devotional media intersect here.'],
              ].map(([eyebrow, title, text]) => (
                <div
                  key={title}
                  className="rounded-[1.8rem] border border-white/70 bg-white/80 p-5 shadow-[0_18px_45px_rgba(62,39,35,0.06)] backdrop-blur"
                >
                  <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#B56E3B]">{eyebrow}</div>
                  <div className="mt-3 text-2xl font-semibold tracking-[-0.05em] text-[#3E2723]">{title}</div>
                  <p className="mt-3 text-sm leading-6 text-[#7A6055]">{text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[43rem]">
            <div className="absolute left-1/2 top-[18%] -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,183,77,0.45),rgba(232,117,42,0.08),transparent_70%)] blur-2xl" />
            <div className="grid gap-5 lg:grid-cols-[0.78fr_1fr]">
              <div className="space-y-5 lg:pt-16">
                <div className="float-gentle rounded-[2rem] border border-white/80 bg-white/88 p-3 shadow-[0_24px_80px_rgba(62,39,35,0.12)] backdrop-blur">
                  <div className="mb-3 flex items-center gap-3 rounded-2xl bg-[#FFF5EC] px-4 py-3">
                    <Image src="/brand/omlogo.png" alt="DevBhumi Om symbol" width={34} height={34} className="h-9 w-9 rounded-xl" />
                    <div>
                      <div className="text-sm font-semibold text-[#3E2723]">Divine Connect</div>
                      <div className="text-xs text-[#8E6F61]">Seek Guidance. Find Peace.</div>
                    </div>
                  </div>
                  <Image
                    src="/showcase/home-light.jpeg"
                    alt="Home screen from the Flutter app"
                    width={520}
                    height={980}
                    className="h-auto w-full rounded-[1.5rem] border border-[#F3E1D4]"
                  />
                </div>
                <div className="rounded-[2rem] border border-[#F6D5BE] bg-[#FFF3E6] p-5 shadow-[0_18px_50px_rgba(232,117,42,0.12)]">
                  <div className="flex items-start gap-4">
                    <div className="rounded-2xl bg-white/80 p-3 text-[#E8752A]">
                      <MonitorCog className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-lg font-semibold tracking-[-0.03em] text-[#3E2723]">Not just a front-end demo</div>
                      <p className="mt-1 text-sm leading-6 text-[#7A6055]">
                        The admin platform already covers content, shorts, bhajans, deities, users, chats,
                        notifications, app settings, and monitor views.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid gap-5">
                <div className="rounded-[2rem] border border-white/80 bg-white/88 p-3 shadow-[0_24px_80px_rgba(62,39,35,0.12)] backdrop-blur">
                  <Image
                    src="/showcase/deity-selection.jpeg"
                    alt="Deity selection screen"
                    width={460}
                    height={920}
                    className="h-auto w-full rounded-[1.5rem] border border-[#F3E1D4]"
                  />
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="rounded-[2rem] border border-white/75 bg-white/90 p-3 shadow-[0_18px_60px_rgba(62,39,35,0.1)]">
                    <Image
                      src="/showcase/bhajan.jpeg"
                      alt="Bhajan experience"
                      width={320}
                      height={700}
                      className="h-auto w-full rounded-[1.4rem] border border-[#F3E1D4]"
                    />
                  </div>
                  <div className="rounded-[2rem] border border-white/75 bg-white/90 p-3 shadow-[0_18px_60px_rgba(62,39,35,0.1)] sm:translate-y-10">
                    <Image
                      src="/showcase/profile.jpeg"
                      alt="Profile and settings screen"
                      width={320}
                      height={700}
                      className="h-auto w-full rounded-[1.4rem] border border-[#F3E1D4]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="opportunity" className="mx-auto max-w-7xl px-6 py-12 sm:py-20">
        <div className="rounded-[2.2rem] border border-[#F0D7C6] bg-white/84 p-8 shadow-[0_24px_80px_rgba(62,39,35,0.06)] backdrop-blur sm:p-10 lg:p-12">
          <SectionHeading
            label="Why Now"
            title="The spiritual-tech market is real, but still fragmented across single-purpose products."
            body="Users still bounce between meditation apps, astrology marketplaces, devotional utilities, and scripture tools. DevBhumi becomes stronger when presented as the Hindu-native operating layer that unifies those behaviors."
          />

          <div className="mt-10 grid gap-4 lg:grid-cols-4">
            {[
              ['Prayer', 'Habit, calm, and reflection'],
              ['Astrology', 'Prediction, consultation, and timing'],
              ['Devotion', 'Bhajans, pooja, and ritual identity'],
              ['Scripture', 'Daily wisdom, reflection, and study'],
            ].map(([title, text]) => (
              <div key={title} className="rounded-[1.65rem] border border-[#F3E1D4] bg-[#FFF8F2] p-6">
                <div className="text-sm font-semibold text-[#E8752A]">{title}</div>
                <p className="mt-3 text-sm leading-7 text-[#71574B]">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="mx-auto max-w-7xl px-6 py-16 sm:py-24">
        <SectionHeading
          label="Product Experience"
          title="A tighter, more premium product story built around stacked mobile moments."
          body="Instead of flat feature blocks, the experience section now behaves more like a high-end product deck. Each story combines real app screens, a clear use case, and a sharper business implication."
        />

        <div className="mt-12 space-y-8">
          {showcaseCards.map((group, index) => {
            const Icon = group.icon

            return (
              <div
                key={group.title}
                className={`grid gap-8 rounded-[2.2rem] border border-[#F0D7C6] bg-white/86 p-6 shadow-[0_24px_70px_rgba(62,39,35,0.07)] backdrop-blur lg:grid-cols-[0.96fr_1.04fr] lg:p-8 ${
                  index % 2 === 1 ? 'lg:grid-cols-[1.04fr_0.96fr]' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="inline-flex items-center gap-3 rounded-full bg-[#FFF4E7] px-4 py-2 text-sm font-medium text-[#A4511A]">
                    <Icon className="h-4 w-4" />
                    {group.label}
                  </div>
                  <h3 className="mt-5 max-w-xl text-3xl font-semibold leading-tight tracking-[-0.04em] text-[#3E2723]">
                    {group.title}
                  </h3>
                  <p className="mt-4 max-w-xl text-base leading-8 text-[#72584D]">{group.body}</p>

                  <div className="mt-6 grid gap-3">
                    {group.points.map((item) => (
                      <div key={item} className="rounded-2xl border border-[#F5E4D8] bg-[#FFF9F4] px-4 py-4">
                        <p className="text-sm leading-7 text-[#60483E]">{item}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 rounded-[1.5rem] border border-[#F3D4BD] bg-[linear-gradient(135deg,#FFF6EC,#FFF0E2)] p-5">
                    <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#C0713A]">Why it matters</div>
                    <p className="mt-3 text-sm leading-7 text-[#654D41]">{group.insight}</p>
                  </div>
                </div>

                <div
                  className={`rounded-[2rem] bg-gradient-to-br from-[#FFF4E8] via-[#FFE6D1] to-[#FFF8F0] p-5 shadow-[0_20px_60px_rgba(232,117,42,0.14)] ${
                    index % 2 === 1 ? 'lg:order-1' : ''
                  }`}
                >
                  <div className="relative mx-auto h-[24rem] max-w-[30rem] sm:h-[27rem]">
                    {group.stack.map((card) => (
                      <div
                        key={card.src}
                        className={`absolute rounded-[1.9rem] border border-white/80 bg-white/92 p-3 shadow-[0_24px_50px_rgba(62,39,35,0.12)] ${card.className}`}
                      >
                        <Image
                          src={card.src}
                          alt={card.alt}
                          width={360}
                          height={760}
                          className="h-auto w-full rounded-[1.3rem] border border-[#F0D7C6]"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      <section id="capabilities" className="mx-auto max-w-7xl px-6 py-16 sm:py-24">
        <SectionHeading
          label="Capability Map"
          title="What the application already proves at product level."
          body="These cards help stakeholders understand the scope quickly, while the stacked experience section above shows how that scope actually feels in the product."
        />

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {capabilityCards.map((card) => {
            const Icon = card.icon

            return (
              <div key={card.title} className="rounded-[1.8rem] border border-[#F0D7C6] bg-white/84 p-6 shadow-[0_20px_65px_rgba(62,39,35,0.06)]">
                <div className="inline-flex rounded-2xl bg-[#FFF4E7] p-3 text-[#E8752A]">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-2xl font-semibold tracking-[-0.04em] text-[#3E2723]">{card.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#72584D]">{card.text}</p>
              </div>
            )
          })}
        </div>
      </section>

      <section id="difference" className="mx-auto max-w-7xl px-6 py-16 sm:py-24">
        <div className="rounded-[2.2rem] border border-[#F0D7C6] bg-white/86 p-8 shadow-[0_24px_80px_rgba(62,39,35,0.06)] sm:p-10 lg:p-12">
          <SectionHeading
            label="Why We Are Different"
            title="Most adjacent products win one layer. DevBhumi is stronger when it connects the full stack."
            body="The comparison below is grounded in current public product positioning from official sites, then translated into a clearer investor-facing explanation of where DevBhumi can stand apart."
          />

          <div className="mt-10 overflow-hidden rounded-[1.8rem] border border-[#F3E1D4]">
            <div className="hidden grid-cols-[1.05fr_1.05fr_0.95fr_1.15fr] gap-px bg-[#F3E1D4] text-sm font-semibold text-[#5E4337] lg:grid">
              <div className="bg-[#FFF6EE] px-5 py-4">Category</div>
              <div className="bg-[#FFF6EE] px-5 py-4">Current market focus</div>
              <div className="bg-[#FFF6EE] px-5 py-4">Gap</div>
              <div className="bg-[#FFF6EE] px-5 py-4">DevBhumi edge</div>
            </div>

            {marketRows.map((row) => (
              <div key={row.category} className="border-t border-[#F3E1D4] first:border-t-0">
                <div className="grid gap-px bg-[#F3E1D4] lg:grid-cols-[1.05fr_1.05fr_0.95fr_1.15fr]">
                  <div className="bg-white px-5 py-5">
                    <div className="text-lg font-semibold tracking-[-0.03em] text-[#3E2723]">{row.category}</div>
                    <Link href={row.sourceHref} className="mt-2 inline-flex text-sm font-medium text-[#C9621D] hover:text-[#A94F14]">
                      Source: {row.sourceLabel}
                    </Link>
                  </div>
                  <div className="bg-white px-5 py-5 text-sm leading-7 text-[#72584D]">{row.focus}</div>
                  <div className="bg-white px-5 py-5 text-sm leading-7 text-[#72584D]">{row.gap}</div>
                  <div className="bg-white px-5 py-5 text-sm leading-7 text-[#5B3F34]">{row.edge}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="platform" className="mx-auto max-w-7xl px-6 py-16 sm:py-24">
        <div className="grid gap-8 lg:grid-cols-[0.94fr_1.06fr]">
          <div>
            <SectionHeading
              label="Platform Story"
              title="The moat is not just AI. It is operational control over spiritual experiences."
              body="Many spiritual products stop at content or consultation. DevBhumi already shows the beginnings of a programmable distribution layer: content publishing, deity curation, media feeds, notifications, user oversight, logs, and monitoring."
            />

            <div className="mt-8 grid gap-4">
              {platformPillars.map((pillar) => {
                const Icon = pillar.icon

                return (
                  <div key={pillar.title} className="flex gap-4 rounded-[1.6rem] border border-[#F0D7C6] bg-white/84 p-5 shadow-[0_18px_50px_rgba(62,39,35,0.05)]">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#FFF4E7] text-[#E8752A]">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold tracking-[-0.03em] text-[#3E2723]">{pillar.title}</h3>
                      <p className="mt-2 text-sm leading-7 text-[#72584D]">{pillar.text}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          <div className="rounded-[2.2rem] border border-[#F0D7C6] bg-white/86 p-8 shadow-[0_24px_80px_rgba(62,39,35,0.06)]">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#FFF4E7] px-4 py-2 text-sm font-medium text-[#A4511A]">
              <MonitorCog className="h-4 w-4" />
              Admin panel capabilities
            </div>
            <h3 className="mt-5 text-3xl font-semibold tracking-[-0.04em] text-[#3E2723]">
              A product story investors can trust because the backend already exists.
            </h3>
            <p className="mt-4 text-base leading-8 text-[#72584D]">
              The admin navigation shows this is being built as a system, not a one-screen spiritual prototype.
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {adminModules.map((module) => (
                <div key={module} className="rounded-2xl border border-[#F5E4D8] bg-[#FFF9F4] px-4 py-4 text-sm font-medium text-[#60483E]">
                  {module}
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-[1.7rem] bg-gradient-to-br from-[#3E2723] via-[#7B3F12] to-[#FF8C00] p-[1px]">
              <div className="rounded-[1.65rem] bg-[linear-gradient(180deg,rgba(255,248,240,0.98),rgba(255,244,231,0.94))] p-6">
                <div className="grid gap-4 sm:grid-cols-2">
                  {investorReasons.map((reason) => (
                    <div key={reason} className="rounded-2xl bg-white/88 p-4 text-sm leading-7 text-[#5F473D] shadow-[0_12px_30px_rgba(62,39,35,0.06)]">
                      {reason}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="cta" className="mx-auto max-w-7xl px-6 py-16 sm:py-24">
        <div className="overflow-hidden rounded-[2.2rem] border border-[#F0D7C6] bg-[linear-gradient(135deg,#FFF7EE_0%,#FFE7CF_46%,#FFF8F0_100%)] p-8 shadow-[0_30px_90px_rgba(232,117,42,0.14)] sm:p-10 lg:p-12">
          <div className="grid gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.24em] text-[#C0713A]">Next Move</div>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-[#3E2723] sm:text-4xl lg:text-5xl">
                DevBhumi is ready to be presented as a category-defining spiritual platform, not a feature list.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-[#72584D] sm:text-lg">
                This redesign reframes the product around what matters to users and stakeholders:
                emotional resonance, retention behavior, operational depth, and a differentiated place
                in the market.
              </p>
            </div>

            <div className="rounded-[1.9rem] border border-white/75 bg-white/88 p-6 shadow-[0_20px_60px_rgba(62,39,35,0.08)]">
              <div className="grid gap-4">
                <Link
                  href="#top"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#E8752A] to-[#FF8C00] px-5 py-4 text-base font-semibold text-white"
                >
                  Review the Story
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/investor"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-[#E8D6C8] bg-[#FFF8F0] px-5 py-4 text-base font-semibold text-[#3E2723]"
                >
                  Open Investor Page
                  <HeartHandshake className="h-4 w-4" />
                </Link>
                <div className="rounded-2xl bg-[#FFF4E7] px-4 py-4 text-sm leading-7 text-[#72584D]">
                  Light mode only, local Inter Tight typography from the Flutter app, tighter spacing,
                  cleaner alignment, and a story grounded in the real codebase.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
