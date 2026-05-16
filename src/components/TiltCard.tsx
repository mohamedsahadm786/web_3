import { useRef } from 'react'
import type { ReactNode, PointerEvent } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react'
import { prefersReducedMotion } from '../hooks/useReducedMotion'

interface Props {
  children: ReactNode
  className?: string
  max?: number
}

// CSS-perspective pseudo-3D card that tilts toward the cursor.
export default function TiltCard({ children, className, max = 8 }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const reduced = prefersReducedMotion()

  const px = useMotionValue(0.5)
  const py = useMotionValue(0.5)
  const sx = useSpring(px, { stiffness: 160, damping: 18 })
  const sy = useSpring(py, { stiffness: 160, damping: 18 })
  const rotateY = useTransform(sx, [0, 1], [-max, max])
  const rotateX = useTransform(sy, [0, 1], [max, -max])

  const onMove = (e: PointerEvent<HTMLDivElement>) => {
    if (reduced || !ref.current) return
    const r = ref.current.getBoundingClientRect()
    px.set((e.clientX - r.left) / r.width)
    py.set((e.clientY - r.top) / r.height)
  }
  const reset = () => {
    px.set(0.5)
    py.set(0.5)
  }

  return (
    <motion.div
      ref={ref}
      onPointerMove={onMove}
      onPointerLeave={reset}
      style={{ rotateX, rotateY, transformPerspective: 850 }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
