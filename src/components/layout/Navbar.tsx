'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Menu, Presentation, X } from 'lucide-react'
import { useEffect, useState } from 'react'

const links = [
  { href: '/#experience', label: 'Experience' },
  { href: '/#difference', label: 'Why Different' },
  { href: '/#platform', label: 'Platform' },
  { href: '/#cta', label: 'Investor Story' },
]

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <nav
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'border-b border-[#EED7C7] bg-[rgba(255,248,240,0.88)] shadow-[0_12px_30px_rgba(62,39,35,0.06)] backdrop-blur-xl'
            : 'bg-transparent'
        }`}
      >
        <div className="mx-auto flex h-[4.5rem] max-w-7xl items-center justify-between px-6">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-2xl border border-[#F5D9C2] bg-white/88 shadow-[0_10px_24px_rgba(232,117,42,0.08)]">
              <Image
                src="/icon.png"
                alt="Divine Connect icon"
                width={44}
                height={44}
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <div className="text-lg font-semibold tracking-[-0.04em] text-[#3E2723]">Divine Connect</div>
              <div className="text-xs text-[#A07D6C]">Seek Guidance. Find Peace.</div>
            </div>
          </Link>

          <div className="hidden items-center gap-8 lg:flex">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-[#6D5347] transition-colors duration-200 hover:text-[#D4621A]"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden lg:block">
            <Link
              href="/investor"
              className="inline-flex items-center gap-2 rounded-full border border-[#E9D6C7] bg-white/88 px-5 py-3 text-sm font-semibold text-[#3E2723] shadow-[0_12px_26px_rgba(62,39,35,0.06)] transition-transform duration-200 hover:-translate-y-0.5"
            >
              <Presentation className="h-4 w-4 text-[#E8752A]" />
              Investor View
            </Link>
          </div>

          <button
            type="button"
            aria-label="Toggle navigation"
            onClick={() => setMobileOpen((open) => !open)}
            className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-[#E9D6C7] bg-white/88 text-[#3E2723] shadow-[0_10px_24px_rgba(62,39,35,0.06)] lg:hidden"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {mobileOpen ? (
        <>
          <div className="fixed inset-0 z-40 bg-[#3E2723]/20 backdrop-blur-sm" onClick={() => setMobileOpen(false)} />
          <div className="fixed inset-x-4 top-[5.5rem] z-50 rounded-[2rem] border border-[#EED7C7] bg-[rgba(255,248,240,0.96)] p-6 shadow-[0_24px_70px_rgba(62,39,35,0.12)] backdrop-blur-xl lg:hidden">
            <div className="grid gap-3">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-2xl border border-[#F2DFD1] bg-white/90 px-4 py-4 text-sm font-medium text-[#5C4337]"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/investor"
                onClick={() => setMobileOpen(false)}
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#E8752A] to-[#FF8C00] px-4 py-4 text-sm font-semibold text-white"
              >
                <Presentation className="h-4 w-4" />
                Investor View
              </Link>
            </div>
          </div>
        </>
      ) : null}
    </>
  )
}
