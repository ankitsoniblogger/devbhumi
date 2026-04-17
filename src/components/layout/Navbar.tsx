'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Presentation } from 'lucide-react'

const links = [
  { href: '/features', label: 'Features' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/roadmap', label: 'Roadmap' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-black/80 backdrop-blur-[20px] border-b border-border-subtle'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5">
            <span className="text-2xl">🪔</span>
            <span className="font-[family-name:var(--font-cormorant)] text-xl text-saffron-200 font-medium">
              DevBhumi
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm transition-colors duration-200 ${
                  pathname === link.href
                    ? 'text-saffron-400'
                    : 'text-ink-400 hover:text-saffron-400'
                }`}
              >
                {link.label}
                {pathname === link.href && (
                  <span className="block w-1 h-1 rounded-full bg-saffron-400 mx-auto mt-1" />
                )}
              </Link>
            ))}
          </div>

          <div className="hidden md:block">
            <Link
              href="/investor"
              className="flex items-center gap-2 bg-gradient-to-r from-saffron-500 to-saffron-600 text-white text-sm font-medium px-5 py-2.5 rounded-full hover:shadow-lg hover:shadow-saffron-500/20 transition-all duration-300"
            >
              <Presentation className="w-4 h-4" />
              Investor Pitch Deck
            </Link>
          </div>

          <button
            className="md:hidden text-ink-300 p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-y-0 right-0 w-[280px] bg-bg-surface border-l border-border-subtle z-50 p-8 pt-20 flex flex-col gap-6"
          >
            <button
              className="absolute top-5 right-5 text-ink-400"
              onClick={() => setMobileOpen(false)}
            >
              <X className="w-5 h-5" />
            </button>
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-lg transition-colors duration-200 ${
                  pathname === link.href ? 'text-saffron-400' : 'text-ink-300 hover:text-saffron-400'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/investor"
              className="mt-4 flex items-center justify-center gap-2 bg-gradient-to-r from-saffron-500 to-saffron-600 text-white text-sm font-medium px-5 py-3 rounded-full"
            >
              <Presentation className="w-4 h-4" />
              Investor Pitch Deck
            </Link>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 z-40 md:hidden"
            onClick={() => setMobileOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  )
}
