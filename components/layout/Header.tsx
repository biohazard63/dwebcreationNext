'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, Phone, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Logo } from '@/components/layout/Logo'
import { siteConfig } from '@/lib/site'
import { cn } from '@/lib/utils'

export function Header({ links }: { links: { name: string; href: string }[] }) {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  // Ferme le menu mobile à chaque changement de page
  useEffect(() => {
    setOpen(false)
  }, [pathname])

  // Bloque le défilement et permet de fermer avec Échap quand le menu est ouvert
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  return (
    <header className="sticky top-0 z-50 border-b border-line-dark/60 bg-ink text-paper-50">
      <nav className="container flex h-[4.5rem] items-center justify-between" aria-label="Navigation principale">
        <Logo />

        <ul className="hidden items-center gap-9 lg:flex">
          {links.map((item) => {
            const active = pathname === item.href
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={active ? 'page' : undefined}
                  className={cn(
                    'text-sm transition-colors hover:text-white',
                    active ? 'text-white' : 'text-stone-light'
                  )}
                >
                  {item.name}
                </Link>
              </li>
            )
          })}
        </ul>

        <div className="hidden items-center gap-6 lg:flex">
          <a
            href={siteConfig.phoneHref}
            className="flex items-center gap-2 text-sm text-stone-light transition-colors hover:text-white"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            {siteConfig.phone}
          </a>
          <Button asChild size="sm">
            <Link href="/contact">Devis gratuit</Link>
          </Button>
        </div>

        <button
          type="button"
          className="-mr-2 flex h-10 w-10 items-center justify-center rounded-full text-paper-50 hover:bg-white/10 lg:hidden"
          onClick={() => setOpen(true)}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          <Menu className="h-6 w-6" aria-hidden="true" />
          <span className="sr-only">Ouvrir le menu</span>
        </button>
      </nav>

      {open && (
        <div id="mobile-menu" role="dialog" aria-modal="true" aria-label="Menu" className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-ink/60" onClick={() => setOpen(false)} />
          <div className="absolute inset-y-0 right-0 flex w-full max-w-sm flex-col bg-ink px-6 py-5 text-paper-50">
            <div className="flex items-center justify-between">
              <Logo />
              <button
                type="button"
                className="-mr-2 flex h-10 w-10 items-center justify-center rounded-full hover:bg-white/10"
                onClick={() => setOpen(false)}
              >
                <X className="h-6 w-6" aria-hidden="true" />
                <span className="sr-only">Fermer le menu</span>
              </button>
            </div>
            <ul className="mt-12 space-y-1">
              {links.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="block py-3 font-display text-3xl"
                    aria-current={pathname === item.href ? 'page' : undefined}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-auto space-y-3 border-t border-line-dark pt-6">
              <Button asChild size="lg" className="w-full">
                <Link href="/contact">Demander un devis gratuit</Link>
              </Button>
              <Button asChild size="lg" variant="outline-light" className="w-full">
                <a href={siteConfig.phoneHref}>
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  {siteConfig.phone}
                </a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
