import { Cta, Faq, Heading, JsonLd, Method, OffersDetailed, PageHeader } from '@/components/shared/blocks'
import { Reveal } from '@/components/shared/Reveal'
import { SpotlightCard } from '@/components/home/Spotlight'
import { faqJsonLd, pageMetadata } from '@/lib/seo'
import { siteConfig } from '@/lib/site'

export const metadata = pageMetadata({
  title: `Création de site internet à ${siteConfig.city} — Formules`,
  description: `Site vitrine, réservation en ligne, boutique ou refonte : des formules claires pour les artisans, commerçants et indépendants de ${siteConfig.city} et du ${siteConfig.region}. Devis gratuit.`,
  path: '/services',
})

const extras = [
  {
    title: 'Référencement local',
    text: 'Optimisation des pages pour votre ville et votre zone d’intervention, et aide à la configuration de votre fiche Google Business Profile.',
  },
  {
    title: 'Maintenance & évolutions',
    text: 'Mises à jour, nouvelles pages, modifications de contenu : votre site évolue avec votre activité.',
  },
  {
    title: 'Applications sur mesure',
    text: 'Besoin d’un outil spécifique (espace client, gestion interne, tableau de bord) ? Parlons-en.',
  },
]

export default function ServicesPage() {
  return (
    <div className="overflow-x-clip">
      <JsonLd data={faqJsonLd()} />
      <PageHeader
        chip="Services"
        title={<>Des formules <span className="text-gradient">simples</span>, adaptées à votre métier.</>}
        intro="Que vous partiez de zéro ou que votre site actuel ne vous apporte rien, il existe une formule pour vous. Chacune est chiffrée sur devis, gratuitement et sans engagement."
      />

      <section className="pb-24 sm:pb-32">
        <div className="container">
          <OffersDetailed />
        </div>
      </section>

      <section className="py-24 sm:py-32">
        <div className="container">
          <Heading chip="En complément" title={<>Ce que je peux faire <span className="text-gradient">en plus</span>.</>} />
          <div className="mt-14 grid gap-4 md:grid-cols-3">
            {extras.map((item, i) => (
              <Reveal key={item.title} delay={i * 90} className="h-full">
                <SpotlightCard className="h-full p-8">
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="mt-3 leading-relaxed text-mist">{item.text}</p>
                </SpotlightCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Method />
      <Faq />
      <Cta />
    </div>
  )
}
