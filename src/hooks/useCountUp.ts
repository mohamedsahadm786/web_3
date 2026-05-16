import { useEffect, useRef, useState } from 'react'
import { prefersReducedMotion } from './useReducedMotion'

// Counts from 0 -> target once the element scrolls into view.
export function useCountUp<T extends HTMLElement = HTMLDivElement>(
  target: number,
  duration = 1600,
) {
  const ref = useRef<T>(null)
  const [value, setValue] = useState(0)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (prefersReducedMotion()) {
      setValue(target)
      return
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started.current) return
        started.current = true
        const start = performance.now()
        const step = (now: number) => {
          const p = Math.min(1, (now - start) / duration)
          const eased = 1 - Math.pow(1 - p, 3)
          setValue(Math.round(eased * target))
          if (p < 1) requestAnimationFrame(step)
        }
        requestAnimationFrame(step)
      },
      { threshold: 0.5 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [target, duration])

  return { ref, value }
}
