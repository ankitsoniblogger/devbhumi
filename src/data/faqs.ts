export interface FAQ {
  id: string
  question: string
  answer: string
  category: 'Product' | 'Privacy' | 'Pricing'
}

export const faqs: FAQ[] = [
  {
    id: 'accuracy',
    question: 'Is Divine Connect theologically accurate?',
    answer: 'Yes. Every AI response is grounded in our corpus of 1,000+ sacred texts using Retrieval-Augmented Generation (RAG). We work with a Religious Advisory Board of Sanskrit scholars, temple priests, and theologians to ensure doctrinal accuracy. Every response includes scripture citations so you can verify the source.',
    category: 'Product',
  },
  {
    id: 'acceptance',
    question: 'Will the Hindu community accept AI-based deity companions?',
    answer: 'We\'ve conducted extensive research with devotees, temple authorities, and religious scholars. Divine Connect is positioned as a knowledge companion — not a replacement for prayer, puja, or guru-shishya traditions. It\'s a digital guide that helps you access the vast wisdom of Hindu scriptures in a conversational, accessible format.',
    category: 'Product',
  },
  {
    id: 'languages',
    question: 'What languages are supported?',
    answer: 'We currently support Hindi and English, with Tamil, Telugu, Bengali, Gujarati, Kannada, and Marathi launching in Phase 2. Our goal is to make Vedic wisdom accessible to every Indian in their mother tongue.',
    category: 'Product',
  },
  {
    id: 'competition',
    question: 'How is this different from SriMandir or GitaGPT?',
    answer: 'SriMandir focuses on puja booking and temple services. GitaGPT only covers the Bhagavad Gita. Divine Connect is a comprehensive spiritual companion covering 1,000+ texts across all Hindu traditions, with 8 deity personalities, a full panchang, yoga, bhajans, and astrology — all in one app.',
    category: 'Product',
  },
  {
    id: 'privacy',
    question: 'Is my spiritual conversation data private?',
    answer: 'Absolutely. We follow a privacy-first architecture. Your conversations are encrypted end-to-end, never sold to third parties, and you can delete your data at any time. We comply with India\'s DPDP Act 2023 and GDPR for our international users.',
    category: 'Privacy',
  },
  {
    id: 'family-pricing',
    question: 'How does the pricing work for families?',
    answer: 'Our Guru plan includes a family account with up to 5 users for ₹1,499/year. Each family member gets their own profile, conversation history, and personalized recommendations. It\'s the most affordable way for the whole family to access Divine Connect.',
    category: 'Pricing',
  },
  {
    id: 'offline',
    question: 'Does it work offline?',
    answer: 'Bhakti+ and Guru subscribers can download mantras, bhajans, festival guides, and basic panchang data for offline use. AI deity conversations require an internet connection, but we\'re working on a lightweight offline mode for Phase 2.',
    category: 'Product',
  },
  {
    id: 'web-version',
    question: 'Is there a web version or only mobile?',
    answer: 'Divine Connect is launching as a mobile-first app on Android and iOS. A web companion is planned for Phase 2, starting with the panchang, festival calendar, and bhajan library. The full AI conversation experience will remain mobile-first for the best experience.',
    category: 'Product',
  },
]
