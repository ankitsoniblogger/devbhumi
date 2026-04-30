import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import './globals.css'

const interTight = localFont({
  src: [
    { path: './fonts/InterTight-Light.ttf', weight: '300', style: 'normal' },
    { path: './fonts/InterTight-Regular.ttf', weight: '400', style: 'normal' },
    { path: './fonts/InterTight-Medium.ttf', weight: '500', style: 'normal' },
    { path: './fonts/InterTight-SemiBold.ttf', weight: '600', style: 'normal' },
    { path: './fonts/InterTight-Bold.ttf', weight: '700', style: 'normal' },
  ],
  variable: '--font-inter-tight',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'DevBhumi | Hindu Spiritual Companion Platform',
  description:
    'DevBhumi unifies deity-led AI guidance, kundli, horoscope, bhajans, meditation, devotional shorts, and an admin-operated spiritual content platform.',
  keywords: [
    'Hindu spiritual app',
    'AI spiritual companion',
    'kundli app',
    'bhajan app',
    'devotional AI',
    'Vedic guidance',
  ],
  openGraph: {
    title: 'DevBhumi | Hindu Spiritual Companion Platform',
    description:
      'A product story built from the real Flutter app: divine guidance, Vedic insight, devotional media, and operational backend control.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'DevBhumi',
  },
  icons: {
    icon: [
      { url: '/icon.png', type: 'image/png' },
    ],
    shortcut: ['/icon.png'],
    apple: [
      { url: '/apple-icon.png', type: 'image/png' },
    ],
  },
  other: {
    'theme-color': '#FFF8F0',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${interTight.variable} h-full antialiased`}>
      <body className="min-h-full bg-[#FFF8F0] text-[#3E2723]">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
