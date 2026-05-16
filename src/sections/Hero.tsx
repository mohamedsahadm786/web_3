import { Suspense, lazy } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import { useTypewriter } from '../hooks/useTypewriter'
import { prefersReducedMotion } from '../hooks/useReducedMotion'
import { getProduct } from '../lib/products'
import Img from '../components/Img'
import Eyebrow from '../components/Eyebrow'
import Button from '../components/Button'
import { ArrowRight, ArrowUpRight, Check } from '../components/icons'

const HeroScene = lazy(() => import('../components/HeroScene'))

const HEADLINES = [
  'Your Weight-Loss Journey Reinvented by Science',
  'Lab-Engineered Formulations for Your Biology',
]

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: 0.15 + i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function Hero() {
  const { text } = useTypewriter(HEADLINES)
  const reduced = prefersReducedMotion()
  const featured = getProduct('retatrutide-40mg')

  return (
    <section id="home" className="relative min-h-[100svh] overflow-hidden bg-bg">
      {/* background image + atmosphere */}
      <div className="absolute inset-0">
        <Img
          name="hero/home-hero-background-image"
          alt=""
          fit="cover"
          fallback="ALLUVI"
          className="opacity-30"
        />
        <div className="absolute inset-0 bg-[radial-gradient(120%_90%_at_50%_0%,transparent,#0A0B0F_72%)]" />
        <div className="absolute inset-0 bg-bg/40" />
      </div>

      {/* WebGL orb */}
      {!reduced && (
        <div className="absolute inset-y-0 right-0 hidden w-[52%] lg:block">
          <Suspense fallback={null}>
            <HeroScene />
          </Suspense>
        </div>
      )}

      <div className="shell relative grid min-h-[100svh] items-center gap-12 pb-24 pt-32 lg:grid-cols-[1.05fr_0.95fr] lg:pt-28">
        {/* copy */}
        <div className="relative z-10 max-w-xl">
          <motion.div custom={0} variants={fadeUp} initial="hidden" animate="show">
            <Eyebrow>High-Purity Research Peptides</Eyebrow>
          </motion.div>

          <motion.h1
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-6 text-[2.6rem] font-bold leading-[1.03] tracking-tightest text-heading sm:text-6xl"
          >
            <span className="min-h-[3.2em] block sm:min-h-[2.4em]">
              {text}
              <span className="ml-0.5 inline-block w-[3px] animate-pulse bg-cyan align-middle text-transparent">
                .
              </span>
            </span>
          </motion.h1>

          <motion.p
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-6 max-w-md font-serif text-[17px] italic leading-relaxed text-body"
          >
            Our products are sourced from verified suppliers and carefully
            packed to ensure consistency, purity, and reliability.
          </motion.p>

          <motion.div
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-9 flex flex-wrap gap-3.5"
          >
            <Button to="/shop" variant="primary" icon={<ArrowRight className="h-4 w-4" />}>
              Shop Products
            </Button>
            <Button
              onClick={() =>
                document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
              }
              variant="secondary"
            >
              Discover ALLUVI
            </Button>
          </motion.div>

          <motion.ul
            custom={4}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-9 flex flex-wrap gap-x-6 gap-y-2"
          >
            {['Verified Suppliers', 'Sealed & Protected', 'Uniform Standards'].map((f) => (
              <li key={f} className="flex items-center gap-2 text-[13px] text-dim">
                <Check className="h-3.5 w-3.5 text-cyan" />
                {f}
              </li>
            ))}
          </motion.ul>
        </div>

        {/* featured product card */}
        {featured && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 lg:justify-self-end"
          >
            <div className="w-full max-w-[340px] rounded-[26px] border border-white/12 bg-surface/95 p-4 shadow-[0_30px_80px_-22px_rgba(139,92,246,0.7)] backdrop-blur-2xl lg:animate-float">
              <span className="absolute -top-3 left-5 rounded-full bg-[linear-gradient(100deg,#22d3ee,#8b5cf6,#ec4899)] px-3 py-1 font-display text-[9px] font-bold uppercase tracking-[0.18em] text-bg">
                Featured Compound
              </span>
              <div className="overflow-hidden rounded-[18px] bg-bg-soft">
                <div className="aspect-[5/4]">
                  <Img
                    name={`products/${featured.slug}`}
                    alt={featured.name}
                    fit="cover"
                    tint={featured.tint}
                    fallback={featured.name}
                    loading="eager"
                  />
                </div>
              </div>
              <div className="px-2 pb-1 pt-4">
                <p className="font-display text-[10px] uppercase tracking-[0.16em] text-violet">
                  {featured.category}
                </p>
                <h3 className="mt-1 font-display text-lg font-semibold text-heading">
                  {featured.name}
                </h3>
                <div className="mt-1 flex items-center justify-between">
                  <span className="font-display text-sm font-semibold text-iris">
                    {featured.price}
                  </span>
                  <div className="flex gap-1.5">
                    {['Verified', 'Sealed'].map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-hairline px-2.5 py-1 text-[9px] uppercase tracking-[0.12em] text-dim"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <Link
                  to={`/product/${featured.slug}`}
                  className="mt-4 flex items-center justify-center gap-2 rounded-full border border-hairline py-3 font-display text-[10px] font-bold uppercase tracking-[0.16em] text-heading transition-all hover:border-violet/50 hover:bg-white/5"
                >
                  View Product <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </div>

      {/* scroll cue */}
      <div className="absolute bottom-7 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 md:flex">
        <span className="font-display text-[10px] uppercase tracking-[0.3em] text-dim">
          Scroll
        </span>
        <span className="h-10 w-[1px] bg-gradient-to-b from-cyan to-transparent">
          <span className="block h-2 w-[1px] animate-bob-cue bg-cyan" />
        </span>
      </div>
    </section>
  )
}
