import type { SVGProps } from 'react'

type P = SVGProps<SVGSVGElement>
const svg = (props: P, path: React.ReactNode, viewBox = '0 0 24 24') => (
  <svg
    viewBox={viewBox}
    fill="none"
    stroke="currentColor"
    strokeWidth={1.6}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    {path}
  </svg>
)

export const ArrowRight = (p: P) => svg(p, <><path d="M5 12h14" /><path d="m13 5 7 7-7 7" /></>)
export const ArrowUpRight = (p: P) => svg(p, <><path d="M7 17 17 7" /><path d="M7 7h10v10" /></>)
export const Cart = (p: P) =>
  svg(p, <><path d="M3 4h2l2.4 12.3a1 1 0 0 0 1 .7h8.7a1 1 0 0 0 1-.8L21 8H6" /><circle cx="9" cy="20" r="1.4" /><circle cx="17" cy="20" r="1.4" /></>)
export const Search = (p: P) => svg(p, <><circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" /></>)
export const User = (p: P) => svg(p, <><circle cx="12" cy="8" r="4" /><path d="M4 21c0-4 3.6-6 8-6s8 2 8 6" /></>)
export const Menu = (p: P) => svg(p, <><path d="M3 6h18" /><path d="M3 12h18" /><path d="M3 18h18" /></>)
export const Close = (p: P) => svg(p, <><path d="M6 6 18 18" /><path d="M18 6 6 18" /></>)
export const Check = (p: P) => svg(p, <path d="m4 12 5 5L20 6" />)
export const Plus = (p: P) => svg(p, <><path d="M12 5v14" /><path d="M5 12h14" /></>)
export const Minus = (p: P) => svg(p, <path d="M5 12h14" />)
export const Heart = (p: P) =>
  svg(p, <path d="M12 20s-7-4.3-9.2-9C1.3 7.7 3.3 4.5 6.7 4.5c2 0 3.6 1.2 4.3 2.7.7-1.5 2.3-2.7 4.3-2.7 3.4 0 5.4 3.2 3.9 6.5C19 15.7 12 20 12 20Z" />)
export const Star = (p: P) =>
  svg({ ...p, fill: 'currentColor', stroke: 'none' }, <path d="m12 2 2.9 6.3 6.9.7-5.1 4.6 1.4 6.8L12 17.8 6 20.4l1.4-6.8L2.3 9l6.9-.7Z" />)
export const Shield = (p: P) =>
  svg(p, <><path d="M12 3 5 6v6c0 4.5 3 8 7 9 4-1 7-4.5 7-9V6Z" /><path d="m9 12 2 2 4-4" /></>)
export const Layers = (p: P) =>
  svg(p, <><path d="m12 3 9 5-9 5-9-5Z" /><path d="m3 13 9 5 9-5" /></>)
export const Spark = (p: P) =>
  svg(p, <path d="M12 3v6m0 6v6m9-9h-6M9 12H3m13.5-6.5-4 4m-3 3-4 4m11 0-4-4m-3-3-4-4" />)
export const Pulse = (p: P) =>
  svg(p, <path d="M3 12h4l2.5-7 5 14L17 12h4" />)
export const Globe = (p: P) =>
  svg(p, <><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c2.5 2.6 3.8 5.7 3.8 9S14.5 18.4 12 21c-2.5-2.6-3.8-5.7-3.8-9S9.5 5.6 12 3Z" /></>)
export const Lock = (p: P) =>
  svg(p, <><rect x="5" y="11" width="14" height="9" rx="2" /><path d="M8 11V8a4 4 0 0 1 8 0v3" /></>)
export const Box = (p: P) =>
  svg(p, <><path d="M12 3 4 7v10l8 4 8-4V7Z" /><path d="m4 7 8 4 8-4M12 11v10" /></>)
export const ChevronDown = (p: P) => svg(p, <path d="m6 9 6 6 6-6" />)
export const Whatsapp = (p: P) =>
  svg(
    { ...p, fill: 'currentColor', stroke: 'none' },
    <path d="M12 2a10 10 0 0 0-8.5 15.2L2 22l4.9-1.3A10 10 0 1 0 12 2Zm5.3 14.1c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .1-1.7-.1-.4-.1-.9-.3-1.6-.6-2.8-1.2-4.6-4-4.7-4.2-.2-.2-1.2-1.5-1.2-2.9 0-1.3.7-2 1-2.3.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.8 1.9c.1.2.1.4 0 .5l-.4.6c-.2.2-.3.4-.1.7.2.3.9 1.5 2 2.4 1.3 1.2 2.4 1.5 2.7 1.7.3.1.5.1.7-.1l.9-1c.2-.3.4-.2.7-.1l1.9.9c.3.2.5.2.6.4.1.1.1.7-.1 1.3Z" />,
  )
export const Facebook = (p: P) =>
  svg(
    { ...p, fill: 'currentColor', stroke: 'none' },
    <path d="M13.5 21v-8h2.7l.4-3.1h-3.1V7.9c0-.9.3-1.5 1.6-1.5h1.7V3.6c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.1H7.5V13h2.3v8Z" />,
  )
export const Instagram = (p: P) =>
  svg(p, <><rect x="3.5" y="3.5" width="17" height="17" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17" cy="7" r="1" fill="currentColor" stroke="none" /></>)
