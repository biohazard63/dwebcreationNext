import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { Cta, PageHeader } from '@/components/shared/blocks'
import { Reveal } from '@/components/shared/Reveal'
import { SpotlightCard } from '@/components/home/Spotlight'
import { metiers } from '@/lib/data/metiers'
import { pageMetadata } from '@/lib/seo'
import { siteConfig } from '@/lib/site'

export const metadata = pageMetadata({
  title: `Création de site internet par métier à ${siteConfig.city}`,
  description: `Artisans, restaurants, commerces, beauté, professions libérales, associations : un site internet pensé pour votre métier, à ${siteConfig.city} et dans le ${siteConfig.region}.`,
  path: '/site-internet',
})

export default function MetiersPage() {
  return (
    <div className="overflow-x-clip">
      <PageHeader
        breadcrumbs={[{ name: 'Par métier', href: '/site-internet' }]}
        chip="Par métier"
        title={<>Un site pensé pour <span className="text-gradient">votre métier</span>.</>}
        intro={`Chaque activité a ses besoins. Découvrez ce que votre site doit contenir pour attirer des clients à ${siteConfig.city} et dans le ${siteConfig.region}.`}
      />
      <section className="pb-24 sm:pb-32">
        <div className="container grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {metiers.map((m, i) => (
            <Reveal key={m.slug} delay={(i % 3) * 90} className="h-full">
              <Link href={`/site-internet/${m.slug}`} className="group block h-full">
                <SpotlightCard className="flex h-full flex-col p-8">
                  <div className="flex items-start justify-between gap-4">
                    <h2 className="font-grotesk text-2xl font-semibold tracking-tight">{m.name}</h2>
                    <ArrowUpRight className="h-5 w-5 flex-none text-mist transition-colors group-hover:text-flame" aria-hidden="true" />
                  </div>
                  <p className="mt-4 leading-relaxed text-mist">{m.headline}</p>
                  <p className="mt-auto pt-6 text-sm text-mist-dark">{m.examples}</p>
                </SpotlightCard>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
      <Cta />
    </div>
  )
}
