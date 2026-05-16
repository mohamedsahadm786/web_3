import { cn } from '../lib/utils'

interface Props {
  label?: string
  tint?: [string, string]
  className?: string
  rounded?: string
}

// Sized fallback shown when an image slot has no real file yet.
export default function Placeholder({ label, tint, className, rounded }: Props) {
  const [a, b] = tint ?? ['#1b1e27', '#101218']
  return (
    <div
      className={cn(
        'relative flex h-full w-full items-center justify-center overflow-hidden',
        rounded,
        className,
      )}
      style={{ background: `linear-gradient(135deg, ${a}22, ${b}22)` }}
    >
      <div
        className="absolute inset-0 opacity-40"
        style={{ background: `radial-gradient(60% 60% at 30% 25%, ${a}33, transparent)` }}
      />
      <span className="relative z-10 px-3 text-center font-display text-[10px] uppercase tracking-[0.22em] text-dim">
        {label ?? 'ALLUVI'}
      </span>
    </div>
  )
}
