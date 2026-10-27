import Link from 'next/link'
import { Phone } from 'lucide-react'
import { siteConfig } from '@/lib/site'

// Barre d'action fixe sur mobile : appeler ou demander un devis en un geste
export function MobileContactBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-night/90 p-3 backdrop-blur lg:hidden">
      <div className="grid grid-cols-2 gap-3">
        <a
          href={siteConfig.phoneHref}
          className="flex h-12 items-center justify-center gap-2 rounded-full border border-white/25 text-sm font-medium text-white"
        >
          <Phone className="h-4 w-4" aria-hidden="true" />
          Appeler
        </a>
        <Link
          href="/contact"
          className="flex h-12 items-center justify-center rounded-full bg-gradient-to-r from-flame via-blush to-violet text-sm font-medium text-white"
        >
          Devis gratuit
        </Link>
      </div>
    </div>
  )
}
