import type { ReactNode } from 'react'
import Reveal from '../components/Reveal'
import Eyebrow from '../components/Eyebrow'
import SectionLabel from '../components/SectionLabel'
import TiltCard from '../components/TiltCard'
import { Pulse, Shield, Spark, Whatsapp } from '../components/icons'

interface Item {
  icon: ReactNode
  title: string
  text: string
}

const ITEMS: Item[] = [
  {
    icon: <Pulse className="h-5 w-5" />,
    title: 'Consistent Results',
    text: 'Designed to keep your routine structured and support goal-focused progress.',
  },
  {
    icon: <Shield className="h-5 w-5" />,
    title: 'Verified Purity',
    text: 'Sourced from manufacturers that follow strict testing, handling, and documentation standards.',
  },
  {
    icon: <Spark className="h-5 w-5" />,
    title: 'Reliable Service',
    text: 'Every step is designed to provide a smooth, dependable customer experience.',
  },
  {
    icon: <Whatsapp className="h-5 w-5" />,
    title: 'Quick Support',
    text: 'Fast WhatsApp assistance for queries, updates, and product guidance.',
  },
]

export default function WhyUs() {
  return (
    <section
      id="why-us"
      className="relative overflow-hidden bg-bg-soft py-24 scroll-mt-20 md:py-32"
    >
      <div className="pointer-events-none absolute left-1/2 top-4 -translate-x-1/2">
        <SectionLabel>WHY ALLUVI</SectionLabel>
      </div>

      <div className="shell relative">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <Eyebrow className="mx-auto">Why Choose ALLUVI</Eyebrow>
            <h2 className="mt-5 text-3xl font-bold leading-[1.12] tracking-tightest text-heading sm:text-[2.6rem]">
              We deliver dependable, quality formulations with{' '}
              <span className="text-iris">careful handling</span> and supportive
              customer service.
            </h2>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {ITEMS.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.09}>
              <TiltCard className="group h-full">
                <div className="shine relative flex h-full min-h-[260px] flex-col rounded-[22px] border border-hairline bg-surface p-6 transition-all duration-500 ease-ease hover:border-violet/35 hover:shadow-[0_28px_64px_-26px_rgba(139,92,246,0.6)]">
                  <div className="grid h-12 w-12 place-items-center rounded-xl border border-hairline bg-[linear-gradient(135deg,rgba(34,211,238,0.14),rgba(236,72,153,0.14))] text-cyan">
                    {item.icon}
                  </div>
                  <span className="absolute right-6 top-6 font-display text-xs text-dim">
                    0{i + 1}
                  </span>
                  <h3 className="mt-6 font-display text-lg font-semibold text-heading">
                    {item.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-body">{item.text}</p>
                  <span className="mt-auto pt-5">
                    <span className="block h-px w-full bg-gradient-to-r from-violet/40 via-cyan/30 to-transparent" />
                  </span>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15}>
          <p className="mx-auto mt-16 max-w-3xl text-center font-serif text-2xl italic leading-relaxed text-body sm:text-3xl">
            “Built to be used intelligently, consistently, and with intent —
            tools that move research closer to its potential.”
          </p>
        </Reveal>
      </div>
    </section>
  )
}
