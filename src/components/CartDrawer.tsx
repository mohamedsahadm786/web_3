import { AnimatePresence, motion } from 'motion/react'
import { useCart } from '../lib/cart'
import { whatsappLink } from '../lib/utils'
import { Close, Minus, Plus, Whatsapp } from './icons'

// Lightweight cart drawer — checkout is handed off to WhatsApp.
export default function CartDrawer() {
  const { lines, open, setOpen, remove, setQty, count, clear } = useCart()

  const message =
    'Hello ALLUVI, I would like to order:\n' +
    lines.map((l) => `• ${l.name} ×${l.qty}${l.price ? ` (${l.price})` : ''}`).join('\n')

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            className="fixed inset-0 z-[170] bg-black/70 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          />
          <motion.aside
            className="fixed right-0 top-0 z-[171] flex h-full w-full max-w-[420px] flex-col border-l border-hairline bg-bg-soft"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            <header className="flex items-center justify-between border-b border-hairline px-6 py-5">
              <h3 className="font-display text-sm font-bold uppercase tracking-[0.2em] text-heading">
                Your Cart <span className="text-violet">({count})</span>
              </h3>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close cart"
                className="text-dim transition-colors hover:text-heading"
              >
                <Close className="h-5 w-5" />
              </button>
            </header>

            <div className="flex-1 overflow-y-auto px-6 py-5">
              {lines.length === 0 ? (
                <p className="mt-10 text-center text-sm text-dim">
                  No products in the cart yet.
                </p>
              ) : (
                <ul className="space-y-4">
                  {lines.map((l) => (
                    <li
                      key={l.slug}
                      className="glass flex items-center gap-4 rounded-2xl p-3"
                    >
                      <div className="min-w-0 flex-1">
                        <p className="truncate font-display text-sm font-semibold text-heading">
                          {l.name}
                        </p>
                        <p className="text-xs text-dim">{l.price ?? 'Price on enquiry'}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => setQty(l.slug, l.qty - 1)}
                          aria-label="Decrease"
                          className="grid h-7 w-7 place-items-center rounded-full border border-hairline text-dim hover:text-heading"
                        >
                          <Minus className="h-3.5 w-3.5" />
                        </button>
                        <span className="w-5 text-center text-sm text-heading">{l.qty}</span>
                        <button
                          onClick={() => setQty(l.slug, l.qty + 1)}
                          aria-label="Increase"
                          className="grid h-7 w-7 place-items-center rounded-full border border-hairline text-dim hover:text-heading"
                        >
                          <Plus className="h-3.5 w-3.5" />
                        </button>
                      </div>
                      <button
                        onClick={() => remove(l.slug)}
                        aria-label="Remove"
                        className="text-dim hover:text-magenta"
                      >
                        <Close className="h-4 w-4" />
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {lines.length > 0 && (
              <footer className="space-y-3 border-t border-hairline px-6 py-5">
                <a
                  href={whatsappLink(message)}
                  target="_blank"
                  rel="noreferrer"
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-[linear-gradient(100deg,#22d3ee,#8b5cf6,#ec4899)] px-6 py-3.5 font-display text-[11px] font-bold uppercase tracking-[0.16em] text-bg"
                >
                  <Whatsapp className="h-4 w-4" />
                  Checkout on WhatsApp
                </a>
                <button
                  onClick={clear}
                  className="w-full text-center text-xs uppercase tracking-[0.16em] text-dim hover:text-heading"
                >
                  Clear cart
                </button>
              </footer>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  )
}
