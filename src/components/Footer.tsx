import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { BRAND, whatsappLink } from '../lib/utils'
import Button from './Button'
import { ArrowRight, Facebook, Instagram, Whatsapp } from './icons'

const QUICK = [
  { label: 'Home', anchor: '' },
  { label: 'About Us', anchor: 'about' },
  { label: 'Products', anchor: 'products' },
  { label: 'Why Us', anchor: 'why-us' },
  { label: 'Testimonials', anchor: 'testimonials' },
  { label: 'Contact', anchor: 'contact' },
]

export default function Footer() {
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)
  const navigate = useNavigate()
  const { pathname } = useLocation()

  const goAnchor = (anchor: string) => {
    const scroll = () => {
      if (!anchor) window.scrollTo({ top: 0, behavior: 'smooth' })
      else document.getElementById(anchor)?.scrollIntoView({ behavior: 'smooth' })
    }
    if (pathname !== '/') {
      navigate('/')
      setTimeout(scroll, 140)
    } else scroll()
  }

  return (
    <footer className="relative overflow-hidden border-t border-hairline bg-bg pt-20">
      {/* watermark */}
      <span
        aria-hidden
        className="pointer-events-none absolute -bottom-[3vw] left-1/2 -translate-x-1/2 select-none font-display text-[26vw] font-bold leading-none tracking-tightest text-white/[0.03]"
      >
        ALLUVI
      </span>

      <div className="rule-iris absolute inset-x-0 top-0" />

      <div className="shell relative">
        <div className="grid gap-14 lg:grid-cols-[1.4fr_0.8fr_0.8fr_1.2fr]">
          {/* brand + contact */}
          <div>
            <p className="font-display text-[11px] uppercase tracking-[0.22em] text-violet">
              Here to Help You Anytime
            </p>
            <span className="mt-4 flex items-baseline gap-[3px]">
              <span className="font-display text-3xl font-bold tracking-tightest text-heading">
                ALLUVI
              </span>
              <span className="h-2 w-2 rounded-full bg-[linear-gradient(135deg,#22d3ee,#ec4899)]" />
            </span>
            <ul className="mt-6 space-y-2 text-sm text-body">
              <li>{BRAND.address}</li>
              <li>
                <a href={`tel:${BRAND.phone}`} className="hover:text-heading">
                  {BRAND.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${BRAND.email}`} className="hover:text-heading">
                  {BRAND.email}
                </a>
              </li>
            </ul>
            <div className="mt-7">
              <Button to="/shop" variant="primary" icon={<ArrowRight className="h-4 w-4" />}>
                Start Your Order
              </Button>
            </div>
          </div>

          {/* quick links */}
          <div>
            <h3 className="font-display text-[11px] uppercase tracking-[0.2em] text-dim">
              Quick Links
            </h3>
            <ul className="mt-5 space-y-3">
              {QUICK.map((q) => (
                <li key={q.label}>
                  <button
                    onClick={() => goAnchor(q.anchor)}
                    className="text-sm text-body transition-colors hover:text-heading"
                  >
                    {q.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* shop */}
          <div>
            <h3 className="font-display text-[11px] uppercase tracking-[0.2em] text-dim">
              Catalogue
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <Link to="/shop" className="text-body hover:text-heading">
                  All Products
                </Link>
              </li>
              <li>
                <a
                  href={whatsappLink('Hello ALLUVI, I have a question.')}
                  target="_blank"
                  rel="noreferrer"
                  className="text-body hover:text-heading"
                >
                  WhatsApp Support
                </a>
              </li>
              <li>
                <a href={`mailto:${BRAND.email}`} className="text-body hover:text-heading">
                  Email Sales
                </a>
              </li>
            </ul>
            <div className="mt-6 flex gap-3">
              <a
                href={BRAND.social.facebook}
                aria-label="Facebook"
                className="grid h-9 w-9 place-items-center rounded-full border border-hairline text-body transition-all hover:border-violet/50 hover:text-heading"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href={BRAND.social.instagram}
                aria-label="Instagram"
                className="grid h-9 w-9 place-items-center rounded-full border border-hairline text-body transition-all hover:border-violet/50 hover:text-heading"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                className="grid h-9 w-9 place-items-center rounded-full border border-hairline text-body transition-all hover:border-violet/50 hover:text-heading"
              >
                <Whatsapp className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* newsletter */}
          <div>
            <p className="font-display text-[11px] uppercase tracking-[0.2em] text-violet">
              Get Latest Offers
            </p>
            <h3 className="mt-3 font-display text-xl font-semibold text-heading">
              Don't miss the latest offers
            </h3>
            <p className="mt-2 text-sm text-body">
              Be the first to know about new products, promotions, and store
              updates from ALLUVI.
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault()
                if (email) setSent(true)
              }}
              className="mt-5"
            >
              {sent ? (
                <p className="rounded-full border border-cyan/40 bg-cyan/5 px-5 py-3 text-center text-sm text-cyan">
                  Subscribed — thank you
                </p>
              ) : (
                <div className="glass flex items-center rounded-full p-1.5">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="min-w-0 flex-1 bg-transparent px-4 text-sm text-heading outline-none placeholder:text-dim"
                  />
                  <button
                    type="submit"
                    className="shrink-0 rounded-full bg-[linear-gradient(100deg,#22d3ee,#8b5cf6,#ec4899)] px-5 py-2.5 font-display text-[10px] font-bold uppercase tracking-[0.16em] text-bg"
                  >
                    Subscribe
                  </button>
                </div>
              )}
            </form>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-3 border-t border-hairline py-7 sm:flex-row">
          <p className="text-xs text-dim">
            © {new Date().getFullYear()} ALLUVI. All Rights Reserved.
          </p>
          <p className="text-xs text-dim">Crafted for precision · Dubai, UAE</p>
        </div>
      </div>
    </footer>
  )
}
