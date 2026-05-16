import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'
import Eyebrow from '../components/Eyebrow'
import ProductCard from '../components/ProductCard'
import { products } from '../lib/products'
import { cn } from '../lib/utils'

export default function Shop() {
  const categories = useMemo(
    () => ['All', ...Array.from(new Set(products.map((p) => p.category)))],
    [],
  )
  const [active, setActive] = useState('All')

  const list = active === 'All' ? products : products.filter((p) => p.category === active)

  return (
    <main className="relative overflow-hidden bg-bg pb-28 pt-32 md:pt-40">
      <div
        aria-hidden
        className="absolute left-1/2 top-0 h-[34vw] w-[70vw] -translate-x-1/2 rounded-full bg-violet/12 blur-[140px]"
      />

      <div className="shell relative">
        {/* breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-dim">
          <Link to="/" className="hover:text-heading">
            Home
          </Link>
          <span>/</span>
          <span className="text-body">Shop</span>
        </nav>

        <Reveal>
          <div className="mt-6 max-w-2xl">
            <Eyebrow>The Full Catalogue</Eyebrow>
            <h1 className="mt-5 text-5xl font-bold tracking-tightest text-heading sm:text-6xl">
              All <span className="text-iris">Products</span>
            </h1>
            <p className="mt-4 text-body">
              {products.length} research formulations — sourced from verified
              suppliers and packed with precision.
            </p>
          </div>
        </Reveal>

        {/* filters */}
        <Reveal delay={0.1}>
          <div className="mt-9 flex flex-wrap gap-2.5">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={cn(
                  'rounded-full border px-4 py-2 font-display text-[11px] font-bold uppercase tracking-[0.14em] transition-all duration-300',
                  active === c
                    ? 'border-transparent bg-[linear-gradient(100deg,#22d3ee,#8b5cf6,#ec4899)] text-bg'
                    : 'border-hairline text-body hover:border-violet/40 hover:text-heading',
                )}
              >
                {c}
              </button>
            ))}
          </div>
        </Reveal>

        {/* grid */}
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {list.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 4) * 0.07}>
              <ProductCard product={p} />
            </Reveal>
          ))}
        </div>
      </div>
    </main>
  )
}
