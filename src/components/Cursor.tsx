import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'motion/react'
import { prefersReducedMotion } from '../hooks/useReducedMotion'

// Custom glow cursor: a sharp iridescent dot + a soft lagging ring
// that swells over interactive elements. Fine-pointer devices only.
export default function Cursor() {
  const [active, setActive] = useState(false)
  const [hovering, setHovering] = useState(false)

  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const ringX = useSpring(x, { stiffness: 280, damping: 28, mass: 0.5 })
  const ringY = useSpring(y, { stiffness: 280, damping: 28, mass: 0.5 })

  useEffect(() => {
    const fine = window.matchMedia('(pointer: fine)').matches
    if (!fine || prefersReducedMotion()) return

    setActive(true)
    document.documentElement.classList.add('cursor-ready')

    const move = (e: PointerEvent) => {
      x.set(e.clientX)
      y.set(e.clientY)
      const t = e.target as HTMLElement
      setHovering(!!t.closest('a, button, [data-cursor="hover"], input, textarea'))
    }
    window.addEventListener('pointermove', move)
    return () => {
      window.removeEventListener('pointermove', move)
      document.documentElement.classList.remove('cursor-ready')
    }
  }, [x, y])

  if (!active) return null

  return (
    <>
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[200] h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan"
        style={{ x, y }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[199] -translate-x-1/2 -translate-y-1/2 rounded-full border border-violet/60"
        style={{
          x: ringX,
          y: ringY,
          width: hovering ? 56 : 30,
          height: hovering ? 56 : 30,
          boxShadow: hovering
            ? '0 0 26px 2px rgba(139,92,246,0.55)'
            : '0 0 14px 0 rgba(34,211,238,0.4)',
          backgroundColor: hovering ? 'rgba(139,92,246,0.10)' : 'transparent',
        }}
        transition={{ type: 'spring', stiffness: 320, damping: 24 }}
      />
    </>
  )
}
