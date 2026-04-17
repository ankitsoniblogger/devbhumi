import type { Metadata } from 'next'
import { Inter_Tight, Cormorant_Garamond } from 'next/font/google'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import './globals.css'

const interTight = Inter_Tight({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-inter-tight',
  display: 'swap',
})

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'DevBhumi — Talk to Your God',
  description:
    'AI-powered Hindu spiritual companion. Conversational deity AI grounded in 1,000+ Vedic texts. 8 Indian languages. Daily ritual guidance, yoga, mantras, and more.',
  keywords: [
    'Hindu AI app',
    'Vedic wisdom',
    'spiritual companion',
    'Bhagavad Gita AI',
    'Hindu calendar',
    'mantra app',
  ],
  openGraph: {
    title: 'DevBhumi — Talk to Your God',
    description:
      'AI-powered Hindu spiritual companion bringing 5,000 years of wisdom to 1.1 billion devotees.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'DevBhumi',
  },
  other: {
    'theme-color': '#0A0806',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${interTight.variable} ${cormorant.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col grain">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
