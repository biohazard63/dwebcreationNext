import Link from 'next/link'
import { ArrowRight, Check, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { siteConfig } from '@/lib/site'

const promises = ['Devis gratuit et sans engagement', siteConfig.responseTime, `Basé à ${siteConfig.city}`]

const included = [
  'Design sur mesure, à votre image',
  'Parfaitement lisible sur mobile',
  'Optimisé pour Google et la recherche locale',
  'Formulaire de devis et appel en un clic',
  'Mise en ligne et suivi après livraison',
]

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink text-paper-50">
      <div
        className="pointer-events-none absolute -right-40 top-0 h-[34rem] w-[34rem] rounded-full bg-copper/20 blur-[120px]"
        aria-hidden="true"
      />
      <div className="container relative grid gap-16 pb-24 pt-16 sm:pt-24 lg:grid-cols-[1.35fr_1fr] lg:items-center lg:gap-20 lg:pb-32 lg:pt-28">
        <div>
          <p className="eyebrow text-copper-light">
            Développeur web indépendant · {siteConfig.city}
          </p>
          <h1 className="heading-xl mt-6">
            Un site internet qui vous amène <em className="text-copper-light">de vrais clients.</em>
          </h1>
          <p className="lead mt-7 max-w-xl text-stone-light">
            Je crée des sites clairs, rapides et bien référencés pour les artisans, commerçants et
            indépendants du {siteConfig.region}. Un seul interlocuteur, du premier appel à la mise en ligne.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <Link href="/contact">
                Demander un devis gratuit
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline-light">
              <a href={siteConfig.phoneHref}>
                <Phone className="h-4 w-4" aria-hidden="true" />
                {siteConfig.phone}
              </a>
            </Button>
          </div>

          <ul className="mt-10 flex flex-col gap-3 text-sm text-stone-light sm:flex-row sm:flex-wrap sm:gap-x-8">
            {promises.map((item) => (
              <li key={item} className="flex items-center gap-2">
                <Check className="h-4 w-4 text-copper-light" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-3xl border border-line-dark bg-ink-800/80 p-8 shadow-2xl shadow-black/30 sm:p-10">
          <p className="eyebrow text-stone-light">Votre site, clé en main</p>
          <ul className="mt-8 space-y-5">
            {included.map((item, i) => (
              <li key={item} className="flex items-baseline gap-4 border-b border-line-dark pb-5 last:border-0 last:pb-0">
                <span className="font-display text-xl text-copper-light">{String(i + 1).padStart(2, '0')}</span>
                <span className="text-paper-50">{item}</span>
              </li>
            ))}
          </ul>
          <Link
            href="/services"
            className="group mt-8 inline-flex items-center gap-2 text-sm font-medium text-copper-light"
          >
            Voir les formules
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  )
}
