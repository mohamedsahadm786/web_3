export interface Product {
  slug: string
  name: string
  /** AED price string, or null = "enquire" */
  price: string | null
  category: string
  /** placeholder gradient stops, used behind missing images */
  tint: [string, string]
  blurb: string
}

// Catalogue — 8 ALLUVI research formulations. The `slug` drives the URL
// (/product/<slug>) AND the image file names in src/images/products/.
export const products: Product[] = [
  {
    slug: 'bpc-157-tb-500-40mg',
    name: 'BPC-157 & TB-500 40mg',
    price: 'د.إ 999.00',
    category: 'Recovery',
    tint: ['#22d3ee', '#6366f1'],
    blurb:
      'A dual research blend prepared under controlled conditions for consistent, reliable handling. Sourced from verified suppliers and carefully packed to ensure consistency, purity, and reliability.',
  },
  {
    slug: 'nad-1000mg',
    name: 'NAD+ 1,000mg',
    price: null,
    category: 'Cellular',
    tint: ['#8b5cf6', '#22d3ee'],
    blurb:
      'NAD+ (Nicotinamide Adenine Dinucleotide) research formulation for laboratory analysis and in vitro studies only. Provided exclusively for controlled laboratory R&D applications.',
  },
  {
    slug: 'glow-70mg',
    name: 'Glow 70mg',
    price: 'د.إ 1,199.00',
    category: 'Skin',
    tint: ['#ec4899', '#8b5cf6'],
    blurb:
      'A higher-capacity formulation packed securely to preserve freshness and stability. Sourced from verified suppliers and carefully packed to ensure consistency, purity, and reliability.',
  },
  {
    slug: 'retatrutide-20mg',
    name: 'Retatrutide 20mg',
    price: null,
    category: 'Metabolic',
    tint: ['#22d3ee', '#8b5cf6'],
    blurb:
      'Developed with a strong focus on purity, consistency, and safe handling practices. Sourced from verified suppliers and carefully packed to ensure consistency, purity, and reliability.',
  },
  {
    slug: 'retatrutide-40mg',
    name: 'Retatrutide 40mg',
    price: 'د.إ 1,990.00',
    category: 'Metabolic',
    tint: ['#6366f1', '#ec4899'],
    blurb:
      'A research formulation produced with uniform standards for a dependable experience. Sourced from verified suppliers and carefully packed to ensure consistency, purity, and reliability.',
  },
  {
    slug: 'tirzepatide-20mg',
    name: 'Tirzepatide 20mg',
    price: null,
    category: 'Metabolic',
    tint: ['#8b5cf6', '#ec4899'],
    blurb:
      'Checked thoroughly to maintain clean, high-quality formulations you can rely on. Sourced from verified suppliers and carefully packed to ensure consistency, purity, and reliability.',
  },
  {
    slug: 'tirzepatide-40mg',
    name: 'Tirzepatide 40mg',
    price: null,
    category: 'Metabolic',
    tint: ['#22d3ee', '#ec4899'],
    blurb:
      'Sealed and protected to preserve overall product integrity through delivery. Sourced from verified suppliers and carefully packed to ensure consistency, purity, and reliability.',
  },
  {
    slug: 'tirzepatide-5mg',
    name: 'Tirzepatide 5mg',
    price: null,
    category: 'Metabolic',
    tint: ['#6366f1', '#22d3ee'],
    blurb:
      'A starter-scale formulation sourced from verified suppliers and carefully packed to ensure consistency, purity, and reliability.',
  },
]

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug)
}

export function relatedProducts(slug: string, count = 4): Product[] {
  return products.filter((p) => p.slug !== slug).slice(0, count)
}
