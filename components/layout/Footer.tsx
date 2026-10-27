import Link from 'next/link'
import { Logo } from '@/components/layout/Logo'
import { siteConfig } from '@/lib/site'
import { offers } from '@/lib/data/offers'

export function Footer({ links }: { links: { name: string; href: string }[] }) {
  return (
    <footer className="border-t border-white/10 bg-night pb-28 pt-20 text-white lg:pb-12">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr_1.2fr]">
          <div>
            <Logo />
            <p className="mt-6 max-w-sm leading-relaxed text-mist">
              Développeur web indépendant à {siteConfig.city}. Des sites internet clairs et efficaces
              pour les artisans, commerçants et indépendants.
            </p>
          </div>

          <div>
            <h2 className="text-sm font-medium text-white">Services</h2>
            <ul className="mt-5 space-y-3 text-sm">
              {offers.map((offer) => (
                <li key={offer.id}>
                  <Link href={`/services#${offer.id}`} className="text-mist transition-colors hover:text-white">
                    {offer.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-medium text-white">Navigation</h2>
            <ul className="mt-5 space-y-3 text-sm">
              {links.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-mist transition-colors hover:text-white">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-medium text-white">Contact</h2>
            <ul className="mt-5 space-y-3 text-sm text-mist">
              <li>
                <a href={siteConfig.phoneHref} className="transition-colors hover:text-white">
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${siteConfig.email}`} className="break-all transition-colors hover:text-white">
                  {siteConfig.email}
                </a>
              </li>
              <li>{siteConfig.city}, {siteConfig.region}</li>
              <li>{siteConfig.hours}</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-6 border-t border-white/10 pt-8 text-sm text-mist md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} {siteConfig.name}</p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {siteConfig.social.map((item) => (
              <li key={item.name}>
                <a href={item.href} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-white">
                  {item.name}
                </a>
              </li>
            ))}
            <li>
              <Link href="/mentions-legales" className="transition-colors hover:text-white">
                Mentions légales
              </Link>
            </li>
            <li>
              <Link href="/confidentialite" className="transition-colors hover:text-white">
                Confidentialité
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
