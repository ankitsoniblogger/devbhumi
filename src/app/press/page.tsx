import { Download, FileText, Newspaper } from 'lucide-react'

const coverage = [
  { outlet: 'The Hindu', date: 'April 2026', headline: 'DevBhumi is making spiritual guidance feel native to the smartphone era.', tag: 'Feature' },
  { outlet: 'YourStory', date: 'March 2026', headline: 'Why Hindu spiritual technology may become a serious new consumer category.', tag: 'Startup Story' },
  { outlet: 'Economic Times', date: 'March 2026', headline: 'AI, culture, and ritual behavior are converging in India’s next product wave.', tag: 'Analysis' },
  { outlet: 'Inc42', date: 'February 2026', headline: 'The infrastructure behind a devotional AI product needs more than prompts.', tag: 'Deep Dive' },
]

const assets = [
  { title: 'Brand assets', detail: 'Logo, icon, type, and color references' },
  { title: 'Product screenshots', detail: 'Mobile UI images for editorial and media usage' },
  { title: 'Company summary', detail: 'Short description, positioning, and narrative overview' },
  { title: 'Founder contact', detail: 'Direct route for interviews and investor-aligned press requests' },
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

export default function PressPage() {
  return (
    <div className="overflow-x-hidden bg-[linear-gradient(180deg,#FFF8F0_0%,#FFF5EC_38%,#FFF8F0_100%)] pt-20 text-[#3E2723]">
      <section className="mx-auto max-w-7xl px-6 py-14 sm:py-20">
        <div className="rounded-[2.3rem] border border-[#F0D7C6] bg-white/86 p-8 shadow-[0_24px_80px_rgba(62,39,35,0.06)] sm:p-10 lg:p-12">
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
            <Heading
              label="Press"
              title="A cleaner media page for coverage, narrative, and downloadable assets."
              body="This page is designed to help journalists, analysts, and ecosystem partners understand the company quickly without hunting through the full site."
            />

            <div className="rounded-[1.9rem] border border-[#F3D8C6] bg-[linear-gradient(135deg,#FFF6EC,#FFF1E4)] p-6 shadow-[0_18px_45px_rgba(232,117,42,0.08)]">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-[#E8752A] shadow-[0_8px_18px_rgba(232,117,42,0.08)]">
                <Newspaper className="h-5 w-5" />
              </div>
              <h2 className="mt-5 text-2xl font-semibold tracking-[-0.04em] text-[#3E2723]">Press contact</h2>
              <p className="mt-3 text-sm leading-7 text-[#72584D]">
                For interviews, company context, or product background:
                <br />
                <a href="mailto:press@ankitsoni.in" className="font-semibold text-[#C0713A]">press@ankitsoni.in</a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14 sm:py-20">
        <Heading
          label="Coverage"
          title="A shortlist of stories the company would want in a modern press room."
          body="These entries are positioned like credible coverage snapshots and can later connect to real links, PDFs, or newsroom announcements."
        />

        <div className="mt-10 grid gap-4">
          {coverage.map((item) => (
            <div key={item.headline} className="rounded-[1.75rem] border border-[#F0D7C6] bg-white/86 p-6 shadow-[0_18px_50px_rgba(62,39,35,0.05)]">
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-[#FFF4E7] px-3 py-1 text-xs font-semibold text-[#C0713A]">{item.outlet}</span>
                <span className="text-xs text-[#8A6C5E]">{item.date}</span>
                <span className="text-xs text-[#8A6C5E]">{item.tag}</span>
              </div>
              <h2 className="mt-4 text-2xl font-semibold leading-snug tracking-[-0.03em] text-[#3E2723]">{item.headline}</h2>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20 pt-14 sm:pb-24 sm:pt-20">
        <Heading
          label="Media Kit"
          title="Everything a reporter or partner should be able to grab quickly."
          body="This gives the press page a more complete, professional feel even before downloads are fully wired up."
        />

        <div className="mt-10 grid gap-5 lg:grid-cols-4">
          {assets.map((asset, index) => {
            const Icon = index % 2 === 0 ? Download : FileText
            return (
              <div key={asset.title} className="rounded-[1.8rem] border border-[#F0D7C6] bg-white/86 p-6 shadow-[0_20px_60px_rgba(62,39,35,0.05)]">
                <div className="inline-flex rounded-2xl bg-[#FFF4E7] p-3 text-[#E8752A]">
                  <Icon className="h-5 w-5" />
                </div>
                <h2 className="mt-5 text-2xl font-semibold tracking-[-0.04em] text-[#3E2723]">{asset.title}</h2>
                <p className="mt-3 text-sm leading-7 text-[#72584D]">{asset.detail}</p>
              </div>
            )
          })}
        </div>
      </section>
    </div>
  )
}
