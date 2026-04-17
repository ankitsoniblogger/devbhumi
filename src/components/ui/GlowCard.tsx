'use client'

import { motion } from 'framer-motion'
import { cardHover } from '@/lib/animations'
import { cn } from '@/lib/utils'

interface GlowCardProps {
  children: React.ReactNode
  className?: string
}

export function GlowCard({ children, className }: GlowCardProps) {
  return (
    <motion.div
      variants={cardHover}
      initial="rest"
      whileHover="hover"
      className={cn(
        'bg-bg-overlay border border-border-subtle rounded-2xl backdrop-blur-sm',
        'hover:border-border-hover transition-colors duration-300',
        className
      )}
    >
      {children}
    </motion.div>
  )
}
