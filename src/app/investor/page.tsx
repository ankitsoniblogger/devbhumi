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
} from "lucide-react";

const pitchSections = [
  {
    label: "01. Company Purpose",
    title:
      "DevBhumi is building a Hindu spiritual companion platform for everyday life, not a single-use devotional utility.",
    body: "The strongest company story is not “AI for religion.” It is a mobile product that connects guidance, ritual, predictive insight, content, and repeat-use behavior into one coherent experience.",
  },
  {
    label: "02. Problem",
    title:
      "Spiritual demand is deep, but the digital product landscape is still fragmented.",
    body: "Users move between prayer tools, astrology flows, bhajan apps, scripture products, and ritual utilities. Most products serve one narrow job well, but very few become the daily spiritual operating layer.",
  },
  {
    label: "03. Why Now",
    title:
      "The timing works because mobile behavior, cultural identity, and AI interfaces are finally converging.",
    body: "A modern Hindu user already consumes content, seeks guidance, watches short-form media, and builds routines through mobile surfaces. Conversational AI makes those behaviors easier to unify into one premium product system.",
  },
];

const productProof = [
  {
    title: "Guidance",
    body: "The Flutter app already supports deity-led entry points, guided prompts, saved answers, and repeatable conversation loops.",
    icon: Brain,
    image: "/showcase/deity-selection.jpeg",
  },
  {
    title: "Practice",
    body: "Bhajans, daily quote flows, meditation, reminders, and calendar-driven behavior make the product more than a one-time query tool.",
    icon: Flame,
    image: "/showcase/bhajan.jpeg",
  },
  {
    title: "System",
    body: "The admin panel already manages content, deities, shorts, users, push, settings, and monitoring, which makes the platform story credible.",
    icon: MonitorCog,
    image: "/showcase/profile.jpeg",
  },
];

const marketLens = [
  {
    title: "Prayer and wellness apps",
    current: "Strong at habit, calm, and guided reflection.",
    gap: "Usually weaker on Hindu identity, ritual context, and predictive spiritual insight.",
  },
  {
    title: "Astrology platforms",
    current:
      "Strong at consultation, kundli, horoscope, and monetizable intent.",
    gap: "Often transactional rather than relationship-led or habit-led.",
  },
  {
    title: "Devotional products",
    current:
      "Strong at ritual, temple access, bhajans, and calendar utilities.",
    gap: "Usually less personalized around interactive guidance and emotional problem-solving.",
  },
];

const moatBlocks = [
  {
    title: "Category bridge",
    text: "DevBhumi sits at the intersection of prayer, astrology, devotion, and scripture instead of living inside only one bucket.",
    icon: Layers3,
  },
  {
    title: "Product breadth",
    text: "The app already combines multiple surfaces that can reinforce each other rather than fighting for user attention separately.",
    icon: Sparkles,
  },
  {
    title: "Operational control",
    text: "Backend-managed content, deity setup, notifications, and monitoring make iteration speed part of the product advantage.",
    icon: Shield,
  },
  {
    title: "Identity resonance",
    text: "The tone, imagery, and structure feel culturally native rather than adapted from generic wellness software.",
    icon: HeartHandshake,
  },
];

const businessModel = [
  "Premium subscription tiers for richer guidance, insight, and devotional experiences",
  "Paid predictive and interpretation layers built around high-intent usage",
  "Temple, spiritual brand, and content partnerships",
  "Devotional commerce and ritual-service expansion over time",
];

const gtmBlocks = [
  "Mobile-first consumer growth driven by culturally resonant product storytelling",
  "Retention loops through reminders, saved answers, shorts, and daily ritual surfaces",
  "Distribution opportunities through spiritual creators, temple ecosystems, and community channels",
  "Premium monetization introduced after habit and trust are strong enough",
];

const askBlocks = [
  "Refine the product into a stronger premium consumer experience",
  "Deepen the content and AI operating layer behind the product",
  "Improve retention, packaging, and monetization readiness",
  "Scale growth with a sharper category narrative and partnership motion",
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
      <section className="relative isolate">
        <div className="absolute inset-x-0 top-0 -z-10 h-[36rem] bg-[radial-gradient(circle_at_top,rgba(232,117,42,0.14),transparent_64%)]" />
        <div className="mx-auto max-w-7xl px-6 py-12 sm:py-16 lg:py-20">
          <div className="rounded-[2.5rem] border border-[#F0D7C6] bg-[linear-gradient(135deg,rgba(255,255,255,0.82),rgba(255,247,238,0.94))] p-7 shadow-[0_28px_90px_rgba(62,39,35,0.08)] backdrop-blur sm:p-9 lg:p-10">
            <div className="grid gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:items-start">
              <div className="max-w-3xl">
                <div className="inline-flex items-center gap-2 rounded-full border border-[#F2D5BE] bg-white/90 px-4 py-2 text-sm font-medium text-[#A4511A] shadow-[0_10px_30px_rgba(232,117,42,0.08)]">
                  <span className="h-2 w-2 rounded-full bg-[#E8752A]" />
                  Seed Narrative
                </div>

                <h1 className="mt-7 max-w-4xl text-5xl font-semibold leading-[1.02] tracking-[-0.055em] text-[#3E2723] sm:text-6xl lg:text-[4.9rem]">
                  DevBhumi is building the
                  <span className="bg-gradient-to-r from-[#E8752A] to-[#FF8C00] bg-clip-text text-transparent">
                    {" "}
                    Hindu spiritual operating layer
                  </span>{" "}
                  for a mobile-first generation.
                </h1>

                <p className="mt-6 max-w-2xl text-lg leading-8 text-[#6E554B] sm:text-xl">
                  This is not a single-purpose devotional app. It is a
                  category-bridging platform that unifies guidance, ritual,
                  predictive insight, devotional content, and backend-controlled
                  spiritual programming into one coherent consumer product.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-3">
                  {[
                    ["Category", "Spiritual companion platform"],
                    ["Shape", "Consumer app + admin system"],
                    ["Positioning", "Prayer, astrology, devotion, scripture"],
                  ].map(([label, value]) => (
                    <div
                      key={label}
                      className="rounded-lg border border-[#F2DFD1] bg-white/82 px-4 py-4 shadow-[0_12px_28px_rgba(62,39,35,0.04)]"
                    >
                      <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#B56E3B]">
                        {label}
                      </div>
                      <div className="mt-2 text-base font-semibold leading-6 text-[#3E2723]">
                        {value}
                      </div>
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
                    <Users className="h-4 w-4" />
                  </a>
                </div>

                <div className="mt-6 max-w-xl rounded-[1.8rem] border border-[#F3D8C6] bg-[#FFF4E7] p-5 shadow-[0_16px_40px_rgba(232,117,42,0.08)]">
                  <div className="flex gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-[#E8752A] shadow-[0_10px_20px_rgba(232,117,42,0.08)]">
                      <MonitorCog className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-lg font-semibold tracking-[-0.03em] text-[#3E2723]">
                        Consumer app + admin system
                      </div>
                      <p className="mt-1 text-sm leading-6 text-[#745A4D]">
                        The investor story is stronger because product breadth
                        and operational backend depth already exist together.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative mx-auto w-full max-w-[42rem]">
                <div className="absolute right-10 top-10 -z-10 h-52 w-52 rounded-full bg-[radial-gradient(circle,rgba(255,183,77,0.26),rgba(232,117,42,0.02),transparent_72%)] blur-2xl" />
                <div className="grid gap-5">
                  <div className="rounded-[2rem] border border-[#F0D7C6] bg-white/88 p-6 shadow-[0_24px_70px_rgba(62,39,35,0.08)]">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#B56E3B]">
                          Investment Frame
                        </div>
                        <h2 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-[#3E2723]">
                          One product can unify four fragmented spiritual
                          behaviors.
                        </h2>
                      </div>
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#FFF4E7] text-[#E8752A] shadow-[0_10px_20px_rgba(232,117,42,0.08)]">
                        <Layers3 className="h-5 w-5" />
                      </div>
                    </div>

                    <div className="mt-6 grid gap-3 sm:grid-cols-2">
                      {[
                        ["Prayer", "Habit, calm, and reflection"],
                        ["Astrology", "Prediction, consultation, and timing"],
                        ["Devotion", "Bhajans, pooja, and identity"],
                        ["Scripture", "Daily wisdom and study"],
                      ].map(([title, text]) => (
                        <div
                          key={title}
                          className="rounded-[1.35rem] border border-[#F3E1D4] bg-[#FFF9F4] px-4 py-4"
                        >
                          <div className="text-sm font-semibold text-[#3E2723]">
                            {title}
                          </div>
                          <p className="mt-1 text-sm leading-6 text-[#7B6156]">
                            {text}
                          </p>
                        </div>
                      ))}
                    </div>

                    <div className="mt-5 rounded-[1.4rem] border border-[#F1DDCF] bg-[#FFF5EB] px-4 py-4 text-sm leading-7 text-[#6F554A]">
                      DevBhumi becomes investable when positioned as the
                      Hindu-native operating layer that connects these jobs into
                      one high-retention product.
                    </div>
                  </div>

                  <div className="grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
                    <div className="rounded-[2rem] border border-white/80 bg-white/90 p-3 shadow-[0_20px_55px_rgba(62,39,35,0.08)]">
                      <Image
                        src="/showcase/home-light.jpeg"
                        alt="DevBhumi home screen"
                        width={520}
                        height={980}
                        className="h-auto w-full rounded-[1.4rem] border border-[#F3E1D4]"
                      />
                    </div>
                    <div className="grid gap-5">
                      <div className="rounded-[1.8rem] border border-white/80 bg-white/90 p-3 shadow-[0_18px_50px_rgba(62,39,35,0.08)]">
                        <Image
                          src="/showcase/deity-selection.jpeg"
                          alt="Deity selection screen"
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
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 sm:py-24">
        <div className="grid gap-5 lg:grid-cols-3">
          {pitchSections.map((section) => (
            <div
              key={section.label}
              className="rounded-[1.9rem] border border-[#F0D7C6] bg-white/86 p-7 shadow-[0_22px_65px_rgba(62,39,35,0.05)]"
            >
              <div className="text-xs font-semibold uppercase tracking-[0.22em] text-[#C0713A]">
                {section.label}
              </div>
              <h3 className="mt-4 text-2xl font-semibold leading-tight tracking-[-0.04em] text-[#3E2723]">
                {section.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-[#72584D]">
                {section.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 sm:py-24">
        <DeckHeading
          label="04. Product Proof"
          title="The most persuasive pitch-deck slide here is the product itself."
          body="Instead of relying on decorative charts, this page should show that the company already has credible consumer product surfaces and a deeper system behind them."
          center
        />

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {productProof.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="overflow-hidden rounded-[2rem] border border-[#F0D7C6] bg-white/86 shadow-[0_22px_65px_rgba(62,39,35,0.06)]"
              >
                <div className="border-b border-[#F1E0D3] p-6">
                  <div className="inline-flex rounded-2xl bg-[#FFF4E7] p-3 text-[#E8752A]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 text-2xl font-semibold tracking-[-0.04em] text-[#3E2723]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[#72584D]">
                    {item.body}
                  </p>
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

      <section className="mx-auto max-w-7xl px-6 py-16 sm:py-24">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <DeckHeading
              label="05. Market Thesis"
              title="This is less about owning one narrow feature category and more about owning a broader spiritual loop."
              body="The company can be positioned around a market truth investors understand quickly: adjacent products serve separate jobs, while DevBhumi can combine them into a more valuable daily relationship."
            />
          </div>

          <div className="grid gap-4">
            {marketLens.map((item) => (
              <div
                key={item.title}
                className="rounded-[1.7rem] border border-[#F0D7C6] bg-white/86 p-5 shadow-[0_18px_50px_rgba(62,39,35,0.05)]"
              >
                <h3 className="text-lg font-semibold tracking-[-0.03em] text-[#3E2723]">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[#72584D]">
                  <span className="font-semibold text-[#5F473C]">
                    Current strength:
                  </span>{" "}
                  {item.current}
                </p>
                <p className="mt-2 text-sm leading-7 text-[#72584D]">
                  <span className="font-semibold text-[#5F473C]">
                    What remains open:
                  </span>{" "}
                  {item.gap}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 sm:py-24">
        <DeckHeading
          label="06. Moat"
          title="The moat is category design, product breadth, and backend control."
          body="That framing is more credible than claiming a pure technology moat alone. The platform becomes stronger because multiple product surfaces and operational capabilities reinforce each other."
          center
        />

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {moatBlocks.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-[1.8rem] border border-[#F0D7C6] bg-white/86 p-6 shadow-[0_20px_60px_rgba(62,39,35,0.05)]"
              >
                <div className="inline-flex rounded-2xl bg-[#FFF4E7] p-3 text-[#E8752A]">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-2xl font-semibold tracking-[-0.04em] text-[#3E2723]">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[#72584D]">
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 sm:py-24">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-[2rem] border border-[#F0D7C6] bg-white/86 p-8 shadow-[0_22px_65px_rgba(62,39,35,0.05)]">
            <DeckHeading
              label="07. Business Model"
              title="Monetization should sit on top of trust and repeat use."
              body="A clean investor story here is stronger than a noisy chart. The business model can layer naturally on top of habit, high-intent insight, and premium spiritual experiences."
            />
            <div className="mt-8 grid gap-3">
              {businessModel.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-[#F5E4D8] bg-[#FFF9F4] px-4 py-4 text-sm leading-7 text-[#654C40]"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-[#F0D7C6] bg-white/86 p-8 shadow-[0_22px_65px_rgba(62,39,35,0.05)]">
            <DeckHeading
              label="08. Go-To-Market"
              title="The GTM story should emphasize distribution plus retention, not only awareness."
              body="Investors want to know how the product gets adopted and why usage compounds. That makes the growth story more believable than vanity acquisition claims."
            />
            <div className="mt-8 grid gap-3">
              {gtmBlocks.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-[#F5E4D8] bg-[#FFF9F4] px-4 py-4 text-sm leading-7 text-[#654C40]"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 sm:py-24">
        <div className="overflow-hidden rounded-[2.2rem] border border-[#F0D7C6] bg-[linear-gradient(135deg,#FFF7EE_0%,#FFE7CF_46%,#FFF8F0_100%)] p-8 shadow-[0_28px_90px_rgba(232,117,42,0.12)] sm:p-10 lg:p-12">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.98fr] lg:items-center">
            <div>
              <DeckHeading
                label="09. The Ask"
                title="The complete pitch-deck story ends with a focused use of capital, not decorative financial theater."
                body="The best seed story for DevBhumi is disciplined: use capital to sharpen product quality, deepen the operating system underneath it, and scale growth around a clear category position."
              />
            </div>

            <div className="rounded-[1.9rem] border border-white/75 bg-white/88 p-6 shadow-[0_20px_60px_rgba(62,39,35,0.08)]">
              <div className="grid gap-3">
                {askBlocks.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-[#F5E4D8] bg-[#FFF9F4] px-4 py-4 text-sm leading-7 text-[#654C40]"
                  >
                    {item}
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-2xl bg-[#FFF4E7] px-4 py-4 text-sm leading-7 text-[#71574B]">
                Structure reference used for this page comes from common
                investor expectations highlighted by Sequoia’s business-plan
                outline and CRV’s 2026 seed-stage guidance: clear purpose,
                problem, solution, why now, market, product, competition,
                business model, team, and traction.
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
        <div className="rounded-[1.8rem] border border-[#F0D7C6] bg-white/86 p-6 shadow-[0_18px_50px_rgba(62,39,35,0.05)]">
          <div className="grid gap-4 md:grid-cols-3">
            <div className="flex gap-3">
              <BookOpen className="mt-1 h-5 w-5 text-[#E8752A]" />
              <p className="text-sm leading-7 text-[#6A5145]">
                The page now follows a more complete pitch-deck flow instead of
                reading like a styled marketing page with random sections.
              </p>
            </div>
            <div className="flex gap-3">
              <HeartHandshake className="mt-1 h-5 w-5 text-[#E8752A]" />
              <p className="text-sm leading-7 text-[#6A5145]">
                I intentionally reduced chart-like elements and heavy number
                styling so it feels cleaner and more executive.
              </p>
            </div>
            <div className="flex gap-3">
              <Shield className="mt-1 h-5 w-5 text-[#E8752A]" />
              <p className="text-sm leading-7 text-[#6A5145]">
                The argument is now grounded in what is visibly real in this
                codebase today: product breadth, backend depth, and category
                position.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
