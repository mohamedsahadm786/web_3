import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { cn } from '../lib/utils'

type Variant = 'primary' | 'secondary' | 'ghost'

interface BaseProps {
  children: ReactNode
  variant?: Variant
  icon?: ReactNode
  className?: string
  full?: boolean
}

interface AsLink extends BaseProps {
  to: string
  href?: never
  onClick?: never
}
interface AsAnchor extends BaseProps {
  href: string
  to?: never
  onClick?: never
}
interface AsButton extends BaseProps {
  onClick: () => void
  to?: never
  href?: never
}

type Props = AsLink | AsAnchor | AsButton

const base =
  'group relative inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 font-display text-[11px] font-bold uppercase tracking-[0.16em] transition-all duration-500 ease-ease will-change-transform'

const variants: Record<Variant, string> = {
  primary:
    'text-bg shadow-[0_10px_40px_-8px_rgba(139,92,246,0.65)] hover:shadow-[0_14px_50px_-6px_rgba(34,211,238,0.7)] hover:-translate-y-0.5',
  secondary:
    'glass text-heading hover:border-violet/50 hover:-translate-y-0.5 hover:shadow-[0_10px_36px_-12px_rgba(139,92,246,0.5)]',
  ghost: 'text-dim hover:text-heading',
}

export default function Button(props: Props) {
  const { children, variant = 'primary', icon, className, full } = props

  const content = (
    <>
      {variant === 'primary' && (
        <span
          aria-hidden
          className="absolute inset-0 rounded-full bg-[linear-gradient(100deg,#22d3ee,#8b5cf6,#ec4899)] bg-[length:200%_auto] transition-[background-position] duration-700 group-hover:bg-[position:100%_0]"
        />
      )}
      <span className="relative z-10 flex items-center gap-2">
        {icon}
        {children}
      </span>
    </>
  )

  const cls = cn(base, variants[variant], full && 'w-full', 'shine', className)

  if ('to' in props && props.to) {
    return (
      <Link to={props.to} className={cls}>
        {content}
      </Link>
    )
  }
  if ('href' in props && props.href) {
    return (
      <a href={props.href} target="_blank" rel="noreferrer" className={cls}>
        {content}
      </a>
    )
  }
  return (
    <button type="button" onClick={props.onClick} className={cls}>
      {content}
    </button>
  )
}
