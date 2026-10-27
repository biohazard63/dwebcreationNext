import { FaqSection, FinalCta, JsonLd, MethodSection, OffersGrid, PageHeader, SectionHeading } from '@/components/shared/blocks'
import { Reveal } from '@/components/shared/Reveal'
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
    <>
      <JsonLd data={faqJsonLd()} />
      <PageHeader
        eyebrow="Services"
        title="Des formules simples, adaptées à votre métier."
        intro="Que vous partiez de zéro ou que votre site actuel ne vous apporte rien, il existe une formule pour vous. Chacune est chiffrée sur devis, gratuitement et sans engagement."
      />

      <section className="section">
        <div className="container">
          <OffersGrid />
        </div>
      </section>

      <section className="section bg-paper">
        <div className="container">
          <SectionHeading
            eyebrow="En complément"
            title="Ce que je peux faire en plus."
          />
          <div className="mt-14 grid gap-10 md:grid-cols-3">
            {extras.map((item, i) => (
              <Reveal key={item.title} delay={i * 90} className="border-t border-line pt-8">
                <h3 className="text-xl font-medium">{item.title}</h3>
                <p className="mt-3 leading-relaxed text-ink-600">{item.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <MethodSection />
      <FaqSection />
      <FinalCta />
    </>
  )
}
