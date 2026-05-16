import Reveal from '../components/Reveal'
import Img from '../components/Img'
import Eyebrow from '../components/Eyebrow'
import Button from '../components/Button'
import { ArrowRight } from '../components/icons'

export default function Evolution() {
  return (
    <section className="relative overflow-hidden bg-bg py-24 md:py-32">
      <div
        aria-hidden
        className="absolute left-1/4 top-0 h-[30vw] w-[30vw] rounded-full bg-magenta/12 blur-[120px]"
      />
      <div className="shell relative grid items-center gap-14 lg:grid-cols-2">
        {/* media */}
        <Reveal>
          <div className="relative">
            <div className="shine relative aspect-[4/3] overflow-hidden rounded-[26px] border border-hairline">
              <Img
                name="extra/E_3"
                alt="ALLUVI formulations"
                fit="cover"
                tint={['#22d3ee', '#8b5cf6']}
                fallback="ALLUVI"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-bg/60 to-transparent" />
            </div>
            <div className="glass absolute -bottom-6 right-6 rounded-2xl px-6 py-4">
              <p className="font-display text-3xl font-bold text-iris">100%</p>
              <p className="text-xs text-body">Sealed &amp; verified</p>
            </div>
          </div>
        </Reveal>

        {/* copy */}
        <div>
          <Reveal>
            <Eyebrow>Our Direction</Eyebrow>
            <h2 className="mt-5 text-4xl font-bold tracking-tightest text-heading sm:text-5xl">
              Built for what research{' '}
              <span className="text-iris">needs next</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 leading-relaxed text-body">
              Research moves fast. ALLUVI keeps pace with reliable sourcing,
              transparent positioning, and a relentless focus on formulation
              quality — so every product stays consistent as we grow.
            </p>
            <p className="mt-4 leading-relaxed text-body">
              We're committed to clean, easy-to-use formulations and a customer
              experience that stays smooth, supportive, and dependable at every
              step of the way.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-8">
              <Button to="/shop" variant="primary" icon={<ArrowRight className="h-4 w-4" />}>
                Explore the Catalogue
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
