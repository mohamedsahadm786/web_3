// Eagerly import every file under src/images/** and key it by
// "<folder>/<name>" (no extension, lower-cased). Drop a correctly
// named file into src/images/<folder>/ and it resolves automatically.

const files = import.meta.glob(
  '../images/**/*.{png,jpg,jpeg,webp,avif,svg,gif,mp4,webm,mov}',
  { eager: true, query: '?url', import: 'default' },
) as Record<string, string>

const map: Record<string, string> = {}
for (const path in files) {
  const m = path.match(/\.\.\/images\/(.+)\.[^.]+$/)
  if (m) map[m[1].toLowerCase()] = files[path]
}

export function resolveImage(name: string): string | undefined {
  return map[name.trim().toLowerCase()]
}

export function isVideo(url: string): boolean {
  return /\.(mp4|webm|mov)(\?|#|$)/i.test(url)
}
