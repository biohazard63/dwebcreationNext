import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { FinalCta, PageHeader } from '@/components/shared/blocks'
import { Reveal } from '@/components/shared/Reveal'
import { projects } from '@/lib/data/projects'
import { pageMetadata } from '@/lib/seo'
import { siteConfig } from '@/lib/site'

export const metadata = {
  ...pageMetadata({
    title: 'Réalisations',
    description: `Quelques sites internet réalisés par ${siteConfig.name} pour des professionnels de ${siteConfig.city} et du ${siteConfig.region}.`,
    path: '/portfolio',
  }),
  // Page masquée des moteurs de recherche tant qu'aucun projet n'est publié
  ...(projects.length === 0 && { robots: { index: false, follow: true } }),
}

export default function PortfolioPage() {
  return (
    <>
      <PageHeader
        eyebrow="Réalisations"
        title="Des sites qui travaillent pour leurs propriétaires."
        intro="Chaque projet part d’un métier, d’une clientèle et d’un objectif précis."
      />

      <section className="section">
        <div className="container">
          {projects.length === 0 ? (
            <Reveal className="mx-auto max-w-xl text-center">
              <p className="lead">
                Les réalisations seront bientôt présentées ici. En attendant, je vous montre volontiers des
                exemples de projets lors de notre premier échange.
              </p>
              <Link href="/contact" className="mt-8 inline-flex font-medium text-copper-dark hover:underline">
                Prendre contact
              </Link>
            </Reveal>
          ) : (
            <div className="grid gap-8 md:grid-cols-2">
              {projects.map((project) => (
                <Reveal key={project.title} as="article" className="flex flex-col rounded-2xl border border-line p-8">
                  <p className="text-sm text-stone">{project.sector}</p>
                  <h2 className="heading-md mt-2">{project.title}</h2>
                  <p className="mt-4 text-ink-600">{project.description}</p>
                  {project.results && <p className="mt-4 font-medium text-copper-dark">{project.results}</p>}
                  {project.url && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-auto inline-flex items-center gap-1 pt-6 text-sm font-medium text-copper-dark hover:underline"
                    >
                      Voir le site
                      <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                    </a>
                  )}
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </section>

      <FinalCta />
    </>
  )
}
