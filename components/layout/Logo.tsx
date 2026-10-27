import Link from 'next/link'
import { siteConfig } from '@/lib/site'

export function Logo() {
  return (
    <Link href="/" className="group flex items-center gap-3" aria-label={`${siteConfig.name} — Accueil`}>
      <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-flame via-blush to-violet font-grotesk text-lg font-bold text-white transition-transform group-hover:rotate-6">
        D
      </span>
      <span className="font-grotesk text-lg font-semibold tracking-tight">{siteConfig.name}</span>
    </Link>
  )
}
