import { resolveImage, isVideo } from '../lib/images'
import { cn } from '../lib/utils'
import Placeholder from './Placeholder'

interface Props {
  /** "folder/name" without extension, e.g. "hero/home-hero-product-image" */
  name: string
  alt?: string
  fit?: 'cover' | 'contain'
  rounded?: string
  tint?: [string, string]
  fallback?: string
  className?: string
  loading?: 'lazy' | 'eager'
}

// Renders the real photo, a looping muted video, or a sized placeholder.
export default function Img({
  name,
  alt = '',
  fit = 'cover',
  rounded,
  tint,
  fallback,
  className,
  loading = 'lazy',
}: Props) {
  const url = resolveImage(name)

  if (!url) {
    return <Placeholder label={fallback} tint={tint} rounded={rounded} className={className} />
  }

  if (isVideo(url)) {
    return (
      <video
        className={cn('h-full w-full', fit === 'cover' ? 'object-cover' : 'object-contain', rounded, className)}
        src={url}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      />
    )
  }

  return (
    <img
      className={cn('h-full w-full', fit === 'cover' ? 'object-cover' : 'object-contain', rounded, className)}
      src={url}
      alt={alt}
      loading={loading}
      decoding="async"
    />
  )
}
