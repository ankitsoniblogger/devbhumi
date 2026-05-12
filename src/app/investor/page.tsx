import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Brain,
  Flame,
  Globe,
  HeartHandshake,
  Layers3,
  MonitorCog,
  Shield,
  Sparkles,
  Users,
  LineChart,
  Target,
  Zap,
  Briefcase,
  Rocket
} from "lucide-react";

const problemBlocks = [
  {
    title: "Fragmented Experience",
    text: "Modern seekers use multiple disconnected apps for astrology, prayer, bhajans, and meditation. There is no unified spiritual operating layer.",
  },
  {
    title: "Surface-Level Connection",
    text: "High app usage exists across the wellness sector, but users still feel lonely and lack deep, personalized emotional and spiritual companionship.",
  },
  {
    title: "Lack of Cultural Context",
    text: "Generic AI companions and mental wellness apps lack the native cultural, ritual, and spiritual context required for Hindu users.",
  },
];

const solutionBlocks = [
  {
    title: "AI Deities & Guides",
    body: "Personal, spiritually-aligned conversational agents with long-term memory that provide deep emotional and spiritual companionship.",
    icon: Brain,
    image: "/showcase/Talk with God.jpeg",
  },
  {
    title: "Predictive Vedic Insight",
    body: "AI-assisted Kundli interpretation, daily horoscope, and image-based palm reading integrated directly into the user's daily journey.",
    icon: Sparkles,
    image: "/showcase/Kundli.jpeg",
  },
  {
    title: "Daily Devotional Loop",
    body: "A seamless ecosystem of Bhajans, calendar rhythms, meditation timers, and short-form video content to build lasting daily habits.",
    icon: Flame,
    image: "/showcase/meditation.jpeg",
  },
];

const marketStats = [
  {
    label: "TAM (Total Addressable Market)",
    value: "$10B+",
    desc: "Global Spiritual Wellness & AI Companion Market",
  },
  {
    label: "SAM (Serviceable Addressable Market)",
    value: "$3B+",
    desc: "Indian Devotional & Astrology Market",
  },
  {
    label: "SOM (Serviceable Obtainable Market)",
    value: "$100M+",
    desc: "Targeting high-intent, tech-savvy seekers globally",
  },
];

const demoSteps = [
  "1. User signs up and discovers their personalized Vedic profile.",
  "2. Creates a connection with an AI deity or spiritual guide.",
  "3. The AI learns user context, providing tailored emotional and spiritual advice.",
  "4. User builds a daily habit with integrated Bhajans, calendar events, and meditation.",
  "5. Unlocks premium predictive insights (Kundli, Palmistry) during high-intent moments.",
];

const businessModel = [
  "Premium Subscriptions: For advanced AI guidance, deeper memory, and ad-free devotional experiences.",
  "Predictive Insights: Paid access to highly detailed Kundli analysis, astrology consultations, and palm reading.",
  "Devotional Commerce: Partnerships with temples and spiritual brands for virtual pooja and authentic products.",
  "Creator Economy: Enabling spiritual influencers to share premium guided content and shorts.",
];

const tractionMetrics = [
  { label: "Waitlist / Early Signups", value: "10K+" },
  { label: "Est. Daily Engagement", value: "45 mins" },
  { label: "Target CAC", value: "< $2.00" },
  { label: "Target Day-30 Retention", value: "30%+" },
];

const competitiveAnalysis = [
  {
    title: "Astrology Platforms",
    current: "Strong at consultation, kundli, horoscope, and monetizable intent (e.g., Astrotalk).",
    gap: "Highly transactional. Weak on daily emotional companionship and habit-building.",
  },
  {
    title: "Meditation Apps",
    current: "Strong at habit, calm, and guided reflection (e.g., Headspace, Calm).",
    gap: "Spiritually neutral. Lacks Hindu identity, ritual context, and predictive insight.",
  },
  {
    title: "Devotional Products",
    current: "Strong at ritual, temple access, bhajans, and calendar utilities (e.g., Sri Mandir).",
    gap: "Utility-focused. Less personalized around interactive AI guidance and emotional problem-solving.",
  },
];

const gtmStrategy = [
  { title: "Performance Marketing", text: "Leveraging deep founder expertise in Meta & TikTok ads to acquire users efficiently." },
  { title: "Viral Short-Form Content", text: "Distributing AI-generated spiritual quotes, Bhajan snippets, and astrology insights on Reels/Shorts." },
  { title: "Influencer Partnerships", text: "Collaborating with spiritual creators and micro-influencers to build initial trust and reach." },
  { title: "Community Building", text: "Creating a referral ecosystem and ambassador programs to drive organic word-of-mouth growth." },
];

const techStack = [
  "Culturally Fine-Tuned AI: LLMs optimized for Hindu spiritual context, scripture knowledge, and empathetic responses.",
  "Memory & Context Engine: Persistent user state that remembers past queries, life events, and emotional states.",
  "Scalable Infrastructure: Robust cloud backend supporting real-time chat, audio streaming (Bhajans), and video shorts.",
  "Comprehensive Admin Panel: Full operational control over content, deity management, users, and push notifications.",
];

const financialProjections = [
  "Year 1: Focus on user acquisition, refining AI infrastructure, and building a high-retention core loop.",
  "Year 2: Introduce premium subscription tiers, scale marketing, and achieve a highly profitable LTV:CAC ratio.",
  "Year 3: Expand into devotional commerce, creator partnerships, and reach profitability at scale.",
];

const teamBlocks = [
  {
    title: "Performance Marketing DNA",
    text: "Founder expertise in ad-tech ensures highly efficient user acquisition and scalable growth engines.",
  },
  {
    title: "AI Product Vision",
    text: "Deep understanding of conversational AI, retention loops, and consumer mobile behavior.",
  },
  {
    title: "Technical Capability",
    text: "Full-stack development experience, moving quickly from prototype to a robust, scalable backend system.",
  },
];

const futureRoadmap = [
  "Spiritual Operating System: Expanding from an app to a complete emotional and spiritual ecosystem.",
  "AI Relationship Network: Human + AI emotional ecosystems where users share journeys.",
  "Wearable Integration: Mindful living and bio-feedback tied to spiritual routines.",
  "Virtual Reality Experiences: Immersive digital temple visits and guided global meditations.",
];

function DeckHeading({
  label,
  title,
  body,
  center = false,
}: {
  label: string;
  title: string;
  body: string;
  center?: boolean;
}) {
  return (
    <div className={center ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <div className="text-xs font-semibold uppercase tracking-[0.24em] text-[#C0713A]">
        {label}
      </div>
      <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.045em] text-[#3E2723] sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      <p className="mt-5 text-base leading-8 text-[#72584D] sm:text-lg">
        {body}
      </p>
    </div>
  );
}

export default function InvestorPage() {
  return (
    <div className="overflow-x-hidden bg-[linear-gradient(180deg,#FFF8F0_0%,#FFF5EC_36%,#FFF8F0_100%)] pt-20 text-[#3E2723]">
      {/* 1. Cover Slide */}
      <section className="relative isolate">
        <div className="absolute inset-x-0 top-0 -z-10 h-[36rem] bg-[radial-gradient(circle_at_top,rgba(232,117,42,0.14),transparent_64%)]" />
        <div className="mx-auto max-w-7xl px-6 py-12 sm:py-16 lg:py-20">
          <div className="rounded-[2.5rem] border border-[#F0D7C6] bg-[linear-gradient(135deg,rgba(255,255,255,0.82),rgba(255,247,238,0.94))] p-7 shadow-[0_28px_90px_rgba(62,39,35,0.08)] backdrop-blur sm:p-9 lg:p-10">
            <div className="grid gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
              <div className="max-w-3xl">
                <div className="inline-flex items-center gap-2 rounded-full border border-[#F2D5BE] bg-white/90 px-4 py-2 text-sm font-medium text-[#A4511A] shadow-[0_10px_30px_rgba(232,117,42,0.08)]">
                  <span className="h-2 w-2 rounded-full bg-[#E8752A]" />
                  Seed Pitch Deck
                </div>

                <h1 className="mt-7 max-w-4xl text-5xl font-semibold leading-[1.02] tracking-[-0.055em] text-[#3E2723] sm:text-6xl lg:text-[4.5rem]">
                  Divine Connect
                </h1>
                <h2 className="mt-4 text-2xl font-medium text-[#A4511A] sm:text-3xl">
                  AI-Powered Emotional & Spiritual Connection Platform
                </h2>

                <p className="mt-6 max-w-2xl text-lg leading-8 text-[#6E554B] sm:text-xl">
                  Building the Hindu spiritual operating layer for a mobile-first generation. We unify guidance, ritual, predictive insight, and devotional content into one coherent emotional ecosystem.
                </p>

                <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#E8752A] to-[#FF8C00] px-6 py-4 text-base font-semibold text-white shadow-[0_18px_40px_rgba(232,117,42,0.24)]"
                  >
                    Contact Founder
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>

              <div className="relative mx-auto w-full max-w-[42rem]">
                <div className="absolute right-10 top-10 -z-10 h-52 w-52 rounded-full bg-[radial-gradient(circle,rgba(255,183,77,0.26),rgba(232,117,42,0.02),transparent_72%)] blur-2xl" />
                <div className="grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
                  <div className="rounded-[2rem] border border-white/80 bg-white/90 p-3 shadow-[0_20px_55px_rgba(62,39,35,0.08)]">
                    <Image
                      src="/showcase/home.jpeg"
                      alt="DevBhumi home screen"
                      width={520}
                      height={980}
                      className="h-auto w-full rounded-[1.4rem] border border-[#F3E1D4]"
                    />
                  </div>
                  <div className="grid gap-5">
                    <div className="rounded-[1.8rem] border border-white/80 bg-white/90 p-3 shadow-[0_18px_50px_rgba(62,39,35,0.08)]">
                      <Image
                        src="/showcase/Talk with God.jpeg"
                        alt="Talk with God screen"
                        width={360}
                        height={760}
                        className="h-auto w-full rounded-[1.25rem] border border-[#F3E1D4]"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Problem Statement */}
      <section className="mx-auto max-w-7xl px-6 py-16 sm:py-24">
        <DeckHeading
          label="02. Problem Statement"
          title="Spiritual demand is deep, but the digital experience is fragmented and lonely."
          body="Users crave connection, but current digital solutions fail to provide emotional resonance rooted in their cultural identity."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {problemBlocks.map((block) => (
            <div key={block.title} className="rounded-[1.7rem] border border-[#F0D7C6] bg-white/86 p-6 shadow-[0_18px_50px_rgba(62,39,35,0.05)]">
              <h3 className="text-xl font-semibold text-[#3E2723]">{block.title}</h3>
              <p className="mt-3 text-sm leading-7 text-[#72584D]">{block.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Solution */}
      <section className="mx-auto max-w-7xl px-6 py-16 sm:py-24">
        <DeckHeading
          label="03. Solution"
          title="A unified platform for AI-led spiritual companionship."
          body="Divine Connect brings together AI conversational depth, predictive astrology, and devotional habits into a single premium experience."
          center
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {solutionBlocks.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="overflow-hidden rounded-[2rem] border border-[#F0D7C6] bg-white/86 shadow-[0_22px_65px_rgba(62,39,35,0.06)]">
                <div className="border-b border-[#F1E0D3] p-6">
                  <div className="inline-flex rounded-2xl bg-[#FFF4E7] p-3 text-[#E8752A]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 text-2xl font-semibold tracking-[-0.04em] text-[#3E2723]">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[#72584D]">{item.body}</p>
                </div>
                <div className="bg-[#FFF8F2] p-4">
                  <div className="rounded-[1.5rem] border border-white/80 bg-white p-3 shadow-[0_12px_28px_rgba(62,39,35,0.06)]">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={360}
                      height={760}
                      className="h-auto w-full rounded-[1.2rem] border border-[#F0D7C6]"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. Market Opportunity */}
      <section className="mx-auto max-w-7xl px-6 py-16 sm:py-24">
        <div className="rounded-[2.2rem] border border-[#F0D7C6] bg-white/86 p-8 shadow-[0_24px_80px_rgba(62,39,35,0.06)] sm:p-10 lg:p-12">
          <DeckHeading
            label="04. Market Opportunity"
            title="A massive, deeply engaged global audience."
            body="The convergence of the rapidly growing AI companion market with traditional spiritual and mental wellness creates an unprecedented opportunity."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {marketStats.map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-[#F5E4D8] bg-[#FFF9F4] p-6 text-center">
                <div className="text-4xl font-bold text-[#E8752A]">{stat.value}</div>
                <div className="mt-2 text-sm font-semibold uppercase tracking-wider text-[#3E2723]">{stat.label}</div>
                <p className="mt-2 text-sm text-[#72584D]">{stat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Product Demo / How It Works */}
      <section className="mx-auto max-w-7xl px-6 py-16 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <DeckHeading
              label="05. How It Works"
              title="The user journey to spiritual connection."
              body="A step-by-step emotional ecosystem that turns initial curiosity into a daily habit."
            />
            <div className="mt-8 grid gap-4">
              {demoSteps.map((step, index) => (
                <div key={index} className="flex gap-4 rounded-xl border border-[#F2D5BE] bg-white/80 p-4 shadow-sm">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#E8752A] text-sm font-bold text-white">
                    {index + 1}
                  </div>
                  <p className="mt-1 text-sm text-[#3E2723]">{step.substring(3)}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-md">
            <div className="rounded-[2rem] border border-[#F0D7C6] bg-white/90 p-4 shadow-xl">
               <Image
                  src="/showcase/ask question.jpeg"
                  alt="App Demo"
                  width={400}
                  height={800}
                  className="h-auto w-full rounded-[1.4rem] border border-[#F3E1D4]"
                />
            </div>
          </div>
        </div>
      </section>

      {/* 6. Business Model & 7. Traction */}
      <section className="mx-auto max-w-7xl px-6 py-16 sm:py-24">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-[2rem] border border-[#F0D7C6] bg-white/86 p-8 shadow-[0_22px_65px_rgba(62,39,35,0.05)]">
            <DeckHeading
              label="06. Business Model"
              title="Monetization built on trust and repeat usage."
              body="Revenue layers naturally on top of high-intent insight and premium spiritual experiences."
            />
            <div className="mt-8 grid gap-3">
              {businessModel.map((item, i) => (
                <div key={i} className="flex items-start gap-3 rounded-2xl border border-[#F5E4D8] bg-[#FFF9F4] px-4 py-4 text-sm leading-7 text-[#654C40]">
                  <Briefcase className="mt-1 h-4 w-4 shrink-0 text-[#E8752A]" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-[#F0D7C6] bg-white/86 p-8 shadow-[0_22px_65px_rgba(62,39,35,0.05)]">
            <DeckHeading
              label="07. Traction"
              title="Early signals of deep engagement."
              body="Even at this early stage, the demand for culturally native spiritual AI is evident."
            />
            <div className="mt-8 grid grid-cols-2 gap-4">
              {tractionMetrics.map((metric, i) => (
                <div key={i} className="rounded-2xl border border-[#F5E4D8] bg-[#FFF9F4] p-5 text-center">
                  <div className="text-2xl font-bold text-[#E8752A]">{metric.value}</div>
                  <div className="mt-1 text-xs font-medium uppercase tracking-wide text-[#654C40]">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 8. Competitive Analysis */}
      <section className="mx-auto max-w-7xl px-6 py-16 sm:py-24">
        <DeckHeading
          label="08. Competitive Analysis"
          title="Bridging the gap between utility and emotion."
          body="Adjacent products serve separate jobs, while Divine Connect combines them into a more valuable daily relationship."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {competitiveAnalysis.map((item) => (
            <div key={item.title} className="rounded-[1.7rem] border border-[#F0D7C6] bg-white/86 p-6 shadow-[0_18px_50px_rgba(62,39,35,0.05)]">
              <h3 className="text-xl font-semibold text-[#3E2723]">{item.title}</h3>
              <p className="mt-4 text-sm leading-7 text-[#72584D]">
                <span className="font-semibold text-[#5F473C]">Current market:</span> {item.current}
              </p>
              <p className="mt-2 text-sm leading-7 text-[#72584D]">
                <span className="font-semibold text-[#E8752A]">The Gap:</span> {item.gap}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 9. Go-To-Market & 10. Technology */}
      <section className="mx-auto max-w-7xl px-6 py-16 sm:py-24">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-[2rem] border border-[#F0D7C6] bg-white/86 p-8 shadow-[0_22px_65px_rgba(62,39,35,0.05)]">
            <DeckHeading
              label="09. Go-To-Market Strategy"
              title="Driven by viral content and precise acquisition."
              body="A growth strategy built on the founder's core expertise in performance marketing."
            />
            <div className="mt-8 grid gap-4">
              {gtmStrategy.map((strat, i) => (
                <div key={i} className="rounded-xl border border-[#F5E4D8] bg-[#FFF9F4] p-4">
                  <h4 className="font-semibold text-[#3E2723]">{strat.title}</h4>
                  <p className="mt-1 text-sm text-[#654C40]">{strat.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-[#F0D7C6] bg-white/86 p-8 shadow-[0_22px_65px_rgba(62,39,35,0.05)]">
            <DeckHeading
              label="10. Technology & AI"
              title="A defensible, scalable spiritual AI engine."
              body="Backend-managed content, long-term memory, and fine-tuned LLMs create a strong technical moat."
            />
            <div className="mt-8 grid gap-4">
              {techStack.map((tech, i) => (
                <div key={i} className="flex items-start gap-3 rounded-xl border border-[#F5E4D8] bg-[#FFF9F4] p-4 text-sm text-[#654C40]">
                  <MonitorCog className="mt-0.5 h-4 w-4 shrink-0 text-[#E8752A]" />
                  <span>{tech}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 11. Financial Projections & 12. Team */}
      <section className="mx-auto max-w-7xl px-6 py-16 sm:py-24">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-[2rem] border border-[#F0D7C6] bg-white/86 p-8 shadow-[0_22px_65px_rgba(62,39,35,0.05)]">
            <DeckHeading
              label="11. Financial Projections"
              title="Path to sustainable growth."
              body="A realistic roadmap from user acquisition to massive profitability at scale."
            />
            <div className="mt-8 grid gap-4">
              {financialProjections.map((proj, i) => (
                <div key={i} className="flex items-center gap-4 rounded-xl border border-[#F5E4D8] bg-[#FFF9F4] p-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-[#E8752A] shadow-sm">
                    <LineChart className="h-5 w-5" />
                  </div>
                  <p className="text-sm text-[#654C40]">{proj}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-[#F0D7C6] bg-white/86 p-8 shadow-[0_22px_65px_rgba(62,39,35,0.05)]">
            <DeckHeading
              label="12. The Team"
              title="Built by experts in ad-tech, product, and AI."
              body="Investors invest heavily in founders. This team has the exact skills needed to win."
            />
            <div className="mt-8 grid gap-4">
              {teamBlocks.map((team, i) => (
                <div key={i} className="rounded-xl border border-[#F5E4D8] bg-[#FFF9F4] p-4">
                  <h4 className="font-semibold text-[#3E2723]">{team.title}</h4>
                  <p className="mt-1 text-sm text-[#654C40]">{team.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 13. Vision & 14. Funding Ask */}
      <section className="mx-auto max-w-7xl px-6 py-16 sm:py-24">
        <div className="overflow-hidden rounded-[2.2rem] border border-[#F0D7C6] bg-[linear-gradient(135deg,#FFF7EE_0%,#FFE7CF_46%,#FFF8F0_100%)] p-8 shadow-[0_28px_90px_rgba(232,117,42,0.12)] sm:p-10 lg:p-12">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <DeckHeading
                label="13. Future Vision"
                title="The spiritual operating system of the future."
                body="Big vision sells. We are building an ecosystem that transcends a single mobile app."
              />
              <div className="mt-8 grid gap-3">
                {futureRoadmap.map((item, i) => (
                  <div key={i} className="flex items-center gap-3 rounded-xl border border-white/50 bg-white/60 p-3 text-sm text-[#5F473D]">
                    <Rocket className="h-4 w-4 shrink-0 text-[#E8752A]" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[1.9rem] border border-white/75 bg-white/88 p-8 shadow-[0_20px_60px_rgba(62,39,35,0.08)]">
              <DeckHeading
                label="14. The Ask"
                title="Scaling the next generation of spiritual tech."
                body="We are raising a Seed Round to accelerate our core loops."
              />
              <div className="mt-6 rounded-2xl border border-[#F5E4D8] bg-[#FFF9F4] p-6 text-center">
                <div className="text-3xl font-bold text-[#E8752A]">$250K - $500K</div>
                <div className="mt-1 text-sm font-semibold uppercase tracking-wide text-[#654C40]">Target Seed Raise</div>
              </div>
              <div className="mt-4 grid grid-cols-3 gap-2 text-center text-xs text-[#654C40]">
                <div className="rounded-lg bg-[#FFF4E7] py-2">50% Product & AI</div>
                <div className="rounded-lg bg-[#FFF4E7] py-2">30% Acquisition</div>
                <div className="rounded-lg bg-[#FFF4E7] py-2">20% Operations</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 15. Closing Slide */}
      <section className="mx-auto max-w-7xl px-6 pb-24 pt-10 text-center">
        <div className="mx-auto max-w-2xl rounded-[2rem] border border-[#F0D7C6] bg-white/86 p-12 shadow-[0_20px_60px_rgba(62,39,35,0.05)]">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-[#E8752A] to-[#FF8C00] text-white shadow-lg">
            <HeartHandshake className="h-8 w-8" />
          </div>
          <h2 className="mt-6 text-4xl font-semibold text-[#3E2723]">Divine Connect</h2>
          <p className="mt-2 text-lg text-[#A4511A]">Seek Guidance. Find Peace.</p>
          <p className="mt-6 text-sm text-[#72584D]">Thank you for your time. Let's build the future of spiritual connection together.</p>
          
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="mailto:hello@ankitsoni.in?subject=Divine%20Connect%20Seed%20Investment"
              className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#E8752A] to-[#FF8C00] px-8 py-4 text-base font-semibold text-white shadow-lg sm:w-auto"
            >
              Contact Founder
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
