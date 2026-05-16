import Reveal from '../components/Reveal'
import Img from '../components/Img'
import Eyebrow from '../components/Eyebrow'
import { Check } from '../components/icons'

const FOCUS = ['Transparency', 'Documentation', 'Consistency', 'Responsible Handling']

export default function Clarity() {
  return (
    <section className="relative overflow-hidden bg-bg py-24 md:py-32">
      {/* background render */}
      <div className="absolute inset-0">
        <Img name="extra/E_2" alt="" fit="cover" tint={['#8b5cf6', '#22d3ee']} fallback="ALLUVI" className="opacity-25" />
        <div className="absolute inset-0 bg-[radial-gradient(100%_100%_at_70%_50%,transparent,#0A0B0F_78%)]" />
      </div>

      {/* watermark */}
      <span
        aria-hidden
        className="pointer-events-none absolute right-[-4%] top-1/2 -translate-y-1/2 select-none font-display text-[20vw] font-bold leading-none tracking-tightest text-white/[0.035]"
      >
        ALLUVI
      </span>

      <div className="shell relative">
        <Reveal>
          <div className="glass max-w-xl rounded-[28px] p-8 md:p-10">
            <Eyebrow>Clarity in Sourcing</Eyebrow>
            <h2 className="mt-5 text-3xl font-bold tracking-tightest text-heading sm:text-4xl">
              Simplifying procurement for{' '}
              <span className="text-iris">modern research</span>
            </h2>
            <p className="mt-5 leading-relaxed text-body">
              ALLUVI exists to simplify sourcing for laboratories and
              independent researchers who need consistent, high-quality peptide
              formulations — developed with a strong focus on purity and safe
              handling practices.
            </p>
            <div className="mt-7">
              <p className="font-display text-[11px] uppercase tracking-[0.18em] text-violet">
                We focus on
              </p>
              <ul className="mt-3 grid grid-cols-2 gap-3">
                {FOCUS.map((f) => (
                  <li key={f} className="flex items-center gap-2.5 text-sm text-heading">
                    <span className="grid h-5 w-5 place-items-center rounded-full bg-cyan/15 text-cyan">
                      <Check className="h-3 w-3" />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
            <p className="mt-7 font-serif text-lg italic text-body">
              Nothing overstated — just dependable formulations, packed with
              precision.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
