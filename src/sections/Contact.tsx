import type { ReactNode } from 'react'
import Reveal from '../components/Reveal'
import Eyebrow from '../components/Eyebrow'
import Button from '../components/Button'
import { BRAND, whatsappLink } from '../lib/utils'
import { Globe, Pulse, Whatsapp } from '../components/icons'

interface Info {
  icon: ReactNode
  label: string
  value: string
  href?: string
}

const INFO: Info[] = [
  { icon: <Globe className="h-5 w-5" />, label: 'Visit', value: BRAND.address },
  {
    icon: <Pulse className="h-5 w-5" />,
    label: 'Email',
    value: BRAND.email,
    href: `mailto:${BRAND.email}`,
  },
  {
    icon: <Whatsapp className="h-5 w-5" />,
    label: 'Call / WhatsApp',
    value: BRAND.phone,
    href: `tel:${BRAND.phone}`,
  },
]

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-bg py-24 scroll-mt-20 md:py-32">
      <div
        aria-hidden
        className="absolute right-1/4 top-0 h-[28vw] w-[28vw] rounded-full bg-cyan/12 blur-[120px]"
      />
      <div className="shell relative grid items-center gap-14 lg:grid-cols-2">
        <div>
          <Reveal>
            <Eyebrow>Get in Touch</Eyebrow>
            <h2 className="mt-5 text-4xl font-bold tracking-tightest text-heading sm:text-5xl">
              Reach out — <span className="text-iris">we're here to help</span>
            </h2>
            <p className="mt-5 max-w-md leading-relaxed text-body">
              Reach out anytime for product details, order help, or personalised
              assistance — we're here to support you smoothly.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-8">
              <Button
                href={whatsappLink('Hello ALLUVI, I would like some assistance.')}
                variant="primary"
                icon={<Whatsapp className="h-4 w-4" />}
              >
                Chat With Us
              </Button>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <div className="space-y-4">
            {INFO.map((info) => {
              const inner = (
                <div className="glass shine flex items-center gap-5 rounded-2xl p-5 transition-all duration-500 hover:border-violet/35">
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl border border-hairline text-cyan">
                    {info.icon}
                  </div>
                  <div>
                    <p className="font-display text-[10px] uppercase tracking-[0.18em] text-dim">
                      {info.label}
                    </p>
                    <p className="mt-0.5 font-display text-base text-heading">{info.value}</p>
                  </div>
                </div>
              )
              return info.href ? (
                <a key={info.label} href={info.href} className="block">
                  {inner}
                </a>
              ) : (
                <div key={info.label}>{inner}</div>
              )
            })}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
