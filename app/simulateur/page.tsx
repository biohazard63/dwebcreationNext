import { Clock, MessageCircle, ShieldCheck } from 'lucide-react'
import { PageHeader } from '@/components/shared/blocks'
import { Simulator } from '@/components/simulator/Simulator'
import { pageMetadata } from '@/lib/seo'
import { siteConfig } from '@/lib/site'

export const metadata = pageMetadata({
  title: 'Simulateur : quel site pour votre activité ?',
  description: `Répondez à 6 questions et découvrez la formule de site internet adaptée à votre activité. Gratuit, sans inscription. ${siteConfig.name}, ${siteConfig.city}.`,
  path: '/simulateur',
})

const points = [
  { icon: Clock, text: '1 minute, 6 questions' },
  { icon: ShieldCheck, text: 'Sans inscription ni engagement' },
  { icon: MessageCircle, text: 'Devis précis offert ensuite' },
]

export default function SimulatorPage() {
  return (
    <div className="overflow-x-clip">
      <PageHeader
        breadcrumbs={[{ name: 'Simulateur', href: '/simulateur' }]}
        chip="Simulateur"
        title={<>Quel site pour <span className="text-gradient">votre activité</span> ?</>}
        intro="Répondez à quelques questions : je vous indique la formule la plus adaptée et vous pouvez demander votre devis en un clic."
      />
      <section className="pb-24 sm:pb-32">
        <div className="container max-w-4xl">
          <ul className="mb-8 flex flex-wrap gap-x-8 gap-y-3 text-sm text-mist">
            {points.map((p) => (
              <li key={p.text} className="flex items-center gap-2">
                <p.icon className="h-4 w-4 text-flame" aria-hidden="true" />
                {p.text}
              </li>
            ))}
          </ul>
          <Simulator />
        </div>
      </section>
    </div>
  )
}
