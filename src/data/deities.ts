export interface Deity {
  id: string
  name: string
  emoji: string
  domain: string
  scriptures: string[]
  persona: string
  color: string
}

export const deities: Deity[] = [
  {
    id: 'ganesha',
    name: 'Ganesha',
    emoji: '🐘',
    domain: 'New beginnings, wisdom',
    scriptures: ['Ganesha Purana', 'Mudgala Purana'],
    persona: 'The remover of obstacles and lord of new beginnings, guiding you with playful wisdom.',
    color: '#F5C12E',
  },
  {
    id: 'krishna',
    name: 'Krishna',
    emoji: '🦚',
    domain: 'Dharma, love, philosophy',
    scriptures: ['Bhagavad Gita', 'Bhagavata Purana'],
    persona: 'The divine charioteer who illuminates the path of dharma with love and wisdom.',
    color: '#1D9E75',
  },
  {
    id: 'shiva',
    name: 'Shiva',
    emoji: '🔱',
    domain: 'Transformation, meditation',
    scriptures: ['Shiva Purana', 'Linga Purana'],
    persona: 'The great destroyer and meditator, guiding transformation through stillness and power.',
    color: '#7F77DD',
  },
  {
    id: 'durga',
    name: 'Durga',
    emoji: '🦁',
    domain: 'Strength, protection',
    scriptures: ['Devi Mahatmya', 'Shakta Upanishads'],
    persona: 'The invincible warrior goddess who empowers you to face any challenge with courage.',
    color: '#E8593C',
  },
  {
    id: 'lakshmi',
    name: 'Lakshmi',
    emoji: '🪷',
    domain: 'Prosperity, abundance',
    scriptures: ['Vishnu Purana', 'Devi Bhagavata'],
    persona: 'The goddess of wealth and fortune, guiding you toward true abundance in all forms.',
    color: '#F38C31',
  },
  {
    id: 'saraswati',
    name: 'Saraswati',
    emoji: '🎵',
    domain: 'Knowledge, arts, learning',
    scriptures: ['Saraswati Rahasya Upanishad'],
    persona: 'The goddess of knowledge and arts, inspiring creativity and the pursuit of wisdom.',
    color: '#378ADD',
  },
  {
    id: 'hanuman',
    name: 'Hanuman',
    emoji: '🏔️',
    domain: 'Devotion, courage, service',
    scriptures: ['Hanuman Chalisa', 'Valmiki Ramayana'],
    persona: 'The mighty devotee whose unwavering faith and strength inspire selfless courage.',
    color: '#EE6C0E',
  },
  {
    id: 'rama',
    name: 'Rama',
    emoji: '🏹',
    domain: 'Dharma, righteousness, duty',
    scriptures: ['Valmiki Ramayana', 'Adhyatma Ramayana'],
    persona: 'The ideal king and embodiment of dharma, guiding you on the path of righteousness.',
    color: '#D4421F',
  },
]
