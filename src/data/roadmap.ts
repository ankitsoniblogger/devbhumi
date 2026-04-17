export interface Phase {
  id: string
  number: number
  name: string
  subtitle: string
  timeline: string
  status: 'In Progress' | 'Upcoming' | 'Vision'
  color: string
  milestones: string[]
}

export const phases: Phase[] = [
  {
    id: 'phase-1',
    number: 1,
    name: 'The Guru Core',
    subtitle: 'Foundation',
    timeline: 'Months 1–6',
    status: 'In Progress',
    color: '#F38C31',
    milestones: [
      '8 deity AI companions live',
      'Vedic knowledge base (1,000+ texts)',
      'Full Hindu panchang engine',
      '200+ festival guides',
      'Android + iOS launch',
      'Hindi + English (2 languages)',
      '200K downloads target',
      '₹15L MRR by Month 6',
    ],
  },
  {
    id: 'phase-2',
    number: 2,
    name: 'The Sadhana Layer',
    subtitle: 'Expansion',
    timeline: 'Months 7–15',
    status: 'Upcoming',
    color: '#F5C12E',
    milestones: [
      'AI Yoga coach (500+ asanas)',
      'Bhajan library (10,000+ tracks)',
      'Vedic astrology + Kundali',
      'Vastu Shastra advisor',
      'Temple SaaS platform',
      '8 languages fully live',
      '1M downloads · ₹1Cr MRR',
      'Series A raise',
    ],
  },
  {
    id: 'phase-3',
    number: 3,
    name: 'Multi-Faith Platform',
    subtitle: 'Vision',
    timeline: 'Year 3+',
    status: 'Vision',
    color: '#7F77DD',
    milestones: [
      'Sikh companion (Gurbani)',
      'Buddhist companion (Pali Canon)',
      'Jain companion (Agamas)',
      'Pilgrimage booking platform',
      'API for third-party developers',
      '5M+ MAU · ₹10Cr+ MRR',
      'IPO readiness',
    ],
  },
]
