'use client'

import Link from 'next/link'

const productLinks = [
  { href: '/features', label: 'Features' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/roadmap', label: 'Roadmap' },
  { href: '#', label: 'Download' },
]

const companyLinks = [
  { href: '/about', label: 'About' },
  { href: '#', label: 'Blog' },
  { href: '#', label: 'Press' },
  { href: '#', label: 'Careers' },
  { href: '/contact', label: 'Contact' },
]

const legalLinks = [
  { href: '#', label: 'Privacy Policy' },
  { href: '#', label: 'Terms of Service' },
  { href: '#', label: 'Cookie Policy' },
  { href: '#', label: 'DPDP Compliance' },
]

export function Footer() {
  return (
    <footer className="border-t border-border-subtle">
      <div className="section-divider" />
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-4">
              <span className="text-2xl">🪔</span>
              <span className="font-[family-name:var(--font-cormorant)] text-xl text-saffron-200 font-medium">
                DevBhumi
              </span>
            </Link>
            <p className="text-sm text-ink-500 mb-6 leading-relaxed">
              AI-powered spiritual companion bringing 5,000 years of Hindu wisdom to your pocket.
            </p>
            <div className="flex gap-4">
              {['Twitter', 'Instagram', 'YouTube', 'LinkedIn'].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="text-xs text-ink-600 hover:text-saffron-400 transition-colors duration-200"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-[11px] tracking-[0.12em] uppercase text-ink-500 font-medium mb-4">
              Product
            </h4>
            <ul className="space-y-3">
              {productLinks.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="text-sm text-ink-400 hover:text-saffron-400 transition-colors duration-200">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-[11px] tracking-[0.12em] uppercase text-ink-500 font-medium mb-4">
              Company
            </h4>
            <ul className="space-y-3">
              {companyLinks.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="text-sm text-ink-400 hover:text-saffron-400 transition-colors duration-200">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-[11px] tracking-[0.12em] uppercase text-ink-500 font-medium mb-4">
              Legal
            </h4>
            <ul className="space-y-3">
              {legalLinks.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="text-sm text-ink-400 hover:text-saffron-400 transition-colors duration-200">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-border-subtle flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-ink-600">
          <p>&copy; 2025 DevBhumi. All rights reserved.</p>
          <p>hello@ankitsoni.in</p>
          <p>Made in Bengaluru 🇮🇳</p>
        </div>
      </div>
    </footer>
  )
}
