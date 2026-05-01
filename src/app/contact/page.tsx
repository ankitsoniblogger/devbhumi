import { Clock, Mail, MapPin, MessagesSquare, Users } from 'lucide-react'

const contactRoutes = [
  {
    title: 'General',
    detail: 'Product questions, partnerships, and team outreach',
    icon: MessagesSquare,
  },
  {
    title: 'Press',
    detail: 'Interviews, commentary, and media requests',
    icon: Mail,
  },
  {
    title: 'Investor',
    detail: 'Seed conversations, deck follow-ups, and strategic interest',
    icon: Users,
  },
]

const contactInfo = [
  { label: 'Email', value: 'hello@ankitsoni.in', icon: Mail },
  { label: 'Location', value: 'Bengaluru, Karnataka, India', icon: MapPin },
  { label: 'Response time', value: 'Usually within 24 hours', icon: Clock },
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

export default function ContactPage() {
  return (
    <div className="overflow-x-hidden bg-[linear-gradient(180deg,#FFF8F0_0%,#FFF5EC_38%,#FFF8F0_100%)] pt-20 text-[#3E2723]">
      <section className="mx-auto max-w-7xl px-6 py-14 sm:py-20">
        <div className="grid gap-8 lg:grid-cols-[1.02fr_0.98fr]">
          <div className="rounded-[2.3rem] border border-[#F0D7C6] bg-white/86 p-8 shadow-[0_24px_80px_rgba(62,39,35,0.06)] sm:p-10 lg:p-12">
            <Heading
              label="Contact"
              title="A cleaner contact page with the same premium system as the core site."
              body="Whether the message is about the product, the press story, or the investor narrative, the contact surface should feel simple, trustworthy, and easy to use on mobile."
            />

            <form className="mt-10 grid gap-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-[#A46C49]">Name</label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full rounded-2xl border border-[#F0D7C6] bg-[#FFF9F4] px-4 py-4 text-sm text-[#3E2723] placeholder:text-[#9A7E70] focus:border-[#E8752A] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-[#A46C49]">Email</label>
                  <input
                    type="email"
                    placeholder="you@email.com"
                    className="w-full rounded-2xl border border-[#F0D7C6] bg-[#FFF9F4] px-4 py-4 text-sm text-[#3E2723] placeholder:text-[#9A7E70] focus:border-[#E8752A] focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-[#A46C49]">Inquiry type</label>
                <select className="w-full rounded-2xl border border-[#F0D7C6] bg-[#FFF9F4] px-4 py-4 text-sm text-[#3E2723] focus:border-[#E8752A] focus:outline-none">
                  <option>General Inquiry</option>
                  <option>Press</option>
                  <option>Investor</option>
                  <option>Partnership</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-[#A46C49]">Message</label>
                <textarea
                  rows={6}
                  placeholder="Tell us how we can help."
                  className="w-full resize-none rounded-2xl border border-[#F0D7C6] bg-[#FFF9F4] px-4 py-4 text-sm text-[#3E2723] placeholder:text-[#9A7E70] focus:border-[#E8752A] focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="inline-flex w-fit items-center justify-center rounded-2xl bg-gradient-to-r from-[#E8752A] to-[#FF8C00] px-6 py-4 text-base font-semibold text-white shadow-[0_18px_40px_rgba(232,117,42,0.20)]"
              >
                Send Message
              </button>
            </form>
          </div>

          <div className="grid gap-5">
            <div className="rounded-[2.3rem] border border-[#F0D7C6] bg-white/86 p-8 shadow-[0_24px_80px_rgba(62,39,35,0.06)]">
              <div className="text-xs font-semibold uppercase tracking-[0.22em] text-[#C0713A]">Best route</div>
              <div className="mt-5 grid gap-4">
                {contactRoutes.map((route) => {
                  const Icon = route.icon
                  return (
                    <div key={route.title} className="rounded-[1.5rem] border border-[#F3E1D4] bg-[#FFF9F4] p-4">
                      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-[#E8752A] shadow-[0_8px_18px_rgba(232,117,42,0.08)]">
                        <Icon className="h-4 w-4" />
                      </div>
                      <div className="mt-4 text-lg font-semibold tracking-[-0.03em] text-[#3E2723]">{route.title}</div>
                      <p className="mt-2 text-sm leading-7 text-[#72584D]">{route.detail}</p>
                    </div>
                  )
                })}
              </div>
            </div>

            <div className="rounded-[2.3rem] border border-[#F3D8C6] bg-[linear-gradient(135deg,#FFF6EC,#FFF1E4)] p-8 shadow-[0_18px_45px_rgba(232,117,42,0.08)]">
              <div className="grid gap-4">
                {contactInfo.map((item) => {
                  const Icon = item.icon
                  return (
                    <div key={item.label} className="flex gap-4 rounded-[1.4rem] border border-[#F2DED0] bg-white/84 px-4 py-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-[#E8752A] shadow-[0_8px_18px_rgba(232,117,42,0.08)]">
                        <Icon className="h-4 w-4" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-[#3E2723]">{item.label}</div>
                        <p className="mt-1 text-sm leading-7 text-[#72584D]">{item.value}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
