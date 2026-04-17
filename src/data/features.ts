import { MessageSquare, Calendar, Activity, Music, Star } from 'lucide-react'

export interface Feature {
  id: string
  tab: string
  icon: typeof MessageSquare
  title: string
  description: string
  bullets: string[]
  phase: string
}

export const features: Feature[] = [
  {
    id: 'deity-ai',
    tab: 'Deity AI',
    icon: MessageSquare,
    title: 'Conversational Deity AI',
    description: 'Have deeply personal conversations with 8 Hindu deities, each grounded in authentic scriptures and responding in character with wisdom tailored to your life.',
    bullets: [
      '8 deity companions with distinct personalities and scriptural knowledge',
      '1,000+ sacred text corpus powering every response via RAG',
      'Every answer includes scripture citations for authenticity',
      'Available in 8 Indian languages including Hindi, Tamil, Telugu, and Bengali',
      'Context-aware conversations that remember your spiritual journey',
    ],
    phase: 'Phase 1',
  },
  {
    id: 'calendar',
    tab: 'Calendar',
    icon: Calendar,
    title: 'Hindu Calendar & Panchang',
    description: 'A comprehensive real-time panchang engine with festival guides, muhurat finder, and daily ritual recommendations tailored to your location.',
    bullets: [
      'Real-time panchang with Tithi, Nakshatra, Yoga, and Karana',
      '200+ festival guides with rituals, stories, and mantras',
      'Muhurat finder for weddings, griha pravesh, and all 16 Samskaras',
      'Morning ritual guide personalized to your tradition',
      'Location-based sunrise/sunset and auspicious timing',
    ],
    phase: 'Phase 1',
  },
  {
    id: 'yoga',
    tab: 'Yoga',
    icon: Activity,
    title: 'Yoga & Wellness',
    description: 'A complete yoga and wellness platform rooted in traditional Hatha and Ashtanga practices, with Ayurvedic daily routines.',
    bullets: [
      '500+ asanas with step-by-step guidance and modifications',
      '12 pranayama techniques with breathing timers',
      'Ayurvedic Dinacharya — daily routine recommendations',
      'Mantra japa counter with 108-bead digital mala',
      'Guided meditation sessions based on Yoga Sutras',
    ],
    phase: 'Phase 2',
  },
  {
    id: 'music',
    tab: 'Music',
    icon: Music,
    title: 'Bhajan & Mantra Library',
    description: 'The largest collection of devotional music organized by deity, language, raga, and occasion — with AI-curated playlists for every moment.',
    bullets: [
      '10,000+ bhajans organized by deity, language, and occasion',
      'Contextual AI playlists for festivals, meditation, and rituals',
      '40-day Anushthana courses with daily progression',
      'Bhajan lyrics with transliteration and meaning',
      'Offline download for uninterrupted devotion',
    ],
    phase: 'Phase 2',
  },
  {
    id: 'astrology',
    tab: 'Astrology',
    icon: Star,
    title: 'Vedic Astrology',
    description: 'Authentic Jyotish Shastra calculations including birth charts, dasha predictions, and compatibility matching.',
    bullets: [
      'Janma Kundali — complete birth chart with 12 houses',
      'Vimshottari Dasha — planetary period predictions',
      'Ashtakoota matching for marriage compatibility',
      'Daily AI predictions based on your chart',
      'Remedial suggestions grounded in traditional practices',
    ],
    phase: 'Phase 2',
  },
]
