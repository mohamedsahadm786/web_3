import { useEffect, useRef, useState } from 'react'
import { prefersReducedMotion } from './useReducedMotion'

interface Options {
  typeSpeed?: number
  deleteSpeed?: number
  holdTime?: number
}

// Typewriter that rotates through a list of strings. With reduced
// motion it simply shows the first string, static.
export function useTypewriter(words: string[], opts: Options = {}) {
  const { typeSpeed = 62, deleteSpeed = 32, holdTime = 1900 } = opts
  const [text, setText] = useState(words[0] ?? '')
  const [done, setDone] = useState(false)
  const idx = useRef(0)
  const sub = useRef((words[0] ?? '').length)
  const deleting = useRef(false)

  useEffect(() => {
    if (prefersReducedMotion() || words.length < 2) {
      setText(words[0] ?? '')
      setDone(true)
      return
    }
    let timer: ReturnType<typeof setTimeout>

    const tick = () => {
      const word = words[idx.current]
      if (!deleting.current) {
        sub.current += 1
        setText(word.slice(0, sub.current))
        if (sub.current >= word.length) {
          deleting.current = true
          timer = setTimeout(tick, holdTime)
          return
        }
      } else {
        sub.current -= 1
        setText(word.slice(0, sub.current))
        if (sub.current <= 0) {
          deleting.current = false
          idx.current = (idx.current + 1) % words.length
        }
      }
      timer = setTimeout(tick, deleting.current ? deleteSpeed : typeSpeed)
    }

    timer = setTimeout(tick, holdTime)
    return () => clearTimeout(timer)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return { text, done }
}
