import Reveal from '../components/Reveal'
import Eyebrow from '../components/Eyebrow'
import Button from '../components/Button'
import { whatsappLink } from '../lib/utils'
import { ArrowRight, Whatsapp } from '../components/icons'

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-bg-soft py-24 md:py-32">
      {/* glow field */}
      <div
        aria-hidden
        className="absolute left-1/2 top-1/2 h-[44vw] w-[80vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(139,92,246,0.22),transparent)]"
      />
      <div className="rule-iris absolute inset-x-0 top-0" />

      <div className="shell relative">
        <div className="glass mx-auto max-w-3xl rounded-[32px] p-10 text-center md:p-16">
          <Reveal>
            <Eyebrow className="mx-auto">Here to Guide You</Eyebrow>
            <h2 className="mt-6 text-4xl font-bold leading-[1.08] tracking-tightest sm:text-6xl">
              <span className="text-heading">Let's Talk To</span>
              <br />
              <span className="text-dim">Get Instant Help</span>
            </h2>
            <p className="mx-auto mt-5 max-w-md text-body">
              Transparent communication, every step of the way.
            </p>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="mt-9 flex flex-wrap justify-center gap-3.5">
              <Button
                href={whatsappLink('Hello ALLUVI, I would like some help.')}
                variant="primary"
                icon={<Whatsapp className="h-4 w-4" />}
              >
                Chat on WhatsApp
              </Button>
              <Button to="/shop" variant="secondary" icon={<ArrowRight className="h-4 w-4" />}>
                Shop Products
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
