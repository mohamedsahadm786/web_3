import type { ReactNode } from 'react'
import Reveal from '../components/Reveal'
import Eyebrow from '../components/Eyebrow'
import { Box, Layers, Shield, Whatsapp } from '../components/icons'

interface Tile {
  icon: ReactNode
  title: string
  text: string
}

const TILES: Tile[] = [
  {
    icon: <Layers className="h-5 w-5" />,
    title: 'Independent Sourcing',
    text: 'We work only with verified, established suppliers.',
  },
  {
    icon: <Shield className="h-5 w-5" />,
    title: 'Quality Oversight',
    text: 'Each product is checked thoroughly for clean formulations.',
  },
  {
    icon: <Box className="h-5 w-5" />,
    title: 'Secure Handling',
    text: 'Sealed and protected to preserve freshness and integrity.',
  },
  {
    icon: <Whatsapp className="h-5 w-5" />,
    title: 'Customer Focused',
    text: 'Fast, responsive WhatsApp support at every step.',
  },
]

export default function Standards() {
  return (
    <section className="relative overflow-hidden bg-bg-soft py-24 md:py-32">
      <div className="shell">
        <div className="grid items-end gap-8 md:grid-cols-[1.3fr_1fr]">
          <Reveal>
            <Eyebrow>Standards First</Eyebrow>
            <h2 className="mt-5 text-4xl font-bold tracking-tightest text-heading sm:text-5xl">
              A framework built on{' '}
              <span className="text-iris">structured oversight</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="leading-relaxed text-body md:text-right">
              From independent supplier evaluation to sealed, protected
              packaging — every step supports stable, research-focused supply.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {TILES.map((t, i) => (
            <Reveal key={t.title} delay={i * 0.08}>
              <div className="shine group relative h-full overflow-hidden rounded-[20px] border border-hairline bg-bg p-6 transition-all duration-500 ease-ease hover:-translate-y-1 hover:border-cyan/35 hover:shadow-[0_24px_56px_-24px_rgba(34,211,238,0.5)]">
                <div className="grid h-12 w-12 place-items-center rounded-xl border border-hairline text-violet transition-colors group-hover:text-cyan">
                  {t.icon}
                </div>
                <h3 className="mt-5 font-display text-base font-semibold text-heading">
                  {t.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-body">{t.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
