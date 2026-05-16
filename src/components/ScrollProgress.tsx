import { motion, useScroll, useSpring } from 'motion/react'

// Thin iridescent progress bar pinned to the top of the viewport.
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 26,
    restDelta: 0.001,
  })

  return (
    <motion.div
      aria-hidden
      className="fixed left-0 top-0 z-[150] h-[3px] w-full origin-left bg-[linear-gradient(90deg,#22d3ee,#8b5cf6,#ec4899)]"
      style={{ scaleX }}
    />
  )
}
