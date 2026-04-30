'use client'

import Image from 'next/image'
import Link from 'next/link'

const productLinks = [
  { href: '/#experience', label: 'Experience' },
  { href: '/#difference', label: 'Why Different' },
  { href: '/#platform', label: 'Platform' },
  { href: '/#cta', label: 'Investor Story' },
]

const companyLinks = [
  { href: '/about', label: 'About' },
  { href: '/press', label: 'Press' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
]

const legalLinks = [
  { href: '/privacy-policy', label: 'Privacy Policy' },
  { href: '/terms-of-service', label: 'Terms of Service' },
  { href: '/cookie-policy', label: 'Cookie Policy' },
  { href: '/dpdp-compliance', label: 'DPDP Compliance' },
]

export function Footer() {
  return (
    <footer className="border-t border-[#ECD8C8] bg-[linear-gradient(180deg,rgba(255,248,240,0.84),rgba(255,244,232,0.98))]">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr_0.85fr_0.85fr]">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-2xl border border-[#F4D8C1] bg-white shadow-[0_12px_28px_rgba(232,117,42,0.08)]">
                <Image
                  src="/icon.png"
                  alt="DevBhumi icon"
                  width={48}
                  height={48}
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <div className="text-lg font-semibold tracking-[-0.04em] text-[#3E2723]">DevBhumi</div>
                <div className="text-sm text-[#8D6E63]">Seek Guidance. Find Peace.</div>
              </div>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-7 text-[#73594D]">
              Hindu spiritual technology built across AI conversation, devotional media, Vedic insight,
              and an admin-operated content platform.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-[#A46C49]">Product</h3>
            <div className="mt-4 grid gap-3">
              {productLinks.map((link) => (
                <Link key={link.href} href={link.href} className="text-sm text-[#6A5145] transition-colors hover:text-[#D4621A]">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-[#A46C49]">Company</h3>
            <div className="mt-4 grid gap-3">
              {companyLinks.map((link) => (
                <Link key={link.href} href={link.href} className="text-sm text-[#6A5145] transition-colors hover:text-[#D4621A]">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-[#A46C49]">Legal</h3>
            <div className="mt-4 grid gap-3">
              {legalLinks.map((link) => (
                <Link key={link.href} href={link.href} className="text-sm text-[#6A5145] transition-colors hover:text-[#D4621A]">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-[#ECD8C8] pt-6 text-sm text-[#8D6E63] md:flex-row md:items-center md:justify-between">
          <p>© 2026 DevBhumi. Built in India for a global spiritual audience.</p>
          <p>Product story rebuilt from the Flutter app and admin platform.</p>
        </div>
      </div>
    </footer>
  )
}
