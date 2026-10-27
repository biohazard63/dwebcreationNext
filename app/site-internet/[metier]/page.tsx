import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowRight, Check } from 'lucide-react'
import { DemoDevices, type DemoId } from '@/components/demos/DemoDevices'
import { Cta, Heading, JsonLd, Method, PageHeader } from '@/components/shared/blocks'
import { Reveal } from '@/components/shared/Reveal'
import { SpotlightCard } from '@/components/home/Spotlight'
import { getDemo } from '@/lib/data/demos'
import { getMetier, metiers } from '@/lib/data/metiers'
import { offers } from '@/lib/data/offers'
import { pageMetadata } from '@/lib/seo'
import { siteConfig } from '@/lib/site'

type Props = { params: Promise<{ metier: string }> }

export const dynamicParams = false

export function generateStaticParams() {
  return metiers.map((m) => ({ metier: m.slug }))
}

export async function generateMetadata({ params }: Props) {
  const metier = getMetier((await params).metier)
  if (!metier) return {}
  return pageMetadata({
    title: `Site internet pour ${metier.plural} à ${siteConfig.city}`,
    description: `${metier.headline} Création de sites internet pour ${metier.plural} à ${siteConfig.city} et dans le ${siteConfig.region}. Devis gratuit.`,
    path: `/site-internet/${metier.slug}`,
  })
}

export default async function MetierPage({ params }: Props) {
  const metier = getMetier((await params).metier)
  if (!metier) notFound()
  const offer = offers.find((o) => o.id === metier.offerId)
  const demo = metier.demoId ? getDemo(metier.demoId) : undefined
  const others = metiers.filter((m) => m.slug !== metier.slug)

  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: metier.faq.map((f) => ({ '@type': 'Question', name: f.question, acceptedAnswer: { '@type': 'Answer', text: f.answer } })),
  }

  return (
    <div className="overflow-x-clip">
      <JsonLd data={faqLd} />
      <PageHeader
        chip={`${metier.name} · ${siteConfig.city}`}
        title={<>Site internet pour <span className="text-gradient">{metier.plural}</span> à {siteConfig.city}</>}
        intro={metier.intro}
      />

      <section className="pb-20">
        <div className="container flex flex-col gap-3 sm:flex-row">
          <Link
            href={`/contact?projet=${metier.offerId}`}
            className="group inline-flex h-14 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-flame via-blush to-violet px-8 font-medium text-snow"
          >
            Demander un devis gratuit
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </Link>
          <Link href="/simulateur" className="inline-flex h-14 items-center justify-center rounded-full border border-white/15 px-8 font-medium hover:bg-white/5">
            Lancer le simulateur
          </Link>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="container">
          <Heading chip="Vos enjeux" title={metier.headline} />
          <div className="mt-14 grid gap-4 md:grid-cols-3">
            {metier.needs.map((need, i) => (
              <Reveal key={need.title} delay={i * 90} className="h-full">
                <SpotlightCard className="h-full p-8">
                  <span className="text-gradient font-grotesk text-5xl font-semibold">{String(i + 1).padStart(2, '0')}</span>
                  <h3 className="mt-5 text-xl font-semibold">{need.title}</h3>
                  <p className="mt-3 leading-relaxed text-mist">{need.text}</p>
                </SpotlightCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {demo && (
        <section className="py-20 sm:py-24">
          <div className="container">
            <Heading chip="Exemple" title={<>À quoi pourrait ressembler <span className="text-gradient">votre site</span>.</>} intro={`Concept interactif « ${demo.business} » (entreprise fictive) : essayez-le.`} />
            <div className="mt-14">
              <DemoDevices id={demo.id as DemoId} />
            </div>
            <div className="mt-16 text-center md:mt-20">
              <Link href={`/demos/${demo.id}`} className="font-medium text-flame hover:underline">
                Voir la démo en détail
              </Link>
            </div>
          </div>
        </section>
      )}

      <section className="py-20 sm:py-24">
        <div className="container grid gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <p className="chip">Fonctionnalités utiles</p>
            <ul className="mt-8 space-y-4 text-lg">
              {metier.features.map((f) => (
                <li key={f} className="flex gap-3">
                  <Check className="mt-1 h-5 w-5 flex-none text-flame" aria-hidden="true" />
                  {f}
                </li>
              ))}
            </ul>
          </Reveal>
          {offer && (
            <Reveal className="glass rounded-3xl p-8 sm:p-10">
              <p className="text-sm text-mist">Formule conseillée</p>
              <h2 className="text-gradient mt-2 font-grotesk text-4xl font-semibold tracking-tight">{offer.name}</h2>
              <p className="mt-4 text-mist">{offer.pitch}</p>
              <Link href={`/services#${offer.id}`} className="mt-8 inline-flex items-center gap-2 font-medium hover:text-flame">
                Détail de la formule
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </Reveal>
          )}
        </div>
      </section>

      <Method />

      <section className="py-20 sm:py-24">
        <div className="container grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
          <Heading chip="Questions" title={`Questions de ${metier.plural}`} />
          <Reveal className="space-y-3">
            {metier.faq.map((item) => (
              <details key={item.question} className="group glass rounded-2xl px-6 py-5 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-lg font-medium">
                  {item.question}
                  <span className="flex h-8 w-8 flex-none items-center justify-center rounded-full border border-white/15 text-lg transition-all group-open:rotate-45" aria-hidden="true">
                    +
                  </span>
                </summary>
                <p className="mt-4 leading-relaxed text-mist">{item.answer}</p>
              </details>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="py-12">
        <div className="container">
          <p className="text-sm text-mist">Autres métiers</p>
          <div className="mt-4 flex flex-wrap gap-3">
            {others.map((m) => (
              <Link key={m.slug} href={`/site-internet/${m.slug}`} className="chip text-sm hover:border-white/30 hover:text-white">
                {m.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Cta />
    </div>
  )
}
