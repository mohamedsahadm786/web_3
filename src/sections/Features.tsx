import Reveal from '../components/Reveal'
import Img from '../components/Img'
import Eyebrow from '../components/Eyebrow'
import SectionLabel from '../components/SectionLabel'
import { Box, Layers, Shield } from '../components/icons'
import type { ReactNode } from 'react'

interface Feature {
  icon: ReactNode
  title: string
  text: string
  image: string
  tint: [string, string]
}

const FEATURES: Feature[] = [
  {
    icon: <Shield className="h-5 w-5" />,
    title: 'Purity First',
    text: 'Each product is checked thoroughly to maintain clean, high-quality formulations you can rely on.',
    image: 'products/glow-70mg',
    tint: ['#ec4899', '#8b5cf6'],
  },
  {
    icon: <Layers className="h-5 w-5" />,
    title: 'Reliable Consistency',
    text: 'Our controlled processes ensure every unit is produced with uniform standards for a dependable experience.',
    image: 'products/retatrutide-40mg',
    tint: ['#6366f1', '#22d3ee'],
  },
  {
    icon: <Box className="h-5 w-5" />,
    title: 'Secure Packaging',
    text: 'Every product is sealed and protected to preserve freshness, stability, and overall product integrity.',
    image: 'products/bpc-157-tb-500-40mg',
    tint: ['#22d3ee', '#8b5cf6'],
  },
]

export default function Features() {
  return (
    <section className="relative overflow-hidden bg-bg py-24 md:py-32">
      <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2">
        <SectionLabel>THE STANDARD</SectionLabel>
      </div>

      <div className="shell relative">
        <div className="grid items-end gap-8 lg:grid-cols-[1.4fr_0.9fr]">
          <Reveal>
            <Eyebrow>The ALLUVI Standard</Eyebrow>
            <h2 className="mt-5 max-w-xl text-4xl font-bold tracking-tightest text-heading sm:text-5xl">
              Purity, consistency and care{' '}
              <span className="text-iris">built into every formulation</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="shine relative aspect-[5/3] overflow-hidden rounded-[22px] border border-hairline lg:aspect-auto lg:h-44">
              <Img name="extra/E_1" alt="" fit="cover" tint={['#8b5cf6', '#22d3ee']} fallback="ALLUVI" />
              <div className="absolute inset-0 bg-gradient-to-t from-bg/70 to-transparent" />
            </div>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {FEATURES.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.1}>
              <article className="group relative h-full min-h-[380px] overflow-hidden rounded-[22px] border border-hairline transition-all duration-500 ease-ease hover:-translate-y-1.5 hover:border-violet/35 hover:shadow-[0_30px_70px_-26px_rgba(139,92,246,0.6)]">
                <div className="absolute inset-0">
                  <div className="h-full w-full transition-transform duration-[900ms] ease-ease group-hover:scale-110">
                    <Img name={f.image} alt="" fit="cover" tint={f.tint} fallback={f.title} />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/75 to-bg/15" />
                </div>
                <div className="relative flex h-full min-h-[380px] flex-col justify-end p-6">
                  <span className="absolute right-6 top-6 font-display text-xs tracking-[0.2em] text-dim">
                    0{i + 1} / 03
                  </span>
                  <div className="grid h-11 w-11 place-items-center rounded-xl border border-hairline bg-white/5 text-cyan backdrop-blur">
                    {f.icon}
                  </div>
                  <h3 className="mt-5 font-display text-xl font-semibold text-heading">
                    {f.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-body">{f.text}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
