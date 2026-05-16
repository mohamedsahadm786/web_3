import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { AnimatePresence, motion } from 'motion/react'
import { useStickyHeader } from '../hooks/useStickyHeader'
import { useCart } from '../lib/cart'
import { cn } from '../lib/utils'
import { products } from '../lib/products'
import { resolveImage } from '../lib/images'
import { ArrowUpRight, Cart, Close, Menu, Search } from './icons'
import CartDrawer from './CartDrawer'

const NAV = [
  { label: 'Home', anchor: '' },
  { label: 'About', anchor: 'about' },
  { label: 'Products', anchor: 'products' },
  { label: 'Why Us', anchor: 'why-us' },
  { label: 'Testimonials', anchor: 'testimonials' },
  { label: 'Contact', anchor: 'contact' },
]

function Logo() {
  const logo = resolveImage('logo/site-logo')
  if (logo) return <img src={logo} alt="ALLUVI" className="h-8 w-auto" />
  return (
    <span className="flex items-baseline gap-[3px]">
      <span className="font-display text-2xl font-bold tracking-tightest text-heading">
        ALLUVI
      </span>
      <span className="h-1.5 w-1.5 rounded-full bg-[linear-gradient(135deg,#22d3ee,#ec4899)]" />
    </span>
  )
}

export default function Header() {
  const scrolled = useStickyHeader(60)
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const { count, setOpen } = useCart()
  const [menu, setMenu] = useState(false)
  const [search, setSearch] = useState(false)
  const [query, setQuery] = useState('')

  const scrollToId = (id: string) => {
    if (!id) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const goAnchor = (anchor: string) => {
    setMenu(false)
    if (pathname !== '/') {
      navigate('/')
      setTimeout(() => scrollToId(anchor), 140)
    } else {
      scrollToId(anchor)
    }
  }

  const results = query
    ? products.filter((p) => p.name.toLowerCase().includes(query.toLowerCase()))
    : []

  return (
    <>
      <header
        className={cn(
          'fixed inset-x-0 top-0 z-[120] transition-all duration-500 ease-ease',
          scrolled
            ? 'border-b border-hairline bg-bg/80 backdrop-blur-xl'
            : 'border-b border-transparent bg-transparent',
        )}
      >
        <div
          className={cn(
            'shell flex items-center justify-between transition-all duration-500',
            scrolled ? 'py-3' : 'py-5',
          )}
        >
          <Link to="/" aria-label="ALLUVI home">
            <Logo />
          </Link>

          {/* desktop nav */}
          <nav className="hidden items-center gap-1 lg:flex">
            {NAV.map((item) => (
              <button
                key={item.label}
                onClick={() => goAnchor(item.anchor)}
                className="relative px-3.5 py-2 font-display text-[13px] font-medium text-body transition-colors duration-300 hover:text-heading"
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-1.5">
            <button
              onClick={() => setSearch(true)}
              aria-label="Search"
              className="grid h-10 w-10 place-items-center rounded-full text-body transition-colors hover:text-heading"
            >
              <Search className="h-[18px] w-[18px]" />
            </button>

            <Link
              to="/shop"
              className="group relative ml-1 hidden items-center gap-2 overflow-hidden rounded-full px-5 py-2.5 font-display text-[11px] font-bold uppercase tracking-[0.16em] text-bg sm:inline-flex"
            >
              <span className="absolute inset-0 bg-[linear-gradient(100deg,#22d3ee,#8b5cf6,#ec4899)] bg-[length:200%_auto] transition-[background-position] duration-700 group-hover:bg-[position:100%_0]" />
              <span className="relative z-10 flex items-center gap-1.5">
                Buy Now <ArrowUpRight className="h-3.5 w-3.5" />
              </span>
            </Link>

            <button
              onClick={() => setOpen(true)}
              aria-label="Open cart"
              className="relative grid h-10 w-10 place-items-center rounded-full text-body transition-colors hover:text-heading"
            >
              <Cart className="h-[19px] w-[19px]" />
              {count > 0 && (
                <span className="absolute right-1 top-1 grid h-4 min-w-4 place-items-center rounded-full bg-magenta px-1 text-[9px] font-bold text-white">
                  {count}
                </span>
              )}
            </button>

            <button
              onClick={() => setMenu(true)}
              aria-label="Open menu"
              className="grid h-10 w-10 place-items-center rounded-full text-body hover:text-heading lg:hidden"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      {/* mobile menu */}
      <AnimatePresence>
        {menu && (
          <motion.div
            className="fixed inset-0 z-[140] flex flex-col bg-bg lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="shell flex items-center justify-between py-5">
              <Logo />
              <button
                onClick={() => setMenu(false)}
                aria-label="Close menu"
                className="grid h-10 w-10 place-items-center rounded-full text-body hover:text-heading"
              >
                <Close className="h-5 w-5" />
              </button>
            </div>
            <nav className="shell mt-6 flex flex-col">
              {NAV.map((item, i) => (
                <motion.button
                  key={item.label}
                  onClick={() => goAnchor(item.anchor)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.06 * i + 0.1 }}
                  className="border-b border-hairline py-5 text-left font-display text-3xl font-semibold tracking-tight text-heading"
                >
                  {item.label}
                </motion.button>
              ))}
            </nav>
            <div className="shell mt-auto pb-10">
              <Link
                to="/shop"
                onClick={() => setMenu(false)}
                className="flex w-full items-center justify-center gap-2 rounded-full bg-[linear-gradient(100deg,#22d3ee,#8b5cf6,#ec4899)] py-4 font-display text-xs font-bold uppercase tracking-[0.18em] text-bg"
              >
                Buy Now <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* search overlay */}
      <AnimatePresence>
        {search && (
          <motion.div
            className="fixed inset-0 z-[140] bg-bg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="shell pt-28">
              <div className="flex items-center justify-between">
                <span className="font-display text-xs uppercase tracking-[0.2em] text-dim">
                  Search formulations
                </span>
                <button
                  onClick={() => {
                    setSearch(false)
                    setQuery('')
                  }}
                  aria-label="Close search"
                  className="grid h-10 w-10 place-items-center rounded-full text-body hover:text-heading"
                >
                  <Close className="h-5 w-5" />
                </button>
              </div>
              <input
                autoFocus
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Type a product name…"
                className="mt-4 w-full border-b border-hairline bg-transparent pb-4 font-display text-2xl text-heading outline-none placeholder:text-dim md:text-4xl"
              />
              <div className="mt-6 space-y-1">
                {results.map((p) => (
                  <Link
                    key={p.slug}
                    to={`/product/${p.slug}`}
                    onClick={() => {
                      setSearch(false)
                      setQuery('')
                    }}
                    className="flex items-center justify-between rounded-xl px-4 py-3.5 text-body transition-colors hover:bg-white/5 hover:text-heading"
                  >
                    <span className="font-display">{p.name}</span>
                    <span className="text-xs text-dim">{p.price ?? 'Enquire'}</span>
                  </Link>
                ))}
                {query && results.length === 0 && (
                  <p className="px-4 py-3 text-sm text-dim">No formulations match “{query}”.</p>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <CartDrawer />
    </>
  )
}
