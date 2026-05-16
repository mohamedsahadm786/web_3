import { Link } from 'react-router-dom'
import type { Product } from '../lib/products'
import { useCart } from '../lib/cart'
import { whatsappLink } from '../lib/utils'
import Img from './Img'
import { Heart, Plus, Whatsapp } from './icons'

export default function ProductCard({ product }: { product: Product }) {
  const { add } = useCart()
  const priced = !!product.price

  return (
    <article className="group relative">
      <div className="shine relative overflow-hidden rounded-[20px] border border-hairline bg-surface transition-all duration-500 ease-ease group-hover:-translate-y-1.5 group-hover:border-violet/35 group-hover:shadow-[0_24px_60px_-22px_rgba(139,92,246,0.55)]">
        {/* image */}
        <Link
          to={`/product/${product.slug}`}
          className="relative block aspect-[4/3] overflow-hidden bg-bg-soft"
        >
          <div className="h-full w-full transition-transform duration-700 ease-ease group-hover:scale-[1.07]">
            <Img
              name={`products/${product.slug}`}
              alt={product.name}
              fit="cover"
              tint={product.tint}
              fallback={product.name}
            />
          </div>
          <span className="absolute left-3 top-3 rounded-full border border-hairline bg-bg/70 px-3 py-1 font-display text-[9px] uppercase tracking-[0.18em] text-body backdrop-blur">
            {product.category}
          </span>
          <button
            aria-label="Add to wishlist"
            onClick={(e) => e.preventDefault()}
            className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full border border-hairline bg-bg/70 text-body opacity-0 backdrop-blur transition-all duration-300 hover:text-magenta group-hover:opacity-100"
          >
            <Heart className="h-4 w-4" />
          </button>
        </Link>

        {/* body */}
        <div className="p-5">
          <Link to={`/product/${product.slug}`}>
            <h3 className="font-display text-base font-semibold text-heading transition-colors group-hover:text-iris">
              {product.name}
            </h3>
          </Link>
          <p className="mt-2 line-clamp-2 text-[13px] leading-relaxed text-dim">
            {product.blurb}
          </p>
          <div className="mt-4 flex items-center justify-between">
            <span className="font-display text-sm font-semibold text-heading">
              {product.price ?? 'Enquire'}
            </span>
            {priced ? (
              <button
                onClick={() =>
                  add({ slug: product.slug, name: product.name, price: product.price })
                }
                className="flex items-center gap-1.5 rounded-full border border-hairline px-4 py-2 font-display text-[10px] font-bold uppercase tracking-[0.14em] text-heading transition-all hover:border-violet/50 hover:bg-white/5"
              >
                <Plus className="h-3.5 w-3.5" /> Add
              </button>
            ) : (
              <a
                href={whatsappLink(`Hello ALLUVI, I'd like to enquire about ${product.name}.`)}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 rounded-full border border-hairline px-4 py-2 font-display text-[10px] font-bold uppercase tracking-[0.14em] text-heading transition-all hover:border-cyan/50 hover:bg-white/5"
              >
                <Whatsapp className="h-3.5 w-3.5" /> Enquire
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  )
}
