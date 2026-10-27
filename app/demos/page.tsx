import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { Cta, PageHeader } from '@/components/shared/blocks'
import { Reveal } from '@/components/shared/Reveal'
import { SpotlightCard } from '@/components/home/Spotlight'
import { demos } from '@/lib/data/demos'
import { pageMetadata } from '@/lib/seo'

export const metadata = pageMetadata({
  title: 'Démos de sites internet par métier',
  description:
    'Essayez des exemples de sites interactifs pour menuisier, restaurant, coiffeur et fleuriste : galerie, réservation, prise de rendez-vous, boutique en ligne.',
  path: '/demos',
})

export default function DemosPage() {
  return (
    <div className="overflow-x-clip">
      <PageHeader
        chip="Démos"
        title={<>Essayez avant de <span className="text-gradient">choisir</span>.</>}
        intro="Des concepts de sites interactifs, chacun pensé pour un métier. Cliquez, filtrez, réservez : c’est exactement ce que vivront vos clients."
      />
      <section className="pb-24 sm:pb-32">
        <div className="container grid gap-4 md:grid-cols-2">
          {demos.map((demo, i) => (
            <Reveal key={demo.id} delay={(i % 2) * 90} className="h-full">
              <Link href={`/demos/${demo.id}`} className="group block h-full">
                <SpotlightCard className="flex h-full flex-col p-8">
                  <div className="flex items-center justify-between">
                    <span className="chip">Concept · {demo.label}</span>
                    <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 transition-all group-hover:border-transparent group-hover:bg-gradient-to-br group-hover:from-flame group-hover:to-blush group-hover:text-snow">
                      <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
                    </span>
                  </div>
                  <h2 className="mt-8 font-grotesk text-3xl font-semibold tracking-tight">{demo.business}</h2>
                  <p className="mt-1 text-sm text-mist">{demo.sector}</p>
                  <p className="mt-5 leading-relaxed text-mist">{demo.intro}</p>
                </SpotlightCard>
              </Link>
            </Reveal>
          ))}
        </div>
        <p className="container mt-8 text-sm text-mist">Toutes les entreprises présentées sont fictives.</p>
      </section>
      <Cta />
    </div>
  )
}
