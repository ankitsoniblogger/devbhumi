export interface PricingTier {
  id: string
  name: string
  badge: string | null
  priceMonthly: string
  priceYearly: string
  priceMonthlyValue: number
  priceYearlyValue: number
  features: string[]
  cta: string
  highlighted: boolean
}

export const pricingTiers: PricingTier[] = [
  {
    id: 'seva',
    name: 'Seva',
    badge: null,
    priceMonthly: '₹0',
    priceYearly: '₹0',
    priceMonthlyValue: 0,
    priceYearlyValue: 0,
    features: [
      '3 AI deity chats per day',
      'Basic panchang',
      'Hindu calendar',
      '5 mantras per day',
      '2 languages (Hindi & English)',
    ],
    cta: 'Start for Free',
    highlighted: false,
  },
  {
    id: 'bhakti',
    name: 'Bhakti+',
    badge: 'Most Popular',
    priceMonthly: '₹199',
    priceYearly: '₹1,499',
    priceMonthlyValue: 199,
    priceYearlyValue: 1499,
    features: [
      'Unlimited AI deity chats',
      'All 8 deity companions',
      'Full mantra library (1,000+)',
      'Guided yoga sessions',
      'Full panchang + muhurat finder',
      '10,000 bhajan tracks',
      'All 200+ festivals',
      '8 Indian languages',
      'Offline mode',
    ],
    cta: 'Start Bhakti+',
    highlighted: true,
  },
  {
    id: 'guru',
    name: 'Guru',
    badge: 'Best Value',
    priceMonthly: '₹299',
    priceYearly: '₹1,499',
    priceMonthlyValue: 299,
    priceYearlyValue: 1499,
    features: [
      'Everything in Bhakti+',
      '1 free astrology report/month',
      'Priority pandit booking',
      'Family account (5 users)',
      'Exclusive festival content packs',
      'Early access to new features',
    ],
    cta: 'Go Guru',
    highlighted: false,
  },
]
