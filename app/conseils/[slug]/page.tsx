import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowRight, Check } from 'lucide-react'
import { Cta, JsonLd, PageHeader } from '@/components/shared/blocks'
import { articles, getArticle, readingTime } from '@/lib/data/articles'
import { pageMetadata } from '@/lib/seo'
import { siteConfig } from '@/lib/site'

type Props = { params: Promise<{ slug: string }> }

export const dynamicParams = false

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }))
}

export async function generateMetadata({ params }: Props) {
  const article = getArticle((await params).slug)
  if (!article) return {}
  const base = pageMetadata({ title: article.seoTitle, description: article.description, path: `/conseils/${article.slug}` })
  return {
    ...base,
    keywords: article.keywords,
    openGraph: { ...base.openGraph, type: 'article', publishedTime: article.date },
  }
}

const dateFormat = new Intl.DateTimeFormat('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })

export default async function ArticlePage({ params }: Props) {
  const article = getArticle((await params).slug)
  if (!article) notFound()
  const others = articles.filter((a) => a.slug !== article.slug)

  const articleLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: article.title,
    description: article.description,
    datePublished: article.date,
    dateModified: article.date,
    inLanguage: 'fr-FR',
    mainEntityOfPage: `${siteConfig.url}/conseils/${article.slug}`,
    author: { '@type': 'Person', name: siteConfig.owner, url: `${siteConfig.url}/about` },
    publisher: { '@id': `${siteConfig.url}/#entreprise` },
  }

  return (
    <div className="overflow-x-clip">
      <JsonLd data={articleLd} />
      <PageHeader
        breadcrumbs={[{ name: 'Conseils', href: '/conseils' }, { name: article.title, href: `/conseils/${article.slug}` }]}
        chip={`${dateFormat.format(new Date(article.date))} · ${readingTime(article)} min de lecture`}
        title={article.title}
        intro={article.intro}
      />

      <article className="pb-20">
        <div className="container">
          <div className="prose prose-lg max-w-3xl dark:prose-invert prose-headings:font-grotesk prose-headings:font-semibold prose-headings:tracking-tight prose-a:text-flame prose-li:marker:text-flame">
            {article.sections.map((section) => (
              <section key={section.title}>
                <h2>{section.title}</h2>
                {section.paragraphs.map((p) => (
                  <p key={p}>{p}</p>
                ))}
                {section.list && (
                  <ul>
                    {section.list.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>

          <aside className="glass mt-14 max-w-3xl rounded-3xl p-8">
            <p className="text-sm text-mist">Pour aller plus loin</p>
            <ul className="mt-4 space-y-3">
              {article.related.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="group inline-flex items-center gap-2 font-medium hover:text-flame">
                    <Check className="h-4 w-4 text-flame" aria-hidden="true" />
                    {link.label}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-mist">
              Écrit par {siteConfig.owner}, développeur web indépendant à {siteConfig.city}.
            </p>
          </aside>

          {others.length > 0 && (
            <div className="mt-14 max-w-3xl">
              <p className="text-sm text-mist">Autres conseils</p>
              <ul className="mt-4 space-y-3">
                {others.map((a) => (
                  <li key={a.slug}>
                    <Link href={`/conseils/${a.slug}`} className="font-medium hover:text-flame">
                      {a.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </article>

      <Cta />
    </div>
  )
}
