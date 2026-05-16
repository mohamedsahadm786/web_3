import { cn } from '../lib/utils'

interface Props {
  items: string[]
  reverse?: boolean
  className?: string
}

// Infinite horizontal marquee. The track is duplicated so the
// keyframe can translate -50% and loop seamlessly.
export default function Marquee({ items, reverse, className }: Props) {
  const track = (
    <div
      className={cn(
        'flex shrink-0 items-center gap-10 pr-10',
        reverse ? 'animate-marquee-rev' : 'animate-marquee',
      )}
    >
      {items.map((item, i) => (
        <span key={i} className="flex items-center gap-10">
          <span className="font-display text-sm font-medium uppercase tracking-[0.18em] text-body">
            {item}
          </span>
          <span className="h-1.5 w-1.5 rotate-45 bg-[linear-gradient(135deg,#22d3ee,#ec4899)]" />
        </span>
      ))}
    </div>
  )

  return (
    <div className={cn('flex w-full overflow-hidden', className)}>
      {track}
      {track}
    </div>
  )
}
