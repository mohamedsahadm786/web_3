import { useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { AnimatePresence, motion } from 'motion/react'
import Img from '../components/Img'
import Reveal from '../components/Reveal'
import ProductCard from '../components/ProductCard'
import Button from '../components/Button'
import { getProduct, relatedProducts } from '../lib/products'
import { useCart } from '../lib/cart'
import { whatsappLink } from '../lib/utils'
import { ChevronDown, Minus, Plus, Star, Whatsapp } from '../components/icons'

const DETAILS = [
  { row: 'Form', value: 'Lyophilised powder' },
  { row: 'Purity', value: 'Verified — third-party tested' },
  { row: 'Storage', value: 'Cool, dry, away from light' },
  { row: 'Handling', value: 'Sealed & protected packaging' },
]

export default function Product() {
  const { slug = '' } = useParams()
  const product = getProduct(slug)
  const related = useMemo(() => relatedProducts(slug), [slug])
  const { add } = useCart()
  const [thumb, setThumb] = useState(1)
  const [qty, setQty] = useState(1)
  const [open, setOpen] = useState<number | null>(0)

  if (!product) {
    return (
      <main className="grid min-h-[80vh] place-items-center bg-bg px-6 pt-32 text-center">
        <div>
          <p className="font-display text-7xl font-bold text-iris">404</p>
          <h1 className="mt-4 text-2xl font-bold text-heading">Product not found</h1>
          <p className="mt-2 text-body">The formulation you're looking for isn't here.</p>
          <div className="mt-7 flex justify-center">
            <Button to="/shop" variant="primary">
              Back to Shop
            </Button>
          </div>
        </div>
      </main>
    )
  }

  const priced = !!product.price

  return (
    <main className="relative overflow-hidden bg-bg pb-28 pt-32 md:pt-40">
      <div
        aria-hidden
        className="absolute right-0 top-0 h-[34vw] w-[50vw] rounded-full bg-violet/12 blur-[140px]"
      />
      <div className="shell relative">
        {/* breadcrumb */}
        <nav className="flex flex-wrap items-center gap-2 text-xs text-dim">
          <Link to="/" className="hover:text-heading">
            Home
          </Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-heading">
            Shop
          </Link>
          <span>/</span>
          <span className="text-body">{product.name}</span>
        </nav>

        <div className="mt-8 grid gap-12 lg:grid-cols-2">
          {/* gallery */}
          <Reveal>
            <div>
              <div className="shine relative aspect-[4/3] overflow-hidden rounded-[26px] border border-hairline bg-bg-soft">
                <Img
                  name={`product-gallery/${product.slug}_${thumb}`}
                  alt={product.name}
                  fit="cover"
                  tint={product.tint}
                  fallback={product.name}
                  loading="eager"
                />
              </div>
              <div className="mt-4 grid grid-cols-4 gap-3">
                {[1, 2, 3, 4].map((n) => (
                  <button
                    key={n}
                    onClick={() => setThumb(n)}
                    aria-label={`View image ${n}`}
                    className={
                      'aspect-square overflow-hidden rounded-xl border transition-all ' +
                      (thumb === n
                        ? 'border-violet/60 ring-1 ring-violet/40'
                        : 'border-hairline hover:border-violet/40')
                    }
                  >
                    <Img
                      name={`product-gallery/${product.slug}_${n}`}
                      alt=""
                      fit="cover"
                      tint={product.tint}
                      fallback={`${n}`}
                    />
                  </button>
                ))}
              </div>
            </div>
          </Reveal>

          {/* info */}
          <Reveal delay={0.1}>
            <div>
              <span className="rounded-full border border-hairline px-3 py-1 font-display text-[10px] uppercase tracking-[0.18em] text-violet">
                Research Formulation
              </span>
              <h1 className="mt-4 text-4xl font-bold tracking-tightest text-heading sm:text-5xl">
                {product.name}
              </h1>
              <div className="mt-3 flex items-center gap-3">
                <div className="flex gap-1 text-cyan">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4" />
                  ))}
                </div>
                <span className="text-xs text-dim">{product.category}</span>
              </div>
              <p className="mt-5 font-display text-2xl font-semibold text-iris">
                {product.price ?? 'Price on enquiry'}
              </p>
              <p className="mt-5 leading-relaxed text-body">{product.blurb}</p>

              {/* qty + actions */}
              <div className="mt-7 flex flex-wrap items-center gap-4">
                <div className="glass flex items-center gap-1 rounded-full p-1.5">
                  <button
                    onClick={() => setQty((q) => Math.max(1, q - 1))}
                    aria-label="Decrease quantity"
                    className="grid h-9 w-9 place-items-center rounded-full text-body hover:text-heading"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="w-8 text-center font-display text-heading">{qty}</span>
                  <button
                    onClick={() => setQty((q) => q + 1)}
                    aria-label="Increase quantity"
                    className="grid h-9 w-9 place-items-center rounded-full text-body hover:text-heading"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>

                {priced ? (
                  <Button
                    onClick={() =>
                      add(
                        { slug: product.slug, name: product.name, price: product.price },
                        qty,
                      )
                    }
                    variant="primary"
                    icon={<Plus className="h-4 w-4" />}
                  >
                    Add to Cart
                  </Button>
                ) : (
                  <Button
                    href={whatsappLink(
                      `Hello ALLUVI, I'd like to enquire about ${product.name} (qty ${qty}).`,
                    )}
                    variant="primary"
                    icon={<Whatsapp className="h-4 w-4" />}
                  >
                    Enquire on WhatsApp
                  </Button>
                )}
              </div>

              {/* details accordion */}
              <div className="mt-9 divide-y divide-hairline border-y border-hairline">
                {DETAILS.map((d, i) => (
                  <div key={d.row}>
                    <button
                      onClick={() => setOpen(open === i ? null : i)}
                      className="flex w-full items-center justify-between py-4 text-left"
                    >
                      <span className="font-display text-sm font-semibold text-heading">
                        {d.row}
                      </span>
                      <ChevronDown
                        className={
                          'h-4 w-4 text-dim transition-transform duration-300 ' +
                          (open === i ? 'rotate-180' : '')
                        }
                      />
                    </button>
                    <AnimatePresence initial={false}>
                      {open === i && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                          className="overflow-hidden"
                        >
                          <p className="pb-4 text-sm text-body">{d.value}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        {/* related */}
        <div className="mt-24">
          <Reveal>
            <h2 className="text-3xl font-bold tracking-tightest text-heading sm:text-4xl">
              You May Also <span className="text-iris">Like</span>
            </h2>
          </Reveal>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {related.map((p, i) => (
              <Reveal key={p.slug} delay={(i % 4) * 0.07}>
                <ProductCard product={p} />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
