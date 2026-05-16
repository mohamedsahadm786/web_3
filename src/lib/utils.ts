export function cn(...parts: Array<string | false | null | undefined>): string {
  return parts.filter(Boolean).join(' ')
}

// Brand + contact details (ALLUVI). WhatsApp / email kept per project brief.
export const BRAND = {
  name: 'ALLUVI',
  tagline: 'Premium Research Formulations',
  address: 'Level 5, Dubai, UAE',
  email: 'sales@lumauae.com',
  phone: '+971 54 380 0625',
  whatsapp: 'https://wa.me/971543800625',
  whatsappNumber: '971543800625',
  social: {
    facebook: '#',
    instagram: '#',
  },
}

export function whatsappLink(message?: string): string {
  const base = `https://wa.me/${BRAND.whatsappNumber}`
  return message ? `${base}?text=${encodeURIComponent(message)}` : base
}

export function formatPrice(price: string | null): string {
  return price ?? 'Price on enquiry'
}
