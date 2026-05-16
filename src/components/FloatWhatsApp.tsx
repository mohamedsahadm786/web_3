import { whatsappLink } from '../lib/utils'
import { Whatsapp } from './icons'

// Persistent WhatsApp quick-contact button, pinned bottom-right.
export default function FloatWhatsApp() {
  return (
    <a
      href={whatsappLink('Hello ALLUVI, I have a question.')}
      target="_blank"
      rel="noreferrer"
      aria-label="Contact us on WhatsApp"
      className="group fixed bottom-5 right-5 z-[130] flex items-center gap-0 overflow-hidden rounded-full bg-[#25D366] pl-3.5 pr-3.5 py-3.5 text-bg shadow-[0_12px_36px_-8px_rgba(37,211,102,0.7)] transition-all duration-500 ease-ease hover:pr-5"
    >
      <Whatsapp className="h-6 w-6" />
      <span className="max-w-0 overflow-hidden whitespace-nowrap font-display text-[11px] font-bold uppercase tracking-[0.14em] transition-all duration-500 ease-ease group-hover:ml-2 group-hover:max-w-[140px]">
        Chat with us
      </span>
    </a>
  )
}
