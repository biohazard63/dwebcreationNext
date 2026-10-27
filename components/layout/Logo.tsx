import Link from 'next/link'
import { siteConfig } from '@/lib/site'

export function Logo() {
  return (
    <Link href="/" className="group flex items-center gap-3" aria-label={`${siteConfig.name} — Accueil`}>
      <span className="flex h-9 w-9 items-center justify-center rounded-full border border-copper-light/60 font-display text-lg text-copper-light transition-colors group-hover:bg-copper-light group-hover:text-ink">
        D
      </span>
      <span className="font-display text-xl tracking-tight">{siteConfig.name}</span>
    </Link>
  )
}
