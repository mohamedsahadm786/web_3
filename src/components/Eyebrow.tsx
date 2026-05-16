import { cn } from '../lib/utils'

interface Props {
  children: string
  className?: string
  tone?: 'light' | 'dark'
}

// Pill eyebrow with a pulsing accent dot.
export default function Eyebrow({ children, className, tone = 'light' }: Props) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-2.5 rounded-full border px-4 py-1.5 font-display text-[11px] font-medium uppercase tracking-[0.18em]',
        tone === 'light'
          ? 'border-hairline bg-white/[0.03] text-body'
          : 'border-bg/10 bg-bg/[0.04] text-bg/70',
        className,
      )}
    >
      <span className="relative flex h-1.5 w-1.5">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan opacity-70" />
        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-cyan" />
      </span>
      {children}
    </span>
  )
}
