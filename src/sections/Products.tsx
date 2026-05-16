import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'
import Eyebrow from '../components/Eyebrow'
import SectionLabel from '../components/SectionLabel'
import ProductCard from '../components/ProductCard'
import { products } from '../lib/products'
import { ArrowUpRight } from '../components/icons'

export default function Products() {
  return (
    <section id="products" className="relative overflow-hidden bg-bg-soft py-24 scroll-mt-20 md:py-32">
      <div className="pointer-events-none absolute right-0 top-10 opacity-90">
        <SectionLabel>CATALOGUE</SectionLabel>
      </div>

      <div className="shell relative">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <Reveal className="max-w-2xl">
            <Eyebrow>Our Products</Eyebrow>
            <h2 className="mt-5 text-4xl font-bold tracking-tightest text-heading sm:text-5xl">
              Research formulations packed with{' '}
              <span className="text-iris">precision and care</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <Link
              to="/shop"
              className="group inline-flex items-center gap-2 rounded-full border border-hairline px-5 py-3 font-display text-[11px] font-bold uppercase tracking-[0.16em] text-heading transition-all hover:border-violet/50 hover:bg-white/5"
            >
              View All Products
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 4) * 0.08}>
              <ProductCard product={p} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
