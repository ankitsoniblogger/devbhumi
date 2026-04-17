'use client'

interface SectionLabelProps {
  number: string
  label: string
}

export function SectionLabel({ number, label }: SectionLabelProps) {
  return (
    <p className="text-[11px] tracking-[0.12em] uppercase text-saffron-500 font-medium mb-4">
      {number} / {label}
    </p>
  )
}
