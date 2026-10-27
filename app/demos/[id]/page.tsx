import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowRight, Check } from 'lucide-react'
import { DemoDevices, type DemoId } from '@/components/demos/DemoDevices'
import { Cta, PageHeader } from '@/components/shared/blocks'
import { Reveal } from '@/components/shared/Reveal'
import { demos, getDemo } from '@/lib/data/demos'
import { getMetier } from '@/lib/data/metiers'
import { offers } from '@/lib/data/offers'
import { pageMetadata } from '@/lib/seo'

type Props = { params: Promise<{ id: string }> }

export const dynamicParams = false

export function generateStaticParams() {
  return demos.map((d) => ({ id: d.id }))
}

export async function generateMetadata({ params }: Props) {
  const demo = getDemo((await params).id)
  if (!demo) return {}
  return pageMetadata({
    title: `Démo : site internet pour ${demo.label.toLowerCase()}`,
    description: `${demo.feature} Essayez ce concept de site interactif pensé pour un ${demo.label.toLowerCase()}.`,
    path: `/demos/${demo.id}`,
  })
}

export default async function DemoPage({ params }: Props) {
  const demo = getDemo((await params).id)
  if (!demo) notFound()
  const offer = offers.find((o) => o.id === demo.offerId)
  const metier = getMetier(demo.metier)
  const others = demos.filter((d) => d.id !== demo.id)
  const recap = `Je souhaite un site dans l’esprit de la démo « ${demo.label} ».`

  return (
    <div className="overflow-x-clip">
      <PageHeader
        breadcrumbs={[{ name: 'Démos', href: '/demos' }, { name: demo.label, href: `/demos/${demo.id}` }]}
        chip={`Concept · ${demo.label}`}
        title={<>{demo.business}</>}
        intro={demo.intro}
      />

      <section className="pb-24">
        <div className="container">
          <DemoDevices id={demo.id as DemoId} />
          <p className="mt-16 text-center text-sm text-mist md:mt-20">
            Essayez : le site est interactif. Entreprise fictive, contenus d’exemple.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="container grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <Reveal>
            <p className="chip">Ce que contient ce site</p>
            <ul className="mt-8 space-y-4 text-lg">
              {demo.includes.map((item) => (
                <li key={item} className="flex gap-3">
                  <Check className="mt-1 h-5 w-5 flex-none text-flame" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal className="glass flex flex-col justify-between rounded-3xl p-8 sm:p-10">
            <div>
              <p className="text-sm text-mist">Formule correspondante</p>
              <h2 className="text-gradient mt-2 font-grotesk text-4xl font-semibold tracking-tight">{offer?.name}</h2>
              <p className="mt-4 text-mist">{offer?.pitch}</p>
            </div>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link
                href={`/contact?${new URLSearchParams({ projet: demo.offerId, recap })}`}
                className="group inline-flex h-14 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-flame via-blush to-violet px-7 font-medium text-snow"
              >
                Je veux le même
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </Link>
              {metier && (
                <Link href={`/site-internet/${metier.slug}`} className="inline-flex h-14 items-center justify-center rounded-full border border-white/15 px-7 text-sm hover:bg-white/5">
                  Sites pour {metier.plural}
                </Link>
              )}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <p className="text-sm text-mist">Autres démos</p>
          <div className="mt-4 flex flex-wrap gap-3">
            {others.map((d) => (
              <Link key={d.id} href={`/demos/${d.id}`} className="chip text-sm hover:border-white/30 hover:text-white">
                {d.label} · {d.business}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Cta />
    </div>
  )
}
