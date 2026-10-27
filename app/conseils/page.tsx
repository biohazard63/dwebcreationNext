import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { Cta, PageHeader } from '@/components/shared/blocks'
import { Reveal } from '@/components/shared/Reveal'
import { SpotlightCard } from '@/components/home/Spotlight'
import { articles, readingTime } from '@/lib/data/articles'
import { pageMetadata } from '@/lib/seo'

export const metadata = pageMetadata({
  title: 'Conseils pour votre site internet',
  description:
    'Prix d’un site, Google Maps, erreurs à éviter : des conseils concrets pour les artisans et commerçants qui veulent plus de clients grâce à internet.',
  path: '/conseils',
})

const dateFormat = new Intl.DateTimeFormat('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })

export default function ArticlesPage() {
  return (
    <div className="overflow-x-clip">
      <PageHeader
        breadcrumbs={[{ name: 'Conseils', href: '/conseils' }]}
        chip="Conseils"
        title={<>Des conseils <span className="text-gradient">sans jargon</span>.</>}
        intro="Pour comprendre ce qui fait vraiment venir des clients sur internet, et faire les bons choix pour votre site."
      />
      <section className="pb-24 sm:pb-32">
        <div className="container grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article, i) => (
            <Reveal key={article.slug} delay={(i % 3) * 90} className="h-full">
              <Link href={`/conseils/${article.slug}`} className="group block h-full">
                <SpotlightCard className="flex h-full flex-col p-8">
                  <p className="text-sm text-mist">
                    <time dateTime={article.date}>{dateFormat.format(new Date(article.date))}</time> · {readingTime(article)} min de lecture
                  </p>
                  <h2 className="mt-4 font-grotesk text-2xl font-semibold tracking-tight">{article.title}</h2>
                  <p className="mt-4 leading-relaxed text-mist">{article.description}</p>
                  <span className="mt-auto inline-flex items-center gap-1.5 pt-6 text-sm font-medium group-hover:text-flame">
                    Lire l’article
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </span>
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
