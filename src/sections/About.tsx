import Reveal from '../components/Reveal'
import Img from '../components/Img'
import Eyebrow from '../components/Eyebrow'
import SectionLabel from '../components/SectionLabel'
import Button from '../components/Button'
import { useCountUp } from '../hooks/useCountUp'
import { whatsappLink } from '../lib/utils'
import { Check, Whatsapp } from '../components/icons'

const CHECKS = ['Verified Suppliers', 'Sealed & Protected', 'Uniform Standards']

export default function About() {
  const { ref, value } = useCountUp(25)

  return (
    <section id="about" className="relative overflow-hidden bg-bg py-24 scroll-mt-20 md:py-32">
      <div className="pointer-events-none absolute left-0 top-6">
        <SectionLabel>ABOUT US</SectionLabel>
      </div>
      <div
        aria-hidden
        className="absolute right-[-8%] top-1/3 h-[34vw] w-[34vw] rounded-full bg-violet/12 blur-[120px]"
      />

      <div className="shell relative grid items-center gap-14 lg:grid-cols-2">
        {/* copy */}
        <div>
          <Reveal>
            <Eyebrow>Who We Are</Eyebrow>
            <h2 className="mt-5 text-4xl font-bold tracking-tightest text-heading sm:text-[2.9rem]">
              Advancing Modern Research with{' '}
              <span className="text-iris">Smarter Formulations</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 leading-relaxed text-body">
              ALLUVI is committed to advancing high-quality peptide and
              supplement research through clean, reliable, and precisely
              developed formulations. Our goal is simple — to provide
              controlled, consistent, and easy-to-use products designed for
              structured research applications.
            </p>
            <p className="mt-4 leading-relaxed text-body">
              Every formulation is created with a strong focus on purity,
              consistency, and safe handling practices, giving you the
              confidence to work with products that meet strict quality
              standards.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <ul className="mt-7 flex flex-wrap gap-x-7 gap-y-3">
              {CHECKS.map((c) => (
                <li key={c} className="flex items-center gap-2 text-sm text-heading">
                  <span className="grid h-5 w-5 place-items-center rounded-full bg-cyan/15 text-cyan">
                    <Check className="h-3 w-3" />
                  </span>
                  {c}
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Button
                href={whatsappLink('Hello ALLUVI, I would like to know more about you.')}
                variant="secondary"
                icon={<Whatsapp className="h-4 w-4" />}
              >
                Talk to Our Team
              </Button>
            </div>
          </Reveal>
        </div>

        {/* media */}
        <Reveal delay={0.15}>
          <div className="relative">
            <div className="shine relative aspect-[4/5] overflow-hidden rounded-[26px] border border-hairline">
              <Img
                name="about/home-about-stat-image"
                alt="ALLUVI research"
                fit="cover"
                tint={['#8b5cf6', '#22d3ee']}
                fallback="ALLUVI Research"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg/70 to-transparent" />
            </div>

            {/* secondary tile */}
            <div className="absolute -right-4 -top-6 hidden h-32 w-40 overflow-hidden rounded-2xl border border-hairline sm:block">
              <Img
                name="about/home-about-small-image"
                alt=""
                fit="cover"
                tint={['#22d3ee', '#ec4899']}
                fallback="ALLUVI"
              />
            </div>

            {/* stat card */}
            <div
              ref={ref}
              className="glass absolute -bottom-7 -left-4 rounded-2xl px-7 py-5 shadow-[0_24px_60px_-24px_rgba(34,211,238,0.55)] sm:-left-7"
            >
              <span className="font-display text-5xl font-bold tracking-tight text-iris">
                {value}+
              </span>
              <p className="mt-1 max-w-[160px] text-xs leading-snug text-body">
                High-Purity Research Peptides
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
