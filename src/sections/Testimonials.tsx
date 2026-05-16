import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import Reveal from '../components/Reveal'
import Img from '../components/Img'
import Eyebrow from '../components/Eyebrow'
import SectionLabel from '../components/SectionLabel'
import { ArrowRight, Star } from '../components/icons'

interface Review {
  name: string
  role: string
  avatar: string
  quote: string
}

const REVIEWS: Review[] = [
  {
    name: 'Michael Reed',
    role: 'Research Assistant',
    avatar: 'testimonials/home-testimonial-michael-reed',
    quote:
      'Consistent products, clear guidance, and quick replies made the whole process simple and genuinely reassuring from start to finish.',
  },
  {
    name: 'Emily Carter',
    role: 'Wellness Consultant',
    avatar: 'testimonials/home-testimonial-emily-carter',
    quote:
      'Fast support and reliable formulations every time — ordering with ALLUVI has been smooth, dependable, and refreshingly straightforward.',
  },
  {
    name: 'Sofia Bennett',
    role: 'Fitness Coordinator',
    avatar: 'testimonials/home-testimonial-sofia-bennett',
    quote:
      'Everything arrived securely sealed, communication was excellent, and the overall service felt exactly like a premium brand should.',
  },
]

export default function Testimonials() {
  const [index, setIndex] = useState(0)
  const review = REVIEWS[index]

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % REVIEWS.length), 6500)
    return () => clearInterval(t)
  }, [])

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-bg-soft py-24 scroll-mt-20 md:py-32"
    >
      <div className="pointer-events-none absolute left-1/2 top-4 -translate-x-1/2">
        <SectionLabel>VOICES</SectionLabel>
      </div>
      <div
        aria-hidden
        className="absolute left-1/2 top-1/2 h-[30vw] w-[60vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet/10 blur-[130px]"
      />

      <div className="shell relative">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <Eyebrow className="mx-auto">Trusted by Thousands</Eyebrow>
            <h2 className="mt-5 text-4xl font-bold tracking-tightest text-heading sm:text-5xl">
              What Our <span className="text-iris">Customers Say</span>
            </h2>
            <p className="mt-4 text-body">
              Trusted feedback from people who choose ALLUVI for purity and
              precision every time.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.12}>
          <div className="relative mx-auto mt-12 max-w-3xl">
            <div className="glass min-h-[320px] rounded-[28px] p-8 md:min-h-[280px] md:p-12">
              <AnimatePresence mode="wait">
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -24 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="flex gap-1 text-cyan">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-4 w-4" />
                    ))}
                  </div>
                  <p className="mt-5 font-serif text-xl italic leading-relaxed text-heading md:text-2xl">
                    “{review.quote}”
                  </p>
                  <div className="mt-7 flex items-center gap-4">
                    <div className="h-14 w-14 overflow-hidden rounded-full border border-hairline">
                      <Img
                        name={review.avatar}
                        alt={review.name}
                        fit="cover"
                        tint={['#8b5cf6', '#22d3ee']}
                        fallback={review.name}
                      />
                    </div>
                    <div>
                      <p className="font-display font-semibold text-heading">{review.name}</p>
                      <p className="text-sm text-dim">{review.role}</p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* controls */}
            <div className="mt-7 flex items-center justify-center gap-4">
              <button
                onClick={() => setIndex((i) => (i - 1 + REVIEWS.length) % REVIEWS.length)}
                aria-label="Previous review"
                className="grid h-11 w-11 place-items-center rounded-full border border-hairline text-body transition-all hover:border-violet/50 hover:text-heading"
              >
                <ArrowRight className="h-4 w-4 rotate-180" />
              </button>
              <div className="flex gap-2">
                {REVIEWS.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setIndex(i)}
                    aria-label={`Review ${i + 1}`}
                    className={
                      'h-1.5 rounded-full transition-all duration-300 ' +
                      (i === index ? 'w-7 bg-[linear-gradient(90deg,#22d3ee,#ec4899)]' : 'w-1.5 bg-white/20')
                    }
                  />
                ))}
              </div>
              <button
                onClick={() => setIndex((i) => (i + 1) % REVIEWS.length)}
                aria-label="Next review"
                className="grid h-11 w-11 place-items-center rounded-full border border-hairline text-body transition-all hover:border-violet/50 hover:text-heading"
              >
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
