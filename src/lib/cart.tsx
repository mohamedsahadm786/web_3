import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import type { ReactNode } from 'react'

export interface CartLine {
  slug: string
  name: string
  price: string | null
  qty: number
}

interface CartCtx {
  lines: CartLine[]
  count: number
  open: boolean
  setOpen: (v: boolean) => void
  add: (line: Omit<CartLine, 'qty'>, qty?: number) => void
  remove: (slug: string) => void
  setQty: (slug: string, qty: number) => void
  clear: () => void
}

const Ctx = createContext<CartCtx | null>(null)
const KEY = 'alluvi-cart'

export function CartProvider({ children }: { children: ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>(() => {
    try {
      const raw = localStorage.getItem(KEY)
      return raw ? (JSON.parse(raw) as CartLine[]) : []
    } catch {
      return []
    }
  })
  const [open, setOpen] = useState(false)

  useEffect(() => {
    try {
      localStorage.setItem(KEY, JSON.stringify(lines))
    } catch {
      /* ignore */
    }
  }, [lines])

  const value = useMemo<CartCtx>(
    () => ({
      lines,
      count: lines.reduce((n, l) => n + l.qty, 0),
      open,
      setOpen,
      add: (line, qty = 1) => {
        setLines((prev) => {
          const found = prev.find((l) => l.slug === line.slug)
          if (found) {
            return prev.map((l) => (l.slug === line.slug ? { ...l, qty: l.qty + qty } : l))
          }
          return [...prev, { ...line, qty }]
        })
        setOpen(true)
      },
      remove: (slug) => setLines((prev) => prev.filter((l) => l.slug !== slug)),
      setQty: (slug, qty) =>
        setLines((prev) =>
          prev.map((l) => (l.slug === slug ? { ...l, qty: Math.max(1, qty) } : l)),
        ),
      clear: () => setLines([]),
    }),
    [lines, open],
  )

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>
}

export function useCart(): CartCtx {
  const ctx = useContext(Ctx)
  if (!ctx) throw new Error('useCart must be used within CartProvider')
  return ctx
}
