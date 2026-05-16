import Reveal from '../components/Reveal'
import Marquee from '../components/Marquee'
import { ChevronDown } from '../components/icons'

const PHRASES = [
  'Premium Research Formulations',
  'Fast WhatsApp Support',
  'Trusted by Thousands',
  'Customer-Focused Service',
  'Easy WhatsApp Ordering',
  'Precision in Every Product',
]

const GIANT = ['RESEARCH', 'RESEARCH', 'RESEARCH', 'RESEARCH']

export default function MarqueeSection() {
  return (
    <section className="relative overflow-hidden bg-[#05131b] py-24 md:py-32">
      {/* glow */}
      <div
        aria-hidden
        className="absolute left-1/2 top-1/2 h-[40vw] w-[70vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan/10 blur-[130px]"
      />

      {/* outlined giant marquee */}
      <div className="relative flex select-none overflow-hidden">
        <div className="flex shrink-0 animate-marquee items-center gap-12 pr-12">
          {[...GIANT, ...GIANT].map((w, i) => (
            <span
              key={i}
              className="ghost-label font-display text-[15vw] leading-none"
              style={{ WebkitTextStroke: '1px rgba(34,211,238,0.22)' }}
            >
              {w}
            </span>
          ))}
        </div>
      </div>

      {/* solid word + intro */}
      <div className="shell relative -mt-[7vw] text-center">
        <Reveal>
          <h2 className="text-iris text-iris-anim text-[19vw] font-bold leading-none tracking-tightest md:text-[13vw]">
            Peptides
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-body">
            Browse our current selection of research formulations. Every product
            is sourced from verified suppliers, sealed for stability, and packed
            with precision — so you can work with confidence.
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <button
            onClick={() =>
              document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })
            }
            aria-label="Jump to products"
            className="group mx-auto mt-9 grid h-16 w-16 place-items-center rounded-full border border-hairline bg-white/[0.03] text-cyan transition-all duration-500 hover:border-cyan/50 hover:bg-cyan/5"
          >
            <ChevronDown className="h-5 w-5 transition-transform duration-500 group-hover:translate-y-1" />
          </button>
        </Reveal>
      </div>

      {/* phrase ticker */}
      <div className="relative mt-20 border-y border-hairline py-5">
        <Marquee items={PHRASES} />
      </div>
    </section>
  )
}
