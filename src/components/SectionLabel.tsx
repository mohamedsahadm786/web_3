import { cn } from '../lib/utils'

interface Props {
  children: string
  dark?: boolean
  className?: string
}

// Oversized faint outlined label that sits behind a section heading.
export default function SectionLabel({ children, dark, className }: Props) {
  return (
    <div
      aria-hidden
      className={cn(
        'ghost-label select-none whitespace-nowrap font-display text-[16vw] leading-none md:text-[12vw] lg:text-[150px]',
        dark && 'ghost-label-dark',
        className,
      )}
    >
      {children}
    </div>
  )
}
