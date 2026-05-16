import type { ReactNode } from 'react'
import { motion } from 'motion/react'

interface Props {
  children: ReactNode
  delay?: number
  y?: number
  className?: string
  once?: boolean
}

// Reveal-on-scroll wrapper — fades + lifts content into view once.
export default function Reveal({
  children,
  delay = 0,
  y = 34,
  className,
  once = true,
}: Props) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount: 0.25 }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}
