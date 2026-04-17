export const pageVariants = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
  exit: { opacity: 0, y: -8, transition: { duration: 0.25, ease: 'easeIn' } },
}

export const sectionReveal = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

export const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
}

export const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
}

export const cardHover = {
  rest: { y: 0, boxShadow: '0 0 0px rgba(0,0,0,0)' },
  hover: { y: -4, boxShadow: '0 8px 40px rgba(243,140,49,0.12)', transition: { duration: 0.3 } },
}

export const glowPulse = {
  animate: {
    opacity: [0.4, 0.7, 0.4],
    scale: [1, 1.04, 1],
    transition: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
  },
}

export const viewportConfig = { once: true, margin: '-80px' as const }
